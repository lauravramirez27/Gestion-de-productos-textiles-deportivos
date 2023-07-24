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
 * {
    "id_Proveedor": 3,
    "nombre": "Proveedor c",
    "direccion": "Calle 123, Ciudad X",
    "telefono": "99999999"
  }
 */
export class proveedor {
    constructor(p1, p2, p3, p4) {
        this.id_Proveedor = p1;
        this.nombre = p2;
        this.direccion = p3;
        this.telefono = p4;
    }
}
__decorate([
    Expose({ name: "id_Proveedor" }),
    Transform(({ value }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: "Error en el tipo de parametro id del proveedor" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], proveedor.prototype, "id_Proveedor", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: "Error en el tipo de parametro NOMBRE" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], proveedor.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "direccion" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: "Error en el tipo de parametro direccion" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], proveedor.prototype, "direccion", void 0);
__decorate([
    Expose({ name: "telefono" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: "Error en el tipo de parametro telefono" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], proveedor.prototype, "telefono", void 0);
