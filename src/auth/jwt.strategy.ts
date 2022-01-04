import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import config from '../config/keys'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.jwtSecret
        })
    }

    async validate(payload: any) {

        return {
            id: payload.sub,
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email
        }

    }
}