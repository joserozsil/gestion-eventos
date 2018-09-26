<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
      src="@/assets/profile.jpg"
      class="img-avatar"
      /> 
    </template>
    <template slot="dropdown">
      <b-dropdown-header
        tag="div"
        class="text-center">
        <strong>Cuenta</strong>
      </b-dropdown-header>
      <b-dropdown-item>
        <i class="fa fa-lock"/>
        <a @click="logout()" class="black">
          Cerrar Sesión
        </a>
      </b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return {  }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>


<style>
.black {
  color: black;
}
</style>