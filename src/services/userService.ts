import { prisma } from "@/lib/prisma";
import type User from "@/types/services/index";
import bcrypt from "bcryptjs";

export const createUser = async (data: User) => {
  const { fullName, email, password } = data;

  const userExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExists) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      fullName,
      email,
      password: hashedPassword,
    },
  });

  return {
    user,
  };
};

export const getUserByid = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const getAllUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};

export const deleteUser = async (id: number) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  return user;
};

export const updateUser = async (id: number, data: User) => {
  const { fullName, email, password } = data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      fullName,
      email,
      password: hashedPassword,
    },
  });

  return user;
};
