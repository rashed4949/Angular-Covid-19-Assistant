import { FormsModule } from '@angular/forms';
import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home/home.page.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { VolunteerService } from './service/volunteer.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminAuthService } from './service/admin.auth.guard.service';
import { AdminPanelService } from './service/admin.panel.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    VolunteerService,
    AdminAuthService,
    AdminPanelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
