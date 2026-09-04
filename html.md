# HTML

HTML es el lenguaje que utilizamos para **estructurar el contenido de una página web**.

HTML significa:

**HyperText Markup Language**  
**Lenguaje de Marcado de Hipertexto**

No es un lenguaje de programación. Es un **lenguaje de marcado**.

Utiliza etiquetas para describir qué es cada parte del contenido.

```html
<h1>Esto es un título</h1>

<p>Esto es un párrafo.</p>

<a href="#">Esto es un enlace</a>
```

HTML define la estructura y el significado del contenido.

---

# Etiquetas

HTML está compuesto por **etiquetas**.

Una etiqueta normalmente tiene una apertura:

```html
<p>
```

un contenido:

```text
Esto es un párrafo.
```

y un cierre:

```html
</p>
```

Juntos forman un elemento HTML:

```html
<p>Esto es un párrafo.</p>
```

Podemos entenderlo así:

```text
etiqueta de apertura
        ↓
       <p> Esto es un párrafo. </p>
            ↑                   ↑
         contenido          etiqueta de cierre
```

---

# Atributos

Los elementos HTML también pueden tener **atributos**.

Los atributos agregan información o modifican el comportamiento de un elemento.

```html
<a href="https://example.com">Visitar sitio</a>
```

En este ejemplo:

```text
a
└── href
    └── https://example.com
```

`a` define que el elemento es un enlace.

`href` indica hacia dónde dirige.

---

# Documento HTML

Un documento HTML tiene una estructura base.

```html
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Título del documento</title>

  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <h1>Hola mundo</h1>

  <p>Este es un documento HTML.</p>

</body>

</html>
```

La estructura principal puede entenderse así:

```text
html
├── head
└── body
```

---

# HTML

La etiqueta `<html>` contiene todo el documento.

```html
<html lang="es">
  ...
</html>
```

El atributo `lang` indica el idioma principal del contenido.

```html
lang="es"
```

---

# Head

`<head>` contiene información **sobre el documento**.

Esta información normalmente no forma parte del contenido visible de la página.

Aquí podemos definir:

- metadata;
- título del documento;
- favicon;
- hojas de estilo;
- configuraciones del navegador;
- otros recursos utilizados por la página.

Ejemplo:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Título del documento</title>

  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="style.css">
</head>
```

## Metadata

Las etiquetas `<meta>` describen información sobre el documento.

Por ejemplo:

```html
<meta charset="UTF-8">
```

define la codificación de caracteres.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

ayuda a que el documento se adapte correctamente al ancho de la pantalla.

También podemos agregar una descripción:

```html
<meta
  name="description"
  content="Descripción breve del contenido de la página."
>
```

## Title

`<title>` define el título del documento.

```html
<title>Mi página</title>
```

Este título puede aparecer en:

- la pestaña del navegador;
- marcadores;
- resultados de búsqueda;
- referencias al documento.

## Favicon

El favicon es el pequeño ícono asociado al sitio o documento.

```html
<link rel="icon" href="favicon.ico">
```

También puede utilizar otros formatos:

```html
<link rel="icon" type="image/png" href="favicon.png">
```

## Hojas de estilo

Desde `<head>` podemos conectar un archivo CSS externo.

```html
<link rel="stylesheet" href="style.css">
```

Esto mantiene separadas:

- la estructura en HTML;
- la presentación visual en CSS.

---

# Body

`<body>` contiene el **contenido visible de la página**.

```html
<body>

  <h1>Título</h1>

  <p>Contenido.</p>

</body>
```

Aquí encontramos elementos como:

- títulos;
- párrafos;
- imágenes;
- enlaces;
- listas;
- navegación;
- secciones;
- artículos.

---

# HTML semántico

Las etiquetas HTML no solamente contienen información.

También describen **qué función tiene esa información**.

Por ejemplo:

```html
<header>
  ...
</header>

<main>
  ...
</main>

<footer>
  ...
</footer>
```

Estas etiquetas ayudan a describir la estructura del documento.

---

# Header

`<header>` representa contenido introductorio.

Puede contener:

- título;
- descripción;
- identidad;
- navegación.

```html
<header>

  <h1>Título del sitio</h1>

  <p>Descripción del sitio.</p>

</header>
```

---

# Nav

`<nav>` representa un conjunto de enlaces de navegación.

```html
<nav>
  <a href="#inicio">Inicio</a>
  <a href="#proyectos">Proyectos</a>
  <a href="#contacto">Contacto</a>
</nav>
```

---

# Main

`<main>` representa el **contenido principal** del documento.

```html
<main>

  <h1>Contenido principal</h1>

  <p>Información de la página.</p>

