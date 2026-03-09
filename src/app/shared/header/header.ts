import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    SlicePipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header 
{
  protected readonly username=inject(AuthService)
  
  
}
