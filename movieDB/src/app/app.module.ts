import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiService } from './movie-api.service';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SuggestionsComponent } from './suggestions/suggestions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    RecommendationsComponent,
    DetailsComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule.forRoot()

  ],
  providers: [
    provideClientHydration(),
    MovieApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
