'use strict'

import moment from 'moment'
moment.locale('es')

const operations = {
  listDate : (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
  }
}

export default operations
