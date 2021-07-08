import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchPipe } from './Mypipes/search.pipe';
import { Employee1Component } from './employee1/employee1.component';
import { Employee2Component } from './employee2/employee2.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MycolorDirective } from './directives/mycolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    Employee1Component,
    Employee2Component,
    MycolorDirective
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
