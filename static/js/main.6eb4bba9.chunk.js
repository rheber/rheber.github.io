(this["webpackJsonprheber.github.io"]=this["webpackJsonprheber.github.io"]||[]).push([[0],{16:function(t,n,e){},17:function(t,n,e){},47:function(t,n,e){"use strict";e.r(n);var i=e(0),r=e.n(i),o=e(10),a=e.n(o),u=(e(16),e(11)),s=e(6),c=(e(17),e(5)),m=e(4),h=[{name:"exit",usage:"exit",summary:"Close the shell.",action:function(){window.close()}},{name:"fortune",usage:"fortune",summary:"Print a random message.",action:function(t){fetch("/assets/text/fortunes/paradoxum").then((function(t){return t.text()})).then((function(n){var e,i=n.split("%\n").filter((function(t){return t.length>0}));t.printOut((e=i)[Math.floor(Math.random()*e.length)])}))}},{name:"github",usage:"github",summary:"Visit my github profile.",action:function(t){t.visit("github.com/rheber")}},{name:"help",usage:"help",summary:"Show this message.",action:function(t){var n=function(t){return["github","unixorn"].includes(t.name)};t.printOut("This is the personal website of Robert Heber."),t.printOut("\n"),t.printOut("My website is a shell because I am cool."),t.printOut("\n"),t.printOut("Commands to get more information about me:"),t.printOut("\n"),t.commands().filter(n).forEach((function(n){t.printOut("".concat(n.usage).padEnd(20)+n.summary)})),t.printOut("\n"),t.printOut("Other commands:"),t.printOut("\n"),t.commands().filter((function(t){return!n(t)})).forEach((function(n){t.printOut("".concat(n.usage).padEnd(20)+n.summary)})),t.printOut("\n"),t.printOut("Keybindings:"),t.printOut("\n"),t.keybindings().forEach((function(n){t.printOut("ctrl-".concat(n.key).padEnd(20)+n.summary)}))}},{name:"unixorn",usage:"unixorn",summary:"Visit the main page of Unixorn, a library I built to create this site.",action:function(t){t.visit("github.com/rheber/unixorn")}}],f=[{key:"d",ctrl:!0,meta:!1,summary:"Close the shell.",action:function(){window.close()}}],b={autoFocus:!0,commands:[].concat(Object(s.a)(c.b.commands.filter((function(t){return"help"!==t.name}))),h),keybindings:[].concat(Object(s.a)(c.b.keybindings),f),startupMessage:"Rob's Shell version 1.0. Enter `help` for basic information."};var l=function(){return Object(m.jsx)(c.a,Object(u.a)({},b))},p=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,48)).then((function(n){var e=n.getCLS,i=n.getFID,r=n.getFCP,o=n.getLCP,a=n.getTTFB;e(t),i(t),r(t),o(t),a(t)}))};a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(l,{})}),document.getElementById("root")),p()}},[[47,1,2]]]);
//# sourceMappingURL=main.6eb4bba9.chunk.js.map