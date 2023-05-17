import { Request, Response } from "express";
import { User, UserStore } from "../models/users";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;
const pepper = BCRYPT_PASSWORD;
const saltRounds = SALT_ROUNDS;

dotenv.config();

export class UserHandler {
  async create(req: Request, res: Response) {
    const user = new UserStore();
    const firstname = req.body.firstname as string;
    const lastname = req.body.lastname as string;
    const username = req.body.username as string;
    const password = req.body.password as string;
    const role = req.body.role as string;

    const create: User = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      role: role ? role : "client",
    };

    try {
      const result = await user.create(create);
      const token = jwt.sign(
        { user: result },
        process.env.TOKEN_SECRET as string
      );
      res.send(token);
    } catch (err) {
      res.send(`unable to create user ${err}`);
    }
  }

  async login(req: Request, res: Response) {
    const user = new UserStore();
    const username = req.body.username;
    const password = req.body.password;

    try {
      const result = await user.show(username);
      if (result !== undefined) {
        if (bcrypt.compareSync(password + pepper, result.password)) {
          const token = jwt.sign(
            { user: result },
            process.env.TOKEN_SECRET as string
          );
          res.send(token);
        } else {
          throw new Error();
        }
      } else {
        throw new Error();
      }
    } catch (err) {
      res.send(`Incorrect username or password ${err}`);
    }
  }

  async show(req: Request, res: Response) {
    const user = new UserStore();
    //@ts-ignore
    const username = req.user.username as string;
    try {
      const result = await user.show(username);
      res.send(result);
    } catch (err) {
      res.send(`unable to show this user ${err}`);
    }
  }

  async update(req: Request, res: Response) {
    const user = new UserStore();
    //@ts-ignore
    const id = req.user.id as number;
    const username = req.body.username as string;
    const password = req.body.password as string;
    const update = {
      username: username,
      password: password,
    };
    try {
      const result = await user.update(update, id);
      res.send(result);
    } catch (err) {
      res.send(`unable to update user ${err}`);
    }
  }

  async updateUser(req: Request, res: Response) {
    const user = new UserStore();
    //@ts-ignore
    const id = req.params.userId as number;
    const username = req.body.username as string;
    const password = req.body.password as string;
    const hash = bcrypt.hashSync(
      password + pepper,
      parseInt(saltRounds as string)
    );
    const update = {
      username: username,
      password: hash,
    };

    try {
      const result = await user.update(update, id);
      res.send(result);
    } catch (err) {
      res.send(`unable to update user ${err}`);
    }
  }
}
