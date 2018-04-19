import { Component, OnInit } from '@angular/core';

import { AdminService } from './../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
  }

  changeBuildStatus(status: boolean): void {
    console.log(`Build is up: ${status}`);
  }

  add(name: string): void {
    this.adminService.addFixerToList(name);
    console.log(this.adminService.fixers);
  }

}
