import { Type, Transform, Expose } from "class-transformer";
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
    /**
     * validacion id_Compra
     */
    @Expose({name:"id_Compra"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parametro id de la Compra"}},{toClassOnly:true})
    id_Compra:number
    
     /**
      * validacion id_Proveedor
      */
     @Expose({name:"id_Proveedor"})
     @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parametro id del Proveedor"}},{toClassOnly:true})
     id_Proveedor:number;

     /**
      * validar id_Insumo"
      */
     @Expose({name:"id_Insumo"})
     @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parametro id del Insumo"}},{toClassOnly:true})
     id_Insumo:number;

     /**
      * valida cantidad
      * 
    */
     @Expose({name:"cantidad"})
     @Transform(({value})=>{
         let data = /^[0-9]+$/g.test(value);
         if(data && typeof value == "number") return Number(value);
         else throw {status: 401, message: "Error en el tipo de parametro cantidad"}
     })
     cantidad:number;
     /**
      * valida precio
      */
     @Expose({name:"precio"})
     @Transform(({value})=>{
         let data = /^[0-9]+$/g.test(value);
         if(data && typeof value == "number") return Number(value);
         else throw {status: 401, message: "Error en el tipo de parametro precio"}
     })
     precio:number;

    constructor(p1:number,p2:number,p3:number,p4:number,p5:number) {
        this.id_Compra= p1;
            this.id_Proveedor=p2;
            this.id_Insumo=p3;
            this.cantidad=p4;
            this.precio=p5;
    }
}

