import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent   {
 
  title = 'colorpicker';
 
  tooltipText: string = "Click Here for more information......";

  isModalOpen = false;
  modalImages: string[] = [];
  modalTitle = '';
  modalDescription = '';
  isSmallScreen = false; // Tracks if the device is small


  openDrive() {
    window.open("https://drive.google.com/drive/folders/1yw7QqenChazTJp4ZzavzxLuGmZZWzXYN?usp=sharing", "_blank");
  }
  
  // Images for each div box
  images: Record<1 | 2 | 3 | 4 | 5, string[]> = {
    1: [
      'https://i.ibb.co/XFTdkxt/ob11L01.png',
      'https://i.ibb.co/B4DBtYb/ob11L02.png',
      'https://i.ibb.co/mys2kcp/ob11L03.png',
       
    ],
    2: [
      'https://i.ibb.co/PCSxQWz/ob2L01.png',
      'https://i.ibb.co/P9PDhzM/ob2L03.png',
      'https://i.ibb.co/D9tsJS7/ob2L02.png',
    ],
    3: [
      'https://i.ibb.co/rcmjjCD/ob3L03.png',
      'https://i.ibb.co/Dryn8Fr/ob3L02.png',
      'https://i.ibb.co/yVNXVJX/ob3L01.png',
    ],
    4: [
      'https://i.ibb.co/frVL979/ob4L03.png',
      'https://i.ibb.co/480wCdS/ob4L01.png',
      'https://i.ibb.co/qWKPRbr/ob4L02.png',
    ],
    5: [
      'https://i.ibb.co/F5gQT5r/ob5L03.png',
      'https://i.ibb.co/C7QKvxh/ob5L01.png',
      'https://i.ibb.co/hdYg6YM/ob5L02.png',
    ],
  };

  titles: Record<1 | 2 | 3 | 4 | 5, string> = {
    1: 'Cover Glass:',
    2: 'Touch Sensor:',
    3: 'Optical Bonding:',
    4: 'LCD/Display Panel:',
    5: 'Backlight Unit:',
  };

  descriptions: Record<1 | 2 | 3 | 4 | 5, string> = {
    1: 'Acts as the outermost protective layer, shielding the display from scratches, dirt, and impacts. It also provides a smooth surface for touch input.',
    2: 'Sits below the cover glass and detects touch by measuring changes in the electrostatic field caused by the user’s finger.',
    3: 'A clear adhesive layer that fills the air gap between the touch sensor and the display, reducing glare, improving contrast, and enhancing durability.',
    4: 'Generates the images or visuals that the user interacts with, delivering color and clarity.',
    5: 'Provides consistent illumination for the LCD, ensuring visibility in all lighting conditions.',
  };

  openModal(divIndex: 1 | 2 | 3 | 4 | 5): void {
    this.modalImages = this.images[divIndex];
    this.modalTitle = this.titles[divIndex];
    this.modalDescription = this.descriptions[divIndex];
    this.isModalOpen = true;

    // Start the carousel
    setTimeout(() => {
      const carouselElement = document.getElementById('carouselExample');
      if (carouselElement) {
        const bootstrapCarousel = new bootstrap.Carousel(carouselElement, {
          interval: 3000, // Autoplay interval in ms
          ride: 'carousel',
        });
      }
    }, 0);
  }


  // Close the modal
  closeModal(): void {
    this.isModalOpen = false;
  }

  // Detect screen size
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.isSmallScreen = window.innerWidth <= 768; // Adjust based on your breakpoints
  }

  ngOnInit(): void {
    this.isSmallScreen = window.innerWidth <= 768; // Check on component initialization
  }
}
 
