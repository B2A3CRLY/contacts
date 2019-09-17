import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ContactServiceService} from '../contact-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    pageContact: any;
    pages: any;
    motCle = '';
    page = 0;
    size = 5;
  constructor(private http: HttpClient, private contactService: ContactServiceService) { }

  ngOnInit() {
    /*this.contactService.getContacts().subscribe(data => {
      console.log(data);
      this.pageContact = data;
    }, err => {
      console.log(err);
    });*/
    this.getContacts();

  }
  getContacts() {
    this.contactService.getContacts();
  }
  doSearch() {
    this.contactService.searchContacts(this.motCle, this.page, this.size).subscribe(data => {
      console.log('data :' + data);
      this.pageContact = data;
      this.pages = new Array(10);
    }, err => {
      console.log(err);
    });
  }
  chercher() {
    this.doSearch();
  }
  gotoPage(i: number) {
    this.page = i;
    this.doSearch();
  }
  onDelete(id: number) {
     const mess = confirm('do you really want to delete ?');
     if (mess) {
     this.contactService.deleteContact(id).subscribe( data => {
     this.doSearch();
    }, err => {
    console.log(err); });
  }}
}
