import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpModule} from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {ServicebService} from './serviceb.service'





@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,HttpModule,NgbModule.forRoot(),
  ],
  providers: [ServicebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
