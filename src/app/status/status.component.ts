import { Component, OnInit } from '@angular/core';

import { AdminService } from './../admin.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
  }
}
