<template>

            

    <div class="container-fluid  ">


      
         
        <!--Aqui menu -->
          

        <div class=" Menu-nav row md  p-1">

                        
                        
                                  

                                    

                                        <div class="p-2 d-flex col-11 mx-auto bd-highlight mb-3">
                                                <div class="mr-auto p-3 ml-5 bd-highlight">
                                                          
                                                </div>
                                                <div class="p-2 bd-highlight border border-warning">
                                                           <img src="../assets/Grupo 18179.png" >
                                                </div>
                                                <div class="p-2 bd-highlight border-warning">
                                                            <img src="../assets/Layer 2.png" >
                                                </div>
                                                
                                        </div>


                                       
                            

                             

                        


        </div>
     
        <!--Aqui termina menu --> 






        <!--AQUI PASARELA DE PAGO--> 

          <div class="P-Container col-12 md">


                     <div class=" Ocultar row md no-gutters  d-flex justify-content-start">
                                                                    <!--Link pasarela de pago -->

                                                                    


                                                                    <div class="col-md-3 text-left ">
                                                                      <img src="../assets/Trazado 5025.svg">
                                                                      <a href="./miscompras" class="Pasarelalink">Mis Compras</a>
                                                                    </div>

                                                                    
                                                                    
                                                                      
                     </div>








          </div>

        <!--TERMINA PASARELA DE PAGO--> 



        <!--Aqui entra contenido -->
        
<div class="col-md-11 mx-auto ">
  


    <div class=" row pt-2 ">


                



<div class="Ocultar col-md-8  ">




                                                            
                                                                
                                                            





              
                   
              

              <div class=" col-md-12  text-left  pt-4 ">
                <p class="Tex1">Selecciona tu método de pago</p>
              </div>

                


              <!--Mis botones -->
               <div class="col-md-12 pb-5 d-flex justify-content-start  text-left  ">
                 
                   <div class="col-md-6 row ">
                        <a href="./pasarela" class="bottom-1 btn btn-secondary btn-lg btn-block">Tarjeta de Débito</a>
                   </div>

                   <div class="col-md-6">
                    <a href="./pagoenefectivo" class="bottom-1 btn btn-secondary btn-lg btn-block">Pago en Efectivos</a>
                   </div>

              </div>

              <!--Termina mis botones -->



              <!--AQUI EMPIEZA EL FORMULARIO-->

                

                   <div class="row row-cols-1 row-cols-sm-2 row-cols-md-8">


                                                <div class="col">
                                                        
                                                            <h6 class="Campo-tex col-md-12 text-left  mb-2">Datos personales</h6>
                                                          
                                                          <div class="col-ms mb-4">
                                                            <input type="text" class="Campos form-control form-control-lg" id="colFormLabelLg" placeholder="Documento de indentidad">
                                                          </div>

                                                          <!--SEGUNDO CAMPO-->
                                                            <h6 class="Campo-tex col-md-12 text-left  mb-2">Ingresa la información de tu tarjeta</h6>
                                                          <div class="col-ms-6 mb-3">
                                                              <input type="text" class="Campos form-control form-control-lg" id="colFormLabelLg">
                                                          </div>

                                                        <!--Tercer CAMPO-->
                                                        <div class="col-ms-2  border d-flex justify-content-around  ">

                                                          <input type="text" class="Campos form-control form-control-lg" id="colFormLabelLg" placeholder="Mes">
                                                          <input type="text" class="Campos form-control  form-control-lg" id="colFormLabelLg" placeholder="Año">
                                                          <input type="text" class="Campos form-control form-control-lg" id="colFormLabelLg" placeholder="cvc/cvv">

                                                        </div>

                                                        
                                                </div>




                                                <!--CAMPO DERECHO-->
                                                        
                                                <div class="col  p-3">


                                                        


                                                        
                                                          
                                                          <div class="col-ms mt-4">
                                                            <input type="e-mail" class="Campos form-control form-control-lg" id="colFormLabelLg" placeholder="Correo Electronico">
                                                          </div>

                                                          <div class="col-ms mt-5 mb-3">
                                                            <input type="text" class="Campos form-control form-control-lg" id="colFormLabelLg" placeholder="N° Tarjeta">
                                                          </div>
                                                        
                                                        
                                                        
                                                            
                                              
                                              

                                                        
                                                </div>
    
                         

                    </div>
               

              <!--AQUI termina EL FORMULARIO IZQUIERDA-->


                <div class="col-md-8 mx-auto mt-4">


                        <button type="button" class="bottom-Finalizacompra btn btn-secondary btn-lg btn-block ">Finalizar Compra</button>
                </div>

          </div>






                                




















    <!--AQUI EMPIEZA CARRITO DE COMPRAS -------------------------------------------------------------------------->




    <div class="Carrito col-md-3 mx-auto">

          
                 <!--Aqui contenedor cajon bklanco CON SOMBRA ------>
              <div class="cajon-blanco">

                    <!--Img carrito-1 -->
                        
        

            <div :class="['carrito', clase]">
        <table id="lista-carrito" class="table">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th style="width:80px;">Precio</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="body">
                <ItemCompra
                    v-for="curso in carrito" :key="curso.id"
                    :curso="curso"
                />
            </tbody>
            <tfoot>
                
                <th v-if="carrito.length === 0" class="text-cartvacio" scope="row" colspan="5">Carrito vacío - Empieze a comprar!</th>
                
                <th v-else scope="row" colspan="5"> 
                    <button 
                        @click="vaciarCarritoAction"
                        class="vaciar-carrito"
                    >
                        Vaciar Carrito
                    </button> 
                    <router-link to="/miscompras">
                        <button 
                            class="comprar-carrito"
                        >
                            Ir a pagar
                        </button>
                    </router-link> 
                </th> 
            </tfoot>
        </table>
    </div>

           
                               
        </div>

                   <!--Img carrito-1 --> 

                    
                   
                            

                                    
                            
                              <!--BOTTOM CARRITO --> 

                              

                                 

                                 
  
    
                             



                            <!--TERMINA BOTTOM CARRITO -->


                             <!--AQUI PRECIO DE CARRITO -->

                             <!--TERMINA BOTTOM CARRITO -->
                                    
                            





              </div>
    </div>







                 
    
      

