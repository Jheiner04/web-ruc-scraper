# Web ruc scraper

## Descripción

Este proyecto es un web scraper que extrae RUCs de una página web específica utilizando Node.js y los guarda en un archivo CSV. El script utiliza la biblioteca Cheerio para analizar el HTML de la página web y extraer la información necesaria.

## Requisitos

[Node.js](https://nodejs.org/) v10+

## Instalación

Para utilizar el scraper, primero debes clonar este repositorio a tu máquina local y luego instalar todas las dependencias utilizando npm:
`$ git clone https://github.com/Jheiner04/web-ruc-scraper.git`
`$ cd web-ruc-scraper`
`$ npm install`

## Uso

1. Sustituir palabra filtro en el archivo index.js

   ```javascript
   const filtro = "filtro";
   ```

2. Ejecutar

   ```sh
   node index.js
   ```

3. Verificar mensaje en consola `!Extracción exitosa!`
4. Los rucs se han guardado en la carpeta `csv` exactamente en el archivo generado con nombre similar a `palabraDelFiltro_fechaActual_horaActual.csv`

##### Consideraciones

Cuando el filtro tiene más de 50 rucs y se quiere listar los otros se debe agregar guión bajo seguido del número 50, 100, 150, etc.

###### Ejemplo:

Si el filtro original es igual a "montalvo"

```javascript
const filtro = "montalvo";
```

Y se necesita extraer los rucs comprendidos entre 50 y 100, el filtro pasaría a ser igual a

```javascript
const filtro = "montalvo_50";
```

Y se debe volver a ejecutar

```sh
node index.js
```

Para listar los rucs entre 100 y 150, el filtro pasaría a ser

```javascript
const filtro = "montalvo_100";
```

Y así sucesivamente.

## Contribución

Si deseas contribuir al proyecto, por favor crea una solicitud de extracción con los cambios propuestos.

## Estado del proyecto

Este proyecto está en desarrollo activo y se aceptan contribuciones. Si encuentras algún problema o tienes alguna sugerencia, por favor crea un problema en el repositorio.
