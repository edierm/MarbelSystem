import { ModalDirective } from 'ngx-bootstrap/modal';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'productsdash-cmp',
  templateUrl: 'products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsDashComponent implements OnInit {
  imageSrc: string = '';
  @ViewChild('modalSuccess') public modalRef: ModalDirective;
  productForm = this.fb.group({
    name: ['', [Validators.required]],
    image: ['', [Validators.required]],
    description: ['', [Validators.required]],
    category: ['', [Validators.required]],
    material: ['', [Validators.required]],
    price: ['', [Validators.required]],
    color: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    promo: ['',[]]
  });
  selectProduct = localStorage.getItem('selectProduct');
  dataLocal: any;
  isUpdate = false;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.dataLocal = JSON.parse(localStorage.getItem('selectProduct'));
      if (this.dataLocal) {
        this.productForm.patchValue(this.dataLocal);
        this.imageSrc = this.dataLocal.image;
        this.isUpdate = true;
      }
    }
    console.log(this.router.url);
  }
  dataModal = {
    title: '',
    body: '',
  };
  openModal() {
    this.modalRef.hide();
    this.modalRef.show();
  }
  handleInputChangeImg(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.productForm.patchValue({
      image: this.imageSrc,
    });
    console.log(this.imageSrc);
  }
  saveProduct() {
    console.log(this.productForm.value, this.imageSrc);
    this.productForm.patchValue({
      image: this.imageSrc,
    });
    const data = this.productForm.value;
    if (this.isUpdate) {
        Object.assign(data, {_id: this.route.snapshot.params.id})
        console.log(this.route);
        this.productService.updateProduct(data).subscribe((res) => {
            console.log('Actualizado producto', res);
            this.dataModal.title = 'Producto Actualizado';
        this.dataModal.body = 'Exito';
        this.openModal();
      }, (error) => {
        this.dataModal.title = 'Error';
        this.dataModal.body = 'No se pudo Actualizar el producto';
        this.openModal();
        });
    } else {
      console.log('Data Producto: ', data);
      this.productService.createProduct(data).subscribe((res) => {
        console.log('Creado producto', res);
        this.dataModal.title = 'Producto Creado';
        this.dataModal.body = 'Exito';
        this.openModal();
      }, (error) => {
        this.dataModal.title = 'Error';
        this.dataModal.body = 'No se pudo crear el producto';
        this.openModal();
      });
    }
  }

  clicksub() {
    console.log(this.productForm.value);
    this.productForm.reset();
  }
  get name() {
    return this.productForm.get('name');
  }
  get image() {
    return this.productForm.get('image');
  }
  get description() {
    return this.productForm.get('description');
  }
  get category() {
    return this.productForm.get('category');
  }
  get material() {
    return this.productForm.get('material');
  }
  get price() {
    return this.productForm.get('price');
  }
  get color() {
    return this.productForm.get('color');
  }
  get amount() {
    return this.productForm.get('amount');
  }

 /*  sales: any[];
  salesRents: any[]; */
}
