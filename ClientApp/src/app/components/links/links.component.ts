import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/link';
import { DataService } from 'src/app/services/data-service.service';

@Component({
   selector: 'app-links',
   templateUrl: './links.component.html',
   styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
   links: Link[];
   constructor(private _dataService: DataService) {}

   ngOnInit() {
      this._dataService.getLinks().subscribe(links => {
         this.links = links;
      });
   }

   deleteLink(link: Link) {
      this._dataService.deleteLink(link.id).subscribe(res => {
         for (let i = 0; i < this.links.length; i++) {
            if (link.id === this.links[i].id) {
               this.links.splice(i, 1);
            }
         }
      });
   }
   addLink() {
      const newLink: Link = { id: 0, name: null, url: null, editable: true };
      this.links.push(newLink);
   }
}
