import { NestMiddleware } from '@nestjs/common';
import { Response } from 'express';
//Exercice page 88
export class FirstMiddleware implements NestMiddleware{
  use(req: any, res: Response, next: () => void): any {
    console.log('in first middel', req.ip, req.body);
    next();
  }

}
