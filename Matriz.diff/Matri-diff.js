function arrayDiff(a, b) {
  const result = []
  for(let r = 0; r < a.length; r++){
    if(!b.includes(a[r])){
      result.push(a[r])
    }
  }
  return result
}

console.log( arrayDiff([1,2,2,2,2,3,3,4], [2]) == [1,3])