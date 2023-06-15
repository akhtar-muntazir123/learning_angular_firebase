import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

public get name(){
  return this.form.controls['name'] 
}
public get description(){
   return this.form.controls['description'] 
}
public get price(){
  return this.form.controls['price'] 
}
public submit()
{
  console.log(this.form.value)
}
}
