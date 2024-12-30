import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MonitorsPageComponent } from "./pages/monitors-page/monitors-page.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, MonitorsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '4VGymApp';
}
