<template>
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
          <template slot="id" slot-scope="data">
            <strong>{{data.item.id}}</strong>
          </template>
          <template slot="usuario" slot-scope="data">
            <strong>{{data.item.Usuario.usuario}}</strong>
          </template>
          <template slot="nombre" slot-scope="data">
            <strong>{{data.item.Usuario.nombre}} {{data.item.Usuario.apellido}}</strong>
          </template>
          <template slot="fecha" slot-scope="data">
            <b-badge >{{data.item.f_creacion }}</b-badge>
          </template>
          <template slot="rol" slot-scope="data">
            <b-badge >{{data.item.Usuario.rol }}</b-badge>
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
  name: 'Usuarios',
  props: {
    caption: {
      type: String,
      default: 'Historial de Acceso'
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
        {key: 'fecha'},
        {key: 'rol'}
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
    getHistory() {
      axios.get(`${settings.API_URL}/history?limit=1`)
      .then(resp => {
        axios.get(`${settings.API_URL}/history?limit=${resp.total}`)
        .then(resp => {
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
