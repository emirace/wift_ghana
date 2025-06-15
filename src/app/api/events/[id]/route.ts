import dbConnect from "@/lib/mongodb";
import Event from "@/models/event";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

interface EventData {
  title: string;
  description: string;
  date: string;
  location: string;
}

interface Params {
  params: { id: string };
}

export async function GET(req: Request, { params }: Params) {
  const { id } = params;
  await dbConnect();
  try {
    const event = await Event.findById(id).lean();
    if (!event) {
      return new Response(JSON.stringify({ message: "Event not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(event), { status: 200 });
  } catch (error) {
    console.log("Error fetching event:", error);
    return new Response(JSON.stringify({ message: "Error fetching event" }), {
      status: 500,
    });
  }
}

export async function PUT(req: Request, { params }: Params) {
  const { id } = params;
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  await dbConnect();
  try {
    const data = (await req.json()) as EventData;
    const event = await Event.findByIdAndUpdate(id, data, { new: true }).lean();
    if (!event) {
      return new Response(JSON.stringify({ message: "Event not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(event), { status: 200 });
  } catch (error) {
    console.log("Error updating event:", error);
    return new Response(JSON.stringify({ message: "Error updating event" }), {
      status: 400,
    });
  }
}

export async function DELETE(req: Request, { params }: Params) {
  const { id } = params;
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  await dbConnect();
  try {
    const event = await Event.findByIdAndDelete(id).lean();
    if (!event) {
      return new Response(JSON.stringify({ message: "Event not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ message: "Event deleted" }), {
      status: 200,
    });
  } catch (error) {
    console.log("Error deleting event:", error);
    return new Response(JSON.stringify({ message: "Error deleting event" }), {
      status: 500,
    });
  }
}
