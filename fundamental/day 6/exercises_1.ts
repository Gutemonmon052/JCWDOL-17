type TStudent = {
  nama:string;
  email:string;
  age:Date;
  score:number;
}

class StudentData {
  private stdData:TStudent[];

  constructor(std:TStudent[]) {
    this.stdData = std
  }

  get hlaCal(){
    let today:Date = new Date();
    let totalAge:number = 0
    let ageData:number[] = []
    let highestAge:number = 0
    let lowestAge:number = 0
    let totalScore:number = 0
    let highestScore:number = 0
    let lowestScore:number = 0
    let scoreData:number[] = []
    let averageScore:number = 0
    let averageAge:number = 0

    for (let i = 0; i < this.stdData.length; i++) {
      let calAge = today.getFullYear() - this.stdData[i].age.getFullYear();
      if(this.stdData[i].age.getDate() <= today.getDate() && this.stdData[i].age.getMonth() <= today.getMonth()) calAge += 1
      else calAge = calAge
      totalAge += calAge
      ageData.push(calAge)
    }
    highestAge = Math.max(...ageData)
    lowestAge = Math.min(...ageData)

    averageAge = Math.floor(totalAge/this.stdData.length)

    for(let i = 0; i < this.stdData.length; i++){
      totalScore += this.stdData[i].score
      scoreData.push(this.stdData[i].score)
    }

    highestScore = Math.max(...scoreData)
    lowestScore = Math.min(...scoreData)
    averageScore = Math.floor(totalScore/this.stdData.length)

    return {
      age: {
        highest: highestAge,
        lowest: lowestAge,
        average: averageAge   
      },
      score: {
        highest: highestScore,
        lowest: lowestScore,
        average: averageScore
      }
    }
  }
}


const newStudent : TStudent[] = [
                      {nama:'Aga',email:'aga@gmail.com',age: new Date('2002-11-6'),score: 90},
                      {nama:'Abi',email:'abi@gmail.com',age: new Date('2002-11-7'),score: 95},
                      {nama:'budi',email:'budi@gmail.com',age: new Date('2002-11-8'),score: 85}
                   ]

const res = new StudentData(newStudent)
                   
console.log(res.hlaCal)
