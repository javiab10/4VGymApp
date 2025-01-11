import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './activity-card/activity-card.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent}
  // Agrega más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, ActivityCardComponent],
  exports: [RouterModule, ActivityCardComponent]
})
export class AppRoutingModule { }
