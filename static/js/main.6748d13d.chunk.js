(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),l=(a(15),a(1)),s=a(2),o=a(3),u=a(5),h=a(4),m=a(6),d=(a(16),[["STEFAN \u017bEROMSKI","pisarze"],["LEONARDO DA VINCI","wynalazcy"],["GRANICA","poj\u0119cia"],["TWIERDZENIE PITAGORASA","matematyka"],["TO BE OR NOT TO BE","cytaty"],["CORN FLAKES","jedzenie"],["SUPERMAN","komiksy"],["\u017bALUZJE","przedmioty"],["WODA MINERALNA","napoje"],["IRON MAN","komiksy"],["DISCO POLO","muzyka"],["BIBLIA","religia"],["THOMAS EDISON","wynalazcy"],["FORREST GUMP","film"]]);function f(e){var t;return t=!0===e.clicked?"LetterClicked":"LetterUnclicked",r.a.createElement("button",{className:t,onClick:e.onClick},e.letter)}var k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"newLetter",value:function(e){var t=this;return r.a.createElement(f,{letter:"A\u0104BC\u0106DE\u0118FGHIJKL\u0141MN\u0143O\xd3PQRS\u015aTUWVXYZ\u0179\u017b"[e],onClick:function(){t.props.onClick(e)},clicked:this.props.clicked[e]})}},{key:"render",value:function(){var e=[],t="A\u0104BC\u0106DE\u0118FGHIJKL\u0141MN\u0143O\xd3PQRS\u015aTUWVXYZ\u0179\u017b",a=t.length/5;t.length>0&&a++;for(var n=0;n<a;n++){for(var i=[],c=0;c<5;c++)5*n+c<t.length&&i.push(this.newLetter(5*n+c));e.push(r.a.createElement("div",{className:"rowOfAlphabet"},i))}return r.a.createElement("div",{className:"Alphabet"},e)}}]),t}(n.Component);function v(e){return r.a.createElement("div",{className:"Lives"},e.lives)}function E(e){return r.a.createElement("div",{className:"Answer"},e.current)}function y(){for(var e=Math.floor(Math.random()*d.length),t=d[e][0],a=d[e][1],n="",r=0;r<t.length;r++)" "!==t[r]?n+="*":n+=" ";for(var i=Array(35).fill(!1),c=0,l=0;l<35;l++)for(var s=0;s<t.length;s++)if(t[s]==="A\u0104BC\u0106DE\u0118FGHIJKL\u0141MN\u0143O\xd3PQRS\u015aTUWVXYZ\u0179\u017b"[l]){i[l]=!0,c++;break}return[t,n,i,c,a]}function O(e){return r.a.createElement("button",{className:"refresh",onClick:e.onClick},"Nowa gra")}var N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={lives:5,mystery:y(),clicked:Array(35).fill(!1),finished:!1,allTrueClicked:0},a.clickHandler=a.clickHandler.bind(Object(l.a)(Object(l.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"clickHandler",value:function(e){var t="A\u0104BC\u0106DE\u0118FGHIJKL\u0141MN\u0143O\xd3PQRS\u015aTUWVXYZ\u0179\u017b",a=this.state.clicked,n=this.state.mystery,r=this.state.lives,i=this.state.finished,c=this.state.stat,l=this.state.allTrueClicked;if(!0!==a[e]&&!0!==i){if(a[e]=!0,!1===n[2][e])0===--r&&(i=!0,c="Niestety, ale przegra\u0142e\u015b");else{l++;for(var s="",o=0;o<n[0].length;o++)t[e]===n[0][o]?s+=t[e]:"*"!==n[1][o]?s+=n[1][o]:" "!==n[0][o]&&(s+="*");n[1]=s,l===n[3]&&(i=!0,c="Brawo! Wygra\u0142e\u015b!")}this.setState({clicked:a,mystery:n,lives:r,finished:i,allTrueClicked:l,stat:c})}}},{key:"refreshHandler",value:function(){document.location.reload()}},{key:"componentDidMount",value:function(){var e="Kategoria: "+this.state.mystery[4];this.setState({stat:e})}},{key:"render",value:function(){var e=this;if(this)return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"left"},r.a.createElement(v,{lives:this.state.lives}),r.a.createElement(O,{onClick:this.refreshHandler}),r.a.createElement(k,{onClick:function(t){e.clickHandler(t)},clicked:this.state.clicked})),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"status"},this.state.stat),r.a.createElement(E,{current:this.state.mystery[1]})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.6748d13d.chunk.js.map