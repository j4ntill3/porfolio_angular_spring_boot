import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/models/header';
import { HeaderService } from 'src/app/service/header.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header: Header;
  
  constructor(public headerService: HeaderService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHeader();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHeader(){
    this.headerService.detail(1).subscribe(data =>
      {this.header = data})
  }

}
