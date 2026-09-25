import * as userModel from "../models/userModel";
import { UserView } from "../views/userView";

export async function userController() {

  const listaUsuarios = await userModel.getAllUsers();

  const tituloPagina = `Panel de Usuarios (${listaUsuarios.length})`;

  return <UserView usuarios={listaUsuarios} titulo={tituloPagina} />;
}