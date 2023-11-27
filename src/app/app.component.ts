import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'message';

  text = "Will you go out with me?"

  changeText(){

    this.text = "Yay, see you on the <?>!"

    const iframe = document.getElementById('gifFrame') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = "https://giphy.com/embed/LHZyixOnHwDDy";
    }

  }

  changeText1(){

    this.text = "Fuck You!"

    const iframe = document.getElementById('gifFrame') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = "https://giphy.com/embed/I7p8K5EY9w9dC";
    }

  }

  moveButton() {
    const button = document.getElementById('noButton');
  
    if (button) {
      const maxX = 500; // Maximum X value
      const maxY = 150; // Maximum Y value
  
      // Generate random positions within these max values
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
  
      // Set button position
      button.style.position = 'absolute';
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  }
}
