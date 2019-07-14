import { decorate, observable, action} from 'mobx'

let buttonsText = ["C","CA","<-","MR",
                    "1","2","3","+",
                    "4","5","6","-",
                    "7","8","9","*",
                    ".","0","+/-","="];
import {configure} from "mobx"
//configure({enforceActions: 'always'})
configure({ enforceActions: "observed" })
class Store  {

  action =  []
  answer = null
  text =  'appStore'
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
        case '+':
            this.action.push (action);
          break;
        case '=':
            let answer = eval (this.action.join(''));
            this.action=[];
            this.answer = answer;
        break;
        case 'C':
            this.action = [];
        break;
        default:
          console.log(this.action)
          // code block
      } 
  }
  clearAll (){
    
  }
}

decorate(Store, {
  answer: observable,
  action: observable,
  text: observable,
  addOperation: action,
  clearAll:action
});

let appStore = new Store();

export default appStore