import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import UserValidator from 'App/Validators/UserValidator';
export default class UsersController {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  async login({ request, response }: HttpContextContract) {
    await request.validate(UserValidator);
    response.redirect('/', true);
  }
}
