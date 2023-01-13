// question no 3
// to print the contries names,regions,sub-region and population

let result1 = new XMLHttpRequest();
result1.open("GET", "https://restcountries.com/v3.1/all");
result1.send();
result1.onload = () => {
  let data1 = JSON.parse(result1.response);

  for (let i = 0; i < data1.length; i++) {
    console.log("");
    console.log('Country Name : "' + data1[i].name.common + '"');
    console.log("Region Name : " + data1[i].region);
    console.log("Sub-Region Name : " + data1[i].subregion);
    console.log("population : " + data1[i].population);
  }
};
