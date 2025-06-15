"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { IEvent } from "@/models/event";
import { MdImage } from "react-icons/md";
import { compressImageUpload } from "@/lib/image";

interface FormData {
  title: string;
  description: string;
  date: string;
  location: string;
  imageId?: string;
}

export default function ClientEventsAdmin() {
  const { status } = useSession();
  const [events, setEvents] = useState<IEvent[]>([]);
  const [form, setForm] = useState<FormData>({
    title: "",
    description: "",
    date: "",
    location: "",
    imageId: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean;
    eventId: string | null;
  }>({ open: false, eventId: null });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (status === "authenticated") {
      fetchEvents();
    }
  }, [status]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/events");
      if (!res.ok) throw new Error("Failed to fetch events");
      const data: IEvent[] = await res.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
      setToast({ message: "Failed to fetch events", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = editingId ? `/api/events/${editingId}` : "/api/events";
      const method = editingId ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to save event");

      setToast({
        message: editingId
          ? "Event updated successfully"
          : "Event created successfully",
        type: "success",
      });

      setForm({
        title: "",
        description: "",
        date: "",
        location: "",
        imageId: "",
      });
      setEditingId(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      fetchEvents();
    } catch (error) {
      console.error("Error saving event:", error);
      setToast({ message: "Failed to save event", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (event: IEvent) => {
    setEditingId(event._id as string);
    setForm({
      title: event.title,
      description: event.description,
      date: new Date(event.date).toISOString().split("T")[0],
      location: event.location,
      imageId: event.imageId,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/events/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete event");
      setToast({ message: "Event deleted successfully", type: "success" });
      fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
      setToast({ message: "Failed to delete event", type: "error" });
    } finally {
      setLoading(false);
      setDeleteDialog({ open: false, eventId: null });
    }
  };

  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);

      const file = e.target.files?.[0];
      if (!file) throw Error("No image found");

      const imageUrl = await compressImageUpload(file, 1024);

      setForm({ ...form, imageId: imageUrl });

      setToast({ message: "Image uploaded", type: "success" });
    } catch (err) {
      console.error("Error uploading image:", err);
      setToast({ message: "Failed uploading image", type: "error" });
    } finally {
      setUploading(false);
    }
  };

  if (status === "loading")
    return (
      <div className="flex justify-center items-center h-screen flex-1">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-l-2 border-t-primary-green border-l-primary-maron"></div>
      </div>
    );

  return (
    <div className="container max-w-6xl mx-auto p-4 sm:p-6">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-md shadow-lg text-white ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Manage Events
        </h1>
        <button
          onClick={() => signOut()}
          className="mt-2 sm:mt-0 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Sign Out
        </button>
      </header>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          {editingId ? "Edit Event" : "Create Event"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Event title"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              placeholder="Event description"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring Nim-blue-500 focus:border-blue-500"
              rows={4}
              required
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              id="date"
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              id="location"
              type="text"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              placeholder="Event location"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Event Image
            </label>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {/* Image icon from react-icons */}
              <span className="mr-2 text-gray-600">
                <svg className="hidden" /> {/* fallback for SSR */}
                <MdImage size={20} />
              </span>
              <span className="text-gray-700">Upload Image</span>
              {uploading && (
                <div className="animate-spin rounded-full border-t w-5 h-5 ml-4" />
              )}
            </button>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              className="hidden"
            />
            {form.imageId && (
              <div className="mt-2">
                <Image
                  src={form.imageId}
                  alt="Preview"
                  width={200}
                  height={100}
                  className="rounded-lg object-cover"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300"
          >
            {loading
              ? "Saving..."
              : editingId
              ? "Update Event"
              : "Create Event"}
          </button>
        </form>
      </div>

      {/* Event List */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        Events
      </h2>
      {loading && (
        <p className="text-center text-gray-500">Loading events...</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {events.map((event) => (
          <div
            key={event._id as string}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {event.imageId && (
              <Image
                src={event.imageId}
                alt={event.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {event.title}
              </h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <p className="text-gray-500 mt-1">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-gray-500">{event.location}</p>
              <div className="mt-4 flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                <button
                  onClick={() => handleEdit(event)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    setDeleteDialog({
                      open: true,
                      eventId: event._id as string,
                    })
                  }
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Dialog */}
      {deleteDialog.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-800">
              Confirm Deletion
            </h3>
            <p className="text-gray-600 mt-2">
              Are you sure you want to delete this event?
            </p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setDeleteDialog({ open: false, eventId: null })}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  deleteDialog.eventId && handleDelete(deleteDialog.eventId)
                }
                disabled={loading}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:bg-red-300"
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
