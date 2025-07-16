import { createUserController } from "@/controllers/userController";

export async function POST(req: Request) {
  return createUserController(req);
}
