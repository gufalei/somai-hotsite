!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){!function(a,b,c){var d=a.module("somai",["ui.router","duScroll"]);d.value("duScrollOffset",190),d.config(["$stateProvider","$urlRouterProvider","$locationProvider","$httpProvider",function(b,c,d,e){d.html5Mode({enabled:!1,requireBase:!1}),d.hashPrefix("!"),b.state("home",{url:"/"}).state("sobre",{url:"/sobre/"}).state("sobre.objetivos",{url:"objetivos/"}).state("sobre.dados",{url:"dados/"}).state("sobre.parceiros",{url:"parceiros/"}).state("terras-indigenas",{url:"/terras-indigenas/"}).state("terras-indigenas.mapa",{url:"mapa/"}).state("terras-indigenas.relatorio",{url:"relatorio/"}).state("ameacas",{url:"/ameacas/"}).state("ameacas.mapas",{url:"mapas/"}).state("ameacas.clima",{url:"clima/"}).state("ameacas.antropica",{url:"antropica/"}).state("ameacas.calc",{url:"calculadora/"}),c.rule(function(b,c){var d,e=c.path(),f=c.search();if("/"!==e[e.length-1])return 0===Object.keys(f).length?e+"/":(d=[],a.forEach(f,function(a,b){d.push(b+"="+a)}),e+"/?"+d.join("&"))})}]),d.directive("scrollClass",[function(){return{restrict:"A",scope:{scrollClass:"@",offset:"@"},link:function(a,c,d){function e(){b(window).scrollTop()>=parseInt(a.offset)?b(c[0]).addClass(a.scrollClass):b(c[0]).removeClass(a.scrollClass)}a.offset&&(e(),b(window).bind("scroll",e))}}}]),d.directive("expand",[function(){return{restrict:"A",scope:{expand:"@"},link:function(a,c,d){function e(){var a=b(window).width(),d=b(c).offset().left,e=a-d;b(c).css({width:e,height:"auto"})}"right"==a.expand&&(e(),b(window).bind("resize",e))}}}]),d.controller("SiteCtrl",["$scope","$state","$document",function(b,c,d){b.$on("$stateChangeSuccess",function(b,c,e,f){if(!f.name){var g=a.element(document.getElementById(c.name.replace(".","_")));g.length&&d.scrollToElementAnimated(g)}}),b.$on("duScrollspy:becameActive",function(a,b,d){c.go(d.attr("id").replace("_","."))}),b.$on("duScrollspy:becameInactive",function(){c.go("home")})}]),a.element(document).ready(function(){a.bootstrap(document,["somai"])})}(window.angular,window.jQuery)},{}]},{},[1]);