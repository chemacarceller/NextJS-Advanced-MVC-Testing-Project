import Script from 'next/script';

export interface Usuario {
  id: number;
  nombre: string;
  rol: string;
}

interface UserViewProps {
  usuarios: Usuario[];
  titulo: string;
}

export function UserView({ usuarios, titulo }: UserViewProps) {
  return (
    <>
    <Script src="/js/users.js" strategy="afterInteractive" />
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>{titulo}</h1>
      <p>Gestión de miembros del equipo:</p>
      
      <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
        {usuarios.map((user) => (
          <div key={user.id} style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
            <strong>{user.nombre}</strong> — <span style={{ color: "#666" }}>{user.rol}</span>
          </div>
        ))}
      </div>
    </main>
    </>
  );
}