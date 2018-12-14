function sizeChange()
{
	var arr = document.getElementsByTagName('div');
	var res = [];
	var obj = [];
	for(var i = 0; i < arr.length; ++i)
	{
		if(arr[i].className == 'maininfol')
			res.push(arr[i]);
		if(arr[i].className == 'maininfor')
			obj.push(arr[i]);
	}
	for(var i = 0; i < res.length; ++i)
	{
		res[i].style.height = obj[i].clientHeight+'px';
	}
}