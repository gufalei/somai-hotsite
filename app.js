!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){!function(a,b){var c=a.module("somai",["ui.router"]);c.config(["$stateProvider","$urlRouterProvider","$locationProvider","$httpProvider",function(b,c,d,e){d.html5Mode({enabled:!1,requireBase:!1}),d.hashPrefix("!"),b.state("home",{url:"/"}),c.rule(function(b,c){var d,e=c.path(),f=c.search();if("/"!==e[e.length-1])return 0===Object.keys(f).length?e+"/":(d=[],a.forEach(f,function(a,b){d.push(b+"="+a)}),e+"/?"+d.join("&"))})}]),a.element(document).ready(function(){a.bootstrap(document,["somai"])})}(window.angular)},{}]},{},[1]);