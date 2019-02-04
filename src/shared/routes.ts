import { Routes } from '@angular/router';
import { HelloComponent } from '../app/hello/hello.component';
import { DataComponent } from '../app/data/data.component';

export const routes: Routes = [
 {path:'hello',component:HelloComponent},
 {path:'data',component:DataComponent}
];