"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[417],{417:(P,g,i)=>{i.r(g),i.d(g,{CategoriesPageModule:()=>C});var c=i(6814),l=i(95),o=i(451),n=i(1147),e=i(9212),u=i(9862);const d=t=>[t];function p(t,r){if(1&t&&(e.TgZ(0,"ion-item",7)(1,"ion-avatar",8),e._UZ(2,"img",9),e.qZA(),e.TgZ(3,"ion-label"),e._uU(4),e.qZA()()),2&t){const a=r.$implicit;e.Q6J("routerLink",e.VKq(3,d,"/ingredients/"+a.strCategory)),e.xp6(2),e.s9C("src",a.strCategoryThumb,e.LSH),e.xp6(2),e.Oqu(a.strCategory)}}const m=[{path:"",component:(()=>{var t;class r{constructor(s){this.http=s,this.categories=[]}ngOnInit(){this.http.get("https://www.themealdb.com/api/json/v1/1/categories.php").subscribe(s=>{console.log(s.categories),this.categories=s.categories})}}return(t=r).\u0275fac=function(s){return new(s||t)(e.Y36(u.eN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-categories"]],decls:14,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["fixed",""],["sizeMd","4","offsetMd","4"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],["slot","start"],[3,"src"]],template:function(s,h){1&s&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Categories"),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e._uU(8,"Categories"),e.qZA()()(),e.TgZ(9,"ion-grid",4)(10,"ion-row")(11,"ion-col",5)(12,"ion-list"),e.YNc(13,p,5,5,"ion-item",6),e.qZA()()()()()),2&s&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(9),e.Q6J("ngForOf",h.categories))},dependencies:[c.sg,o.BJ,o.wI,o.W2,o.jY,o.Gu,o.Ie,o.Q$,o.q_,o.Nd,o.wd,o.sr,o.YI,n.rH]}),r})()}];let f=(()=>{var t;class r{}return(t=r).\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[n.Bz.forChild(m),n.Bz]}),r})(),C=(()=>{var t;class r{}return(t=r).\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,l.u5,o.Pc,f]}),r})()}}]);