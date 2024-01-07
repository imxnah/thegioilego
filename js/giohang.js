cart = document.getElementById("cartid")
//listData = localStorage.getItem('Data') != undefined ? JSON.parse(localStorage.getItem('Data')) : []
listCart = localStorage.getItem('Cart') != undefined ? JSON.parse(localStorage.getItem('Cart')) : []
var load = function () {
    var htmlArray = listCart.map(sp => `
    <li class="item">
                <img src="./images/${sp.file}" alt="" class="itemImg" />
                <h3>${sp.name}</h3>
                <p> <input type="number" class="qty" placeholder="1" />x${sp.new}</p>
    
                <p class="price">${sp.new}</p>

                <button onclick="deletecart('${sp.id}')">X</button>
            </li>`
    ).join('\n');
    cart.innerHTML = htmlArray
}
load()
var savedatalocal = function (datas, fn) {
    datas = JSON.stringify(datas)
    localStorage.setItem(fn, datas)
    alert("complete")
}
listinput = document.getElementsByClassName('qty')
listprice = document.getElementsByClassName('price')
var deletecart = function (id) {
    index = listCart.findIndex(item => item.id === id);
    listCart.splice(index, 1)
    savedatalocal(listCart, 'Cart')
    load();
}


total =44
var changetotalprice = function () {
    total=44
    for (let i = 0; i < listprice.length; i++) {
        total = total + parseInt(listprice[i].innerHTML)
    }
    document.getElementById('valuez').textContent='$' +total
}
for (let i = 0; i < listinput.length; i++) {
    listinput[i].addEventListener('change', () => {
        if(listinput[i].value<=0){
            return
        }
        console.log(i)
        listprice[i].innerHTML = listinput[i].value * listCart[i].new
        changetotalprice()
    })
}

