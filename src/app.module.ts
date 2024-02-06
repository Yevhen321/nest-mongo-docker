import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';
import { GatewayModule } from 'src/gateway/gateway.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_INITDB_ROOT_DB_URI),
    UserModule,
    GatewayModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
