# Prevenclick

Prototipo web de educación en seguridad e higiene y catálogo de elementos de protección. Incluye una página pública y paneles de administración para productos y fuentes de conocimiento de la IA.

## Abrir

Abrí `index.html` en el navegador. Los paneles se encuentran en `admin/productos.html` y `admin/conocimiento.html`.

## Qué incluye esta versión

- Sitio público adaptable a escritorio y móvil.
- Listado de productos con formulario para cargar productos.
- Listado de fuentes educativas con formulario para registrar material que luego podrá consultar la IA.
- Búsqueda y filtros en ambos paneles.
- Los registros agregados se guardan en `localStorage` del navegador para esta demostración.

## Para publicarlo en GitHub

1. Descomprimí la carpeta `prevenclick-github`.
2. Creá un repositorio en GitHub.
3. Subí el contenido de esta carpeta al repositorio (incluí `index.html`, `admin/` y `assets/`).
4. Si querés publicarlo como sitio estático, activá GitHub Pages desde la configuración del repositorio y elegí la rama/carpeta donde está `index.html`.

## Próxima etapa para producción

Esta entrega es la interfaz inicial: no incluye un servidor, una base de datos compartida, autenticación ni conexión real a un modelo de IA. Para producción, habría que conectar los paneles con una API y una base de datos, guardar los archivos en almacenamiento seguro y configurar la IA para consultar documentos revisados. No cargues credenciales ni información sensible en los archivos estáticos.

## Estructura

```text
prevenclick-github/
├── index.html
├── admin/
│   ├── productos.html
│   └── conocimiento.html
└── assets/
    ├── css/styles.css
    └── js/
        ├── app.js
        └── admin.js
```
