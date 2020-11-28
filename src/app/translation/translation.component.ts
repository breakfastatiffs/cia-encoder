import { Component } from '@angular/core';

@Component({
  // Template-driven form (FormControl)
  selector: 'app-translation',
  // NgModel inside input to send and bind data to form
  // onClick sends data > translates w/ handleTran() > gets data back and renders 
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent {
  translation: string = '';

  // -replace(search, replace)-
  // search using regex globally --- /["'].*?["']/g
  // replace any ' or " with XXXX
  // let global variable (translation) = translated string (tran
  handleTran() {
    const match = /["'`].*?["'`]/g
    let tran = this.translation.replace(match, 'XXXX')
    this.translation = tran
  }

}


// STRETCH GOALS : adding `` to filter, adding an option to add your own filter and then translation through that