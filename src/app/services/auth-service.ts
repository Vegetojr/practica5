import { JsonpInterceptor } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';

export interface Session
{
  id:number,
  name:String,
  email:String
}


@Injectable({
  providedIn: 'root',
})
export class AuthService 
{
  private readonly storageKey='session_user'
  mockUser:any[]=
  [
    {id:1,name:'Papu',email:'papu@sldg.com',pass:'lol123'},
    {id:2,name:'eteSetch',email:'elpepe@sldg.com',pass:'lol123'}
  ]
  private readonly _currentUser=signal<Session|null>(this.readFromStorage());
  readonly currentUser= computed(()=> this._currentUser())
  readonly isAuth=computed(()=>this._currentUser()!==null)

  
    
  login(email:String,pass:String)
  {
    const exitse=this.mockUser.find
    (
      u=>u.email.toLowerCase()===email.toLocaleLowerCase().trim() &&
      u.pass.toLowerCase()===pass.toLocaleLowerCase().trim() 
    );
    if (!exitse) return false
    
    const sessionUser: Session=
    {
      id:exitse.id,name:exitse.name,email:exitse.email
    }
    

    localStorage.setItem(this.storageKey,JSON.stringify(sessionUser));
    this._currentUser.set(sessionUser)
    return true
  }

  readFromStorage():Session|null
  {
    const user =localStorage.getItem(this.storageKey)
    if (!user) return null

    try
    {
      return JSON.parse(user)as Session
    }
    catch (error)
    {
      localStorage.removeItem(this.storageKey)
      return null
    }
  }
  logout():void
  {
    this._currentUser.set(null)
    localStorage.removeItem(this.storageKey)
  }
}
