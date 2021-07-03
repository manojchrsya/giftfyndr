// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  index({ view }) {
    return view.render('home');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  login({ view }) {
    return view.render('login');
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  register({ view }) {
    return view.render('register');
  }
}
