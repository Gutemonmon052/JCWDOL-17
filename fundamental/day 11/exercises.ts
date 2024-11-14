// function majorElement(arr: number[]) {
//   let newSet = new Set(arr);

//   newSet.forEach((val) => {
//     if (arr.filter((e) => e == val).length > arr.length / 2)
//       return console.log(val);
//   });
// }

const majorElement = (arr: number[]) => {
  let newSet = new Set(arr);

  newSet.forEach((val) => {
    if (arr.filter((e) => e == val).length > arr.length / 2)
            return console.log(val);
    });
}

majorElement([2,2,1,1,1,1,2,2])

const romanDict: any = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInteger(rom: string) {
  let sum: number = 0;

  // for (let i = 0; i < rom.length; i++) {
  //   if (romanDict[rom[i]] < romanDict[rom[i + 1]]) {
  //     sum += romanDict[rom[i + 1]] - romanDict[rom[i]];
  //     i++;
  //   } else sum += romanDict[rom[i]];
  // }

  rom.split('').forEach((e, i) => {
    if (romanDict[e] < romanDict[rom[i + 1]]) {
      sum -= romanDict[e];
    } else sum += romanDict[e];
  });

  return sum;
}

console.log(romanToInteger("MCMXCIV"));

function pascalTriangle(n: number) {
  let nArr: number[][] = [], tempArr: number[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        tempArr.push(1);
      } else {
        tempArr.push(nArr[i - 1][j - 1] + nArr[i - 1][j]);
      }
      console.log(tempArr)
    }
    nArr.push(tempArr);
    tempArr = [];
  }
  return nArr;
}

// console.log(pascalTriangle(3));

function profitCheck(arr:number[]){
   let buy:number = 0, profit:number = 0, mProfit:number = 0;
   let j:number = 0

   // Rightsell = i LeftBuy = j
   for (let i = 0; i < arr.length; i++) {
      if (arr[j] < arr[i+1]) {
        profit = arr[i] - arr[j]
        mProfit = Math.max(mProfit,profit)
      }else{
        j = i
      }
   }
   return mProfit
}

console.log(profitCheck([7,1,5,3,6,4]))