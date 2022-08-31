var start_date = "20200201"; // 开始日期
var date = new Date();
var end_date =
  date.getFullYear() +
  (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
  (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()); // 结束日期
/**
 * derc 一旦 ACCESS_TOKEN 过期，可根据以下请求更换新的 ACCESS_TOKEN 和 REFRESH_TOKEN
 * {url} http://openapi.baidu.com/oauth/2.0/token?grant_type=refresh_token&refresh_token=122.d8fcdc7b48458e3fefcb48252b3dc5a0.YmaFlGwLkUA9yQ-LDNboezrJS8of1iyWOvg6_yT.saAGsA&client_id=A6SZaTYw6YZpFXpGYNyh1S3G&client_secret=ojoL4a1RbVZNLGstocdvf80Yq5z8igtv
 */
  
var access_token = "121.3417b2c61266fd68100b96adbdbe6006.Y__PhMqBcSx9TX-W7J-a75A0Wkr8W6RAcMAPKFD.ywh7mw"; // accessToken
var site_id = "17036042"; // 网址 id
var dataUrl =
  "https://baidu-tongji-api-azure.vercel.app/api?access_token=" +
  access_token +
  "&site_id=" +
  site_id;
var metrics = "pv_count"; // 统计访问次数 PV 填写 'pv_count'，统计访客数 UV 填写 'visitor_count'，二选一
var metricsName =
  metrics === "pv_count"
    ? "访问次数"
    : metrics === "visitor_count"
    ? "访客数"
    : "";
// 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
var color =
  document.documentElement.getAttribute("data-theme") === "light"
    ? "#4c4948"
    : "rgba(255,255,255,0.7)";


//初始化loading
let loadingHtml = '<style>.loader { color: #00c4b6; font-size: 40px; text-indent: -9999em; overflow: hidden; width: 1em; height: 1em; border-radius: 50%; margin: 72px auto; position: relative; -webkit-transform: translateZ(0); -ms-transform: translateZ(0); transform: translateZ(0); -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease; animation: load6 1.7s infinite ease, round 1.7s infinite ease; } @-webkit-keyframes load6 { 0% { box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em; } 5%, 95% { box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em; } 10%, 59% { box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em; } 20% { box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em; } 38% { box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em; } 100% { box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em; } } @keyframes load6 { 0% { box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em; } 5%, 95% { box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em; } 10%, 59% { box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em; } 20% { box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em; } 38% { box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em; } 100% { box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em; } } @-webkit-keyframes round { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } } @keyframes round { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }</style><center><span id="moments_loading"><div class="loader"></div></span></center>';
document.getElementById("map-chart").innerHTML = loadingHtml;
document.getElementById("trends-chart").innerHTML = loadingHtml;
document.getElementById("sources-chart").innerHTML = loadingHtml;

// 访问地图
function mapChart() {
  let script = document.createElement("script");
  let paramUrl =
    "&start_date=" +
    start_date +
    "&end_date=" +
    end_date +
    "&metrics=" +
    metrics +
    "&method=visit/district/a";
  fetch(dataUrl + paramUrl)
    .then((data) => data.json())
    .then((data) => {
      let mapName = data.result.items[0];
      let mapValue = data.result.items[1];
      let mapArr = [];
      let max = mapValue[0][0];
      for (let i = 0; i < mapName.length; i++) {
        mapArr.push({ name: mapName[i][0].name, value: mapValue[i][0] });
      }
      let mapArrJson = JSON.stringify(mapArr);
      script.innerHTML = `
      var mapChart = echarts.init(document.getElementById('map-chart'), 'light');
      var mapOption = {
        title: {
          text: '博客访问来源地图',
          x: 'center',
          textStyle: {
            color: '${color}'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          min: 0,
          max: ${max},
          left: 'left',
          top: 'bottom',
          text: ['高','低'],
          color: ['#1E90FF', '#AAFAFA'],
          textStyle: {
            color: '${color}'
          },
          calculable: true
        },
        series: [{
          name: '${metricsName}',
          type: 'map',
          mapType: 'china',
          showLegendSymbol: false,
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: '#121212'
            },
            emphasis: {
              areaColor: 'gold'
            }
          },
          data: ${mapArrJson}
          }]
        };
      mapChart.setOption(mapOption);
      window.addEventListener("resize", () => { 
        mapChart.resize();
      });`;
      document.getElementById("map-chart").after(script);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// 访问趋势
function trendsChart() {
  let script = document.createElement("script");
  let paramUrl =
    "&start_date=" +
    start_date +
    "&end_date=" +
    end_date +
    "&metrics=" +
    metrics +
    "&method=trend/time/a&gran=month";
  fetch(dataUrl + paramUrl)
    .then((data) => data.json())
    .then((data) => {
      let monthArr = [];
      let monthValueArr = [];
      let monthName = data.result.items[0];
      let monthValue = data.result.items[1];
      for (let i = Math.min(monthName.length, 12) - 1; i >= 0; i--) {
        monthArr.push(monthName[i][0].substring(0, 7).replace("/", "-"));
        if (monthValue[i][0] !== "--") {
          monthValueArr.push(monthValue[i][0]);
        } else {
          monthValueArr.push(null);
        }
      }
      let monthArrJson = JSON.stringify(monthArr);
      let monthValueArrJson = JSON.stringify(monthValueArr);
      script.innerHTML = `
        var trendsChart = echarts.init(document.getElementById('trends-chart'), 'light');
        var trendsOption = {
          textStyle: {
            color: '${color}'
          },
          title: {
            text: '博客访问统计图',
            x: 'center',
            textStyle: {
              color: '${color}'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            name: '日期',
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '${color}'
              }
            },
            data: ${monthArrJson}
          },
          yAxis: {
            name: '${metricsName}',
            type: 'value',
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '${color}'
              }
            }
          },
          series: [{
            name: '${metricsName}',
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            itemStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }])
            },
            areaStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(128, 255, 165)'
              }, {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }])
            },
            data: ${monthValueArrJson},
            markLine: {
              data: [{
                name: '平均值',
                type: 'average'
              }]
            }
          }]
        };
        trendsChart.setOption(trendsOption);
        window.addEventListener("resize", () => { 
          trendsChart.resize();
        });`;
      document.getElementById("trends-chart").after(script);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// 访问来源
function sourcesChart() {
  let script = document.createElement("script");
  let paramUrl =
    "&start_date=" +
    start_date +
    "&end_date=" +
    end_date +
    "&metrics=" +
    metrics +
    "&method=source/all/a";
  fetch(dataUrl + paramUrl)
    .then((data) => data.json())
    .then((data) => {
      let sourcesName = data.result.items[0];
      let sourcesValue = data.result.items[1];
      let sourcesArr = [];
      for (let i = 0; i < sourcesName.length; i++) {
        sourcesArr.push({
          name: sourcesName[i][0].name,
          value: sourcesValue[i][0],
        });
      }
      let sourcesArrJson = JSON.stringify(sourcesArr);
      script.innerHTML = `
        var sourcesChart = echarts.init(document.getElementById('sources-chart'), 'light');
        var sourcesOption = {
          textStyle: {
            color: '${color}'
          },
          title: {
            text: '博客访问来源统计图',
            x: 'center',
            textStyle: {
              color: '${color}'
            }
          },
          legend: {
            top: 'bottom',
            textStyle: {
              color: '${color}'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [{
            name: '${metricsName}',
            type: 'pie',
            radius: [30, 80],
            center: ['50%', '50%'],
            roseType: 'area',
            label: {
              formatter: "{b} : {c} ({d}%)"
            },
            data: ${sourcesArrJson},
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(255, 255, 255, 0.5)'
              }
            }
          }]
        };
        sourcesChart.setOption(sourcesOption);
        window.addEventListener("resize", () => { 
          sourcesChart.resize();
        });`;
      document.getElementById("sources-chart").after(script);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function switchVisitChart() {
  // 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
  let color =
    document.documentElement.getAttribute("data-theme") === "light"
      ? "#4c4948"
      : "rgba(255,255,255,0.7)";
  try {
    let mapOptionNew = mapOption;
    mapOptionNew.title.textStyle.color = color;
    mapOptionNew.visualMap.textStyle.color = color;
    mapChart.setOption(mapOptionNew);
  } catch (error) {
    console.log(error);
  }
  try {
    let trendsOptionNew = trendsOption;
    trendsOptionNew.title.textStyle.color = color;
    trendsOptionNew.xAxis.axisLine.lineStyle.color = color;
    trendsOptionNew.yAxis.axisLine.lineStyle.color = color;
    trendsOptionNew.textStyle.color = color;
    trendsChart.setOption(trendsOptionNew);
  } catch (error) {
    console.log(error);
  }
  try {
    let sourcesOptionNew = sourcesOption;
    sourcesOptionNew.title.textStyle.color = color;
    sourcesOptionNew.legend.textStyle.color = color;
    sourcesOptionNew.textStyle.color = color;
    sourcesChart.setOption(sourcesOptionNew);
  } catch (error) {
    console.log(error);
  }
}

if (document.getElementById("map-chart")) mapChart();
if (document.getElementById("trends-chart")) trendsChart();
if (document.getElementById("sources-chart")) sourcesChart();

document.getElementById("darkmode").addEventListener("click", function () {
  setTimeout(switchVisitChart, 100);
});
