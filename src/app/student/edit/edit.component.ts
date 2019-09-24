import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../student.service';

import Student from '../student';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  angForm: FormGroup;
  student: any = {};
  students: Student[];

  constructor(private route: ActivatedRoute, private router: Router, private service: StudentService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Phone: ['', []]
    });
  }

  editStudent(name, email, phone) {
    this.route.params.subscribe(params => {
      this.service.editStudent(name, email, phone, params.id).subscribe(result => {
        // @ts-ignore
        if (result.status === 202) {
          this.router.navigate(['student/list']);
        }
      });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getStudent(params.id).subscribe(res => {
        // @ts-ignore
        this.student = res.result;
      });
    });
  }

}
