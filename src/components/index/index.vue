<template>
	<main>
		<!--头部-->
		<header class="header">
			<router-link to="/index">
				<img src="../../assets/img/logo.svg" alt="" class="logo"/>
			</router-link>
			<div class="top-right">
				<router-link to="/user">
					<img src="../../assets/img/user.jpg" />
				</router-link>
				<router-link to="/bookshelf">
					<i class="iconfont">&#xe60c;</i>
				</router-link>
			</div>
		</header>
		<section>
			<!--轮播-->
			<div class="slide-nav">
				<mt-swipe :auto="4000">
				  <mt-swipe-item>
				  	<router-link to="/details">
				  		<img src="../../assets/img/lunbo1 (1).jpg" />
				  	</router-link>
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<router-link to="/details">
				  		<img src="../../assets/img/lunbo2 (1).jpg" />
				  	</router-link>
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<router-link to="/details">
				  		<img src="../../assets/img/lunbo3 (1).jpg" />
				  	</router-link>
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<router-link to="/details">
				  		<img src="../../assets/img/lunbo4 (1).jpg" />
				  	</router-link>
				  </mt-swipe-item>
				</mt-swipe>
			</div>
			<!--搜索栏-->
			<div class="search-nav" @click="yes()">
				<i class="iconfont">&#xe62f;</i>
				冥冥之中喜欢你
			</div>
		</section>
		<!--搜索页-->
		<div class="search-popup" id="searchPopup">
			<div class="search-header">
				<form class="search-form">
					<div class="search-area">
						<i class="iconfont">&#xe62f;</i>
						<input type="search" class="search-input" placeholder="冥冥之中喜欢你" v-model="inPut" id="searchInput"/>
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
		<!--中间导航-->
		<div class="home-nav">
			<ul>
				<li class="home-nav-li">
					<router-link to="/category" class="home-nav-a">
						<i class="icon icon-sort"></i>
						<h4 class="home-nav-text">分类</h4>
					</router-link>
				</li>
				<li class="home-nav-li">
					<router-link to="/rank" class="home-nav-a">
						<i class="icon icon-rank"></i>
						<h4 class="home-nav-text">排行榜</h4>
					</router-link>
				</li>
				<li class="home-nav-li">
					<router-link to="/welfare" class="home-nav-a">
						<i class="icon icon-fuli"></i>
						<h4 class="home-nav-text">福利</h4>
					</router-link>
				</li>
				<li class="home-nav-li">
					<router-link to="/newbook" class="home-nav-a">
						<i class="icon icon-newbook"></i>
						<h4 class="home-nav-text">新书</h4>
					</router-link>
				</li>
				<li class="home-nav-li">
					<router-link to="/finish" class="home-nav-a">
						<i class="icon icon-end"></i>
						<h4 class="home-nav-text">完本</h4>
					</router-link>
				</li>
			</ul>
		</div>
		<!--本期强推-->
		<div class="module this-recommend">
			<div class="module-header">
				<div class="module-header-l">
					<h3 class="module-title">本期强推</h3>
				</div>
			</div>
			<div class="module-slide">
				<ol class="module-slide-ol">
					<li class="module-slide-li" v-for="(item,index) in data.book">
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
		<!--新书抢鲜-->
		<div class="module new-book">
			<div class="module-header">
				<div class="module-header-l">
					<h3 class="module-title">新书抢鲜</h3>
				</div>
				<div class="module-header-r">
					<router-link to="/more" class="module-header-btn">
						更多<i class="iconfont">&#xe627;</i>
					</router-link>
				</div>
			</div>
			<ol class="book-ol book-ol-normal">
				<li class="book-li" v-for="(item,index) in data.newbook">
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
		<!--限时免费-->
		<div class="module limited-free">
			<div class="module-header">
				<div class="module-header-l">
					<h3 class="module-title">限时免费</h3>
				</div>
				<time class="time module-header-r">
					<span class="time-day">{{day}}</span>
					<span class="time-hour">{{hr}}</span>
					<span class="time-minute">{{min}}</span>
					<span class="time-second">{{sec}}</span>
				</time>
			</div>
			<div class="module-slide">
				<ol class="module-slide-ol">
					<li class="module-slide-li" v-for="(item,index) in data.free">
						<router-link to="/details" class="module-slide-a">
							<span class="corner">
								<em>限免</em>
							</span>
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
		<!--编辑推荐-->
		<div class="module editors-recommend">
			<div class="module-header">
				<div class="module-header-l">
					<h3 class="module-title">编辑推荐</h3>
				</div>
			</div>
			<div class="module-slide">
				<ol class="module-slide-ol">
					<li class="module-slide-li" v-for="(item,index) in data.recommend">
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
		<!--排行榜-->
		<div class="module index-rank">
			<div class="module-header">
				<div class="module-header-l">
					<h3 class="module-title">排行榜</h3>
				</div>
				<div class="module-header-r">
					<router-link to="/more" class="module-header-btn">
						更多<i class="iconfont">&#xe627;</i>
					</router-link>
				</div>
			</div>
			<div class="module-tab">
				<mt-navbar v-model="selected1">
				  <mt-tab-item id="1">热销榜</mt-tab-item>
				  <mt-tab-item id="2">点击榜</mt-tab-item>
				  <mt-tab-item id="3">新书榜</mt-tab-item>
				  <mt-tab-item id="4">完本榜</mt-tab-item>
				</mt-navbar>
			</div>
			<div class="module-slide">
				<!-- tab-container -->
				<mt-tab-container v-model="selected1">
				  <mt-tab-container-item id="1">
				    <ol class="module-slide-ol">
						<li class="module-slide-li" v-for="(item,index) in rank.hotsale">
							<router-link to="/details" class="module-slide-a">
								<span class="corner-rank">
									<em class="color">{{item.grade}}</em>
								</span>
								<img :src="item.src" class="module-slide-img"/>
								<figcaption class="module-slide-caption">{{item.title}}</figcaption>
								<p class="module-slide-author">
									<span>{{item.author}}</span>
								</p>
							</router-link>
						</li>
					</ol>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
				    <ol class="module-slide-ol">
						<li class="module-slide-li" v-for="(item,index) in rank.click">
							<router-link to="/details" class="module-slide-a">
								<span class="corner-rank">
									<em class="color">{{item.grade}}</em>
								</span>
								<img :src="item.src" class="module-slide-img"/>
								<figcaption class="module-slide-caption">{{item.title}}</figcaption>
								<p class="module-slide-author">
									<span>{{item.author}}</span>
								</p>
							</router-link>
						</li>
					</ol>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="3">
				    <ol class="module-slide-ol">
						<li class="module-slide-li" v-for="(item,index) in rank.new">
							<router-link to="/details" class="module-slide-a">
								<span class="corner-rank">
									<em class="color">{{item.grade}}</em>
								</span>
								<img :src="item.src" class="module-slide-img"/>
								<figcaption class="module-slide-caption">{{item.title}}</figcaption>
								<p class="module-slide-author">
									<span>{{item.author}}</span>
								</p>
							</router-link>
						</li>
					</ol>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="4">
				    <ol class="module-slide-ol">
						<li class="module-slide-li" v-for="(item,index) in rank.end">
							<router-link to="/details" class="module-slide-a">
								<span class="corner-rank">
									<em class="color">{{item.grade}}</em>
								</span>
								<img :src="item.src" class="module-slide-img"/>
								<figcaption class="module-slide-caption">{{item.title}}</figcaption>
								<p class="module-slide-author">
									<span>{{item.author}}</span>
								</p>
							</router-link>
						</li>
					</ol>
				  </mt-tab-container-item>
				</mt-tab-container>
			</div>
		</div>
		<!--分类推荐-->
		<div class="module classify">
			<div class="module-header">
				<div class="module-header-l">
					<h3 class="module-title">分类推荐</h3>
				</div>
				<div class="module-header-r">
					<router-link to="/more" class="module-header-btn">
						更多<i class="iconfont">&#xe627;</i>
					</router-link>
				</div>
			</div>
			<!--part1-->
			<div class="module-tab">
				<mt-navbar v-model="selected2">
				  <mt-tab-item id="1">现代言情</mt-tab-item>
				  <mt-tab-item id="2">古代言情</mt-tab-item>
				  <mt-tab-item id="3">豪门总裁</mt-tab-item>
				  <mt-tab-item id="4">玄幻言情</mt-tab-item>
				</mt-navbar>
			</div>
			<div class="module-slide line">
				<!-- tab-container -->
				<mt-tab-container v-model="selected2">
				  <mt-tab-container-item id="1">
				    <ol class="module-slide-ol">
						<li class="module-slide-li" v-for="(item,index) in classify.modern">
							<router-link to="/details" class="module-slide-a">
								<img :src="item.src" class="module-slide-img"/>
								<figcaption class="module-slide-caption">{{item.title}}</figcaption>
								<p class="module-slide-author">
									<span>{{item.author}}</span>
								</p>
							</router-link>
						</li>
					</ol>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
				    <ol class="module-slide-ol">
						<li class="module-slide-li" v-for="(item,index) in classify.ancient">
							<router-link to="/details" class="module-slide-a">
								<img :src="item.src" class="module-slide-img"/>
								<figcaption class="module-slide-caption">{{item.title}}</figcaption>
								<p class="module-slide-author">
									<span>{{item.author}}</span>
								</p>
							</router-link>
						</li>
					</ol>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="3">
				    <ol class="module-slide-ol">
						<li class="module-slide-li" v-for="(item,index) in classify.rich">
							<router-link to="/details" class="module-slide-a">
								<img :src="item.src" class="module-slide-img"/>
								<figcaption class="module-slide-caption">{{item.title}}</figcaption>
								<p class="module-slide-author">
									<span>{{item.author}}</span>
								</p>
							</router-link>
						</li>
					</ol>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="4">
				    <ol class="module-slide-ol">
						<li class="module-slide-li" v-for="(item,index) in classify.fantasy">
							<router-link to="/details" class="module-slide-a">
								<img :src="item.src" class="module-slide-img"/>
								<figcaption class="module-slide-caption">{{item.title}}</figcaption>
								<p class="module-slide-author">
									<span>{{item.author}}</span>
								</p>
							</router-link>
						</li>
					</ol>
				  </mt-tab-container-item>
				</mt-tab-container>
			</div>
			<!--part2-->
			<div class="module-tab" style="margin-top: 0.5rem;">
				<mt-navbar v-model="selected3">
				  <mt-tab-item id="1">穿越架空</mt-tab-item>
				  <mt-tab-item id="2">仙侠奇缘</mt-tab-item>
				  <mt-tab-item id="3">青春灵异</mt-tab-item>
				  <mt-tab-item id="4">科幻网游</mt-tab-item>
				</mt-navbar>
			</div>
			<div class="module-slide">
				<!-- tab-container -->
				<mt-tab-container v-model="selected3">
				  <mt-tab-container-item id="1">
				    <ol class="module-slide-ol">
						<li class="module-slide-li" v-for="(item,index) in classify.through">
							<router-link to="/details" class="module-slide-a">
								<img :src="item.src" class="module-slide-img"/>
								<figcaption class="module-slide-caption">{{item.title}}</figcaption>
								<p class="module-slide-author">
									<span>{{item.author}}</span>
								</p>
							</router-link>
						</li>
					</ol>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
				    <ol class="module-slide-ol">
						<li class="module-slide-li" v-for="(item,index) in classify.fairy">
							<router-link to="/details" class="module-slide-a">
								<img :src="item.src" class="module-slide-img"/>
								<figcaption class="module-slide-caption">{{item.title}}</figcaption>
								<p class="module-slide-author">
									<span>{{item.author}}</span>
								</p>
							</router-link>
						</li>
					</ol>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="3">
				    <ol class="module-slide-ol">
						<li class="module-slide-li" v-for="(item,index) in classify.youth">
							<router-link to="/details" class="module-slide-a">
								<img :src="item.src" class="module-slide-img"/>
								<figcaption class="module-slide-caption">{{item.title}}</figcaption>
								<p class="module-slide-author">
									<span>{{item.author}}</span>
								</p>
							</router-link>
						</li>
					</ol>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="4">
				    <ol class="module-slide-ol">
						<li class="module-slide-li" v-for="(item,index) in classify.science">
							<router-link to="/details" class="module-slide-a">
								<img :src="item.src" class="module-slide-img"/>
								<figcaption class="module-slide-caption">{{item.title}}</figcaption>
								<p class="module-slide-author">
									<span>{{item.author}}</span>
								</p>
							</router-link>
						</li>
					</ol>
				  </mt-tab-container-item>
				</mt-tab-container>
			</div>
		</div>
		<!--人气完本-->
		<div class="module hot">
			<div class="module-header">
				<div class="module-header-l">
					<h3 class="module-title">人气完本</h3>
				</div>
				<div class="module-header-r">
					<router-link to="/more" class="module-header-btn">
						更多<i class="iconfont">&#xe627;</i>
					</router-link>
				</div>
			</div>
			<ol class="book-ol book-ol-normal">
				<li class="book-li" v-for="(item,index) in data.hotend">
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
		<!--最近阅读-->
		<div class="read" id="read" @click="record()">
			<router-link to="/index" class="home-recent-read">
				<span class="btn-primary-circle">最近阅读</span>
			</router-link>
		</div>
		<transition  enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
			<aside class="aside" id="readRecord" v-show="show">
				<i class="aside-overlay" @click="record()"></i>
				<div class="aside-content">
					<div class="aside-header">
						<h3 class="aside-title">最近阅读</h3>
					</div>
					<div class="aside-main">
						<ol>
							<li>
								<router-link to="/details" class="book-layout">
									<div class="book-cell">
										<div class="book-title-x">
											<h4 class="book-title">余生漫漫皆为你</h4>
											<div class="book-title-r">
												继续阅读<i class="iconfont">&#xe627;</i>
											</div>
										</div>
										<p>读至 第6章 只能二选一</p>
										<p>3天前</p>
									</div>
								</router-link>
							</li>
						</ol>
						<p class="aside-li-more">以上为全部阅读记录</p>
					</div>
					<div class="aside-footer">
						<router-link to="/bookshelf" class="aside-btn">我的书架</router-link>
					</div>
				</div>
			</aside>
		</transition>
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
				selected1:"1",
				selected2:"1",
				selected3:"1",
				scroll:'',
				data:[],
				rank:[],
				classify:[],
				inPut:"",
				show:false,
				hide:false,
				day:0,
				hr:0,
				min:0,
				sec:0
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
	       	},
	       	yes(){
	       		searchPopup.style.visibility="visible";
	       		searchInput.focus();
	       	},
	       	no(){
	       		searchPopup.style.visibility="hidden";
	       	},
	       	record(){
	       		this.show=!this.show
	       	},
	       	countdown(){
	       		const end = Date.parse(new Date('2019-08-01'))
				const now = Date.parse(new Date())
			  	const msec = end - now
			  	let day = parseInt(msec / 1000 / 60 / 60 / 24)
			  	let hr = parseInt(msec / 1000 / 60 / 60 % 24)
				let min = parseInt(msec / 1000 / 60 % 60)
			  	let sec = parseInt(msec / 1000 % 60)
			  	this.day = day
			  	this.hr = hr > 9 ? hr : '0' + hr
			  	this.min = min > 9 ? min : '0' + min
			  	this.sec = sec > 9 ? sec : '0' + sec
			  	const that = this
			  	setTimeout(function () {
			    	that.countdown()
			  	}, 1000)
			}
		},
		mounted(){
			this.$http.get('./data/index-data.json')
		  	.then((res)=>{
		  		this.data=res.data;
		  		this.rank=res.data.rank[0];
		  		this.classify=res.data.classify[0];
		  		console.log('请求成功了！')
		  	})
		  	.catch(()=>{
		  		console.log('请求失败了！')
		  	})
		  	.finally(()=>{
		  		console.log('请求结束啦！')
		  	})
			window.addEventListener('scroll', this.handleScroll,true);
			this.countdown();
		},
		destroyed(){
			window.removeEventListener('scroll', this.handleScroll);
		}
	}
