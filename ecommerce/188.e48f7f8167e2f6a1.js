"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[188],{2188:(ie,C,l)=>{l.r(C),l.d(C,{ProductsComponent:()=>ee});var u=l(6814),T=l(1120),L=l(8129),e=l(4769);function I(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.previous())})("click",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function k(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function A(i,a){if(1&i&&(e.TgZ(0,"li",9),e.YNc(1,I,4,2,"a",10),e.YNc(2,k,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function w(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const s=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(s.value))})("click",function(){e.CHM(t);const s=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(s.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.hij("",n.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function y(i,a){if(1&i&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(3),e.hij("",n.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function Z(i,a){if(1&i&&(e.TgZ(0,"li"),e.YNc(1,w,6,5,"a",10),e.YNc(2,y,7,5,"ng-container",15),e.qZA()),2&i){const t=a.$implicit;e.oxw(2);const n=e.MAs(1);e.ekj("current",n.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",n.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",n.getCurrent()===t.value)}}function M(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.next())})("click",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function S(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function D(i,a){if(1&i&&(e.TgZ(0,"li",17),e.YNc(1,M,4,2,"a",10),e.YNc(2,S,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function N(i,a){if(1&i&&(e.TgZ(0,"ul",4),e.YNc(1,A,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,Z,3,6,"li",7),e.YNc(5,D,3,4,"li",8),e.qZA()),2&i){const t=e.oxw(),n=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",n.getCurrent()," / ",n.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",n.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class x{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(a){return null==a.id&&(a.id=this.DEFAULT_ID),this.instances[a.id]?this.updateInstance(a):(this.instances[a.id]=a,!0)}updateInstance(a){let t=!1;for(let n in this.instances[a.id])a[n]!==this.instances[a.id][n]&&(this.instances[a.id][n]=a[n],t=!0);return t}getCurrentPage(a){return this.instances[a]?this.instances[a].currentPage:1}setCurrentPage(a,t){if(this.instances[a]){let n=this.instances[a];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[a].currentPage=t,this.change.emit(a))}}setTotalItems(a,t){this.instances[a]&&0<=t&&(this.instances[a].totalItems=t,this.change.emit(a))}setItemsPerPage(a,t){this.instances[a]&&(this.instances[a].itemsPerPage=t,this.change.emit(a))}getInstance(a=this.DEFAULT_ID){return this.instances[a]?this.clone(this.instances[a]):{}}clone(a){var t={};for(var n in a)a.hasOwnProperty(n)&&(t[n]=a[n]);return t}}const F=Number.MAX_SAFE_INTEGER;let J=(()=>{class i{constructor(t){this.service=t,this.state={}}transform(t,n){if(!(t instanceof Array)){let d=n.id||this.service.defaultId();return this.state[d]?this.state[d].slice:t}let c,g,s=n.totalItems&&n.totalItems!==t.length,r=this.createInstance(t,n),o=r.id,p=r.itemsPerPage,m=this.service.register(r);if(!s&&t instanceof Array){if(p=+p||F,c=(r.currentPage-1)*p,g=c+p,this.stateIsIdentical(o,t,c,g))return this.state[o].slice;{let f=t.slice(c,g);return this.saveState(o,t,f,c,g),this.service.change.emit(o),f}}return m&&this.service.change.emit(o),this.saveState(o,t,t,c,g),t}createInstance(t,n){return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||t.length}}checkConfig(t){const s=["itemsPerPage","currentPage"].filter(r=>!(r in t));if(0<s.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${s.join(", ")}`)}saveState(t,n,s,r,o){this.state[t]={collection:n,size:n.length,slice:s,start:r,end:o}}stateIsIdentical(t,n,s,r){let o=this.state[t];return!(!o||o.size!==n.length||o.start!==s||o.end!==r)&&o.slice.every((g,p)=>g===n[s+p])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(x,16))},i.\u0275pipe=e.Yjl({name:"paginate",type:i,pure:!1}),i})(),B=(()=>{class i{constructor(t,n){this.service=t,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(s=>{this.id===s&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const n=Math.ceil(t.totalItems/t.itemsPerPage);return n<t.currentPage&&0<n?n:t.currentPage<1?1:t.currentPage}createPageArray(t,n,s,r){r=+r;let o=[];const c=Math.max(Math.ceil(s/n),1),g=Math.ceil(r/2),p=t<=g,m=c-g<t,d=!p&&!m;let f=r<c,h=1;for(;h<=c&&h<=r;){let v,b=this.calculatePageNumber(h,t,r,c);v=f&&(2===h&&(d||m)||h===r-1&&(d||p))?"...":b,o.push({label:v,value:b}),h++}return o}calculatePageNumber(t,n,s,r){let o=Math.ceil(s/2);return t===s?r:1===t?t:s<r?r-o<n?r-s+t:o<n?n-o+t:t:t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(x),e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),i})();function P(i){return!!i&&"false"!==i}let O=(()=>{class i{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=P(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=P(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=P(t)}trackByIndex(t){return t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,n){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(r){return n.pageChange.emit(r)})("pageBoundsCorrection",function(r){return n.pageBoundsCorrection.emit(r)}),e.TgZ(2,"nav",2),e.YNc(3,N,6,8,"ul",3),e.qZA()()),2&t){const s=e.MAs(1);e.Q6J("id",n.id)("maxSize",n.maxSize),e.xp6(2),e.uIk("aria-label",n.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(n.autoHide&&s.pages.length<=1))}},dependencies:[B,u.O5,u.sg,u.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),i})(),U=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[x],imports:[[u.ez]]}),i})();var E=l(530),_=l(95),R=l(756),Y=l(0),q=l(9779),z=l(9196),H=l(2425);function Q(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"i",22),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.addToMyWishlist(s._id))}),e.qZA()}}function j(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"i",23),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.removeWishlist(s._id))}),e.qZA()}}function G(i,a){if(1&i&&e._UZ(0,"i",24),2&i){const t=a.$implicit,n=e.oxw().$implicit;e.ekj("rating-color",n.ratingsAverage>=t)}}const W=function(i){return["/details",i]},$=function(){return[1,2,3,4,5]};function K(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",8)(1,"div",9),e.YNc(2,Q,1,0,"i",10),e.YNc(3,j,1,0,"i",11),e.TgZ(4,"header",12),e._UZ(5,"img",13),e.TgZ(6,"h3",14),e._uU(7),e.ALo(8,"cuttext"),e.qZA(),e.TgZ(9,"h4",15),e._uU(10),e.qZA(),e.TgZ(11,"div",16)(12,"span"),e._uU(13),e.ALo(14,"currency"),e.qZA(),e.TgZ(15,"p",17),e.YNc(16,G,1,2,"i",18),e.TgZ(17,"span",19),e._uU(18),e.qZA()()()(),e.TgZ(19,"footer")(20,"button",20,21),e.NdJ("click",function(){const r=e.CHM(t).$implicit,o=e.MAs(21),c=e.oxw(2);return e.KtG(c.addProduct(r._id,o))}),e._uU(22," +Add To Cart "),e.qZA()()()()}if(2&i){const t=a.$implicit,n=e.oxw(2);e.xp6(2),e.Q6J("ngIf",!n.wishlistData.includes(t._id)),e.xp6(1),e.Q6J("ngIf",n.wishlistData.includes(t._id)),e.xp6(1),e.Q6J("routerLink",e.VKq(17,W,t._id)),e.xp6(1),e.Q6J("src",t.imageCover,e.LSH)("alt",t.title)("title",t.title),e.xp6(2),e.Oqu(e.xi3(8,11,t.title,2)),e.xp6(3),e.Oqu(t.category.name),e.xp6(3),e.Oqu(e.xi3(14,14,t.price,"e\xa3")),e.xp6(3),e.Q6J("ngForOf",e.DdM(19,$)),e.xp6(2),e.hij(" ",t.ratingsAverage,"")}}const V=function(i,a,t){return{id:"productPaginate",itemsPerPage:i,currentPage:a,totalItems:t}};function X(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"section",1)(1,"h2",2),e._uU(2,"All Products"),e.qZA(),e.TgZ(3,"input",3),e.NdJ("ngModelChange",function(s){e.CHM(t);const r=e.oxw();return e.KtG(r.term=s)}),e.qZA(),e.TgZ(4,"div",4),e.YNc(5,K,23,20,"div",5),e.ALo(6,"paginate"),e.ALo(7,"search"),e.qZA(),e.TgZ(8,"div",6)(9,"pagination-controls",7),e.NdJ("pageChange",function(s){e.CHM(t);const r=e.oxw();return e.KtG(r.pageChanged(s))})("pageBoundsCorrection",function(s){e.CHM(t);const r=e.oxw();return e.KtG(r.pageChanged(s))}),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.term),e.xp6(2),e.Q6J("ngForOf",e.xi3(6,6,e.xi3(7,9,t.Products,t.term),e.kEZ(12,V,t.pageSize,t.curentPage,t.total))),e.xp6(4),e.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0)}}let ee=(()=>{class i{constructor(t,n,s,r,o){this._ProductService=t,this._CartsService=n,this._WishlistService=s,this._ToastrService=r,this._Renderer2=o,this.Products=[],this.wishlistData=[],this.pageSize=0,this.curentPage=1,this.total=0,this.term=""}ngOnInit(){this._ProductService.getProduct().subscribe({next:t=>{console.log(t),console.log("Product",t.data),this.Products=t.data,this.pageSize=t.metadata.limit,this.curentPage=t.metadata.currtentPage,this.total=t.results},error:t=>{console.log(t)}}),this._WishlistService.getWishlist().subscribe({next:t=>{const n=t.data.map(s=>s._id);this.wishlistData=n}})}addProduct(t,n){this._Renderer2.setAttribute(n,"disabled","true"),this._CartsService.addToCart(t).subscribe({next:s=>{console.log(s),console.log(s.message),this._ToastrService.success(s.message,"",{closeButton:!0,progressBar:!0,progressAnimation:"increasing",positionClass:"toast-top-right",timeOut:1e3}),this._Renderer2.removeAttribute(n,"disabled"),this._CartsService.cartNumber.next(s.numOfCartItems)},error:s=>{this._Renderer2.removeAttribute(n,"disabled")}})}pageChanged(t){this._ProductService.getProduct(t).subscribe({next:n=>{console.log(n),console.log("Product",n.data),this.Products=n.data,this.pageSize=n.metadata.limit,this.curentPage=n.metadata.currentPage,this.total=n.results},error:n=>{console.log(n)}})}addToMyWishlist(t){this._WishlistService.addToWishlist(t).subscribe({next:n=>{console.log(n),this._ToastrService.success(n.message),this.wishlistData=n.data,this._WishlistService.wishNum.next(n.data.length)}})}removeWishlist(t){this._WishlistService.removeItemFromWishlist(t).subscribe({next:n=>{console.log(n),this._ToastrService.success(n.message),this.wishlistData=n.data,this._WishlistService.wishNum.next(n.data.length);const s=this.Products.filter(r=>this.wishlistData.includes(r._id));console.log(s),this.Products=s}})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(Y.M),e.Y36(q._),e.Y36(z.M),e.Y36(H._W),e.Y36(e.Qsj))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-products"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","py-4",4,"ngIf"],[1,"py-4"],[1,"text-center","text-main","mb-2"],["type","text","placeholder","Search....",1,"form-control","w-50","form-control-sm","mx-auto","my-3",3,"ngModel","ngModelChange"],[1,"row","g-4","justify-content-center"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","align-items-center"],["id","productPaginate","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","h-100"],["class","fa-regular fa-heart  heart my-wish",3,"click",4,"ngIf"],["class","fa-solid fa-heart heart",3,"click",4,"ngIf"],["role","button",3,"routerLink"],[1,"w-100",3,"src","alt","title"],[1,"small"],[1,"h6","text-main"],[1,"d-flex","align-items-center","justify-content-between","small"],[1,"mb-0"],["class","fas fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"btn-main","py-2","w-100",3,"click"],["btnAdd",""],[1,"fa-regular","fa-heart","heart","my-wish",3,"click"],[1,"fa-solid","fa-heart","heart",3,"click"],[1,"fas","fa-star"]],template:function(n,s){1&n&&e.YNc(0,X,10,16,"section",0),2&n&&e.Q6J("ngIf",s.Products.length>0)},dependencies:[u.ez,u.sg,u.O5,u.H9,T.rH,L.r,U,J,O,E.C,_.u5,_.Fj,_.JJ,_.On,R.bB]})}return i})()}}]);