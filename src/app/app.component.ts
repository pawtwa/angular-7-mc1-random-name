import {Component, OnInit} from '@angular/core';
import {RandomNameService} from './random-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RandomNameService]
})
export class AppComponent implements OnInit {
  title = 'mc1-random-name';
  randomName: string;

  constructor(private randomNameService: RandomNameService) {}

  ngOnInit(): void {
    this.randomNameService.getNamesJSON().toPromise().then(data => {
      if (Array.isArray(data)) {
        const randomNumber = Math.floor(Math.random() * data.length);
        if (randomNumber >= 0 && randomNumber < data.length) {
          this.randomName = data[randomNumber];
        } else {
          this.randomName = 'UPPPSSS.. number is out of range.. :(';
        }
      }
    });
  }
}
