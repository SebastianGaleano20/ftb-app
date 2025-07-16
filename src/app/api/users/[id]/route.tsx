import {
  updateUserController,
  deleteUserController,
  getUserByIdController,
} from "@/controllers/userController";
export async function PUT(req: Request) {
  return updateUserController(req);
}

export async function DELETE(req: Request) {
  return deleteUserController(req);
}

export async function GET(req: Request) {
  return getUserByIdController(req);
}
