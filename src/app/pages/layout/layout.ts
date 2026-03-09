import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebarmenu } from '../../shared/sidebarmenu/sidebarmenu';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,Sidebarmenu,Header],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
