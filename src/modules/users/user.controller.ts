import { Controller, Get, Post, Body, Res } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('users')
export class UserControler {
  constructor(private readonly userService: UserService) {}
  @Post('/')
  store(@Body() body, @Res() res) {
    const { email, name } = body;

    const result = this.userService.index(email, name);

    return res.status(200).json(result);
  }

  @Get('/')
  index(@Res() res) {
    return res.status(200).json({ ok: true });
  }
}
