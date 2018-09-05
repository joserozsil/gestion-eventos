<template>
<div class="animated fadeIn">
  <b-row>
    <b-col sm="12">
      <!-- datos de cronologia -->
      <b-card>
        <div slot="header">
          <strong>Imágenes</strong>
        </div>
        <b-row>
          <b-col sm="12">
            <b-form-file 
            v-b-popover.hover="'Seleccione imagen principal del retrato, solo soportado archivos con extensión .jpg .png .gif y .jpeg'" 
            title="Seleccionar imagen de retrato"
            v-model="file" 
            :state="Boolean(file)" 
            placeholder="Seleccione una imagen"
            accept=".jpg, .png, .gif .jpeg"
            ref="fileinput">
            </b-form-file>
            <div v-show="file && file.name" class="mt-2">
              Nombre del Archivo: {{ file && file.name }}
            </div>
          </b-col>
        </b-row>
      </b-card>
      <!--/ datos de cronología -->

      <!-- datos generales -->
      <b-card>
        <div slot="header">
          <strong>Modificar Cronología</strong>
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
                  {{ user.nombre }} {{ user.apellido }} - {{ user.rol }}
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
                <option value="28-32">28-32</option>
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

      <!-- datos de cronologia -->
      <b-card>
        <div slot="header">
          <strong>Datos de Recepción</strong>
        </div>
        <b-row>
          <b-col sm="6">
            <b-form-group
              label="Tipo"
              laber-for="tipo_recepcion"
              :disabled="true"
              :horizontal="false">
              <b-form-input :value="receptionData.tipo_recepcion" type="text" id="clise" class="form-control"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group
              label="Funcionario"
              :disabled="true"
              :horizontal="false">
              <b-form-input :value="receptionData.Usuario.nombre + ' ' + receptionData.Usuario.apellido" type="text" id="clise" class="form-control"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="12">
            <b-form-group
              label="Descripción"
              laber-for="Descripción"
              :disabled="true"
              :horizontal="false">
              <b-form-textarea :value="receptionData.descripcion" rows="5" class="form-control">
              </b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </b-card>
      <!--/ datos de cronología -->
      
      <!-- acciones -->
      <div class="form-actions padding">
        <b-button @click="storePortrait()" class="mr" type="submit" variant="primary">
          Crear
        </b-button>
        <b-button  @click="$router.go(-1)" class="mr" type="button" variant="secondary">
          Cancelar
        </b-button>
         <b-form-checkbox 
            v-b-popover.hover="'Permite ingresar cronología en el listado de módulo correspondiente'" 
            title="Marcar Cronología"
            class="mr" id="estado"
            v-model="port.estado"
            value="COMPLETADO"
            unchecked-value="EN_PROCESO">
          Marcar como procesada
        </b-form-checkbox>
      </div>
      <!--/ acciones -->
    </b-col>
  </b-row>
</div>
</template>

<script>
import settings from '../../config'
import swal from 'sweetalert'

export default {
  data: () => {
    return {
      users: [],
      file: null,
      port: {},
      receptionData: {}
    }
  },
  mounted() {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
    this.getUsers()
    this.getEvidence()
  },
  methods: {
    storePortrait() {
      axios.post(`${settings.API_URL}/portraits`, this.port)
      .then(resp => {
        axios.put(`${settings.API_URL}/evidences/${this.$route.params.id}`, {
          retrato_id: resp.data.id
        })
        .then(response => {
          swal({
            title: "Retrato modificado exitosamente",
            text: ``,
            icon: "success",
          })
        })
      })
      .catch(error => {

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
      axios.get(`${settings.API_URL}/evidences/${this.$route.params.id}`)
      .then(resp => {
        this.receptionData = resp.data.data
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
</style>  