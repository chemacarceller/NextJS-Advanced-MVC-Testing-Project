import { userController } from "@/MVC/controllers/userController";

export default async function UsuariosPage() {
  return await userController();
}