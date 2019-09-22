export class Contact {
  nom: string;
  prenom: string;
  email: string;
  tel: number;
  dateNaissance: Date;
  photo = '';
  constructor(public nom: string, public prenom: string, public email: string, public dateNaissance: Date, public tel: number) {}
}
