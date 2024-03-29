import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'group2-sem1-project';
  show:boolean =  false;
  /*THIS FOR SCROLL NAVBAR*/
  constructor (private http: HttpClient, private router: Router) {
    this.function();
  }

  ngOnInit(){
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd))
    //   {
    //     return;
    //   }
    //   window.scrollTo(0, 0)
    // });
  }
  //Hiden nav when scroll
  function(){
    window.onscroll = () => {
      if (window.pageYOffset > 100){
        this.show = true;
      }
      else{
        this.show = false;
      }
    };
  }

  // search function
  // searchResult: Data[] = [];
  // searchText?: '';
  //
  // search() {
  //   const searchUrl = host + 'search-product/?keyword=' + this.searchText;
  //   this.http.get<Data[]>(searchUrl).subscribe(data => {
  //     this.searchResult = data;
  //     this.router.navigate(['/search']);
  //     this.searchText = '';
  //   })
  // }
}
