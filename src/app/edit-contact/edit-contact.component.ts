import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../../model/model.contact';
import {ContactServiceService} from '../contact-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  angForm: FormGroup;
  contact: any;
  constructor(private fb: FormBuilder, private contactService: ContactServiceService, private router: Router,
              private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idContact = +params.get('id');
      console.log('id:' + idContact);
      this.contactService.getContact(idContact).subscribe(res => {
        this.contact = res;
        console.log('Contact:', this.contact);
      });
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
  updateContact() {
    const contactValue = this.angForm.value;
    const contact = new Contact(
      contactValue.nom, contactValue.prenom, contactValue.email, contactValue.dateNaissance, contactValue.tel
    );
    console.log('nom:' + contactValue.nom)
    console.log('edit:', contact);
    this.route.params.subscribe(params => {
      this.contactService.updateContact(params.id, contact).subscribe(res => {
        console.log('data:' + res);
      });
    });
    this.router.navigate(['/contacts']);
  }

}
