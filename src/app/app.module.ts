import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { RecordsService } from './services/records.service'
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './data/data.component';
import { RouterModule } from '@angular/router';
import { routes } from '../shared/routes';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecordsService],//the services are be declared only on providers,
  bootstrap: [AppComponent]   //in order to be accessible all over the components
})
export class AppModule { }
