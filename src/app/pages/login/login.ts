import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login 
{
  datos=signal<string>('')
  private fb = inject(FormBuilder)
  private auth=inject(AuthService)
  private router=inject(Router)
  form= this.fb.group(
    {
      email: ['',[Validators.required,Validators.email]],
      pass: ['',[Validators.required,Validators.minLength(6)]]
    }
  )

  onSubmit()
  { 
    if (this.form.invalid)
      {
        this.datos.set('Existen datos invalidos en el logeo')
        this.form.markAllAsDirty()
        return
      }
    
      console.log(this.form.value)
      const {email,pass}=this.form.getRawValue();
      const valido=this.auth.login(email!,pass!)
      if (valido)
      { 
        this.router.navigateByUrl('/home')
        return
      }
  } 
}
