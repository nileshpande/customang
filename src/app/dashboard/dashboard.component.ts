import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  homedata = {}
  noofstuds = {}
  constructor(private data: DataService,private _rout: Router) { }

  ngOnInit() {
    console.log(this.data.loggedin());
    this.loadhome();
    this.noofstdhome();

  }
  loadhome()
  {
    return this.data.listofstudents().subscribe(data => {
      this.homedata = data
      console.log(this.homedata)
      if(!this.homedata)
      {
        if(this.homedata['responce_status_massage']=='Invalid Token')
        {
            localStorage.clear();
            this._rout.navigate(['/login'])
        }
        else 
        { 
          alert(this.homedata['responce_status_massage']);
        }
      }
      else { }

     })
  }

  noofstdhome()
  {
    return this.data.noofstudentactive().subscribe(data => {
      this.noofstuds = data
      console.log(this.noofstuds)
      if(!this.noofstuds)
      {
        if(this.noofstuds['responce_status_massage']=='Invalid Token')
        {
            localStorage.clear();
            this._rout.navigate(['/login'])
        }
        else 
        { 
          alert(this.noofstuds['responce_status_massage']);
        }
      }
      else { }

     })
  }


}
