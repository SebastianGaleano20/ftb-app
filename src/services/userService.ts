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
