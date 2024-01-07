
table = document.getElementById("tableid")
idNow = ""
nameNow = ""
fileNow = ""
desNow = ""
oldNow = ""
newNow = ""
listData = localStorage.getItem('Data') != undefined ? JSON.parse(localStorage.getItem('Data')) : []
var load = function () {
    var htmlArray = listData.map(sp => `
        <tr>
            <td>${sp.id}</td>
            <td><img src="./images/${sp.file}" alt="" width="100px"></td>
            <td>${sp.name}</td>
            <td>${sp.old}</td>
            <td>${sp.new}</td>
            <td onclick="updateData('${sp.id}')"><i class="material-icons" style="cursor:pointer">update</i></td>
            <td onclick="deleteData('${sp.id}')"><i class="material-icons" style="cursor:pointer">delete</i></td>
        </tr>`
    ).join('\n');
    table.innerHTML = `
    <tr>
        <th>ID</th>
        <th>Image</th>
        <th>Name</th>
        <th>Old Price</th>
        <th>New Price</th>
        <th>Update</th>
        <th>Delete</th>
    </tr>`+'\n'+htmlArray
}

var load2 = function () {
    idNow = document.getElementById("ID").value
    nameNow = document.getElementById("Name").value
    desNow = document.getElementById("Des").value
    oldNow = document.getElementById("Old").value
    newNow = document.getElementById("New").value
}

upload = document.getElementById("File")
upload.addEventListener("change", function () {
    fr = new FileReader()
    fr.readAsText(upload.files[0])
    fileNow = upload.files[0].name
})

var deleteData = function (id) {
    index = listData.findIndex(item => item.id === id);
    listData.splice(index,1)
    savedatalocal(listData,"Data")
    load();
}
var addData = function () {
    load2();
    if(checkData(idNow)){
        return
    }
    let ob={id:idNow,name:nameNow,file:fileNow,des:desNow,old:oldNow,new:newNow}
    listData.push(ob)
    savedatalocal(listData,"Data")
    load();
}
var updateData = function (id) {
    console.log(id)
    ob=listData[listData.findIndex(item => item.id === id)]
    document.getElementById("ID").value=ob.id
    document.getElementById("Name").value=ob.name
    //document.getElementById("File").value=ob.file
    document.getElementById("Des").value=ob.des
    document.getElementById("Old").value=ob.old
    document.getElementById("New").value=ob.new
}
var update2=function(id){
    index=listData.findIndex(item => item.id === id)
    let ob={id:idNow,name:nameNow,file:fileNow,des:desNow,old:oldNow,new:newNow}
    listData[index]=ob
    savedatalocal(listData,"Data")
    load()
}
var savedatalocal = function (datas, fn) {
    datas = JSON.stringify(datas)
    localStorage.setItem(fn, datas)
    alert("complete")
}
var checkData = function (id) {
    index = listData.findIndex(item => item.id === id);
    if (index !== -1) {
        return true
      } else {
        return false
      }
}
var updateoradd=function(){
    load2()
    if(checkData(idNow)){
        update2(idNow)
    }
    else{
        addData()
    }
}
load()