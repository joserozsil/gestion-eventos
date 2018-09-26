'use strict'

import moment from 'moment'
moment.locale('es')

const operations = {
  short : (date) => {
    return `${date.substr(0, 250)}...`
  }
}

export default operations
