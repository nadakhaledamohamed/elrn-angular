import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnChanges {
  @Input() course: Course = {};
  @Input() studentID: number=0;
  @Input() update: number = 0;
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    if(this.course!=null && Object.values(this.course).length >0){
      this.courses = this.courseService.courseSearch(this.course);
      console.log(this.courses);
    }
  }

}
