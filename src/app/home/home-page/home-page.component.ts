import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'skin-yellow');
    this.renderer.addClass(document.body, 'sidebar-mini');
    this.renderer.addClass(document.body, 'sidebar-collapse');
  
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'skin-yellow');
    this.renderer.removeClass(document.body, 'sidebar-mini');
    this.renderer.removeClass(document.body, 'sidebar-collapse');
  }
}
