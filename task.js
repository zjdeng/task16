/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 */
function addAqiData () {
  var city = document.getElementById('aqi-city-input').value.trim();
  var air = document.getElementById('aqi-value-input').value.trim();
  aqiData[city] = air
}

/*
*创建新表格body节点并渲染，替换原有节点
*/
function renderAqiList () {
  var parent = document.getElementById('aqi-table');
  var table = document.getElementsByTagName('tbody')[0];
  var newTable = document.createElement('tbody');
  var keys = Object.keys(aqiData);
  var length = 0;
  for (var i in aqiData) {
    var newTr = newTable.insertRow(length);
    newTr.id = length
    var td1 = newTr.insertCell();
    var td2 = newTr.insertCell();
    var td3 = newTr.insertCell();
    td1.innerHTML = keys[length];
    td2.innerHTML = aqiData[keys[length]];
    td3.innerHTML = '<button onclick="delBtnHandle(' + length + ')">删除</button>'
    length++;
  }
  parent.replaceChild(newTable, table);
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle () {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle (id) {
  var keys = Object.keys(aqiData);
  delete aqiData[keys[id]];
  renderAqiList();
}

function init () {
  document.getElementById('add-btn').addEventListener('click', addBtnHandle);
}

window.onload = function () {
  init();
}
