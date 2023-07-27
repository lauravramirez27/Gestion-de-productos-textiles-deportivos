# Gestion de productos textiles deportivos

Desarrollar un sistema de gestión de productos textiles deportivos que permita optimizar el control de productos en inventario, agilizar los procesos de pedidos y facilitar la gestión de produccion y confeccion, asegurando la disponibilidad y entrega eficiente de productos de calidad a los clientes.

Este objetivo se centra en mejorar la gestión de textiles, abarcando aspectos como el control de inventario, los procesos de pedidos y la gestión de ventas. Al establecer este objetivo, el proyecto se enfocará en crear un sistema que agilice los procesos internos y mejore la administracion de insumos en inventario para realizar una produccion mas eficiente asi mismo las entrega de producto.

## __Objetivos especificos:__

**1.** Elaborar la base de datos en MySQL con sus respectivas relaciones entre tablas que permita almacenar y llevar de manera organizada la información relacionada con los datos de la produccion textil:insumos,productos,Producto_Insumo,pedidos,proveedores,clientes,categorias y la compra de insumos.
(se anexa relaciones entre las tablas en la imagen del diagrama)

**2.** Realizar endPoints que permitan ver todos los registros de cada tabla.

**3.** Crear un metodo con el cual se agreguen nuevos registros para cada necesidad.

**4.** Modificar los datos de un producto ya que la produccion esta en constante mejora y correccion de sus productos.

**5.** Eliminar un producto.

**Diagrama de base datos:**

![diagrama](https://github.com/LauraRamirezCampus/Gestion-de-productos-textiles-deportivos/assets/124936044/3399c3bf-a4d4-4c4a-802a-2574da82b7a2)


## __Instalacion:__

* Asegurarse de tener instalado Node.js y npm en tu sistema

**Clonar Repositorio:** Clona este repositorio copiando el siguiente comando en tu terminal:

```git clone https://github.com/LauraRamirezCampus/Gestion-de-productos-textiles-deportivos.git ```

**1. Configura las variables de entorno:** Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias. Hay un ejemplo de las variables requeridas en el archivo `.env`.

  (las variables vienen por defecto en el proyecto como usuario root y sin contraseña)

```
MY_CONFIG={"host":"localhost","user":"root","password":"","database":"productos_Textiles","port":3306}
SERVER_CONFIG = {"hostname":"127.1.1.2","port":5507}
JWT="LAURARAMIREZ" 
```

  
































**2.**Permite agregar el registro del inventario,para mantener un sistema de seguimiento preciso de los productos disponibles.

**3.** Permite ver todos los registros de inventario

**4.** Permite listar los pedidos que aun no se han entregado y estan pendientes

**5.** Permite listar los clientes registrados. 

**6.** Permite listar los insumos ordenados alfabeticamente.

**7.** Crea un insumo con su correcta validacion de datos.

**8.** Permite ver la compra de insumos realizada-

**9.** Agrega una nueva compra.

**10.**


