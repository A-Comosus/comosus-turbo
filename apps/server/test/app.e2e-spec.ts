import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { AppModule } from '../src/module/app/app.module';

const queryHelloWorld = {
  query: `{
    hello
}`,
  response: {
    data: { hello: 'Hello World!' },
  },
};

describe('App Resolver(e2e)', () => {
  let app: INestApplication;
  let request;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    request = supertest(app.getHttpServer()).post('/graphql');
  });

  it('should say "Hello World!"', () => {
    const { query, response } = queryHelloWorld;
    return request.send({ query }).expect(response);
  });
});
