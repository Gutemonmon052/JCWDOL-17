// function checkIfInstanceOf(obj: any, classFunction: any) {
//      return Object.getPrototypeOf(obj) === classFunction.prototype 
// };


// console.log(checkIfInstanceOf(5, Number));

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]){
  let comArr:any [] = arr1.concat(arr2).sort((a, b) => a.id - b.id)
  let finArr = new Map()
  
  comArr.forEach((e) => {
    const exits = finArr.get(e.id);
    if(exits){
      finArr.set(e.id, { ...exits, ...e });
    } else{
      finArr.set(e.id, e);
    }
  });

  return Array.from(finArr.values());
  
};

// console.log(join([{"id":1,"b":{"b": 94},"v":[4,3],"y":48}],[{"id":1,"b":{"c": 84},"v":[1,3]}]))

function twoSum(nums: number[], target: number): number[] {
  let nArr:number[] = [], state:boolean = false, i:number = 0

  while(i<nums.length){
    for(let j = i+1; j<nums.length; j++){
      if(nums[i]+nums[j] == target){
        nArr = [i, j]
        break
      }
    }
    i++
  }
  return nArr
};

// console.log(twoSum([2,7,11,15], 9))

function countPrimes(n: number): number {
  let count:number = 0
  let nArr:number[] = []
  let state:boolean = false
  let i:number = 0
    
  while(i<n){
    if(i == 2) state = true
    else if(i == 0 || i == 1) state = false
    else{
      let j:number = 2
      while(i>j){
        if(i%j == 0){
          state = false
          break
        }else state = true
        j++
      }
    }
    if(state == true){
      nArr.push(i)
      count++
    }
    i++
  }
  console.log(nArr)
    return count
  
  // if(state == true){
  //   nArr.push(i)
  // }

  // for(let i = 2; i <= n; i++){
  //     for(let j = 2; i > j; j++){
  //       if(i%j == 0){
  //         state = false
  //         break
  //       }else state = true
  //   }

  //   if(state == true){
  //     nArr.push(i)
  //   }
  // }

  // return nArr.length
};

console.log(countPrimes(10))