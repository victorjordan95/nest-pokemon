import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/mongodb'),
    PokemonModule,
    FileModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
