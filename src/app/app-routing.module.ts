import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes =
 [
   //{ path: 'home', loadChildren: () =>import('./home/home.module').then(m => m.HomeModule) },
{ path: 'course', loadChildren: () => import('./course/course.module').then(m => m.CourseModule) },
 { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
   { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
