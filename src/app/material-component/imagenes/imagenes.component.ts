import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { DemoMaterialModule } from 'src/app/demo-material-module';


@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [DemoMaterialModule, FormsModule, ReactiveFormsModule, CommonModule, MatProgressBarModule, MatCardModule, MatRadioModule, NgIf, MatSliderModule, MatProgressBarModule],
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent {
  color = 'primary';
  mode:any = 'determinate';
  value = 50;
  bufferValue = 75;

}
