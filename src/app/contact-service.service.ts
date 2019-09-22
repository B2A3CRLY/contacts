import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../model/model.contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  url = 'http://localhost:8080/';
  // url = 'https://contact-spring-boot.herokuapp.com/';
  constructor(private http: HttpClient) { }
  getContacts() {
    return this.http.get(this.url + 'contacts');
  }
  getContact(id: number) {
    return this.http.get(this.url + 'contacts/' + id);
  }
  searchContacts(motCle: string, page: number, size: number) {
    return this.http.get(this.url + 'chercherContacts?mc=' + motCle + '&page=' + page + '&size=' + size);
  }
  saveContact(contact: Contact) {
    return this.http.post(this.url + 'contacts', contact);
  }
  deleteContact(id: number) {
    return this.http.delete(this.url + 'contacts/' + id);
  }
  updateContact(id, contact) {
    return this.http.put(this.url + 'contacts/' + id, contact);
  }
}
