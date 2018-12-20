import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/link';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  links: Link[];
  constructor() { }

  ngOnInit() {
  }

}
