import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-homework',
  templateUrl: './third-homework.component.html',
  styleUrls: ['./third-homework.component.scss']
})
export class ThirdHomeworkComponent implements OnInit {

  public taskArray: Array<any> = [
    {
      name: 'HTML5',
      status: 'DONE',
      defaultChecekd: true
    },
    {
      name: 'CSS3',
      status: 'DONE',
      defaultChecekd: true
    },
    {
      name: 'SCCS',
      status: 'IN PROGRESS',
      defaultChecekd: false
    },
    {
      name: 'JavaScript',
      status: 'IN PROGRESS',
      defaultChecekd: false
    },
    {
      name: 'Jquery',
      status: 'IN PROGRESS',
      defaultChecekd: false
    },
    {
      name: 'Angular',
      status: 'IN PROGRESS',
      defaultChecekd: false
    }
  ];
  public count!: number;
  public index!: number;

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    if (document.querySelector<HTMLInputElement>('.task-input')!.value !== '') {
      const newTask = {
        name: document.querySelector<HTMLInputElement>('.task-input')!.value,
        status: 'IN PROGRESS'
      }

      this.taskArray.push(newTask);
      document.querySelector<HTMLInputElement>('.task-input')!.value = '';

    }
  }

  getArray(data: any) {
    this.taskArray = data;
  }

  delete(index: number) {
    console.log('this.taskArray[index]', this.taskArray[index]);
    this.taskArray.splice(index, 1);
  }

  checkBoxClick(index: number) {
    if (this.taskArray[index].status === 'IN PROGRESS') {
      this.taskArray[index].status = 'DONE';
    } else {
      this.taskArray[index].status = 'IN PROGRESS';
    }
    console.log(this.taskArray[index]);
  }

  edit(index: number) {
    this.index = index;
    document.querySelector<HTMLInputElement>('.edit-input')!.value = this.taskArray[this.index].name;
    document.querySelector<HTMLInputElement>('.edit-area')!.style.display = 'flex';
  }

  save() {
    this.taskArray[this.index].name = document.querySelector<HTMLInputElement>('.edit-input')!.value;
    document.querySelector<HTMLInputElement>('.edit-input')!.value = ''
    document.querySelector<HTMLInputElement>('.edit-area')!.style.display = 'none';
  }

}
