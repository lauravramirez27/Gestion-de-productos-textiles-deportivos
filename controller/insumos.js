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
    "id_Insumo": 3,
    "nombre": "Tela Elástica",
    "color": "Morada"
  }
 */
export class insumo {
    constructor(p1, p2, p3) {
        this.id_Insumo = p1;
        this.nombre = p2;
        this.color = p3;
    }
}
__decorate([
    Expose({ name: "id_Insumo" }),
    Transform(({ value }) => { if (Math.floor(value) || value == null)
        return Math.floor(value);
    else
        throw { status: 400, message: "Error en el tipo de parametro id del Insumo" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], insumo.prototype, "id_Insumo", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: "Error en el tipo de parametro NOMBRE" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], insumo.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "color" }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: "Error en el tipo de parametro color" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], insumo.prototype, "color", void 0);
