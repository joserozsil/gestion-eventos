<template>
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table 
          :hover="hover" 
          :striped="striped" 
          :bordered="bordered" 
          :small="small" 
          :fixed="fixed" 
          responsive="sm" 
          :items="items" 
          :fields="fields" 
          :current-page="currentPage" 
          :per-page="perPage">
          <template slot="id" slot-scope="data">
            <strong>{{data.item.id}}</strong>
          </template>
          <template slot="tipo" slot-scope="data">
            <strong>{{data.item.tipo_recepcion}}</strong>
          </template>
          <template slot="usuario" slot-scope="data">
            <strong>{{data.item.Usuario.nombre}} {{data.item.Usuario.apellido}}</strong>
          </template>
          <template slot="departamento" slot-scope="data">
            <strong>{{data.item.departamento}}</strong>
          </template>
          <template slot="descripción" slot-scope="data">
            <strong>{{ data.item.descripcion | textShort }}</strong>
          </template>
          <template slot="fecha" slot-scope="data">
            {{data.item.f_creacion | listDate}}
          </template>
          <template slot="estado" slot-scope="data">
            <b-badge
              v-b-popover.hover="'Indica si la cronologia ha sido compleada, o se encuentra en proceso de revisión.'" title="Estado"
            >{{data.item.estado}}</b-badge>
          </template>
          <template slot="acción" slot-scope="data">
            <b-button
              @click="goToEdit(data.item.departamento, data.item.id)"
              v-if=" (isDepartament(data.item.departamento) || user.rol == 'ADMINISTRADOR') && isEnabled(data.item.f_creacion) && data.item.estado != 'COMPLETADO'"
              variant="primary" 
              class="btn-pill">
              Actualizar
            </b-button>
            <b-button
              @click="goToEditReception(data.item.id)"
              v-if=" (user.rol == 'ADMINISTRADOR' || user.rol == 'RECEPCION') && isEnabled(data.item.f_creacion) && data.item.estado != 'COMPLETADO'"
              variant="success" 
              class="btn-pill">
              Editar
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
import moment from 'moment'

export default {
  name: 'Usuarios',
  props: {
    caption: {
      type: String,
      default: 'Listado de Cronologías'
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
        {key: 'estado'},
        {key: 'acción'}
      ],
      currentPage: 1,
      perPage: 15,
      totalRows: 0,
      user: null
    }
  },
  computed: {
  },
  mounted() {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
    this.user = this.$store.state.user
    
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
      this.$router.push({ path: userLink })
    },
    getUsername(name){
      return name.split(' ')[0]
    },
    getChronologies() {
      Event.$emit('loading')
      axios.get(`${settings.API_URL}/evidences?limit=1`)
      .then(resp => {
        axios.get(`${settings.API_URL}/evidences?limit=${resp.total}`)
        .then(resp => {
          this.items = resp.data.data
          Event.$emit('stopLoading')
        })
        .catch(error => {
          console.dir(error)
          Event.$emit('stopLoading')
        })
      })
    },
    isDepartament(departament) {
      if(departament == 'BALISTICA' && this.user.rol == 'OPERADOR_BALISTICA') {
        return true
      }

      if(departament == 'LABORATORIO' && this.user.rol == 'OPERADOR_LABORATORIO') {
        return true
      }

      if(departament == 'HECHOS' && this.user.rol == 'OPERADOR_HECHOS') {
        return true
      }

      return false
    },
    goToEdit(departament, id) {

      if(departament == 'BALISTICA') {
        this.$router.push({ name: 'editArm', params: { id }})
      }

      if(departament == 'LABORATORIO') {
        this.$router.push({ name: 'editClothes', params: { id }})
      }

      if(departament == 'HECHOS') {
        this.$router.push({ name: 'editAct', params: { id } })
      }

      return false
    },
    goToEditReception(id) {
      this.$router.push({ name: 'receptionEdit', params: { id } })
    },
    isEnabled(date) {
      const isEn = moment(date).add(1, 'day').unix() < moment().unix()
      return  isEn  === true ? false : true 
    }
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
