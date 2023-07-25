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
 *  {
    "id_Compra": 1,
    "id_Proveedor": 1,
    "id_Insumo": 1,
    "cantidad": 50,
    "precio": 5000
  }
 */
export class Compra {
    constructor(p1, p2, p3, p4, p5) {
        this.id_Compra = p1;
        this.id_Proveedor = p2;
        this.id_Insumo = p3;
        this.cantidad = p4;
        this.precio = p5;
    }
}
__decorate([
    Expose({ name: "id_Compra" }),
    Transform(({ value }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: "Error en el tipo de parametro id de la Compra" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Compra.prototype, "id_Compra", void 0);
__decorate([
    Expose({ name: "id_Proveedor" }),
    Transform(({ value }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: "Error en el tipo de parametro id del Proveedor" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Compra.prototype, "id_Proveedor", void 0);
__decorate([
    Expose({ name: "id_Insumo" }),
    Transform(({ value }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: "Error en el tipo de parametro id del Insumo" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Compra.prototype, "id_Insumo", void 0);
__decorate([
    Expose({ name: "cantidad" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number")
            return Number(value);
        else
            throw { status: 401, message: "Error en el tipo de parametro cantidad" };
    }),
    __metadata("design:type", Number)
], Compra.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: "precio" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number")
            return Number(value);
        else
            throw { status: 401, message: "Error en el tipo de parametro precio" };
    }),
    __metadata("design:type", Number)
], Compra.prototype, "precio", void 0);
