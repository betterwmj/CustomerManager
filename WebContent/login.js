 //���ڹر�
  	function CloseWin(){
  		window.close();
  	}
  //�����ж������û��˺ź������Ƿ�Ϊ�գ����Ϊ���򷵻ؼٲ���ʾ,���򷵻���
  	function CheckLoginInfo(){
  		if(Login.username.value == ""){
  			alert("�������û��˻���");
  			Login.username.focus();
  			return false;
  		}
  		else if(Login.password.value == ""){
  			alert("�������û����룡");
  			Login.password.focus();
  			return false;
  		}
  		else {
  			//��localStorage��ȡ���û��������ж��Ƿ���ڸ��û�
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
	        	alert("�û������������");
  		}
  		
  		return true;
  	}
  	//����¼ҳ������������Ƶ�username�����
  	function WindowLoad(){
  		Login.username.focus();
  	}
  	//������س���ʱ����¼��ť��ӵ���¼�
  	function JumpTo(){
  		if(event.ketCode == 13){
  			Login.btnLogin.click();
  			return true;
  		}
  	}
  	