import axios from 'axios';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SalesOverviewComponent } from './dashboard-components/sales-overview/sales-overview.component';
import { OurVisiterComponent } from './dashboard-components/our-visiter/our-visiter.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { ActivityTimelineComponent } from './dashboard-components/activity-timeline/activity-timeline.component';
import { FhirApiService } from '../service/fhir-api.service';
import { ApiTestComponent } from '../material-component/api-test/api-test.component';
@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [SalesOverviewComponent, ProfileComponent, ActivityTimelineComponent],
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {

	ngAfterViewInit() { }

}