</script>

<style scoped="scoped">
	body{
		background: #F6F7F9;
	}
	.home-nav-li{
		width: calc(100% / 5.4);
	}
	.home-nav-a>.icon{
		width: 36px;
		height: 36px;
	}
</style>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	body{
		line-height: 1.5;
		color: #1A1A1A;
		background: #F6F7F9;
	}
	a{
		text-decoration: none;
	}
	.header{
		/*width: 100%;
		background-color:#fff;
		box-sizing:border-box;
		position: relative;
		overflow: hidden;*/
		height: 2.75rem;
		box-sizing: border-box;
		padding-top: 0.6875rem;
		padding-bottom: 0.625rem;
		background-color: #FFFFFF;
		position: relative;
	}
	.header>a{
		/*width: 30%;
		color: #ff3955;
		float: left;
		padding: 0.8rem;*/
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		padding: 0 1rem;
		width: 5.625rem;
	}	
	.header .logo{
		/*width: 65%;
		color: transparent;
		display: inline-block;*/
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		width: inherit;
		height: 1.125rem;
		font-size: 1rem;
	}
	.header .top-right{
		/*float: right;
		padding: 0.25rem 0.375rem;
		width: 30%;*/
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		padding: 0.25rem 0.375rem;
	}
	.header .top-right a{
		float: left;
		/*width: 45%;
		overflow: hidden;
		text-align: center;
		margin-left: 1.9rem;*/
		width: 2.25rem;
		height: 2.25rem;
		overflow: hidden;
	}
	/*.header .top-right a:nth-child(2){
		width: 30%;
		color: #FF3955;
		margin-left: 0;
		line-height: 2.2rem;
		float: right;
	}*/
	.header .top-right a img{
		/*width: 40%;
		height: auto;
		margin: 0.5rem auto;
		border-radius: 1rem;*/
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		margin: 0.5rem auto;
		border-radius: 1rem;
	}
	.header .top-right a i{
		width: 1em;
		height: 1em;
		vertical-align: -0.25ex;
		margin: 0.625rem auto;
		display: block;
		color: #FF3955;
	}
	/*轮播*/
	section{
		background-color: #FFFFFF;
	}
	.slide-nav{
		width: 100%;
		height: auto;
		background-color: #FFFFFF;
	}
	.mint-swipe{
		margin: 0;
		padding: 0 0.75rem;
		position: relative;
	}
	.mint-swipe-items-wrap{
		border-radius: 6px;
		padding-bottom: 40%;
	}
	.mint-swipe-item img{
		width: 100%;
	}
	.mint-swipe-indicator.is-active{
		background: #FF3955;
		opacity: 0.8;
	}
	/*搜索*/
	.search-nav{
		line-height: 2rem;
		margin: 0.15rem 0.75rem 0;
		background-color: #f7f7f7;
		border-radius: 0.25rem;
		font-size: 0.8rem;
		text-align: center;
		color: #808080;
		vertical-align: middle;
	}
	.search-nav i{
		display: inline-block;
		line-height: 2rem;
		text-align: center;
		vertical-align: -0.25ex;
	}
	/*中间导航*/
	.home-nav{
		width: 100%;
		background-color: #FFFFFF;
		padding: 0.75em 0;
	}
	.home-nav ul{
		width: 100%;
	}
	.home-nav-li{
		width: calc(100% / 5.4);
		margin: 0;
		display: inline-block;
		text-align: center;
	}
	.home-nav-a{
		text-align: center;
		/*font-size: 0.75rem;*/
		display: inline-block;
		box-sizing: border-box;
	}
	.home-nav-a>.icon{
		display: block;
		width: 36px;
		height: 36px;
		background-image: url(../../assets/img/home-nav.png);
		background-size: 188px 176px;
		margin: auto;
	}
	.icon-sort{
		background-position: -120px -40px;
	}
	.icon-rank{
		background-position: 0px -40px;
	}
	.icon-fuli{
		background-position: -80px -80px;
	}
	.icon-newbook{
		background-position: -80px -40px;
	}
	.icon-end{
		background-position: -120px 0px;
	}
	.home-nav-text{
		font-weight: normal;
		color: black;
	}
	/*本期强推*/
	.module{
		margin: 0.75rem 0;
		background-color: #FFFFFF;
	}
	.module-header{
		border-top: 1rem solid transparent;
		padding: 0 1rem;
		overflow: hidden;
	}
	.module-header-l{
		float: left;
	}
	.module-header-r{
		float: right;
	}
	.module-title{
		display: inline;
		color: #1a1a1a;
		font-size: 1rem;
	}
	.module-title::before{
		content: "";
		width: 0.625rem;
		height: 1em;
		display: inline-block;
		box-sizing: border-box;
		border-left: 2px solid #FF3955;
		vertical-align: -.22ex;
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
	/*新书抢鲜*/
	.module-header-btn{
		line-height: 1.5rem;
		padding: 0.5rem 0.5rem 0.5rem 0.75rem;
		color: #808080;
		font-size: 0.8125rem;
	}
	.module-header-btn>i{
		display: inline-block;
		line-height: 1.5rem;
		text-align: center;
		vertical-align: -0.2ex;
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
		/*width: 4.125rem;*/
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
		margin: 0.375rem 0;
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
	.red{
		color: #FF3955;
		border: 1px solid rgba(255,57,85,0.3);
	}
	.blue{
		color: #4284ee;
		border: 1px solid rgba(66,132,238,0.3);
	}
	/*限时免费*/
	.corner{
		width: 30px;
		height: 30px;
		font-size: 0.75rem;
		text-align: center;
		overflow: hidden;
		position: absolute;
		left: 6px;
	}
	.corner>em{
		position: absolute;
		left: 0px;
		right: -12px;
		bottom: 0;
		padding-top: 1px;
		line-height: 11px;
		font-size: 0.75rem;
		color: white;
		background-color: #4284ee;
		transform-origin: left bottom;
		transform: rotate(-45deg);
	}
	.time{
		display: inline-block;
	}
	.module-header-r{
		float: right;
		position: relative;
		min-width: 4rem;
	}
	.time-day,.time-hour,.time-minute,.time-second{
		display: inline-block;
		margin-right: 2px;
		text-align: center;
		border-radius: 2px;
		color: #FFFFFF;
		background-color: #d8d8d8;
		vertical-align: middle;
		position: relative;
		font-size: 0.75rem;
		padding: 0 2px;
	}
	.time-hour::before, .time-minute::before, .time-second::before{
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: -3px;
		width: 1px;
		height: 2px;
		border-radius: 1px;
		background-color: #808080;
		margin: auto;
		box-shadow: 0 5px #808080;
	}
	.time-day{
		background-color: #FF3955;
	}
	/*排行榜*/
	.index-rank .module-tab,.classify .module-tab{
		padding-top: 0.5rem;
		margin: 0.44rem 1rem;
	}
	.index-rank .mint-navbar,.classify .mint-navbar{
		display: table;
		width: 100%;
		table-layout: fixed;
		margin-left: auto;
		margin-right: auto;
	}
	.index-rank .mint-tab-item,.classify .mint-tab-item{
		display: table-cell;
		font-size: 100%;
		font-weight: 400;
		color: #FF3955;
	}
	.index-rank .mint-navbar .mint-tab-item,.classify .mint-navbar .mint-tab-item{
		padding: 0;
	}
	.index-rank .mint-tab-item:first-child,.classify .mint-tab-item:first-child{
		border-radius: 4px 0 0 4px;
	}
	.index-rank .mint-tab-item:last-child,.classify .mint-tab-item:last-child{
		border-radius: 0 4px 4px 0;
	}
	.index-rank .mint-tab-item:first-child>.mint-tab-item-label,.classify .mint-tab-item:first-child>.mint-tab-item-label{
		border-radius: 4px 0 0 4px;
	}
	.index-rank .mint-tab-item:last-child>.mint-tab-item-label,.classify .mint-tab-item:last-child>.mint-tab-item-label{
		border-radius: 0 4px 4px 0;
	}
	.index-rank .mint-tab-item-label,.classify .mint-tab-item-label{
		display: block;
		line-height: 1.6875rem;
		border: 1px solid #FF3955;
		padding: 0 0.5rem;
		text-align: center;
		font-size: 0.8125rem;
	}
	.index-rank .mint-navbar .mint-tab-item.is-selected,.classify .mint-navbar .mint-tab-item.is-selected{
		border-style: none;
		background-color: #FF3955;
		color: #FFFFFF;
	}
	.corner-rank{
		position: absolute;
		left: 5px;
		width: 30px;
		height: 30px;
		font-size: 0.75rem;
		text-align: center;
		overflow: hidden;
	}
	.corner-rank>em{
		position: absolute;
		left: 0;
		right: -12px;
		bottom: 0;
		padding-top: 14px;
		line-height: 10px;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 0.75rem;
		color: white;
		transform-origin: left bottom;
		transform: rotate(-45deg);
	}
	/*.pink{
		background-color: #FF3955;
	}
	.orange{
		background-color: #FFA100;
	}
	.gray{
		background-color: #808080;
	}*/
	.color{
		background-color: #808080;
	}
	.module-slide-li:first-child .corner-rank .color{
		background-color: #FF3955;
	}
	.module-slide-li:nth-child(2) .corner-rank .color{
		background-color: #FFA100;
	}
	.module-slide-li:nth-child(3) .corner-rank .color{
		background-color: #FFA100;
	}
	.corner-rank::after{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 10px;
		height: 10px;
		background: url(../../assets/img/king.svg) no-repeat center;
		background-size: 100%;
	}
	.line::after{
		content: "";
		display: block;
		border-bottom: 1px solid #f0f1f2;
		margin-left: 1rem;
		margin-right: 1rem;
		margin-top: -1px;
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
	.home-recent-read{
		position: fixed;
		right: 0;
		bottom: 3.75rem;
		padding: 1rem;
		z-index: 2;
	}
	.btn-primary-circle{
		display: inline-block;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 50%;
		box-sizing: border-box;
		padding: 0.5rem;
		background-color: #FF3955;
		color: #FFFFFF;
		font-size: 0.75rem;
		text-align: center;
		line-height: 1.16667;
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
		/*opacity: 0;*/
		/*transition: opacity 0.25s;*/
	}
	.footer-backtop-circle>i{
		display: inline-block;
		transform: rotate(90deg);
		margin: auto;
		font-size: 1.75rem;
		margin-left: 0.875rem;
		margin-top: 0.43525rem;
		vertical-align: -0.25ex;
	}
	.read{
		opacity: 1;
		transition: opacity 0.25s;
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
	/*最近阅读*/
	.aside{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: hidden;
		z-index: 3;
		animation-duration: 0.25s;
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
	.aside-content{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 2.5rem;
		right: 0;
		margin: 0;
		background-color: #FFFFFF;
	}
	.aside-header{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		text-align: center;
		padding: 0 1rem;
		border: 1rem solid transparent;
		font-size: 1rem;
	}
	.aside-title{
		display: inline;
	}
	.aside-main{
		position: absolute;
		top: 2.75rem;
		bottom: 5.75rem;
		left: 0;
		right: 0;
		overflow: auto;
	}
	.book-title{
		display: inline-block;
	}
	.book-title-r{
		float: right;
		line-height: 1.5rem;
		color: #808080;
		font-size: 0.8125rem;
		margin-left: 0.5rem;
	}
	.aside-main .book-cell p{
		font-size: 0.875rem;
		color: #808080;
	}
	.aside-li-more{
		text-align: center;
		line-height: 2.75rem;
		font-size: 0.8125rem;
		color: #808080;
	}
	.aside-li-more::before{
		content: "";
		display: block;
		border-top: 1px solid #F0F1F2;
		margin-top: -1px;
		margin-left: 1rem;
	}
	.aside-footer{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 1rem;
		text-align: center;
	}
	.aside-btn{
		display: inline-block;
		line-height: 2.25rem;
		padding-left: 2ch;
		padding-right: 2ch;
		background-color: #FF3955;
		color: #FFFFFF;
		font-size: 0.875rem;
		border-radius: 99px;
		text-align: center;
		width: 60%;
		margin-bottom: 0.75rem;
	}
	/*@media only screen and (min-width: 768px){
		.header>a{
			margin-left: 1rem;
		}
		.header .logo{
			transform: scale(1.5);
		}
	}
	@media only screen and (min-width: 1024px){
		.header>a{
			margin-left: 1rem;
		}
		.header .logo{
			transform: scale(2);
		}
	}*/
</style>

