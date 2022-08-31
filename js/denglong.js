"use strict";!function(n){"function"==typeof define&&define.amd?define(n):n()}(function(){var n,i,e,d;d='@charset "UTF-8";@media only screen and (min-width: 1124px) {\n      .nav-menu {\n        padding-right: 96px;\n      }\n    }\n    \n    @media only screen and (max-width: 760px) {\n      .deng-box,\n      .deng-box1 {\n        width: 40%;\n      }\n    \n      .right {\n        float: left !important;\n      }\n    }\n    \n    @media only screen and (min-width: 768px) and (max-width: 1024px) {\n      .right {\n        float: left !important;\n      }\n    }\n    \n    .deng-box {\n      position: fixed;\n      top: -40px;\n      right: -20px;\n      z-index: -999;\n    }\n    \n    .deng-box1 {\n      position: fixed;\n      top: -30px;\n      right: 10px;\n      z-index: -999;\n    }\n    \n    .deng-box1 .deng {\n      position: relative;\n      width: 120px;\n      height: 90px;\n      margin: 50px;\n      background: #d8000f;\n      background: rgba(216, 0, 15, 0.8);\n      border-radius: 50% 50%;\n      -webkit-transform-origin: 50% -100px;\n      -webkit-animation: swing 5s infinite ease-in-out;\n      box-shadow: -5px 5px 30px 4px rgba(252, 144, 61, 1);\n    }\n    \n    .deng {\n      position: relative;\n      width: 120px;\n      height: 90px;\n      margin: 50px;\n      background: #d8000f;\n      background: rgba(216, 0, 15, 0.8);\n      border-radius: 50% 50%;\n      -webkit-transform-origin: 50% -100px;\n      -webkit-animation: swing 3s infinite ease-in-out;\n      box-shadow: -5px 5px 50px 4px rgba(250, 108, 0, 1);\n    }\n    \n    .deng-a {\n      width: 100px;\n      height: 90px;\n      background: #d8000f;\n      background: rgba(216, 0, 15, 0.1);\n      margin: 12px 8px 8px 10px;\n      border-radius: 50% 50%;\n      border: 2px solid #dc8f03;\n    }\n    \n    .deng-b {\n      width: 45px;\n      height: 90px;\n      background: #d8000f;\n      background: rgba(216, 0, 15, 0.1);\n      margin: -4px 8px 8px 26px;\n      border-radius: 50% 50%;\n      border: 2px solid #dc8f03;\n    }\n    \n    .xian {\n      position: absolute;\n      top: -20px;\n      left: 60px;\n      width: 2px;\n      height: 20px;\n      background: #dc8f03;\n    }\n    \n    .shui-a {\n      position: relative;\n      width: 5px;\n      height: 20px;\n      margin: -5px 0 0 59px;\n      -webkit-animation: swing 4s infinite ease-in-out;\n      -webkit-transform-origin: 50% -45px;\n      background: #ffa500;\n      border-radius: 0 0 5px 5px;\n    }\n    \n    .shui-b {\n      position: absolute;\n      top: 14px;\n      left: -2px;\n      width: 10px;\n      height: 10px;\n      background: #dc8f03;\n      border-radius: 50%;\n    }\n    \n    .shui-c {\n      position: absolute;\n      top: 18px;\n      left: -2px;\n      width: 10px;\n      height: 35px;\n      background: #ffa500;\n      border-radius: 0 0 0 5px;\n    }\n    \n    .deng:before {\n      position: absolute;\n      top: -7px;\n      left: 29px;\n      height: 12px;\n      width: 60px;\n      content: " ";\n      display: block;\n      z-index: 999;\n      border-radius: 5px 5px 0 0;\n      border: solid 1px #dc8f03;\n      background: #ffa500;\n      background: linear-gradient(\n        to right,\n        #dc8f03,\n        #ffa500,\n        #dc8f03,\n        #ffa500,\n        #dc8f03\n      );\n    }\n    \n    .deng:after {\n      position: absolute;\n      bottom: -7px;\n      left: 10px;\n      height: 12px;\n      width: 60px;\n      content: " ";\n      display: block;\n      margin-left: 20px;\n      border-radius: 0 0 5px 5px;\n      border: solid 1px #dc8f03;\n      background: #ffa500;\n      background: linear-gradient(\n        to right,\n        #dc8f03,\n        #ffa500,\n        #dc8f03,\n        #ffa500,\n        #dc8f03\n      );\n    }\n    \n    @font-face {\n      font-family: "鸿蒙字体";\n      src: url("/assets/fonts/HarmonyOS_Sans_SC_Black.ttf");\n    }\n    \n    .deng-t {\n      font-family: 鸿蒙字体;\n      font-size: 26px;\n      color: #dc8f03;\n      font-weight: bold;\n      line-height: 44px;\n      text-align: center;\n    }\n    \n    .night .deng-t,\n    .night .deng-box,\n    .night .deng-box1 {\n      background: transparent !important;\n    }\n    \n    @-moz-keyframes swing {\n      0% {\n        -moz-transform: rotate(-10deg);\n      }\n    \n      50% {\n        -moz-transform: rotate(10deg);\n      }\n    \n      100% {\n        -moz-transform: rotate(-10deg);\n      }\n    }\n    \n    @-webkit-keyframes swing {\n      0% {\n        -webkit-transform: rotate(-10deg);\n      }\n    \n      50% {\n        -webkit-transform: rotate(10deg);\n      }\n    \n      100% {\n        -webkit-transform: rotate(-10deg);\n      }\n    }',e=(n=void 0===n?{}:n).insertAt,"undefined"!=typeof document&&(i=document.head||document.getElementsByTagName("head")[0],(n=document.createElement("style")).type="text/css","top"===e&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=d:n.appendChild(document.createTextNode(d))),(d=document.createElement("div")).className="j-china-lantern",d.innerHTML='<div class="deng-box">\n            <div class="deng">\n                <div class="xian"></div>\n                <div class="deng-a">\n                    <div class="deng-b"><div class="deng-t">喜迎</div></div>\n                </div>\n                <div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div>\n            </div>\n        </div>\n        <div class="deng-box1">\n            <div class="deng">\n                <div class="xian"></div>\n                <div class="deng-a">\n                    <div class="deng-b"><div class="deng-t">新春</div></div>\n                </div>\n                <div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div>\n            </div>\n        </div>',document.body.appendChild(d)});