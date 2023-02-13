const request = require('supertest');
const app = require('./index');

describe('GET /items', () => {
  it('should return a list of medical bills', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});

describe('POST /items', () => {
  it('should create a new medical bill', async () => {
    const newBill = {
      patientName: 'John Doe',
      patientAddress: '123 Main St',
      hospitalName: 'General Hospital',
      dateOfService: '2022-01-01',
      billAmount: 1000
    };
    const res = await request(app).post('/items').send(newBill);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toMatchObject(newBill);
  });
});
