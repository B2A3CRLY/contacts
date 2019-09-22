import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactServiceService} from '../contact-service.service';
import {Routes } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact: Contact;
  constructor(public contactService: ContactServiceService) { }
  mode = 1;
  ngOnInit() {
  }
  saveContact() {
    this.contactService.saveContact(this.contact).subscribe(data => {
      console.log('data :' + data);
      this.mode = 2;
      }
      , err => {
      console.log(err);
    });
  }
  goHome() {

  }
}
