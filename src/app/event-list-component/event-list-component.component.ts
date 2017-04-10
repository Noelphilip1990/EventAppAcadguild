import { Component, OnInit ,Injectable} from '@angular/core';
import {EventServiceService} from '../event-service.service';
import { OrderByDatePipe } from '../order-by-date.pipe';
import { Router} from '@angular/router';
import { ActivateGuard } from '../ActivateGuard';
import {Event} from '../model/event';
@Component({
  selector: 'app-event-list-component',
  templateUrl: './event-list-component.component.html',
  styleUrls: ['./event-list-component.component.css']
})
  @Injectable()
export class EventListComponentComponent implements OnInit {
	public list: Event[] = [];
 
	constructor(private es: EventServiceService, private router: Router, private ag: ActivateGuard) { }

  ngOnInit() {
    //this.es.getEvents();
    this.loadEvents();
  //this.list = this.es.eventList;
	  //this.list = this.es.GetEvent();
  }
  public loadEvents()
  {
    this.es.getEvents()
      .subscribe(
    event => this.list = event, //Bind to view
    err => {
      // Log errors if any
      console.log(err);
    });
  }
  ngOnChanges(changes: any) {
    // Listen to the 'list'emitted event so as populate the model
    // with the event payload
    this.loadEvents();
  }

  deleteEvent(id:number)
  { 
    if (confirm("Are you sure to delete this Event?" )) {
      console.log("Implement delete functionality here");
      this.es.removeEvent(id);
      this.loadEvents();
      
    }
  
  }

  logout()
  {
	  this.ag.setCanActivate(false);
	  this.router.navigate(['']);
  }
}
