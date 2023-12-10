import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: any) {
    const isMongoId = isValidObjectId(value);
    if (!isMongoId) {
      throw new BadRequestException('Invalid ID');
    }

    return value;
  }
}
