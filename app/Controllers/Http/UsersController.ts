import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import UserValidator from 'App/Validators/UserValidator';

export default class UsersController {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  async login({ request, response, auth }: HttpContextContract) {
    await request.validate(UserValidator);

    const email = request.input('email');
    const password = request.input('password');
    await auth.use('web').attempt(email, password);

    response.redirect('/', true);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  async logout({ auth, response }: HttpContextContract) {
    await auth.use('web').logout();
    response.redirect('/', true);
  }
}
