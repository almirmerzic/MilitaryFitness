import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const contactFormApi = '';
const contactFormParticipateApi = '';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  contactForm(model):
    Observable<any> {
    return this.http.post(contactFormApi,
      {
        "name": model.fullname,
        "email": model.email,
        "phone": model.phone,
        "subject": model.subject,
        "message":model.message
      });
  }

  sendAnInquiry(model):
    Observable<any> {
    return this.http.post(contactFormParticipateApi,
      {
        "name": model.fullname,
        "email": model.email,
        "phone": model.phone,
        "age":model.age
      });
  }
}
