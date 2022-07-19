import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  readonly apiURL : string;

    constructor(private http : HttpClient) {
      this.apiURL = 'https://apiNodeJs-mongo.moisesalves7.repl.co';
      
  }
  healthcheck() {
    this.http.get(`${ this.apiURL }/`)
            .subscribe(resultado => console.log(resultado));
  }
  listarTodosProdutos() {
    this.http.get<Produto[]>(`${ this.apiURL }/products`)
            .subscribe(resultado => console.log(resultado));
  }
  listarProdutoPorSlug() {
    this.http.get(`${ this.apiURL }/products/slug`)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('Produto não localizado.');
                  }
                }
              );
  }
  listarProdutoPorId() {
    this.http.get(`${ this.apiURL }/products/admin/99`)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('Produto não localizado.');
                  }
                }
              );
  }
  listarProdutoPorTag() {
    this.http.get(`${ this.apiURL }/products/tags/99`)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('Produto não localizado.');
                  }
                }
              );
  }
  adicionarProduto() {
    var produto = new Produto();
    produto.nome = "Cadeira Gamer"
  
    this.http.post<Produto>(`${ this.apiURL }/products`, produto)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 400) {
                    console.log(erro.error.mensagem);
                  }
                }
              );
  }
  alterarProduto() {
    var produto = { id : 1, nome : "Smart TV 50 Polegadas" };
  
    this.http.put(`${ this.apiURL }/products/1`, produto)
              .subscribe(
                resultado => {
                  console.log('Produto alterado com sucesso.')
                },
                erro => {
                  switch(erro.status) {
                    case 400:
                      console.log(erro.error.mensagem);
                      break;
                    case 404:
                      console.log('Produto não localizado.');
                      break;
                  }
                }
              );
  }
  excluirProduto() {
    this.http.delete(`${ this.apiURL }/products/1`)
              .subscribe(
                resultado => {
                  console.log('Produto excluído com sucesso.');
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('Produto não localizado.');
                  }
                }
              );
  }

  listarTodosClientes() {
    this.http.get(`${ this.apiURL }/customers`)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('Produto não localizado.');
                  }
                }
              );
  }
  adicionarCliente() {
    var produto = { nome : "" };
  
    this.http.post(`${ this.apiURL }/customers`, produto)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 400) {
                    console.log(erro.error.mensagem);
                  }
                }
              );
  }
  autenticar() {
    var produto = { nome : "" };
  
    this.http.post(`${ this.apiURL }/customers/authenticate`, produto)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 400) {
                    console.log(erro.error.mensagem);
                  }
                }
              );
  }
  atualizaToken() {
    var produto = { nome : "" };
  
    this.http.post(`${ this.apiURL }/customers/refresh-token`, produto)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 400) {
                    console.log(erro.error.mensagem);
                  }
                }
              );
  }
  listaPedido() {
    this.http.get(`${ this.apiURL }/orders`)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('Produto não localizado.');
                  }
                }
              );
  }
  adicionarPedido() {
    var produto = { nome : "" };
  
    this.http.post(`${ this.apiURL }/orders`, produto)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 400) {
                    console.log(erro.error.mensagem);
                  }
                }
              );
  }
}
