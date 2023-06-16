import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent {
public form =new FormGroup({
  name : new FormControl('',[Validators.required]),
  description: new FormControl('',[ Validators.required,Validators.minLength(2)]),
  price:new FormControl(null,[Validators.required])
})

constructor(public apiService:ApiService){

}

public get name(){
  return this.form.controls['name'] 
}
public get description(){
   return this.form.controls['description'] 
}
public get price(){
  return this.form.controls['price'] 
}
public async submit()
{
  // if(this.form.value){
  //   alert('form is invalid');
  //   return
  // }
  console.log(this.form.value);
  this.apiService
  .addProducts(this.form.value)
  .then(()=>{
    console.log("data added successfully")
  })
  .catch((err)=>{
    console.log(err)
  })
}
}
