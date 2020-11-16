import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent {
  translation = new FormControl('');
  
  handleTran() {
    const match = /["'].*?["']/g
    let text = JSON.stringify(this.translation.value)
    text.replace(match, 'XXXX')
  }

}
  // Reactive Form
  
  // replace(search, replace)
  // search using regex globally --- /["'].*?["']/g

  // map over str
  // find & replace quotes 
  // stringify