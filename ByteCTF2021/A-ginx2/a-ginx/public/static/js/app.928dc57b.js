(function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"144f":function(t,e,a){"use strict";a("e2e5")},"1ae3":function(t,e,a){"use strict";a("52cc")},"2c8b":function(t,e,a){},"3ab1":function(t,e,a){"use strict";a("464b")},"464b":function(t,e,a){},"489b":function(t,e,a){},"4df4":function(t,e,a){"use strict";a("5538")},"52cc":function(t,e,a){},5538:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("TheNavBar"),a("div",{staticClass:"page-content"},[a("transition",{attrs:{name:"fade"}},[a("keep-alive",[a("router-view")],1)],1)],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{variant:"info"}},[a("b-container",[a("router-link",{attrs:{to:"/"}},[a("b-navbar-brand",[t._v("🥰")])],1),a("b-navbar-nav",{staticClass:"ml-auto nav-toolbar"},[0==this.exp?a("b-navbar-brand",[a("router-link",{attrs:{to:"/login"}},[t._v("Login")]),t._v(" / "),a("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1):a("b-navbar-brand",[t._v("Hi, "+t._s(t.username)+"! "),a("router-link",{attrs:{to:"/editor"}},[t._v("Post Article")])],1),a("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-help",expression:"'modal-help'"}]},[a("b-icon-question-circle",{staticClass:"nav-icon",attrs:{title:"帮助"}})],1)],1)],1)],1),a("b-modal",{attrs:{id:"modal-help",title:"帮助","ok-only":"",size:"lg"}},[a("p",[t._v(" 做了个小网站来存放大家的小作文，主要来自B站评论区、S1、A吧("),a("del",[t._v("事实上基本变成了S1-A综小作文收集站")]),t._v(")，没什么标准，一般看到就会偷进来。 ")]),a("p",[t._v(" 如果你也有想分享的作文，欢迎大家使用*********@outlook.com投稿和联系，如果不愿意您的作品被收录也可以联系我删除。 ")]),a("hr"),a("h5",[t._v("使用方法")]),a("ul",[a("li",[t._v("现在可以直接复制某篇小作文的链接啦")]),a("li",[t._v(" 上方可以选择“标题”，“作者”或“标签”，按回车搜索。其中标签搜索会返回匹配所有标签的作文 ")]),a("li",[t._v("点击小卡片上的作者或标签，也可以直接搜索")]),a("li",[t._v("想要显示全部内容，可以"),a("b",[t._v("点击搜索栏旁边的X")])]),a("li",[t._v(" 点击小作文标题旁的 "),a("b-icon-file-earmark-text"),t._v(" 可以直接复制全文，点击下方“点击返回”可回到主页。移动端推荐直接用浏览器的返回，比较方便 ")],1)])])],1)},o=[],l=a("7386"),c=(a("ac1f"),a("1276"),a("b0c0"),a("bc3a")),u=a.n(c),d="/v",f=function(t){localStorage.setItem("token",t)},p=function(){var t=localStorage.getItem("token");return"Bearer ".concat(t)},b=function(t){return u.a.get("".concat(d,"/articles/").concat(t),{headers:{Authorization:p()}})},h=function(t){return u.a.get("".concat(d,"/articles"),{params:t,headers:{Authorization:p()}})},m=function(){return u.a.get("".concat(d,"/tags"),{headers:{Authorization:p()}})},v=function(t){return u()({method:"post",headers:{"Content-type":"application/json"},url:"".concat(d,"/login"),data:t})},g=function(t){return u()({method:"post",headers:{"Content-type":"application/json"},url:"".concat(d,"/register"),data:t})},_=function(){var t=localStorage.getItem("token");if(t){var e=JSON.parse(atob(t.split(".")[1]));if(e.exp>(new Date).getTime()/1e3)return e}return{exp:0,username:"guest"}},k=function(t,e){var a=document.createElement("form");a.action="".concat(d,"/articles/preview"),a.method="POST",a.target="_blank";var r=document.createElement("input");r.value=t,r.name="title",r.hidden=!0,a.appendChild(r);var n=document.createElement("textarea");n.innerText=e,n.name="content",n.hidden=!0,a.appendChild(n),document.body.appendChild(a),a.submit(),a.remove()},y=function(t){return u.a.post("".concat(d,"/articles"),t,{headers:{Authorization:p()}})},w={name:"TheNavBar",data:function(){return{username:"guest"}},components:{BIconQuestionCircle:l["q"],BIconFileEarmarkText:l["n"]},created:function(){var t=_();this.username=t.username,this.exp=t.exp},watch:{$route:{handler:function(){var t=_();this.username=t.username,this.exp=t.exp,this.$forceUpdate()},deep:!0}}},x=w,C=(a("4df4"),a("2877")),A=Object(C["a"])(x,i,o,!1,null,"739987bb",null),S=A.exports,T={name:"App",components:{TheNavBar:S}},O=T,$=(a("034f"),Object(C["a"])(O,n,s,!1,null,null,null)),E=$.exports,q=a("2106"),j=a.n(q),D=a("5f5b"),N=a("8c4f"),B=a("4eb5"),z=a.n(B),I=(a("f9e3"),a("2dd8"),a("a753"),a("8096"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",[a("h4",[t._v("新增文章")]),a("b-form-group",{attrs:{label:"标题:","label-for":"title"}},[a("b-form-input",{attrs:{type:"text",id:"title",placeholder:"《狗·猫·鼠》",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("b-form-group",{attrs:{label:"Tags:","label-for":"tags"}},[a("b-form-tags",{attrs:{"input-id":"tags"},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})],1),a("quill-editor",{ref:"quill",staticClass:"editor",attrs:{options:t.option},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("b-button",{staticClass:"edit-btn",attrs:{variant:"info"},on:{click:t.preview}},[t._v("预览")]),a("b-button",{staticClass:"edit-btn",attrs:{variant:"info",disabled:"disabled"},on:{click:t.submit}},[t._v("公开提交")]),a("b-button",{staticClass:"edit-btn",attrs:{variant:"info",disabled:t.disbale},on:{click:t.submitPrivate}},[t._v("偷偷提交")])],1)],1)}),L=[],P=a("953d"),M=a("9339"),R=a.n(M),F=R.a.import("attributors/attribute/direction");R.a.register(F,!0);var H=R.a.import("attributors/class/align");R.a.register(H,!0);var J=R.a.import("attributors/class/background");R.a.register(J,!0);var Q=R.a.import("attributors/class/color");R.a.register(Q,!0);var U=R.a.import("attributors/class/direction");R.a.register(U,!0);var V=R.a.import("attributors/class/font");R.a.register(V,!0);var X=R.a.import("attributors/class/size");R.a.register(X,!0);var Y=R.a.import("attributors/style/align");R.a.register(Y,!0);var G=R.a.import("attributors/style/background");R.a.register(G,!0);var K=R.a.import("attributors/style/color");R.a.register(K,!0);var W=R.a.import("attributors/style/direction");R.a.register(W,!0);var Z=R.a.import("attributors/style/font");R.a.register(Z,!0);var tt=R.a.import("attributors/style/size");R.a.register(tt,!0);var et={name:"TheEditor",components:{quillEditor:P["quillEditor"]},methods:{preview:function(){k(this.title,this.content)},submit:function(){alert("功能还在开发中~")},submitPrivate:function(){var t=this;this.disbale=!0,y({title:this.title,content:this.content,tags:this.tags,is_public:!1}).then((function(e){var a=e.data;t.disbale=!1,0==a.status?(t.title="",t.content="",t.tags=[],alert(a.message)):alert(a.message)}))}},data:function(){return{content:"",title:"",disbale:!1,tags:[],option:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],["link"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]},theme:"snow"}}}},at=et,rt=(a("144f"),Object(C["a"])(at,I,L,!1,null,"0a0e157c",null)),nt=rt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-row",[a("b-col",{attrs:{cols:"4",md:"2"}},[a("b-form-select",{attrs:{options:t.searchOptions},model:{value:t.searchSelected,callback:function(e){t.searchSelected=e},expression:"searchSelected"}})],1),a("b-col",{attrs:{cols:"8",md:"10"}},[a("div",{staticStyle:{display:"flex"}},[a("b-form-input",{attrs:{placeholder:"搜索小作文,按回车确定"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchArticles.apply(null,arguments)}},model:{value:t.kw,callback:function(e){t.kw=e},expression:"kw"}}),a("p",{staticClass:"click-btn h3",staticStyle:{"align-self":"center"},on:{click:t.clearQuery}},[a("b-icon-x",{attrs:{name:"clearBtn"}})],1)],1)])],1),a("b-row",[a("b-col",[a("b-form-tags",{staticClass:"tags-block",attrs:{size:"lg","add-on-change":"","no-outer-focus":""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.tags,n=e.inputAttrs,s=e.inputHandlers,i=e.disabled,o=e.removeTag;return[a("div",[a("b-form-select",t._g(t._b({attrs:{disabled:i||0===t.availableTagOptions.length,options:t.availableTagOptions},scopedSlots:t._u([{key:"first",fn:function(){return[a("option",{attrs:{disabled:"",value:""}},[t._v("选择标签 (在下一次搜索生效)")])]},proxy:!0}],null,!0)},"b-form-select",n,!1),s))],1),r.length>0?a("ul",{staticClass:"list-inline d-inline-block mb-2"},t._l(r,(function(e){return a("li",{key:e,staticClass:"list-inline-item"},[a("b-form-tag",{staticClass:"tags-item",attrs:{title:e,disabled:i},on:{remove:function(t){return o(e)}}},[t._v(t._s(e)+" ")])],1)})),0):t._e()]}}]),model:{value:t.query.tags,callback:function(e){t.$set(t.query,"tags",e)},expression:"query.tags"}})],1)],1),a("hr"),a("b-row",{attrs:{"cols-xl":"4","cols-lg":"3","cols-md":"2","cols-sm":"1"}},t._l(t.articles,(function(e){return a("div",{key:e._id},[a("b-col",[a("ArticleCard",t._b({key:e._id,staticClass:"article-card",on:{handleAuthorClick:t.handleAuthorClick,handleTagClick:t.handleTagClick}},"ArticleCard",e,!1))],1)],1)})),0),0==t.articles.length?a("h3",[t._v("没有符合条件的结果")]):t._e(),a("hr"),a("div",[a("b-overlay",{attrs:{show:t.isLoading,rounded:""}},[t.hasNext?a("b-button",{attrs:{disabled:t.isLoading,size:"lg",block:"",variant:"outline-secondary"},on:{click:t.fetchMoreArticles}},[t._v("点击加载更多 ")]):t._e()],1)],1)],1)},it=[],ot=(a("d81d"),a("4de4"),a("b64b"),a("d3b7"),a("498a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{staticClass:"shadow-sm",attrs:{"no-body":""}},[a("b-card-body",[a("b-card-title",{staticClass:"title-limits"},[t._v(" "+t._s(t.title)+" ")]),a("b-card-sub-title"),a("p",{staticClass:"click-btn",on:{click:function(e){return t.$emit("handleAuthorClick",t.author)}}},[a("span",[t._v(t._s(t.author))])]),a("div",{staticStyle:{cursor:"pointer"}},[a("b-card-text",{staticClass:"content-limits",on:{click:t.openArticle}},[t._v(" "+t._s(t.plainContent)+" ")])],1),a("hr"),a("div",t._l(t.tags.split(","),(function(e,r){return a("a",{key:r,staticClass:"card-tag",on:{click:function(a){return t.$emit("handleTagClick",e)}}},[t._v(t._s(e))])})),0)],1)],1)],1)}),lt=[],ct=(a("a9e3"),a("99af"),{name:"ArticleCard",props:{_id:String,title:String,author:String,submissionTime:Number,plainContent:String,tags:String},data:function(){return{htmlContent:"Loading"}},methods:{openArticle:function(){this.$router.push({path:"articles/".concat(this._id)})}},computed:{submissionDate:function(){var t=new Date(1e3*this.submissionTime);return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())}}}),ut=ct,dt=(a("dcff"),Object(C["a"])(ut,ot,lt,!1,null,"3daa17ce",null)),ft=dt.exports,pt={isDebug:!1,state:{title:null,author:null,tags:[]},setTitle:function(t){this.isDebug&&console.log("set title="+t),this.state.title=t},setAuthor:function(t){this.isDebug&&console.log("set author="+t),this.state.author=t},setTags:function(t){this.isDebug&&console.log("set tags=".concat(t)),this.state.tags=t},addTag:function(t){var e=-1!==this.state.tags.indexOf(t);e||this.state.tags.push(t),this.isDebug&&console.log("add tag[".concat(t,"]"))},clear:function(){this.isDebug&&console.log("clear"),this.state.title=null,this.state.author=null,this.state.tags=[]}},bt={name:"TheArticleHome",components:{ArticleCard:ft,BIconX:l["u"]},data:function(){return{articles:[],hasNext:!0,kw:"",query:pt.state,pageNum:0,pageSize:36,isLoading:!0,tagOptions:[],searchSelected:null,searchOptions:[{value:"title",text:"标题"},{value:"author",text:"作者"}]}},methods:{fetchMoreArticles:function(){var t=this;if(this.hasNext){this.isLoading=!0;var e={};Object.keys(this.query).filter((function(e){return t.query[e]?t.query[e].length:0})).map((function(a){return e[a]=t.query[a]}));var a={pageNum:this.pageNum,pageSize:this.pageSize,query:JSON.stringify(e)};h(a).then((function(e){var a=e.data;0==a.status?(t.hasNext=a.count==t.pageSize,0==t.pageNum?t.articles=a.articles:t.articles.push.apply(t.articles,a.articles),t.pageNum++):alert(a.message)})).finally((function(){t.isLoading=!1}))}},searchArticles:function(){this.pageNum=0,this.hasNext=!0;var t=this.kw.trim();if(t)switch(this.searchSelected){case"title":pt.setTitle(t),pt.setAuthor(null);break;case"author":pt.setAuthor(t),pt.setTitle(null);break}this.fetchMoreArticles()},fetchTagItems:function(){var t=this;m().then((function(e){var a=e.data;0==a.status?t.tagOptions=a.tags.map((function(t){return t.name})):alert(a.message)}))},handleTagClick:function(t){pt.addTag(t),document.body.scrollIntoView()},handleAuthorClick:function(t){this.kw=t,this.searchSelected="author",document.body.scrollIntoView(),this.searchArticles()},handleTagOptionClick:function(t){pt.addTag(t)},clearQuery:function(){this.kw="",pt.clear(),this.searchArticles()},changeQuery:function(t,e){this.kw=e,this.searchSelected=t}},computed:{availableTagOptions:function(){var t=this;return this.tagOptions.filter((function(e){return-1==t.query.tags.indexOf(e)}))}},mounted:function(){this.searchSelected=this.searchOptions[0].value,this.fetchTagItems(),this.searchArticles()}},ht=bt,mt=(a("fb2f"),Object(C["a"])(ht,st,it,!1,null,"100c0526",null)),vt=mt.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[t.article?a("div",[a("b-row",[a("b-col",{attrs:{cols:"9"}},[a("h2",[a("span",[t._v(t._s(t.article.title))])])]),a("b-col",{staticClass:"detail-toolbar",attrs:{cols:"3"}},[a("h2",[a("BIconFileEarmarkText",{staticClass:"click-btn",attrs:{title:"复制全文"},on:{click:t.copyArticle}})],1)])],1),a("b-row",[a("b-col",[a("h5",[t._v(t._s(t.article.author))])])],1),a("hr"),a("b-row",[a("b-col",[a("div",{ref:"htmlContent",domProps:{innerHTML:t._s(t.article.htmlContent)}})])],1),a("hr"),a("b-row",[a("b-col",[a("b-button",{attrs:{size:"lg",block:"",variant:"outline-secondary"},on:{click:t.goBack}},[a("BIconBoxArrowLeft"),t._v(" 点击返回 ")],1)],1)],1)],1):a("div",[t._v(" Loading... ")]),a("b-alert",{staticClass:"position-fixed fixed-bottom m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{show:t.dismissCountDown,variant:"success",fade:"",dismissible:""},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.alterMessage)+" ")])],1)},_t=[],kt={name:"TheArticle",components:{BIconFileEarmarkText:l["n"],BIconBoxArrowLeft:l["b"]},data:function(){return{article:null,alterMessage:"",dismissCountDown:0,dismissSecs:2}},methods:{fetchTheArticle:function(){var t=this,e=this.$route.params.s;b(e).then((function(e){var a=e.data;switch(a.status){case 0:a.data.tags=a.data.tags.split(","),t.article=a.data;break;default:t.article=null,alert(a.message)}})).finally((function(){return document.body.scrollIntoView()}))},copyArticle:function(){var t=this;this.$copyText(this.$refs.htmlContent.innerText,this.$refs.htmlContent).then((function(){t.showAlert("已复制《".concat(t.article.title,"》"))}),(function(){t.showAlert("复制失败")}))},goBack:function(){this.$router.go(-1)},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(t){this.alterMessage=t,this.dismissCountDown=this.dismissSecs}},beforeRouteEnter:function(t,e,a){a((function(t){t.fetchTheArticle()}))},beforeRouteLeave:function(t,e,a){this.article=null,a()}},yt=kt,wt=(a("c93a"),Object(C["a"])(yt,gt,_t,!1,null,"03588ab2",null)),xt=wt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-row",[a("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[a("h1",[t._v("Login")]),a("b-form-group",{attrs:{label:"Username:","label-for":"username"}},[a("b-form-input",{attrs:{id:"username",type:"text",placeholder:"Enter username",required:""},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),a("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",placeholder:"Enter password",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v("   "),a("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)],1)},At=[],St={name:"Login",data:function(){return{form:{username:"",password:""}}},methods:{onSubmit:function(t){var e=this;t.preventDefault(),v(this.form).then((function(t){var a=t.data;0==a.status?(f(a.token),alert(a.message),e.$router.push({path:"/"})):alert(a.message)}))},onReset:function(t){t.preventDefault(),this.form.username="",this.form.password=""}},computed:{}},Tt=St,Ot=(a("1ae3"),Object(C["a"])(Tt,Ct,At,!1,null,"56b2afb6",null)),$t=Ot.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-row",[a("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[a("h1",[t._v("Register")]),a("b-form-group",{attrs:{label:"Username:","label-for":"username"}},[a("b-form-input",{attrs:{id:"username",type:"text",placeholder:"Enter username",required:""},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),a("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",placeholder:"Enter password",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v("   "),a("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1)],1)},qt=[],jt={name:"Register",data:function(){return{form:{username:"",password:""}}},methods:{onSubmit:function(t){t.preventDefault(),g(this.form).then((function(t){var e=t.data;e.status,alert(e.message)}))},onReset:function(t){t.preventDefault(),this.form.username="",this.form.password=""}},computed:{}},Dt=jt,Nt=(a("3ab1"),Object(C["a"])(Dt,Et,qt,!1,null,"61011d13",null)),Bt=Nt.exports;r["default"].use(D["a"]),r["default"].use(N["a"]),r["default"].use(j.a,u.a),z.a.config.autoSetContainer=!0,r["default"].use(z.a),r["default"].config.productionTip=!1;var zt=[{path:"/editor",component:nt,keepAlive:!0},{path:"/login",component:$t,keepAlive:!0},{path:"/register",component:Bt,keepAlive:!0},{path:"/",redirect:"/articles"},{path:"/articles",component:vt,keepAlive:!0},{path:"/articles/:s",component:xt,keepAlive:!0}],It=new N["a"]({routes:zt});new r["default"]({render:function(t){return t(E)},router:It}).$mount("#app")},"85ec":function(t,e,a){},c93a:function(t,e,a){"use strict";a("2c8b")},dcff:function(t,e,a){"use strict";a("f97c")},e2e5:function(t,e,a){},f97c:function(t,e,a){},fb2f:function(t,e,a){"use strict";a("489b")}});
//# sourceMappingURL=app.928dc57b.js.map