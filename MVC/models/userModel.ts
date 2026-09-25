export interface Usuario {
  id: number;
  nombre: string;
  rol: string;
}

const usuariosBD: Usuario[] = [
  { id: 1, nombre: "Ana López", rol: "Administrador" },
  { id: 2, nombre: "Carlos Gómez", rol: "Editor" },
  { id: 3, nombre: "Elena Rivas", rol: "Usuario" }
];

export async function getAllUsers(): Promise<Usuario[]> {
  return usuariosBD;
}