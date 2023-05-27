import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
	selector: 'app-slider',
	standalone: true,
	imports: [NgbCarouselModule, NgIf],
	templateUrl: './slider.component.html',
})
export class NgbdCarouselBasic {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1400/500`);
}
