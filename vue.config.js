module.exports = {
	publicPath: '',
	// productionSourceMap: true,
	devServer: {
		proxy: {
			'/saas-online-server': {
				// target: 'http://10.10.200.50/mock/100/saas-online-server/',
				// target: 'http://10.10.200.50:9006/saas-online-server/',//开发
				target: 'http://10.10.200.50:8101/saas-online-server/',//测试
				// target: 'http://192.168.3.7:8080/saas-online-server',//唐云联
				// target: 'http://192.168.3.33:8080/saas-online-server',//佳舒
				// target: 'http://192.168.1.119:8080/saas-online-server',//吴超
				// target: 'http://192.168.1.138:8080/saas-online-server', //程恒
				pathRewrite: { '^/saas-online-server': '' },
				changeOrigin: true
			},
		}
	}
};

