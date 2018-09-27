<template>
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" >
          <template slot="id" slot-scope="data">
            <strong>{{data.item.id}}</strong>
          </template>
          <template slot="usuario" slot-scope="data">
            <strong>{{data.item.Usuario.usuario}}</strong>
          </template>
          <template slot="nombre" slot-scope="data">
            <strong>{{data.item.Usuario.nombre}} {{data.item.Usuario.apellido}}</strong>
          </template>
          <template slot="descripción" slot-scope="data">
            <strong>{{data.item.descripcion}}</strong>
          </template>
          <template slot="fecha" slot-scope="data">
            <strong>{{data.item.f_creacion | listDate }}</strong>
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
import usersData from './UsersData'
import settings from '../../config'

export default {
  name: 'Alert',
  props: {
    caption: {
      type: String,
      default: 'Historial de Acciones'
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
        {key: 'id'},
        {key: 'usuario'},
        {key: 'nombre'},
        {key: 'descripción'},
        {key: 'fecha'}
      ],
      currentPage: 1,
      perPage: 15,
      totalRows: 0
    }
  },
  computed: {
  },
  mounted() {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
    this.getHistory()
  },
  methods: {
    getRowCount (items) {
      return items.length
    },
    getHistory() {
      Event.$emit('loading')
      axios.get(`${settings.API_URL}/history?limit=${Number(1)}`)
      .then(resp => {
        axios.get(`${settings.API_URL}/history?limit=${ Number(resp.data.total + 1)}`)
        .then(response => {
          this.items = response.data.data
          Event.$emit('stopLoading')
        })
        .catch(error => {
          console.dir(error)
          Event.$emit('stopLoading')
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
