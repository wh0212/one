<template>
	<div class="wrapper">
		<div class="wrapper-left">
			<el-row>
				<el-col :span="16">
					<ul class="wrapper-ul-left">
						<li>小米商城</li>
						<li>MIUI</li>
						<li>loT</li>
						<li>云服务</li>
						<li>金融</li>
						<li>有品</li>
						<li>小爱开放平台</li>
						<li>企业团购</li>
						<li>资质证照</li>
						<li>协议规则</li>
						<li>下载app</li>
						<li>select location</li>
					</ul>
				</el-col>
				<el-col :span="4" :offset='4'>
					<ul class="wrapper-ul-right">
						<li>登录</li>
						<li>注册</li>
						<li><i class="el-icon-shopping-cart-full"></i>购物车(0)
							<div class="blockin"></div>
							<ul class="nth3-ul">
								<li>购物车里还没有商品，快去选购吧</li>
							</ul>
						</li>
					</ul>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Homeheader',
}
</script>

<style lang="scss" scoped="">
$commoncolor: #b0b0b0;
$commonsize: .28rem;
.wrapper {
	background-color: #333;
	width: 100%;
	height: 1.2rem;
}
	.wrapper-left {
		width: 24rem;
		margin: 0 auto;
		height: 1.2rem;
		line-height: 1.2rem;
	}
		.wrapper-ul-left {
			float: left;
			line-height: 1.2rem;
			height: 1.2rem;
			li {
				float: left;
				padding-right: .2rem;
				color: $commoncolor;
				font-size: $commonsize;
			}
			li:hover {
				color: #fff;
			}
		}
		.wrapper-ul-right {
			float: right;
			li {
				float: left;
				color: $commoncolor;
				padding: 0 .2rem;
				font-size: $commonsize;
				position: relative;
			}
			li:hover {
				color: #fff;
			}
			li:hover .nth3-ul {
				display: block;
			}
			li:hover .blockin {
				display: block;
			}
				.blockin {
					position: absolute;
					top: 1rem;
					right: 0;
					width: 1.8622rem;
					height: .4rem;
					background-color: #fff;
					z-index: 999;
					display: none;
				}
				.nth3-ul {
					position: absolute;
					top: 1.2rem;
					right: 0;
					width: 5.52rem;
					height: 2rem;
					line-height: 2rem;
					// border: .02rem solid #666;
					box-shadow: 0 .05rem .5rem rgba(0,0,0,.15);
					display: none;
					z-index: 300;
				}
				.nth3-ul li {
					width: 100%;
					text-align: center;
				}
				.nth3-ul li:hover {
					color: $commoncolor;
				}
			li:nth-child(3):hover {
				background-color: #fff;
				color: #ff6700
			}
		}
</style>
