import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../config/api.config";
import { CredenciaisDTO } from "../models/credenciais.dto";

@Injectable()
export class AuthService{

    //para comunicação com o backend fazer a validação do login
    constructor(public http: HttpClient){

    }

    authenticate(creds : CredenciaisDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            { //necessário para obter a resposta
                observe: 'response',
                responseType: 'text'
            });
    }

}