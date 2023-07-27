import { Type, Transform, Expose } from "class-transformer";
/**
 * Data a validar
 * {
    "id_Inventario": 99,
    "id_Producto": 1,
    "cantidad"id_Inventario: 80,
    
  }
 */

export class Inventario {
    /**
     * validacion id_Inventario
     */
    @Expose({name:"id_Inventario"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parametro id del Inventario"}},{toClassOnly:true})
    id_Inventario:number
    
     /**
      * validacion id_Producto
      */
     @Expose({name:"id_Producto"})
     @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parametro id del Producto"}},{toClassOnly:true})
     id_Producto:number;
    
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

    constructor(p1:number,p2:number,p3:number) {
        this.id_Inventario= p1;
            this.id_Producto=p2;
            this.cantidad=p3;
            
    }
}

