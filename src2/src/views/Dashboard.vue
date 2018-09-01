<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-primary">
          <b-card-body class="pb-0">
            <!--
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            -->
            <h4 class="mb-0">{{ userTotal }}</h4>
            <p>Usuarios Registrados</p>
          </b-card-body>
          <card-line1-chart-example chartId="card-chart-01" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-info">
          <b-card-body class="pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
              <template slot="button-content">
                <i class="icon-location-pin"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">{{ chronologyTotal }}</h4>
            <p>Cronologías Registradas</p>
          </b-card-body>
          <card-line2-chart-example chartId="card-chart-02" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-warning">
          <b-card-body class="pb-0">
            <!--
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            -->
            <h4 class="mb-0">{{ alertTotal }}</h4>
            <p>Alertas Reportadas</p>
          </b-card-body>
          <card-line3-chart-example chartId="card-chart-03" class="chart-wrapper" style="height:70px;" height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-danger">
          <b-card-body class="pb-0">
            <!--
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            -->
            <h4 class="mb-0">{{ evidenceTotal }}</h4>
            <p>Evidencias registradas</p>
          </b-card-body>
          <card-bar-chart-example chartId="card-chart-04" class="chart-wrapper px-3" style="height:70px;" height="70"/>
        </b-card>
      </b-col>
    </b-row>

    <b-card>
      <b-row>
        <b-col sm="5">
          <h4 id="traffic" class="card-title mb-0">Evidencias</h4>
          <div class="small text-muted">Agosto 2018</div>
        </b-col>
        <b-col sm="7" class="d-none d-md-block">
          <b-button type="button" variant="primary" class="float-right"><i class="icon-cloud-download"></i></b-button>
        </b-col>
      </b-row>
      <main-chart-example chartId="main-chart-01" class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></main-chart-example>
      <div slot="footer">
        <b-row class="text-center">
          <b-col class="mb-sm-2 mb-0">
            <div class="text-muted">Balística</div>
            <strong>{{ statdistic.balistica }} Evidencias ({{ parseInt(statdistic.balistica * 100 / (statdistic.balistica + statdistic.laboratorio + statdistic.hechos)) }}%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="success" :value="statdistic.balistica * 100 / (statdistic.balistica + statdistic.laboratorio + statdistic.hechos)"></b-progress>
          </b-col>
          <b-col class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Laboratorio</div>
            <strong>{{ statdistic.laboratorio }} Evidencias ({{ parseInt(statdistic.laboratorio * 100 / (statdistic.balistica + statdistic.laboratorio + statdistic.hechos)) }}%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="info" :value="statdistic.laboratorio * 100 / (statdistic.balistica + statdistic.laboratorio + statdistic.hechos)"></b-progress>
          </b-col>
          <b-col class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Reconstrucción de Hechos</div>
            <strong>{{ statdistic.hechos }} Evidencias ({{ parseInt(statdistic.hechos * 100 / (statdistic.balistica + statdistic.laboratorio + statdistic.hechos)) }}%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" :value="statdistic.hechos * 100 / (statdistic.balistica + statdistic.laboratorio + statdistic.hechos)"></b-progress>
          </b-col>
        </b-row>
      </div>
    </b-card>
    
  </div>
</template>

<script>
import settings from '../config'

import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'
import MainChartExample from './dashboard/MainChartExample'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import CalloutChartExample from './dashboard/CalloutChartExample'
import { Callout } from '@coreui/vue'

export default {
  name: 'dashboard',
  components: {
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    CalloutChartExample
  },
  data: function () {
    return {
      selected: 'Month',
      userTotal: 0,
      evidenceTotal: 0,
      alertTotal: 0,
      chronologyTotal: 0,
      statdistic: {
        balistica: 0,
        hechos: 0,
        laboratorio: 0
      }
    }
  },
  mounted() {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')

    this.getUsers()
    this.getEvidence()
    this.getAlerts()
    this.getChronlogy()
    this.getCount()
  },
  methods: {
    getUsers() {
      axios.get(settings.API_URL + '/users?limit=1').then(resp => {
        this.userTotal = resp.data.total
      })
    },
    getEvidence() {
      axios.get(settings.API_URL + '/evidences?limit=1').then(resp => {
        this.evidenceTotal = resp.data.total
      })
    },
    getAlerts() {
      axios.get(settings.API_URL + '/alerts?limit=1').then(resp => {
        this.alertTotal = resp.data.total
      })
    },
    getChronlogy() {
      axios.get(settings.API_URL + '/chronologies?limit=1').then(resp => {
        this.chronologyTotal = resp.data.total
      })
    },
    getCount() {
      axios.get(`${settings.API_URL}/evidences?limit=1`)
      .then(resp => {
        axios.get(`${settings.API_URL}/evidences?limit=${resp.total}`)
        .then(resp => {
          resp.data.data.forEach(element => {
            if(element.departamento == 'HECHOS') {
              this.statdistic.hechos++;
            }
            if(element.departamento == 'BALISTICA') {
              this.statdistic.balistica++;
            }
            if(element.departamento == 'LABORATORIO') {
              this.statdistic.laboratorio++;
            }
          })
        })
      })
    }
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
