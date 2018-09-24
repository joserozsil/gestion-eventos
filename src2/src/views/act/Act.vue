<template>
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table 
          responsive="sm" 
          :hover="hover" 
          :striped="striped" 
          :bordered="bordered" 
          :small="small" 
          :fixed="fixed" 
          :items="items" 
          :fields="fields" 
          :current-page="currentPage" 
          :per-page="perPage">
          <template slot="retrato" slot-scope="data">
            <b-navbar variant="faded" type="light">
              <b-navbar-brand tag="h1" href="#">
                <img 
                  :src="urlImage + '/' + data.item.Evidencium.Imagens[0].nombre_archivo" 
                  width="40px" 
                  class="img-avatar d-inline-block align-top" alt="BV"
                >
              </b-navbar-brand>
            </b-navbar>
          </template>
          <template slot="exp" slot-scope="data">
            <strong>{{data.item.exp}}</strong>
          </template>
          <template slot="dibujante" slot-scope="data">
            <strong v-if="data.item.Usuario && data.item.nombre">
              {{data.item.Usuario.nombre}} {{data.item.Usuario.apellido}}
            </strong>
          </template>
          <template slot="usuario" slot-scope="data">
            <strong>{{data.item.username}}{{ getUsername(data.item.name) }}</strong>
          </template>
          <template slot="fecha" slot-scope="data">
            <b-badge >{{data.item.f_creacion}}</b-badge>
          </template>
          <template slot="solicitud" slot-scope="data">
            <strong>{{data.item.solicitado_por}}</strong>
          </template>
          <template slot="acción" slot-scope="data">
            <b-button @click="generateReport(data.item.id)" variant="primary" class="btn-pill">Reporte</b-button>
            <b-button @click="goToDetail(data.item.evidencia_id)" variant="primary" class="btn-pill">Detalles</b-button>
            <b-button @click="goToEdit(data.item.evidencia_id)" variant="success" class="btn-pill">Actualizar</b-button>
          </template>
        </b-table>
        <nav>
          <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
      </b-card>
      </transition>
    </b-col>
  </b-row>
</template>

<script>

import actData from './ActData'
import settings from '../../config'
import swal from 'sweetalert'
import store from '../../store/store'

export default {
  name: 'Usuarios',
  props: {
    caption: {
      type: String,
      default: 'Lista de Retratos Realizados'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      items: [],
      fields: [
        {key: 'retrato'},
        {key: 'exp'},
        {key: 'dibujante'},
        {key: 'fecha'},
        {key: 'solicitud'},
        {key: 'acción'}
      ],
      currentPage: 1,
      perPage: 15,
      totalRows: 0,
      urlImage: settings.API_IMAGE
    }
  },
  computed: {
  },
  mounted() {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
    this.getActs()
  },
  methods: {
    getRowCount (items) {
      return items.length
    },
    getActs() {
      axios.get(`${settings.API_URL}/portraits?limit=1`)
      .then(resp => {
        axios.get(`${settings.API_URL}/portraits?limit=${resp.data.total}`)
        .then(resp => {
          this.items = resp.data.data.filter(data => data.Evidencium.estado == 'COMPLETADO')
        })  
      })
    },
    generateReport(id) {
      let data = this.items.filter(data => data.id == id )[0]

      let image = settings.API_IMAGE + '/' + data.Evidencium.Imagens[0].nombre_archivo 

      Object.assign(data, { image })

      axios.post(`${settings.API_REPORT}/portraits`, { data })
      .then(resp => {
        window.open(settings.RENDER_REPORT + '/' + resp.data, "_blank")
      })
    },
    goToEdit(id) {
      this.$router.push({ name: 'editAct', params: { id } })
    },
    goToDetail(id) {
      this.$router.push({ name: 'detailAct', params: { id } })
    }
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
