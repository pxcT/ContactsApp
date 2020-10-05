import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

    private loginStateSubject = new Subject<boolean>()
	public loginState = this.loginStateSubject.asObservable();
    
    constructor() { }

   public changeLoginState(value) {
       this.loginStateSubject.next(true);
   }
}