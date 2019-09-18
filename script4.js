//Given an array of integers.

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

//If the input array is empty or null, return an empty array.
function countPositivesSumNegatives(input) {
    
    if (input === null || input.length === 0)
      return [];
    
    let countPositive = 0;
    let sumNegative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ countPositive;
      else
        sumNegative += input[i];
    }
    
    return [countPositive, sumNegative];
    console.log(countPositive,sumNegative);
}
countPositivesSumNegatives(8,12,2,3.-23);
