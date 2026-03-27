import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) {}

  ngOnInit() {
    this.getEventDetails();
  }

  getEventDetails() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.eventService.getEventById(parseInt(eventId)).subscribe((event: any) => {
        this.event = event;
      });
    }
  }

  goBack() {
    this.router.navigate(['/events']);
  }
}