import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import { UserFactory } from 'Database/factories';
import Hash from '@ioc:Adonis/Core/Hash';

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true;
  public async run() {
    const password = await Hash.make('123456');
    await UserFactory.merge([{ password }]).createMany(10);
  }
}
