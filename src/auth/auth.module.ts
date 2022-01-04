import { Module } from '@nestjs/common';
import { PassportModule, PassportStrategy } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import config from '../config/keys';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [UsersModule, PassportModule, JwtModule.register({
        secret: config.jwtSecret,
        signOptions: { expiresIn: '60s' }
    })],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
