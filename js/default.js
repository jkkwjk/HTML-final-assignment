var name='kzow1';
function outlogin(){
	if(name == '')
	{
		alert('登录成功!!!');
		document.getElementById('username').text='kzow1';
		document.getElementById('login').text='退出';
		document.getElementById('yonghuzu').innerHTML='用户组:新人上路&nbsp;&nbsp;&nbsp;&nbsp;';
		name = 'kzow1';
	}
	else
	{
		alert('你成功退出啦啦啦!!');
		document.getElementById('username').text='你已经退出';
		document.getElementById('login').text='登录';
		document.getElementById('yonghuzu').innerHTML='用户组:登录才能获取&nbsp;&nbsp;&nbsp;&nbsp;';
		name = '';
	}
};
function my(){
	if(name == 'kzow1')
	{
		window.open("../../index.html");
	}
	else
	{
		alert('你还没有登录哩');
	}
}
function qqlogin(){
	if(name == 'kzow1')
	{
		alert('没有接口╮(╯▽╰)╭');
	}
	else
	{
		alert('你还没有登录哩');
	}
	
};
function getTime(){
	var time = new Date();
	var id = document.getElementById("timeee");
	id.innerHTML = time.toLocaleString( );;
};
function mousein(id){
	var a=document.getElementById(id);
	a.style.backgroundColor="#f2f2f2";
}
function mouseout(id){
	var a=document.getElementById(id);
	a.style.backgroundColor="white";
	
}
function amousein(id){
	var a=document.getElementById(id);
	a.style.textDecoration="underline";
}
function amouseout(id){
	var a=document.getElementById(id);
	a.style.textDecoration="none";
}