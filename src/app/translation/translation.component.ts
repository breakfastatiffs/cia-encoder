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
  match: string = '';
  tran: string = '';

  // -replace(search, replace)-
  // search using regex globally --- /["'].*?["']/g
  // replace any ' or " with XXXX
  // let global variable (translation) = translated string (tran
  handleTran() {
    // debugger
    let match = new RegExp(`(${this.match.split(" ").join("|")})`, 'gim')
    this.tran = this.translation.replace(match, 'XXXX')
  }

}


// STRETCH GOALS : adding `` to filter, adding an option to add your own filter and then translation through that
// 0(1) Constant bc you only need to run through str once with the find and replace fn

// match1 split() or search (/["'].*?["']/g)
// match2 .split(" ").
// join both matches