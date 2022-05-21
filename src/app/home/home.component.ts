import { Component, OnInit } from '@angular/core';
import{Student} from '../student/studentss';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

counter: number=0;
student: Student = {};
courses :number[]=[];



  constructor() { }

  ngOnInit(): void {
  }

  count(){
    this.counter++;
    console.log(this.counter);
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
