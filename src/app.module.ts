import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './entities/person.entity';

@Module({
  imports: [
    // ConfigModule을 글로벌 모듈로 로드
    ConfigModule.forRoot({
      isGlobal: true, // 모든 모듈에서 ConfigService를 사용할 수 있도록 설정
    }),
    // TypeOrmModule 설정
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql', // DB 타입
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity.js'], // dist 폴더 기준으로 설정
        synchronize: true, // 개발 환경에서만 true, 프로덕션에서는 false 권장
      }),
    }),
    TypeOrmModule.forFeature([PersonEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
