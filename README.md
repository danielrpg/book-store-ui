# PROJECT NAME

Book Store

## AUTHOR

```
Name: Daniel Fernandez

Email: daniel.fernandezgp@gmail.com
```

## STEPS FOR START PROJECT
1.- You just need to go in the project path and execute:

```
npm run start

``` 


2.- After first step completed it will open an browser with application 

```
http://localhost:3000

http://localhost:3000/login

http://localhost:3000/add-book

http://localhost:3000/dashboard

```


## PROJECT DESCRIPTION

```
Trabajo Final Parte 2 - React
Descripción
Una Tienda de libros quiere incrementar sus ventas, para ello la administración dispuso que
necesita un sistema para registrar los libros que venden, los libros se registran utilizando su
título, una descripción, el autor y su precio de venta, también es necesario registrar el autor del
libro.
Los clientes pueden ingresar al sistema y agregar el libro que deseen a un carrito de compras
donde el usuario puede registrar su nit y su nombre.
Utilizando create-react-app cree un proyecto de react para la tienda de libros (las imágenes
utilizadas de ejemplo pueden variar dependiendo de su implementación):
- Primeramente la página principal debe mostrar una lista de los libros disponibles en la
tienda:
Los libros por lo menos deben tener una imagen, el título, el autor y el precio, no es-
-
necesario toda la información de la imagen, pero usted puede agregar personalizar su
proyecto.
En otra ruta agregue un formulario para agregar nuevos libros a la lista
Los usuarios al hacer click en el nombre o la imagen deben ser redireccionados a otra
página donde se les muestre el detalle del libro:-
-
Cuando el usuario haga click en el botón comprar (Buy), éste debe redireccionar a la
página de pagos donde el comprador llena su información para realizar el pago:
Una vez los datos son llenados, el sistema debe mostrar un mensaje que se realizó la
venta correctamente.
Consideraciones:
- Para el manejo de rutas utilice react-router
- Puede utilizar el API que se implementó en la primera parte, o usar una base de datos
de prueba con json-server.
- Para realizar la implementación de la lista de libros y agregar un nuevo libro, utilice un
estado global con redux.
- Para la página donde se realiza el pago de los libros, utilice hooks y almacene sus
resultados en un arreglo ‘carts’ dentro de su archivo db.json de pruebas.
- Agregue validación de tipos a sus componentes
- Agregue test unitarios donde crea que sea necesario
- Agregue test e2e para realizar el testing automatizado del proceso de compra (no
requerido)
- Para el renderizado de las imágenes usted puede usar servicios como
https://unsplash.com/​ , ​ https://openlibrary.org/dev/docs/api/covers​ o
https://archive.org/services/docs/api/​ para colocar imagenes que necesite como portada.-
Las imágenes provistas en el ejemplo son solo de guía, usted puede utilizar los
componentes que le prevee la libreria de reactstrap o utilizar alguna librería de su
preferencia (semantic-ui, material ui, etc.)

```