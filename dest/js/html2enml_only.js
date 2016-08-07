!function t(e,r,n){function a(o,l){if(!r[o]){if(!e[o]){var s="function"==typeof require&&require;if(!l&&s)return s(o,!0);if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[o]={exports:{}};e[o][0].call(u.exports,function(t){var r=e[o][1][t];return a(r?r:t)},u,u.exports,t,e,r,n)}return r[o].exports}for(var i="function"==typeof require&&require,o=0;o<n.length;o++)a(n[o]);return a}({1:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=function(){function t(){n(this,t),this.dict={}}return a(t,[{key:"set",value:function(t,e){t in this.dict?this.dict[t].push(e):this.dict[t]=[e]}},{key:"get",value:function(t){return t in this.dict?this.dict[t][0]:null}},{key:"pop",value:function(t){var e=this.get(t);return e&&this.dict[t].splice(0,1),e}}]),t}(),o=function(){function t(){n(this,t),this.parser=new cssjs,this.allowTags=["html","a","abbr","acronym","address","area","b","bdo","big","blockquote","br","caption","center","cite","code","col","colgroup","dd","del","dfn","div","dl","dt","em","font","h1","h2","h3","h4","h5","h6","hr","i","img","ins","kbd","li","map","ol","p","pre","q","s","samp","small","span","strike","strong","sub","sup","table","tbody","td","tfoot","th","thead","title","tr","tt","u","ul","var","xmp","en-media","en-todo","en-note"],this.allowAttrs=["style","name","href","src","alt"]}return a(t,[{key:"transCssByAllStyle",value:function(){var t=$("style"),e=t.text();this.transCssByString(e),t.remove()}},{key:"transCssByAllLink",value:function(t){function e(e){i+="\n"+e,o+1===a.length&&(n.transCssByString(i),t()),o++}function r(t){if(t===a.length)return e;var n=a[t];$(n).remove();var i=n.href;return $.get(i,r(t+1)),e}var n=this,a=$('link[type="text/css"]'),i="",o=0;r(0)}},{key:"transCanvas2Background",value:function(){var t=$("canvas");t.each(function(){var t=this.toDataURL("image/png"),e=$(this),r=$("<img/>");r.attr("style",e.attr("style")),r.attr("class",e.attr("class")),r.css("width",e.attr("width")+"px"),r.css("height",e.attr("height")+"px"),r.attr("src",t),e.after(r),e.remove()})}},{key:"start",value:function(){var t=this;setTimeout(function(){t.transCssByAllStyle(),t.clearAllClass(),t.transId2Name(),t.transCheck2Todo(),t.clearAllClass(),t.clearAllImg(),t.transBody()},0)}},{key:"transCssByString",value:function(t){String.prototype.replaceAll=function(t,e,r){return RegExp.prototype.isPrototypeOf(t)?this.replace(t,e):this.replace(new RegExp(t,r?"gi":"g"),e)};for(var e=this.parser.parseCSS(t),r=new i,n=[],a=0;a<e.length;a++){var o=e[a],l=o.selector;l=l.replaceAll("\n"," ");var s=l.split(","),c=!0,u=!1,f=void 0;try{for(var h,v=s[Symbol.iterator]();!(c=(h=v.next()).done);c=!0){var y=h.value,d=this._calPower(y);r.set(d,o),n.push(d)}}catch(p){u=!0,f=p}finally{try{!c&&v["return"]&&v["return"]()}finally{if(u)throw f}}}var m=!0,g=!1,k=void 0;try{for(var b,w=n[Symbol.iterator]();!(m=(b=w.next()).done);m=!0){var C=b.value,x=r.pop(C);try{var A=!0,B=!1,S=void 0;try{for(var O,L=x.rules[Symbol.iterator]();!(A=(O=L.next()).done);A=!0){var T=O.value;$(x.selector).css(T.directive,T.value)}}catch(p){B=!0,S=p}finally{try{!A&&L["return"]&&L["return"]()}finally{if(B)throw S}}}catch(q){console.log(x.selector,q)}}}catch(p){g=!0,k=p}finally{try{!m&&w["return"]&&w["return"]()}finally{if(g)throw k}}}},{key:"_calPower",value:function(t){var e=t.split(" "),r=0,n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value,c=s.trim();if(""!==c)if(c.startsWith("#"))r+=100;else if(c.startsWith("."))r+=10;else{if(c.startsWith("@")){r=-1;break}r+=1}}}catch(u){a=!0,i=u}finally{try{!n&&l["return"]&&l["return"]()}finally{if(a)throw i}}return r}},{key:"transCssByDom",value:function(t){var e=$(t);this.transCssByString(e.text()),e.remove()}},{key:"transCssByLink",value:function(t){var e=t.href,r=this;$.get(e,function(e){r.transCssByString(e),$(t).remove()})}},{key:"transBody",value:function(){var t=$("body"),e=$("head"),r=$("script"),n=$("<en-note></en-note>");r.remove(),n.html(t.html()),e.remove(),t.after(n),t.remove()}},{key:"clearAllClass",value:function(){$("[class]").removeAttr("class")}},{key:"clearAllUnAllow",value:function(t,e,r){function n(t){var e=$(t);if(a.allowTags.indexOf(t.tagName.toLowerCase())>=0){for(var i=0;i<t.attributes.length;i++){var o=t.attributes[i];a.allowAtclearAllUnAllowtrs.indexOf(o.name.toLowerCase())>=0||e.removeAttr(o.name)}var l=!0,s=!1,c=void 0;try{for(var u,f=e.children()[Symbol.iterator]();!(l=(u=f.next()).done);l=!0){var h=u.value;n(h)}}catch(v){s=!0,c=v}finally{try{!l&&f["return"]&&f["return"]()}finally{if(s)throw c}}}else r||e.remove()}var a=this;n($("html")[0]),console.log("clear ok")}},{key:"transId2Name",value:function(){$("[id]").each(function(){var t=$('<a style="background: transparent; color: #1980e6; text-decoration: none;"/>'),e=$(this);t.attr({name:e.attr("id")}),e.removeAttr("id"),e.prepend(t)})}},{key:"transBrHr",value:function(){$("hr").each(function(){var t=$(this);t.after("<hr/>"),t.remove()}),$("br").each(function(){var t=$(this);t.after("<br/>"),t.remove()})}},{key:"transCheck2Todo",value:function(){$('input[type="checkbox"]').each(function(){var t=$(this),e=$("<en-todo/>");t.after(e),t.prop("checked")?e[0].setAttribute("checked","true"):e[0].setAttribute("checked","false"),t.remove()})}},{key:"transHtml2Canvas",value:function(t,e){var r=$(t),n=0;r.each(function(){var t=$(this);html2canvas($(this)[0],{onrendered:function(a){t.empty(),t.append(a),n++,n>=r.length&&e()}})})}},{key:"getBase64Image",value:function(t){var e=document.createElement("canvas");e.width=t.width,e.height=t.height;var r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);var n=e.toDataURL("image/png");return n}}]),t}();window.html2enml=o,r["default"]=o},{}]},{},[1]);