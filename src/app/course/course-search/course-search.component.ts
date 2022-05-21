import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {
  @Output() courseResult = new EventEmitter<Course>();

  course:Course={};
  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    this.courseResult.emit(this.course);
  }

}
