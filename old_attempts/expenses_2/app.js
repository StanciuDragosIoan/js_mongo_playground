const submitBtn = document.getElementById("expense");
const totalBtn = document.getElementById("total");
 
const clearBtn = document.getElementById("clear");
submitBtn.addEventListener("click", saveExpense);
totalBtn.addEventListener("click", viewTotal);
 
clearBtn.addEventListener("click", clearExpenses);
const expenseDetails = document.getElementById("details");
const expenseValue = document.getElementById("value");
const expenseType = document.getElementById("type");


// document.querySelector("#totalValue").style.display = "none";



let expenses = [];
 

id = 0;

function saveExpense(e){

    id += 1;

    let expense = {
        id: id,
        value : expenseValue.value,
        details: expenseDetails.value,
        type: expenseType.value
    }

    //add to data structure
    expenses.push(expense);

    //clear input
    expenseDetails.value = "";
    expenseValue.value = "";
    expenseType.value = ""; 
    
    console.log(expenses);

    e.preventDefault();
}

function viewTotal(e){
    console.log(expenses);

    // document.querySelector("#totalValue").style.display = "block";

     
    let output = '';
    let total = 0;
    expenses.forEach((expense)=>{
        
        output +=  
        `
            <tr>
                <th scope="row">${expense.id}</th>
                <td>${expense.value}</td>
                <td>${expense.type}</td>
                <td>${expense.details}</td>
            </tr>
        `
        total += parseInt(expense.value);
      

        
    }); 

    document.querySelector("#valuesDiv").innerHTML = `
    <div class="tbody">
        ${output}
    <div>
`;

    document.querySelector("#totalExpenses").innerHTML = total;
    e.preventDefault();
}

 
 

function clearExpenses(){
  expenses = [];
}

 