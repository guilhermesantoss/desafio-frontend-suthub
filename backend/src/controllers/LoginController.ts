import { Request, Response } from 'express';
import knex from '../database/connection';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class LoginController {
  async login(request: Request, response: Response) {
    const { email, password } = request.body;
  
    const user = await knex('users')
      .where('email', email);

    if (user) {
      if (await bcrypt.compare(password, user[0].password)) {
        const token = jwt.sign({ id: user[0].id }, String(process.env.APP_SECRET), {
          expiresIn: '1d'
        });

        const data = {
          id: user[0].id,
          name: user[0].name,
          email: user[0].email,
          token
        };

        return response.json(data);
      } else {
        return response.status(404).json({ message: 'User not found' });
      }
    } else {
      return response.status(404).json({ message: 'User not found' });
    }
  }
}

export default LoginController;