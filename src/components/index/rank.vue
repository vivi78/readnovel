<template>
	<main class="rank">
		<!--头部-->
		<header class="user-header" id="header">
			<div class="head-left">
				<i class="iconfont" @click="$router.back(-1)" id="backicon">&#xe631;</i>
				<h1 id="headword">排行榜</h1>
			</div>
			<div class="head-right">
				<i class="iconfont" style="opacity: 0.7;">&#xe64a;</i>
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
		<!--排行榜-->
		<div class="rank">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">热销榜</mt-tab-item>
			  <mt-tab-item id="2">新书榜</mt-tab-item>
			  <mt-tab-item id="3">完本榜</mt-tab-item>
			  <mt-tab-item id="4">点击榜</mt-tab-item>
			  <mt-tab-item id="5">周推荐榜</mt-tab-item>
			  <mt-tab-item id="6">更新榜</mt-tab-item>
			  <mt-tab-item id="7">小阅风云榜</mt-tab-item>
			  <mt-tab-item id="8">礼物榜</mt-tab-item>
			  <mt-tab-item id="9">收藏榜</mt-tab-item>
			  <mt-tab-item id="10">阅文风云榜</mt-tab-item>
			  <mt-tab-item id="11" class="mul">签约作者新书榜</mt-tab-item>
			</mt-navbar>
			
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <ol class="jsBooks">
			    	<li class="book-li" v-for="(item,index) in data.bestsale">
			    		<router-link to="/details" class="book-layout">
			    			<div class="book-cover">
			    				<span class="top-num">{{item.num}}</span>
			    				<img :src="item.src" alt="" class="book-pic"/>
			    			</div>
							<div class="book-cell">
								<h4 class="book-title">{{item.title}}</h4>
								<p class="book-intro">{{item.intro}}</p>
								<div class="book-meta">
									<div class="book-meta-l">
										<i class="iconfont">&#xe608;</i>
										<span class="book-author">{{item.author}}</span>
									</div>
									<div class="book-meta-r">
										<span class="tag-small-group origin-right">
											<span class="tag-small yellow">{{item.yellow}}</span>
											<span class="tag-small blue">{{item.blue}}</span>
										</span>
									</div>
								</div>
							</div>
						</router-link>
			    	</li>
			    </ol>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <ol class="jsBooks">
			    	<li class="book-li" v-for="(item,index) in data.newnovel">
			    		<router-link to="/details" class="book-layout">
			    			<div class="book-cover">
			    				<span class="top-num">{{item.num}}</span>
			    				<img :src="item.src" alt="" class="book-pic"/>
			    			</div>
							<div class="book-cell">
								<h4 class="book-title">{{item.title}}</h4>
								<p class="book-intro">{{item.intro}}</p>
								<div class="book-meta">
									<div class="book-meta-l">
										<i class="iconfont">&#xe608;</i>
										<span class="book-author">{{item.author}}</span>
									</div>
									<div class="book-meta-r">
										<span class="tag-small-group origin-right">
											<span class="tag-small yellow">{{item.yellow}}</span>
											<span class="tag-small blue">{{item.blue}}</span>
										</span>
									</div>
								</div>
							</div>
						</router-link>
			    	</li>
			    </ol>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			    <ol class="jsBooks">
			    	<li class="book-li" v-for="(item,index) in data.endnovel">
			    		<router-link to="/details" class="book-layout">
			    			<div class="book-cover">
			    				<span class="top-num">{{item.num}}</span>
			    				<img :src="item.src" alt="" class="book-pic"/>
			    			</div>
							<div class="book-cell">
								<h4 class="book-title">{{item.title}}</h4>
								<p class="book-intro">{{item.intro}}</p>
								<div class="book-meta">
									<div class="book-meta-l">
										<i class="iconfont">&#xe608;</i>
										<span class="book-author">{{item.author}}</span>
									</div>
									<div class="book-meta-r">
										<span class="tag-small-group origin-right">
											<span class="tag-small yellow">{{item.yellow}}</span>
											<span class="tag-small blue">{{item.blue}}</span>
										</span>
									</div>
								</div>
							</div>
						</router-link>
			    	</li>
			    </ol>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="4">
			    <ol class="jsBooks">
			    	<li class="book-li" v-for="(item,index) in data.hit">
			    		<router-link to="/details" class="book-layout">
			    			<div class="book-cover">
			    				<span class="top-num">{{item.num}}</span>
			    				<img :src="item.src" alt="" class="book-pic"/>
			    			</div>
							<div class="book-cell">
								<h4 class="book-title">{{item.title}}</h4>
								<p class="book-intro">{{item.intro}}</p>
								<div class="book-meta">
									<div class="book-meta-l">
										<i class="iconfont">&#xe608;</i>
										<span class="book-author">{{item.author}}</span>
									</div>
									<div class="book-meta-r">
										<span class="tag-small-group origin-right">
											<span class="tag-small yellow">{{item.yellow}}</span>
											<span class="tag-small blue">{{item.blue}}</span>
										</span>
									</div>
								</div>
							</div>
						</router-link>
			    	</li>
			    </ol>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="5">
			    <ol class="jsBooks">
			    	<li class="book-li" v-for="(item,index) in data.week">
			    		<router-link to="/details" class="book-layout">
			    			<div class="book-cover">
			    				<span class="top-num">{{item.num}}</span>
			    				<img :src="item.src" alt="" class="book-pic"/>
			    			</div>
							<div class="book-cell">
								<h4 class="book-title">{{item.title}}</h4>
								<p class="book-intro">{{item.intro}}</p>
								<div class="book-meta">
									<div class="book-meta-l">
										<i class="iconfont">&#xe608;</i>
										<span class="book-author">{{item.author}}</span>
									</div>
									<div class="book-meta-r">
										<span class="tag-small-group origin-right">
											<span class="tag-small yellow">{{item.yellow}}</span>
											<span class="tag-small blue">{{item.blue}}</span>
										</span>
									</div>
								</div>
							</div>
						</router-link>
			    	</li>
			    </ol>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="6">
			    <ol class="jsBooks">
			    	<li class="book-li" v-for="(item,index) in data.update">
			    		<router-link to="/details" class="book-layout">
			    			<div class="book-cover">
			    				<span class="top-num">{{item.num}}</span>
			    				<img :src="item.src" alt="" class="book-pic"/>
			    			</div>
							<div class="book-cell">
								<h4 class="book-title">{{item.title}}</h4>
								<p class="book-intro">{{item.intro}}</p>
								<div class="book-meta">
									<div class="book-meta-l">
										<i class="iconfont">&#xe608;</i>
										<span class="book-author">{{item.author}}</span>
									</div>
									<div class="book-meta-r">
										<span class="tag-small-group origin-right">
											<span class="tag-small yellow">{{item.yellow}}</span>
											<span class="tag-small blue">{{item.blue}}</span>
										</span>
									</div>
								</div>
							</div>
						</router-link>
			    	</li>
			    </ol>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="7">
			    <ol class="jsBooks">
			    	<li class="book-li" v-for="(item,index) in data.xiaoyue">
			    		<router-link to="/details" class="book-layout">
			    			<div class="book-cover">
			    				<span class="top-num">{{item.num}}</span>
			    				<img :src="item.src" alt="" class="book-pic"/>
			    			</div>
							<div class="book-cell">
								<h4 class="book-title">{{item.title}}</h4>
								<p class="book-intro">{{item.intro}}</p>
								<div class="book-meta">
									<div class="book-meta-l">
										<i class="iconfont">&#xe608;</i>
										<span class="book-author">{{item.author}}</span>
									</div>
									<div class="book-meta-r">
										<span class="tag-small-group origin-right">
											<span class="tag-small yellow">{{item.yellow}}</span>
											<span class="tag-small blue">{{item.blue}}</span>
										</span>
									</div>
								</div>
							</div>
						</router-link>
			    	</li>
			    </ol>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="8">
			    <ol class="jsBooks">
			    	<li class="book-li" v-for="(item,index) in data.gift">
			    		<router-link to="/details" class="book-layout">
			    			<div class="book-cover">
			    				<span class="top-num">{{item.num}}</span>
			    				<img :src="item.src" alt="" class="book-pic"/>
			    			</div>
							<div class="book-cell">
								<h4 class="book-title">{{item.title}}</h4>
								<p class="book-intro">{{item.intro}}</p>
								<div class="book-meta">
									<div class="book-meta-l">
										<i class="iconfont">&#xe608;</i>
										<span class="book-author">{{item.author}}</span>
									</div>
									<div class="book-meta-r">
										<span class="tag-small-group origin-right">
											<span class="tag-small yellow">{{item.yellow}}</span>
											<span class="tag-small blue">{{item.blue}}</span>
										</span>
									</div>
								</div>
							</div>
						</router-link>
			    	</li>
			    </ol>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="9">
			    <ol class="jsBooks">
			    	<li class="book-li" v-for="(item,index) in data.collect">
			    		<router-link to="/details" class="book-layout">
			    			<div class="book-cover">
			    				<span class="top-num">{{item.num}}</span>
			    				<img :src="item.src" alt="" class="book-pic"/>
			    			</div>
							<div class="book-cell">
								<h4 class="book-title">{{item.title}}</h4>
								<p class="book-intro">{{item.intro}}</p>
								<div class="book-meta">
									<div class="book-meta-l">
										<i class="iconfont">&#xe608;</i>
										<span class="book-author">{{item.author}}</span>
									</div>
									<div class="book-meta-r">
										<span class="tag-small-group origin-right">
											<span class="tag-small yellow">{{item.yellow}}</span>
											<span class="tag-small blue">{{item.blue}}</span>
										</span>
									</div>
								</div>
							</div>
						</router-link>
			    	</li>
			    </ol>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="10">
			    <ol class="jsBooks">
			    	<li class="book-li" v-for="(item,index) in data.yuewen">
			    		<router-link to="/details" class="book-layout">
			    			<div class="book-cover">
			    				<span class="top-num">{{item.num}}</span>
			    				<img :src="item.src" alt="" class="book-pic"/>
			    			</div>
							<div class="book-cell">
								<h4 class="book-title">{{item.title}}</h4>
								<p class="book-intro">{{item.intro}}</p>
								<div class="book-meta">
									<div class="book-meta-l">
										<i class="iconfont">&#xe608;</i>
										<span class="book-author">{{item.author}}</span>
									</div>
									<div class="book-meta-r">
										<span class="tag-small-group origin-right">
											<span class="tag-small yellow">{{item.yellow}}</span>
											<span class="tag-small blue">{{item.blue}}</span>
										</span>
									</div>
								</div>
							</div>
						</router-link>
			    	</li>
			    </ol>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="11">
			    <ol class="jsBooks">
			    	<li class="book-li" v-for="(item,index) in data.anthor">
			    		<router-link to="/details" class="book-layout">
			    			<div class="book-cover">
			    				<span class="top-num">{{item.num}}</span>
			    				<img :src="item.src" alt="" class="book-pic"/>
			    			</div>
							<div class="book-cell">
								<h4 class="book-title">{{item.title}}</h4>
								<p class="book-intro">{{item.intro}}</p>
								<div class="book-meta">
									<div class="book-meta-l">
										<i class="iconfont">&#xe608;</i>
										<span class="book-author">{{item.author}}</span>
									</div>
									<div class="book-meta-r">
										<span class="tag-small-group origin-right">
											<span class="tag-small yellow">{{item.yellow}}</span>
											<span class="tag-small blue">{{item.blue}}</span>
										</span>
									</div>
								</div>
							</div>
						</router-link>
			    	</li>
			    </ol>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				isTrue:false,
				inPut:"",
				selected:"1",
				data:[]
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
		},
		mounted(){
			this.$http.get('./data/rank-data.json')
		  	.then((res)=>{
		  		this.data=res.data;
		  	})
		  	.catch(()=>{
		  		console.log('请求失败了！')
		  	})
		  	.finally(()=>{
		  		console.log('请求结束啦！')
		  	})
		}
	}
