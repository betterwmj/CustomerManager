
var btn;
window.onload=function(){
	//����
	var selects = document.getElementsByTagName("select");//ͨ����ǩ����ȡselect����
	var date = new Date();
	var nowYear = date.getFullYear();//��ȡ��ǰ����
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
	// ��ȡĳ��ĳ�´��ڶ�����
	function getDaysInMonth(month,year){
	var days;
	if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) {
	days=31;
	}else if (month==4 || month==6 || month==9 || month==11){
	days=30;
	}else{
	if ((year%4 == 0 && year%100 != 0) || (year%400 == 0)) {     // �ж��Ƿ�Ϊ�����
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
    	//ֻ�������ֻ���ĸ
    	var reg = /^[\w.]{4,20}$/;
    	var ra = document.getElementsByName('sex');
    	var day = document.getElementById('day');
    	var selectday =day.options[day.selectedIndex].value;
    	if(form1.userRealName.value==null||form1.userRealName.value=="")
    	{
    		alert("�������û�����");
    		return false;
    	}
    	
    	//�����ж������û������Ƿ�Ϊ��,���Ϊ������ʾ"�������û����룡"�����ؼ�
    	else if(form1.password.value==null||form1.password.value=="")
    	{
    		alert("�������û����룡");
    		return false;
    	}
    	
    	else if(!form1.password.value.match(reg))
    	{
    		alert("���벻�淶������������!");
    		return false;
    	}
    	//�����ж������û���֤�����Ƿ�Ϊ��,���Ϊ������ʾ"��������֤���룡"�����ؼ�
    	else if(form1.password2.value==null||form1.password2.value=="")
    	{
    		alert("��������֤���룡");
    		return false;
    	}
    	//�ж���������������Ƿ���ȣ�������������ʾ"������������벻һ�£�"�����ؼ�
    	else if(form1.password.value!=form1.password2.value)
    	{
    		alert("������������벻һ�£�");
    		return false;
    	}
    	else if(!ra[0].checked && !ra[1].checked)
    	{
    		alert("��ѡ���Ա�");
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
    	    alert("ע��ɹ�");  		
    	}
  }
}	

