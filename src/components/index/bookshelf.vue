<template>
	<main class="bookshelf">
		<!--头部-->
		<header class="user-header" id="header">
			<div class="head-left">
				<i class="iconfont" @click="$router.back(-1)" id="backicon">&#xe631;</i>
			</div>
			<div class="tab">
				<mt-navbar v-model="selected">
				  <mt-tab-item id="1">我的书架</mt-tab-item>
				  <mt-tab-item id="2">最近阅读</mt-tab-item>
				</mt-navbar>
			</div>
			<div class="head-right">
				<i class="iconfont" id="searchicon" @click="yes()">&#xe62f;</i>
				<i class="iconfont" @click="show()" id="menuicon">&#xe62c;</i>
			</div>
		</header>
		<div class="tab-content">
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <div class="tab-box">
			    	<div class="tab-header">
			    		<div class="tab-l">
			    			<span>共2本</span>
			    			<router-link to="/compile">编辑</router-link>
			    		</div>
			    		<router-link to="/booklist" class="tab-a">我的书单</router-link>
			    	</div>
			    	<div class="tab-list">
			    		<router-link to="/recommend" class="recnew-list">
			    			<ul class="list-left">
			    				<li class="list-cover book1">
			    					<img src="../../assets/img/shelf1.jpg" alt="" class="tab-img"/>
			    				</li>
			    				<li class="list-cover book2">
			    					<img src="../../assets/img/shelf2.jpg" alt="" class="tab-img"/>
			    				</li>
			    				<li class="list-cover book3">
			    					<img src="../../assets/img/shelf3.jpg" alt="" class="tab-img"/>
			    				</li>
			    			</ul>
			    			<div class="list-right">
			    				<h2 class="recnew-title">书荒了？</h2>
			    				<p class="recnew-slogan">看看这些新书吧！</p>
			    			</div>
			    			<i class="iconfont">&#xe627;</i>
			    		</router-link>
			    		<!--<div class="tab-null">
			    			<img src="../../assets/img/book.svg"/>你的分组是空的
			    		</div>-->
			    		<div class="tab-box">
					    	<ol>
					    		<li>
									<router-link to="/details" class="book-layout" style="padding: 1rem 0;">
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
								</li><li>
									<router-link to="/details" class="book-layout" style="padding: 1rem 0;">
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
			    	</div>
			    </div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <div class="tab-box">
			    	<ol>
			    		<li>
							<router-link to="/details" class="book-layout">
								<img src="../../assets/img/details.jpg" alt="" class="tab-book"/>
								<div class="book-cell">
									<div class="book-title-x">
										<h4 class="book-title">嫡女复仇逆袭记</h4>
										<div class="book-title-r">
											继续阅读<i class="iconfont">&#xe627;</i>
											<p>1小时前</p>
										</div>
									</div>
									<p><i class="iconfont">&#xe608;</i>胡瓜叶</p>
									<p>读至 第一章 香消玉殒</p>
								</div>
							</router-link>
						</li>
						<li>
							<router-link to="/details" class="book-layout">
								<img src="../../assets/img/list.jpg" alt="" class="tab-book"/>
								<div class="book-cell">
									<div class="book-title-x">
										<h4 class="book-title">余生漫漫皆为你</h4>
										<div class="book-title-r">
											继续阅读<i class="iconfont">&#xe627;</i>
											<p>3天前</p>
										</div>
									</div>
									<p><i class="iconfont">&#xe608;</i>浮屠妖</p>
									<p>读至 第6章 只能二选一</p>
								</div>
							</router-link>
						</li>
					</ol>
					<p class="tab-li-more">以上为全部阅读记录</p>
			    </div>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
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
				<span class="guide-overlay" v-show="isTrue"></span>
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
	export default{
		data(){
			return{
				isTrue:false,
				inPut:"",
				selected:"1"
			}
		},
		methods:{
			show(){
				this.isTrue=!this.isTrue;
				console.log(this.isTrue)
				if(this.isTrue==true){
					menuicon.innerHTML="&#xe630;"
					guide.style.visibility="visible"
				}else if(this.isTrue==false){
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
		    }
		}
	}
</script>

<style scoped="scoped">
	.user-header{
		color: #FF3955;
		background: white;
		border-bottom: 1px solid #F0F1F2;
	}
	.user-header .head-left{
		width: 25%;
	}
	.user-header .head-left h1{
		color: #000000;
	}
</style>

<style>
	main.bookshelf{
		background: #FFFFFF;
	}
	/*头部*/
	.user-header{
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		padding-top: 0.7rem;
	}
	.user-header .head-left{
		/*width: 25%;*/
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
	.user-header .head-right{
		float: right;
		padding: 0 0.375rem;
		line-height: 1.5rem;
	}
	.user-header .head-right i{
		font-size: 1.25rem;
		padding: 0 0.375rem;
		opacity: 0.9;
		vertical-align: 0.25ex;
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
		width: calc(100% / 3);
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
	/**/
	.tab{
		display: inline-block;
		width: 45%;
		margin: auto;
		overflow: hidden;
		float: left;
		line-height: 1.5rem;
		margin-top: -1%;
	}
	.tab-content{
		position: relative;
		top: 0;
		overflow: hidden;
		min-height: calc(100vh - (120rem / 16));
		background-color: #FFFFFF;
	}
	.tab .mint-tab-item{
		background-color: #FFFFFF;
		color: #FF3955;
		line-height: 1.5rem;
		padding: 6px 0;
		border: 1px solid #FF3955;
	}
	.tab .mint-tab-item:first-child{
		border-radius: 4px 0 0 4px;
	}
	.tab .mint-tab-item:last-child{
		border-radius: 0 4px 4px 0;
	}
	.tab .mint-navbar .mint-tab-item.is-selected{
		margin-bottom: 0;
		border-bottom: 1px solid #FF3955;
		background-color: #FF3955;
		color: #FFFFFF;
	}
	.tab .mint-navbar .mint-tab-item:last-child{
		border-right: 1px solid #FF3955;
	}
	.tab .mint-tab-item-label{
		font-size: 0.75rem;
	}
	.tab-box,.tab-header{
		overflow: hidden;
	}
	.tab-a{
		display: inline-block;
		border-radius: 1.75rem;
		border: 1px solid #FF3955;
		color: #FF3955;
		float: right;
		padding: 0.2rem 0.6rem;
		margin-top: 1rem;
		margin-right: 1rem;
		font-size: 0.875rem;
	}
	.tab-list{
		padding: 0.5rem 1rem;
	}
	.recnew-list{
		display: block;
		border: 1px solid #f9f9fa;
		border-radius: 0.3125rem;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
		overflow: hidden;
	}
	.list-left{
		position: relative;
		/*padding: 3.5rem;*/
	}
	.list-cover{
		position: absolute;
		width: 18%;
	}
	.list-cover.book1{
		left: 1.875rem;
		top: 0.75rem;
		z-index: 1;
	}
	.list-cover.book2{
		left: 0.43525rem;
		top: 1rem;
	}
	.list-cover.book3{
		left: 3.75rem;
		top: 1rem;
	}
	.tab-img{
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
		float: left;
		margin-right: 0.5rem;
	}
	.list-cover.book1 .tab-img{
		width: 100%;
	}
	.list-cover.book2 .tab-img{
		width: 95%;
	}
	.list-cover.book3 .tab-img{
		width: 95%;
	}
	.list-right{
		display: inline-block;
		padding: 1.5rem 0.5rem 2rem 8.5rem;
	}
	.recnew-title{
		margin-top: 0.5rem;
		font-size: 0.875rem;
	}
	.recnew-slogan{
		margin-top: 0.625rem;
		font-size: 0.875rem;
		color: #808080;
	}
	.recnew-list i{
		display: block;
		float: right;
		margin-right: 0.5rem;
		margin-top: 2.5rem;
		font-size: 1.5rem;
	}
	.tab-null{
		margin: auto;
		color: #808080;
		text-align: center;
		font-size: 0.8125rem;
		margin-top: 8%;
	}
	.tab-null img{
		display: block;
		text-align: center;
		margin: auto;
		margin-bottom: 0.75rem;
	}
	.tab-l{
		float: left;
		margin-top: 1.5rem;
		margin-left: 1rem;
	}
	.tab-l span{
		font-weight: 600;
	}
	.tab-l a{
		color: #5B92E9;
	}
	/*最近阅读*/
	.book-layout{
		display: block;
		padding: 1rem;
		position: relative;
		overflow: hidden;
		transition: padding-left 0.15s;
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
		display: inline-block;
	}
	.book-title-r{
		float: right;
		line-height: 1.5rem;
		color: #808080;
		font-size: 0.8125rem;
		margin-left: 0.5rem;
	}
	.tab-content .book-cell .book-title-r p{
		margin-top: 1.8rem;
		margin-bottom: 0;
	}
	.tab-content .book-cell p{
		font-size: 0.875rem;
		color: #808080;
		margin: 0.35rem 0;
	}
	.tab-li-more{
		text-align: center;
		line-height: 2.75rem;
		font-size: 0.8125rem;
		color: #808080;
	}
	.tab-box ol li::after{
		content: "";
		display: block;
		border-top: 1px solid #F0F1F2;
		margin-top: -1px;
		margin-left: 1rem;
	}
	.tab-box ol li:last-child::after{
		border-top: none;
	}
	.tab-book{
		display: inline-block;
		float: left;
		width: 16%;
		margin-right: 1rem;
		box-shadow: 0 4px 8px rgba(51, 55, 61, 0.1);
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