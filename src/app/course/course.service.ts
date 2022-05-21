import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient ) { }

  courseList() {

  }
  courseSearch(course: Course): Course[] {
    let c: Course[]=[];
    let c1: Course={
      description:"Java beeginner course",
      rating: 10
    };
    let c2: Course={
      description: "C++ vs hava",
      rating: 1
    }
    c.push(c1);
    c.push(c2);
    return c;
   }
}
