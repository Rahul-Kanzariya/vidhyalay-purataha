import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    BASEURL = "http://localhost:3000";
    
    constructor(private http: HttpClient) {

    }

    async login(payload: any){
        return new Promise((resolve)=> {
            this.http.post(`${this.BASEURL}/auth/login`, payload).subscribe((res:any) => {
                resolve(res)
            })
        })
    }

}