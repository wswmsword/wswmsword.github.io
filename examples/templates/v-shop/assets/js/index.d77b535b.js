import{_ as L}from"./index.332e104b.js";import{_ as c}from"./index.vue_vue_type_script_lang.c37d2b68.js";import{_ as d}from"./index.87711403.js";import{_ as x,A}from"./index.ce6ac14e.js";import{r as l,o as a,a as k,g as o,w as r,f as _,E}from"./vendor.1aafb642.js";const b={components:{SpainList:c,AddressList:d},data(){return{list:[],listLoading:!0,listEmptyText:"暂无地址"}},created(){this.getList()},methods:{onSelected(s){this.list.forEach((e,n)=>{this.$set(this.list[n],"selected",!1)}),this.$set(this.list[s],"selected",!0)},onAdd(){this.$router.push({path:"/address/edit"})},formatAddress(s,e,n,i){let t=s;return e.length>1&&(t+=e),n.length>1&&(t+=n),i&&(t+=` ${i}`),t},onItemClicked(s){this.$router.push({path:"/address/edit",query:{id:s}})},getList(){this.listLoading=!0,A.userShoppingAddressList().then(s=>{var e;this.list=((e=s.data)==null?void 0:e.result)??[]}).finally(()=>{this.listLoading=!1})}}},C={class:"container"};function $(s,e,n,i,t,p){const m=d,u=l("van-empty"),f=c,h=l("van-icon"),g=l("van-button"),v=L;return a(),k("div",C,[o(f,{loading:t.listLoading,"onUpdate:loading":e[0]||(e[0]=y=>t.listLoading=y)},{default:r(()=>[t.list.length?(a(),_(m,{key:0,list:t.list},null,8,["list"])):(a(),_(u,{key:1,class:"empty",description:t.listEmptyText},null,8,["description"]))]),_:1},8,["loading"]),o(v,null,{default:r(()=>[o(g,{class:"submit-bar-button",type:"primary",round:"",onClick:p.onAdd},{default:r(()=>[o(h,{name:"plus"}),E(" 新建收货地址 ")]),_:1},8,["onClick"])]),_:1})])}const N=x(b,[["render",$],["__scopeId","data-v-f251f0ce"]]);export{N as default};