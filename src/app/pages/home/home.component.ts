import { Component  ,OnInit} from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  users:any=[];
  mostrardatos=true;

  constructor(private traernombre:UsuarioService){}

  ngOnInit(): void {
  this.traernombre.getmostrar().subscribe(
    res=>{
      console.log(res)
      this.users=res;
    },err =>{

    }
  ) ;
  }
  mostrarlista(){
    this.mostrardatos=!this.mostrardatos
  }
}
