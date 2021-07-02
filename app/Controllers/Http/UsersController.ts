// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  index({ view }) {
    return view.render('welcome');
  }
}
