'use strict';

import models from '../models'

const operations = {
    show: (req, resp) => {
        models.User.findAll().then(users => {
            return resp.status(200).json(users);
        })

    }

}


export default operations;