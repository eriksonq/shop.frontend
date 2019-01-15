import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FilterM } from '../../models/filter-m';
import { ProductM } from '../../models/product-m';
import { CategoryService } from '../../services/category.service';
import { CategoryM } from '../../models/category-m';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFilter: FilterM;
  products: ProductM[];
  selectedProduct: ProductM;
  cols: any[];
  categories: CategoryM[];
  selectedCategory: CategoryM;

  constructor(private productService: ProductService, private categoryService: CategoryService) { }


  ngOnInit() {
    this.getCategories();
    this.cols = [
      {field: 'title'}, {field: 'title'}, {field: 'description'}, {field: 'price'}, {field: 'categoryName'}

    ];
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

  doFilter() {
    let filter = new FilterM;
    filter.categoryId = this.selectedCategory.id;
    filter.params = this.selectedCategory.parameters;
    this.getProduct(filter);
  }
  getProduct(searchFilter: FilterM) {
    this.productService.getProducts(searchFilter).subscribe(
      (data: any[]) => {
        console.log(data);
        if (data !== null) {
          this.products = data;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
