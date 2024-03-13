import { CommonModule } from '@angular/common';
import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  title = 'FirstApp';

  selectedTheme: string = '';

  themes: string[] = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  onThemeChange(event: any): void {
    this.selectedTheme = event.target.value;
    console.log('Selected theme:', this.selectedTheme);
    const htmlTag = document.getElementById("html");
    console.log(htmlTag);
    htmlTag?.setAttribute('data-theme', this.selectedTheme);
  }
}
