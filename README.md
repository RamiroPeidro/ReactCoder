# MI PROYECTO DE REACT JS - STREET WEAR

Proyecto final para el curso de React Js. Tienda de zapatillas nike.

## Librerias

Se utilizo la libería mui-react (para componentes UI), reac-bootstrap (para la utilizacion del framework bootstrap), stlyed-components (para componentes), framer-motion (para realizar animaciones como la del catalogo de productos) y sweet-alerts(para alertas).

## Navegabilidad

Para la navegabilidad se utilizo react-router-dom.

## Cart
Se desabilitan los campos hasta la respuesta que da firebase sobre el stock, dejandolos asi inutilizables hasta dicha respuesta. Terminada esta compra se regresa al usuario al inicio vaciando dicho carrito para asi estar listo si quiere comprar algo mas despues, sin que su compra anterior se mantenga en el carrito, evitando asi confusiones y compras indeseadas.

Para el carrito de compra se utilizó firebase, para obtener en tiempo real la data del stock de productos, y a su vez actualizarlo al momento que se efectua una compra. Además los productos del catalogo estan extraidos directamente de la base de datos de firebase, por lo que es completamente dinamico.


## GIF Demostrativo:



## Link con la pagina terminada: 
