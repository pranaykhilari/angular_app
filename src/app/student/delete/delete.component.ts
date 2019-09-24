import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {StudentService} from '../student.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})


export class DeleteComponent implements OnInit {

  constructor(private service: StudentService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.service.deleteStudent(params.id).subscribe(res => {
        // @ts-ignore
        if (res.status === 202) {
          this.router.navigate(['student/list']);
        }
      });
    });
  }

  ngOnInit() {
  }

}
