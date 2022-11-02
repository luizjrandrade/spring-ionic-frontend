import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    //instaciando o formgroup
    this.formGroup = this.formBuilder.group({
      nome: ['Luiz', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: ['luizjr@email.com', [Validators.required, Validators.email]],
      tipo: ['1', [Validators.required]],
      cpfOuCnpj: ['61870765168', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha: ['123', [Validators.required]],
      logradouro: ['rua 2', [Validators.required]],
      numero: ['12', [Validators.required]],
      complemento: ['casa 31', [Validators.required]],
      bairro: ['Pds', []],
      cep: ['77022400', [Validators.required]],
      telefone1: ['6322225522', [Validators.required]],
      telefone2: ['', []],
      telefone3: ['', []],
      estadoId: [null, [Validators.required]],
      cidadeId: [null, [Validators.required]],
    });
  }

  signupUser(){
    console.log ("Enviou o form");
  }


}
