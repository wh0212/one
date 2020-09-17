<template>
	<div class="wrapper">
		<el-row>
			<el-col :span="5">
				<div @mouseenter="handleenter" @mouseleave="handleleave" class="wrapper-image">
					<div class="wrapper-image1" v-show="isshow"></div>
					<div class="wrapper-image2" v-show="!isshow"></div>
				</div>
				<div class="wrapper-aniamte"></div>
			</el-col>
			<el-col :span="13">
				<ul class="wrapper-ul">
					<li>小米手机
						<ul class="hover-ul">
							<li v-for="item in list" :key='item.id'>
								<img :src="item.url" alt="" class="img-hover">
								<div class="wrapper-text">
									<div style="color: #000000;">{{item.desc}}</div>
									<div style="color: #ff6700;">{{item.price}}</div>
								</div>
							</li>
						</ul>
					</li>
					<li>Redmi红米
						<ul class="hover-ul">
							<li v-for="item in list1" :key='item.id' style="width: 3.2rem;">
								<img :src="item.url" alt="" class="img-hover">
								<div class="wrapper-text">
									<div style="color: #000000;">{{item.desc}}</div>
									<div style="color: #ff6700;">{{item.price}}</div>
								</div>
							</li>
						</ul>
					</li>
					<li>电视
						<ul class="hover-ul">
							<li v-for="item in list2" :key='item.id' style="width: 3.2rem;">
								<img :src="item.url" alt="" class="img-hover">
								<div class="wrapper-text">
									<div style="color: #000000;">{{item.desc}}</div>
									<div style="color: #ff6700;">{{item.price}}</div>
								</div>
							</li>
						</ul>
					</li>
					<li>笔记本</li>
					<li>家电</li>
					<li>路由器</li>
					<li>智能硬件</li>
					<li>服务</li>
					<li>社区</li>
				</ul>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'homenav',
	data () {
		return {
			isshow: true,
			list: [{
				id: '001',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=200&h=138',
				desc: '小米10 青春版 5G',
				price: '1899元起'
			}, {
				id: '002',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=200&h=138',
				desc: '小米10 Pro',
				price: '4999元起'
			}, {
				id: '003',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=200&h=138',
				desc: '小米10',
				price: '3799元起'
			}, {
				id: '004',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png?thumb=1&w=200&h=138',
				desc: '小米MIX Alpha',
				price: '19999元起'
			}],
			list1: [{
				id: '005',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7bd1b02e0329bd5c41d193f01349f991.jpg?thumb=1&w=200&h=138',
				desc: 'Redmi 9A',
				price: '499元起'
			}, {
				id: '006',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ddc8849eaf164aac333bfd10627867f.png?thumb=1&w=200&h=138',
				desc: 'Redmi 9',
				price: '799元起'
			}, {
				id: '007',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfbedb76699240a6c9a3f875b930983c.png?thumb=1&w=200&h=138',
				desc: ' Redmi 10X 4G',
				price: '999元起'
			}, {
				id: '008',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a6548361871303764d6c66142074524.png?thumb=1&w=200&h=138',
				desc: 'Redmi 10X ',
				price: '1599元起'
			}, {
				id: '009',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0203f4e7dafcc0c9016a1b48556abf30.jpg?thumb=1&w=200&h=138',
				desc: ' Redmi K30 Pro',
				price: '2499元起'
			}, {
				id: '010',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=200&h=138',
				desc: 'Redmi K30',
				price: '1399元起'
			}],
			list2: [{
				id: '011',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&w=200&h=138',
				desc: '小米电视 大师 65英寸OLED',
				price: '12999'
			}, {
				id: '012',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=200&h=138',
				desc: 'Redmi 智能电视 MAX 98',
				price: '19999元'
			}, {
				id: '013',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f0f2d1079c767a834f098dd824bb6fee.png?thumb=1&w=200&h=138',
				desc: '小米电视4A 60英寸',
				price: '1999元'
			}, {
				id: '014',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70f6c0c28c61e8585805565e5e16da84.png?thumb=1&w=200&h=138',
				desc: 'Redmi 智能电视 X55',
				price: '2166元'
			}, {
				id: '015',
				url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=200&h=138',
				desc: 'Redmi 红米电视 70英寸 R70A',
				price: '2888元'
			}, {
				id: '016',
				url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg?thumb=1&w=200&h=138',
				desc: '小米壁画电视 65英寸',
				price: '6999元'
			}]
		}
	},
	methods: {
		handleenter () {
			this.isshow = !this.isshow
		},
		handleleave () {
			this.isshow = true
		}
	}
}
</script>

<style lang="scss" scoped="">
$commonsize: .32rem;
.wrapper {
	width: 24rem;
	margin: 0 auto;
	height: 2rem;
	position: relative;
}
.wrapper-image {
	width: 1.1rem;
	height: 1.1rem;
	margin-top: .45rem;
	float: left;
	.wrapper-image1 {
		width: 1.1rem;
		height: 1.1rem;
		background: url(https://s02.mifile.cn/assets/static/image/mi-logo.png) no-repeat center #ff6700;
	}	
	.wrapper-image2 {
		width: 1.1rem;
		height: 1.1rem;
		background: url(https://s02.mifile.cn/assets/static/image/mi-home.png) no-repeat center #ff6700;
	}
}
.wrapper-aniamte {
	margin-left: .4rem;
	width: 3.3rem;
	height: 2rem;
	float: left;
	background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b06819007feedbea62aedaa3089633d2.gif?w=165&h=55) no-repeat center
}
.wrapper-ul {
	float: left;
	font-size: $commonsize;
	height: 2rem;
	line-height: 2rem;
	li {
		float: left;
		padding: 0 .2rem;
	}
	li:hover {
		color: #ff6700;
	}
	li:hover .hover-ul {
		display: block;
	}
}
	.hover-ul {
		position: absolute;
		top: 2rem;
		left: 0;
		right: 0;
		bottom: 0;
		height: 4.6rem;
		z-index: 999;
		box-shadow: 0 .05rem .5rem #999;
		display: none;
		li {
			float: left;
			width: 4rem;
			padding: .4rem .1rem 0;
			box-sizing: border-box;
		}
		.img-hover {
			width: 100%;
			height: 2.6rem;
			border-right: .02rem solid #999;
		}
		.wrapper-text {
			line-height: .4rem;
			font-size: .24rem;
			text-align: center;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
