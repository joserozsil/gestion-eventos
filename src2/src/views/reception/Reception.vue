<template>
  <b-row>
    <b-col md="4" sm="12" class="ml-auto">
      <b-form-group 
        description="Ej: 29/04/2018"
        label="Buscar por Fecha"
        laber-for="date"
        :horizontal="false">
        <b-form-input v-model="date" type="date" placeholder="Buscar por fecha"></b-form-input>
      </b-form-group>
    </b-col>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
          <template slot="tipo" slot-scope="data">
            <strong>{{data.item.tipo_recepcion}}</strong>
          </template>
          <template slot="usuario" slot-scope="data">
            <strong v-show="data.item.Usuario.usuario">
              {{data.item.Usuario.usuario}}
            </strong>
          </template>
          <template slot="descripción" slot-scope="data">
            <strong>{{data.item.descripcion}}</strong>
          </template>
          <template slot="fecha" slot-scope="data">
            <b-badge >{{data.item.f_creacion}}</b-badge>
          </template>
          <template slot="acción" slot-scope="data">
            <b-button variant="success" class="btn-pill">Actualizar</b-button>
          </template>
        </b-table>
        <nav>
          <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
      </b-card>
      </transition>
    </b-col>
    <b-col sm="12">
       <b-button @click="generateReport()" variant="success" class="btn-pill">
          Generar Reporte
        </b-button>
    </b-col>
  </b-row>
</template>

<script>
import receptionData from './ReceptionData'
import settings from '../../config'
import moment from 'moment'
moment.locale('es')
export default {
  name: 'Usuarios',
  props: {
    caption: {
      type: String,
      default: 'Recepción'
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
        {key: 'tipo'},
        {key: 'usuario'},
        {key: 'descripción'},
        {key: 'fecha'},
        {key: 'acción'}
      ],
      currentPage: 1,
      perPage: 15,
      totalRows: 0,
      date: moment().format('YYYY-MM-DD')
    }
  },
  computed: {
  },
  watch: {
    date() {
     axios.get(`${settings.API_URL}/chronologies?limit=1`)
      .then(resp => {
        axios.get(`${settings.API_URL}/chronologies?limit=${resp.total}&DATE=${this.date}`)
        .then(resp => {
          this.items = resp.data.data
        })
      })
    }
  },
  mounted() {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
    this.getChronologies()
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    getRowCount (items) {
      return items.length
    },
    userLink (id) {
      return `users/${id.toString()}`
    },
    rowClicked (item) {
      const userLink = this.userLink(item.id)
      this.$router.push({path: userLink})
    },
    getUsername(name){
      return name.split(' ')[0]
    },
    getChronologies() {
      axios.get(`${settings.API_URL}/chronologies?limit=1`)
      .then(resp => {
        axios.get(`${settings.API_URL}/chronologies?limit=${resp.total}&DATE=${this.date}`)
        .then(resp => {
          this.items = resp.data.data
        })
      })
    },
    generateReport() {
      const date = `Ciudad Guayana, ${moment(this.date, 'YYYY-MM-DD').format('dddd Do MMMM  YYYY')}`

      let copy = this.items

      copy.forEach(element => {
        element.f_creacion = moment(element.f_creacion).format('h:mm:ss a')
      })

      const data = {
        data: copy,
        date
      }

      axios.post(`${settings.API_REPORT}/reception`, { data })
      .then(resp => {
        this.getChronologies()
        window.open(settings.RENDER_REPORT + '/' + resp.data, "_blank")
      })
    }

  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
