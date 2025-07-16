import {
  createUserController,
  getAllUsersController,
} from "@/controllers/userController";

export async function POST(req: Request) {
  return createUserController(req);
}

export async function GET() {
  return getAllUsersController();
}
