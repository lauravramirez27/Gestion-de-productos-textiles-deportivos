import { Type, Transform, Expose } from "class-transformer";
import { IsNotEmpty } from 'class-validator';
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
    /**
     * validacion id_Producto
     */
    @Expose({name:"id_Producto"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parametro id del Producto"}},{toClassOnly:true})
    id_Producto:number


    /**
     * validacion id_Categoria
     */
     @Expose({name:"id_Categoria"})
     @Transform(({value})=>{
         let data = /^[0-9]+$/g.test(value);
         if(data && typeof value == "number") return Number(value);
         else throw {status: 401, message: "Error en el tipo de parametro id de Categoria"}
     })
     id_Categoria:number;
     /**
      * validacion nombre
      */
     @Expose({name:"nombre"})
     @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parametro NOMBRE"}},{toClassOnly:true})
     nombre:String;

     /**
      * /**
      * validacion talla
      */
     @Expose({name:"talla"})
     @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parametro talla"}},{toClassOnly:true})
     talla:String;

     /**
      * validar color
      */
     @Expose({name:"color"})
     @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parametro color"}},{toClassOnly:true})
     color:String;

    constructor(p1:number,p2:number,p3:string,p4:string,p5:string) {
        this.id_Producto= p1;
            this.id_Categoria =p2;
            this.nombre=p3;
            this.talla=p4;
            this.color=p5;
    }
}
