import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { FirstHomeworkComponent } from './work/first-homework/first-homework.component';
import { SecondHomeworkComponent } from './work/second-homework/second-homework.component';
import { ThirdHomeworkComponent } from './work/third-homework/third-homework.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    FirstHomeworkComponent,
    SecondHomeworkComponent,
    ThirdHomeworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
