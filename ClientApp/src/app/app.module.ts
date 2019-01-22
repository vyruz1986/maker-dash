import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LinksComponent } from './components/links/links.component';
import { LinkComponent } from './components/link/link.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
   faEdit,
   faSave,
   faTrash,
   faPlusSquare
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
   declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      CounterComponent,
      FetchDataComponent,
      LinksComponent,
      LinkComponent
   ],
   imports: [
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot([
         { path: '', component: HomeComponent, pathMatch: 'full' },
         { path: 'counter', component: CounterComponent },
         { path: 'fetch-data', component: FetchDataComponent },
         { path: 'links', component: LinksComponent }
      ]),
      FontAwesomeModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {
   constructor() {
      library.add(faEdit, faSave, faTrash, faPlusSquare);
   }
}
