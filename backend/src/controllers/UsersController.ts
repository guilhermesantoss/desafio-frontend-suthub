import { Request, Response } from 'express';
import knex from '../database/connection';
import bcrypt from 'bcrypt';

class UsersCrontroller {
  async index(request: Request, response: Response) {
    const users = await knex('users').select('*');
  
    return response.json(users);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const user = await knex('users').where('id', id).first();

    if (!user) {
      return response.status(400).json({ message: 'User not found.' });
    }

    return response.json(user);
  }

  async create(request: Request, response: Response) {
    const { 
      name,
      email,
      password,
    } = request.body;

    const passwordHash = await bcrypt.hash(password, 8);

    await knex('users').insert({
      name,
      email,
      password: passwordHash
    });

    return response.json({ success: true, message: 'Usuario cadastrado com sucesso!' });
  }
}

export default UsersCrontroller;