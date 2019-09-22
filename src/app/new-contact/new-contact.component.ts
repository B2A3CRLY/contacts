import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactServiceService} from '../contact-service.service';
import {Routes } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact: any;
  angForm: FormGroup;
  constructor(public contactService: ContactServiceService, private fb: FormBuilder) {
    this.createForm();
  }
  mode = 1;
  ngOnInit() {
  }
  saveContact() {
    const contactValue = this.angForm.value;
    this.contact = new Contact(
      contactValue.nom, contactValue.prenom, contactValue.email, contactValue.dateNaissance, contactValue.tel
    );
    this.contactService.saveContact(this.contact).subscribe(data => {
      console.log('data :' + data);
      this.mode = 2;
      }
      , err => {
      console.log(err);
    });
  }
  private createForm() {
    this.angForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      tel: ['', Validators.required]
    });
  }
  goHome() {

  }
}
