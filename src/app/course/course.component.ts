import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course = {};
  toggleCourseSearch:boolean = false;
  toggleCourseList:boolean = false;
  update: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  courseSearch(): void {
    if(this.toggleCourseSearch==false){
      this.toggleCourseSearch = true;
    }
    else{
      this.toggleCourseSearch = false;
    }
  }

  hotSearch(c:Course): void {
    this.course = c;
    this.toggleCourseSearch = false;
    this.toggleCourseList = true;
    this.update++;
  }

  courseList(): void {
    if(this.toggleCourseList==false){
      this.toggleCourseList = true;
    }
    else{
      this.toggleCourseList = false;
    }
  }

}
