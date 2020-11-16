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
    let match = /["'].*?["']/g
    let text = JSON.stringify(this.translation)
    text.replace(match, 'XXXX')
  }

}
  // Reactive Form

  // replaceAll(search, replace)
  // search using regex globally --- /["'].*?["']/g
  // this.translation.replace(match, 'XXXX')

  // map over str
  // find & replace quotes 
  // stringify