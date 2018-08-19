<template>
  <div class="img-bg app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group class="card-signin">
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Iniciar Sesión</h1>
                  <p class="text-muted">Iniciar sesión en el sistema</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                      <b-form-input v-model="loginData.usuario" type="text" class="form-control" placeholder="Usuario" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input @keyup.enter="signIn()" v-model="loginData.contraseña" type="password" class="form-control" placeholder="Contraseña" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button @click="signIn()" variant="primary" class="px-4">
                          Iniciar Sesión
                      </b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">¿Ha olvidado su contraseña?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import settings from '../../config'
  import swal from 'sweetalert';

  export default {
    name: 'Login',
    data: () => {
      return {
        alertCount: 0,
        ip: '',
        loginData: {
          usuario: 'jrodriguez',
          contraseña: 'Joseangel19$'
        }
      }
    },
    mounted() {
      this.getUserIP((ip) => {
        console.log(ip)
        this.ip = ip
      })
    },
    methods: {
      signIn() {
        axios.post(settings.API_URL + '/signin', this.loginData)
        .then(resp => {
          if(resp.status == 200) {
            localStorage.setItem('token', resp.data.token)
            axios.post(settings.API_URL + '/history', { usuario_id: resp.data.user.id }).then(other => {
              swal("¡Listo!", `Bienvenido al sistema ${resp.data.user.nombre}`, "success")
              this.$router.push({ name: 'Dashboard' })
            })
          }
        })
        .catch(error => {
          swal("¡Atención!", error.response.data.message, "error")
          this.alertCount++
          if(this.alertCount >= 2) {
            this.storeAlert()
          }
        })
      },
      storeAlert() {
        axios.post(settings.API_URL + '/alerts', { ip: this.ip,usuario: this.loginData.usuario })
        .then(resp => {
          this.alertCount = 0
        })
      },
      getUserIP(onNewIP) {
        var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        
        var pc = new myPeerConnection({
            iceServers: []
        }),
        noop = function() {},
        localIPs = {},
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;

        function iterateIP(ip) {
            if (!localIPs[ip]) onNewIP(ip);
            localIPs[ip] = true;
        }

        //create a bogus data channel
        pc.createDataChannel("");

        // create offer and set local description
        pc.createOffer().then(function(sdp) {
            sdp.sdp.split('\n').forEach(function(line) {
                if (line.indexOf('candidate') < 0) return;
                line.match(ipRegex).forEach(iterateIP);
            });
            pc.setLocalDescription(sdp, noop, noop);
        }).catch(function(reason) {
            // An error occurred, so handle the failure to connect
        });

        //listen for candidate events
        pc.onicecandidate = function(ice) {
            if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
            ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
        };
      }
    }
  }
</script>

<style scoped>
  .img-bg {
      background: url(http://acn.com.ve/wp-content/uploads/2018/06/muerto-el-chato.jpg);
      background-repeat: no-repeat;
      background-size: cover;
  }

  .img-bg:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 5;
  }

  .card-signin {
    position: relative;
    z-index: 10;
  }

  .white {
    color: white;
  }

</style>
