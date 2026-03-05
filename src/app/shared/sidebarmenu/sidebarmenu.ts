import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
@Component({
  selector: 'app-sidebarmenu',
  imports: [RouterLink,MatListModule,MatIconModule,RouterLinkActive],
  templateUrl: './sidebarmenu.html',
  styleUrl: './sidebarmenu.scss',
})
export class Sidebarmenu {

}
