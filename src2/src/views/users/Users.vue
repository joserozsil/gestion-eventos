<template>
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <!-- @row-clicked="rowClicked" -->
        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" >
          <template slot="cedula" slot-scope="data">
            <strong>{{data.item.cedula}}</strong>
          </template>
          <template slot="usuario" slot-scope="data">
            <strong>{{data.item.usuario}}</strong>
          </template>
          <template slot="nombre" slot-scope="data">
            <strong>{{data.item.nombre}} {{data.item.apellido}}</strong>
          </template>
          <template slot="rol" slot-scope="data">
            <select @change="setRol(data.item.id, data.item.rol)" v-model="data.item.rol" class="form-control">
              <option value="ADMINISTRADOR">ADMINISTRADOR</option>
              <option value="RECEPCION">RECEPCIONISTA</option>
              <option value="OPERADOR_LABORATORIO">OPERADOR DE LABORATORIO</option>
              <option value="OPERADOR_BALISTICA">OPERADOR DE BALISTICA</option>
              <option value="OPERADOR_HECHOS">OPERADOR DE RECONSTRUCCIÓN DE HECHOS</option>
            </select>
          </template>
          <template slot="acción" slot-scope="data">
            <b-button @click="goToUpdate(data.item.id)" variant="success" class="btn-pill">Actualizar</b-button>
            <b-button @click="deleteUser(data.item.id)" variant="danger" class="btn-pill">
              Suspender
            </b-button>
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
import settings from '../../config'
import swal from 'sweetalert'

export default {
  name: 'Usuarios',
  data: () => {
    return {
      items: [],
      fields: [
        {key: 'cedula'},
        {key: 'usuario'},
        {key: 'nombre'},
        {key: 'rol'},
        {key: 'acción'}
      ],
      currentPage: 1,
      perPage: 15,
      totalRows: 0
    }
  },
  props: {
    caption: {
      type: String,
      default: 'Lista de Usuarios'
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
  mounted() {
    
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
    
    this.getUsers()
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
    goToUpdate(id) {
      this.$router.push({ name: 'userUpdate', params: { id } })
    },
    getUsers() {
      axios.get(`${settings.API_URL}/users?limit=1`)
      .then(resp => {
        axios.get(`${settings.API_URL}/users?limit=${resp.total}`)
        .then(resp => {
          this.items = resp.data.data
        })
      })
    },
    deleteUser(idUser) {
      swal({
        title: "¿Estás seguro que desea suspender el usuario?",
        text: "Esta acción no se podrá deshacer",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`${settings.API_URL}/users/${idUser}`).then(resp => {
            this.getUsers()
          })
        } 
      })
      
    },
    setRol(id, rol) {
      axios.put(`${settings.API_URL}/users/${id}`, { rol })
      .then(resp => {
        swal({
          title: "Usuario actualizado correctamente",
          text: `El usuario ${resp.data.usuario} se le ha asignado el rol ${rol}`,
          icon: "success",
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
