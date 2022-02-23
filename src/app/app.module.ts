import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth/auth.service';
import { AuthGuardService } from './shared/services/auth-guard/auth-guard.service';
import { ProfileComponent } from './components/profile/profile.component';
import { FriendsComponent } from './components/friends/friends.component';
import { GamesComponent } from './components/games/games.component';
import { LibraryComponent } from './components/library/library.component';
import { CardComponent } from './components/card/card.component';
import { SearchFilterPipe } from './shared/pipes/search-filter/search-filter.pipe';
import { CheckboxFilterPipe } from './shared/pipes/checkboxFilter/checkbox-filter.pipe';
import { RangeFilterPipe } from './shared/pipes/range-filter/range-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    FriendsComponent,
    GamesComponent,
    LibraryComponent,
    CardComponent,
    SearchFilterPipe,
    CheckboxFilterPipe,
    RangeFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
