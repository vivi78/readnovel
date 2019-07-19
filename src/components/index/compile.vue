<template>
	<main class="compile">
		<header class="compile-header">
			<span @click="selectAll()">全选</span>
			<router-link to="/bookshelf">取消</router-link>
			<h3>共2本</h3>
		</header>
		<div class="tab-box">
	    	<ol>
	    		<li>
	    			<i class="iconfont choose" @click="select1()" id="circle" :class="{isChoose:show1}">&#xe61b;</i>
					<router-link to="#" class="book-layout">
						<img src="../../assets/img/details.jpg" alt="" class="tab-book"/>
						<div class="book-cell">
							<div class="book-title-x">
								<h4 class="book-title">嫡女复仇逆袭记</h4>
								<div class="book-title-r">
									继续阅读<i class="iconfont">&#xe627;</i>
									<p>5小时前</p>
								</div>
							</div>
							<p><i class="iconfont">&#xe608;</i>胡瓜叶 | 读至第一章</p>
							<p>更新至 第一百章 皇帝的算计</p>
						</div>
					</router-link>
				</li>
				<li>
	    			<i class="iconfont choose" @click="select2()" id="circle" :class="{isChoose:show2}">&#xe61b;</i>
					<router-link to="#" class="book-layout">
						<img src="../../assets/img/list.jpg" alt="" class="tab-book"/>
						<div class="book-cell">
							<div class="book-title-x">
								<h4 class="book-title">余生漫漫皆为你</h4>
								<div class="book-title-r">
									继续阅读<i class="iconfont">&#xe627;</i>
									<p>3个月前</p>
								</div>
							</div>
							<p><i class="iconfont">&#xe608;</i>浮屠妖 | 读至第6章</p>
							<p>更新至 2019，新书来啦！</p>
						</div>
					</router-link>
				</li>
			</ol>
	    </div>
	    <transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
	    	<div class="compile-aside" v-show="isShow" @click="remove()">
	    		<i class="iconfont">&#xe618;</i>删除
	    	</div>
	    </transition>
	    <!--尾部-->
		<footer>
			<div class="footer-link">
				<router-link to="/index" class="footer-link-a">书架</router-link>
				<router-link to="/index" class="footer-link-a">充值</router-link>
				<router-link to="/index" class="footer-link-a">帮助</router-link>
				<router-link to="/index" class="footer-link-a">客户端</router-link>
			</div>
			<div class="footer-copy">Copyright © 2002-2019 m.readnovel.com</div>
		</footer>
	</main>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				show1:false,
				show2:false,
				isShow:false
			}
		},
		methods:{
			select1(){
				this.show1=!this.show1
				if(this.show1==true || this.show2==true){
					this.isShow=true
				}else{
					this.isShow=false
				}
				
			},
			select2(){
				this.show2=!this.show2
				if(this.show1==true || this.show2==true){
					this.isShow=true
				}else{
					this.isShow=false
				}
			},
			selectAll(){
				this.show1=!this.show1
					this.show2=!this.show2
					this.isShow=!this.isShow
				if(this.show1==true){
					this.show2=true
					this.isShow=true
				}else if(this.show2==true){
					this.show1=true
					this.isShow=true
				}
			},
			remove(){
				Toast('抱歉暂时不支持此功能哦！');
				this.show1=false
				this.show2=false
				this.isShow=false
			}
		}
	}
</script>

<style>
	.compile .compile-header{
		height: 2.75rem;
		box-sizing: border-box;
		padding-top: 0.6875rem;
		padding-bottom: 0.625rem;
		border-bottom: 1px solid #F0F1F2;
		background-color: #FFFFFF;
		position: relative;
	}
	.compile .compile-header span{
		float: left;
		margin-left: 1rem;
		color: #FF3955;
		font-weight: 600;
	}
	.compile .compile-header a{
		float: right;
		margin-right: 1rem;
		color: #FF3955;
		font-weight: 600;
	}
	.compile .compile-header h3{
		text-align: center;
	}
	.compile .tab-box{
		min-height: calc(100vh - (125rem / 16));;
	}
	.compile .tab-box ol li{
		position: relative;
	}
	.compile .book-layout{
		display: block;
		padding: 1rem;
		margin-left: 2rem;
		position: relative;
		overflow: hidden;
		transition: padding-left 0.15s;
	}
	.compile .book-cell{
		overflow: hidden;
	}
	.compile .book-title{
		line-height: 1.4;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		text-align: left;
		color: black;
		font-size: 1rem;
		display: inline-block;
	}
	.compile .book-title-r{
		float: right;
		line-height: 1.5rem;
		color: #808080;
		font-size: 0.8125rem;
		margin-left: 0.5rem;
	}
	.compile .tab-box ol li::after{
		content: "";
		display: block;
		border-top: 1px solid #F0F1F2;
		margin-top: -1px;
		margin-left: 1rem;
	}
	.compile .tab-book{
		display: inline-block;
		float: left;
		width: 3.375rem;
		margin-right: 1rem;
		box-shadow: 0 4px 8px rgba(51, 55, 61, 0.1);
	}
	.compile .tab-box .book-cell .book-title-r p{
		margin-top: 1.8rem;
		margin-bottom: 0;
	}
	.compile .tab-box .book-cell p{
		font-size: 0.875rem;
		color: #808080;
		margin: 0.35rem 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.choose{
		border-radius: 50%;
		border: 1px solid #C0C5CC;
		position: absolute;
		left: 1rem;
		top: 40%;
		color: white;
	}
	.isChoose{
		background-color: #FF3955;
		color: #FFFFFF;
		border: 1px solid transparent;
	}
	/*删除*/
	.compile .compile-aside{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: hidden;
		z-index: 3;
		animation-duration: 0.25s;
		height: 40px;
		background-color: #FFFFFF;
		color: #FF3955;
		text-align: center;
		line-height: 40px;
		border-top: 1px solid #F0F1F2;
	}
	.compile .compile-aside i{
		color: #FF3955;
		vertical-align: -0.1ex;
	}
	/*尾部*/
	footer{
		background-color: #FFFFFF;
	}
	.footer-link{
		color: #808080;
		font-size: 0.875rem;
		text-align: center;
		display: -webkit-box;
		justify-content: space-between;
		-webkit-box-pack: justify;
		padding: 0.5625rem 1.1875rem 0;
		border-top: 1px solid #F0F1F2;
	}
	.footer-link-a{
		color: #1A1A1A;
		display: block;
		padding: 0.5rem 0;
		-webkit-box-flex: 1;
	}
	.footer-copy{
		color: #808080;
		font-weight: 300;
		font-size: 0.75rem;
		text-align: center;
		padding-top: 0.25rem;
		padding-bottom: 1rem;
	}
</style>