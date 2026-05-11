# Bonelia React Web

Página web de Bonelia lista para subir a Vercel.

## Cómo subir
1. Descomprimir el ZIP.
2. Entrar a la carpeta `bonelia-react-web-fixed`.
3. Subir TODO el contenido a GitHub, incluyendo la carpeta `src`.
4. En Vercel: Add New Project → elegir el repo → Deploy.

Configuración esperada en Vercel:
- Framework: Vite
- Build command: npm run build
- Output directory: dist

## Archivos importantes
- `index.html` llama a `/src/main.jsx`.
- `src/main.jsx` contiene la página.
- `src/styles.css` contiene el diseño.
