import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.route.navigate(['/login'])
  }
  navigate(compName: any){
    if(compName=='upload'){
      this.route.navigate(['/upload']);
    }
    else if(compName=='approve'){
      this.route.navigate(['approve'])
    }
    else if(compName=='search'){
      this.route.navigate(['search'])
    }
  }
}
