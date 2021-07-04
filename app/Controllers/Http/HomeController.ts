// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  async index({ view, auth }) {
    await auth.check();
    return view.render('home');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  async login({ response, view, auth }) {
    await auth.check();
    if (auth.isLoggedIn) return response.redirect('/', true);
    return view.render('login');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  async register({ response, view, auth }) {
    await auth.check();
    if (auth.isLoggedIn) return response.redirect('/', true);
    return view.render('register');
  }
}
