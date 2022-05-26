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

intarvalID = setInterval(test, 16);
