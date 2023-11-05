!function(){const t=chrome.i18n.getMessage;if(console.log("screenrecorder.js Start"),document.getElementById("ccScreenRecorder"))return;if(!navigator.mediaDevices)return void alert(t("TssNotAllowShare"));const style=document.createElement("style");style.innerHTML='@keyframes color-change {\n        0% {\n          outline: 4px solid rgb(24, 128, 56); /* Green */\n        }\n        50% {\n          outline: 4px solid rgb(56, 168, 96); /* Light Green */\n        }\n        100% {\n          outline: 4px solid rgb(24, 128, 56); /* Green */\n        }\n      }\n      \n      #ccScreenRecorder {\n        font-weight: bold;\n        position: absolute;\n        cursor: move;\n        z-index: 999999999;\n        outline: 4px solid rgb(24, 128, 56); /* Green */\n        resize: both;\n        overflow: hidden;\n        height: 720px;\n        width: 1024px;\n        top: 30%;\n        left: 30%;\n        pointer-events: none;\n        font-size: 10px;\n        border: 2px solid rgb(231, 76, 60); /* Darker Green */\n        border-radius: 10px;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n      }\n      \n      #ccScreenRecorderHeader {\n        background: rgb(24, 128, 56); /* Green */\n        color: white;\n        text-align: center;\n        height: 20px;\n        cursor: pointer;\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        pointer-events: auto;\n        font-size:16px;\n      }\n      \n      #ccScreenRecorderTitle {\n        cursor: move;\n        user-select: none;\n        width: 66%;\n      }\n      \n      #ccScreenRecorderCropArea {\n        height: calc(100% - 20px);\n        width: 100%;\n      }\n      \n      .animation {\n        animation: color-change 5s infinite;\n      }\n      \n      #ccScreenRecorderHeader:hover {\n        background-color: rgb(56, 168, 96); /* Light Green */\n      }\n      \n      #ccScreenRecorderHeader::before {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-image: linear-gradient(\n          45deg,\n          rgba(255, 255, 255, 0.8) 0%,\n          rgba(255, 255, 255, 0.2) 100%\n        );\n        opacity: 0;\n        pointer-events: none;\n        transition: opacity 0.3s ease-in-out;\n      }\n      ',document.getElementsByTagName("html")[0].appendChild(style);let ccScreenRecorderHolder=document.createElement("div");ccScreenRecorderHolder.setAttribute("id","ccScreenRecorder"),ccScreenRecorderHolder.innerHTML=`<div id="ccScreenRecorderCropArea"></div>\n        <div id="ccScreenRecorderHeader">\n            <div id="ccScreenRecorderStart">${t("TssStartRecord")}</div>\n            <div id="ccScreenRecorderTitle">${t("TssDrapRecArea")}</div>\n            <div id="ccScreenRecorderClose">${t("TssCloseRecArea")}</div>\n        </div>`;const ccScreenRecorderStart=ccScreenRecorderHolder.querySelector("#ccScreenRecorderStart");ccScreenRecorderStart.onclick=function(){if(recorder)return recorder.stop(),void window.postMessage({action:"ccScriptMsgSSstop",href:location.href});try{!async function(){const buffer=[];let option={mimeType:"video/webm;codecs=vp8,opus"};MediaRecorder.isTypeSupported("video/webm;codecs=vp9,opus")?option={mimeType:"video/webm;codecs=vp9,opus"}:MediaRecorder.isTypeSupported("video/webm;codecs=h264")&&(option={mimeType:"video/webm;codecs=h264"});const cropTarget=await CropTarget.fromElement(ccScreenRecorderCropArea),stream=await navigator.mediaDevices.getDisplayMedia({preferCurrentTab:!0,video:{cursor:"never"},audio:{sampleRate:48e3,sampleSize:16,channelCount:2}}),[track]=stream.getVideoTracks();await track.cropTo(cropTarget),(recorder=new MediaRecorder(stream,option)).start(),recorder.onstart=function(e){buffer.slice(0),ccScreenRecorderStart.innerHTML=t("TssStopRec"),ccScreenRecorderHolder.classList.add("animation")},recorder.ondataavailable=function(e){buffer.push(e.data)},recorder.onstop=function(){const fileBlob=new Blob(buffer,{type:option}),a=document.createElement("a");a.href=URL.createObjectURL(fileBlob),a.download=`${document.title}.webm`,a.click(),a.remove(),buffer.slice(0),stream.getTracks().forEach((track=>track.stop())),recorder=void 0,ccScreenRecorderStart.innerHTML=t("TssStartRec"),ccScreenRecorderHolder.classList.remove("animation")}}()}catch(e){return void console.log(e)}},ccScreenRecorderHolder.querySelector("#ccScreenRecorderClose").onclick=function(){recorder&&recorder.stop(),ccScreenRecorderHolder.remove(),window.postMessage({action:"ccScriptMsgSSstop",href:location.href})};const ccScreenRecorderCropArea=ccScreenRecorderHolder.querySelector("#ccScreenRecorderCropArea");ccScreenRecorderHolder.querySelector("#ccScreenRecorderTitle").onpointerdown=e=>{let pos1,pos2,pos3,pos4;pos3=e.clientX,pos4=e.clientY,pos3-ccScreenRecorderHolder.offsetWidth-ccScreenRecorderHolder.offsetLeft>-20&&pos4-ccScreenRecorderHolder.offsetHeight-ccScreenRecorderHolder.offsetTop>-20||(document.onpointermove=e=>{pos1=pos3-e.clientX,pos2=pos4-e.clientY,pos3=e.clientX,pos4=e.clientY,ccScreenRecorderHolder.style.top=ccScreenRecorderHolder.offsetTop-pos2+"px",ccScreenRecorderHolder.style.left=ccScreenRecorderHolder.offsetLeft-pos1+"px"},document.onpointerup=()=>{document.onpointerup=null,document.onpointermove=null})},document.getElementsByTagName("html")[0].appendChild(ccScreenRecorderHolder);const video=document.querySelector("video");if(video){video.clientHeight>=0&&video.clientWidth>=0&&(ccScreenRecorderHolder.style.height=video.clientHeight+20+"px",ccScreenRecorderHolder.style.width=video.clientWidth+"px");const videoOffset=function(el){let parentTop=el.offsetTop,parentLeft=el.offsetLeft,current=el.offsetParent;for(;current;)parentTop+=current.offsetTop,parentLeft+=current.offsetLeft,current=current.offsetParent;return{top:parentTop,left:parentLeft}}(video);videoOffset.top>=0&&videoOffset.left>=0&&(ccScreenRecorderHolder.style.top=videoOffset.top+"px",ccScreenRecorderHolder.style.left=videoOffset.left+"px");let catAttr=ccScreenRecorderHolder.getBoundingClientRect();document.documentElement.scrollTop+catAttr.bottom>document.documentElement.scrollTop+window.innerHeight&&(ccScreenRecorderHolder.style.top=document.documentElement.scrollTop+window.innerHeight-catAttr.height+"px")}var recorder;window.addEventListener("message",(event=>{event.data.scriptAction&&event.data.href===location.href&&"scriptTabidRemoved"==event.data.scriptAction&&"screenrecorder.js"==event.data.scriptName&&(recorder&&recorder.stop(),ccScreenRecorderHolder.remove())}))}();