import { Type, Transform, Expose } from "class-transformer";

/**
 * Datos a validar
 * {
    "id_Proveedor": 90,
    "nombre": "Proveedor c",
    "direccion": "Calle 123, Ciudad X",
    "telefono": "99999999"
  }
 */


export class proveedor {
    /**
     * validacion id_proveedor
     */
    @Expose({name:"id_Proveedor"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parametro id del proveedor"}},{toClassOnly:true})
    id_Proveedor:number


     /**
      * validacion nombre
      */
     @Expose({name:"nombre"})
     @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parametro NOMBRE"}},{toClassOnly:true})
     nombre:String;

     /**
      * /**
      * validacion direccion
      */
     @Expose({name:"direccion"})
     @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parametro direccion"}},{toClassOnly:true})
     direccion:String;

     /**
      * validar color
      */
     @Expose({name:"telefono"})
     @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parametro telefono"}},{toClassOnly:true})
     telefono:String;

    constructor(p1:number,p2:string,p3:string,p4:string) {
        this.id_Proveedor= p1;
            this.nombre=p2;
            this.direccion=p3;
            this.telefono=p4;
    }
}

