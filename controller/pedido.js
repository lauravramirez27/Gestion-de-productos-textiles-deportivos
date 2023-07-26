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
 * Data a validar
 * {
    "id_pedido": 1,
    "id_cliente": 1,
    "id_Inventario": 1,
    "estado": "En Proceso",
    "cantidad": 20
  }
 */
export class pedido {
    constructor(p1, p2, p3, p4, p5) {
        this.id_pedido = p1;
        this.id_cliente = p2;
        this.id_Inventario = p3;
        this.estado = p4;
        this.cantidad = p5;
    }
}
__decorate([
    Expose({ name: "id_pedido" }),
    Transform(({ value }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: "Error en el tipo de parametro id del pedido" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], pedido.prototype, "id_pedido", void 0);
__decorate([
    Expose({ name: "id_cliente" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number")
            return Number(value);
        else
            throw { status: 401, message: "Error en el tipo de parametro id de cliente" };
    }),
    __metadata("design:type", Number)
], pedido.prototype, "id_cliente", void 0);
__decorate([
    Expose({ name: "id_Inventario" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number")
            return Number(value);
        else
            throw { status: 401, message: "Error en el tipo de parametro id de Inventario" };
    }),
    __metadata("design:type", Number)
], pedido.prototype, "id_Inventario", void 0);
__decorate([
    Expose({ name: "estado" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: "Error en el tipo de parametro estado" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], pedido.prototype, "estado", void 0);
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
], pedido.prototype, "cantidad", void 0);
