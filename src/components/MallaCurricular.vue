<template>
  <div class="accordion" role="tablist">
    <h2>Malla Curricular</h2>
    <b-card 
        no-body class="mb-1"
        v-for="unidad in curso.unidades" :key="unidad.id"
    >
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion variant="primary">{{unidad.nombre_unidad}}</b-button>
      </b-card-header>
      <b-collapse id="accordion" accordion="my-accordion" role="tabpanel">
        <b-card-body>
            <b-card no-body>
              <b-tabs card>
                <b-tab
                    v-for="semana in unidad.semanas" :key="semana.id" 
                    :title="semana.nombre_semana" 
                >
                  <h3>{{semana.tema}}</h3>
                  <p>{{semana.descripcion}}</p>
                </b-tab>
              </b-tabs>
            </b-card>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    name: 'MallaCurricular',
    computed: {
        ...mapState(['curso'])
    }
}
</script>

<style scoped>
  .accordion {
      width: 100%;
      padding: 0 10px;
    }

  h3 {
      font-size: 20px;
  }

  p {
      font-size: 14px;
  }

  @media screen and (min-device-width:780px){
    .accordion {
      padding: 0 7%;
    }
  }


  @media screen and (min-device-width:950px){
    .accordion {
      width: 85%;
    }
  } 

  @media screen and (min-device-width:1200px){
    .accordion {
      width: 100%;
      padding-right: 0;
      padding-left: 12%;
      padding-bottom: 40px;
    }
  }
</style>