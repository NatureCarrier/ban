(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{2646:function(n,t,i){"use strict";i.d(t,"b",(function(){return e})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var e=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"login"},[e("v-uni-view",{staticClass:"login_bg"},[e("v-uni-image",{attrs:{src:i("64fe"),mode:""}})],1),e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"header_back",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.back()}}},[e("v-uni-image",{attrs:{src:"/static/login/icon_back@2x.png",mode:""}})],1),e("v-uni-view",{staticClass:"header_right",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.toInitUser()}}},[e("v-uni-image",{attrs:{src:"/static/login/share_cion.png",mode:""}}),e("v-uni-image",{attrs:{src:"/static/login/ionc_kefu@2x.png",mode:""}})],1)],1),e("v-uni-view",{staticClass:"content"},[n.phone?e("v-uni-view",{staticClass:"phone"},[e("v-uni-view",{staticClass:"phone_num"},[n._v(n._s(n.hideNum(n.phone)))]),e("v-uni-view",{staticClass:"phone_note"},[n._v("登录手机银行享更多服务")])],1):e("v-uni-view",{staticClass:"pwd"},[e("v-uni-view",{staticClass:"pwd_label"},[n._v("手机号")]),e("v-uni-input",{attrs:{type:"number",maxlength:"11"},model:{value:n.mobile,callback:function(t){n.mobile=t},expression:"mobile"}})],1),e("v-uni-view",{staticClass:"pwd"},[e("v-uni-view",{staticClass:"pwd_label"},[n._v("密码")]),e("v-uni-input",{attrs:{type:"password"},model:{value:n.password,callback:function(t){n.password=t},expression:"password"}}),e("v-uni-view",{staticClass:"pwd_forget"},[n._v("忘记密码")])],1),e("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.login()}}},[n._v("登录")]),e("v-uni-view",{staticClass:"tag"},[e("v-uni-view",[n._v("查余额")]),e("v-uni-view",[n._v("语言/Language")]),e("v-uni-view",[n._v("更多")])],1)],1),e("v-uni-view",{staticClass:"footer"},[e("v-uni-view",{staticClass:"footer_text"},[n._v("其他登录方式")]),e("v-uni-view",{staticClass:"footer_icon"},[e("v-uni-image",{attrs:{src:i("a6cd"),mode:""}}),e("v-uni-image",{attrs:{src:i("a906"),mode:""}})],1)],1)],1)},a=[]},"2ede":function(n,t,i){"use strict";var e=i("8f46"),a=i.n(e);a.a},"64fe":function(n,t,i){n.exports=i.p+"static/login/bg.png"},"8f46":function(n,t,i){var e=i("e0a7");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("967d").default;a("923e5752",e,!0,{sourceMap:!1,shadowMode:!1})},9106:function(n,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("5c47"),i("a1c1"),i("f7a5"),i("0506");var e={data:function(){return{phone:"",mobile:"",password:"",userinfo:{username:"",mobile:"",banklist:[],records:[]}}},mounted:function(){uni.getStorageSync("userinfo")&&(Object.assign(this.userinfo,uni.getStorageSync("userinfo")),this.phone=uni.getStorageSync("userinfo")&&uni.getStorageSync("userinfo").mobile)},methods:{back:function(){uni.navigateBack({delta:1})},toInitUser:function(){uni.navigateTo({url:"/pages/initUser/initUser"})},hideNum:function(n){var t=n.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2");return t},getTime:function(){var n=new Date,t=n.getFullYear(),i=("0"+(n.getMonth()+1)).slice(-2),e=("0"+n.getDate()).slice(-2),a=("0"+n.getHours()).slice(-2),o=("0"+n.getMinutes()).slice(-2),s=("0"+n.getSeconds()).slice(-2),c=t+"/"+i+"/"+e+" "+a+":"+o+":"+s;return console.log(c),c},login:function(){if(this.phone||/^1[3456789]\d{9}$/.test(this.mobile))if(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d\x21-\x7E]{6,20}$/.test(this.password)){this.phone||uni.setStorageSync("userinfo",this.userinfo);var n=this.getTime();uni.setStorageSync("loginTime",n),uni.reLaunch({url:"/pages/index/index"})}else uni.showToast({icon:"none",title:"密码格式有误"});else uni.showToast({icon:"none",title:"手机号格式有误"})}}};t.default=e},a6cd:function(n,t){n.exports="data:image/png;base64,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"},a906:function(n,t){n.exports="data:image/png;base64,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"},b181:function(n,t,i){"use strict";i.r(t);var e=i("9106"),a=i.n(e);for(var o in e)["default"].indexOf(o)<0&&function(n){i.d(t,n,(function(){return e[n]}))}(o);t["default"]=a.a},e0a7:function(n,t,i){var e=i("c86c");t=e(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.login[data-v-759c71a2]{position:relative;width:100vw;height:100vh}.login .footer[data-v-759c71a2]{position:fixed;left:0;right:0;margin:0 auto;bottom:calc(env(safe-area-inset-bottom) + %?76?%)}.login .footer_text[data-v-759c71a2]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?24?%;color:#777;margin-bottom:%?30?%;text-align:center}.login .footer_icon[data-v-759c71a2]{display:flex;align-items:center;justify-content:center;gap:0 %?128?%}.login .footer_icon uni-image[data-v-759c71a2]{width:%?62?%;height:%?62?%}.login .content[data-v-759c71a2]{padding-top:%?90?%}.login .content .tag[data-v-759c71a2]{display:flex;align-items:center;justify-content:center;gap:0 %?66?%}.login .content .tag uni-view[data-v-759c71a2]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?24?%;color:#777}.login .content .phone[data-v-759c71a2]{padding-left:%?46?%}.login .content .phone_num[data-v-759c71a2]{font-family:PingFangSC,PingFang SC;font-weight:500;font-size:%?44?%;color:#222}.login .content .phone_note[data-v-759c71a2]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?28?%;color:#777;margin-top:%?24?%}.login .content .pwd[data-v-759c71a2]{display:flex;align-items:center;padding-left:%?40?%;padding-top:%?90?%}.login .content .pwd_label[data-v-759c71a2]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?28?%;color:#777}.login .content .pwd uni-input[data-v-759c71a2]{padding:0 %?20?%;width:%?460?%;height:%?40?%;font-size:%?28?%}.login .content .pwd_forget[data-v-759c71a2]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?28?%;color:#1a76f1}.login .header[data-v-759c71a2]{width:100%;display:flex;align-items:center;justify-content:space-between;padding-top:%?88?%}.login .header_back[data-v-759c71a2]{width:%?80?%;height:%?88?%}.login .header_back uni-image[data-v-759c71a2]{width:%?80?%;height:%?88?%}.login .header_right[data-v-759c71a2]{display:flex;align-items:center;padding-right:%?30?%;gap:0 %?10?%}.login .header_right uni-image[data-v-759c71a2]{width:%?44?%;height:%?44?%}.login_bg[data-v-759c71a2]{position:absolute;right:0;top:0;width:%?308?%;height:%?350?%}.login_bg uni-image[data-v-759c71a2]{width:%?308?%;height:%?350?%}.login .btn[data-v-759c71a2]{width:%?664?%;height:%?82?%;background:#db0034;border-radius:%?41?%;font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?32?%;color:#fff;line-height:%?82?%;text-align:center;margin:%?82?% auto %?50?%}',""]),n.exports=t},e7db:function(n,t,i){"use strict";i.r(t);var e=i("2646"),a=i("b181");for(var o in a)["default"].indexOf(o)<0&&function(n){i.d(t,n,(function(){return a[n]}))}(o);i("2ede");var s=i("828b"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"759c71a2",null,!1,e["a"],void 0);t["default"]=c.exports}}]);