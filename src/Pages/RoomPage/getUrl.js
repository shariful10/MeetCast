const getUrlParams = (url = window.location.href) => {
	let urlStr = url.split("?")[1];
	return new URLSearchParams(urlStr);
};

export default getUrlParams;
