export {}

const app = require('../../src/app').express
import request from 'supertest'

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  })
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  })
}

describe('UserSession', () => {
  it('should answer 200 in the post user creation request for this route', async () => {
    const response = await request(app)
      .post(`/users`)
      .send({
        name: 'jhony',
        email: 'jhon.araujo2488@gmail.com',
        password: '12345678',
      })
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the post user creation request for this route', async () => {
    const response = await request(app)
      .post(`/users`)
      .send({
        name: 'jhony',
        email: 'jhon.araujo2488@gmail.com',
        password: '12345678',
      })
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the post users admin request for this route', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'jhony',
        email: 'programs2488@gmail.com',
        password: '12345678',
        codeSecret: process.env.CODE_SECRET_ADMIN,
      })
      .set({ 'auth-token': process.env.APP_SECRET, user_id: 2 })

    expect(response.status).toBe(200)
  })
  it('should answer 401 in the post users admin request for this route', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'jhony',
        email: 'programs2488@gmail.com',
        password: '12345678',
        ip: '168.195.137.85',
        admin: true,
        codeSecret: process.env.CODE_SECRET_ADMIN,
      })
      .set({ 'auth-token': '123445' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the get request for this route', async () => {
    const response = await request(app)
      .get(`/users/${1}`)
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the get request for this route', async () => {
    const response = await request(app)
      .get(`/users/${1}`)
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the login user request for this route', async () => {
    const response = await request(app)
      .post(`/users/login`)
      .send({
        email: 'jhon.araujo2488@gmail.com',
        password: '12345678',
      })
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the login user request for this route', async () => {
    const response = await request(app)
      .post(`/users/login`)
      .send({
        email: 'jhon.araujo2488@gmail.com',
        password: '12345678',
      })
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the put user update request for this route', async () => {
    const response = await request(app)
      .put(`/users/${1}`)
      .send({
        name: 'jhony',
        email: 'jhon.araujo2488@gmail.com',
        password: '12345678',
      })
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the put user update request for this route', async () => {
    const response = await request(app)
      .put(`/users/${1}`)
      .send({
        name: 'jhony',
        email: 'jhon.araujo2488@gmail.com',
        password: '12345678',
      })
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the alteration password user request for this route', async () => {
    const response = await request(app)
      .patch(`/users/redefined_password/${1}`)
      .send({
        password: '12345678999',
      })
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the alteration password user request for this route', async () => {
    const response = await request(app)
      .patch(`/users/redefined_password/${1}`)
      .send({
        password: '12345678999',
      })
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the user delete request for this route', async () => {
    const response = await request(app)
      .delete(`/users/${1}`)
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the user delete request for this route', async () => {
    const response = await request(app)
      .delete(`/users/${1}`)
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })
})
