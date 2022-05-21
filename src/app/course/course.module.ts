import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CourseComponent,
    CourseDetailsComponent,
    CourseListComponent,
    CourseSearchComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule
  ]
})
export class CourseModule { }
