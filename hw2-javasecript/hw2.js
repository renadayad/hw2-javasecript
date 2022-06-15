//Q1 rectangle

let width=5;  
    let height=10;  
    let area=width*height;  
    console.log("Area of the rectangle="+area);


    console.log("******************************");


//Q2 Temperature Converter
  let  celsius=60;
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
    console.log(cToFahr);

    fahrenheit=45; 
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
    console.log(fToCel);

    console.log("******************************");


    //Q3 sum of all numbers
    let Numbers = [23,54,32,87,47]
    let sum=0
    for(let i=0;i<Numbers.length;i++){
         sum=sum+Numbers[i];
    }
    console.log("sum of all numbers="+sum);

    console.log("******************************");


    //Q4 Largest element
     Numbers2=[16,4,2,0,19,6]
let max
let i=0;
max=Numbers2[0]
for(i;i<Numbers2.length;i++){
    if(Numbers2[i]>max)
    max=Numbers2[i]
}
console.log("Largest element is="+max);
console.log("******************************");

//Q5 reverse order

let numbers= [1,2,3,4,5,6,7,8,9,10];
let j;
console.log("reverse order array");

for(j=numbers.length-1;j>=0;j--){
  console.log(numbers[j]+"");

}
console.log("******************************");
//Q6 stars pattern
console.log("stars pattern");

let a,b;
let stars=""
for(a=0;a<5;a++){
  for(b=0;b<=a;b++){
  stars+="*"
  }
  stars+="\n"

}

console.log(stars)
