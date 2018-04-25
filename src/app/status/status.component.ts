import { Component, OnInit } from '@angular/core';

import { AdminService } from './../admin.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const GIF = {
  src: 'https://giphy.com/embed/2dEJuWB49LHqM',
  href: 'https://giphy.com/gifs/love-the-simpsons-fire-2dEJuWB49LHqM'
};

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  src: string;
  href: string;

  constructor(
    public adminService: AdminService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.src = GIF.src;
    this.href = GIF.href;
  }

}
