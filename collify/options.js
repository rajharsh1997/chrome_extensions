function init(){
	console.log("options.js : init()")

	var prefs = JSON.parse(window.localStorage.getItem("prefs"));
	if(prefs === null) prefs = {colNum:2, autoColWidth:true};

	var colNum = prefs.colNum;
	if(colNum === undefined) colNum = 2;
	setColNum(colNum);
	setColNumLabel(colNum);

	var autoColWidth = prefs.autoColWidth;
	if(autoColWidth === undefined) autoColWidth = true;
	setAutoColVal(autoColWidth);
	setPrefs(colNum,autoColWidth);

	document.getElementById("colNumRange").addEventListener("change", updateColNumRange);
	document.getElementById("autoColCheckbox").addEventListener("change", updateautoColcheckbox);
}
function toggleColNumRange(val) {
	// body...
	document.getElementById("colNumRange").disabled = val;
}

function setAutoColVal(val){
	document.getElementById("autoColCheckbox").checked = val;
	toggleColNumRange(val);
}

function getAutoColVal() {
	return document.getElementById("autoColCheckbox").checked;
}

function setColNumLabel(val){
	doument.getElementById("colNumLabel").innerHTML = val + "columns";
}

function setColNum(val){
	document.getElementById("colNumRange").value = val;
}
function getColNum() {
	// body...
	document.getElementById("colNumRange").value;  
}
function setPrefs(colNum,autoColWidth){
	window.localStorage.setItem("prefs", JSON.stringify({colNum:colNum, autoColWidth:autoColWidth}))
}
function updateColNumRange() {
	var val = getColNum();
	setColNumLabel(val);
	setPrefs(val, getAutoColVal());
}
function updateautoColcheckbox(){
	var val = getAutoColVal();
	toggleColNumRange(val);
	setPrefs(getColNum(),val);
}
window.onload = init;

