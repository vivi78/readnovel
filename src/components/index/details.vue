<template>
	<main class="details">
		<!--头部-->
		<header class="user-header" id="header">
			<div class="head-left">
				<i class="iconfont" @click="$router.back(-1)" id="backicon">&#xe631;</i>
				<h1 id="headword">嫡女复仇逆袭记</h1>
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
		<!--介绍-->
		<div class="book-detail">
			<img src="../../assets/img/details.jpg" alt="" class="book-cover-blur"/>
			<div class="book-detail-info">
				<div class="book-layout">
					<img src="../../assets/img/details.jpg" alt="" class="book-cover"/>
					<div class="book-cell">
						<h2 class="book-title">嫡女复仇逆袭记</h2>
						<p class="book-author">胡瓜叶</p>
						<p>古代言情/古代情缘</p>
						<p>30.06万字<span class="char-pipe">|</span>连载</p>
					</div>
				</div>
				<div class="book-detail-btn">
					<ul class="btn-group">
						<li class="btn-group-cell">
							<span class="btn-normal free">免费试读</span>
						</li>
						<li class="btn-group-cell">
							<span class="btn-normal add-shelf">加书架</span>
						</li>
						<li class="btn-group-cell">
							<span class="btn-normal add-list">加书单</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--摘要-->
		<div class="module module-merge">
			<section class="book-summary enabled" id="bookSummary">
				<div @click="disappear()">
					被火神打入人间的花灵失去了记忆也失去了本事。<br />
					十世受苦死后都成了厉鬼，恨得想毁天灭地，但又被抓走重入轮回继续受苦。<br />
					第十世修炼成灵，觉醒花灵真身，发现十世真相。<br />
					原来一切并不是意外。<br />
					这一世，她重来，回来救难产的母亲，发卖继母，粉碎阴谋，护住家族。<br />
					有穿越女，重生女，心机女，纠纷不断。<br />
					主界面有人界，修仙界，鬼界，灵界交织。<br />
					这一世，很爽，绝不脑残，善恶交错。<br />
				</div>
				<span class="book-summary-more" @click="appear()"  id="down">
					<i class="iconfont">&#xe61b;</i>
				</span>
			</section>
			<div class="book-status">
				<div class="book-meta-l">
					<strong class="book-spt">目录</strong>
				</div>
				<div class="book-meta-r">
					<p>
						29分钟前<span class="char-dot">·</span>连载至第一百零一章 毁容的日子
					</p>
					<i class="iconfont">&#xe627;</i>
				</div>
			</div>
		</div>
		<!--打赏-->
		<div class="module">
			<ul class="btn-group">
				<li class="btn-group-cell">
					<router-link to="/" class="book-pay">
						<i class="icon icon-paymonth"></i>
						<h5 class="book-pay-h">月票</h5>
						<p class="book-pay-p">0票</p>
					</router-link>
				</li>
				<li class="btn-group-cell">
					<router-link to="/" class="book-pay">
						<i class="icon icon-paylike"></i>
						<h5 class="book-pay-h">推荐票</h5>
						<p class="book-pay-p">0推荐票</p>
					</router-link>
				</li>
				<li class="btn-group-cell">
					<router-link to="/" class="book-pay">
						<i class="icon icon-gift"></i>
						<h5 class="book-pay-h">礼物</h5>
						<p class="book-pay-p">本周0人次</p>
					</router-link>
				</li>
				<li class="btn-group-cell">
					<router-link to="/" class="book-pay">
						<i class="icon icon-fans"></i>
						<h5 class="book-pay-h">迷妹</h5>
						<p class="book-pay-p">0人</p>
					</router-link>
				</li>
			</ul>
		</div>
		<!--书评-->
		<div class="module book-details">
			<div class="module-header">
				<h3>书评区</h3>
			</div>
			<div class="module-content">
				<div class="module-top">
					<img src="../../assets/img/book.svg"/>
					<p>暂无书评</p>
				</div>
				<p class="book-write">写书评，抢沙发</p>
			</div>
		</div>
		<!--其他作品-->
		<div class="module book-details">
			<div class="module-header">
				<h3>作家的其他作品</h3>
			</div>
			<div class="module-content">
				<div class="book-other">
					<img src="../../assets/img/details-other.jpg" alt="" />
					<p>庶女言路传</p>
				</div>
			</div>
		</div>
		<!--同类推荐-->
		<div class="module book-details">
			<div class="module-header">
				<h3>同类推荐</h3>
			</div>
			<div class="module-content">
				<div class="module-slide">
					<ol class="module-slide-ol">
						<li class="module-slide-li" v-for="(item,index) in data.details">
							<router-link to="/details" class="module-slide-a">
								<img :src="item.src" class="module-slide-img"/>
								<figcaption class="module-slide-caption">{{item.title}}</figcaption>
								<p class="module-slide-author">
									<span>{{item.author}}</span>
								</p>
							</router-link>
						</li>
					</ol>
				</div>
			</div>
		</div>
		<!--版权信息-->
		<div class="module book-details">
			<div class="module-header">
				<h3>版权信息</h3>
			</div>
			<div class="module-content">
				<div class="book-copyright">
					<p>上架时间:2019-05-08</p>
					<p>版权:小说阅读网</p>
					<p>本书由小说阅读网电子版制作与发行</p>
					<p>版权所有·侵权必究</p>
				</div>
			</div>
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
				isTrue:false,
				inPut:"",
				data:[],
				hide:false
			}
		},
		methods:{
			show(){
				this.isTrue=!this.isTrue;
				console.log(this.isTrue)
				if(this.isTrue==true){
					header.style.background="white"
					menuicon.innerHTML="&#xe630;"
					guide.style.visibility="visible"
				}else if(this.isTrue==false){
					header.style.background="none"
					menuicon.innerHTML="&#xe62c;"
					guide.style.visibility="hidden"
				}
			},
			handleScroll(){
				let that = this
			    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			    that.scrollTop = scrollTop
		    	if(that.scrollTop>=500){
		    		that.hide=true
		    	}else{
		    		that.hide=false
		    	}
			},
			backTop() {
				let that = this
			    let timer = setInterval(() => {
			        let ispeed = Math.floor(-that.scrollTop / 5)
			        window.pageYOffset = document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
			        if (that.scrollTop === 0) {
			          clearInterval(timer)
			        }
			    }, 16)
	       	},
	        appear(){
	       		bookSummary.style.height="auto";
	       		down.style.visibility="hidden";
	        },
	        disappear(){
	        	bookSummary.style.height="5.92rem";
	        	down.style.visibility="visible"
	        },
	        yes(){
		    	searchPopup.style.visibility="visible";
		       	searchInput.focus();
		    },
		    no(){
		       	searchPopup.style.visibility="hidden";
		    }
		},
		mounted(){
			this.$http.get('./data/other-data.json')
		  	.then((res)=>{
		  		this.data=res.data;
		  		console.log('请求成功了！')
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
	.user-header{
		color: #FF3955;
		background: none;
	}
	.user-header .head-left h1{
		color: #000000;
	}
</style>

<style>
	main.details{
		background: #F6F7F9;
	}
	/*头部*/
	.user-header{
		width: 100%;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
		padding-top: 0.7rem;
		z-index: 5;
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
	/*介绍*/
	.book-detail{
		position: relative;
		overflow: hidden;
		margin: 0;
		margin-top: -2.75rem;
		background-color: #FFFFFF;
	}
	.book-cover-blur{
		position: absolute;
		top: calc(50% - 85.5vw);
		width: 100%;
		height: 175vw;
		opacity: calc(0.1 + 0.05);
		filter: blur(calc(17px + 1px));
	}
	.book-detail-info{
		position: relative;
		padding-top: 2.75rem;
		background: linear-gradient(to top, #FFF, rgba(255, 255, 255, 0) 8rem) no-repeat center bottom;
	}
	.book-layout{
		display: block;
		padding: 1rem;
		position: relative;
		overflow: hidden;
		transition: padding-left 0.15s;
	}
	.book-detail .book-cover{
		display: inline-block;
		border-radius: 2px;
		box-shadow: none;
		width: 25%;
		/*width: 5.25rem;*/
		float: left;
	}
	.book-detail-info .book-cell{
		display: inline-block;
		line-height: 1.4rem;
		margin-top: 0.8rem;
		margin-left: 0.5rem;
	}
	.book-title{
		display: block;
		line-height: 1.4;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		text-align: left;
		color: black;
		font-size: 1rem;
	}
	.book-detail-info .book-author{
		font-size: 0.8125rem;
		margin-left: 0;
		line-height: 0.8125rem;
	}
	.book-detail-info .char-pipe{
		padding: 0 0.5ch;
	}
	.book-detail-btn{
		padding: 0 1rem 1rem;
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
	}
	.btn-normal{
		display: block;
		width: 90%;
		padding: 0;
		font-size: 0.8125rem;
		border-radius: 0.125rem;
		text-align: center;
		line-height: 1.875rem;
	}
	.free{
		background-color: #FF3955;
		color: #FFFFFF;
	}
	.add-shelf,.add-list{
		background-color: #FFFFFF;
		box-shadow: inset 1px 0 #e3e4e6, inset 0 1px #e3e4e6, inset 0 -1px #e3e4e6, inset -1px 0 #e3e4e6;
	}
	/*概要*/
	.module{
		margin: 0.75rem 0;
		background-color: #FFFFFF;
	}
	.module-merge{
		margin: 0;
	}
	.book-summary{
		width: auto;
		padding-right: 1rem;
		margin-left: 1rem;
		border-top: 1rem solid transparent;
		border-bottom: 1rem solid transparent;
		font-size: 0.875rem;
		line-height: 1.5rem;
		text-align: justify;
		overflow: hidden;
		position: relative;
		box-shadow: 0 1px #f0f1f2, 0 -1px #f0f1f2;
	}
	.book-summary.enabled{
		height: 5.92rem;
		max-height: none;
		transition: height 0.25s ease-in;
	}
	.book-summary-more{
		width: 2rem;
		height: 1.5rem;
		position: absolute;
		right: 1rem;
		bottom: 0;
		text-align: right;
	}
	.book-status{
		padding: 0 1rem;
		line-height: 2.75rem;
		font-size: 0.75rem;
		overflow: hidden;
	}
	.book-meta-l{
		float: left;
	}
	.book-meta-r{
		float: right;
		position: relative;
	}
	.book-status .book-meta-r{
		max-width: calc(100% - (120rem / 16));
		padding-right: 0.75rem;
		color: #808080;
	}
	.book-spt{
		font-size: 1rem;
		vertical-align: top;
	}
	.char-dot{
		padding: 0 0.5ch;
	}
	.book-meta-r p{
		/*段落中文本不进行换行*/
		white-space: nowrap;
		/*显示省略符号来代表被修剪的文本。*/
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.book-meta-r i{
		position: absolute;
		top: 0;
		right: 0;
		margin-top: 0.85rem;
	}
	.book-pay{
		display: block;
		padding: 0.75rem 0.5rem;
		text-align: center;
		position: relative;
	}
	.book-pay-p{
		color: #808080;
	}
	.book-pay>.icon{
		display: block;
		width: 36px;
		height: 36px;
		background-image: url(../../assets/img/home-nav.png);
		background-size: 188px 176px;
		margin: 0 auto 0.125rem;
	}
	.icon-paymonth{
		background-position: -40px -40px;
	}
	.icon-paylike{
		background-position: -80px 0;
	}
	.icon-gift{
		background-position: -40px -80px;
	}
	.icon-fans{
		background-position: 0 0;
	}
	.book-details>.module-header{
		padding: 0.5rem 1rem 0.5rem 0;
		margin-left: 1rem;
		line-height: 1.75rem;
		border-top: 0;
		box-shadow: 0 1px #f0f1f2, 0 -1px #f0f1f2;
	}
	.book-details h3{
		font-size: 1rem;
	}
	.module-top{
		text-align: center;
		height: 200px;
	}
	.module-top img{
		margin-bottom: 12px;
		margin-top: 70px;
	}
	.module-top p{
		color: #808080;
		font-size: 0.8125rem;
	}
	.module-content .book-write{
		color: #FF3955;
		line-height: 2.75rem;
		text-align: center;
		border-top: 1px solid #F0F1F2;
	}
	.book-other{
		padding: 0.75rem 0.5rem 0.5rem 1rem;
	}
	.book-other img{
		width: 20%;
	}
	.book-other p{
		margin: 0.5rem 0 0.25rem;
		font-size: 0.8125rem;
	}
	.module-slide-ol{
		padding-left: 0.5rem;
		white-space: nowrap;
		overflow-x: auto;
		overflow-y: hidden;
		min-height: 10.75rem;
		position: relative;
	}
	.module-slide-ol::-webkit-scrollbar{
		display:none;
	}
	.module-slide-li{
		display: inline-block;
		vertical-align: top;
		white-space: normal;
		margin: 0;
		width: calc(100%/4.2);
	}
	.module-slide-a{
		display: block;
		width: 80%;
		padding: 0.75rem 0.35rem 0.5rem;
		position: relative;
	}
	.module-slide-img{
		display: block;
		width: 100%;
		box-shadow: 0 4px 8px rgba(51,55,61,0.1);
	}
	.module-slide-caption{
		margin: 0.5rem 0 0.25rem;
		font-size: 0.8125rem;
		max-height: 2.2rem;
		overflow: hidden;
		font-weight: 500;
		text-align: left;
		color: black;
	}
	.module-slide-author{
		font-size: 0.75rem;
		color: #808080;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		text-align: left;
	}
	.book-copyright{
		color: #808080;
		padding: 0.75rem 1rem;
		font-size: 0.875rem;
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
</style>