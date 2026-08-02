# Dia Especial para Aranxita

Página web de sorpresa para el Día de la Novia (1 de agosto), hecha con mucho amor para Aranxita, de parte de Franxito.

Una página oscura y elegante con la historia de nosotros dos: la distancia entre Chile y México, nuestros dos países, y un amor que cruza continentes.

## Funcionalidades

- **4 temas de color**: morado (favorito de Aranxita), verde esmeralda con dorado, rojo vino tinto con oro y negro con oro. Se guardan en el navegador y se aplican antes de pintar la página para no parpadear.
- **Música de fondo**: Summertime suena en loop infinito con un botón para pausarla, y solo una pestaña reproduce a la vez (aunque abras varias, no se duplica el audio).
- **Página de fanfic** (`/fanfic`): una historia corta inspirada en nosotros, con barra de progreso de lectura, letra capital, diálogos destacados y botón de volver.
- **Banderas oficiales** de Chile y México, hechas en SVG.
- **Cero emojis**: todos los iconos son SVG dibujados con trazos (estilo Lucide).
- Corazones flotantes, destello de transición al cambiar de tema y animaciones suaves al hacer scroll.

## Stack

- [Astro](https://astro.build) 7
- [Tailwind CSS](https://tailwindcss.com) 4 (con el plugin oficial de Vite)
- Material 3 como paleta base por tema
- Tipografías: Playfair Display, Lora, Dancing Script y Roboto

## Puesta en marcha

```bash
npm install
npm run dev        # servidor de desarrollo en http://localhost:4321
```

Para compilar la versión final:

```bash
npm run build      # genera la página estática en dist/
npm run preview    # sirve la versión compilada localmente
```

## Estructura

```
src/
  components/
    Icon.astro        # mapa de iconos SVG (sin emojis)
    Controles.astro   # música, temas, corazones y animaciones
  pages/
    index.astro       # página principal
    fanfic.astro      # el fanfic
  styles/
    global.css        # temas de color, animaciones y estilos
public/
  audio/Summertime.mp3
  flags/chile.svg
  flags/mexico.svg
```

## Despliegue

Es una página 100% estática: basta con subir la carpeta `dist/` a cualquier hosting (GitHub Pages, Netlify, Vercel, Cloudflare Pages...).

Hecha con amor, para ti mi amor. Que nuestra historia siempre tenga música de fondo.
