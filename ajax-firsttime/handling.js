window.onload = function(){

// document.getElementById('a').onclick = function(){
// 	this.style.background  = "#"+((1<<24)*Math.random()|0).toString(16);
	
// }

document.getElementById('laydulieu').onclick = function(){
// Xử dụng ajax để gọi và lấy dữu liệu từ API
// Khởi tạo
let xhr = new XMLHttpRequest();
let data;
xhr.open('GET', 'https://5d980acd61c84c00147d6b20.mockapi.io/api/products');
// Gửi yêu cầu
xhr.send();
// Xử lý
xhr.onreadystatechange = function(){
	if(this.readyState==2){
		console.log('Đang gửi yêu cầu');
		document.getElementById('ketqua').innerHTML = "<h5 class='thongbao'>Đang gửi yêu cầu ...</h5>";
	}
	if(this.readyState==3){
		console.log('Đang xử lý yêu cầu');
		document.getElementById('ketqua').innerHTML = "<h5 class='thongbao'>Đang xử lý yêu cầu ...</h5>";
	}
	// Sau khi xu ly xong
	if(this.readyState==4 && this.status == 200){
		console.log('Đã nhận dữ liệu!');
		data = JSON.parse(this.responseText);
		showData(data);
	}

}// end function xu ly

function showData($data){
	let html_show = '';
	data.forEach( function(element, index) {
		// statements
		html_show += '<div class="product"><h3>Tên sản phẩm: '+element.name+'</h3><p>ID: '+element.id+'<br>Giá: '+element.price+'$<br>Trạn thái: '+element.status+'<br></div><hr>';
	});
	document.getElementById('ketqua').innerHTML = html_show;
	document.getElementById('a').style.height = 'auto';
}

}//close of onclick
document.getElementById('xoadulieu').onclick = function(){
	document.getElementById('ketqua').innerHTML = "<h5 class='thongbao'>Đã xóa dữ liệu!</h5>";
}

document.querySelector('.inputName').onchange = function(){
		let data = null;
		let name = this.value;
		let xhr = new XMLHttpRequest();
		//Phuong thuc POST
		xhr.open('POST', 'data.php');
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		console.log('đang khởi tạo dữ liệu');
		xhr.onreadystatechange = function(){
			if(this.readyState==4 && this.status == 200){
				console.log('Đã lấy dữ liệu');
				document.getElementById('ketqua').innerHTML= this.responseText;
			}

		}
		//Phuong thuc POST
		xhr.send('name='+name);
		
}



} // close of onload