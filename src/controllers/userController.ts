import { createUser } from "@/services/userService";
import type User from "@/types/services/index";

export const createUserController = async (req: Request) => {
  const user: User = await req.json();

  try {
    const newUser = await createUser(user);
    return Response.json(newUser, { status: 201 });
  } catch (error) {
    return new Response(`${error} - Error creating user`, { status: 500 });
  }
};
