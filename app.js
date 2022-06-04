let myList = ['corn', 'strawberries', 'letuce', 'eggs', 'bacon', 'carrots', 'sausages'];
const output = document.querySelector(".output");
const btnAdd = document.querySelector('#addNew');
btnAdd.classList.add('add-item');
const newItem = document.querySelector('#addItem');
newItem.classList.add('new-item');

document.addEventListener('DOMContentLoaded', buildApp());

btnAdd.addEventListener('click', function(){
    if(newItem.value){
        myList.push(newItem.value);
        console.log(myList);
        buildApp();
    }
});

function buildApp(){
    output.innerHTML = "<h1 class='header'>My Shopping List</h1>";
    const table = document.createElement('table');
    for(let i = 0; i< myList.length; i++){
        const row = document.createElement('row');
        const dataItem = document.createElement('td');
        dataItem.innerText = myList[i];
        dataItem.classList.add('data-item');
        row.appendChild(dataItem);
        const dataDeleteCell = document.createElement('td');
        const dataDeleteSpan = document.createElement('span');
        dataDeleteSpan.innerText = 'Delete';
        dataDeleteSpan.addEventListener('click', function(){
            let itemRemove = myList.splice(i, 1);
            buildApp();
        });
        dataDeleteCell.appendChild(dataDeleteSpan);
        row.appendChild(dataDeleteCell);
        const dataEditCell = document.createElement('td');
        const dataEditSpan = document.createElement('span');
        dataEditSpan.innerText = 'Edit';
        dataEditSpan.addEventListener('click', function(){
            let tempElement = row.firstElementChild;
            const newInput = document.createElement('input');
            newInput.value = tempElement.innerText;
            newInput.focus();
            tempElement.appendChild(newInput);
            newInput.addEventListener('blur', function(){
                tempElement.innerHTML = newInput.value;
                myList[i] = newInput.value;
                buildApp();
            });
        });
        dataEditCell.appendChild(dataEditSpan);
        row.appendChild(dataEditCell);
        
        table.appendChild(row);
    }

        output.appendChild(table);  
}


































// let myList = ['bananas', 'milk', 'apples', 'eggs', 'cake'];
// const btnAdd = document.querySelector('#addNew');
// const newItem = document.querySelector('#addItem');
// const output = document.querySelector('.output');

// btnAdd.addEventListener('click', function () {
//     if (newItem.value) {
//         myList.push(newItem.value);
//         build();
//         newItem.value = "";
//     }
// });

// document.addEventListener("DOMContentLoaded", build);

// function build() {
//     output.innerHTML = '<h2>My List</h2>';

//     const table = document.createElement('table');
//     for (let i = 0; i < myList.length; i++) {
//         const row = document.createElement('tr');
//         row.ind = i; // index value
//         const cell1 = document.createElement('td');
//         cell1.innerText = myList[i];
//         row.appendChild(cell1);
//         const cell2 = document.createElement('td');
//         const span1 = document.createElement('span');
//         span1.innerText = 'Delete';
//         span1.addEventListener('click', function () {
//             console.log(myList[i]);
//             // let temp = this.closest('tr').ind;
//             let itemOut = myList.splice(i, 1);
//             build(); // update list
//         });
//         cell2.appendChild(span1);
//         const span2 = document.createElement('span');
//         span2.innerText = 'Edit';
//         span2.addEventListener('click', function () {
//             row.style.backgroundColor = 'Yellow';
//             let tempEle = row.firstElementChild;
//             const newInput = document.createElement('input');
//             newInput.value = tempEle.innerText;
//             newInput.focus();
//             tempEle.innerHTML = "";
//             tempEle.appendChild(newInput);
//             newInput.addEventListener('blur', function () {
//                 tempEle.innerHTML = newInput.value;
//                 row.style.backgroundColor = 'White';
//                 myList[i] = newInput.value;
//             });
//             console.log(tempEle);
//         });
//         cell2.appendChild(span2);
//         row.appendChild(cell2);
//         table.appendChild(row);
//     }

//     output.appendChild(table);
// }