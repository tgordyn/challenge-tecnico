# Desafío de código Technisys

En este proyecto se realizó una web responsive para una aplicación bancaria siguiendo los [requerimientos] (https://docs.google.com/document/d/1TwYAkyg5cQlzIUwd2JgdbxYnxAIbekJP-6tqP_EbcHc/edit#) y los [diseños provistos] (https://www.figma.com/file/23wUs8klLodiU0IvJVGXpx/). Consiste de una primera vista simulando un form de Login, otra vista para Recuperación de contraseña y dos más básicas implementadas para el Home y para la confirmación de recuperación de los datos.


## Herramientas técnicas aplicadas

- Para la creación del proyecto básico se utilizó la funcionalidad de `create-react-app` 
- Para la navegación de páginas `react-router-dom`
- Componentes funcionales con `react`
- Estilos implementados con `styled-components` y `css`
- Iconos obtenidos desde `material-ui`
- Tipografía obtendida desde `fonts.google`
- "Formularios controlados" en sus estados en `react`
- Utilización de media queries para responsiveness
- Responsiveness implementado únicamente para pantalla chica, smartphone, con max-width de 480px según diseños
- Aplicación de criterios de accesibilidad. Testeado con Voice Over screen reader y AxeDev tools, extensión de Chrome

## Instalación

Una vez clonado el repositorio y parado en la raíz del proyecto instalar las dependencias corriendo `npm i`

## `npm start`

Correrá la aplicación en el modo desarrollador. Luego abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### Usuario registrado

Para simular el login se agregó un usuario hard codeado, utilizar esos datos para acceder:
{
      name: "pepe",
      pass: "hola"
}








