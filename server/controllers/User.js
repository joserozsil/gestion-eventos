'use strict'

import models from '../models'
import responser from '../services/format'

const operations = {
    index: (req, resp) => {
        models.User.findAll().then(users => {
            return resp.status(200).json(
                responser.response(200, users)
            )
        })
    }

}


export default operations