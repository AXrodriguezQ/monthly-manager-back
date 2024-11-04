import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class NotFoundMiddleware implements NestMiddleware {
  use(req: Request, res: Response) {
    res.status(404).json({
      statusCode: 404,
      timestamp: new Date().toISOString(),
      path: req.url,
      message: 'Resource not found',
    });
  }
}
