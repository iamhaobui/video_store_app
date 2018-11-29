import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoListComponent } from './video/video-list/video-list.component';
import { ReserveComponent } from './video/reserve/reserve.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { VideoListAdminComponent } from './video/video-list-admin/video-list-admin.component';
import { AddNewComponent } from './video/add-new/add-new.component';
import { UpdateComponent } from './video/update/update.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AdminLoginService } from './services/admin-login.service';
import { VideoService } from './services/video.service';

import { AuthService} from './services/auth.service';
import { AuthGuard} from './guards/auth.guard';

const appRoutes = [
  { path: '', component: VideoListComponent},
  { path: 'admin/login', component: LoginComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'admin/videos', component: VideoListAdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/videos/update', component: UpdateComponent, canActivate: [AuthGuard] },
  { path: 'admin/videos/add', component: AddNewComponent, canActivate: [AuthGuard] },
  { path: 'admin/videos/reserve', component: ReserveComponent, canActivate: [AuthGuard] },
  { path: 'admin/customers', component: UserComponent, canActivate: [AuthGuard] },
];
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    // VideoComponent,
    VideoListComponent,
    ReserveComponent,
    UserComponent,
    LoginComponent,
    UserListComponent,
    VideoListAdminComponent,
    AddNewComponent,
    UpdateComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    HttpModule,
    FormsModule
  ],
  providers: [AdminLoginService, VideoService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
