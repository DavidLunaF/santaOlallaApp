import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Bar {
  name: string;
  plato1: string;
  plato2: string;
  plato3: string;
  tel: number;
  img: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Santa Olalla para llevar';
  selectedValue = '';
  selectFormControl = new FormControl('', Validators.required);
  restaurants: Bar[] = [
    {name: 'Cometa', plato1: 'pizza', plato2: 'hamburguesa', plato3: 'callos', tel: 67666666, img: 'https://lh6.googleusercontent.com/-Frg_59E3p2c/WS2k6m5IQGI/AAAAAAAAACs/xzp1GARNzDYVYd9BE3uhrb2gFsb7kHOTACJkC/photo.jpg'},
    {name: 'Taurina', plato1: 'paella', plato2: 'huevo', plato3: 'patatas', tel: 67666666, img: 'https://media-cdn.tripadvisor.com/media/photo-s/10/4f/53/74/salon.jpg'},
    {name: 'Pizpajo', plato1: 'cecina', plato2: 'burro', plato3: 'pato', tel: 67666666, img: 'https://www.verpueblos.com/fotos_ampliadas/0/2/3/01322023.jpg'},
  ];
}
