import dbConnect from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcrypt";

interface RegisterRequest {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const { email, password } = (await req.json()) as RegisterRequest;

  await dbConnect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 400,
    });
  }

  // const hashedPassword = await bcrypt.hash(password, 10);
  //   const user = new User({ email, password: hashedPassword, role: "admin" });
  //   await user.save();

  return new Response(JSON.stringify({ message: "User created" }), {
    status: 201,
  });
}
