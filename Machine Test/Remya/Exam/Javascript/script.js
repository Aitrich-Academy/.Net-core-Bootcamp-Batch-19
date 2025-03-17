
let btnadd = document.getElementById("btnadd")
 let myList = document.getElementById("myList")
var array1 = [];
var newarray = [];
btnadd.addEventListener('click', function(){
 
    let inputNumber = document.getElementById("inputNumber").value;
    let newListItem = document.createElement('li');
    newListItem.innerHTML = inputNumber;
    array1.push(inputNumber);
    myList.appendChild(newListItem);
    // console.log(array1.length);
    // Sort Ascending: Sorts the list in ascending order.
    // console.log(array1);   
})
function sortarray(array1){
    console.log(array1); 
 for(let i=0; i<5 ; i++)
 { 
 if(array1[i]>array1[i+1]){
    newarray[i] = array1[i+1];
    newarray[i+1] = array1[i];
     }
      else{
     newarray[i] = array1[i]
      }
 }
console.log(newarray);
}
sortarray(array1);





