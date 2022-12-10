 //Завдання 1
 console.log('Завдання 1');
let array1=[1, 6, 3, 8, 7, 9, 10];
console.log(array1);
array1.sort((a,b)=>a-b);
console.log(array1);
array1.sort((a,b)=>b-a);
console.log(array1);

//Завдання 2
console.log('Завдання 2');
let array2=[1,2,[3,4],[5,[6,7]]]; 
console.log(array2);
array2Flat=array2.flat(Infinity);
console.log(array2Flat);

//Завдання 3
console.log('Завдання 3');
let array3=[1, 3, 3, 6, 8, 6, 1];
console.log(array3);
let without=[...new Set(array3)];
console.log(without);





//Завдання 4
console.log('Завдання 4');
let array4=[1, 6, 8, 6, 1];
console.log(array4);
for (let i=0; i<array4.length; i++){
array4[i]+=5;
}
console.log('Значення збільшенні на 5');
console.log(array4);
const sumWithInitial = array4.reduce(
  (accumulator, currentValue) => accumulator + currentValue);
console.log('Сума всіх значень масиву'+sumWithInitial);


//Завдання5
console.log('Завдання 5');
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
   console.log(factorial(6));

  



//Завдання 6
console.log('Завдання 6');
let word;
function palindrome(word) {
     word=word.toLowerCase();
    word = word.split('');
    //console.log(word);
  
    a=Math.floor(word.length/2);
    let j=word.length-1;
    let count=0;

   for (let i=0; i<a; i++)
   {
   if (word[i]===word[j]) count++;
   j--;
      }
      console.log(a===count);
    
    }

palindrome('racecar');
palindrome('Anna');
palindrome('cAT');


//Завдання 7
console.log('Завдання 7');
let wordAnn1, wordAnn2;

function anagramma(wordAnn1, wordAnn2){
wordAnn1 = wordAnn1.split('');
wordAnn2=wordAnn2.split('');

wordAnn1 = wordAnn1.sort();
wordAnn2 = wordAnn2.sort();
wordAnn1=wordAnn1.toString();
wordAnn2=wordAnn2.toString();

console.log(wordAnn1===wordAnn2);
 }
 anagramma('friend', 'finder')
 anagramma('трос', 'сорт')
 anagramma('cat', 'dog')



//Завдання 8
console.log('Завдання 8');
function checkVowelOrConsonent(){
    let array8=['a', 'f', 'd', 'j', 'y', 't', 'i', 'r'];
   let arrayVolwel=[], arrayConsonent=[];
   console.log('Дано');
   console.log(array8);

      for(let i=0; i<array8.length; i++){
     if(array8[i]==='a' || array8[i]==='e' || array8[i]==='i' || array8[i]==='y' || array8[i]==='o' || array8[i]==='u') 
     {arrayVolwel.push(array8[i]);}
     else 
     {arrayConsonent.push(array8[i]);}
    
    }
 console.log('Результат');
arrayConsonent.sort();
arrayVolwel.sort();

arrayConsonent.push(arrayConsonent.length); 
arrayVolwel.push(arrayVolwel.length);

    console.log(arrayConsonent);
    console.log(arrayVolwel);

}
checkVowelOrConsonent();





