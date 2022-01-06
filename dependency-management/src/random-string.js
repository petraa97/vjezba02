import randomString from 'random-string';
const x = randomString({
    length: 8,
    numeric: true,
    letters: true,
    special: false,
    exclude: ['a', 'b', '1']
  });

  
