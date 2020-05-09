// Flip String: given a string, return the same string spelt backwards. Eg: asdf -> fdsa

function flip(str) {  
  let newRev = str.split('').reverse().join('');
  console.log(newRev)
  return newRev
}

flip('asdf');
flip('potatoes');
flip('hello');