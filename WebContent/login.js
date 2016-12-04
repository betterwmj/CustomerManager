 //窗口关闭
  	function CloseWin(){
  		window.close();
  	}
  //用来判断输入用户账号和密码是否为空，如果为空则返回假并提示,否则返回真
  	function CheckLoginInfo(){
  		if(Login.username.value == ""){
  			alert("请输入用户账户！");
  			Login.username.focus();
  			return false;
  		}
  		else if(Login.password.value == ""){
  			alert("请输入用户密码！");
  			Login.password.focus();
  			return false;
  		}
  		else {
  			//从localStorage中取出用户名密码判断是否存在该用户
  			var flag=true;
  		    for(var i=0;i<localStorage.length;i++){  
  	        var str=localStorage.getItem(localStorage.key(i));
  	        var data= JSON.parse(str);
  	        if(Login.username.value==data.name&&Login.password.value==data.password){
  	        	 flag=false;
  	             break;
  	         }
  	        
  	      } 
  		  if(flag==false)
	        	 window.open('index.html');
	        else
	        	alert("用户名或密码错误");
  		}
  		
  		return true;
  	}
  	//当登录页面加载完请光标移到username输入框
  	function WindowLoad(){
  		Login.username.focus();
  	}
  	//当点击回车键时给登录按钮添加点击事件
  	function JumpTo(){
  		if(event.ketCode == 13){
  			Login.btnLogin.click();
  			return true;
  		}
  	}
  	