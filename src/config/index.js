const { APIPATH , NODE_ENV } = process.env;

const env = {
	apiPath: APIPATH,
	local: NODE_ENV == 'development',
};

export default env;
