<script>
import { Line } from 'vue-chartjs'
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

import settings from '../../config'
import store from '../../store/store'

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
  extends: Line,
  props: ['height'],
  data: () => {
    return {
      statdistic: {
        evidencias: [],
        balistica: 0,
        hechos: 0,
        laboratorio: 0,
        total: 250,
        mayor: 0
      }
    }
  },
  mounted () {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
    this.getCount()
  },
  methods: {
    getCount() {
      axios.get(`${settings.API_URL}/evidences?limit=1`)
      .then(resp => {
        axios.get(`${settings.API_URL}/evidences?limit=${resp.total}`)
        .then(resp => {
          this.statdistic.total = resp.data.total
          this.statdistic.evidencias = resp.data.data

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

          this.statdistic.mayor = this.statdistic.balistica

          if(this.statdistic.mayor < this.statdistic.laboratorio) {
            this.statdistic.mayor = this.statdistic.laboratorio
          }

          if(this.statdistic.mayor < this.statdistic.hechos) {
            this.statdistic.mayor = this.statdistic.hechos
          }

          const brandSuccess = getStyle('--success') || '#4dbd74'
          const brandInfo = getStyle('--info') || '#20a8d8'
          const brandDanger = getStyle('--danger') || '#f86c6b'

          let elements = 12

          const data1 = [0,0,0,0,0,0,0,0,0,0,0,0] // balistica
          const data2 = [0,0,0,0,0,0,0,0,0,0,0,0] // laboratorio
          const data3 = [0,0,0,0,0,0,0,0,0,0,0,0] // hechos

          let now = new Date()

          resp.data.data.forEach(element => {
            let date = new Date(element.f_creacion)
            
            if(element.departamento === 'BALISTICA' && date.getYear() == now.getYear()) {
              data1[date.getMonth()] = Number(data1[date.getMonth()]) + 1
            }

            if(element.departamento === 'LABORATORIO' && date.getYear() == now.getYear()) {
              data2[date.getMonth()] = Number(data2[date.getMonth()]) + 1
            }

            if(element.departamento === 'HECHOS' && date.getYear() == now.getYear()) {
              data3[date.getMonth()] = Number(data3[date.getMonth()]) + 1
            }

          })


          this.renderChart({
            labels: ['Ene', 'Feb', 'Marz', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            datasets: [
              {
                label: 'Balística',
                backgroundColor: hexToRgba(brandInfo, 10),
                borderColor: brandInfo,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data1
              },
              {
                label: 'Laboratorio',
                backgroundColor: 'transparent',
                borderColor: brandSuccess,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data2
              },
              {
                label: 'Análisis y Reconstrucción de Hechos',
                backgroundColor: 'transparent',
                borderColor: brandDanger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5],
                data: data3
              }
            ]
          }, {
            tooltips: {
              enabled: false,
              custom: CustomTooltips,
              intersect: true,
              mode: 'index',
              position: 'nearest',
              callbacks: {
                labelColor: function (tooltipItem, chart) {
                  return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
                }
              }
            },
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                gridLines: {
                  drawOnChartArea: false
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  stepSize: Math.ceil(this.statdistic.mayor / 5),
                  max: this.statdistic.mayor + 1
                },
                gridLines: {
                  display: true
                }
              }]
            },
            elements: {
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3
              }
            }
          })

          // end render chart
        })
      })
    },
    getToken() {

    }
  }
}
</script>
