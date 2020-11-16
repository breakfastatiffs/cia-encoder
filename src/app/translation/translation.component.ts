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
    this.translation.setValue(this.translation ? 'XXXX' : this.translation)
  }

}
  // Reactive Form
  // replaceAll(search, replace)

  // map over
  // if inside quotes replace / if not keep same