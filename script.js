selected = null;
function formsubmitted() {

    data = read();
    if (selected == null)
        insert(data);
    else
        update(data);
    reset();
}
function read() {
    data = {};
    data["name"] = document.getElementById("name").value;
    data["age"] = document.getElementById("age").value;
    data["phno"] = document.getElementById("phno").value;
    data["addr"] = document.getElementById("addr").value;
    return data;
}
function insert(data) {
    table = document.getElementById("output").getElementsByTagName("tbody")[0];
    row = table.insertRow(table.length);
    d1 = row.insertCell(0);
    d1.innerHTML = data.name;
    d2 = row.insertCell(1);
    d2.innerHTML = data.age;
    d3 = row.insertCell(2);
    d3.innerHTML = data.phno;
    d4 = row.insertCell(3);
    d4.innerHTML = data.addr;
    d5 = row.insertCell(4);
    d5.innerHTML = `<a onClick="edit(this)">Edit</a><a onClick="deleted(this)">Delete</a>`;
}
function reset() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phno").value = "";
    document.getElementById("addr").value = "";
    selectedRow = null;
}
function edit(data) {
    selected = data.parentElement.parentElement;
    document.getElementById("name").value = selected.cells[0].innerHTML;
    document.getElementById("age").value = selected.cells[1].innerHTML;
    document.getElementById("phno").value = selected.cells[2].innerHTML;
    document.getElementById("addr").value = selected.cells[3].innerHTML;
}
function update(data) {
    selected.cells[0].innerHTML = data.name;
    selected.cells[1].innerHTML = data.age;
    selected.cells[2].innerHTML = data.phno;
    selected.cells[3].innerHTML = data.addr;
}
function deleted(data) {
    if (confirm('Are you sure to delete this data ?')) {
        row = data.parentElement.parentElement;
        console.log(row);
        document.getElementById("output").deleteRow(row.rowIndex);
        reset();
        // if (row.rowIndex < 0) {
        //     document.getElementById("bottom").style.visibility = "hidden";
        // }
    }
}