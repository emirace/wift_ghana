import dbConnect from "@/lib/mongodb";
import Event from "@/models/event";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

interface EventData {
  title: string;
  description: string;
  date: string;
  location: string;
}

export async function GET() {
  await dbConnect();
  try {
    const events = await Event.find({}).sort({ date: -1 }).lean();
    return new Response(JSON.stringify(events), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching events" }), {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  await dbConnect();
  try {
    const data = (await req.json()) as EventData;
    console.log("Received event data:", data);
    const event = new Event(data);
    await event.save();
    return new Response(JSON.stringify(event), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error creating event" }), {
      status: 400,
    });
  }
}
