"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[691],{9691:(A,_,c)=>{c.r(_),c.d(_,{DetailsComponent:()=>T});var a=c(6814),l=c(756),t=c(4769),d=c(1120),u=c(0),h=c(9779),p=c(9196),m=c(2425);function g(o,r){if(1&o&&t._UZ(0,"img",19),2&o){const i=t.oxw().$implicit;t.Q6J("src",i,t.LSH)}}function D(o,r){1&o&&(t.ynx(0),t.YNc(1,g,1,1,"ng-template",18),t.BQk())}function v(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"i",20),t.NdJ("click",function(){t.CHM(i);const e=t.oxw(2);return t.KtG(e.addToMyWishlist(e.productDetails._id))}),t.qZA()}}function f(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"i",21),t.NdJ("click",function(){t.CHM(i);const e=t.oxw(2);return t.KtG(e.removeWishlist(e.productDetails._id))}),t.qZA()}}function x(o,r){if(1&o){const i=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"owl-carousel-o",4),t.YNc(4,D,2,0,"ng-container",5),t.qZA()(),t.TgZ(5,"div",6)(6,"div",7),t.YNc(7,v,1,0,"i",8),t.YNc(8,f,1,0,"i",9),t.qZA(),t.TgZ(9,"div")(10,"h2",10),t._uU(11),t.qZA(),t.TgZ(12,"p",11),t._uU(13),t.qZA(),t.TgZ(14,"span"),t._uU(15),t.qZA()(),t.TgZ(16,"div",12)(17,"span",13),t._uU(18),t.ALo(19,"currency"),t.qZA(),t.TgZ(20,"p",14),t._UZ(21,"i",15),t._uU(22),t.qZA()(),t.TgZ(23,"button",16,17),t.NdJ("click",function(){t.CHM(i);const e=t.MAs(24),n=t.oxw();return t.KtG(n.addProduct(n.productDetails._id,e))}),t._uU(25," +Add To Cart\n"),t.qZA()()()()}if(2&o){const i=t.oxw();t.xp6(3),t.Q6J("options",i.productDetailsOptions),t.xp6(1),t.Q6J("ngForOf",i.productDetails.images),t.xp6(3),t.Q6J("ngIf",!i.wishlistData.includes(i.productDetails._id)),t.xp6(1),t.Q6J("ngIf",i.wishlistData.includes(i.productDetails._id)),t.xp6(3),t.Oqu(i.productDetails.title),t.xp6(2),t.Oqu(i.productDetails.description),t.xp6(2),t.Oqu(i.productDetails.category.name),t.xp6(3),t.hij(" ",t.xi3(19,9,i.productDetails.price,"EGP")," "),t.xp6(4),t.hij(" ",i.productDetails.ratingsAverage,"")}}let T=(()=>{class o{constructor(i,s,e,n,C,O){this._ActivatedRoute=i,this._ProductService=s,this._Renderer2=e,this._CartsService=n,this._WishlistService=C,this._ToastrService=O,this.productDetails=null,this.wishlistData=[],this.Products=[],this.productDetailsOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],items:1,nav:!0}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:i=>{this.productId=i.get("id"),console.log(this.productId)}}),this._ProductService.getproductDetails(this.productId).subscribe({next:({data:i})=>{console.log(i),this.productDetails=i}}),this._WishlistService.getWishlist().subscribe({next:i=>{const s=i.data.map(e=>e._id);this.wishlistData=s}})}addProduct(i,s){this._Renderer2.setAttribute(s,"disabled","true"),this._CartsService.addToCart(i).subscribe({next:e=>{console.log(e),console.log(e.message),this._ToastrService.success(e.message,"",{closeButton:!0,progressBar:!0,progressAnimation:"increasing",positionClass:"toast-top-right",timeOut:1e3}),this._Renderer2.removeAttribute(s,"disabled"),this._CartsService.cartNumber.next(e.numOfCartItems)},error:e=>{this._Renderer2.removeAttribute(s,"disabled")}})}addToMyWishlist(i){this._WishlistService.addToWishlist(i).subscribe({next:s=>{console.log(s),this._ToastrService.success(s.message),this.wishlistData=s.data,this._WishlistService.wishNum.next(s.data.length)}})}removeWishlist(i){this._WishlistService.removeItemFromWishlist(i).subscribe({next:s=>{console.log(s),this._ToastrService.success(s.message),this.wishlistData=s.data,this._WishlistService.wishNum.next(s.data.length);const e=this.Products.filter(n=>this.wishlistData.includes(n._id));console.log(e),this.Products=e}})}static#t=this.\u0275fac=function(s){return new(s||o)(t.Y36(d.gz),t.Y36(u.M),t.Y36(t.Qsj),t.Y36(h._),t.Y36(p.M),t.Y36(m._W))};static#i=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-details"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 p-3 mx-auto rounded shadow mb-4",4,"ngIf"],[1,"w-75","p-3","mx-auto","rounded","shadow","mb-4"],[1,"row","align-items-center","g-4"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"wish"],["class","fa-regular fa-heart   icon my-wish",3,"click",4,"ngIf"],["class","fa-solid fa-heart  icon ",3,"click",4,"ngIf"],[1,"h5"],[1,"text-muted"],[1,"d-flex","justify-content-between","align-items-center","my-3"],[1,"small"],[1,"mb-0"],[1,"fas","fa-star","rating-color"],[1,"btn-main","py-2","w-100",3,"click"],["btnAdd",""],["carouselSlide",""],["alt","",1,"w-100",3,"src"],[1,"fa-regular","fa-heart","icon","my-wish",3,"click"],[1,"fa-solid","fa-heart","icon",3,"click"]],template:function(s,e){1&s&&t.YNc(0,x,26,12,"section",0),2&s&&t.Q6J("ngIf",e.productDetails)},dependencies:[a.ez,a.sg,a.O5,a.H9,l.bB,l.Fy,l.Mp],styles:[".wish[_ngcontent-%COMP%]{position:relative}.wish[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:60px;position:absolute;right:-5px;bottom:5px}"]})}return o})()}}]);