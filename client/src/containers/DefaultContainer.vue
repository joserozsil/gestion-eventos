<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <!--
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="img/logo.png" width="89" height="25" alt="CoreUI Logo">
        <img class="navbar-brand-minimized" src="img/sygnet.png" width="30" height="30" alt="CoreUI Logo">
      </b-link> -->
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3" to="/dashboard">Inicio</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
          <b-nav-item class="px-3" to="/dashboard">
            {{ usuario.nombre }} {{ usuario.apellido }}
          </b-nav-item>
        </b-nav-item>
        <DefaultHeaderDropdownAccnt/>
      </b-navbar-nav>
      <AsideToggler style="visibility:hidden" class="d-none d-lg-block" />
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb style="visibility: hidden;" :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <a href="http://www.cicpc.gob.ve/" target="_blank">CICPC</a>
        <span class="ml-1">&copy; 2018 Sub Delegación Guayana, todos los derechos reservados.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Desarrollado por:</span>
        <a target="_blank" href="http://joserozsil.github.io/">Ing. José Rodríguez</a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from '@/_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'

import store from '../store/store'

export default {
  name: 'full',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  store,
  data () {
    return {
      nav: [],
      usuario: {
        nombre: 'joserozsil',
        apellido: 'Rodríguez'
      },
      routes: nav.items
    }
  },
  mounted() {
    this.$store.dispatch('getUser')
    this.usuario = this.$store.getters.user

    let newNav = []

    this.routes.forEach(element => {
      element.role.forEach(e => {
        if(e == 'ALL') {
          newNav.push(element)
        }
        if(e == this.usuario.rol) {
          newNav.push(element)
        }
      })
    })

    this.nav = newNav
  },
  beforeUpdate() {
    this.$store.dispatch('getUser')
    this.usuario = this.$store.getters.user
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  }
}
</script>
