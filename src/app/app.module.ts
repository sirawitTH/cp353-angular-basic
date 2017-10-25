import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; 

import { GetphotoService } from './services/getphoto.service'

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ChatComponent } from './components/chat/chat.component';

const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetphotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
