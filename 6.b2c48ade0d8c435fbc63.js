(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"99Un":function(t,b,o){"use strict";o.r(b),o.d(b,"HomeModule",function(){return f});var n=o("tyNb"),c=o("PCNd"),i=o("fXoL"),e=o("ht9i"),r=o("3Pt+");let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(b){return new(b||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-tax-model-filter"]],decls:49,vars:0,consts:[[1,"py-3"],[1,"form-row"],[1,"col-1","pt-2","text-right"],[1,"col"],[1,"form-control","d-inline"],["disabled",""],[1,"col-1","text-left"]],template:function(t,b){1&t&&(i.Pb(0,"div",0),i.Pb(1,"form"),i.Pb(2,"div",1),i.Pb(3,"div",2),i.Pb(4,"b"),i.vc(5,"Model:"),i.Ob(),i.Ob(),i.Pb(6,"div",3),i.Pb(7,"select",4),i.Pb(8,"option"),i.vc(9,"St\xe1t"),i.Ob(),i.Pb(10,"option",5),i.vc(11,"Vlastn\xed simulace"),i.Ob(),i.Ob(),i.Ob(),i.Pb(12,"div",3),i.Pb(13,"select",4),i.Pb(14,"option",5),i.vc(15,"- zvolte st\xe1t -"),i.Ob(),i.Pb(16,"option"),i.vc(17,"\u010cesk\xe1 republika"),i.Ob(),i.Pb(18,"option",5),i.vc(19,"Slovensko"),i.Ob(),i.Pb(20,"option",5),i.vc(21,"Polsko"),i.Ob(),i.Pb(22,"option",5),i.vc(23,"N\u011bmecko"),i.Ob(),i.Ob(),i.Ob(),i.Pb(24,"div",3),i.Pb(25,"select",4),i.Pb(26,"option",5),i.vc(27,"- zvolte strategii -"),i.Ob(),i.Pb(28,"option"),i.vc(29,"Skute\u010dnost"),i.Ob(),i.Pb(30,"option"),i.vc(31,"ANO"),i.Ob(),i.Pb(32,"option"),i.vc(33,"ODS"),i.Ob(),i.Pb(34,"option"),i.vc(35,"\u010cSSD"),i.Ob(),i.Pb(36,"option"),i.vc(37,"Pir\xe1ti"),i.Ob(),i.Pb(38,"option"),i.vc(39,"Anarchokapitalismus"),i.Ob(),i.Ob(),i.Ob(),i.Pb(40,"div",3),i.Pb(41,"select",4),i.Pb(42,"option",5),i.vc(43,"- zvolte verzi -"),i.Ob(),i.Pb(44,"option"),i.vc(45,"Program volby 2017"),i.Ob(),i.Pb(46,"option"),i.vc(47,"Program volby 2021"),i.Ob(),i.Ob(),i.Ob(),i.Lb(48,"div",6),i.Ob(),i.Ob(),i.Ob())},directives:[r.j,r.e,r.f,r.h,r.k],styles:[""]}),t})();var s=o("ofXK"),a=o("sYmb");function p(t,b){if(1&t&&(i.Pb(0,"span",6),i.vc(1),i.cc(2,"translate"),i.Ob()),2&t){const t=b.$implicit;i.yb(1),i.xc(" ",i.dc(2,1,"taxTag."+t)," ")}}function d(t,b){if(1&t&&(i.Nb(0),i.tc(1,p,3,3,"span",5),i.Mb()),2&t){const t=i.bc().$implicit;i.yb(1),i.gc("ngForOf",t.tags)}}function O(t,b){if(1&t&&(i.Pb(0,"li"),i.Pb(1,"a",8),i.vc(2),i.cc(3,"translate"),i.Ob(),i.Ob()),2&t){const t=b.$implicit;i.yb(1),i.gc("href",t.href,i.qc),i.yb(1),i.xc(" ",i.dc(3,2,t.title)," ")}}function v(t,b){if(1&t&&(i.Nb(0),i.Lb(1,"hr"),i.Pb(2,"h3"),i.vc(3),i.cc(4,"translate"),i.Ob(),i.Pb(5,"ul"),i.tc(6,O,4,4,"li",7),i.Ob(),i.Mb()),2&t){const t=i.bc().$implicit;i.yb(3),i.wc(i.dc(4,2,"otherSources")),i.yb(3),i.gc("ngForOf",t.links)}}function P(t,b){if(1&t&&(i.Pb(0,"div",2),i.Pb(1,"h2"),i.Pb(2,"a",3),i.vc(3),i.cc(4,"translate"),i.Ob(),i.Ob(),i.tc(5,d,2,1,"ng-container",4),i.tc(6,v,7,4,"ng-container",4),i.Ob()),2&t){const t=b.$implicit;i.yb(2),i.gc("routerLink","/tax-detail/"+t.id),i.yb(1),i.xc(" ",i.dc(4,4,t.title)," "),i.yb(2),i.gc("ngIf",null==t.tags?null:t.tags.length),i.yb(1),i.gc("ngIf",null==t.links?null:t.links.length)}}let g=(()=>{class t{constructor(t){this.taxRepositoryService=t}ngOnInit(){}}return t.\u0275fac=function(b){return new(b||t)(i.Kb(e.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-home"]],decls:4,vars:1,consts:[[1,"bg-dark","text-white","rounded","box-shadow","my-3"],["class","bg-white shadow-sm p-4 rounded mb-4",4,"ngFor","ngForOf"],[1,"bg-white","shadow-sm","p-4","rounded","mb-4"],[3,"routerLink"],[4,"ngIf"],["class","badge badge-pill badge-primary mr-2",4,"ngFor","ngForOf"],[1,"badge","badge-pill","badge-primary","mr-2"],[4,"ngFor","ngForOf"],["rel","noreferrer","target","_blank",3,"href"]],template:function(t,b){1&t&&(i.Pb(0,"div"),i.Pb(1,"div",0),i.Lb(2,"app-tax-model-filter"),i.Ob(),i.tc(3,P,7,6,"div",1),i.Ob()),2&t&&(i.yb(3),i.gc("ngForOf",b.taxRepositoryService.getAll()))},directives:[l,s.i,n.b,s.j],pipes:[a.c],styles:[""]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(b){return new(b||t)},t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({imports:[[c.a,n.c.forChild([{path:"",component:g}])]]}),t})()}}]);