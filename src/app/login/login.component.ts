import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public logobj: object;
  constructor(private data: DataService,private _rout: Router) { }

  ngOnInit() {
  }
  userlogin = {}
  loginform() {
    console.log(this.userlogin);
      return this.data.postlogin(this.userlogin).subscribe(data => { 
        this.logobj = data
        console.log(data); 
        if(this.logobj['status'])
        {
            localStorage.setItem('token',<any>data['token'])
            this._rout.navigate(['/dashboard'])
            
        }
        else
        {
            localStorage.clear();
            console.log('No token'); 
        }
    })
  }

}
