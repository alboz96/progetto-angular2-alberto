import { Component, Input, OnChanges }       from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Hero, states, Address } from '../../../models/data-model';
import { Hero2Service } from '../../../services/hero2-service/hero2.service';



@Component({
  selector: 'hero-detail-2',
  templateUrl: './hero-detail2.component.html'
})
export class HeroDetail2Component implements OnChanges {
  //data-model (hero che arriva in input e che popola il form-model)
  @Input() hero: Hero;
  //form-model (dati che verranno modificati nel form)

  //data-model e form-model NON coincidono, anche se possono assumere gli stessi valori (clonandoli)
  heroForm: FormGroup;
  nameChangeLog: string[] = [];
  states = states;

  constructor(
    private fb: FormBuilder,
    private heroService2: Hero2Service) {

    this.createForm();
    this.logNameChange();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: '',
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }
//quando una proprietà di input/output varia il suo valore (in questo caso entrerà solo quando hero cambia il suo valore)
  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name
    });
    this.setAddresses(this.hero.addresses);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  //converte array di indirizzi in formArray e li setta nel form
  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService2.updateHero(this.hero).subscribe(/* error handling */);
    this.ngOnChanges();
  }

  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;

    // deep copy of form model lairs (clona l'array di tutti gli indirizzi)
    // clona un array di oggetti Address (come funzione clone)
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs // <-- bad!
      addresses: secretLairsDeepCopy
    };
    return saveHero;
  }

  revert() { this.ngOnChanges(); }

  logNameChange() {
    const nameControl = this.heroForm.get('name');
    //valueChanges ritorna un Observable
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }
}
