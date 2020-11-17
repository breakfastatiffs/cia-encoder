import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent {
  translation: string = '';
  // @Input()
  // @Output() var = new EventEmitter<string>()
  
  handleTran() {
    const match = /["'].*?["']/g
    let tran = this.translation.replace(match, 'XXXX')
    console.log('TRANSLATION', tran)
    return tran
  }

}
  // Reactive Form
  // replace(search, replace)
  // search using regex globally --- /["'].*?["']/g
