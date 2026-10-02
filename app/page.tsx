import { HomeController } from "@/MVC/controllers/homeController";

export default async function Page() {
  return await new HomeController().start();
}