import { Component, OnInit } from '@angular/core';
import{Student} from '../studentss'





@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  counter: number=0;
student: Student = {};
courses :number[]=[];

  constructor() { }

  ngOnInit(): void {
  }


  getstudent(){
    this.student .name='nada';
    this.student.id= 1234;
  }
  getcourses(){
    for(let i=0;i<10; i++)
    {
      this.courses.push(i);
    }

}
}
