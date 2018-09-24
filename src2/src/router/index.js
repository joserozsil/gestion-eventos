import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const UserCreate = () => import('@/views/users/UserCreate')
const UserUpdate = () => import('@/views/users/UserUpdate')
const HistoryAccess = () => import('@/views/users/HistoryAccess')

// Security
const Alert = () => import('@/views/security/Alert')
const Action = () => import('@/views/security/Action')

// Act
const Act = () => import('@/views/act/Act')
const ActEdit = () => import('@/views/act/editAct')
const ActDetail = () => import('@/views/act/detailAct')

// Reception
const Reception = () => import('@/views/reception/Reception')
const ReceptionCreate = () => import('@/views/reception/ReceptionCreate')

// cronologias
const Chronology = () => import('@/views/chronology/Chronology')

// ballistic
const Arm = () => import('@/views/ballistic/Arm')
const ArmEdit = () => import('@/views/ballistic/editArm')
const detailArm = () => import('@/views/ballistic/detailArm')

// laboratory
const Clothes = () => import('@/views/laboratory/Clothes')

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active actived',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      beforeEnter: (to, from, next) => {
        // acá deberíamos comprobar:
        // existen token
        // token sea valido
        // token no ha expirado
        let token = localStorage.getItem('token')
        if(token) {
          next()
        } else {
          next('/pages/iniciar-sesion')
        }
      },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'usuarios',
          redirect: '/usuarios/consultar',
          name: 'users',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'consultar',
              component: Users,
              name: 'userList'
            },
            {
              path: 'crear',
              component: UserCreate,
            },
            {
              path: 'actualizar/:id',
              component: UserUpdate,
              name: 'userUpdate'
            },
            {
              path: 'historial-acceso',
              component: HistoryAccess,
            }
          ]
        },
        {
          path: 'seguridad',
          redirect: '/seguridad/historial-de-alertas',
          name: 'security',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'historial-de-alertas',
              component: Alert,
            },
            {
              path: 'historial-de-acciones',
              component: Action,
            }
          ]
        },
        {
          path: 'laboratorio',
          redirect: '/laboratorio/consultar',
          name: 'security',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'prendas-de-vestir',
              component: Clothes,
            }
          ]
        },
        {
          path: 'reconstruccion-de-hechos',
          redirect: '/reconstruccion-de-hechos/consultar',
          name: 'act',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'consultar',
              component: Act,
            },
            {
              path: 'modificar/:id',
              component: ActEdit,
              name: 'editAct'
            },
            {
              path: 'detalles/:id',
              component: ActDetail,
              name: 'detailAct'
            }
          ]
        },
        {
          path: 'recepcion',
          redirect: '/recepcion/consultar',
          name: 'reception',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'consultar',
              component: Reception,
            },
            {
              path: 'crear',
              component: ReceptionCreate,
            }
          ]
        },
        {
          path: 'cronologias',
          redirect: '/cronologias/consultar',
          name: 'reception',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'consultar',
              component: Chronology,
              name: 'chronologyList'
            }
          ]
        },
        {
          path: 'balistica',
          redirect: '/balistica/consultar',
          name: 'reception',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'armas-de-fuego',
              component: Arm,
            },
            {
              path: 'armas-de-fuego/modificar/:id',
              component: ArmEdit,
              name: 'editArm'
            },
            {
              path: 'armas-de-fuego/detalles/:id',
              component: detailArm,
              name: 'detailArm'
            } 
          ]
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'iniciar-sesion',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
