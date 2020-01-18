// 数字滚动的js

$(function() {
	var options = {
		useEasing: true, //开启一个过渡动画
		useGrouping: true, //开启千位分割
		separator: ',', //定义千位分隔符
		decimal: '.', //小数点分割
		// prefix:"￥",  //前置符号
		// suffix:"$"
	};
	var arr = new Array(
		// CountUp(参数一, 参数二, 参数三, 参数四, 参数五, 参数六)
		// 参数一: 数字所在容器
		// 参数二: 数字开始增长前的默认值(起始值),一般从 0 开始增长
		// 参数三: 数字增长后的最终值,该值一般通过异步请求获取
		// 参数四: 数字小数点后保留的位数
		// 参数五: 数字增长特效的时间,此处为3秒
		// 参数六: 其他配置项
		// 注: 参数六也可不加,其配置项则为默认值
		new CountUp('item1', 0, 18397, 0, 3, options),
		new CountUp('item2', 0, 98.8, 2, 3, options),
		new CountUp('item3', 0, 3273, 0, 3, options),
		new CountUp('item4', 0, 100.0, 0, 3, options),
	)
	var fn = function() {
		$(".itemm").each(function() {
			var index = $(this).index('.itemm')
			arr[index].start()
		})
		// console.log($(".itemm"))
	}
	fn()
	// 右边菜单栏固定的js实现弹出效果
	$("#slider-chat,#slider-qq,#slider-phone,#slider-wechat").hover(
		function(){
			$(this).next().show()
		},function(){
			$(this).next().hide()
		}
	)
	//右面边框点击回到顶部
	$("#slider-goTop").click(function(){
		$("body,html").animate({scrollTop:0},500)
		return false;
	})
	
})

// 我们的服务鼠标效果js
//建立active1 添加鼠标移动出现效果 
// 思路:循环第一次 给所有的盒子添加鼠标事件 onmouseover,
// 	嵌套循环 循环出每个盒子后 给她清空类  然后循环外触摸的加上active1类
var ab = document.getElementById('ab');
console.log(ab);
var ab_zi = ab.getElementsByClassName('col-lg-3');
console.log(ab_zi);
for (var q = 0; q < ab_zi.length; q++) {
	ab_zi[q].onmouseover = function() {
		for (var j = 0; j < ab_zi.length; j++) {
			ab_zi[j].className = 'col-lg-3 col-xs-12';
		}
		this.className = 'col-lg-3 col-xs-12  active1';
	}
}
// 右侧栏到一定高度消失
var yidong=document.getElementById('gotop');
document.onscroll=function(){
	var osTop =document.documentElement.scrollTop;
	console.log(osTop);
	if(osTop<400){
		yidong.style.opacity='0'
		yidong.style.transition='0.5s';
	}else{
	yidong.style.opacity='1'
	yidong.style.transition='0.5s';
	}
}
// 左侧栏留言
var tanchu=document.getElementsByClassName('tanchu')[0];
var liuyan2=document.getElementsByClassName('liuyan2')[0];
var kongbai=document.getElementsByClassName('kongbai')[0];
var kongbai2=document.getElementsByClassName('kongbai2')[0];

kongbai.onclick=function(){
	tanchu.style.display='none';
	liuyan2.style.display='block';
}
kongbai2.onclick=function(){
	tanchu.style.display='block';
	liuyan2.style.display='none';
}