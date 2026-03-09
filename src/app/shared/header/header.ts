import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { SlicePipe } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [SlicePipe,MatMenuModule,MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header 
{
  protected readonly username=inject(AuthService)
  protected readonly auth=inject(AuthService)
  private readonly router=inject(Router)
  logout():void
  {
    this.auth.logout();
    this.router.navigateByUrl('login')
  }
}

