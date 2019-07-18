<template>
	<main class="user">
		<!--头部-->
		<header class="user-header" id="header">
			<div class="head-left">
				<i class="iconfont" @click="$router.back(-1)" id="backicon">&#xe631;</i>
				<h1 id="headword">个人中心</h1>
			</div>
			<div class="head-right">
				<i class="iconfont" id="searchicon" @click="yes()">&#xe62f;</i>
				<i class="iconfont" @click="show()" id="menuicon">&#xe62c;</i>
			</div>
		</header>
		<!--搜索页-->
		<div class="search-popup" id="searchPopup">
			<div class="search-header">
				<form class="search-form">
					<div class="search-area">
						<i class="iconfont">&#xe62f;</i>
						<input type="search" class="search-input" placeholder="" v-model="inPut" id="searchInput"/>
					</div>
					<span class="search-cancel" @click="no()">取消</span>
				</form>
			</div>
			<div class="search-history">
				<div class="search-title-bar">
					<h5 class="search-title">大家都在搜</h5>
				</div>
				<div class="search-tags">
					<router-link to="/details" class="btn-line">试婚老公，要给力</router-link>
					<router-link to="/details" class="btn-line">腹黑狂妃太凶猛</router-link>
					<router-link to="/details" class="btn-line">凤帝九倾</router-link>
					<router-link to="/details" class="btn-line">你好，痞子老公！</router-link>
					<router-link to="/details" class="btn-line">公子有疾我有药</router-link>
				</div>
			</div>
		</div>
		<!--导航-->
		<div class="guide" id="guide">
			<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
				<span class="guide-overlay" v-show="isTrue" @click="show()"></span>
			</transition>
			<transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
				<div class="guide-content" v-show="isTrue">
					<ul class="guide-nav">
						<li class="guide-nav-li">
							<router-link to="/index" class="guide-nav-a">
								<i class="icon icon-home"></i>
								<h4 class="guide-nav-h">首页</h4>
							</router-link>
						</li>
						<li class="guide-nav-li">
							<router-link to="/category" class="guide-nav-a">
								<i class="icon icon-sort"></i>
								<h4 class="guide-nav-h">分类</h4>
							</router-link>
						</li>
						<li class="guide-nav-li">
							<router-link to="/rank" class="guide-nav-a">
								<i class="icon icon-rank"></i>
								<h4 class="guide-nav-h">排行榜</h4>
							</router-link>
						</li>
						<li class="guide-nav-li">
							<router-link to="/welfare" class="guide-nav-a">
								<i class="icon icon-fuli"></i>
								<h4 class="guide-nav-h">福利</h4>
							</router-link>
						</li>
						<li class="guide-nav-li">
							<router-link to="/finish" class="guide-nav-a">
								<i class="icon icon-end"></i>
								<h4 class="guide-nav-h">完本</h4>
							</router-link>
						</li>
						<li class="guide-nav-li">
							<router-link to="/user" class="guide-nav-a">
								<i class="icon icon-account"></i>
								<h4 class="guide-nav-h">账户</h4>
							</router-link>
						</li>
					</ul>
					<div class="guide-footer">
						<router-link to="/bookshelf" class="btn-primary">我的书架</router-link>
					</div>
				</div>
			</transition>
		</div>
		<!--个人信息-->
		<div class="center-header">
			<img src="../../assets/img/user.jpg" alt="" class="center-header-img"/>
			<p class="center-header-p">
				<span class="user-name">{{username}}</span>
				<i class="iconfont" @click="amend()">&#xe63a;</i>
			</p>
		</div>
		<!--修改名字-->
		<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
			<aside class="aside" v-show="isShow">
				<i class="aside-overlay" @click="abolish()"></i>
				<div class="aside-popup">
					<form class="aside-input">
						<div class="input-btn">
							<button class="btn-cancel" id="cancel" @click="abolish()">取消</button>
							<button type="submit" class="btn-save" id="save" @click="hold()">保存</button>
						</div>
						<div class="input-text">
							<textarea class="input-word" placeholder="请输入2-12个汉字、数字或字母" id="nickname"></textarea>
						</div>
					</form>
				</div>
			</aside>
		</transition>
		<div class="module module-merge of">
			<span class="book-money">0阅币<i class="iconfont">&#xe627;</i></span>
			<div class="center-rel">
				<router-link to="/user" class="btn-promary-small">充值</router-link>
			</div>
		</div>
		<div class="module module-merge">
			<ul class="btn-group">
				<li class="btn-group-cell">
					<output>0</output>
					<p>月票</p>
				</li>
				<li class="btn-group-cell">
					<output>0</output>
					<p>推荐票</p>
				</li>
				<li class="btn-group-cell">
					<output>0</output>
					<p>限免卷</p>
				</li>
			</ul>
		</div>
		<nav class="module">
			<ul class="center-nav-ol">
				<li class="center-nav-li">
					<router-link to="/user" class="center-nav-layout">
						<h3 class="center-nav-title">
							<i class="icon-center icon-center-vip"></i>会员中心
						</h3>
						<i class="iconfont">&#xe627;</i>
					</router-link>
				</li>
				<li class="center-nav-li">
					<router-link to="/user" class="center-nav-layout">
						<h3 class="center-nav-title">
							<i class=" icon-center icon-center-message"></i>消息中心
						</h3>
						<i class="iconfont">&#xe627;</i>
						<span class="center-nav-numtip">99+</span>
					</router-link>
				</li>
				<li class="center-nav-li">
					<router-link to="/user" class="center-nav-layout">
						<h3 class="center-nav-title">
							<i class="icon-center icon-center-safe"></i>安全中心
						</h3>
						<i class="iconfont">&#xe627;</i>
					</router-link>
				</li>
				<li class="center-nav-li">
					<router-link to="/user" class="center-nav-layout">
						<h3 class="center-nav-title">
							<i class="icon-center icon-center-help"></i>帮助中心
						</h3>
						<i class="iconfont">&#xe627;</i>
					</router-link>
				</li>
				<li class="center-nav-li">
					<router-link to="/user" class="center-nav-layout">
						<h3 class="center-nav-title">
							<i class="icon-center icon-center-exp"></i>问题反馈
						</h3>
						<i class="iconfont">&#xe627;</i>
					</router-link>
				</li>
			</ul>
		</nav>
		<!--退出登录-->
		<div class="module">
			<router-link to="/login" class="center-logout">退出登录</router-link>
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
	</main>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				isTrue:false,
				isShow:false,
				inPut:"",
				username:"小阅书友111111000000"
			}
		},
		methods:{
			show(){
				this.isTrue=!this.isTrue;
				console.log(this.isTrue)
				if(this.isTrue==true){
					header.style.background="white"
					header.style.color="black"
					headword.style.color="black"
					menuicon.innerHTML="&#xe630;"
					guide.style.visibility="visible"
				}else if(this.isTrue==false){
					header.style.background="none"
					header.style.color="white"
					headword.style.color="white"
					menuicon.innerHTML="&#xe62c;"
					guide.style.visibility="hidden"
				}
			},
			yes(){
		    	searchPopup.style.visibility="visible";
		       	searchInput.focus();
		    },
		    no(){
		       	searchPopup.style.visibility="hidden";
		    },
		    amend(){
		    	this.isShow=true;
		    },
		    abolish(){
		    	this.isShow=false;
		    },
		    hold(){
		    	console.log(nickname.value);
		    	if(nickname.value==""){
		    		Toast('昵称不能为空');
		    	}else{
		    		this.username=nickname.value;
		    		this.isShow=false;
		    		nickname.value="";
		    	}
		    }
		}
	}
