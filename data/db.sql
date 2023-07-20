DROP DATABASE  productos_Textiles;
USE  productos_Textiles;
CREATE DATABASE productos_Textiles;
USE  productos_Textiles;

CREATE TABLE proveedores(
    id_Proveedor INT(20)  PRIMARY KEY,
    nombre VARCHAR(55),
    direccion VARCHAR(100),
    telefono VARCHAR(55)
);


DROP TABLE proveedores;

CREATE TABLE Insumos(
    id_Insumo INT(20)PRIMARY KEY,
    id_proveedor INT(20),
    nombre VARCHAR(55),
    color INT(20)
);

DROP TABLE Insumos;
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
DROP TABLE producto;
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

DROP TABLE categoria;
CREATE TABLE cliente(
    id_Cliente INT(20)PRIMARY KEY,
    nombre VARCHAR(55),
    direccion VARCHAR(100),
    telefono VARCHAR(20)
);

ALTER TABLE compra_Insumos
ADD CONSTRAINT fk_proveedor1 FOREIGN KEY (id_Proveedor) REFERENCES proveedores(id_Proveedor),
ADD CONSTRAINT fk_Insumo1 FOREIGN KEY (id_Insumo) REFERENCES insumos(id_Insumo);

ALTER TABLE producto_Insumo
ADD CONSTRAINT fk_producto1 FOREIGN KEY (id_Producto) REFERENCES producto(id_Producto),
ADD CONSTRAINT fk_Insumo FOREIGN KEY (id_Insumo) REFERENCES insumos(id_Insumo);

ALTER TABLE producto_Insumo
ADD CONSTRAINT fk_producto1 FOREIGN KEY (id_Producto) REFERENCES producto(id_Producto);
ALTER TABLE producto
ADD CONSTRAINT fk_categoria1 FOREIGN KEY (id_Categoria) REFERENCES categoria(id_Categoria);

ALTER TABLE inventario
ADD CONSTRAINT fk_producto FOREIGN KEY (id_Producto) REFERENCES producto(id_Producto);

ALTER TABLE Pedido
ADD CONSTRAINT fk_inventario FOREIGN KEY (id_Inventario) REFERENCES inventario(id_Inventario),
ADD CONSTRAINT fk_cliente FOREIGN KEY (id_Cliente) REFERENCES cliente(id_Cliente);