</div>
    
    
 
         

        <!--Aqui termina contenido -->  


       


          


       
           
           
      

             

 

    </div>


  


          


 
</template>

<script>

import ItemCompra from "@/components/ItemCompra.vue"
import { mapActions, mapState } from "vuex"



export default {
    name: 'Carrito',
    props: {
        clase: ''
    },
    components: {
        ItemCompra
    },
    methods: {
        ...mapActions(['vaciarCarritoAction'])
    },
    computed: {
        ...mapState(['carrito'])
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->



<style scope>

body{font-family: 'Poppins', sans-serif;}


.contenedor{
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;
}


.Menu-nav{

background: #000D29;


}
.bottom-1 {

  background: #5640FF;
  font-family: 'Poppins';
  font-size: 23px;
  color: #ffffff;
  padding: 20px;
  
  
  
}
.bottom-1:hover{
   background: #7f6eff;
   
}

.bottom-2{

   background: #EFEFEF;
   font-family: 'Poppins';
   font-size: 23px;
   color: #555555;
   border: 0px;
  padding: 20px;
}

.bottom-2:hover{
   background: #EFEFEF;
   color: #555555;
}


.bottom-Finalizacompra{

  background: #5640FF;
  font-family: 'Poppins';
  font-size: 20px;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
}
.bottom-Finalizacompra:hover{

  background: #7f6eff;

}



/*TEXTO SELECION PAGO*/
.Tex1{

color:#7f6eff;
  font-family: 'Poppins';
  font-size: 22px;
  font-weight: bold;

}
/*TEXTO SELECION PAGO*/




/*TEXTO datos personales*/
.Campo-tex{

  color: #222222;
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: "negrita";
  letter-spacing: 1px;
  list-style: none;
  text-decoration: none;

}
.Campos{
  
  font-family: 'Poppins';
  font-size: 16px;
  
  letter-spacing: 1px;
  list-style: none;
  padding: 35px;
  letter-spacing: 1px;
  
}




/*748 AQUI CARRITO DE COMPRA*/

.Carrito-Principal{

  display: flex;
  
}


.Cajon-Carrito{

  display: flex;
  
  
}
.cajon-img{

  width: 135px;
  height: 100px;
  background: orangered;
  border-radius: 5px;
}


.Cajon-textos{

    
  
  background: rgb(255, 255, 255);
  text-align: left;
  color:#7f6eff;
  font-family: 'Poppins';
  font-size: 12px;
  font-weight: bold;
  margin: 0px 0px 0px;
 

}
.Tex-precio-link{

  display: flex;
  justify-content: space-between;
}
.Text-dsc{

   color:#7f6eff;
   display: block;
  

}



.Text-costo{

 
  padding-left: 90px;
}



/*AQUI MI BOTON ENVIAR CARRITO AGREGAR UNCODICO DE DESCUENTO*/
.Carrito{
  height: 70%;
  background: #ffffff;
  padding:20px;
  box-shadow:0px 0px 16px 4px #d6d6d6;
-moz-box-shadow:0px 0px 16px 4px #d6d6d6;
-webkit-box-shadow:0px 0px 16px 4px #d6d6d6;

}


.Bottom-Carrito{

  height: 50px;
  
  width: 350px;
  padding: 35px;
  border-radius: 5px;
  border: 1px solid rgb(46, 11, 11);
  display: flex;
  align-items: center;
}

.Text-campo {
  
  height: 50px;
  width: 3500px;
  color: #222222;
  font-family: 'Poppins';
  font-size: 12px;
  font-weight: "negrita";
  letter-spacing: 1px;
  list-style: none;
  text-decoration: none;

  

}


.Botton-Form{


  font-family: 'Poppins';
  font-size: 16px;
  
  letter-spacing: 1px;
  list-style: none;
  
  letter-spacing: 1px;

}

.PTex-1{

  
  
  color:#7f6eff;
  font-family: 'Poppins';
  font-size: 15px;
  font-weight: bold;
 

}


.PTex-2{

  
  
  color:#7f6eff;
  font-family: 'Poppins';
  font-size: 15px;
  font-weight: bold;
 

}



/*AQUI FOOTER*/


.Footer{

background: #000D29;
  width: 100vw;
  
  margin: 0 auto;
}


/*PASARELA DE PAGOS CSS*/


.Ocultar{
  
  margin: 20px;
}



/*TEXTO LINK*/
.Pasarelalink{

  color: #222222;
  font-family: 'Poppins';
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 20px;
  
}
.Pasarelalink:hover{
list-style: none;
  text-decoration: none;
  color: #5a5a5a;
  
}




@media (min-width: 1000px) { 

  .Cajon-Carrito{

      position: relative;
  }
  
  .Text-costo{

     padding: 5px;
      
}
}

  
  

  





@media (max-width: 375px) { 

  .Cajon-Carrito{

  
  position: relative;
  
  

  
}

/*AQUI CARRITO DE COMPRA*/

.Carrito{
  height: 100%;
  background: #ffffff;
  padding:20px;
 



}
.Text-costo{

     padding: 0px;
      
}

.Cajon-textos{

    
  
  background: rgb(255, 255, 255);
  text-align: left;
  color:#7f6eff;
  font-family: 'Poppins';
  font-size: 10px;
  font-weight: bold;
  
}

/*AQUI TERMINA CARRITO DE COMPRA*/

/*AQUI MENU*/

.Menu-nav{
  display: none;
}
/*AQUI TERMINA MENU*/

/*PASARELA RESPONSIVE*/
.P-Container{

background: #000D29;

}

.Pasarela-P{

  display: inline;
  background: #000D29;
}

.Pasarelalink{

  color: #ffffff;
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 20px;
  
}


/*PASARELA TERMINA RESPONSIVE*/


/*OCULTA TODO LOS FORMULARIOS TERMINA RESPONSIVE*/

.Ocultar{ 
display: none;
background: #000D29 ;
color: #ffffff;
padding-left: 0px;
  
}
/*OCULTA TODO LOS FORMULARIOS TERMINA RESPONSIVE*/


 .carrito {
        background: var(--bgbeneficio);
        padding: 0 10px;
        width: 340px;
        margin: 0 auto;
        position: absolute;
        top: 35px;
        right: -52px;
        border: 1px solid var(--colorText3);
        border-radius: 5px;
    }   

    .lista-carrito {
        font-size: 12px;
    }   

    th {
        font-size: 12px;
        padding: 3px 0;
        color: var(--colorText2);
    }   

    tbody {
        color: var(--colorText4);
    }   

    button {
        width: 100%;
        height: 40px;
        margin-top: 10px;
        border: unset;
        border-radius: 5px;
        color: var(--colorText1);
    }   

    .vaciar-carrito {
        background: var(--button2);
        outline: unset;
    }   

    .comprar-carrito {
        background: var(--button1);
        outline: unset;
    }   

    .text-cartvacio {
        font-size: 16px;
        color: var(--colorText5);
        padding-top: 20px;
    }   

    .desactive {
        display: none;
    }   

    .active {
        display: block;
    }

    @media screen and (min-device-width:780px){
        .carrito {
            top: 30px;
        }
    }
 }
 

</style>
