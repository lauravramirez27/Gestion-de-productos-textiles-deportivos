import { Type, Transform, Expose } from "class-transformer";
/**
 * Datos a validar
 * {
    "id_Insumo": 3,
    "nombre": "Tela Elástica",
    "color": 0
  }
 */
  export class insumo {
    /**
     * validacion id_Producto
     */
    @Expose({name:"id_Insumo"})
    @Transform(({value})=>{if(Math.floor(value) || value == null)return Math.floor(value); else throw {status:400, message:"Error en el tipo de parametro id del Insumo"}},{toClassOnly:true})
    id_Insumo:number


    
     /**
      * validacion nombre
      */
     @Expose({name:"nombre"})
     @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parametro NOMBRE"}},{toClassOnly:true})
     nombre:String;

     


     /**
      * validar color
      */
     @Expose({name:"color"})
     @Transform(({value})=>{ if(/^[a-z A-Z]+$/.test(value) || value == null)return value; else throw {status:400, message: "Error en el tipo de parametro color"}},{toClassOnly:true})
     color:String;

    constructor(p1:number,p2:string,p3:string,) {
        this.id_Insumo= p1;
            this.nombre=p2;
            this.color=p3;
    }
}
