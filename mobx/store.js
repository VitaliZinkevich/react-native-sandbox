import { decorate, observable, action} from 'mobx'
import { task } from 'mobx-task'

let buttonsText = ["C","<-","MC","MR",
                    "1","2","3","+",
                    "4","5","6","-",
                    "7","8","9","*",
                    ".","0","+/-","="];
import {configure} from "mobx"
configure({enforceActions: 'always'})
//configure({ enforceActions: "observed" })

class Store  {

  action =  []
  answer = null
  quote =  ''
  operations=[]
  getKennyQuote = task (async () => {
    await fetch('https://api.kanye.rest')
      .then(r => r.json())
      .then(action(answer => this.quote = answer))
  })



  addOperation (row, i) {
      let ind = !!row ? 
      !!i ? 4*row+i : 4*row+i
      : 
      !!i ? 4*row+i : 4*row + i;
      let action = buttonsText[ind];

      switch(action) {
        case '1':
            this.action.push (action);
            break;
        case '2':
        this.action.push (action);
        break;
        case '3':
        this.action.push (action);
        break;
        case '4':
          this.action.push (action);
        break;
        case '5':
          this.action.push (action);
          break;
        case '6':
          this.action.push (action);
          break;
        case '7':
          this.action.push (action);
          break;
        case '8':
          this.action.push (action);
          break;
        case '9':
          this.action.push (action);
          break;
        case '0':
          this.action.push (action);
          break;
        case '.':
          this.action.push (action);
          break;
        case '-':
          this.action.push (action);
          break;
        case '+':
          this.action.push (action);
          break;
        case '*':
          this.action.push (action);
          break;
        case '/':
          this.action.push (action);
          break;
        case '=':
          let answer = eval (this.action.join(''));
          this.operations.push(
            {action: this.action, 
              answer: this.answer, 
              date: Date.now()})
          this.action=[];
          this.answer = answer;
        break;
        case 'C':
            this.action = [];
            this.answer = null;
        break;
        case '<-':
            this.action.pop();
        break;
        case '+/-':
            //this.action.unshift('-');
        break;
        default:
          //console.log(this.action)
          // code block
      } 
  }

}

decorate(Store, {
  answer: observable,
  action: observable,
  quote: observable,
  operations: observable,

  addOperation: action,
  getKennyWestQuote:action
});

let appStore = new Store();
appStore.getKennyQuote();


export default appStore