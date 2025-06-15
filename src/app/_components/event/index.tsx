"use client";

import { IEvent } from "@/models/event";
import UpcomingEventCard from "./_components/upcomingEventCard";
import { useEffect, useState } from "react";
import axios from "axios";

const UpcomingEventSection = () => {
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get<IEvent[]>("/api/events");
        setEvents(res.data);
      } catch (error) {
        console.log("Error fetching events:", error);
        setEvents([]);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="container max-w-7xl mx-auto my-8 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-maron mb-10">
        Up Coming Events
      </h2>
      {events.length > 0 ? (
        <>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {events.slice(0, 4).map((event) => (
              <UpcomingEventCard
                key={event._id as string}
                {...event}
                date={event.date as unknown as string}
              />
            ))}
          </div>
          {/* <Link href={'/#'} className="flex justify-center items-center mt-8">
            <button className={`${buttonStyle}`}>MORE EVENT</button>
          </Link> */}
        </>
      ) : (
        <div className="text-center py-8">
          <p>There are no upcoming events at this time.</p>
        </div>
      )}
    </div>
  );
};

export default UpcomingEventSection;
