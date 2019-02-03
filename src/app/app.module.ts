import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { RecordsService } from './services/records.service'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecordsService],//the services are be declared only on providers,
  bootstrap: [AppComponent]   //in order to be accessible all over the components
})
export class AppModule { }
