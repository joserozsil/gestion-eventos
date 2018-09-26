<template>
<div class="animated fadeIn">
  <b-row>
    <b-col sm="12">
      <b-card>
        <div slot="header">
          <strong>Crear Nueva Novedad</strong>
        </div>
        <b-row>
          <b-col sm="6">
            <b-form-group 
              description="Ej: Recibo de Guardia"
              label="Tipo"
              laber-for="type"
              :horizontal="false">
              <select v-model="novedad.tipo_recepcion" class="form-control">
                <option value="RECIBO_MEMORADUM">Recibo de Memoradum</option>
                <option value="RECIBO_OFICIO">Recibo de Oficio</option>
                <option value="PRESENTACION_JEFE">Presentación de Jefe</option>
                <option value="PRESENTACION_FUNCIONARIO">Presentación de Funcionario</option>
                <option value="RECIBO_GUARDIA">Recibo de Guardia</option>
                <option value="SUPERVISION">Supervisión</option>
              </select>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group 
              description="Ej: Reconstrucción de Hechos"
              label="Departamento"
              laber-for="type"
              :horizontal="false">
              <select v-model="novedad.departamento" class="form-control">
                <option value="RECEPCION">Recepción</option>
                <option value="HECHOS">Análisis y Reconstrucción de Hechos</option>
                <option value="BALISTICA">Balística</option>
                <option value="LABORATORIO">Laboratorio</option>
              </select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group 
          description="Ej: Descripción de memorandum"
          label="Descripción"
          laber-for="description"
          :horizontal="false">
          <b-form-textarea v-model="novedad.descripcion" id="description" :textarea="true" :rows="15" type="text" ></b-form-textarea>
        </b-form-group>
      </b-card>
      <div class="form-actions">
        <b-button @click="update()" class="mr" type="submit" variant="primary">
          Actualizar
        </b-button>
        <b-button @click="$router.go(-1)" type="button" variant="secondary">
          Cancelar
        </b-button>
      </div>
    </b-col>
  </b-row>
</div>
</template>

<script>

import settings from '../../config'
import swal from 'sweetalert'

import store from '../../store/store'

export default {
  data: () => {
    return {
      novedad: {}
    }
  },
  store,
  mounted() {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
    this.getReception()
  },
  methods: {
    getReception() {
      axios.get(`${settings.API_URL}/evidences/${this.$route.params.id}`)
      .then(resp => {
        this.novedad = resp.data.data
      })
    },
    update() {
      if (!this.novedad.descripcion) {
        swal({
          title: "La descripción es requerida",
          icon: "error",
        })
        return ''
      }

      axios.put(settings.API_URL + '/evidences' + '/' + this.$route.params.id, {
        departamento: this.novedad.departamento,
        tipo_recepcion: this.novedad.tipo_recepcion,
        descripcion: this.novedad.descripcion
      })
      .then(resp => {
        this.$router.push({ name: 'listReception' })
        swal({
          title: "Novedad actualizada correctamente",
          icon: "success",
        })
      })
      .catch(error => {
        console.dir(error)
        if(error.response.data.message) {
          swal({
            title: `Atención`,
            text: `${ error.response.data.message }`,
            icon: "error",
          })
        }
        if (error.response.data.errors) {
          swal({
            title: `Atención`,
            text: `${ error.response.data.errors[0].message }`,
            icon: "error",
          })
        }
        
      })
    }
  }
}
</script>

<style>

.mr {
  margin-right: 10px;
}

.received {
  height: calc(2.0625rem + 2px)!important;
}

</style>