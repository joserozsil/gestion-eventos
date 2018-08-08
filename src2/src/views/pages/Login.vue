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
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" placeholder="Usuario" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" placeholder="Contraseña" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4">
                        <router-link class="white"  to="/dashboard">
                          Iniciar Sesión
                        </router-link>
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
export default {
  name: 'Login'
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
