import{$ as d,Aa as Y,Ba as tt,Bb as yt,Ca as et,Cb as xt,Da as at,Ea as nt,Fa as M,Ga as b,H as f,Ha as y,Ia as it,K as l,M as o,N as V,O as A,S as C,U as X,Ua as j,X as $,Y as q,Ya as rt,Z as i,Za as ot,_ as r,_a as x,ab as ct,bb as dt,c as h,cb as N,da as U,db as mt,ea as g,eb as st,fa as F,fb as lt,ga as O,gb as L,ha as v,hb as pt,ia as Z,ib as ut,jb as ft,kb as gt,lb as vt,mb as ht,nb as Ct,o as T,oa as c,ob as Mt,p as E,pa as J,pb as bt,q as R,qa as K,r as B,s as z,sa as Q,u as G,v as H,ya as W}from"./chunk-PNCWNLU3.js";var D=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(e,a){e&1&&(i(0,"p"),c(1,"dashboard works!"),r())},encapsulation:2})};var _=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["app-payments"]],decls:2,vars:0,template:function(e,a){e&1&&(i(0,"p"),c(1,"payments works!"),r())},encapsulation:2})};var w=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["app-projects"]],decls:2,vars:0,template:function(e,a){e&1&&(i(0,"p"),c(1,"projects works!"),r())},encapsulation:2})};var jt=(t,n)=>n.name;function Nt(t,n){if(t&1){let e=U();i(0,"div",5),g("click",function(){let m=G(e).$implicit,Ft=F();return H(Ft.handleMenuClick(m))}),i(1,"div"),d(2,"mat-icon",6),i(3,"span"),c(4),r()()()}if(t&2){let e=n.$implicit,a=F();Z("routerLink",e.endpoint),C("ngClass",a.activatedMenu&&a.activatedMenu.name&&a.activatedMenu.name==e.name?"nav-item activated":"nav-item"),f(4),J(" ",e.name," ")}}var P=class t{constructor(n,e){this.router=n;this.activatedRoute=e}menuList=[{name:"Dashboard",endpoint:"dashboard"},{name:"Students",endpoint:"students"},{name:"Payments",endpoint:"payments"},{name:"Projects",endpoint:"projects"}];activatedMenu;ngOnInit(){this.router.events.subscribe(n=>{if(n instanceof at){let e=n.urlAfterRedirects;if(console.log("currentEndpoint: ",e),!this.activatedMenu&&e){let a=this.menuList.find(m=>e.includes(m.endpoint));a&&(this.activatedMenu=a)}}})}handleMenuClick(n){this.activatedMenu=n}static \u0275fac=function(e){return new(e||t)(l(b),l(nt))};static \u0275cmp=o({type:t,selectors:[["app-navbar"]],decls:8,vars:0,consts:[[1,"main-container"],["routerLink","menuList[0].endpoint",1,"nav-logo",3,"click"],["src","logo.jpg","alt","logo"],[1,"nav-container"],[3,"ngClass","routerLink"],[3,"click","ngClass","routerLink"],["fontIcon","home"]],template:function(e,a){e&1&&(i(0,"div",0)(1,"div",1),g("click",function(){return a.handleMenuClick(a.menuList[0])}),d(2,"img",2),i(3,"span"),c(4,"Students"),r()(),i(5,"div",3),$(6,Nt,5,3,"div",4,jt),r()()),e&2&&(f(6),q(a.menuList))},dependencies:[y,W,ot,rt],styles:[".main-container[_ngcontent-%COMP%]{background-color:#00bfff;height:100%}.main-container[_ngcontent-%COMP%]   div.nav-item[_ngcontent-%COMP%]{font-weight:500;background-color:#00bfff;text-align:center;align-content:center;cursor:pointer}.main-container[_ngcontent-%COMP%]   div.nav-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:45px;align-content:center;text-align:start;padding-left:15%}.main-container[_ngcontent-%COMP%]   div.nav-logo[_ngcontent-%COMP%]{cursor:pointer;height:3rem;padding:.25rem 1rem .5rem}.main-container[_ngcontent-%COMP%]   div.nav-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.5rem}.main-container[_ngcontent-%COMP%]   div.nav-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:.5rem;font-weight:700}.main-container[_ngcontent-%COMP%]   div.nav-item.activated[_ngcontent-%COMP%], .main-container[_ngcontent-%COMP%]   div.nav-item[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background-color:#add8e6}@media only screen and (max-width: 1000px){div.nav-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], div.nav-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}"]})};var S=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["app-layout"]],decls:10,vars:0,consts:[[1,"app-container"],[1,"navbar-container"],[1,"main-section"],[1,"app-header"],["mat-flat-button","","routerLink","/login"]],template:function(e,a){e&1&&(i(0,"div",0)(1,"div",1),d(2,"app-navbar"),r(),i(3,"div",2)(4,"div",3)(5,"h1"),c(6,"Header"),r(),i(7,"button",4),c(8,"logout"),r()(),d(9,"router-outlet"),r()())},dependencies:[P,M,y,x],styles:[".app-container[_ngcontent-%COMP%]{height:100vh;display:flex}.app-container[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%]{width:15vw}.app-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]{width:100vw}.app-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .app-header[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between;padding:0px 2rem;background-color:#add8e6;height:3rem;text-align:center}@media only screen and (max-width: 1000px){div.navbar-container[_ngcontent-%COMP%]{width:65px!important}}"]})};var Dt=(t,n)=>(console.log("authGuard: "),!0);var u=class t{constructor(n){this.http=n}BASEURL="http://localhost:3000";login(n){return h(this,null,function*(){return new Promise(e=>{this.http.post(`${this.BASEURL}/auth/login`,n).subscribe(a=>{e(a)})})})}static \u0275fac=function(e){return new(e||t)(B(Y))};static \u0275prov=T({token:t,factory:t.\u0275fac})};var Tt=["*"];var Et=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Rt=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Bt=new R("MAT_CARD_CONFIG"),_t=(()=>{class t{appearance;constructor(){let e=z(Bt,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(a){return new(a||t)};static \u0275cmp=o({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(a,m){a&2&&X("mat-mdc-card-outlined",m.appearance==="outlined")("mdc-card--outlined",m.appearance==="outlined")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Tt,decls:1,vars:0,template:function(a,m){a&1&&(O(),v(0))},styles:['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-sys-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-sys-corner-medium));border-width:var(--mdc-outlined-card-outline-width, 1px);border-color:var(--mdc-outlined-card-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0})}return t})(),wt=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275dir=A({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var Pt=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275dir=A({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var St=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275cmp=o({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Rt,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(a,m){a&1&&(O(Et),v(0),i(1,"div",0),v(2,1),r(),v(3,2))},encapsulation:2,changeDetection:0})}return t})();var kt=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=V({type:t});static \u0275inj=E({imports:[j,j]})}return t})();var k=class t{constructor(n,e,a){this.router=n;this.authService=e;this.snackBar=a;this.createFrom()}loginForm;horizontalPosition="right";verticalPosition="top";createFrom(){this.loginForm=new lt({username:new L("",[N.required]),password:new L("",[N.required])})}loginSubmit(){return h(this,null,function*(){try{yield this.authService.login(this.loginForm.value),this.snackBar.open("login successfully","",{horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition,duration:2e3}),this.router.navigate(["/dashboard"])}catch(n){console.log("err: ",n)}})}static \u0275fac=function(e){return new(e||t)(l(b),l(u),l(xt))};static \u0275cmp=o({type:t,selectors:[["app-login"]],features:[K([u])],decls:20,vars:1,consts:[[1,"app-container"],[1,"login-container"],[1,"login-header"],[1,"login-form"],[3,"formGroup"],[1,"row"],["matInput","","formControlName","username"],["type","password","matInput","","formControlName","password"],[1,"login-footer"],["mat-flat-button","",3,"click"]],template:function(e,a){e&1&&(i(0,"div",0)(1,"mat-card",1)(2,"mat-card-header",2)(3,"mat-card-title"),c(4,"Sign In"),r()(),i(5,"mat-card-content",3)(6,"form",4)(7,"div",5)(8,"mat-form-field")(9,"mat-label"),c(10,"username"),r(),d(11,"input",6),r()(),i(12,"div",5)(13,"mat-form-field")(14,"mat-label"),c(15,"password"),r(),d(16,"input",7),r()()(),i(17,"div",8)(18,"button",9),g("click",function(){return a.loginSubmit()}),c(19,"Submit"),r()()()()()),e&2&&(f(6),C("formGroup",a.loginForm))},dependencies:[Ct,ht,vt,bt,Mt,yt,ct,x,gt,pt,dt,mt,st,ut,ft,kt,_t,Pt,St,wt],styles:[".app-container[_ngcontent-%COMP%]{display:flex;text-align:center;justify-content:center;height:21rem}.app-container[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]{width:35%;border:2px solid black}mat-card-header[_ngcontent-%COMP%]{justify-content:center;margin-bottom:2rem}"]})};var It=[{path:"login",component:k},{path:"",component:S,canActivate:[Dt],children:[{path:"dashboard",component:D},{path:"students",loadChildren:()=>import("./chunk-ZF2A2CVU.js").then(t=>t.StudentsModule)},{path:"payments",component:_},{path:"projects",component:w}]},{path:"",redirectTo:"/dashboard",pathMatch:"full"},{path:"**",redirectTo:"/dashboard"}];var At={providers:[tt(),Q({eventCoalescing:!0}),it(It)]};var I=class t{title="practice-app";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,a){e&1&&d(0,"router-outlet")},dependencies:[M],encapsulation:2})};et(I,At).catch(t=>console.error(t));
