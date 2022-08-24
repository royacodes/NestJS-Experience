import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {
    
  }
  login() {
    return { msg: 'i am signed in' };
  }

  signUp() {
    return { msg: 'i amsigned up' };
  }
}
