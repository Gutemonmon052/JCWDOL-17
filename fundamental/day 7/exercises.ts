// No 1


class nObject{
  a:any

  constructor(input:any){
    this.a = input
  }

}

function compare(a:any,b:any){
  
  if(a.a === b.a){
    return true
  }else{
    return false
  }
}

let try1 = new nObject(1)
let try2 = new nObject(1)

// console.log(compare(try1,try2))

// No 2

type TObj1 = {
  a:number;
  b:number;
  c:number;
}

type TObj2 ={
  a:number;
  c:number;
}

let dt1:TObj1 ={
  a : 1,
  b : 2,
  c : 3
}

let dt2:TObj2 = {
  a : 1,
  c : 2
}

function objectIntsc(obj1:TObj1, obj2:TObj2){
  let insert = {}
  for(let i in obj1){
    if (i in obj2 && obj1[i as keyof TObj1] == obj2[i as keyof TObj2]){
      insert = { ...insert, [i]: obj1[i as keyof TObj1] }
    }
  return insert
}
}

// console.log(objectIntsc(dt1,dt2))

// No 3

class StudentDt {
  public name:string;
  public email:string;

  constructor(nm:string,mail:string){
    this.name = nm
    this.email = mail
  }
}

const stDt1 = new StudentDt('Student 1','student1@mail.com')
const stDt2 = new StudentDt('Student 2','student2@mail.com')
const stDt3 = new StudentDt('Student 3','student3@mail.com')
const stDt4 = new StudentDt('Student 1','student1@mail.com')

let arrStd1 = [stDt1,stDt2]
let arrStd2 = [stDt3,stDt4]

function compareStd(arr1:StudentDt[],arr2:StudentDt[]){
  let arrDit:StudentDt[] = arr1.concat(arr2)
  let arrCom:StudentDt[] = []
  let state:boolean = false
  for(let i = 0; i < arrDit.length; i++){
    for(let j = 0; j < arrCom.length; j++){
      if(arrDit[i].name == arrCom[j].name && arrDit[i].email == arrCom[j].email){
        state = true
        break
      }
  }
    if(state == false){
      arrCom.push(arrDit[i])
    }
  }
  return arrCom
}

// console.log(compareStd(arrStd1,arrStd2))

// No 4
interface InputObject {
  [key: string]: any;
}

function switchPropVal(input: InputObject[]): InputObject[] {
  return input.map(obj => {
      const output: InputObject = {};
      const keys = Object.keys(obj); 

      for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const value = obj[key];
          output[value] = key;
      }

      return output;
  });
}

// console.log(switchPropVal([{name : 'david', age : 20}, {name : 'john', age : 30}]))

// No 5

function fac(num: number) : number {
  if (num == 1) return 1
  else return num * fac(num - 1)
}

// console.log(fac(5))

// No 6


class ShootingGame{
  public player1:Player
  public player2:Player

  constructor(p1:Player,p2:Player){
    this.player1 = p1
    this.player2 = p2
  }


  private random() {
    return Math.floor(Math.random() * 2); // 0-1
  }

  private getRandomItem(): {
    health: number;
    power: number;
  } {
    return this.random() == 1
      ? { health: 0, power: 10 }
      : { health: 10, power: 0 };
  }

  start(){
    while(this.player1.health >= 0 && this.player2.health >= 0){
      this.player1.showStatus();
      this.player2.showStatus();
      this.player1.useItem(this.getRandomItem());
      this.player2.useItem(this.getRandomItem());
      if (this.random() > 0) {
        this.player1.hit(this.player2.power); 
        if (this.player1.health == 0) break;
        this.player2.hit(this.player1.power);
      } else {
        this.player2.hit(this.player1.power);
        if (this.player2.health == 0) break;
        this.player1.hit(this.player2.power);
      }
    }
    this.player1.showStatus();
    this.player2.showStatus();
    }
  }
  

class Player {
  public name:string
  public health:number
  public power:number

  constructor(pName:string){
    this.name = pName
    this.health = 100
    this.power = 10
  }

  hit(power:number){
    this.health = this.health - power
  }

  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus(){
    console.log(`Name : ${this.name}`)
    console.log(`Health : ${this.health}`)
    console.log(`Power : ${this.power}`)
  }
}

let player1 = new Player('Budi')
let player2 = new Player('Santoso')
let mulai = new ShootingGame(player1,player2)
console.log(mulai.start())


// type ToBeOrNotToBe = {
//   toBe: (val: any) => boolean;
//   notToBe: (val: any) => boolean;
// };

// function expect(val: any): ToBeOrNotToBe {
//   return {
//     toBe: (val2: any) => {
//       if (val === val2) {
//         return true;
//       } else {
//         throw new Error("Equal");
//       }
//     },
//     notToBe: (val2: any) => {
//       if (val !== val2) {
//         return true;
//       } else {
//         throw new Error("Not Equal");
//       }
//     },
//   };
 
// };

// expect(5).toBe(5); // true
// expect(5).notToBe(5); // throws "Equal"

// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
// type ArrayType = { "id": number } & Record<string, JSONValue>;
// function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
//   const finArr:  { [key: number]: ArrayType } = {};
//   let comArr = arr1.concat(arr2)

//   // for(const objt of comArr){
//   //      const fIndex = comArr.findIndex(item => item.id == objt.id)
//   //      if(fIndex >= 0){
//   //         finArr[fIndex] = {...finArr[fIndex],...objt}
//   //     }else{
//   //         finArr[fIndex] = objt
//   //     }
//   // }

//   // for (const objt of comArr) {
//   //   finArr[objt.id] = { ...finArr[objt.id], ...objt };
//   // }

//   // return finArr;
// };

// function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
//   const mergedObj: { [key: number]: ArrayType } = {};
//   const comArr = arr1.concat(arr2);

//   for (const objt of comArr) {
//     mergedObj[objt.id] = { ...mergedObj[objt.id], ...objt };
//   }

//   return Object.values(mergedObj);
// };

// let arrA = [{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}]
// let arrB = [{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}]

// console.log(join(arrA,arrB))

// function checkIfInstanceOf(obj: any, classFunction: any): boolean {
//   let curPtp = Object.getPrototypeOf(obj);

//   if(obj === undefined || classFunction === undefined) console.log('undefined') ;
  
 
//   while(curPtp){
//       if(curPtp === classFunction.prototype){
//           return true
//       }
//       curPtp = Object.getPrototypeOf(curPtp)
//   }
//   return false
// };

// console.log(checkIfInstanceOf(5, Number))
