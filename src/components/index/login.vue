<template>
	<main>
		<div class="wrapper">
			<img src="../../assets/img/login-top.png" alt="" class="top-img"/>
			<div class="login-wrap">
				<div class="logo">
					<img src="../../assets/img/login-logo.png" alt="" class="login-img"/>
				</div>
				<div class="account-login-wrap">
					<div class="login-tab">
						<span :class="{act:show}" @click="change1()">阅文账号</span>
						<span :class="{act:hidden}" @click="change2()">小阅登录</span>
					</div>
					<div class="login-form">
						<ul class="form-list">
							<li>
								<em class="icon-user"></em>
								<input type="text" id="username" placeholder="请输入邮箱/个性账号" />
							</li>
							<p id="user">邮箱/账号不能为空</p>
							<li>
								<div class="eye-icon">
									<i class="unlook"></i>
								</div>
								<em class="icon-lock"></em>
								<input type="password" id="passwd" placeholder="请输入密码" />
							</li>
							<p id="pass">密码不能为空</p>
						</ul>
					</div>
					<div class="reg-wrap">
						<router-link to="/login" class="link">忘记密码</router-link>
					</div>
					<button class="btn-wrap" type="button" @click="login()">登录</button>
				</div>
				<div class="login-btn-wrap">
					<ul>
						<li>
							<router-link to="/login">
								<p class="login-icon qq-icon"></p>
								<span>QQ</span>
							</router-link>
						</li>
						<li>
							<router-link to="/login">
								<p class="login-icon sms-icon"></p>
								<span>短信登录</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				show:true,
				hidden:false
			}
		},
		methods:{
			change1(){
				this.show=true;
				this.hidden=false;
			},
			change2(){
				this.hidden=true;
				this.show=false;
			},
			login(){
				if(username.value==""&&passwd.value==""){
					Toast('请输入账户及密码');
				}else if(!reg.test(username.value)){
					Toast('请输入正确的账户');
				}else if(passwd.value==""){
					Toast('密码不能为空');
				}else{
					Toast({
					  message: '登录成功'
					}); 
					this.$router.replace('/index')
				}
			}
		}
//		mounted(){
//			username.onblur=function(){
//				if(username.value==""){
//					user.style.opacity=1;
//				}else{
//					user.style.opacity=0;
//				}
//			},
//			passwd.onblur=function(){
//				if(passwd.value==""){
//					pass.style.opacity=1;
//				}else{
//					pass.style.opacity=0;
//				}
//			}
//		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	html,body,section{
		width: 100%;
		height: 100%;
	}
	ul,li{
		margin: 0;
		padding: 0;
	}
	button{
		border: 0;
		background-color: transparent;
		outline: none;
	}
	.top-img{
		width: 100%;
		/*height: 1.6rem;*/
	}
	.login-wrap{
		position: relative;
		width: 100%;
		height: 100%;
		margin: -0.8rem auto 0;
		background: #FFFFFF;
		border-radius: 8px 8px 0 0;
		z-index: 2;
	}
	.login-wrap .logo{
		padding: 1.48rem 0;
		text-align: center;
	}
	.login-wrap .login-img{
		display: inline-block;
		/*height: 2.96rem;*/
		width: 13%;
	}
	.login-wrap .login-tab{
		text-align: center;
		margin-bottom: 0.98rem;
	}
	.login-wrap .login-tab span{
		position: relative;
		display: inline-block;
		vertical-align: middle;
		/*height: 1.73rem;*/
		font-size: 1rem;
		color: #222;
		z-index: 1;
		margin-left: 1.98rem;
		padding-bottom: 0.3rem;
	}
	.login-wrap .login-tab span:first-child{
		margin-left: 0;
	}
	.login-wrap .login-tab span.act::after{
		content: "";
		position: absolute;
		width: 1.11rem;
		height: 0.124rem;
		background: #ff6188;
		bottom: -0.154rem;
		left: 50%;
		margin-left: -0.55rem;
		display: inline-block;
	}
	.login-form{
		padding: 0 1.97rem;
	}
	ul{
		list-style: none outside none;
	}
	.login-wrap .form-list li{
		width: 100%;
		margin-bottom: 0.98rem;
		border-bottom: 1px solid #eee;
		position: relative;
		z-index: 1;
	}
	.login-wrap .form-list li em{
		margin: 0 0.98rem 0 0.2rem;
		width: 0.98rem;
		height: 0.98rem;
		background-repeat: no-repeat;
		background-size: 100%;
		display: inline-block;
		vertical-align: middle;
		line-height: 0.96rem;
	}
	.login-wrap .form-list li em.icon-user{
		background-image: url(../../assets/img/user.svg);
	}
	.login-wrap .form-list li em.icon-lock{
		background-image: url(../../assets/img/lock.svg);
	}
	.login-wrap .form-list input{
		display: inline-block;
		vertical-align: middle;
		/*height: 2.84rem;*/
		line-height: 2.84rem;
		width: 60%;
		background: none;
		font-size: 0.95rem;
		border-style: none;
		outline: none;
	}
	 input::-webkit-input-placeholder{
	 	color: #cccccc;
	 }
	 .login-wrap .form-list li .eye-icon{
	 	width: 2.96rem;
	 	height: 2.96rem;
	 	float: right;
	 }
	 .login-wrap .form-list li .eye-icon i{
	 	display: block;
	 	width: 0.98rem;
	 	height: 0.98rem;
	 	background-repeat: no-repeat;
	 	background-size: 100%;
	 	margin: 0.925rem auto 0;
	 }
	 .login-wrap .form-list li .eye-icon .unlook{
	 	background-image: url(../../assets/img/unlook.svg);
	 }
	 .login-wrap .form-list p{
	 	margin-top: -1rem;
	 	color: red;
	 	opacity: 0;
	 }
	 .reg-wrap{
	 	padding: 0 1.97rem;
	 	margin-bottom: 1.48rem;
	 }
	 a.link{
	 	color: #0091de;
	 	font-size: .7rem;
	 }
	 .btn-wrap{
	 	padding: 0 1.97rem;
	 	text-align: center;
	 	width: 80%;
	 	display: block;
	 	border-radius: 2rem;
	 	line-height: 2.96rem;
	 	font-size: 1rem;
	 	color: #FFFFFF;
	 	background: linear-gradient(to right,#ff6188,#ff9bc2);
	 	opacity: 0.7;
	 	margin: auto;
	 }
	 /*选择登陆方式*/
	.login-btn-wrap{
		padding: 2.467rem 1.974rem;
		text-align: center;
	}
	.login-btn-wrap ul{
		display: flex;
		-webkit-align-items: center;
		-webkit-box-align: center;
		justify-content: center;
	}
	.login-btn-wrap li{
		display: inline-block;
		vertical-align: middle;
		/*height: 4.68rem;*/
		margin-right: 0.925rem;
		margin-left: 0.925rem;
		text-align: center;
	}
	.login-btn-wrap li a{
		width: 100%;
		height: 100%;
		display: block;
		color: #61708f;
		font-size: 0.7rem;
	}
	.login-btn-wrap li .login-icon{
		width: 2.96rem;
		height: 2.96rem;
		margin: 0 auto 0.98rem;
		background-size: 100%;
	}
	.login-btn-wrap li .login-icon.qq-icon{
		background-image: url(../../assets/img/qq.svg);
	}
	.login-btn-wrap li .login-icon.sms-icon{
		background-image: url(../../assets/img/phone.svg);
	}
</style>