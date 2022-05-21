

import { Component, OnInit } from '@angular/core';
import { STUDENTS } from './List';
import {Student} from './studentss';
import{Router} from '@angular/router';
import {StudentService} from './student.service';





@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})



export class StudentComponent implements OnInit {
  [x: string]: any;



  student=STUDENTS;
  courses: number[]=[];
  studentss: Student={
    name:'nada',
    id:12334
  };

  constructor() { }

  ngOnInit(): void {
    // this.studentService.studentList().subscribe({
    //   next: r=>this.student=r,
    //   error: err=>console.error(err),
    //   complete: ()=>null
    // });
  }


  getStudent(){
   this.studentss.name="NADA";
    this.studentss.id = 32;
  }

  getCourses(){
    for (let i = 0; i < 10; i++) {
      this.courses.push(i);
    }}

    selectedStudent?: Student ;
    onselect (studentss : Student ) : void {
    this.selectedStudent = studentss



  }
  }



