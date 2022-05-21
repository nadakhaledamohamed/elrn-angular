//import { StudentDetailsComponent } from './student-details/student-details.component';
//import { CourseModule } from './../course/course.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
//import { StudentModule } from './student.module';





const routes: Routes = [
  { path: '', component: StudentComponent },
  {path:'student-details', component: StudentComponent}
];
// ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
