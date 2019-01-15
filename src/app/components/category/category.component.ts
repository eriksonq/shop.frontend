



import { Component, OnInit } from '@angular/core';
import { CategoryM } from '../../models/category-m';
import { CategoryService } from '../../services/category.service';
import { CategoryParamM } from '../../models/category-param-m';
import { ConfirmationService, Message } from 'primeng/api';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ConfirmationService]
})
export class CategoryComponent implements OnInit {

  categories: CategoryM[];
  selectedCategory: CategoryM;
  category: CategoryM = new CategoryM;
  categoryParam: CategoryParamM = new CategoryParamM;
  displayDialog: boolean;
  displayDialogDel: boolean;
  paramsList: string[];
  cols: any[];
  msgs: Message[] = [];

  constructor(private categoryService: CategoryService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getCategories();

    this.cols = [
      { field: 'title'}
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

  showDialogToAdd() {
    this.category = new CategoryM;
    this.category.parameters = new Array<CategoryParamM>();
    if (this.paramsList !== undefined) {
      this.paramsList.splice(0, this.paramsList.length);
    }
    this.displayDialog = true;
  }

  showDialogToDel() {
    if (this.selectedCategory !== undefined) {
      // this.displayDialogDel = true;
      this.confirmationService.confirm({
        message: 'Вы действительно хотите удалить текущую запись?',
        header: 'Внимание!',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.categoryService.delCategory(this.selectedCategory.id).subscribe(
              data => {
                this.getCategories();
              },
              error => {
                console.log(error);
              }
            );
        },
        reject: () => {

        }
      });
    }
  }

  save() {
    this.categoryService.addCategory(this.category).subscribe(
      data => {
        if (data === null) {
          this.getCategories();
          this.displayDialog = false;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  addCategoryParams() {
    let params = new CategoryParamM;
    params = this.categoryParam;
    this.category.parameters.push(params);
    this.doParamsList();
  }

  doParamsList() {
    this.category.parameters.splice(0, this.category.parameters.length);
    let i = 0;
    for (i = 0; i < this.paramsList.length; i++) {
      let p = new CategoryParamM;
      p.title = this.paramsList[i];
      this.category.parameters.push(p);
    }

  }


}
