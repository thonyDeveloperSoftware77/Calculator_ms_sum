import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sumar(
    num1: number,
    num2: number,
  ): number {

if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new BadRequestException('Both inputs must be numbers');
    }
    console.log('num1', num1);
    console.log('num2', num2);
    
    return num1 + num2;
  }
  
}
