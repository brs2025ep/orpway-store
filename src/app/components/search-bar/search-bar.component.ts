import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent  {
  terms = "";

  constructor(
    private router: Router
  ) { }

  onSubmit(searchForm: NgForm): void {
      if (searchForm.valid) {
        console.log('Form Submitted:', searchForm.value);
      } else {
        console.log('Form is invalid');
      }
    }

  searchTerms() {
    if(this.terms){
      this.router.navigate(['/products'], { queryParams: { description: this.terms } });
      return;
    }

    this.router.navigate(['/products']);
  }
}
