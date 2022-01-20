import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  save(){
    this.route.navigate(['/upload'])
  }
}
