function listPosition(word) {
  var array     = word.split('')
  var digitsNum = array.length
  var values    = [...new Set(word)].sort()
  var valuesNum = values.length
  var counter   = []
  var solution
  var positions
  
  // Count letter repetitions
  for(let i = 0; i < values.length; i++) {
    let count = 0
    for(let j = 0; j < digitsNum; j++) {
      if(values[i] == word[j]) count++
    }
    counter.push(count)
  }
  
  // Algorithm
  var permutations = getPermutations(counter, digitsNum)
  var min = 1
  var max = permutations
  var loopmax = digitsNum
  
  for(let i = 0; i < loopmax; i++) {
    positions = getPositions(min, digitsNum, valuesNum, permutations, counter)
    
    for(let j = 0; j < valuesNum; j++) {
      if(array[i] === values[j]) {
        if(counter[j] > 1) {
          counter[j]--
        } else {
          values.splice(j, 1)
          counter.splice(j, 1)
        }
        
        digitsNum--
        valuesNum = values.length
        permutations = getPermutations(counter, digitsNum)
        min = positions[j]
        max = positions[j+1] === undefined ?  (min + permutations - 1) : positions[j+1]-1
        break
      }
    }
    if(min === max) {
      solution = min
      break
    }
  }  
  return solution
}

// Factorial
function rFact(num) {
  return num === 0 ? 1 : num * rFact(num - 1)
}

// Get positions
function getPositions(min, digitsNum, valuesNum, permutations, counter) {
  var positions = []
  positions[0] = min
  for(let i = 1; i < valuesNum; i++) {
    positions[i] = (permutations/digitsNum*counter[i-1]) + positions[i-1]
  }
  return positions
}

// Calculate number of permutations
function getPermutations(counter, digitsNum) {
  var denominator = 1
  counter.forEach((value) => { denominator *= rFact(value) })
  var permutations = rFact(digitsNum)/denominator
  return permutations  
}
