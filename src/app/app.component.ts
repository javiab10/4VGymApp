import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { ActivitiesComponent } from './activities/activities.component';
import { MonitoresComponent } from './monitores/monitores.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ActivitiesComponent, MonitoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '4VGymApp';
  isActivitiesClicked: boolean = true;

  getIsActivitiesClicked(isActivitiesClicked: boolean){
    this.isActivitiesClicked = isActivitiesClicked;
  }
}
