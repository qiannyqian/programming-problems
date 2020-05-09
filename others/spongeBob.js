// Spongebob Case: given a string, return the same string but in spongebob case eg: given a string -> GiVeN A StRiNg (also accept GiVeN a StRiNg)

function spongeBob(str) {
  let res = '';

  for (i = 0; i < str.length; i++) {
    let char = str[i];

    if (i % 2 === 0) {
      res += char.toUpperCase();
    } else {
      res += char.toLowerCase();
    }
  }

  console.log(res);
  return res;
}

spongeBob('GiVeN a StRiNg');
spongeBob('Welcome to the dark parade');
