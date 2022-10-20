const countries = require("./conturies-object") 

let sortByName = (arr) => {
    return arr.sort(function (current, next) {
      if (current.name.toUpperCase() < next.name.toUpperCase()) {
        return -1;
      }
      if (current.name.toUpperCase() > next.name.toUpperCase()) {
        return 1;
      }
  
      // names must be equal
      return 0;
    });
  };
  
  console.log(sortByName(countries));
  
  let sortByCapital = (arr) => {
    return arr.sort(function (current, next) {
      if (current.capital.toUpperCase() < next.capital.toUpperCase()) {
        return -1;
      }
      if (current.capital.toUpperCase() > next.capital.toUpperCase()) {
        return 1;
      }
  
      // names must be equal
      return 0;
    });
  };
  
  console.log(sortByCapital(countries));
  
  let sortByPopulation = (arr) => {
    return arr.sort((curent, next) => curent.population - next.population);
  };
  console.log(sortByPopulation(countries));
  
  let sortBahasa = (arr) => {
    let listBahasa = [];
    arr.forEach((element) => {
      element.languages.forEach((x) => {
        if (listBahasa.findIndex((bhs) => bhs.bahasa === x) === -1) {
          listBahasa.push({ bahasa: x, jumlah: 0 });
        }
        listBahasa[listBahasa.findIndex((bhs) => bhs.bahasa === x)].jumlah++;
      });
    });
  
    let listBahasaSort = listBahasa
      .sort((a, b) => b.jumlah - a.jumlah)
      .slice(0, 10);
    return listBahasaSort;
  };
  console.log(sortBahasa(countries));
  
  let pendudukTerbanyak = (arr) => {
    return arr
      .sort((current, next) => next.population - current.population)
      .slice(0, 10);
  };
  console.log(pendudukTerbanyak(countries));
  // your code here