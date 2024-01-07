listData = localStorage.getItem('Data') != undefined ? JSON.parse(localStorage.getItem('Data')) : []
listCart = localStorage.getItem('Cart') != undefined ? JSON.parse(localStorage.getItem('Cart')) : []
x=location.search.split('=')[1]
var load=()=>{
    index = listData.findIndex(item => item.id === x);
    console.log(x)
    console.log(index)
    let ob=listData[index]
    document.getElementById('ProductImg').src='./images/'+ob.file
    document.getElementById('tensp').innerText=ob.name
    document.getElementById('giamz').innerText=ob.old
    document.getElementById('giaz').innerText=ob.new
    document.getElementById('des').innerText=ob.des
}
load()
function addcart(){
   
    if(listCart.findIndex(item=>item.id===x)>-1){
        alert('Đã tồn tại trong giỏ hàng')
        return
    }
    index = listData.findIndex(item => item.id === x);
    let ob=listData[index]//{id:idNow,name:nameNow,file:fileNow,des:desNow,old:oldNow,new:newNow}
    listCart.push(ob)
    savedatalocal(listCart,'Cart')
}
var savedatalocal = function (datas, fn) {
    datas = JSON.stringify(datas)
    localStorage.setItem(fn, datas)
    alert("complete")
}

// function showgiohangtrangtt(){
//     var gh = sessionStorage.getItem("giohang");
//     var giohang=JSON.parse(gh);
//     var tong = 0;
//     if(gh!=null){
//     var kq=
//     '<h2>ĐƠN HÀNG</h2>'+'<table style="border-collapse:collapse;" border="1">'+
//         '<tr >'+
//         '<th>STT</th>'+
//         '<th>Hình</th>'+
//         '<th>Tên sản phẩm</th>'+
//         '<th>Đơn giá</th>'+
//         '<th>Số lượng</th>'+
//         '<th>Màu</th>'+
//         '<th>Thành tiền</th>'
//         '</tr>';
//     for(let i=0; i<giohang.length; i++){
//         let stt=i+1;
//         let tt= giohang[i][2] * giohang[i][4];
//         var kq;
//         tong += tt;
//         kq+=
//         ' <tr style="text-align: center">'+
//                 '<td>' +stt+ '</td>'+
//                 '<td><img src="'+giohang[i][0]+'" style="height: 50px;width: 50px;"></td>'+
//                 '<td>' + giohang[i][1] + '</td>'+
//                 '<td>' + giohang[i][2] + '</td>'+
//                 '<td>' + giohang[i][4] + '</td>'+
//                 '<td>' + giohang[i][3] + '</td>'+
//                 '<td>' + tt + '</td>'+
//                 '</tr>';
//     }
//     kq+='<tr ">'+
//             '<th colspan="6">Tổng Đơn Hàng</th>'+
//             '<th>'+
//             '<div>'+ tong +'</div>'+
//             '</th>'+
//             '</tr>'+
//             '</table>';}
//     else{
//         kq='<div style="margin-left:20px;"><h1>Giỏ Hàng Đang Rỗng</h1></div>';
//     }
//     document.getElementById("showgiohang2").innerHTML=kq;

// }