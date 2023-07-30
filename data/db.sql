
CREATE DATABASE productos_Textiles;
USE  productos_Textiles;

CREATE TABLE proveedores(
    id_Proveedor INT(20)  PRIMARY KEY,
    nombre VARCHAR(55),
    direccion VARCHAR(100),
    telefono VARCHAR(55)
);




CREATE TABLE Insumos(
    id_Insumo INT(20)PRIMARY KEY,
    nombre VARCHAR(55),
    color INT(20)
);


CREATE TABLE compra_Insumos(
    id_Compra INT(20)PRIMARY KEY,
    id_Proveedor INT(20),
    id_Insumo INT(20),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cantidad INT(20),
    precio INT(20)

);
CREATE TABLE producto(
    id_Producto INT(20)PRIMARY KEY,
    id_Categoria INT(20),
    nombre VARCHAR(20),
    talla VARCHAR(20),
    color VARCHAR(20)

);
CREATE TABLE Producto_Insumo(
    id_PI INT(20)PRIMARY KEY,
    id_Insumo INT(20),
    id_Producto INT(20),
    cantidad INT(20)
);
CREATE TABLE inventario(
    id_Inventario INT(20)PRIMARY KEY,
    id_Producto INT(20),
    cantidad INT(20),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pedido(
    id_pedido INT(20)PRIMARY KEY,
    id_cliente INT(20),
    id_Inventario INT(20),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(55),
    cantidad INT(20)
);

CREATE TABLE categoria(
    id_Categoria INT(20) PRIMARY KEY,
    nombre VARCHAR(55),
    descripcion VARCHAR(55)
);


CREATE TABLE cliente(
    id_Cliente INT(20)PRIMARY KEY,
    nombre VARCHAR(55),
    direccion VARCHAR(100),
    telefono VARCHAR(20)
);

ALTER TABLE compra_Insumos
ADD CONSTRAINT fk_proveedor1 FOREIGN KEY (id_Proveedor) REFERENCES proveedores(id_Proveedor) ,
ADD CONSTRAINT fk_Insumo1 FOREIGN KEY (id_Insumo) REFERENCES insumos(id_Insumo);

ALTER TABLE producto_Insumo
ADD CONSTRAINT fk_producto1 FOREIGN KEY (id_Producto) REFERENCES producto(id_Producto),
ADD CONSTRAINT fk_Insumo FOREIGN KEY (id_Insumo) REFERENCES insumos(id_Insumo);

ALTER TABLE producto_Insumo
ADD CONSTRAINT fk_producto2 FOREIGN KEY (id_Producto) REFERENCES producto(id_Producto);
ALTER TABLE producto
ADD CONSTRAINT fk_categoria2 FOREIGN KEY (id_Categoria) REFERENCES categoria(id_Categoria);

ALTER TABLE inventario
ADD CONSTRAINT fk_producto3 FOREIGN KEY (id_Producto) REFERENCES producto(id_Producto);

ALTER TABLE Pedido
ADD CONSTRAINT fk_inventario FOREIGN KEY (id_Inventario) REFERENCES inventario(id_Inventario),
ADD CONSTRAINT fk_cliente FOREIGN KEY (id_Cliente) REFERENCES cliente(id_Cliente);

/**/
-- Insertar datos de prueba 
INSERT INTO proveedores (id_Proveedor, nombre, direccion, telefono)
VALUES
    (1, 'Proveedor A', 'Calle 123, Ciudad X', '99999999'),
    (2, 'Proveedor B', 'Avenida 456, Ciudad Y', '33333333');

INSERT INTO Insumos (id_Insumo, nombre, color)
VALUES
    (1, 'Tela Algodon', "blanco"),
    (2, 'Tela poliester',"azul"),
    (3, 'Tela Elástica', "verde");

INSERT INTO compra_Insumos (id_Compra, id_Proveedor, id_Insumo, cantidad, precio)
VALUES
    (1, 1, 1, 50, 5000),
    (2, 2, 2, 80, 8000),
    (3, 1, 3, 100, 6000);

INSERT INTO categoria (id_Categoria, nombre, descripcion)
VALUES
    (1, 'Camisetas', 'Camisetas unisex'),
    (2, 'Pantalones', 'joggers anchos');

INSERT INTO producto (id_Producto, id_Categoria, nombre, talla, color)
VALUES
    (1, 1, 'Camiseta Deportiva', 'M', 'Azul'),
    (2, 2, 'Pantalón Deportivo', 'L', 'Negro');

INSERT INTO Producto_Insumo (id_PI, id_Insumo, id_Producto, cantidad)
VALUES
    (1, 1, 1, 50),
    (2, 2, 1, 30),
    (3, 3, 2, 40);

INSERT INTO inventario (id_Inventario, id_Producto, cantidad)
VALUES
    (1, 1, 80),
    (2, 2, 60);
INSERT INTO cliente (id_Cliente, nombre, direccion, telefono)
VALUES
    (1, 'Cliente A', 'Calle Principal, Ciudad Z', '555-123-4567'),
    (2, 'Cliente B', 'Avenida Central, Ciudad W', '555-987-6543');

INSERT INTO pedido (id_pedido, id_cliente, id_Inventario, estado, cantidad)
VALUES
    (1, 1, 1, 'En Proceso', 20),
    (2, 2, 2, 'Entregado', 15);

SELECT * FROM 















