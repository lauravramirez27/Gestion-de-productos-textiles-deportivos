import { Type, Transform, Expose } from "class-transformer";
/**
 * data a validar
 * {
    "id_PI": 333,
    "id_Insumo": 1,
    "id_Producto": 1,
    "cantidad": 50
  }
 */

  export class P_insumo {
    /**
     * validacion id_PI
     */
    @Expose({name:"id_PI"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parametro id "}},{toClassOnly:true})
    id_PI:number


    
     /**
      * validacion id_Insumo
      */
     @Expose({name:"id_Insumo"})
     @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parametro id del Insumo"}},{toClassOnly:true})
     id_Insumo:number;

     


     /**
      * validar id_Producto"
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
     

    constructor(p1:number,p2:number,p3:number,p4:number) {
        this.id_PI= p1;
            this.id_Insumo=p2;
            this.id_Producto=p3;
            this.cantidad=p4;
            
    }
}

