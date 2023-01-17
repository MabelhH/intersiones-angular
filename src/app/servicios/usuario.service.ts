import { HttpClient } from '@angular/common/http';
import { Injectable ,OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements OnInit{

url="https://jsonplaceholder.typicode.com/users"

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    
  }
  getmostrar(){
    return this.http.get<any>(this.url);
  }
}
