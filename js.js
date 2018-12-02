var name='yuyan123';
function outlogin(){
	if(name == '')
	{
		alert('登录成功!!!');
		document.getElementById('username').text='yuyan123';
		document.getElementById('login').text='退出';
		document.getElementById('yonghuzu').innerHTML='用户组:新人上路&nbsp;&nbsp;&nbsp;&nbsp;';
		name = 'yuyan123';
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
function qqlogin(){
	if(name == 'yuyan123')
	{
		alert('没有接口╮(╯▽╰)╭');
	}
	else
	{
		alert('你还没有登录哩');
	}
	
};