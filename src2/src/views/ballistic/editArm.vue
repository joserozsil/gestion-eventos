<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <!-- datos generales -->
        <b-card>
          <div slot="header">
            <strong>Detalles de Cronología</strong>
          </div>
          <!-- primer encabezado -->
          <b-row>
            <b-col sm="6">
              <b-form-group
                description="CC - 72433295"
                label="Clise"
                laber-for="clise"
                :horizontal="false">
                <b-form-input v-model="port.clise" type="text" id="clise"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="K-18-0071-008000"
                label="Exp"
                laber-for="exp"
                :horizontal="false">
                <b-form-input v-model="port.exp" type="text" id="exp"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <!--/ primer encabezado -->
          <!-- segundo encabezado -->
          <b-row>
            <b-col sm="6">
              <b-form-group
                description="Ej: Delegación Estadal Bolívar"
                label="Tipo"
                laber-for="tipo"
                :horizontal="false">
                <b-form-input v-model="port.tipo" type="text" id="tipo"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: 10"
                label="Color"
                laber-for="color"
                :horizontal="false">
                <b-form-input v-model="port.color" type="text" id="color"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: 19/07/2018"
                label="Calibre"
                laber-for="calibre"
                :horizontal="false">
                <b-form-input v-model="port.calibre" type="text" id="calibre"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: Sub Delegación"
                label="Longitud de Cañon:"
                laber-for="longitud_cañon"
                :horizontal="false">
                <b-form-input v-model="port.longitud_cañon" type="text" id="longitud_cañon"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: 19/07/2018"
                label="Dimensiones"
                laber-for="dimensiones"
                :horizontal="false">
                <b-form-input v-model="port.dimensiones" type="text" id="dimensiones"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: José Rodríguez"
                label="Peso"
                laber-for="peso"
                :horizontal="false">
                <b-form-input v-model="port.peso" type="text" id="peso"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: José Rodríguez"
                label="Peso Cargador"
                laber-for="peso_cargador"
                :horizontal="false">
                <b-form-input v-model="port.peso_cargador" type="text" id="peso_cargador"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: José Rodríguez"
                label="Miras"
                laber-for="miras"
                :horizontal="false">
                <b-form-input v-model="port.miras" type="text" id="miras"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <!--/ segundo encabezado -->
          <b-row>
            <b-col sm="6">
              <b-form-group
                description="Ej: Sub Delegación"
                label="Capacidad Cargador"
                laber-for="capacidad_cargador"
                :horizontal="false">
                
                <b-form-input v-model="port.capacidad_cargador" type="text" id="capacidad_cargador"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: Brigada contra Robo y Hurto"
                label="Disparador"
                laber-for="disparador"
                :horizontal="false">
                <b-form-input v-model="port.disparador" type="text" id="disparador"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
  					<b-col sm="12">
  						<b-form-group
                label="Comentario"
                laber-for="comentarios"
                :horizontal="false">
                <b-form-textarea v-model="port.comentarios" rows="5" class="form-control">
                </b-form-textarea>
              </b-form-group>
  					</b-col>
          </b-row>
        </b-card>
        <!--/ datos generales -->

        <!-- datos de imagenes -->
        <b-card>
          <div slot="header">
            <strong>Imágenes</strong>
          </div>
          <b-row>
            <b-col sm="12">
              <div class="wrapper">
                <gallery :images="images" :index="index" @close="index = null"></gallery>
                <div
                  class="image"
                  v-for="(image, imageIndex) in images"
                  :key="imageIndex"
                  :class="['image', index == imageIndex ? 'selected' : '']"
                  @click="index = imageIndex"
                  :style="{ backgroundImage: 'url(' + image + ')', width: '100%', height: '300px' }"
                ></div>
              </div>
              <vue-dropzone
                v-on:vdropzone-success="reloadImages"
                v-on:vdropzone-sending="sendingEvent"
                ref="myVueDropzone" 
                id="dropzone" 
                :options="dropzoneOptions">
              </vue-dropzone>
            </b-col>
          </b-row>
        </b-card>
        <!--/ datos de imagenes -->

        <!-- datos de cronologia -->
        <b-card>
          <div slot="header">
            <strong>Datos de Recepción</strong>
          </div>
          <b-row v-if="!loading">
            <b-col sm="6">
              <b-form-group
                label="Tipo"
                laber-for="tipo_recepcion"
                :disabled="true"
                :horizontal="false">
                <b-form-input disabled :value="receptionData.tipo_recepcion" type="text" id="clise" class="form-control"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                label="Funcionario"
                :disabled="true"
                :horizontal="false">
                <b-form-input disabled 
                  :value="receptionData.Usuario.nombre + ' ' + receptionData.Usuario.apellido" type="text"class="form-control">
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-form-group
                label="Descripción"
                laber-for="Descripción"
                :disabled="true"
                :horizontal="false">
                <b-form-textarea disabled :value="receptionData.descripcion" rows="5" class="form-control">
                </b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
        <!--/ datos de cronología -->

        <!-- acciones -->
        <div class="form-actions padding">
          <b-form-group>
            <b-form-radio-group @change="onChangeStatus()" v-model="receptionData.estado" name="radioSubComponent">
              <b-form-radio value="COMPLETADO">Completado</b-form-radio>
              <b-form-radio value="EN_PROCESO">En Proceso</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <b-button 
            v-if="isNew" 
            @click="storeArm()" 
            class="mr" 
            type="submit" 
            variant="primary">
            Crear
          </b-button>
          <b-button 
            v-if="!isNew" 
            @click="updateArm()" 
            class="mr" 
            type="submit" 
            variant="primary">
            Actualizar
          </b-button>
          <b-button  @click="$router.go(-1)" class="mr" type="button" variant="secondary">
            Cancelar
          </b-button>
        </div>
        <!--/ acciones -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

