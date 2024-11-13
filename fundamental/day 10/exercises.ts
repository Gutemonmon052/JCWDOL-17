function colExceltoNum(colTitle:string){
  let resNum:number = 0, i:number = 0
  
  while(i < colTitle.length){
    resNum = resNum * 26 + colTitle.charCodeAt(i) - 64
    i++
  }

  return resNum

}

console.log(colExceltoNum("ABA"))

// function findSingleOne(arr:number[]){
//   let state:boolean = true
//   let finRes:number = 0
//   let nArr:number[] = []
//   for (let i = 0; i < arr.length; i++){
//     if(arr.length <= 1){
//       state = true
//     }
//       for(let j = 1; j < arr.length; j++){
//          if(arr[i] == arr[j]){
//            state = false
//            break
//          }
//     }
//     if(state == true){
//       nArr.push(arr[i])
//     }
//   }

//   return nArr[0]

//   // arr.sort()
//   // for(let i=0;i<arr.length-1;i++){
//   //   if(arr[i] == arr[i+1]){ 
//   //     state = false 
//   //     break
//   //   } else state =true

//   //   if(state == true){
//   //     nArr.push(arr[i])
//   //   }
//   // }

//   // return nArr
// }

function findSingleOne(arr:number[]){
let nSet = new Set(arr)

nSet.forEach((val) => {
  if(arr.filter((e) => e == val).length == 1) return console.log(val)
})

}

console.log(findSingleOne([4,1,2,1,2]));
// [1,1,2,2,4] 

function twoWordCompare(fWord:string, sWord:string){
const nFWord:string = fWord.split('').sort().join("")
const nSWord:string = sWord.split('').sort().join("")

return nFWord == nSWord ? true : false
}

console.log(twoWordCompare('anagram','nagaram'))


function staircase(n:number){
let n1:number = 1, n2:number = 1, cur:number = 0

for(let i = 1; i < n; i++){
  cur = n1+n2
  n1 = n2
  n2 = cur
}

return cur
}

console.log(staircase(3));


function triangles(height:number){
let nTriangle:string = "", star:string = "*", n2Triangle:string = "", n3Triangle:string = "", n4Triangle:string = ""
let h:number = 0

  for(let i=0;i<height;i++){
    for(let j=height;j>i;j--){
      nTriangle += "*"
    }
    nTriangle += "\n"
  }

  for(let i=0;i<height;i++){
    for(let j=0;j<=i;j++){
      n2Triangle += "*"
    }
    n2Triangle += "\n"
  }

  // for(let i=0;i<height;i++){
  //   for(let j=height;j>i;j--){
  //     n3Triangle += "*"
  //   }

  //   n3Triangle += "\n"

  //   for(let l=0; l<i+1;l++){
  //     n3Triangle += " "
  //   }
  // }

  for(let i=0; i<height;i++){
    for(let j=0;j<height;j++){
      if(j < i) n3Triangle += " "
      else n3Triangle += "*"
    }
    n3Triangle += "\n"
  }

  // for(let i=0;i<height;i++){

  //   for(let l=height-1;l>i;l--){
  //     n4Triangle += " "
  //   }
  //   for(let j=0;j<=i;j++){
  //     n4Triangle += "*"
  //   }

  //   n4Triangle += "\n"
  // }

  for(let i=0; i<height;i++){
    for(let j=0;j<height;j++){
      if(i+1 < height-j) n4Triangle += " "
      else n4Triangle += "*"
    }
    n4Triangle += "\n"
  }

return `${nTriangle} \n${n2Triangle} \n${n3Triangle} \n${n4Triangle}` 
}

console.log(triangles(5))