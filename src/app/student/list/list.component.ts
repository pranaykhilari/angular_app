import {Component, OnInit} from '@angular/core';

import Student from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students: Student[];

  constructor(private service: StudentService) {
  }

  ngOnInit() {
    this.service.getStudents().subscribe((data: Student[]) => {
      // @ts-ignore
      this.students = data.result;
    });
  }

}
