const swapper = function(key1, object1, key2, object2) {
    console.log('Swap!');
  
    // Put your solution here
  
    let originalVal2 = object2[key2]; // store the original value in key2
    object2[key2] = object1[key1]; // store key1 of object1 in key2 of object2
    object1[key1] = originalVal2; //take the original value stored in key2 of object2, and store it in key1 of object1.
    
    console.log('object1: ', object1);
    console.log('object2: ', object2);
  };
  
  swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 }); 
  swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
  swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });
  
  
  /* 
  Complete the function named swapper that will receive an array of strings and return the correct assessment of the objects values that were swapped.
  */