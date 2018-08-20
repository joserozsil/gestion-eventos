<template>
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
          <template slot="tipo" slot-scope="data">
            <strong>{{data.item.id}}</strong>
          </template>
          <template slot="usuario" slot-scope="data">
            <strong>{{data.item.Usuario.nombre}} {{data.item.Usuario.apellido}}</strong>
          </template>
          <template slot="departamento" slot-scope="data">
            <strong>{{data.item.departamento}}</strong>
          </template>
          <template slot="descripción" slot-scope="data">
            <strong>{{data.item.descripcion}}</strong>
          </template>
          <template slot="fecha" slot-scope="data">
            <b-badge >{{data.item.f_creacion}}</b-badge>
          </template>
          <template slot="acción" slot-scope="data">
            <b-button variant="primary" class="btn-pill">Detalles</b-button>
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
import receptionData from './ReceptionData'
import axios from 'axios'
import settings from '../../config'

export default {
  name: 'Usuarios',
  props: {
    caption: {
      type: String,
      default: 'Cronologías'
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
        {key: 'departamento'},
        {key: 'fecha'},
        {key: 'acción'}
      ],
      currentPage: 1,
      perPage: 15,
      totalRows: 0
    }
  },
  computed: {
  },
  mounted() {
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
      axios.get(`${settings.API_URL}/evidences?limit=1`)
      .then(resp => {
        axios.get(`${settings.API_URL}/evidences?limit=${resp.total}`)
        .then(resp => {
          console.dir(resp)
          this.items = resp.data.data
        })
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
