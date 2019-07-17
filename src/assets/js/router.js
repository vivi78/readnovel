import VueRouter from 'vue-router';

import index from '../../components/index/index.vue';
import category from '../../components/index/category.vue';
import rank from '../../components/index/rank.vue';
import welfare from '../../components/index/welfare.vue';
import newbook from '../../components/index/newbook.vue';
import finish from '../../components/index/finish.vue';
import details from '../../components/index/details.vue';
import user from '../../components/index/user.vue';
import bookshelf from '../../components/index/bookshelf.vue';
import booklist from '../../components/index/booklist.vue';
import recommend from '../../components/index/recommend.vue';
import login from '../../components/index/login.vue';

export default new VueRouter({
	routes:[
		{
			path:'/',
			component:login
		},
		{
			path:'/index',
			component:index
		},
		{
			path:'/category',
			component:category
		},
		{
			path:'/rank',
			component:rank
		},
		{
			path:'/welfare',
			component:welfare
		},
		{
			path:'/newbook',
			component:newbook
		},
		{
			path:'/finish',
			component:finish
		},
		{
			path:'/user',
			component:user
		},
		{
			path:'/login',
			component:login
		},
		{
			path:'/details',
			component:details
		},
		{
			path:'/bookshelf',
			component:bookshelf
		},
		{
			path:'/booklist',
			component:booklist
		},
		{
			path:'/recommend',
			component:recommend
		},
		{
			path:'/*',
			redirect:'/index'
		}
	]
})