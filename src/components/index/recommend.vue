<template>
	<main>
		<!--头部-->
		<header class="user-header" id="header">
			<div class="head-left">
				<i class="iconfont" @click="$router.back(-1)" id="backicon">&#xe631;</i>
				<h1 id="headword">书荒救济站</h1>
			</div>
		</header>
		<!--中间-->
		<div class="module module-merge">
			<ol class="book-ol book-ol-normal">
				<li class="book-li" v-for="(item,index) in data.jiuji">
					<router-link to="/details" class="book-layout">
						<img :src="item.src" alt="" class="book-cover"/>
						<div class="book-cell">
							<h4 class="book-title">{{item.title}}</h4>
							<p class="book-desc">{{item.desc}}</p>
							<div class="book-meta">
								<div class="book-meta-l">
									<i class="iconfont">&#xe608;</i>
									<span class="book-author">{{item.author}}</span>
								</div>
								<div class="book-meta-r">
									<span class="tag-small-group origin-right">
										<span class="tag-small yellow">{{item.yellow}}</span>
										<span class="tag-small red">{{item.red}}</span>
										<span class="tag-small blue">{{item.blue}}</span>
									</span>
								</div>
							</div>
						</div>
					</router-link>
				</li>
			</ol>
		</div>
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
		<!--返回顶部-->
		<div class="footer-backtop-circle" @click="backTop()" v-show="hide">
			<i class="iconfont">&#xeb8e;</i>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				scroll:'',
				data:[],
				hide:false
			}
		},
		methods:{
			handleScroll(){
		    	this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
//		    	console.log(this.scroll);//到浏览器顶部的距离
		    	if(this.scroll>=500){
		    		this.hide=true
		    	}else{
		    		this.hide=false
		    	}
			},
			backTop() {
	            document.documentElement.scrollTop = 0
	        }
		},
		mounted(){
		  	this.$http.get('./data/other-data.json')
		  	.then((res)=>{
		  		this.data=res.data;
		  	})
		  	.catch(()=>{
		  		console.log('请求失败了！')
		  	})
		  	.finally(()=>{
		  		console.log('请求结束啦！')
		  	})
		  	window.addEventListener('scroll', this.handleScroll,true);
		},
		destroyed(){
			window.removeEventListener('scroll', this.handleScroll);
		}
	}
</script>

<style scoped="scoped">
	body{
		background: #FFFFFF;
	}
	.user-header{
		color: #FF3955;
		background: white;
		border-bottom: 1px solid #F0F1F2;
	}
	.user-header .head-left h1{
		color: #000000;
	}
</style>

<style>
	/*头部*/
	.user-header{
		width: 100%;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
		padding-top: 0.7rem;
	}
	.user-header .head-left{
		width: 50%;
		float: left;
		line-height: 1.5rem;
	}
	.user-header .head-left>i{
		margin: 0 0.6rem;
		font-size: 1.5rem;
		opacity: 0.6;
		text-align: center;
		display: inline-block;
		vertical-align: 0.2ex;
	}
	.user-header .head-left h1{
		font-size: 1rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-weight: 400;
		display: inline-block;
	}
	/*最新完结*/
	.module{
		margin: 0.75rem 0;
		background-color: #FFFFFF;
	}
	.module-merge{
		margin: 0;
	}
	.book-layout{
		display: block;
		padding: 1rem;
		position: relative;
		overflow: hidden;
		transition: padding-left 0.15s;
	}
	.book-li::after{
		content: "";
		display: block;
		border-bottom: 1px solid #f0f1f2;
		margin-left: 1rem;
		margin-top: -1px;
	}
	.book-li:last-child::after{
		display: none;
	}
	.book-cover{
		width: 20%;
		float: left;
		margin-right: 0.5rem;
		box-shadow: 0 4px 8px rgba(51,55,61,0.1);
	}
	.book-cell{
		overflow: hidden;
	}
	.book-title{
		line-height: 1.4;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		text-align: left;
		color: black;
		font-size: 1rem;
	}
	.book-ol-normal .book-desc{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-height: 1.1875rem;
	}
	.book-desc{
		margin: 0.5rem 0;
		font-size: 0.8125rem;
		color: #808080;
		overflow: hidden;
		text-align: left;
	}
	.book-meta{
		font-size: 0.75rem;
		overflow: hidden;
		line-height: 1.7;
	}
	.book-meta-l{
		float: left;
	}
	.book-meta-r{
		float: right;
		position: relative;
	}
	.book-author{
		display: inline-block;
		color: #808080;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 0.75rem;
		overflow: hidden;
		line-height: 0.75rem;
		margin-left: -3px;
	}
	.tag-small-group{
		position: absolute;
		right: 0;
		display: inline-block;
		white-space: nowrap;
	}
	.tag-small{
		display: inline-block;
		line-height: 1.5;
		padding: 0 0.25em;
		vertical-align: bottom;
		border: 1px solid;
		font-size: 0.75rem;
	}
	.yellow{
		color: #ffa100;
		border: 1px solid rgba(255,161,0,0.3);
	}
	.red{
		color: #FF3955;
		border: 1px solid rgba(255,57,85,0.3);
	}
	.blue{
		color: #4284ee;
		border: 1px solid rgba(66,132,238,0.3);
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
	.footer-backtop-circle{
		position: fixed;
		z-index: 1;
		bottom: 1rem;
		right: 1rem;
		width: 2.75rem;
		height: 2.75rem;
		background-color: rgba(0,0,0,0.6);
		color: #FFFFFF;
		border-radius: 50%;
	}
	.footer-backtop-circle>i{
		display: inline-block;
		transform: rotate(90deg);
		font-size: 1.75rem;
		margin-left: 0.875rem;
		margin-top: 0.43525rem;
		vertical-align: -0.25ex;
	}
</style>