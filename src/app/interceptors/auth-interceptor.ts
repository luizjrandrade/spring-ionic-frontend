import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../../services/storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    //construtor para injetar o serviço storage
    constructor(public storage: StorageService){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        let localUser = this.storage.getLocalUser();

        //para não o cabeçalho caso não for a api
        let N = API_CONFIG.baseUrl.length;

        //testando se é url local
        let requestToAPI = req.url.substring(0, N) == API_CONFIG.baseUrl;
    
        //pode ser que não tenha o token, tem q testar
        if (localUser && requestToAPI ){
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)});
            return next.handle(authReq);
        } else {
            return next.handle(req) //continua a requisição
        }
    }
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
}