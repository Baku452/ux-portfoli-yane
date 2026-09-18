# Cómo actualizar Proyectos y Casos de Estudio

Esta guía es para editar el portafolio sin conocimientos de desarrollo. No hay un panel de administración: el contenido de ambas secciones está en un archivo del repositorio, [`src/content/homepage.ts`](src/content/homepage.ts).

## Antes de empezar

- Prepara el nombre del cliente, un título breve, una descripción y el enlace de cada elemento.
- Prepara el texto en **español e inglés**. La web usa `homepages.es` para `/es/` y `homepages.en` para `/`.
- Si trabajas en GitHub, crea una rama para tus cambios o pide revisión antes de incorporarlos a la rama principal. Si no tienes permisos para editar el repositorio, solicita acceso a la persona responsable.

## Qué campo controla cada parte

En `src/content/homepage.ts`, busca estos nombres dentro de **cada idioma**:

| Campo               | Dónde aparece                         | Cómo se edita                                                                         |
| ------------------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| `featuredProject`   | Tarjeta grande de Proyectos           | Reemplaza los textos del objeto existente. Solo hay una tarjeta destacada.            |
| `projects`          | Tarjetas pequeñas de Proyectos        | Añade, modifica o quita un bloque dentro de la lista.                                 |
| `featuredStudyCase` | Tarjeta grande de Casos de Estudio    | Reemplaza los textos del objeto existente. Solo hay un caso destacado.                |
| `studyCases`        | Tarjetas pequeñas de Casos de Estudio | Añade, modifica o quita un bloque dentro de la lista.                                 |
| `projectCount`      | Número de proyectos en la portada     | Se actualiza manualmente; hoy es `"03"`. No cuenta los Casos de Estudio por separado. |

Cada proyecto o caso tiene cuatro datos:

```ts
{
  client: "Nombre del cliente",
  title: "Título del trabajo",
  description: "Resumen claro de lo que se hizo y por qué importa.",
  url: "https://ejemplo.com/trabajo",
},
```

`client` es la etiqueta pequeña, `title` es el título, `description` es el párrafo y `url` es el destino al hacer clic. Conserva las comillas, las comas y las llaves; cambia solo el texto entre comillas.

## Añadir un proyecto

1. Abre [`src/content/homepage.ts`](src/content/homepage.ts) y busca `homepages.es` (la entrada que comienza con `es: {`).
2. Busca `projects: [` dentro de esa entrada. Copia uno de los bloques `{ ... },` existentes y pégalo **antes del `]`** de esa lista.
3. Cambia sus cuatro datos por los del nuevo proyecto.
4. Repite los pasos dentro de `homepages.en` (la entrada `en: {`) con los textos traducidos. Mantén el mismo orden en ambos idiomas.
5. Si aumentó el número de proyectos, actualiza `projectCount` cerca del inicio del archivo. Por ejemplo, si había tres proyectos en total y agregaste uno, cambia `"03"` por `"04"`.

Para cambiar el proyecto grande, edita `featuredProject` en ambos idiomas. No lo añadas a `projects` a menos que también quieras mostrarlo como tarjeta pequeña.

## Añadir un caso de estudio

1. En el mismo archivo, busca `studyCases: [` dentro de `homepages.es`.
2. Copia un bloque `{ ... },` existente y pégalo **antes del `]`** de esa lista.
3. Cambia `client`, `title`, `description` y `url`.
4. Repite el cambio en `homepages.en`, con la traducción correspondiente y el mismo orden.

Para cambiar el caso grande, edita `featuredStudyCase` en ambos idiomas. Los Casos de Estudio tienen datos independientes de Proyectos: cambiar uno no actualiza el otro. Añadir un caso tampoco cambia `projectCount`.

## Enlaces e imágenes: estado actual

- Los enlaces `"#projects"` y `"#study-cases"` que ves hoy solo llevan a esas secciones de la misma página. **No abren una ficha individual.** Puedes reemplazarlos por una URL completa que ya exista, por ejemplo `"https://ejemplo.com/caso"`. Para tener páginas individuales dentro de este sitio, primero hay que crearlas.
- Las tarjetas pequeñas muestran texto, sin una imagen propia. Las vistas previas de las tarjetas grandes están dibujadas en [`FeaturedProject.astro`](src/components/home/projects/FeaturedProject.astro) y [`FeaturedStudyCase.astro`](src/components/home/study-case/FeaturedStudyCase.astro). Subir una imagen al repositorio **no la coloca automáticamente** en esas tarjetas. Pide apoyo para modificar el componente si quieres mostrar una captura distinta.
- El botón «Ver más» también apunta hoy a su propia sección; no existe todavía una página de listado adicional.

## Guardar y comprobar

En GitHub, abre el archivo, usa la opción de editar, revisa los cambios y guárdalos mediante un commit en tu rama. Luego abre una solicitud de cambios para revisión si el equipo usa ese proceso. Comprueba las versiones en español e inglés una vez que los cambios estén publicados. La publicación depende de cómo esté conectado este repositorio al alojamiento del sitio.

Si alguien puede hacer una comprobación local, desde la carpeta del proyecto debe ejecutar:

```sh
npm install
npm run check
npm run build
```

Para ver el sitio localmente, inicia el servidor en segundo plano con `npx astro dev --background`. La dirección aparecerá en la terminal (normalmente `http://localhost:4321`). Usa `npx astro dev status` para consultar su estado y `npx astro dev stop` al terminar.

Antes de dar la actualización por terminada, revisa que cada tarjeta aparezca en `/` y `/es/`, que los textos se lean bien, que los enlaces lleven al destino esperado y que el número de proyectos mostrado en la portada sea correcto.
