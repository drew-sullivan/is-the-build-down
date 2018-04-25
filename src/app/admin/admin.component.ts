import { Component, OnInit } from '@angular/core';

import { AdminService } from './../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  checked: boolean;

  constructor(
    public adminService: AdminService
  ) { }

  ngOnInit() {
    this.checked = !this.adminService.isUp;
  }

  add(name: string): void {
    this.adminService.addFixerToList(name);
  }

  toggle(): void {
    this.adminService.isUp = !this.adminService.isUp;
    this.checked = this.adminService.isUp;
  }

}
