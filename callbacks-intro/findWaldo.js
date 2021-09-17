const findWaldo = function(names, found) {
  names.forEach(name => {
    if (name === 'Waldo') {
      found(name);
    }
  });    
};
  
  
const actionWhenFound = function(name) {
  console.log(`Found ${name}!`);
};
  
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);