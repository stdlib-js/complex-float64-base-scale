"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=u(function(A,d){
var l=require('@stdlib/complex-float64-ctor/dist'),o=require('@stdlib/complex-float64-real/dist'),w=require('@stdlib/complex-float64-imag/dist');function y(e,r){return new l(o(r)*e,w(r)*e)}d.exports=y
});var x=u(function(B,v){
function C(e,r,t,i,s,n){return i[n]=r*e,i[n+s]=t*e,i}v.exports=C
});var m=u(function(D,g){
function R(e,r,t,i,s,n,c){return s[c]=e*r[i],s[c+n]=e*r[i+t],s}g.exports=R
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=q(),b=x(),j=m();p(a,"assign",b);p(a,"strided",j);module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
