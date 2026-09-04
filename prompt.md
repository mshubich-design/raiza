# Prompt maestro · Información estructurada

Este archivo contiene una instrucción base para utilizar IA como apoyo
en la investigación, organización y transformación de información.

La idea no es pedir directamente una página terminada.

El flujo de trabajo es:

```text
INFORMACIÓN
↓
MARKDOWN
↓
HTML SEMÁNTICO
↓
CSS
```

---

# Prompt base

Quiero construir un documento digital sobre:

**[TEMA]**

Necesito organizar información sobre:

**[TIPO DE CONTENIDO O COLECCIÓN]**

Antes de generar HTML, investiga y estructura la información.

## Objetivo

Construye un documento de información estructurada que pueda utilizarse
posteriormente para generar una página web.

## Estructura

Cada elemento debe incluir los siguientes campos:

- [CAMPO 1]
- [CAMPO 2]
- [CAMPO 3]
- [CAMPO 4]
- [CAMPO 5]

Todos los elementos deben mantener exactamente la misma estructura.

## Reglas

- Organiza la información de manera consistente.
- No inventes datos.
- Si un dato no está disponible, indícalo.
- Mantén una jerarquía clara.
- Utiliza títulos y subtítulos cuando sea necesario.
- Utiliza listas cuando exista información repetitiva.
- Conserva enlaces a fuentes o recursos relevantes cuando corresponda.
- Prioriza fuentes confiables.
- No agregues diseño.
- No agregues CSS.
- No agregues JavaScript.
- Entrega el resultado en formato Markdown.

---

# Addon 01 · Orden y jerarquía

Agrega estas instrucciones cuando el contenido necesite un orden específico.

```text
Ordena los elementos utilizando el siguiente criterio:

[CRITERIO DE ORDEN]

Ejemplos:

- cronológico;
- cronológico descendente;
- alfabético;
- por categoría;
- por relevancia;
- por tamaño;
- por ubicación.

Define claramente:

1. título principal;
2. introducción;
3. grupos o secciones;
4. elementos individuales;
5. información secundaria;
6. fuentes o enlaces.
```

---

# Addon 02 · Markdown → HTML

Utiliza este addon después de revisar y aprobar el archivo Markdown.

```text
Utiliza `base.html` como estructura base del documento.

Utiliza `[ARCHIVO].md` como única fuente de contenido.

Convierte la información a HTML semántico.

Reglas:

- Conserva la estructura general de `base.html`.
- Mantén `header`, `main` y `footer`.
- Organiza el contenido dentro de `main`.
- Utiliza `section` para grupos temáticos.
- Utiliza `article` cuando exista una unidad de contenido independiente.
- Utiliza encabezados de acuerdo con su jerarquía.
- Utiliza `p` para párrafos.
- Utiliza listas cuando corresponda.
- Utiliza `a` para enlaces.
- Utiliza `img` para imágenes.
- Conserva la información y el orden definidos en Markdown.
- No inventes contenido.
- No agregues CSS nuevo.
- No agregues JavaScript.
- No agregues estilos inline.
- Conserva el enlace a `style.css`.
- Devuelve un documento HTML completo y válido.
```

---

# Ejemplo de definición de estructura

Antes de investigar podemos definir la forma de los datos.

```text
COLECCIÓN
│
├── ELEMENTO
│   ├── título
│   ├── fecha
│   ├── descripción
│   ├── imagen
│   └── enlace
│
├── ELEMENTO
│   └── ...
│
└── ELEMENTO
    └── ...
```

El tema puede cambiar.

La estructura debe ser consistente.

---

# Regla de trabajo

No pedir:

> Hazme una página sobre [tema].

Separar el problema:

1. definir qué información necesitamos;
2. estructurarla;
3. revisar el Markdown;
4. transformar esa estructura a HTML;
5. aplicar CSS después.

La IA ayuda a procesar y transformar información.

La estructura y las decisiones del proyecto siguen siendo responsabilidad
de quien diseña.
