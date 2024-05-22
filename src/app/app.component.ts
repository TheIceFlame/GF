import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GF';
  currentImage: string = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b4aba1b-d2a3-4f69-8a99-891fea3c2e8c/deiflk6-2cae766a-286d-4aae-bc80-dc65bd9faf89.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFiNGFiYTFiLWQyYTMtNGY2OS04YTk5LTg5MWZlYTNjMmU4Y1wvZGVpZmxrNi0yY2FlNzY2YS0yODZkLTRhYWUtYmM4MC1kYzY1YmQ5ZmFmODkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7BiNoN_9WNPkqmyFD-bbYBGqbvBDMCn_FtBpnS8f32g';
  noButtonText: string = 'No';
  yesButtonScale: number = 1.0;

  onYesClick() {
    // Add any functionality for when Yes is clicked, if needed
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
