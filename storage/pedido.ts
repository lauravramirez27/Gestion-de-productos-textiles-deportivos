import { Type, Transform, Expose } from "class-transformer";
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
    /**
     * validacion id_pedido
     */
    @Expose({name:"id_pedido"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parametro id del pedido"}},{toClassOnly:true})
    id_pedido:number


    /**
     * validacion id_cliente
     */
     @Expose({name:"id_cliente"})
     @Transform(({value})=>{
         let data = /^[0-9]+$/g.test(value);
         if(data && typeof value == "number") return Number(value);
         else throw {status: 401, message: "Error en el tipo de parametro id de cliente"}
     })
     id_cliente:number;

     @Expose({name:"id_Inventario"})
     @Transform(({value})=>{
         let data = /^[0-9]+$/g.test(value);
         if(data && typeof value == "number") return Number(value);
         else throw {status: 401, message: "Error en el tipo de parametro id de Inventario"}
     })
     id_Inventario:number;
     /**
      * validacion estado
      */
     @Expose({name:"estado"})
     @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parametro estado"}},{toClassOnly:true})
     estado:String;

     /**
      * /**
      * validacion cantidad
      */
     @Expose({name:"talla"})
     @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parametro talla"}},{toClassOnly:true})
     talla:String;

     /**
      * validar color
      */
     @Expose({name:"cantidad"})
     @Transform(({value})=>{
         let data = /^[0-9]+$/g.test(value);
         if(data && typeof value == "number") return Number(value);
         else throw {status: 401, message: "Error en el tipo de parametro cantidad"}
     })
     cantidad:number;

    constructor(p1:number,p2:number,p3:number,p4:string,p5:number) {
        this.id_pedido= p1;
            this.id_cliente =p2;
            this.id_Inventario=p3;
            this.estado=p4;
            this.cantidad=p5;
    }
   
}
