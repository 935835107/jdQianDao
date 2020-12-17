const axios = require("axios");

async function start() {
    console.log(`推送助力码开始`);
    await download('http://api.turinglabs.net/api/v1/jd/ddfactory/create/','fa78f3869ef04b9f97c329f1b7073493@4561187c71d340918e9a8044ceab9581@f81b8a1baf404ec28eb7673b3e225919')
    console.log("执行完毕");
}

async function download(url, params) {
	for (var i=0; i<params.split('@').length; i++) {
		let response = await axios.get(url+params.split('@')[i]);
	}
    let response = await axios.get(url);
    
    console.log(`添加${response.data}成功`);
}



start();