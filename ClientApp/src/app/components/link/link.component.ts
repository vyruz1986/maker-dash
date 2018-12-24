import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/interfaces/link';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
   @Input()
   link: Link;
   constructor(private dataService: DataService) { }

   ngOnInit() {
   }

   linkEditable() {
     this.link.editable = !this.link.editable;
   }

   updateLink() {
     this.dataService.updateLink(this.link).subscribe((res) => {
       this.link.editable = false;
     });
   }

   createLink() {
     this.dataService.createLink(this.link).subscribe((res) => {
       this.link = res;
     });
   }

}
