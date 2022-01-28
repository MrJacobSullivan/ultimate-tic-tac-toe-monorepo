import supertest from 'supertest';
import createServer from '../server';

describe('server', () => {
  test('returns 200 and message', async () => {
    await supertest(createServer())
      .get('/')
      .expect(200)
      .then((res) => {
        expect(res.body.apiUp).toBe(true);
      });
  });
});
