import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss'],
})
export class EditProductsComponent {

    public form =new FormGroup({
      name : new FormControl('',[Validators.required]),
      description: new FormControl('',[ Validators.required,Validators.minLength(2)]),
      price:new FormControl(null,[Validators.required])
    })
    
  public productId;
  public productData;

  constructor(public route: ActivatedRoute, public apiService: ApiService) {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      console.log(this.productId);
      this.apiService.getProduct(this.productId).then((product) => {
        this.productData = product;
        console.log(this.productData);
      });
    });
  }
  public async submit()
{
  // if(this.form.value){
  //   alert('form is invalid');
  //   return
  // }
  console.log(this.form.value);
  this.apiService
  .updateProducts(this.form.value,this.productId)
  .then(()=>{
    console.log("data updated successfully")
  })
  .catch((err)=>{
    console.log(err)
  })
}

}