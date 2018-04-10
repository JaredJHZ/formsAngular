import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup , Validator, Validators, FormArray} from '@angular/forms';
import { promise } from 'protractor';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  forma:FormGroup;

  defaultUser:object = {
    nombreCompleto:{
      nombre: 'example',
      apellido: 'example'
    },
    correo: 'example@example.com'
  }

  constructor() {
    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
          'nombre':new FormControl('',[Validators.required, Validators.minLength(3), this.noExample]),
          'apellido':new FormControl('',Validators.required),
      }),
      'correo':new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)]),
      'pasatiempos':new FormArray([new FormControl('Correr',Validators.required)]),
      'username':new FormControl('',[Validators.required],this.userValidate)
    },
  );
   }
  ngOnInit() {
  }

  guardarCambios():void{
    console.log(this.forma);
    
  }

  agregarPasatiempo():void{
  (<FormArray> this.forma.controls['pasatiempos']).push(
    new FormControl('correr',Validators.required)
  );
  console.log(this.forma);
  }
  
  borrarPasatiempo(index:number):void{
    (<FormArray> this.forma.controls['pasatiempos']).removeAt(index);
  }

  noExample(control:FormControl):{[s:string]:boolean}{
    if(control.value == "example"){
      return {
        noExample:true
      }
    }
    return null;
  }

  userValidate(control:FormControl):Promise<any>{
    let promise = new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(control.value == "jaredhz"){
          resolve({existe:true});
        }else{
          resolve(null);
        }
        
      }, 1500);
    });

  return promise;
  }

}
