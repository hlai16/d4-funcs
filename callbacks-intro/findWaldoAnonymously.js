const findWaldo = function(names, found) {
  names.forEach(name => {
    if (name === 'Waldo') {
      found(name);
    }
  });
};
    
    
(name) => {
  console.log(`Found ${name}!`);
};
    
findWaldo(["Alice", "Bob", "Waldo", "Winston"], (name) => console.log(`Found ${name}!`));