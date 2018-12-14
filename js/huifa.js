function post(label){
	var arr = [];
	
	var id=document.getElementById('text2');
	var text=id.value;
	if(label==0)
	{
		arr.push("您发帖的内容是:");
	}
	else
	{
		arr.push("您回帖的内容是:");
	}
	arr.push(text);
	alert(arr.join("\n"));
	window.open("","_self").close();
}
function huifa(url,text)
{
	document.cookie=text;
	window.open(url);
}
function load()
{
	var text=document.cookie;
	if (text=='') {text='获取cookies失败!';}
	document.getElementById('ttext').innerHTML = text;
}