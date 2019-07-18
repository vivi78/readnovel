<template>
	<main class="category">
		<!--头部-->
		<header class="user-header" id="header">
			<div class="head-left">
				<i class="iconfont" @click="$router.back(-1)" id="backicon">&#xe631;</i>
				<h1 id="headword">分类</h1>
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
		<!--女生-->
		<div class="channel">
			<div class="channel-header">
				<div class="channel-header-l">
					<h3 class="channel-title">女生频道</h3>
				</div>
			</div>
			<ol class="book-ol book-ol-normal">
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/girl1.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">现代言情</h4>
							<p class="book-tags">50376本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/girl2.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">古代言情</h4>
							<p class="book-tags">54397本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/girl3.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">浪漫青春</h4>
							<p class="book-tags">13473本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/girl4.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">玄幻言情</h4>
							<p class="book-tags">15145本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/girl5.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">仙侠奇缘</h4>
							<p class="book-tags">6503本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/girl6.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">悬疑灵异</h4>
							<p class="book-tags">2552本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/girl7.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">科幻空间</h4>
							<p class="book-tags">5531本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/girl8.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">游戏竞技</h4>
							<p class="book-tags">1628本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/girl9.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">短篇小说</h4>
							<p class="book-tags">2240本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/girl10.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">轻小说</h4>
							<p class="book-tags">1249本</p>
						</div>
					</router-link>
				</li>
			</ol>
		</div>
		<!--男生-->
		<div class="channel boy">
			<div class="channel-header">
				<div class="channel-header-l">
					<h3 class="channel-title boy-title">男生频道</h3>
				</div>
			</div>
			<ol class="book-ol book-ol-normal">
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy1.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">玄幻</h4>
							<p class="book-tags">18132本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy2.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">奇幻</h4>
							<p class="book-tags">6458本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy3.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">武侠</h4>
							<p class="book-tags">5535本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy4.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">仙侠</h4>
							<p class="book-tags">9714本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy5.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">都市</h4>
							<p class="book-tags">18081本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy6.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">现实</h4>
							<p class="book-tags">1019本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy7.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">军事</h4>
							<p class="book-tags">1003本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy8.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">历史</h4>
							<p class="book-tags">9193本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy9.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">游戏</h4>
							<p class="book-tags">8587本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy10.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">体育</h4>
							<p class="book-tags">1916本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy11.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">科幻</h4>
							<p class="book-tags">10200本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy12.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">灵异</h4>
							<p class="book-tags">8268本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy13.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">轻小说</h4>
							<p class="book-tags">8859本</p>
						</div>
					</router-link>
				</li>
				<li class="book-li book-backcolor">
					<router-link to="/details" class="book-sort">
						<img src="../../assets/img/boy14.jpg" alt="" class="book-pic"/>
						<div class="book-cell">
							<h4 class="book-title">短篇</h4>
							<p class="book-tags">3436本</p>
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
	</main>
</template>

<script>
	export default{
		data(){
			return{
				isTrue:false,
				inPut:""
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
		/*color: black;*/
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
		/*padding: 0 1rem;*/
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
	/*女生*/
	.channel{
		margin: 0;
		background-color: #FFFFFF;
		overflow: hidden;
		/*margin-top: 2.75rem;*/
		border-top: 1px solid #F0F1F2;
	}
	.channel-header{
		margin-bottom: 1.8rem;
		border-top: 1rem solid transparent;
		padding: 0 1rem;
	}
	.channel-header-l{
		float: left;
	}
	.channel-header-r{
		float: right;
		/*min-width: 4rem;*/
	}
	.channel-title{
		display: inline;
		color: #1a1a1a;
		font-size: 1rem;
	}
	.channel-title::before{
		content: "";
		width: 0.625rem;
		height: 1em;
		display: inline-block;
		box-sizing: border-box;
		border-left: 2px solid #FF3955;
		vertical-align: -.22ex;
	}
	.channel .book-li{
		float: left;
		width: 50%;
	}
	.channel .book-sort{
		display: block;
		padding: 0.75rem 0;
		position: relative;
		overflow: hidden;
	}
	.channel .book-pic{
		float: left;
		margin-right: 0.75rem;
		margin-left: 1rem;
		box-shadow: 0 1px 3px rgba(0,0,0,0.3);
		width: 20%;
		/*width: 3.4rem;*/
	}
	.channel .book-cell{
		display: inline-block;
		overflow: hidden;
	}
	.channel .book-title{
		font-size: 1rem;
		line-height: 1.1;
		margin-top: 0.5rem;
	}
	.channel .book-tags{
		font-size: 0.75rem;
		margin: 0.48rem 0;
		line-height: 0.75rem;
		color: #808080;
	}
	.book-backcolor{
		background-color: #fff5f8;
	}
	.boy{
		margin-top: 0;
	}
	.boy-title::before{
		border-left:2px solid #3988ff;
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