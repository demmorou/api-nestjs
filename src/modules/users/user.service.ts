import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  index(name: string, email: string) {
    const todo = name + email;

    return todo;
  }
}
