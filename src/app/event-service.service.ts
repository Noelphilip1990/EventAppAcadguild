import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Event} from './model/event';
import{Observable} from 'rxjs/Rx';
import {EventListComponentComponent} from './event-list-component/event-list-component.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventServiceService {
public eventList:Event[]=[];
/**{ name: 'Noel', date: new Date("03/31/2017"), description: `This event is for Noel's Birthday`, session:[] } ,
{ name: 'Joseph', date: new Date("04/04/2017"), description: `This event is for Joseph's Birthday`, session: [] },
{ name: 'Mary', date: new Date("03/30/2017"), description: `This event is for Mary's Birthday`, session: [] }**/
constructor(private http: Http) { 
	  console.log("value:"+this.eventList);
  }

private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

	private _serverError(err: any) {
		console.log('sever error:', err);  // debug
		if (err instanceof Response) {
			return Observable.throw(err.json().error || 'backend server error');
			// if you're using lite-server, use the following line
			// instead of the line above:
			//return Observable.throw(err.text() || 'backend server error');
		}
		return Observable.throw(err || 'backend server error');
	}

//private eventUrl = './assets/event.json';
	private eventUrl = 'api/events';


//Get Events
  getEvents(): Observable<Event[]> {
	  // ...using get request
	  return this.http.get(this.eventUrl)
		  // ...and calling .json() on the response to return data
		  .map(this.extractData)
		  //...errors if any
		  //.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
		  .do(data => console.log(data))//this.eventList=data)  // debug
          .catch(this._serverError);

  }
   // Add a new Event
    addEvent (body): Observable<Event[]> {
    	console.log("Body:"+body.name,body.description,body.date,body.session);
        let bodyString = JSON.stringify(body);
        console.log("BodySting:"+bodyString);
         // Stringify payload
       // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers }); // Create a request option

		return this.http.post(this.eventUrl, bodyString, options) // ...using post request
                         .map(this.extractData) // ...and calling .json() on the response to return data
						 .do(data => console.log(data))//this.eventList) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }  

	
    // Update a event
    updateEvent (body): Observable<Event[]> {
		
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        console.log(`${this.eventUrl}/${body['id']}`);
		console.log("UPD:");
		return this.http.put(`${this.eventUrl}/${body['id']}`, bodyString, options) // ...using put request
                         .map(this.extractData) // ...and calling .json() on the response to return data
			.do(data => console.log(data))//(this.eventList.splice(id, 0, data))) 
						.catch(this._serverError); //...errors if any
    }  
    // Delete a event
    removeEvent (id:number): Observable<Event[]> {
    	console.log("DEL:");
        return this.http.delete(`${this.eventUrl}/${id}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .do(data => console.log(data))
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   
    //Add session
	addSession(body, id: string) {
		//this.eventList[id].session.push(body);
		let bodyString = JSON.stringify(body); // Stringify payload
		let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
		let options = new RequestOptions({ headers: headers }); // Create a request option
		console.log(`${this.eventUrl}/${id}`);
		console.log("UPD:");
		return this.http.put(`${this.eventUrl}/${id}`, bodyString, options) // ...using put request
			.map(this.extractData) // ...and calling .json() on the response to return data
			.do(data => console.log(data))//(this.eventList.splice(id, 0, data))) 
			.catch(this._serverError); //...errors if any
	}

}
