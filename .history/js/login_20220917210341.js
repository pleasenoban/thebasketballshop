

function signout(){
  if (localStorage.getItem('TaiKhoanDangNhap')== null) {
    alert('Bạn hiện đang không đăng nhập')
  }else{
  localStorage.removeItem('TaiKhoanDangNhap');
  location.reload()
  }
  
}
function register() {
 for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
 }
  if (localStorage.getItem) {
    
  }
  
   
    
    var taiKhoan ={
          'name': document.getElementById("username").value,
          'pass': document.getElementById("password").value
    }
    if (taiKhoan.name ==="" || taiKhoan.pass ==="") {
      alert("Vui lòng điền vào chỗ còn trống");
      return;
    }
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        try {
          let taiKhoanTrenLocal =JSON.parse(localStorage.getItem(localStorage.key(i)))
        } catch (err) {
          continue;
        }
        let taiKhoanTrenLocal =JSON.parse(localStorage.getItem(localStorage.key(i)))
        if (taiKhoan.name === taiKhoanTrenLocal.name) {
          alert('Tên đăng nhập đã tồn tại,vui lòng đặt 1 tên khác')
          return;
        }
        
      }
    }
    document.getElementById('cpassword').style.display = "inline-block";
    document.getElementById('cpassword').onkeypress = function(e){
      if (!e) e = window.event;
      if (e.keyCode == '13'){
        if (this.value == "") {
          alert("Vui lòng xác nhận mật khẩu");
        }else if (this.value !== taiKhoan.pass) {
          alert("Vui lòng kiểm tra lại mật khẩu xác nhận");
        }else if(this.value === taiKhoan.pass){
          const myJSON= JSON.stringify(taiKhoan);
        
          localStorage += localStorage.setItem("NguoiDungSo"+a,myJSON)
          alert('Đăng kí thành công');
          document.getElementById('cpassword').style.display = "none";
        }
          
        
      }
    }
    
    
    
  }
  
  function login(){
 if (localStorage.getItem('TaiKhoanDangNhap')!== null) {
  alert('Bạn hiện đang đăng nhập,vui lòng đăng xuất để đăng nhập vào tài khoản khác')
 }else{

 
    var taiKhoanGhiVao ={
          'name':document.getElementById("username").value,
          'pass':document.getElementById("password").value
    }
    if (taiKhoanGhiVao.name ==="" || taiKhoanGhiVao.pass ==="") {
      alert("Vui lòng điền vào chỗ còn trống");
      return;
    }
    for (let i = 1; i <= localStorage.length; i++) {
      if (localStorage.getItem('NguoiDungSo'+i) ==null) {
        alert('Tên đăng nhập không tồn tại,vui lòng đăng kí');
      }else{
        var nguoiDungNhapTuLocal =JSON.parse(localStorage.getItem('NguoiDungSo'+i))
        if (nguoiDungNhapTuLocal.name === taiKhoanGhiVao.name) {
          if (nguoiDungNhapTuLocal.pass === taiKhoanGhiVao.pass) {
            alert('Đăng nhập thành công');
           localStorage.setItem('TaiKhoanDangNhap',taiKhoanGhiVao.name);
           load();

            break;
          }else{
            alert('Sai mật khẩu,vui lòng thử lại')
            break;
          }
      }else if (nguoiDungNhapTuLocal.name !== taiKhoanGhiVao.name) {
          continue;
        }
        
      }
      
      }
     
      
    }
//     for (var i = 0; i < localStorage.length; i++) {
//       var value = localStorage.getItem(localStorage.key(i));
//       if (value && value.startsWith('<div')) {
//          var so = 0+1
//       continue;
//       }else{
//         if (taiKhoanGhiVao.name ==="" || taiKhoanGhiVao.pass ==="") {
//           alert("Vui lòng điền vào chỗ còn trống");
//           return;
//         }else if (localStorage.length ==0) {
//           alert('Tên đăng nhập không tồn tại,vui lòng đăng kí');
//         }else if(localStorage.length >= 0){
//           for (let i = so; i < localStorage.length;i++) {
            
//                 var nguoiDungNhapTuLocal =JSON.parse(localStorage.getItem(localStorage.key(i)))
//               if (nguoiDungNhapTuLocal.name === taiKhoanGhiVao.name) {
//                 if (nguoiDungNhapTuLocal.pass === taiKhoanGhiVao.pass) {
//                   alert('Đăng nhập thành công');
//                  localStorage.setItem('TaiKhoanDangNhap',taiKhoanGhiVao.name);
//                  load();
      
//                   break;
//                 }else{
//                   alert('Sai mật khẩu,vui lòng thử lại')
//                   break;
//                 }
//             }else if (nguoiDungNhapTuLocal.name !== taiKhoanGhiVao.name) {
//               if (i == localStorage.length-1 ) {
//                 alert('Tên đăng nhập không tồn tại,vui lòng đăng kí');
//               }else{
//                 continue;
//               }
              
//             }
            
            
           
//         }
//       }
//       }
//    }
    
  
// }
  }
 
  function load(){
   if (localStorage.getItem("TaiKhoanDangNhap") == null ) {
    return;
   }else{
    var a = localStorage.getItem('TaiKhoanDangNhap')
    document.getElementById('welcomeaido').innerHTML = `Welcome,`+ a;
    
   }

  //  if(localStorage.length > 0){
  //     var localStorageArray = new Array();
  //     for (i=0;i<localStorage.length;i++){
  //         localStorageArray[i] = localStorage.key(i)+localStorage.getItem(localStorage.key(i));
  //     }
  //  }
  //  var sortedArray = localStorageArray.sort();
  //  var tenNguoiDung= sortedArray[0].substring(1);
  //  document.getElementById('welcomeaido').innerHTML = `Welcome,`+ tenNguoiDung;
}
function cartCounting() {
    var cartItemNumber = 0;
    for (let i = 1; i < 13; i++) {
        if (localStorage.getItem('sp'+i) !== null) {
            cartItemNumber++;
        }  
        
    }
    document.getElementById('countItem').innerHTML = "("+cartItemNumber+")";
    
}
