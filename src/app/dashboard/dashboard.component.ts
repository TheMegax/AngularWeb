import axios from 'axios';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SalesOverviewComponent } from './dashboard-components/sales-overview/sales-overview.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { ActivityTimelineComponent } from './dashboard-components/activity-timeline/activity-timeline.component';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SalesOverviewComponent,
    ProfileComponent,
    ActivityTimelineComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {}
  constructor(private authService: AuthService) {}

  getToken() {
    this.authService.getToken().subscribe((response: any) => {
      const token = response.access_token;
      console.log(token);
      environment.apikey = token;
    });
  }
}
