"use strict";var mykey={weather:"2adec88fac2343cbf7fbd3565883a60d"},locationurl="https://extreme-ip-lookup.com/json/?key=T08GSHoh50frg1cwoNXM",cityname="",weatherurl="",userip="",week=["SUN","MON","TUE","WED","THU","FRI","SAT"];function getweatherdata(){fetch(weatherurl).then(function(e){return e.json()}).then(function(e){switch(e.weather[0].icon){case"01d":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIHcQA.png";break;case"02d":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIHho8.png";break;case"03d":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIHsRH.png";break;case"04d":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIH2Lt.png";break;case"01n":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIHyzd.png";break;case"02n":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIHrJe.png";break;case"03n":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIHgsI.png";break;case"04n":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIH5FS.png";break;case"09n":case"09d":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIHfdf.png";break;case"10n":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIHIJg.png";break;case"10d":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIHWeP.png";break;case"11n":case"11d":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIHoWQ.png";break;case"13n":case"13d":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIHTzj.png";break;case"50n":case"50d":clock.weatherimg="https://z3.ax1x.com/2021/07/28/WIHbyn.png"}clock.temperature=e.main.temp.toFixed(0)+"℃",clock.humidity=e.main.humidity+"%",clock.ip=userip,clock.humidityimg="https://z3.ax1x.com/2021/07/28/WIXfPK.png",clock.city=e.name;setInterval(t,1e3);function t(){var e=new Date;clock.time=c(e.getHours(),2)+":"+c(e.getMinutes(),2)+":"+c(e.getSeconds(),2),clock.date=c(e.getFullYear(),4)+"-"+c(e.getMonth()+1,2)+"-"+c(e.getDate(),2)+" "+week[e.getDay()];e=e.getHours(),e=12<e?(e-=12," PM"):" AM";clock.daylight=e}function c(e,t){for(var c="",a=0;a<t;a++)c+="0";return(c+e).slice(-t)}t(),clock.clockshow=!0,t()}).catch(function(e){console.log(e)})}fetch(locationurl).then(function(e){return e.json()}).then(function(e){console.log(e,"ip"),cityname=e.city,void 0===e.city&&(cityname=e.region),void 0===e.region&&(cityname=e.country),userip=e.query,weatherurl="https://api.openweathermap.org/data/2.5/weather/?q="+cityname+"&units=metric&appid="+mykey.weather,getweatherdata()}).catch(function(e){console.log(e)});var clock=new Vue({el:"#clock",data:{ip:"",time:"",weatherimg:"",temperature:"",humidityimg:"",humidity:"",usaqi:"",city:"",date:"",daylight:"",clockshow:"false"}});