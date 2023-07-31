var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from "class-transformer";
/**
 * Datos a validar
 *
 * {
    "id_Producto": 99,
    "id_Categoria": 1,
    "nombre": "Camiseta Deportiva ",
    "talla": "M",
    "color": "Azul"
  }
 */
export class producto {
    constructor(p1, p2, p3, p4, p5) {
        this.id_Producto = p1;
        this.id_Categoria = p2;
        this.nombre = p3;
        this.talla = p4;
        this.color = p5;
    }
}
__decorate([
    Expose({ name: "id_Producto" }),
    Transform(({ value }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: "Error en el tipo de parametro id del Producto" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], producto.prototype, "id_Producto", void 0);
__decorate([
    Expose({ name: "id_Categoria" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number")
            return Number(value);
        else
            throw { status: 401, message: "Error en el tipo de parametro id de Categoria" };
    }),
    __metadata("design:type", Number)
], producto.prototype, "id_Categoria", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: "Error en el tipo de parametro NOMBRE" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], producto.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "talla" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: "Error en el tipo de parametro talla" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], producto.prototype, "talla", void 0);
__decorate([
    Expose({ name: "color" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: "Error en el tipo de parametro color" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], producto.prototype, "color", void 0);
