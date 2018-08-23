//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { AboutComponent } from './component/about/about.component';
import { BooksComponent } from './component/books/books.component';
import { BookdetailComponent } from './component/bookdetail/bookdetail.component';
import { SearchbookComponent } from './component/searchbook/searchbook.component';
import { LoginComponent } from './component/login/login.component';
import { HomeuserComponent } from './component/homeuser/homeuser.component';

//modules
import { MaterialModuleApp } from "./material.module";
import {RoutesAppBooksModule} from './app.routes';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
//FIREBASE MODULES
import {AngularFireModule  } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

//firebaseconfig
import {FIREBASECONFIG  } from "./../FIREBASECONFIG/firebase.config";

//services
import { BooksService } from "./component/books/books.service";
import {LoginServiceFireBase  } from "./component/login/login.service";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    
    AboutComponent,
    BooksComponent,
    InscriptionComponent,
    BookdetailComponent,
    SearchbookComponent,
    LoginComponent,
    HomeuserComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModuleApp,
    RoutesAppBooksModule,
    ReactiveFormsModule,
  
    AngularFireAuthModule,
   
    AngularFireModule.initializeApp(FIREBASECONFIG.firebase),
    AngularFirestoreModule,
 
  ],
  providers: [BooksService,LoginServiceFireBase],
  bootstrap: [AppComponent]
})
export class AppModule { }
