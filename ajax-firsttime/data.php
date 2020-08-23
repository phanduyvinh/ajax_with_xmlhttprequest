<?php

	$name = $_POST['name'];
	$data = ['Vinh', 'Duy', 'Phan'];
	$data2 = ['Hùng', 'Thông', 'Nghĩa'];
	if(empty($name)){
		echo "<h5 class='thongbao'>Please enter your name!</h5>";
	}
	elseif(in_array($name, $data)){
		echo "<h5 class='thongbao'>Tên của VIP</h5>";
	}elseif(in_array($name, $data2)){
		echo "<h5 class='thongbao'>Tao báo công an!</h5>";
	}
	else{
		echo "<h5 class='thongbao'>Tên xấu VL</h5>";
	}


?>