</script>

<style scoped="scoped">
	.user-header{
		color: #FFFFFF;
		background: none;
	}
	.user-header .head-left h1{
		color: #FFFFFF;
	}
</style>

<style>
	main.user{
		background: #f6f7f9;
	}
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
		/*color: #FFFFFF;*/
	}
	.user-header .head-right{
		float: right;
		padding: 0 0.375rem;
		line-height: 1.5rem;
	}
	.user-header .head-right i{
		font-size: 1.25rem;
		padding: 0 0.375rem;
		opacity: 0.9;
	}
	/*导航*/
	.guide{
		position: fixed;
		left: 0;
		top: 2.5rem;
		right: 0;
		bottom: 0;
		z-index: 3;
		overflow: hidden;
		visibility: hidden;
		transition: visibility 0.25s;
	}
	.guide-overlay{
		position: absolute;
		left: 0;
		right: 0;
		top: 2.75rem;
		bottom: 0;
		background-color: #000000;
		opacity: 0.6!important;
		animation-duration: 0.25s;
	}
	.guide-content{
		padding: 0 1rem;
		position: relative;
		background-color: #FFFFFF;
		overflow: hidden;
		animation-duration: 0.25s;
	}
	.guide-nav{
		text-align: justify;
		font-size: 0;
		overflow: hidden;
	}
	.guide-nav-li{
		width: calc(100%/3);
		margin: 0;
		display: inline-block;
	}
	.guide-nav .guide-nav-a{
		margin: 0.75rem 0;
	}
	.guide-nav-a{
		display: inline-block;
		width: 100%;
		text-align: center;
		font-size: 0.75rem;
		position: relative;
		padding: 1.9rem 0;
	}
	.guide-nav-a>.icon{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 1.625rem;
		margin: auto;
	}
	.icon-home{
		display: block;
		background-image: url(../../assets/img/home-nav.png);
		background-size: 188px 176px;
		background-position: 0px -80px;
		width: 36px;
		height: 36px;
	}
	.icon-sort{
		display: block;
		background-image: url(../../assets/img/home-nav.png);
		background-size: 188px 176px;
		background-position: -120px -40px;
		width: 36px;
		height: 36px;
	}
	.icon-rank{
		display: block;
		background-image: url(../../assets/img/home-nav.png);
		background-size: 188px 176px;
		background-position: 0px -40px;
		width: 36px;
		height: 36px;
	}
	.icon-fuli{
		display: block;
		background-image: url(../../assets/img/home-nav.png);
		background-size: 188px 176px;
		background-position: -80px -80px;
		width: 36px;
		height: 36px;
	}
	.icon-end{
		display: block;
		background-image: url(../../assets/img/home-nav.png);
		background-size: 188px 176px;
		background-position: -120px 0px;
		width: 36px;
		height: 36px;
	}
	.icon-account{
		display: block;
		background-image: url(../../assets/img/home-nav.png);
		background-size: 188px 176px;
		background-position: -40px 0px;
		width: 36px;
		height: 36px;
	}
	.guide-nav-h{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0.1875rem;
		color: #1A1A1A;
		font-weight: normal;
	}
	.guide-footer{
		text-align: center;
		margin-top: 1rem;
		margin-bottom: 1.5rem;
	}
	.btn-primary{
		width: 75%;
		display: inline-block;
		padding-left: 2ch;
		padding-right: 2ch;
		background-color: #FF3955;
		color: #FFFFFF;
		font-size: 0.875rem;
		border-radius: 99px;
		line-height: 2.25rem;
		text-align: center;
	}
	/*个人信息*/
	.center-header{
		background: url(../../assets/img/user-bg.jpg) no-repeat center;
		background-size: cover;
		color: #FFFFFF;
		overflow: hidden;
		margin-top: -2.75rem;
		text-align: center;
	}
	.center-header-img{
		border: 1px solid rgba(255,255,255,0.4);
		width: 15%;
		border-radius: 4rem;
		margin-top: 5rem;
		vertical-align: bottom;
	}
	.center-header-p{
		margin: 0.25rem 0 0.125rem;
		padding-bottom: 2.1rem;
	}
	.center-header-p>i{
		font-size: 0.875rem;
		opacity: 0.8;
		vertical-align: 0.1ex;
	}
	.user-name{
		font-size: 0.875rem;
	}
	.module{
		margin: 0.75rem 0;
		background-color: #FFFFFF;
	}
	.module-merge{
		margin: 0!important;
	}
	.of{
		overflow: hidden;
	}
	.book-money{
		display: inline-block;
		line-height: 1.25rem;
		padding: 1rem;
		float: left;
		font-size: 0.875rem;
		color: #1A1A1A;
	}
	.book-money>i{
		vertical-align: -0.1ex;
	}
	.center-rel{
		float: right;
		padding: 0.8rem;
	}
	.btn-promary-small{
		display: inline-block;
		padding-left: 2ch;
		padding-right: 2ch;
		background-color: #FF3955;
		line-height: 1.625rem;
		font-size: 0.875rem;
		color: #FFFFFF;
		border-radius: 99px;
	}
	.of::after{
		content: "";
		display: block;
		border-bottom: 1px solid #F0F1F2;
		margin-left: 1rem;
		margin-top: 3.3rem;
	}
	.btn-group{
		display: table;
		width: 100%;
		table-layout: fixed;
		margin-left: auto;
		margin-right: auto;
	}
	.btn-group-cell{
		display: table-cell;
		font-weight: 400;
		text-align: center;
		font-size: 0.75rem;
		padding-bottom: 0.6rem;
	}
	.btn-group-cell output{
		display: block;
		font-size: 1.125rem;
		margin: 0.5rem 0 -1px;
	}
	/**/
	.center-nav-ol{
		line-height: 1.25rem;
	}
	.center-nav-li{
		display: list-item;
		text-align: -webkit-match-parent;
	}
	.center-nav-li::after{
		content: "";
		display: block;
		border-bottom: 1px solid #F0F1F2;
		margin-left: 1rem;
		margin-top: -1px;
	}
	.center-nav-layout{
		display: block;
		padding: 1rem;
		position: relative;
		overflow: hidden;
	}
	.center-nav-layout>i{
		display: inline-block;
		float: right;
		/*vertical-align: .5ex;*/
		font-size: 1.25rem;
		color: #808080;
		margin-top: 3px;
		opacity: 0.6;
	}
	.center-nav-title{
		line-height: 1.4;
		color: #1A1A1A;
	}
	.center-nav-ol .center-nav-title{
		float: left;
		font-size: 0.875rem;
	}
	.center-nav-ol .center-nav-title>i{
		margin-right: 0.75rem;
		display: inline-block;
		vertical-align: -1ex;
	}
	.icon-center{
		width: 24px;
		height: 24px;
		background-image: url(../../assets/img/user-nav.png);
		background-size: 212px 162px;
	}
	.icon-center-vip{
		background-position: -56px -138px;
	}
	.icon-center-message{
		background-position: -84px -138px;
	}
	.icon-center-safe{
		background-position: -28px -138px;
	}
	.icon-center-help{
		background-position: -142px -84px;
	}
	.icon-center-exp{
		background-position: 0px -138px;
	}
	.center-nav-numtip{
		background: #f02a49;
		color: #FFFFFF;
		border-radius: 0.625rem;
		text-align: center;
		padding: 0 0.375rem;
		margin-top: 2px;
		font-size: 0.75rem;
		float: right;
		margin-right: 1.2rem;
	}
	/*退出登录*/
	.center-logout{
		display: block;
		font-size: 0.875rem;
		color: #FF3955;
		line-height: 2.75rem;
		text-align: center;
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
	/*搜索页*/
	.search-popup{
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 20;
		visibility: hidden;
	}
	.search-header{
		/*height: 2.75rem;*/
		padding-top: 0.7rem;
		padding-bottom: 0.7rem;
		border-bottom: 1px solid #F0F1F2;
		background-color: #FFFFFF;
		position: relative;
		box-sizing: border-box;
	}
	.search-form{
		overflow: hidden;
	}
	.search-area{
		height: 80%;
		background-color: #F6F7F9;
		border-radius: 0.25rem;
		position: absolute;
		left: 1rem;
		right: 3.75rem;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	.search-area i{
		position: absolute;
		left: 0.5rem;
		top: 0;
		bottom: 0;
		color: #808080;
		margin: auto;
	}
	.search-input{
		width: 100%;
		height: inherit;
		border: 0 none;
		background: none;
		padding: 1.05rem 2rem;
		font-size: 0.875rem;
	}
	.search-cancel{
		float: right;
		margin-right: 1rem;
		color: #FF3955;
		font-size: 0.875rem;
	}
	.search-history{
		overflow: hidden;
		/*height: 134px;*/
	}
	.search-title-bar{
		line-height: 1.8125rem;
		padding: 1rem 1rem 0;
		background-color: rgba(0,0,0,0.03);
		overflow: hidden;
	}
	.search-title{
		font-size: 0.8125rem;
		color: #808080;
		font-weight: 400;
		float: left;
	}
	.search-tags{
		padding: 0.25rem 0.5rem 0.75rem 1rem;
	}
	.btn-line{
		display: inline-block;
		line-height: 1.6875rem;
		border: 1px solid;
		border-radius: 99px;
		padding: 0 0.625rem;
		font-size: 0.8125rem;
		text-align: center;
		margin: 0.5rem 0.5rem 0 0;
		color: #808080;
	}
	/*修改昵称*/
	.aside{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: hidden;
		z-index: 3;
		animation-duration: 0.1s;
	}
	.aside-overlay{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #000;
		opacity: 0.6;
	}
	.aside-popup{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #FFFFFF;
	}
	.input-btn{
		border-bottom: 1px solid #F0F1F2;
		overflow: hidden;
	}
	.btn-cancel, .btn-save{
		width: 40%;
		line-height: 2.75rem;
		border: 0;
		background-color: #FFFFFF;
		padding: 0;
		outline: none;
		font-size: 0.875rem;
	}
	.btn-cancel{
		float: left;
		text-align: left;
		margin-left: 1rem;
	}
	.btn-save{
		color: #FF3955;
		float: right;
		text-align: right;
		margin-right: 1rem;
	}
	.input-text{
		padding: 1rem;
	}
	.input-word{
		border: 0;
		padding: 0;
		width: 100%;
		height: 5.5rem;
		resize: none;
		outline: 0 none;
		font-size: 1rem;
	}
</style>