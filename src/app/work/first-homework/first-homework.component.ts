import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-homework',
  templateUrl: './first-homework.component.html',
  styleUrls: ['./first-homework.component.scss']
})
export class FirstHomeworkComponent implements OnInit {
  public placeholder: string = '';
  public placeholder2: string = '';
  public arrayBadWords: Array<string> = [];
  public text: string = '';
  public text2: string = '';
  public striingBadWords: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  btnAdd() {
    if (this.text === '') {
      this.placeholder = 'Please write a word!';
      document.querySelector<HTMLElement>('.input-1')!.style.border = '1px solid red';
    } else {
      this.placeholder = '';
      document.querySelector<HTMLElement>('.input-1')!.style.border = '1px solid gray';
      this.arrayBadWords.push(this.text);
      console.log(this.arrayBadWords);
      this.text = '';
      this.displayElements();
    }
  }

  displayElements() {
    let allBadWords = '';

    for (let i = 0; i < this.arrayBadWords.length; i++) {
      allBadWords += this.arrayBadWords[i] + ' ';
    }

    this.striingBadWords = allBadWords;
  }

  resetButton() {
    this.striingBadWords = '';
  }

  cenzorButton() {
    if (this.text2 === '') {
      this.placeholder2 = 'Please write a text!';
      document.querySelector<HTMLElement>('.big-input')!.style.border = '1px solid red';
    } else {
      this.placeholder = '';
      document.querySelector<HTMLElement>('.big-input')!.style.border = '1px solid gray';
      let text = this.text2;
      for (let i = 0; i < this.arrayBadWords.length; i++) {
        let str1: any = this.arrayBadWords[i];
        while (text.includes(str1)) {
          let str2: string = '';
          for (let j = 0; j < str1.length; j++) {
            str2 += '*';
          }
          text = text.replace(str1, str2);
        }
      }
      this.text2 = text;
    }
  }

}