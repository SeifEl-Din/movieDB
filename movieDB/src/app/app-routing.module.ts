import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { DetailsComponent } from './details/details.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'recommendations',component:RecommendationsComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'suggestions',component:SuggestionsComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