</script>

<style scoped="scoped">
	.user-header{
		color: #FF3955;
		background: white;
		border-bottom: 1px solid #F0F1F2;
		z-index: 5;
		position: fixed;
	}
	.user-header .head-left h1{
		color: #000000;
	}
</style>

<style>
	main.rank{
		background: #FFFFFF;
	}
	/*头部*/
	.user-header{
		width: 100%;
		/*position: relative;*/
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
	/*排行榜*/
	.rank{
		position: relative;
		overflow: hidden;
	}
	.rank .mint-navbar{
		float: left;
		position: fixed;
		top: 2.75rem;
		bottom: 0;
		overflow-y: auto;
		width: 22%;
		display: block;
		border-right: 1px solid #F0F1F2;
	}
	.rank .mint-navbar::-webkit-scrollbar{
		display:none;
	}
	.rank .mint-tab-item{
		position: relative;
		color: #808080;
		font-size: 0.75rem;
		line-height: 0.75rem;
		text-align: center;
		display: table;
		width: 100%;
	}
	.rank .mint-tab-item::before{
		content: "";
		height: 60%;
		position: absolute;
		left: 0;
		top: 0.625rem;
		box-sizing: border-box;
		vertical-align: middle;
		color: transparent;
		border-left: 2px solid #FFFFFF;
	}
	.rank .mint-navbar .mint-tab-item.is-selected{
		border-bottom: none;
		color: #FF3955;
		margin-bottom: -2px;
	}
	.rank .is-selected.mint-tab-item::before{
		border-left: 2px solid #FF3955;
	}
	.mint-tab-item-label{
		font-size: 0.75rem;
	}
	.rank .mint-navbar .mint-tab-item.is-selected .mint-tab-item-label{
		font-size: 0.875rem;
	}
	.rank .mint-tab-container{
		float: right;
		width: 78%;
		top: 2.75rem;
	}
	.rank .mint-tab-item:last-child .mint-tab-item-label{
		max-width: 5em;
		margin-left: 0.6rem;
	}
	/**/
	.book-li::after{
		content: "";
		display: block;
		border-bottom: 1px solid #f0f1f2;
		margin-left: 1rem;
		margin-top: -1px;
	}
	.rank .book-li:last-child{
		margin-bottom: 3rem;
	}
	.book-li:last-child::after{
		display: none;
	}
	.book-layout{
		display: block;
		padding: 1rem;
		position: relative;
		overflow: hidden;
		transition: padding-left 0.15s;
	}
	.book-cover{
		width: 22%;
		float: left;
		margin-right: 0.5rem;
		box-shadow: 0 4px 8px rgba(51,55,61,0.1);
	}
	.top-num{
		min-width: 0.625rem;
		width: auto;
		height: 0.875rem;
		display: block;
		padding: 0 0.125rem;
		color: #FFFFFF;
		background-color: #FF3955;
		text-align: center;
		line-height: 0.875rem;
		position: absolute;
	}
	.book-pic{
		width: 100%;
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
	.book-intro{
		line-height: 1.2;
		overflow: hidden;
		margin: 0.5rem 0 0.7rem 0;
		margin-right: 0;
		word-break: break-all;
		color: #808080;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.book-meta{
		font-size: 0.75rem;
		overflow: hidden;
		line-height: 1.5rem;
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
		line-height: 0.75rem;
		margin-left: -3px;
		vertical-align: -0.5ex;
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
	.blue{
		color: #4284ee;
		border: 1px solid rgba(66,132,238,0.3);
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