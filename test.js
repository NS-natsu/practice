let intarvalID;

//処理速度確認用
function test(){
	const start = performance.now();
	// code here...
	for(let i = 0; i < 100000000; i++);
	const end = performance.now();
	LineGraph.addData(end - start);
	LineGraph.draw();
}

function stopTest(){
	clearInterval(intarvalID);
	intarvalID = null;
	
	LineGraph.eraseData();
}

function startTest = (func=test, time=100) => {
	stopTest();
	intarvalID = setInterval(func, time);
}

intarvalID = setInterval(test, 16);
