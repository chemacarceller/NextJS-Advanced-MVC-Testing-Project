import { UserController } from "@/MVC/controllers/userController";

export default async function Page() {
  return await new UserController().listUsers();
}
