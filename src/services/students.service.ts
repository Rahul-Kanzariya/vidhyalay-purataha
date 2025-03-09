import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
    BASEURL = "http://localhost:3000";

    constructor(private http: HttpClient) {

    }

    async getStudentList(){
        return new Promise((resolve)=> {
            this.http.get(`${this.BASEURL}/student`).subscribe((res:any) => {
                if(res && res.list){
                    resolve(res.list)
                }
            })
        })
    }

    async addStudent(student: any){
        return new Promise((resolve)=> {
            this.http.post(`${this.BASEURL}/student`, student).subscribe((res:any) => {
                resolve(res)
            })
        })
    }
    
    async updateStudent(studentId:any, student: any){
        return new Promise((resolve)=> {
            this.http.post(`${this.BASEURL}/student/${studentId}`, student).subscribe((res:any) => {
                resolve(res)
            })
        })
    }

    getStudentById(studentId: any){
        return new Promise((resolve)=> {
            this.http.get(`${this.BASEURL}/student/${studentId}`).subscribe((res:any) => {
                if(res && res.data){
                    resolve(res.data)
                }
            })
        })
    }

    deleteStudent(studentId: any){
        return new Promise((resolve)=> {
            this.http.delete(`${this.BASEURL}/student/${studentId}`).subscribe((res:any) => {
                resolve(res)
            })
        })
    }
}