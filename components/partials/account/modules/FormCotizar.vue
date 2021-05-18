<template lang="html">  
    <div id="form" class="ps-form__billing-info">
        
        <!-- Formulario de cotizacion -->
        <div class="row">
            <div class="col-sm-6 ">
                <div class="form-group">
                    <label>Codigo postal:<sup>*</sup></label>
                    <v-text-field
                        placeholder="Postal code "
                        outlined
                        v-model="form.cp"
                        height="50"
                        type="text"   
                    />  
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Estado</label>
                    <v-text-field
                        placeholder="Estado"
                        outlined
                        v-model="form.estado"
                        height="50"
                        type="text" 
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Ciudad</label>
                    <v-text-field 
                        placeholder="City"
                        outlined height="50"
                        v-model="form.ciudad" 
                    />
                    
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Colonia</label>
                    <v-select
                        placeholder="Colonia"
                        v-model="form.colonia"
                        outlined
                        height="50"
                    />
                </div>
            </div>
        </div>
        <div class="ps-form__submit">
            <nuxt-link to="/shop">
                <i class="icon-arrow-left mr-1"></i>
                Regresar 
            </nuxt-link>
            <!-- solicitar cotizacion -->
            <div class="ps-block__btn">
                 <button  @click.prevent="handleToCotizacion">
                    Solicitar cotización 
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {consultaSepomex} from '~/repositories/repo';

export default {
    name : 'Cotizar',

    data(){
        return{
            form:{
                cp:'',
                estado:'',
                municipio:'',
                colonia:[]
            },
        }
    },

    created(){
        this.getCot();
    },
    methods:{
        // comunicacion con api cotizaciones
        async getCot(){
            const res = await axios.get('http://127.0.0.1:8000/api/cotizaciones');
            this.result = res.data;
            console.log(res.data);
        },

        // enviar datos de cotizacion
        async handleToCotizacion(){
          // try{
          //   const response = await axios.post('http://127.0.0.1:8000/api/cotizaciones', this.form).then((res) => {
            // this.result = res.data,
           this.buscarCp();
          //   console.log(res.data);
          //   console.log(response)
            
          
          // });
          // // imprimir res apiSepomex
          console.log(this.form);
          
          // }catch(error){
          //   console.log(error)
          // }
        },


    // resultado apiSepomex
    // this.buscarCp();


    // llamada a la funcion del repo
    async buscarCp() {
      if (this.form.cp.length != 5) {  //si el numero de caracteres no coincide, se termia el proceso.
        return false;
          console.log(this.buscarCp()); 
      }

      // const repo = repo(); 
      try {  //si el num de resultados es igual a 5, validamos los datos
        this.cprofile = true;
        let cp = this.form.cp;
        let resultadoSepomex = await consultaSepomex(cp); //consulta
        
        if (resultadoSepomex == "Error") {
          alertas.errorcp();
                } else {
          let estadosIn = resultestados(resultadoSepomex); //return estados
          this.estados = estadosIn; //seteamos estados array
          
          if (
            this.form.estado == "" ||
            this.form.estado == null ||
            this.form.estado != estadosIn[0]
          ) {
            this.form.estado = estadosIn[0]; ///damos un valor por defecto
          }

          let municipiosIn = resultMunicipios(resultadoSepomex);
          this.municipios = municipiosIn;

          if (
            this.form.municipio == "" ||
            this.form.municipio == null ||
            this.form.municipio != municipiosIn[0]
          ) {
            this.form.municipio = municipiosIn[0];
          }

          this.colonias = resultColonias(resultadoSepomex);
          // console.log(this.colonias);
          if (this.form.colonia == "" || this.form.colonia == null) {
            this.form.colonia = this.colonias[0];
          } else {
            let flag = true;
            estadosIn.forEach((element) => {
              if (element === this.form.colonia) {
                flag = false;
              }
            });
            if (flag) {
              this.form.colonia = this.colonias[0];
            }
          }
        }
      } catch (error) {
        this.colonias = [];
        this.form.colonia = null;
        this.estados = [];
        this.form.estado = null;
        this.municipios = null;
        this.form.municipio = null;
        this.errormesg =
          "código postal inválido y/o no encontrado, Intente nuevamente";
       }
     
      finally {
        this.cprofile = false;
      }
      
    }
    } 
}
  


</script>