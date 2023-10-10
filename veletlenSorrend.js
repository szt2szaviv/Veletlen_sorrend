function getRandomOrder(szam) {
    const randomtomb = [];
    
    while (szam.length > 0) {
      const random = Math.floor(Math.random() * szam.length);
      randomtomb.push(szam[random]);
      szam.splice(random, 1);
    }
    
    return randomtomb;
  }
  
  console.log(getRandomOrder(["h", "k", "sze", "cs", "p", "szo", "v"])); 
  console.log(getRandomOrder([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  