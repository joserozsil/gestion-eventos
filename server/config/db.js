const config = {
    "development": {
        "username": "root",
        "password": null,
        "database": "novedades",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "logging": false
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "novedades",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "ba76cf55f10b1d",
        "password": "a84ebd06",
        "database": "heroku_fd10b4822b7fdf3",
        "host": "us-cdbr-iron-east-01.cleardb.net",
        "dialect": "mysql"
    }
}

module.exports = config

