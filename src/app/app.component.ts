import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   trigger('overlayAnimation', [
  //     state('visible', style({
  //       transform: 'translateY(0%)',
  //       zIndex: '33'
  //     })),
  //     state('hidden', style({
  //       transform: 'translateY(-100%)',
  //       zIndex: '0'
  //     })),
  //     transition('visible <=> hidden', animate('0.6s ease-in-out'))
  //   ])
  // ]
})
export class AppComponent {
  title = 'GF';
  currentImage: string = 'GF-GIF.gif';
  noButtonText: string = 'No';
  yesButtonScale: number = 1.0;
  DidntAcceptYet:boolean = true
  overlayState: string = 'visible';


  // ngOnInit() {
  //   setTimeout(() => {
  //     this.overlayState = 'hidden';
  //   }, 2000);
  // }

  onYesClick() {
    this.DidntAcceptYet = false
  }

  onNoClick() {
    this.currentImage = 'assets/image2.jpg';
    this.noButtonText = 'Are you sure?';

    this.yesButtonScale += 0.3;
    const yesButton = document.getElementById('yes-button');
    if (yesButton) {
      yesButton.style.transform = `scale(${this.yesButtonScale})`;
    }
  }
}