</main>
```

Normalmente existe un solo `main` por documento.

---

# Section

`<section>` agrupa contenido relacionado por un mismo tema.

```html
<section>

  <h2>Título de sección</h2>

  <p>
    Contenido relacionado con esta sección.
  </p>

</section>
```

Una sección normalmente tiene su propio encabezado.

---

# Article

`<article>` representa una unidad de contenido que puede entenderse de manera independiente.

```html
<article>

  <h2>Título del artículo</h2>

  <p>
    Contenido del artículo.
  </p>

</article>
```

Por ejemplo:

- una noticia;
- una publicación;
- una entrada;
- una ficha;
- un elemento de una colección.

---

# Footer

`<footer>` representa información de cierre o complementaria.

```html
<footer>

  <p>Información del proyecto.</p>

</footer>
```

Puede contener:

- créditos;
- información legal;
- navegación secundaria;
- información de contacto.

---

# Jerarquía de títulos

HTML tiene seis niveles de encabezados:

```html
<h1>Título principal</h1>
<h2>Título de sección</h2>
<h3>Subsección</h3>
<h4>Nivel cuatro</h4>
<h5>Nivel cinco</h5>
<h6>Nivel seis</h6>
```

Los encabezados describen la **jerarquía del contenido**.

No deben seleccionarse solamente por su tamaño visual.

```text
h1
│
├── h2
│   ├── h3
│   └── h3
│
└── h2
    └── h3
```

CSS puede modificar posteriormente cómo se ve cada nivel.

HTML define qué nivel tiene.

---

# Párrafos

`<p>` representa un párrafo.

```html
<p>
  Este es un párrafo de contenido.
</p>
```

Un documento puede contener tantos párrafos como necesite.

---

# Enlaces

`<a>` crea un enlace.

```html
<a href="https://example.com">
  Visitar sitio
</a>
```

Un enlace está compuesto por:

```text
a
├── atributo: href
└── contenido: Visitar sitio
```

`href` define el destino:

```html
href="https://example.com"
```

El contenido define lo que la persona puede seleccionar:

```text
Visitar sitio
```

También podemos crear enlaces internos:

```html
<a href="#proyectos">Ver proyectos</a>
```

que apuntan a un elemento con un `id`:

```html
<section id="proyectos">
  <h2>Proyectos</h2>
</section>
```

---

# Imágenes

`<img>` permite insertar una imagen.

```html
<img
  src="imagen.jpg"
  alt="Descripción de la imagen"
>
```

A diferencia de otros elementos, `img` no contiene texto ni necesita una etiqueta de cierre.

Sus atributos contienen la información necesaria.

```text
img
├── src
└── alt
```

`src` indica dónde se encuentra la imagen:

```html
src="imagen.jpg"
```

`alt` describe su contenido o función:

```html
alt="Descripción de la imagen"
```

El texto alternativo es importante para la accesibilidad y para situaciones en las que la imagen no puede mostrarse.

---

# Elementos dentro de elementos

Los elementos HTML pueden contener otros elementos.

```html
<section>

  <h2>Título de sección</h2>

  <p>
    Este es el contenido de la sección.
  </p>

  <a href="#">
    Más información
  </a>

</section>
```

Podemos representar esta estructura como:

```text
section
├── h2
├── p
└── a
```

Una página completa puede tener una estructura como:

```text
html
├── head
│   ├── meta
│   ├── title
│   └── link
│
└── body
    ├── header
    │   ├── h1
    │   ├── p
    │   └── nav
    │       └── a
    │
    ├── main
    │   ├── section
    │   │   ├── h2
    │   │   ├── p
    │   │   └── a
    │   │
    │   └── section
    │       ├── h2
    │       └── article
    │           ├── h3
    │           └── p
    │
    └── footer
        └── p
```

Esta estructura describe las relaciones entre los contenidos.

---

# HTML y cajas

Los elementos HTML generan cajas que el navegador utiliza para calcular:

- tamaño;
- posición;
- espacio;
- relación con otros elementos.

Pero no todas las cajas tienen la misma función.

```text
h1      → título principal
p       → párrafo
a       → enlace
section → grupo temático
article → unidad de contenido
nav     → navegación
```

Podemos resumirlo así:

```text
HTML
¿Qué es cada elemento?

↓

ESTRUCTURA
¿Cómo se relaciona con los demás?

↓

CSS
¿Cómo se ve?
```

---

# HTML define qué es el contenido

Podemos pensar HTML a partir de preguntas:

- ¿Cuál es el título principal?
- ¿Qué contenido pertenece a una sección?
- ¿Qué es un párrafo?
- ¿Qué es un enlace?
- ¿Qué es una imagen?
- ¿Qué elementos forman la navegación?
- ¿Cómo se relaciona un contenido con otro?

HTML responde:

**¿Qué es cada elemento y cómo se organiza?**

CSS responderá después:

**¿Cómo se ve?**
