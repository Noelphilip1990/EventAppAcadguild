import { Component, OnInit } from '@angular/core';
import {EventServiceService} from '../event-service.service';
import {Router} from '@angular/router';
import {Event} from '../model/event';
import {Observable} from 'rxjs/Rx';
import { EventListComponentComponent } from '../event-list-component/event-list-component.component';
import { default as swal } from 'sweetalert2';
@Component({
  selector: 'app-add-event-component',
  templateUrl: './add-event-component.component.html',
  styleUrls: ['./add-event-component.component.css']
})
export class AddEventComponentComponent implements OnInit {
	//eventName: string;
  
	private date: string;
	//desc: string;
   public model = new Event('','',new Date(),'','','',0,[]);
   constructor(private el: EventListComponentComponent, private es: EventServiceService, private router: Router) { }

  ngOnInit() {
  }
  onSubmitTemplateBased(form){
     


      this.es.addEvent(this.model).subscribe(
              data =>
              {
               //this.el.list.push(data),
              },
              error =>
              {
                  console.error("Error saving Event!");
                   return Observable.throw(error);
              });
    swal({
      title: 'Event',
      text: 'New Event Added!!',
      timer: 2000
    }).then(
      function() { },
      // handling the promise rejection
      function(dismiss) {
        if (dismiss === 'timer') {
          console.log('I was closed by the timer')
        }
      }
      )
     this.el.loadEvents();
   this.router.navigate(['/admin']);
	  
  }
  close() {
    this.router.navigate(['/admin']);
  }
}
