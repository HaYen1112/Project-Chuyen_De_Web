import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.scss','../asset2/css/bootstrap.min.css','../asset2/css/fontawesome.min.css','../asset2/css/templatemo-style.css']
})
export class AdminAddProductComponent implements OnInit {
 @Input() url ='/assets/images/image.JPG';
  contructor() {}

  onFileChanged(event: any) {
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload= (event: any) =>{
        this.url = event.target.result;
      }

    }
  }

  ngOnInit(): void {
  }

}
