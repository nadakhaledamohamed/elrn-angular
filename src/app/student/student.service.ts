import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Student } from './studentss';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }
  
   studentList () : Observable<Student[]> {
     return this.http.get <Student[]> ("www.nada.com/student")

   }
}
