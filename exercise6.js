//1. Melakukan Looping Menggunakan While
console.log('1. Melakukan Looping Menggunakan While')
console.log('LOOPING PERTAMA')

var i = 1

while (i <= 20) {
    if (i % 2 === 0) {
       console.log(i + ' - I love coding')
    }
    i++
}

console.log('LOOPING KEDUA')

var i = 20

while (i >= 1) {
    if (i % 2 === 0) {
       console.log(i + ' - I will become fullstack developer')
    }
    i--
}

//2. Melakukan Looping Menggunakan For
console.log('\n2. Melakukan Looping Menggunakan For')
console.log('LOOPING PERTAMA')
for (var i = 1; i <= 20; i ++) {
    console.log(i + ' - I love coding')
}

for (var i = 20; i > 0; i--) {
    console.log(i + ' - I will become fullstack developer')
}

//3. Angka Ganjil dan Genap
console.log('\n3. Angka Ganjil dan Genap')
for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + ' GENAP')
    } else {
        console.log(i + ' GANJIL')
    }
}
console.log('\n')
for (var i = 1; i <= 100; i += 2) {
    if (i % 3 === 0) {
        console.log(i+ ' KELIPATAN 3')
    }
}

console.log('\n')
for (var i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
        console.log(i+ ' KELIPATAN 6')
    }
}

console.log('\n')
for (var i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
        console.log(i+ ' KELIPATAN 10')
    }
}