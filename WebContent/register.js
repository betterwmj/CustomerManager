
var btn;
window.onload=function(){
	//日期
	var selects = document.getElementsByTagName("select");//通过标签名获取select对象
	var date = new Date();
	var nowYear = date.getFullYear();//获取当前的年
	for(var i=nowYear-100;i<=nowYear;i++){
	var optionYear = document.createElement("option");
	optionYear.innerHTML=i;
	optionYear.value=i;
	selects[0].appendChild(optionYear);
	}
	for(var i=1;i<=12;i++){
	var optionMonth = document.createElement("option");
	optionMonth.innerHTML=i;
	optionMonth.value=i;
	selects[1].appendChild(optionMonth);
	}
	getDays(selects[1].value,selects[0].value,selects);
	}
	// 获取某年某月存在多少天
	function getDaysInMonth(month,year){
	var days;
	if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) {
	days=31;
	}else if (month==4 || month==6 || month==9 || month==11){
	days=30;
	}else{
	if ((year%4 == 0 && year%100 != 0) || (year%400 == 0)) {     // 判断是否为润二月
	days=29; 
	}else { 
	days=28; 
	}
	}
	return days; 
	}
	function setDays(){
	var selects = document.getElementsByTagName("select");
	var year = selects[0].options[selects[0].selectedIndex].value;
	var month = selects[1].options[selects[1].selectedIndex].value;
	getDays(month,year,selects);

	}
	function getDays(month,year,selects){
	var days = getDaysInMonth(month,year);
	selects[2].options.length = 0;
	for(var i=1;i<=days;i++){
	var optionDay = document.createElement("option");
	optionDay.innerHTML=i;
	optionDay.value=i;
	selects[2].appendChild(optionDay);
	
	}
	btn=document.getElementById("btn");
    btn.onclick=function(){
    	//只能是数字或字母
    	var reg = /^[\w.]{4,20}$/;
    	var ra = document.getElementsByName('sex');
    	var day = document.getElementById('day');
    	var selectday =day.options[day.selectedIndex].value;
    	if(form1.userRealName.value==null||form1.userRealName.value=="")
    	{
    		alert("请输入用户名！");
    		return false;
    	}
    	
    	//用来判断输入用户密码是否为空,如果为空则提示"请输入用户密码！"并返回假
    	else if(form1.password.value==null||form1.password.value=="")
    	{
    		alert("请输入用户密码！");
    		return false;
    	}
    	
    	else if(!form1.password.value.match(reg))
    	{
    		alert("密码不规范，请重新输入!");
    		return false;
    	}
    	//用来判断输入用户验证密码是否为空,如果为空则提示"请输入验证密码！"并返回假
    	else if(form1.password2.value==null||form1.password2.value=="")
    	{
    		alert("请输入验证密码！");
    		return false;
    	}
    	//判断两次输入的密码是否相等，如果不相等则提示"两次输入的密码不一致！"并返回假
    	else if(form1.password.value!=form1.password2.value)
    	{
    		alert("两次输入的密码不一致！");
    		return false;
    	}
    	else if(!ra[0].checked && !ra[1].checked)
    	{
    		alert("请选择性别！");
    	   return false;
    	} 
    	else
    	{
    		var sexs;
    		for(var i=0; i<ra.length; i ++){
    	        if(ra[i].checked){
    	        	sexs=ra[i].value;
    	        	
    	        }
    	    }
    		var data=new Object();
    		data.name=userRealName.value;
    		data.password=password.value
    		data.sex=sexs;
    		data.births=year+"-"+month+"-"+selectday;
    		//var person={name:,password:password.value,sex:sexs,birth:year+"-"+month+"-"};
    		localStorage.setItem(data.name,JSON.stringify(data));
    	    alert("注册成功");  		
    	}
  }
}	

