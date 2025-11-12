# Task Manager – Prueba Técnica Frontend Developer

Aplicación web tipo **Task Manager** desarrollada con **Next.js (App Router)**, **Supabase**, **TanStack React Query** y **Carbon Design System**.  
Permite **listar, agregar y marcar tareas como completadas**, gestionando el estado de forma reactiva y optimizada.

---

## Instrucciones para correr el proyecto localmente

1- **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
```

2- **Instalar dependencias**
```bash
npm install
```

2-**Configurar variables de entorno**
Crea un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

```bash
NEXT_PUBLIC_SUPABASE_URL="(las claves se brindaron por correo o en la prueba)"
NEXT_PUBLIC_SUPABASE_ANON_KEY="(las claves se brindaron por correo o en la prueba)"
```

4- **Levantar el servidor de desarrollo**
```bash
npm run dev
```