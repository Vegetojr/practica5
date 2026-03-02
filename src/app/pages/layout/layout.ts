import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebarmenu } from '../../shared/sidebarmenu/sidebarmenu';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,Sidebarmenu],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
