import {Injectable, CanActivate, ExecutionContext, UnauthorizedException} from '@nestjs/common';
import { Observable } from 'rxjs';
import axios from "axios";
@Injectable()
export class AuthGuard implements CanActivate {
    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        let req = context.switchToHttp().getRequest();
        if(req.headers["x-client-id"]) {
            let resToken = await axios.get("https://test.gnzs.ru/oauth/get-token.php", {
                headers: {
                    "x-client-id": req.headers["x-client-id"]
                }
            })
            if(resToken.data.access_token && resToken.data.base_domain) {
                req.headers["access_token"] = resToken.data.access_token;
                req.headers["base_domain"] = resToken.data.base_domain;
                return true
            } else {
                throw new UnauthorizedException();
            }
        } else {
            return false
        }
    }
}