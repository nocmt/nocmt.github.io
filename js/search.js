// const loadJson = () => {
//   const url = "/search.json" /*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
//   const request = new XMLHttpRequest();
//   request.open("get", url);/*设置请求方法与路径*/
//   request.send(null);/*不发送数据到服务器*/
//   request.onload = function () {/*XHR对象获取到返回信息后执行*/
//       if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
//           const jsonText = JSON.parse(request.responseText);
//           // for(const i=0;i<jsonText.length;i++){
//           //   console.log(jsonText[i].title);
//           // }
//           // console.log(jsonText); // 最终读取的json文件
//           return jsonText;
//       }
//   }
// }

// const jsonText = loadJson();