import{c as X,d as Z,q as w,aM as W,n as O,t as L,y as $,a as i,L as K,aK as E,I as z,w as Y,a4 as y,a5 as s,a6 as o,H as h,ad as v,ay as G,a7 as t,ab as c,aL as C,ag as B,af as U,ae as N,aI as j,aN as q,E as H,a8 as Q,aO as J,b as F,k as tt,aP as et}from"./index-416b8afd.js";import{k as st}from"./index-9f2d208f.js";import{a as at,S as nt}from"./index-05989b8e.js";import{R as ot,u as lt}from"./useScroll-62c0384d.js";const[ct,x]=X("nav-bar"),it={title:String,fixed:Boolean,zIndex:O,border:L,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:L};var dt=Z({name:ct,props:it,emits:["clickLeft","clickRight"],setup(e,{emit:u,slots:a}){const l=w(),n=W(l,x),d=r=>{e.leftDisabled||u("clickLeft",r)},m=r=>{e.rightDisabled||u("clickRight",r)},_=()=>a.left?a.left():[e.leftArrow&&i(z,{class:x("arrow"),name:"arrow-left"},null),e.leftText&&i("span",{class:x("text")},[e.leftText])],p=()=>a.right?a.right():i("span",{class:x("text")},[e.rightText]),g=()=>{const{title:r,fixed:b,border:k,zIndex:M}=e,P=$(M),S=e.leftArrow||e.leftText||a.left,f=e.rightText||a.right;return i("div",{ref:l,style:P,class:[x({fixed:b}),{[E]:k,"van-safe-area-top":e.safeAreaInsetTop}]},[i("div",{class:x("content")},[S&&i("div",{class:[x("left",{disabled:e.leftDisabled}),e.clickable&&!e.leftDisabled?K:""],onClick:d},[_()]),i("div",{class:[x("title"),"van-ellipsis"]},[a.title?a.title():r]),f&&i("div",{class:[x("right",{disabled:e.rightDisabled}),e.clickable&&!e.rightDisabled?K:""],onClick:m},[p()])])])};return()=>e.fixed&&e.placeholder?n(g):g()}});const rt=Y(dt);function ut(e){return st.get({url:"/detail/infos",params:{houseId:e}})}const _t="data:image/png;base64,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";const ft={class:"tab-control"},mt=["onClick"],ht={__name:"tab-control",props:{titles:{type:Array,default:()=>[]}},emits:["tabItemClick"],setup(e,{expose:u,emit:a}){const l=a,n=w(0),d=_=>{n.value=_,l("tabItemClick",_)};return u({currentIndex:n,setCurrentIndex:_=>{n.value=_}}),(_,p)=>(s(),o("div",ft,[(s(!0),o(h,null,v(e.titles,(g,r)=>(s(),o("div",{key:r,class:G(["tab-control-item",{active:r===n.value}]),onClick:b=>d(r)},[t("span",null,c(g),1)],10,mt))),128))]))}},bt=y(ht,[["__scopeId","data-v-680c0799"]]);const vt={class:"swipe"},yt=["src"],pt={class:"indicator"},xt={class:"text"},gt={key:0,class:"count"},kt={__name:"detail_01-swipe",props:{swipeData:{type:Array,default:()=>[]}},setup(e){const u=e,a={};for(const m of u.swipeData){let _=a[m.enumPictureCategory];_||(_=[],a[m.enumPictureCategory]=_),_.push(m)}const l=/【(.*?)】/i,n=m=>l.exec(m)[1],d=m=>a[m.enumPictureCategory].findIndex(p=>p===m)+1;return(m,_)=>{const p=at,g=nt;return s(),o("div",vt,[i(g,{class:"swipe-list",autoplay:3e3,"indicator-color":"white"},{indicator:C(({active:r,total:b})=>[t("div",pt,[(s(),o(h,null,v(a,(k,M,P)=>{var S,f;return t("span",{key:M,class:G(["item",{active:((S=e.swipeData[r])==null?void 0:S.enumPictureCategory)==M}])},[t("span",xt,c(n(k[0].title)),1),((f=e.swipeData[r])==null?void 0:f.enumPictureCategory)==M?(s(),o("span",gt,c(d(e.swipeData[r]))+"/"+c(k.length),1)):B("",!0)],2)}),64))])]),default:C(()=>[(s(!0),o(h,null,v(e.swipeData,(r,b)=>(s(),U(p,{key:b,class:"item"},{default:C(()=>[t("img",{src:r.url},null,8,yt)]),_:2},1024))),128))]),_:1})])}}},Mt=y(kt,[["__scopeId","data-v-57e3e8d0"]]);const At={class:"infos"},Ct={class:"name"},St={class:"tags"},Tt={class:"comment extra"},wt={class:"left"},Bt={class:"score"},Rt={class:"title"},Dt={class:"brief"},It={class:"right"},Pt={class:"count"},zt={class:"position extra"},Nt={class:"left address"},Vt={class:"right"},Lt={__name:"detail_02-infos",props:{infosData:{type:Object,default:()=>({})}},setup(e){return(u,a)=>{const l=z;return s(),o("div",At,[t("div",Ct,c(e.infosData.houseName),1),t("div",St,[(s(!0),o(h,null,v(e.infosData.houseTags,(n,d)=>(s(),o(h,{key:d},[n.tagText?(s(),o("span",{key:0,class:"item",style:N({color:n.tagText.color,background:n.tagText.background.color})},c(n.tagText.text),5)):B("",!0)],64))),128))]),t("div",Tt,[t("div",wt,[t("span",Bt,c(e.infosData.commentBrief.overall),1),t("span",Rt,c(e.infosData.commentBrief.scoreTitle),1),t("span",Dt,c(e.infosData.commentBrief.commentBrief),1)]),t("div",It,[t("div",Pt,[j(c(e.infosData.commentBrief.totalCount)+"条评论 ",1),i(l,{name:"arrow"})])])]),t("div",zt,[t("div",Nt,c(e.infosData.nearByPosition.address),1),t("div",Vt,[a[0]||(a[0]=j(" 地图·周边 ")),i(l,{name:"arrow"})])])])}}},Kt=y(Lt,[["__scopeId","data-v-f8f4c5a6"]]);const jt={class:"section"},Ft={class:"header"},Gt={class:"title"},Ut={class:"content"},Xt={class:"footer"},Zt={class:"more"},Wt={__name:"detail-section",props:{title:{type:String,default:"房屋设施"},moreText:{type:String,default:"查看全部"}},setup(e){return(u,a)=>{const l=z;return s(),o("div",jt,[t("div",Ft,[t("h2",Gt,c(e.title),1)]),t("div",Ut,[q(u.$slots,"default",{},()=>[a[0]||(a[0]=t("h3",null,"默认内容",-1))],!0)]),t("div",Xt,[t("span",Zt,c(e.moreText),1),i(l,{name:"arrow"})])])}}},I=y(Wt,[["__scopeId","data-v-e39edf7f"]]);const Ot={class:"facility"},$t={class:"facility-inner"},Et={key:0,class:"item"},Yt={class:"head"},qt=["src"],Ht={class:"text"},Qt={class:"list"},Jt={__name:"detail_03-facility",props:{houseFacility:{type:Object,default:()=>({})}},setup(e){return(u,a)=>(s(),o("div",Ot,[i(I,{title:"房屋设施",moreText:"查看全部内容"},{default:C(()=>[t("div",$t,[(s(!0),o(h,null,v(e.houseFacility.houseFacilitys,(l,n)=>(s(),o(h,{key:n},[e.houseFacility.facilitySort.includes(n)?(s(),o("div",Et,[t("div",Yt,[t("img",{src:l.icon},null,8,qt),t("div",Ht,c(l.groupName),1)]),t("div",Qt,[(s(!0),o(h,null,v(l.facilitys.slice(0,4),(d,m)=>(s(),o("div",{key:m,class:"iten"},[a[0]||(a[0]=t("i",{class:"icon_check icon"},null,-1)),t("span",null,c(d.name),1)]))),128))])])):B("",!0)],64))),128))])]),_:1})]))}},te=y(Jt,[["__scopeId","data-v-bec8b2dc"]]);const ee={class:"landlord"},se={class:"intro"},ae={class:"top"},ne=["src"],oe={class:"header"},le={class:"left"},ce={class:"avatar"},ie=["src"],de={class:"info"},re={class:"name"},ue={class:"tags"},_e={key:0,class:"divider"},fe={class:"bottom"},me={class:"item"},he={class:"title"},be={class:"score"},ve={class:"desc"},ye={__name:"detail_04-landlord",props:{landlord:{type:Object,default:()=>({})}},setup(e){return(u,a)=>(s(),o("div",ee,[i(I,{title:"房东介绍","more-text":"查看房东主页"},{default:C(()=>[t("div",se,[t("div",ae,[t("img",{src:e.landlord.topScroll,alt:""},null,8,ne)]),t("div",oe,[t("div",le,[t("div",ce,[t("img",{src:e.landlord.hotelLogo,alt:""},null,8,ie)]),t("div",de,[t("div",re,c(e.landlord.hotelName),1),t("div",ue,[(s(!0),o(h,null,v(e.landlord.hotelTags,(l,n)=>(s(),o("div",{class:"item",style:N({color:l.tagText.color})},[t("span",null,c(l.tagText.text),1),n!==e.landlord.hotelTags.length-1?(s(),o("span",_e,"|")):B("",!0)],4))),256))])])]),a[0]||(a[0]=t("div",{class:"right"},[t("div",{class:"contact"},"联系房东")],-1))]),t("div",fe,[(s(!0),o(h,null,v(e.landlord.hotelSummary,(l,n)=>(s(),o("div",me,[t("div",he,c(l.title),1),t("div",be,c(l.introduction),1),t("div",ve,c(l.tip),1)]))),256))])])]),_:1})]))}},pe=y(ye,[["__scopeId","data-v-760ed96f"]]);const xe={class:"comment"},ge={class:"comment-inner"},ke={class:"header"},Me={class:"left"},Ae={class:"score"},Ce={class:"text"},Se={class:"info"},Te={class:"title"},we={class:"count"},Be={class:"star"},Re={class:"right"},De={class:"tags"},Ie={class:"content"},Pe={class:"user"},ze={class:"avatar"},Ne=["src"],Ve={class:"profile"},Le={class:"name"},Ke={class:"date"},je={class:"text"},Fe={__name:"detail_05-comment",props:{comment:{type:Object,default:()=>({})}},setup(e){return(u,a)=>{const l=ot;return s(),o("div",xe,[i(I,{title:"热门评论","more-text":`查看全部${e.comment.totalCount}条评论`},{default:C(()=>[t("div",ge,[t("div",ke,[t("div",Me,[t("div",Ae,[t("span",Ce,c(e.comment.overall),1),a[1]||(a[1]=t("div",{class:"line"},null,-1))]),t("div",Se,[t("div",Te,c(e.comment.scoreTitle),1),t("div",we,c(e.comment.totalCount)+"条评论",1),t("div",Be,[i(l,{modelValue:e.comment.overall,"onUpdate:modelValue":a[0]||(a[0]=n=>e.comment.overall=n),color:"#ff9645",size:"12",readonly:"","allow-half":""},null,8,["modelValue"])])])]),t("div",Re,[(s(!0),o(h,null,v(e.comment.subScores,(n,d)=>(s(),o("span",{key:n,class:"item"},c(n),1))),128))])]),t("div",De,[(s(!0),o(h,null,v(e.comment.commentTagVo,(n,d)=>(s(),o("span",{key:d,class:"item",style:N({color:n.color,background:n.backgroundColor})},c(n.text),5))),128))]),t("div",Ie,[t("div",Pe,[t("div",ze,[t("img",{src:e.comment.comment.userAvatars,alt:""},null,8,Ne)]),t("div",Ve,[t("div",Le,c(e.comment.comment.userName),1),t("div",Ke,c(e.comment.comment.checkInDate),1)])]),t("div",je,c(e.comment.comment.commentDetail),1)])])]),_:1},8,["more-text"])])}}},Ge=y(Fe,[["__scopeId","data-v-92ac44c2"]]);const Ue={class:"notice"},Xe={class:"notice-inner"},Ze={class:"title"},We={class:"intro"},Oe={key:0,class:"tip"},$e={__name:"detail_06-notice",props:{orderRules:{type:Array,default:()=>[]}},setup(e){return(u,a)=>(s(),o("div",Ue,[i(I,{title:"预定须知"},{default:C(()=>[t("div",Xe,[(s(!0),o(h,null,v(e.orderRules,(l,n)=>(s(),o("div",{key:n,class:"item"},[t("span",Ze,c(l.title),1),t("span",We,c(l.introduction),1),l.tips?(s(),o("span",Oe,"查看说明")):B("",!0)]))),128))])]),_:1})]))}},Ee=y($e,[["__scopeId","data-v-122cc601"]]);const Ye={class:"map"},qe={__name:"detail_07-map",props:{position:{type:Object,default:()=>({})}},setup(e){const u=e,a=w();return H(()=>{const l=new BMapGL.Map(a.value),n=new BMapGL.Point(u.position.longitude,u.position.latitude);l.centerAndZoom(n,15);const d=new BMapGL.Marker(n);l.addOverlay(d)}),(l,n)=>(s(),o("div",Ye,[i(I,{title:"位置周边","more-text":"查看更多周边信息"},{default:C(()=>[t("div",{class:"baidu",ref_key:"mapRef",ref:a},null,512)]),_:1})]))}},He=y(qe,[["__scopeId","data-v-00f510d1"]]);const Qe={class:"intro"},Je={class:"title"},ts={class:"content"},es={__name:"detail_08-intro",props:{priceIntro:{type:Object,default:()=>({})}},setup(e){return(u,a)=>(s(),o("div",Qe,[t("h2",Je,c(e.priceIntro.title),1),t("div",ts,c(e.priceIntro.introduction),1)]))}},ss=y(es,[["__scopeId","data-v-04e4ff45"]]);const as={__name:"detail",setup(e){const u=Q(),l=J().params.id,n=w({}),d=F(()=>n.value.mainPart);ut(l).then(f=>{n.value=f.data});const m=()=>{u.back()},_=w(),{scrollTop:p}=lt(_),g=F(()=>p.value>=300),r=w({}),b=f=>{if(!f)return;const A=f.$el.getAttribute("name");r.value[A]=f.$el};let k=!1,M=-1;const P=f=>{const A=Object.keys(r.value)[f];let T=r.value[A].offsetTop;f!==0&&(T=T-44),k=!0,M=T,_.value.scrollTo({top:T,behavior:"smooth"})},S=w();return tt(p,f=>{var V;if(parseInt(f)===M&&(k=!1),k)return;const R=Object.values(r.value).map(D=>D.offsetTop);let T=R.length-1;for(let D=0;D<R.length;D++)if(R[D]>f+44){T=D-1;break}(V=S.value)==null||V.setCurrentIndex(T)}),(f,A)=>{const R=rt;return s(),o("div",{class:"detail top-page",ref_key:"detailRef",ref:_},[g.value?(s(),U(bt,{key:0,class:"tabs",titles:["详情","设施","房东","评论","须知","地图"],onTabItemClick:P,ref_key:"tabControlRef",ref:S},null,512)):B("",!0),i(R,{title:"房屋详情","left-text":"旅途","left-arrow":"",onClickLeft:m}),d.value?et([d.value],()=>(s(),o("div",{key:1,class:"main"},[i(Mt,{"swipe-data":d.value.topModule.housePicture.housePics},null,8,["swipe-data"]),i(Kt,{name:"描述",ref:b,"infos-data":d.value.topModule},null,8,["infos-data"]),i(te,{name:"设施",ref:b,"house-facility":d.value.dynamicModule.facilityModule.houseFacility},null,8,["house-facility"]),i(pe,{name:"房东",ref:b,landlord:d.value.dynamicModule.landlordModule},null,8,["landlord"]),i(Ge,{name:"评论",ref:b,comment:d.value.dynamicModule.commentModule},null,8,["comment"]),i(Ee,{name:"须知",ref:b,"order-rules":d.value.dynamicModule.rulesModule.orderRules},null,8,["order-rules"]),i(He,{name:"地图",ref:b,position:d.value.dynamicModule.positionModule},null,8,["position"]),i(ss,{"price-intro":d.value.introductionModule},null,8,["price-intro"])])),A,0):B("",!0),A[1]||(A[1]=t("div",{class:"footer"},[t("img",{src:_t,alt:""}),t("div",{class:"text"},"弘源旅途, 永无止境!")],-1))],512)}}},is=y(as,[["__scopeId","data-v-37db7006"]]);export{is as default};