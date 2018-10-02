'use strict'


const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const faker = require('faker')
chai.use(chaiHttp)

const URL = 'http://localhost:3000/api/v1'
const moment = require('moment')

var token = ''

describe('Autenticación de usuarios', () => {
  
  it('Obtener lista de usuarios, sin autenticarse', (done) => {
    chai
      .request(URL)
      .get('/users')
      .end((err, res) => {
        expect(res).to.have.status(403)
        done()
      })
  })

  it('Autenticación usuario jrodríguez', (done) => {
    chai
      .request(URL)
      .post('/signin')
      .send({
        usuario: 'jrodriguez',
        contraseña: 'Joseangel19$'
      })
      .end((err, res) => {
        token = res.body.token
        expect(res).to.have.status(200)
        done()
      })
  })

  it('Obtener lista de usuarios', (done) => {
    chai
      .request(URL)
      .get('/users')
      .set('authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      })
  })
  var idUser = ''

  it('Registrar usuario', (done) => {

    const user = {
      usuario: faker.internet.userName(),
      nombre: faker.name.firstName(),
      apellido: faker.name.lastName(),
      rol: 'ADMINISTRADOR',
      contraseña: 'Joseangel19$',
      frase: 'coca cola',
      cedula: moment().unix().toString().substring(0, 8)
    }

    chai
      .request(URL)
      .post('/users')
      .set('authorization', token)
      .send(user)
      .end((err, res) => {
        idUser = res.body.id
        expect(res).to.have.status(200)
        done()
      })
  })

  /*
  it('Eliminar usuario', (done) => {
    chai
      .request(URL)
      .delete(`/users/${idUser}`)
      .set('authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      })
  })*/


})

describe('Cronologías', () => {
  it('Obtener lista de cronologias', (done) => {
    chai
      .request(URL)
      .get('/chronologies')
      .set('authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      })
  })

})