import { Component, OnInit } from '@angular/core';

import { AdminService } from './../admin.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  src: string;
  href: string;

  constructor(
    private adminService: AdminService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const randGif = getRandomGif();
    this.src = randGif.src;
    this.href = randGif.href;
    console.log(randGif);
  }

}

const getRandomGif = () => GIFS[Math.floor(Math.random() * Math.floor(GIFS.length))];

const GIFS = [
  { src: 'https://giphy.com/embed/z9AUvhAEiXOqA', href: 'https://giphy.com/gifs/form-z9AUvhAEiXOqA' },
  { src: 'https://giphy.com/embed/l2JdWwSCbpvEQuBbO', href: 'https://giphy.com/gifs/season-4-the-simpsons-4x3-l2JdWwSCbpvEQuBbO' },
  { src: 'https://giphy.com/embed/vLruErVSYGx8s', href: 'https://giphy.com/gifs/the-simpsons-fire-homer-simpson-vLruErVSYGx8s' },
  { src: 'https://giphy.com/embed/N8HsnD4SkptdK', href: 'https://giphy.com/gifs/fire-the-simpsons-N8HsnD4SkptdK' },
  { src: 'https://giphy.com/embed/2dEJuWB49LHqM', href: 'https://giphy.com/gifs/love-the-simpsons-fire-2dEJuWB49LHqM' },
];
