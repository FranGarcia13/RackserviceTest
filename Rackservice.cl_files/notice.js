(function(){if(typeof truste=="undefined"){truste={}}if(typeof truste.eu=="undefined"){truste.eu={}}if(typeof truste.util=="undefined"){truste.util={}
}truste.util.error=function(i,e,h){h=h||{};var g=e&&e.toString()||"",d=h.caller||"";if(e&&e.stack){g+="\n"+e.stack.match(/(@|at)[^\n\r\t]*/)[0]+"\n"+e.stack.match(/(@|at)[^\n\r\t]*$/)[0]
}truste.util.trace(i,g,h);if(truste.util.debug||!e&&!i){return}var c={apigwlambdaUrl:"https://api-js-log.trustarc.com/error",enableJsLog:false};
if(c.enableJsLog){delete h.caller;delete h.mod;delete h.domain;delete h.authority;h.msg=i;var f=new (self.XMLHttpRequest||self.XDomainRequest||self.ActiveXObject)("MSXML2.XMLHTTP.3.0");
f.open("POST",c.apigwlambdaUrl,true);f.setRequestHeader&&f.setRequestHeader("Content-type","application/json");
f.send(truste.util.getJSON({info:truste.util.getJSON(h)||"",error:g,caller:d}))}};truste.util.trace=function(){if(self.console&&console.log&&(this.debug||this.debug!==false&&(self.location.hostname.indexOf(".")<0||self.location.hostname.indexOf(".truste-svc.net")>0))){if(console.log.apply){console.log.apply(console,arguments)
}else{var c=Function.prototype.bind.call(console.log,console);c.apply(console,arguments)}return true}return false
};truste.util.getJSON=function(d){if(self.JSON&&!(self.JSON.org||self.JSON.license||self.JSON.copyright)){return self.JSON.stringify(d)
}if(d instanceof Array){var f="[";if(d.length){f+=truste.util.getJSON(d[0]);for(var e=1;e<d.length;e++){f+=","+truste.util.getJSON(d[e])
}}return f+"]"}else{if(typeof d=="string"){return'"'+d+'"'}else{if((d) instanceof Object){var c=false,f="{";
for(var h in d){f+=(c?",":"")+'"'+h+'":'+truste.util.getJSON(d[h]);c=true}return f+"}"}else{return d===undefined?undefined:d+""
}}}};(function(){var c=self.onerror;self.onerror=function d(j,h,e,f,i){var g=[].slice.call(arguments);
var k=j+(h?"; "+h:"")+(e?" "+e:"")+(f?":"+f:"");if((k+""+(i&&i.stack)).match(/truste|trustarc|notice/)){truste.util.error("Got Window Error:",i&&i.stack?i:k,{product:"cm",tag:h})
}c&&c.apply(self,g)}})();var b=truste.eu.bindMap={version:"v1.7-9410",domain:"squarespace.com",width:parseInt("660"),height:parseInt("705"),baseName:"te-notice-clr1-36c65693-2991-4407-86d3-5a02ae66838c",showOverlay:"{ShowLink}",hideOverlay:"{HideLink}",anchName:"te-notice-clr1-36c65693-2991-4407-86d3-5a02ae66838c-anch",intDivName:"te-notice-clr1-36c65693-2991-4407-86d3-5a02ae66838c-itl",iconSpanId:"te-notice-clr1-36c65693-2991-4407-86d3-5a02ae66838c-icon",containerId:(!"teconsent"||/^_LB.*LB_$/.test("teconsent"))?"teconsent":"teconsent",messageBaseUrl:"http://consent.trustarc.com/noticemsg?",originBaseUrl:"https://consent.trustarc.com/",daxSignature:"",privacyUrl:"",prefmgrUrl:"http://consent-pref.trustarc.com/?type=squarespace2",text:"true",icon:"Cookie Preferences",locale:"en",language:"en",country:"cl",state:"",categoryCount:parseInt("3",10)||3,noticeJsURL:((parseInt("0")?"https://consent.trustarc.com/":"http://consent.trustarc.com/"))+"asset/notice.js/v/v1.7-9410",assetServerURL:(parseInt("0")?"https://consent.trustarc.com/":"http://consent.trustarc.com/")+"asset/",consensuUrl:"https://trustarc.mgr.consensu.org/",cdnURL:"https://consent.trustarc.com/".replace(/^(http:)?\/\//,"https://"),iconBaseUrl:"http://consent.trustarc.com/",behavior:"implied",behaviorManager:"eu",provisionedFeatures:"",cookiePreferenceIcon:"trustarc_cookiepreferences.png",cookieExpiry:parseInt("395",10)||395,closeButtonUrl:"https://consent.trustarc.com/get?name=Icon_Cross_Large.svg",apiDefaults:'{"reportlevel":16777215}',cmTimeout:parseInt("6000",10),popTime:new Date("".replace(" +0000","Z").replace(" ","T")).getTime()||null,popupMsg:"",bannerMsgURL:"http://consent.trustarc.com/bannermsg?",IRMIntegrationURL:"",irmWidth:parseInt(""),irmHeight:parseInt(""),irmContainerId:(!"_LBirmcLB_"||/^_LB.*LB_$/.test("_LBirmcLB_"))?"teconsent":"_LBirmcLB_",irmText:"",lspa:"",ccpaText:"",containerRole:"",iconRole:"",atpIds:"",dntOptedIn:"",gpcOptedIn:"",feat:{iabGdprApplies:false,consentResolution:false,dropBehaviorCookie:true,crossDomain:false,uidEnabled:false,replaceDelimiter:false,optoutClose:false,enableIRM:false,enableCM:true,enableBanner:false,enableCCPA:false,enableIrmAutoOptOut:false,ccpaApplies:false,unprovisionedDropBehavior:true,unprovisionedIab:false,unprovisionedCCPA:false,dnt:false&&(navigator.doNotTrack=="1"||window.doNotTrack=="1"),dntShowUI:false,gpc:false&&(navigator.globalPrivacyControl||window.globalPrivacyControl),iabBannerApplies:false,enableTwoStepVerification:false,enableContainerRole:true,enableIconRole:true,enableReturnFocus:false,enableShopify:0,enableReturnFocus:false,enableTcfOptout:false,enableTransparentAlt:true,enableACString:false,gcm:{ads:undefined,analytics:undefined}},autoDisplayCloseButton:false,localization:{modalTitle:"Your choices regarding the use of cookies on this site"}};
if(/layout=gdpr/.test(b.prefmgrUrl)){b.isGdprLayout=true}if(/layout=iab/.test(b.prefmgrUrl)){b.isIabLayout=true
}if(self.location.protocol!="http:"){for(var a in b){if(b[a]&&b[a].replace){b[a]=b[a].replace(/^(http:)?\/\//,"https://")
}}}truste.eu.noticeLP=truste.eu.noticeLP||{};truste.eu.noticeLP.pcookie=true;truste.util.createCookie=function(z,o,e,h){if(truste.util.cookie){o=truste.util.cookie.convert(o)
}var c=truste.eu.bindMap||{},w="; expires=";if(!e){var t=new Date();t.setDate(t.getDate()+c.cookieExpiry);
w+=t.toGMTString()}else{if(e=="0"){w=""}else{w+=e}}if(h&&truste.util.createCookieStorage){truste.util.createCookieStorage(z,o,t)
}var u=c.domain,k=self.location.hostname;var f=!!k.match(/^\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}$/)||k=="localhost";
var q=new RegExp("[.]"+u+"$|^"+u+"$");var l=u&&q.test(k)?u:(f?k:k.replace(/^www\./,""));var g=((self.location.protocol=="https:")?" Secure;":"");
var y=g?"None;":"Lax;";var n=(truste.util.samesite&&!truste.util.samesite(navigator.userAgent)?"":" SameSite="+y)+g;
if(typeof truste.eu.noticeLP.pcookie!="undefined"){document.cookie=z+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;domain="+(f?"":".")+l.replace(/^\./,"")+";"+n;
if(!c.topLevelDomain){var r=0,x=l,m=x.split("."),v=[],j="_gd"+(new Date()).getTime();while(r<(m.length-1)&&document.cookie.indexOf(j+"="+j)==-1){x=m.slice(-1-(++r)).join(".");
document.cookie=j+"="+j+";domain="+x+";";v.push(j)}c.topLevelDomain=x;for(var d=0;d<v.length;d++){document.cookie=v[d]+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+x+";"
}document.cookie=j+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+x+";"+n}l=c.topLevelDomain}self.document.cookie=z+"="+o+w+"; path=/;domain="+(f?"":".")+l.replace(/^\./,"")+";"+n
};(function(c){var g=function(m){var o=self.document,n=o.createElement("script");n.setAttribute("async","async");
n.setAttribute("type","text/javascript");n.setAttribute("crossorigin","");switch(m){case"tcfapi.js":if(c.feat.iab){return
}n.setAttribute("importance","high");n.src=c.consensuUrl+"asset/"+m;c.feat.iab=true;break;case"uspapi.js":n.src=c.assetServerURL+m;
break}(o.getElementById(c.containerId)||o.getElementsByTagName("body")[0]||o.getElementsByTagName("head")[0]).appendChild(n)
};var k=function k(m){var n=new RegExp("\\s*"+m.replace(".","\\.")+"\\s*=\\s*([^,;]*)").exec(document.cookie);
if(n&&n.length>1){return n[1]}};if(c.feat.unprovisionedCCPA===true){g("uspapi.js");if(!k("notice_gdpr_prefs")){truste.util.createCookie("usprivacy","1---",null,false)
}}if(c.feat.unprovisionedDropBehavior===true){truste.util.createCookie("notice_behavior","none",null,false)
}var j=function(r,q,m,p){if(r()){q();return}var n,o=function(){if(r()){n=clearInterval(n);q()}};n=setInterval(o,m);
o();setTimeout(function(){clearInterval(n)},p)};if(c.feat.unprovisionedIab===true){if(c.isIabLayout){var e=false;
var h=document.head.getElementsByTagName("script");for(var f=0;f<h.length;f++){var i=h[f];if(i.id==="trustarc-tcfapi"){e=true;
c.feat.iab=true}}if(!e){j(function l(){return typeof __tcfapi!=="undefined"},function d(){g("tcfapi.js")
},10,30000)}}}})(truste.eu.bindMap)})();