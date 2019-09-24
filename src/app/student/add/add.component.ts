import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              private route: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Phone: ['', []]
    });
  }

  addStudent(Name, Email, Phone) {
    this.studentService.createStudent(Name, Email, Phone).subscribe(result => {
      // @ts-ignore
      if (result.status === 201) {
        this.route.navigate(['student/list']);
      }
    });
  }

  ngOnInit() {
  }

}
