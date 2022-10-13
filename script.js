var selectedRow = null;
function onForSubmit(e){
    event.preventDefault();
    var formData = readForData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData)
    }
    resetForm();
}

function readForData(){
    var formData = {};
    formData["Codigo"] = document.getElementById("Codigo").value;
    formData["Nombre"] = document.getElementById("Nombre").value;
    formData["Cantidad"] = document.getElementById("Cantidad").value;
    formData["Stock"] = document.getElementById("Stock").value;
    formData["Precio"] = document.getElementById("Precio").value;
    return formData
}

function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Codigo;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.Nombre;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Cantidad;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Stock;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.Precio;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</Button>`;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Codigo').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Nombre').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Cantidad').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Stock').value = selectedRow.cells[3].innerHTML;
    document.getElementById('Precio').value = selectedRow.cells[4].innerHTML;

}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Codigo;
    selectedRow.cells[1].innerHTML = formData.Nombre;
    selectedRow.cells[2].innerHTML = formData.Cantidad;
    selectedRow.cells[3].innerHTML = formData.Stock;
    selectedRow.cells[4].innerHTML = formData.Precio;

}

function onDelete(td){
    if(confirm('Quieres eliminar este elemento?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm(){
    document.getElementById('Codigo').value = '';
    document.getElementById('Nombre').value = '';
    document.getElementById('Cantidad').value = '';
    document.getElementById('Stock').value = '';
    document.getElementById('Precio').value = '';
 
}