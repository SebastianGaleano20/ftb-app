import {
  createUser,
  getAllUsers,
  getUserByEmail,
  updateUser,
  deleteUser,
} from "@/services/userService";
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

export const getAllUsersController = async () => {
  try {
    const users = await getAllUsers();
    return Response.json(users, { status: 200 });
  } catch (error) {
    return new Response(`${error} - Error getting users`, { status: 500 });
  }
};

export const getUserByEmailController = async (req: Request) => {
  const { email } = await req.json();
  try {
    const user = await getUserByEmail(email);
    return Response.json(user, { status: 200 });
  } catch (error) {
    return new Response(`${error} - Error getting user`, { status: 500 });
  }
};

export const deleteUserController = async (req: Request) => {
  const { id } = await req.json();

  const idNumber = parseInt(id);
  try {
    const user = await deleteUser(idNumber);
    return Response.json(user, { status: 200 });
  } catch (error) {
    return new Response(`${error} - Error deleting user`, { status: 500 });
  }
};

export const updateUserController = async (req: Request) => {
  const { id } = await req.json();
  const idNumber = parseInt(id);
  const user: User = await req.json();
  try {
    const updatedUser = await updateUser(idNumber, user);
    return Response.json(updatedUser, { status: 200 });
  } catch (error) {
    return new Response(`${error} - Error updating user`, { status: 500 });
  }
};
