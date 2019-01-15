




import { Component, OnInit } from '@angular/core';
import { ProductM } from '../../models/product-m';
import { ProductParamM } from '../../models/product-param-m';
import { ConfirmationService, Message } from 'primeng/api';
import { ProductService } from '../../services/product.service';
import { CategoryM } from '../../models/category-m';
import { CategoryService } from '../../services/category.service';
import { CategoryParamM } from '../../models/category-param-m';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  categories: CategoryM[];
  selectedCategory: CategoryM;
  category: CategoryM;
  categoryTitle: string;
  selectedProduct: ProductM;

  selectedProductParam: ProductParamM;

  paramsCategory: CategoryParamM[];
  selectedParamsCategory: CategoryParamM;
  paramsProduct: ProductParamM[];

  showConfirmInfo: boolean;

  product: ProductM;
  filteredCategories: any[];
  productParam: ProductParamM;
  displayDialog: boolean;
  paramsList: string[];
  cols: any[];
  msgs: Message[] = [];


  constructor(private productService: ProductService, private categoryService: CategoryService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.product = new ProductM;
    let paramsProduct = new Array<ProductParamM>();
    this.product.parameters = paramsProduct;
    this.selectedCategory = undefined;
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (data: any[]) => {
        console.log(data);
        if (data !== null) {
          this.categories = data;
        }
      }
    );
  }

  filterCategories(event) {
    this.filteredCategories = [];
    for (let i = 0; i < this.categories.length; i++) {
        const category = this.categories[i];
        if (category.title.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
            this.filteredCategories.push(category);
        }
    }
  }

  categorySel(event) {
    if (this.selectedCategory !== undefined) {
      this.paramsCategory = this.selectedCategory.parameters;
      this.product.categoryId = this.selectedCategory.id;
      this.product.categoryName = this.selectedCategory.title;
    }
  }

  showDialogToAddParams() {
    if (this.selectedCategory !== undefined) {
      this.productParam = new ProductParamM;
      this.displayDialog = true;
    }
  }

  addParam() {
    this.productParam.categoryParamId = this.selectedParamsCategory.id;
    this.productParam.categoryParamName = this.selectedParamsCategory.title;
    this.product.parameters.push(this.productParam);
    this.displayDialog = false;
  }

  saveProduct() {
    this.productService.addProduct(this.product).subscribe(
      data => {
        if (data === null) {
          this.ngOnInit();
          this.showConfirmInfo = true;
        }
      }
    );
  }
}
