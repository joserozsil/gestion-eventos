<template>
<div class="animated fadeIn">
  <b-row>
    <b-col sm="12">
      <b-card>
        <div slot="header">
          <strong>Crear Nuevo Usuario</strong>
        </div>
        <b-row>
          <b-col sm="6">
            <b-form-group
              description="Ej: José Angel"
              label="Nombre"
              laber-for="firstName"
              :horizontal="false">
              <b-form-input v-model="user.nombre" type="text" id="firstName"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group
              description="Ej: Rodríguez"
              label="Apellido"
              laber-for="lastName"
              :horizontal="false">
              <b-form-input v-model="user.apellido" type="text" id="lastName"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group
          description="Ej: 24847272"
          label="Cédula"
          laber-for="cedula"
          :horizontal="false">
          <b-form-input v-model="user.cedula" type="text" id="cedula"></b-form-input>
        </b-form-group>
        <b-form-group
          description="Ej: Ud 104 San Félix, Edo Bolívar"
          label="Dirección"
          laber-for="address"
          :horizontal="false">
          <b-form-input v-model="user.direccion" type="text" id="address"></b-form-input>
        </b-form-group>
        <b-form-group
          description="Ej: 04249566351"
          label="Teléfono"
          laber-for="phone"
          :horizontal="false">
          <b-form-input v-model="user.telefono" type="text" id="phone"></b-form-input>
        </b-form-group>
        <b-row>
          <b-col sm="6">
            <b-form-group
              description="Ej: jrodriguez"
              label="Nombre de Usuario"
              laber-for="username"
              :horizontal="false">
              <b-form-input v-model="user.usuario" type="text" id="username"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group
              description="Ej: ADMINISTRADOR"
              label="Rol del usuario"
              laber-for="rol"
              :horizontal="false">
              <select v-model="user.rol" class="form-control">
                <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                <option value="RECEPCION" default selected="true">RECEPCIONISTA</option>
                <option value="OPERADOR_LABORATORIO">OPERADOR DE LABORATORIO</option>
                <option value="OPERADOR_BALISTICA">OPERADOR DE BALISTICA</option>
                <option value="OPERADOR_HECHOS">OPERADOR DE RECONSTRUCCIÓN DE HECHOS</option>
              </select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="6">
            <b-form-group
              description="Ej: Ayub*19_"
              label="Contraseña"
              laber-for="password"
              :horizontal="false">
              <b-form-input v-model="user.contraseña" type="password" id="password"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group
              description="Ej: Ayub*19_"
              label="Repetir Contraseña"
              laber-for="repeatPassword"
              :horizontal="false">
              <b-form-input v-model="user.repetirContraseña" type="text" id="repeatPassword"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-card>
      <div class="form-actions">
        <b-button @click="storeUser()" class="mr" type="submit" variant="primary">
          Crear
        </b-button>
        <b-button  @click="$router.go(-1)" type="button" variant="secondary">
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

export default {
  data: () => {
    return {
      user: {}
    }
  },
  mounted() {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
  },
  methods: {
    storeUser() {
      axios.post(`${settings.API_URL}/users`, {
        usuario: this.user.usuario,
        nombre: this.user.nombre,
        apellido: this.user.apellido,
        direccion: this.user.direccion,
        contraseña: this.user.contraseña,
        cedula: this.user.cedula,
        rol: this.user.rol
      })
      .then(resp => {
        swal({
          title: "Usuario registrado correctamente",
          text: `El usuario ${resp.data.usuario} se ha registrado correctamente`,
          icon: "success",
        })

        this.$router.push({ name: 'userList' })
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
    }
  }
}


</script>

<style>

.mr {
  margin-right: 10px;
}

</style>