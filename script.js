var form = document.getElementById("form");

form.addEventListener("submit", addList);

// Get table
var table = document.getElementById("table");

// Delete and Line Through Functions
table.addEventListener("click", removeList);
table.addEventListener("click", lineThrough);

// Add list Function
function addList(e){
    e.preventDefault();

    // Table and Table Row
    var tRow = document.createElement("tr");

    // Get Input Values
    var inputText = document.getElementById("input-text").value;
    var tDataOne = document.createElement("td");
    tDataOne.appendChild(document.createTextNode(inputText));
    tDataOne.id = "inputValue";
    document.getElementById("input-text").value = "";

    // Create Radio Button
    var createInput = document.createElement("input");
    var tDataTwo = document.createElement("td");
    createInput.className = "checkOut";
    createInput.setAttribute("type", "checkbox");
    tDataTwo.appendChild(createInput);

    // Create Delete Button
    var TButton = document.createElement("input");
    var tDataThree = document.createElement("td");
    TButton.className = "delete";
    TButton.setAttribute("type", "button");
    TButton.setAttribute("value", "Delete");
    tDataThree.appendChild(TButton);
    
    // Append All the Inputs
    tRow.appendChild(tDataOne);
    tRow.appendChild(tDataTwo);
    tRow.appendChild(tDataThree);
    table.appendChild(tRow);
    console.log(tRow);
}

// Delete List Function
function removeList(e){

    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            let li = e.target.parentElement.parentElement;
            li.style.display = "none";
        }
    }
}

// Line Through Function
function lineThrough(e){
        if(e.target.classList.contains("checkOut")){
            let li = e.target.parentElement.previousSibling;
            li.classList.toggle("on");
    }
}