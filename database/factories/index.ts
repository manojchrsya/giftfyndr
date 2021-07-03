import User from 'App/Models/User';
import Factory from '@ioc:Adonis/Lucid/Factory';
import Hash from '@ioc:Adonis/Core/Hash';

export const UserFactory = Factory.define(User, async ({ faker }) => {
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: await Hash.make(faker.internet.password()),
  };
}).build();
