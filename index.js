const countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand",];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// RELEASE 0
// 1. FOR EACH
countries.forEach(x => console.log(x)) 
names.forEach(x => console.log(x))
numbers.forEach(x => console.log(x))

// 2. MAP COUNTRIES
console.log(countries.map(x => x.toUpperCase()))

// 3. MAP NUMBERS
console.log(numbers.map(x => Math.pow(x, 2)))

// 4. MAP NAME
console.log(names.map(x => x.toUpperCase()))

// 5. FILTER "LAND"
console.log(countries.filter(x => x.includes('land')))

// 6. FILTER 6 CHAR
console.log(countries.filter(x => x.length === 6))

// 7. FILTER 6 CHAR AND MORE
console.log(countries.filter(x => x.length >= 6))

// 8. FILTER COUNTRIES START WITH "E"
console.log(countries.filter((x, i) => x[i] === "E"))

// 9. CHAINING
console.log(countries.map(x => x.toUpperCase()).filter(x => x.includes('LAND')))

// 10. func array to string
// PADAHAL BISA PAKE INI NGAPAIN FUNCTIONNNNNN
console.log(countries.toString())

function getStringLists(array) {
    return array.join(", ");
  }

// 11. REDUCE SUM ARR NUMBER
console.log(numbers.reduce((x, y) => x + y, 0));

// 12. REDUCE "Estonia, Finlandia, Swedia, Denmark, Norwegia, dan IceLand adalah negara-negara Eropa utara"
console.log(
    countries.reduce((x, y) => x + ", " + y, "") +
      "adalah negara-negara Eropa utara"
  );

// 13. penjelasan some dan every

// 14. SOME PANJANG NAMA ARRAY
/*
- some : pengecekan pada array untuk kondisi tertentu, jika memenuhi kondisi akan return true
- every : pengecekan pada array untuk kondisi tertentu jika semua elemen dalam array memenuhi kondisi return true
 */

// 15. ‘land’
console.log(countries.every((x) => x.toLowerCase().indexOf("land") !== -1));

// 16. PERBEDAAN find dan findIndex
/**
- find : mengembalikan elemen pertama dalam pencarian suatu posisi
- findIndex : mengembalikan index pertama dalam pencarian posisi
 */


// 17. find -  negara pertama yang hanya berisi enam huruf
console.log(countries.find((x) => x.length == 6));


// 18. indIndex - posisi negara pertama yang hanya berisi enam huruf
console.log(countries.findIndex((x) => x.length == 6));


// 19. findIndex - cari posisi Norwegia jika tidak ada dalam array countries Anda akan mendapatkan -1.
console.log(countries.findIndex((x) => x === "Norwegia"));


// 20. Gunakan findIndex untuk menemukan posisi Rusia jika tidak ada dalam array countries Anda akan mendapatkan -1.
console.log(countries.findIndex((x) => x === "Rusia"));