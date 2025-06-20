# Proyecto 11 - Aplicación del Clima en React

## _React Básico_

Este proyecto es una **aplicación web** desarrollada con **React** que permite consultar el pronóstico del tiempo utilizando la **API de AccuWeather**.

## Características principales

- Hay 2 modos: uno te permite obtener información del tiempo más genérica de hasta 4 ciudades, y el otro modo te permite buscar una ciudad y obtener información detallada del clima.
- Primer contacto con React en un proyecto real.
- Interfaz intuitiva con instrucciones paso a paso en la Home para mejorar la experiencia de usuario **(UI/UX)**

## Consideraciones técnicas

- **Límite de peticiones:** AccuWeather ofrece un plan gratuito que permite un máximo de **25 peticiones por dia**.
- **Problemas CORS:** Para evitar errores relacionados con CORS, he desarrollado un pequeño backend que permite realizar correctamente las peticiones `fetch`.

## **++Tecnologías utilizas++**

- HTML, CSS y React
- Vite
- Fetch API para solicitudes HTTP

## Installation

Sigue estos pasos para instalar y ejecutarlo en tu entorno local:

### 1. Clonar el repositorio

Clona este repositorio en tu maquina local usando el siguiente comando en la consola:

```sh
git clone https://github.com/Iskoh10/proyecto-11-basic-react.git
```

### 2. Acceder al directorio del proyecto

Navega al directorio del proyecto clonado:

```sh
cd proyecto-11-basic-react.git
```

### 3. Instalar las dependencias

Instala las dependencias necesarias:

```sh
npm install
```

### 4. Iniciar el servidor de desarrollo

Ejecuta el servidor con el comando:

```sh
npm run dev
```

### 5. Estructura del proyecto

```
📁 PROYECTO 11_REACT_BASICS
├── 📁 backend
├── 📁 public
├── 📁 src
│ ├── 📁 components
│ ├── 📁 services
│ ├── 📁 pages
│ ├── 📁 utils
│ ├── main.jsx
│ ├── index.css
│ ├── App.css
│ └── App.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## License

**Free Software, Hell Yeah!**
