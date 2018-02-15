import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { AppComponent } from './app.component';
import { ChallengeComponent } from './challenge/challenge.component';
import {FilterPipe} from './filter.pipe';
import {ChallengeService} from './challenge.service';
import { HeaderComponent } from './header/header.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabsModule} from "ng2-tabs";
import { UploadchallengeComponent } from './uploadchallenge/uploadchallenge.component' ;
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ChallengeComponent,
    FilterPipe,
    HeaderComponent,
    UploadchallengeComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NgxPaginationModule,
    AngularFontAwesomeModule,
    FormsModule,
    TabsModule,
    TagInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
	NgbModule.forRoot()

  ],
  providers: [ChallengeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
