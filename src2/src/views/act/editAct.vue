<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <!-- datos generales -->
        <b-card>
          <div slot="header">
            <strong>Modificar Cronología</strong>
          </div>
          <!-- primer encabezado -->
          <b-row>
            <b-col sm="6">
              <b-form-group
                :description="`CC-`+port.clise"
                label="Clise"
                laber-for="clise"
                :horizontal="false">
                <b-form-input :disabled="receptionData.estado === 'COMPLETADO'" v-model="port.clise" type="number" id="clise"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                :description="`K-18-0071-`+port.exp"
                label="Exp"
                laber-for="exp"
                :horizontal="false">
                <b-form-input :disabled="receptionData.estado === 'COMPLETADO'" v-model="port.exp" type="number" id="exp"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <!--/ primer encabezado -->
          <!-- segundo encabezado -->
          <b-row>
            <b-col sm="6">
              <b-form-group
                description="Ej: Delegación Estadal Bolívar"
                label="Dependencia"
                laber-for="dependencia"
                :horizontal="false">
                <b-form-input v-model="port.dependencia" type="text" id="dependencia"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: 10"
                label="Memorando número"
                laber-for="memo"
                :horizontal="false">
                <b-form-input v-model="port.memo" type="text" id="memo"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: 19/07/2018"
                label="Fecha Memorando"
                laber-for="f_memo"
                :horizontal="false">
                <b-form-input v-model="port.f_memo" type="date" id="f_memo"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: Sub Delegación"
                label="Solicitado por:"
                laber-for="solicitado_por"
                :horizontal="false">
                <b-form-input v-model="port.solicitado_por" type="text" id="solicitado_por"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: 19/07/2018"
                label="Fecha del caso"
                laber-for="f_caso"
                :horizontal="false">
                <b-form-input v-model="port.f_caso" type="date" id="f_caso"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: José Rodríguez"
                label="Agraviado"
                laber-for="agraviado"
                :horizontal="false">
                <b-form-input v-model="port.agraviado" type="text" id="f_caso"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: José Rodríguez"
                label="Dibujante"
                laber-for="dibujante"
                :horizontal="false">
                <select v-if="users.length" v-model="port.dibujante" class="form-control">
                  <option v-for="(user, index) in users" :value="user.id">
                    <template v-if="user.nombre && user.apellido && user.rol">
                      {{ user.nombre }} {{ user.apellido }} - {{ user.rol }}
                    </template>
                  </option>
                </select>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: José Rodríguez"
                label="Fecha del R.H"
                laber-for="f_rh"
                :horizontal="false">
                <b-form-input v-model="port.f_rh" type="date" id="f_caso"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <!--/ segundo encabezado -->
          <b-row>
            <b-col sm="6">
              <b-form-group
                description="Ej: Sub Delegación"
                label="Dependencia"
                laber-for="dependencia2"
                :horizontal="false">
                <b-form-input v-model="port.dependencia2" type="text" id="f_caso"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: Brigada contra Robo y Hurto"
                label="Solicitado por:"
                laber-for="solicitado_por2"
                :horizontal="false">
                <b-form-input v-model="port.solicitado_por2" type="text" id="solicitado_por"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: José Rodríguez"
                label="Agraviado"
                laber-for="agraviado2"
                :horizontal="false">
                <b-form-input v-model="port.agraviado2" type="text" id="f_caso"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description=""
                label="Dirección S.S"
                laber-for="direccion"
                :horizontal="false">
                <b-form-input v-model="port.direccion" type="text" id="direccion">
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-form-group
                description=""
                label="Datos Aportados por:"
                laber-for="origen_datos"
                :horizontal="false">
                <b-form-input v-model="port.origen_datos" type="text">
                </b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- caracteristicas del solicitado -->
          <b-row>
            <b-col sm="12">
              <p>Características del Solicitado</p>
            </b-col>
  					<b-col sm="4">
  						<b-form-group
                description="Ej: 18-25"
                label="Edad"
                laber-for="edad"
                :horizontal="false">
                <select v-model="port.edad" class="form-control">
                  <option value="18-24">18-24</option>
                  <option value="24-28">24-28</option>
                  <option value="28-32">28-32</option>
                  <option value="32-45">32-45</option>
                  <option value="45-60">45-60</option>
                  <option value="60+">60+</option>
                </select>
              </b-form-group>
  					</b-col>
  					<b-col sm="4">
  						<b-form-group
                description="Ej: Trigueña"
                label="Color de Piel"
                laber-for="color_piel"
                :horizontal="false">
                <select v-model="port.color_piel" class="form-control">
                  <option value="AMARILLA">Amarilla</option>
                  <option value="BLANCA">Blanca</option>
                  <option value="MORENO">Moreno</option>
                  <option value="NEGRA">Negra</option>
                  <option value="ROJIZA">Rojiza</option>
                  <option value="TRIGUEÑA">Trigueña</option>
                </select>
              </b-form-group>
  					</b-col>
  					<b-col sm="4">
  						<b-form-group
                description="Ej: Mediana"
                label="Boca"
                laber-for="boca"
                :horizontal="false">
                <select v-model="port.boca" class="form-control">
                  <option value="GRANDE">Grande</option>
                  <option value="MEDIANA">Mediana</option>
                  <option value="PEQUEÑA">Pequeña</option>
                </select>
              </b-form-group>
  					</b-col>
  					<b-col sm="4">
  						<b-form-group
                description="Ej: Gruesos"
                label="Labios"
                laber-for="labios"
                :horizontal="false">
                <select v-model="port.labios" class="form-control">
                  <option value="DELGADOS">Delgados</option>
                  <option value="GRUESOS">Gruesos</option>
                  <option value="LEPROFINOS">Leprofinos</option>
                  <option value="INF. PROMINENTE">Inf. Prominente</option>
                  <option value="SUP. PROMINENTE">Sup. Prominente</option>
                  <option value="NORMALES">Normales</option>
                </select>
              </b-form-group>
  					</b-col>
  					<b-col sm="4">
  						<b-form-group
                description="Ej: 1.71 a 1.80"
                label="Estatura"
                laber-for="estatura"
                :horizontal="false">
                <select v-model="port.estatura" class="form-control">
                  <option value="1.55 o MENOS">1.55 o Menos</option>
                  <option value="1.56 a 1.60">1.56 a 1.60</option>
                  <option value="1.61 a 1.70">1.61 a 1.70</option>
                  <option value="1.71 a 1.80">1.71 a 1.80</option>
                  <option value="1.81 a 1.90">1.81 a 1.90</option>
                  <option value="1.91 o MAS">1.91 a Más</option>
                </select>
              </b-form-group>
  					</b-col>
  					<b-col sm="4">
  						<b-form-group
                description="Ej: Negro"
                label="Color de Cabello"
                laber-for="color_cabello"
                :horizontal="false">
                <select v-model="port.color_cabello" class="form-control">
                  <option value="AMARILLO">Amarillo</option>
                  <option value="BLANCO">Blanco</option>
                  <option value="ENTRECANO">Entrecano</option>
                  <option value="CASTAÑO OSCURO">Castaño Oscuro</option>
                  <option value="NEGRO">Negro</option>
                  <option value="ROJIZO">Rojizo</option>
                  <option value="TEÑIDO">Teñido</option>
                </select>
              </b-form-group>
  					</b-col>
  					<b-col sm="4">
  						<b-form-group
                description="Ej: 91kg a 180kg"
                label="Peso"
                laber-for="peso"
                :horizontal="false">
                <select v-model="port.peso" class="form-control">
                  <option value="30 o MENOS">30 o Menos</option>
                  <option value="31 a 40">31 a 40</option>
                  <option value="41 a 60">41 a 60</option>
                  <option value="61 a 70">61 a 70</option>
                  <option value="71 a 90">71 a 90</option>
                  <option value="91 a 100">91 a 100</option>
                  <option value="101 o MAS">101 o Mas</option>
                </select>
              </b-form-group>
  					</b-col>
  					<b-col sm="4">
  						<b-form-group
                description="Ej: Bigote Abundante"
                label="Barba-Bigote"
                laber-for="barba_bigote"
                :horizontal="false">
                <select v-model="port.barba_bigote" class="form-control">
                  <option value="BARBILLA">Barbilla</option>
                  <option value="BARBA ABUNDANTE">Barba Abundante</option>
                  <option value="BARBA ESCASA">Barba Escasa</option>
                  <option value="BIGOTE ABUNDANTE">Bigote Abundante</option>
                  <option value="BIGOTE ESCASO">Bigote Escaso</option>
                  <option value="PATILLA CORTA">Patilla Corta</option>
                  <option value="PATILLA LARGA">Patilla Larga</option>
                </select>
              </b-form-group>
  					</b-col>
  					<b-col sm="4">
  						<b-form-group
                description="Ej: Grande"
                label="Nariz"
                laber-for="nariz"
                :horizontal="false">
                <select v-model="port.nariz" class="form-control">
                  <option value="GRANDE">Grande</option>
                  <option value="PEQUEÑA">Pequeña</option>
                  <option value="ACHATADA">Achatada</option>
                  <option value="AGUILEÑA">Aguileña</option>
                  <option value="PERFILADA">Perfilada</option>
                  <option value="RESPINGADA">Respingada</option>
                  <option value="TORCIDA">Tabique Hundido</option>
                </select>
              </b-form-group>
  					</b-col>
  					<b-col sm="4">
  						<b-form-group
                description="Ej: Parpados Oscuros"
                label="Ojos"
                laber-for="ojos"
                :horizontal="false">
                <select v-model="port.ojos" class="form-control">
                  <option value="ACHINADOS">Achinados</option>
                  <option value="SALTONES">Saltones</option>
                  <option value="GRANDES">Grandes</option>
                  <option value="PEQUEÑOS">Pequeños</option>
                  <option value="ARTIFICIALES">Artificiales</option>
                </select>
              </b-form-group>
  					</b-col>
            <b-col sm="4">
              <b-form-group
                description="Ej: Azules"
                label="Ojos (iris)"
                laber-for="ojos_iris"
                :horizontal="false">
                <select v-model="port.ojos_iris" class="form-control">
                  <option value="AZULES">Azules</option>
                  <option value="GRISES">Grises</option>
                  <option value="PARPADOS OSCUROS">Parpados Oscuros</option>
                  <option value="PARDOS CLAROS">Pardos Claro</option>
                  <option value="VERDES">Verdes</option>
                </select>
              </b-form-group>
            </b-col>
  					<b-col sm="4">
  						<b-form-group
                description="Ej: Alargada"
                label="Cabeza"
                laber-for="Cabeza"
                :horizontal="false">
                <select v-model="port.cabeza" class="form-control">
                  <option value="ALARGADA">Alargada</option>
                  <option value="GRANDE">Grande</option>
                  <option value="PEQUEÑA">Pequeña</option>
                  <option value="NORMAL">Normal</option>
                </select>
              </b-form-group>
  					</b-col>
            <b-col sm="4">
              <b-form-group
                description="Ej: Liso"
                label="Tipo Cabello"
                laber-for="tipo_cabello"
                :horizontal="false">
                <select v-model="port.tipo_cabello" class="form-control">
                  <option value="LISO">Liso</option>
                  <option value="CRESPO">Crespo</option>
                  <option value="AFRO">Afro</option>
                  <option value="ONDULADO">Ondulado</option>
                  <option value="LISO REBELDE">Liso Rebelde</option>
                </select>
              </b-form-group>
            </b-col>
          </b-row>
          <!--/ caracteristicas del solicitado -->
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
                <b-form-input  disabled
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
          <b-button 
            v-if="isNew" 
            @click="storePortrait()" 
            class="mr" 
            type="submit" 
            variant="primary">
            Crear
          </b-button>
          <b-button 
            v-if="!isNew" 
            @click="updatePortrait()" 
            class="mr" 
            type="submit" 
            variant="primary">
            Actualizar
          </b-button>
          <b-button  @click="$router.go(-1)" class="mr" type="button" variant="secondary">
            Cancelar
          </b-button>
          <b-button v-if="receptionData.estado === 'EN_PROCESO'" :disabled="receptionData === 'COMPLETADO'"  @click="onChangeStatus()" class="mr" type="button" variant="primary">
            Marcar Como Procesada
          </b-button>
          Estado: {{ receptionData.estado }}
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
import moment from 'moment'

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
      },
      options: [
        { text: 'Completado', value: 'COMPLETADO' },
        { text: 'En Proceso', value: 'EN_PROCESO' },
      ]
    }
  },
  mounted() {
    this.user = this.$store.getters.user
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')

    this.portraitExist().then(resp => {
      if(this.isEmpty(resp.data.data)) {
        this.isNew = true
      } else {
        this.isNew = false
        const clise = resp.data.data.clise.split('-')[1]
        const exp = resp.data.data.exp.split('-')[3]

        this.port = resp.data.data
        this.port.clise = clise
        this.port.exp = exp
        this.port.f_memo = moment(this.port.f_memo).format('YYYY-MM-DD')
        this.port.f_caso = moment(this.port.f_caso).format('YYYY-MM-DD')
        this.port.f_rh = moment(this.port.f_rh).format('YYYY-MM-DD')

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
    portraitExist() {
      return new Promise((resolve, reject) => {
        axios.get(`${settings.API_URL}/evidences/${this.$route.params.id}/portraits`)
        .then(resp => {
          resolve(resp)
        })
      })
    },
    storePortrait() {
      Object.assign(this.port, { evidencia_id: this.$route.params.id})
      Object.assign(this.port, { clise: `CC-${this.port.clise}`})
      Object.assign(this.port, { exp: `K-18-0071-${this.port.exp}`})

      axios.post(`${settings.API_URL}/portraits`, this.port)
      .then(resp => {
        swal({
          title: "Retrato modificado exitosamente",
          text: ``,
          icon: "success",
        })
        this.$router.push({ name: 'chronologyList' })

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
    updatePortrait() {
      Object.assign(this.port, { clise: `CC-${this.port.clise}`})
      Object.assign(this.port, { exp: `K-18-0071-${this.port.exp}`})

      axios.put(`${settings.API_URL}/portraits/${this.port.id}`, this.port)
      .then(resp => {
        swal({
          title: "Retrato modificado exitosamente",
          text: ``,
          icon: "success"
        })
        this.$router.push({ name: 'chronologyList' })
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
      axios.get(`${settings.API_URL}/users?limit=1}`)
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

      // campo clise
      if(!this.port.clise && estado == 'COMPLETADO') {
        this.receptionData.estado = 'EN_PROCESO'
        this.showError('clise')
        return ''
      }

      if ( this.port.clise.length < 5 &&  estado == 'COMPLETADO') {
        swal({
          title: `Atención`,
          text: `El campo clise debe contener 5 digitos`,
          icon: "error",
        })
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if ( this.port.clise.length > 5 && estado == 'COMPLETADO') {
        swal({
          title: `Atención`,
          text: `El campo clise debe contener 5 digitos`,
          icon: "error",
        })
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }
      //-- campo clise
      // campo exp
      if(!this.port.exp && estado == 'COMPLETADO') {
        this.showError('exp')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if ( this.port.exp.length < 6 &&  estado == 'COMPLETADO') {
        swal({
          title: `Atención`,
          text: `El campo exp debe contener 6 digitos`,
          icon: "error",
        })
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if ( this.port.exp.length > 6 && estado == 'COMPLETADO') {
        swal({
          title: `Atención`,
          text: `El campo exp debe contener 6 digitos`,
          icon: "error",
        })
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }
      //-- campo exp

      if(!this.port.dibujante && estado == 'COMPLETADO') {
        this.showError('Dibujante')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if(!this.images.length && estado == 'COMPLETADO') {
        this.showError('Imagenes')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if(!this.port.solicitado_por && estado == 'COMPLETADO') {
        this.showError('solicitado por')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if(!this.port.exp && estado == 'COMPLETADO') {
        this.showError('exp')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      this.receptionData.estado = 'COMPLETADO'

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