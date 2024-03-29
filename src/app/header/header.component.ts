import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchFilterService } from '../services/search-filter.service';
import { CartComponent } from '../cart/cart.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    CartComponent,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  search: string = '';

  constructor(private searchFilterService: SearchFilterService) {}

  onSearchChange(): void {
    console.log(this.search);
    this.searchFilterService.emitSearchChanged(this.search);
  }

  // navigate(): void {
  //   this.router.navigate(['/']);
  //   this.dialogRef.close();
  // }

  switchTheme(): void {
    console.log('switchTheme');
  }
}
