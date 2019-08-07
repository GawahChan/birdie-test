import app from '../src/application'
import * as request from 'supertest';

describe('We are grateful to you for doing this it.', () => {
  it('thanks you', async () => {
    await request(app)
      .get('/hello')
      .expect(200)
      .expect(function(res) {
        expect(res.body.greetings).toContain('Thank you');
      });
  })
});

describe('Receives JSON from mySQL database', () => {
  it('displays JSON in localhost:8000/moodObservation/events', async () => {
    await request(app)
      .get('/moodObservation/events')
      .expect(200)
      .expect(res => res.body > 0)
  });
})