import VueGallery from 'vue-gallery'

import settings from '../../config'
import swal from 'sweetalert'
import store from '../../store/store'

export default {
  components: {
    vueDropzone: vue2Dropzone,
    'gallery': VueGallery
  },
  data: () => {
    return {
      users: [],
      user: {},
      port: {},
      receptionData: {},
      images: [],
      index: null,
      isNew: false,
      loading: true,
      dropzoneOptions: {
        url: `${settings.API_URL}/pictures`,
        dictDefaultMessage: "CARGAR IMAGEN",
        headers: { 
          "authorization" : localStorage.getItem('token')
         }
      }
    }
  },
  mounted() {
    this.user = this.$store.getters.user
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')

    this.armExist().then(resp => {
      if(this.isEmpty(resp.data.data)) {
        this.isNew = true
      } else {
        this.isNew = false
        this.port = resp.data.data
        this.port.Evidencium.Imagens.forEach(element => {
          var url = `${ settings.API_IMAGE}/${element.nombre_archivo}`
          this.images.push(url)
        })
      }
    })

    this.getUsers()
    this.getEvidence()

  },
  methods: {
    armExist() {
      return new Promise((resolve, reject) => {
        axios.get(`${settings.API_URL}/evidences/${this.$route.params.id}/arms`)
        .then(resp => {
          resolve(resp)
        })
      })
    },
    storeArm() {
      Object.assign(this.port, { evidencia_id: this.$route.params.id})
      axios.post(`${settings.API_URL}/arms`, this.port)
      .then(resp => {
        swal({
          title: "Item modificado exitosamente",
          text: ``,
          icon: "success",
        })
      })
      .catch(error => {
        if(error.response.data.name == 'SequelizeDatabaseError') {
          swal({
            title: `Atención`,
            text: `Algo ha salido mal, intentelo nuevamente`,
            icon: "error",
          })
        }

        if(error.response.data.message) {
          swal({
            title: `Atención`,
            text: `${ error.response.data.message }`,
            icon: "error",
          })
        }
        
        error.response.data.errors.forEach(element => {
          swal({
            title: `Atención`,
            text: `${ element.message }`,
            icon: "error",
          })
        })
      })
    },
    updateArm() {
      axios.put(`${settings.API_URL}/arms/${this.port.id}`, this.port)
      .then(resp => {
        swal({
          title: "Retrato modificado exitosamente",
          text: ``,
          icon: "success"
        })
      })
      .catch(error => {
        if(error.response.data.name == 'SequelizeDatabaseError') {
          swal({
            title: `Atención`,
            text: `Algo ha salido mal, intentelo nuevamente`,
            icon: "error",
          })
        }

        if(error.response.data.message) {
          swal({
            title: `Atención`,
            text: `${ error.response.data.message }`,
            icon: "error",
          })
        }
        
        error.response.data.errors.forEach(element => {
          swal({
            title: `Atención`,
            text: `${ element.message }`,
            icon: "error",
          })
        })
      })
    },
    getUsers() {
      axios.get(`${settings.API_URL}/users?limit=1`)
      .then(resp => {
        axios.get(`${settings.API_URL}/users?limit=${resp.total}`)
        .then(resp => {
          this.users = resp.data.data
        })
      })
    },
    getEvidence() {
      this.loading = true
      axios.get(`${settings.API_URL}/evidences/${this.$route.params.id}`)
      .then(resp => {
        this.receptionData = resp.data.data
        this.loading = false
      })
    },
    isEmpty(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false
      }

      return JSON.stringify(obj) === JSON.stringify({})
    },
    sendingEvent (file, xhr, formData) {
      formData.append('evidencia_id', this.$route.params.id)
      formData.append('usuario_id', this.user.id)
    },
    reloadImages(file, response) {
      this.images.push(`${settings.API_IMAGE}/${response.nombre_archivo}`)
    },
    onChangeStatus() {

      const estado = this.receptionData.estado == 'COMPLETADO' ? 'EN_PROCESO' : 'COMPLETADO'

      if(!this.port.tipo && estado == 'COMPLETADO') {
        this.showError('Tipo')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if(!this.images.length && estado == 'COMPLETADO') {
        this.showError('Imagenes')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if(!this.port.color && estado == 'COMPLETADO') {
        this.showError('color')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if(!this.port.calibre && estado == 'COMPLETADO') {
        this.showError('calibre')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      axios.put(`${settings.API_URL}/evidences/${this.receptionData.id}`, {
        estado
      }).then(resp => {
        console.log(`Estado actualizado a ${estado}`)
      }).catch(error => {
      })

    },
    showError(field) {
      swal({
        title: `Atención`,
        text: `El campo ${field} es requerido`,
        icon: "error",
      })
    }
  }
}


</script>

<style scoped>
  .padding {
    padding: 2em 0;
  }

  .mr {
    margin-right: 1em;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    grid-auto-rows: minmax(200px, auto);
    margin-bottom: 1em;
  }
  .image {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
  }
</style>  