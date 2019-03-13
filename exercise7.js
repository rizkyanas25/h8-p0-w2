//1. Menyusun Barisan Bintang
console.log('1. Menyusun Barisan Bintang')
var rows1 = 5
for (i = 0; i < rows1; i++) {
    console.log('*')
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('\n2. Menyusun Barisan Bintang Dengan Nested Looping')
var rows2 = 5
for (var i = 0; i < rows2; i++) {
    var result = ''
    for (var j = 0; j < rows2; j++) {
        result = result + '*'
    }
    console.log(result)
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('\n3. Menyusun Barisan Tangga Bintang Dengan Nested Looping')
var rows3 = 5
for (var i = 1; i <= rows3; i++) {
    var result = '';

    for (var j = 1; j <= i; j++) {
      result += '*';
    }

    console.log(result);
  }

