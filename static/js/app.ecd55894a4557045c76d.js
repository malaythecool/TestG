webpackJsonp([1],{0:function(t,e,a){function s(t){a(203)}var i=a(22)(a(158),a(998),s,null,null);t.exports=i.exports},1004:function(t,e){t.exports=[{text:"Customer State",value:null},{text:"Andaman and Nicobar Islands",value:"AN"},{text:"Andhra Pradesh",value:"AP"},{text:"Andhra Pradesh (New)",value:"AD"},{text:"Arunachal Pradesh",value:"AR"},{text:"Assam",value:"AS"},{text:"Bihar",value:"BH"},{text:"Chandigarh",value:"CH"},{text:"Chattisgarh",value:"CT"},{text:"Dadra and Nagar Haveli",value:"DN"},{text:"Daman and Diu",value:"DD"},{text:"Delhi",value:"DL"},{text:"Goa",value:"GA"},{text:"Gujarat",value:"GJ"},{text:"Haryana",value:"HR"},{text:"Himachal Pradesh",value:"HP"},{text:"Jammu and Kashmir",value:"JK"},{text:"Jharkhand",value:"JH"},{text:"Karnataka",value:"KA"},{text:"Kerala",value:"KL"},{text:"Lakshadweep Islands",value:"LD"},{text:"Madhya Pradesh",value:"MP"},{text:"Maharashtra",value:"MH"},{text:"Manipur",value:"MN"},{text:"Meghalaya",value:"ME"},{text:"Mizoram",value:"MI"},{text:"Nagaland",value:"NL"},{text:"Odisha",value:"OR"},{text:"Pondicherry",value:"PY"},{text:"Punjab",value:"PB"},{text:"Rajasthan",value:"RJ"},{text:"Sikkim",value:"SK"},{text:"Tamil Nadu",value:"TN"},{text:"Telangana",value:"TS"},{text:"Tripura",value:"TR"},{text:"Uttar Pradesh",value:"UP"},{text:"Uttarakhand",value:"UT"},{text:"West Bengal",value:"WB"}]},1005:function(t,e){},153:function(t,e,a){"use strict";var s=a(9),i=a(1001),n=a(995),o=a.n(n),r=a(1e3),l=a(163),c=a(151),d=a.n(c),v=a(999),u=a.n(v),h=a(150),m=a.n(h);s.a.use(m.a),s.a.use(u.a),s.a.use(d.a),s.a.use(i.a),s.a.use(r.a),s.a.use(l.a),e.a=new i.a({routes:[{path:"/",name:"Hello",component:o.a}]})},155:function(t,e,a){function s(t){a(200),a(199),a(201),a(202)}var i=a(22)(a(159),a(997),s,null,null);t.exports=i.exports},157:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(9),i=a(155),n=a.n(i),o=a(153),r=(a(154),a(0)),l=a.n(r);s.a.config.productionTip=!1,s.a.component("icon",l.a),new s.a({el:"#app",router:o.a,template:"<App/>",components:{App:n.a}})},158:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(9),i={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in i||(s.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(s.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,a=t.height;return Math.max(e,a)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,a=0;this.$children.forEach(function(t){e=Math.max(e,t.width),a=Math.max(a,t.height)}),this.childrenWidth=e,this.childrenHeight=a,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(a-t.height)/2})}},register:function(t){for(var e in t){var a=t[e];a.paths||(a.paths=[]),a.d&&a.paths.push({d:a.d}),a.polygons||(a.polygons=[]),a.points&&a.polygons.push({points:a.points}),i[e]=a}},icons:i}},159:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},160:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(161),i=a.n(s),n=a(162),o=a.n(n),r=a(9),l=a(156),c=a.n(l),d=a(151),v=a.n(d),u=a(207),h=a.n(u),m=a(150),p=a.n(m),f=a(206),g=a.n(f),x=a(1004),_=a.n(x);r.a.component("Datepicker",v.a),r.a.component("autocomplete-vue",c.a);var b=_.a;e.default={name:"test",data:function(){return{gstin1:"",gstin2:"",gstinl:"GSTIN  ",name1:"",name2:"",namel:"Name  ",address1:"",address2:"",addressl:"Address  ",statel:"State  ",stateCode1:null,stateCode2:null,cstate:"",stateCodel:"State Code  ",invoiceId:"",invoiceIdl:"Invoice No  ",invoiceDate:new Date,invoiceDatel:"Invoice Date  ",sameDet:!0,stateList:b,goodsnservice:"G",taxtotal:0,total:0,rows:[{description:"",hsn:"",qty:0,price:0,total:0,discount:0,taxableAmt:0,cgst:0,sgst:0,igst:0,ugst:0,tax:""}],grandtotal:0,showDismissibleAlert:!1,cgstin:"",cname:"",caddress:"",invf:"INV",invr:1,invMstr:[],perPage:10,filter:"",currentPage:1,fields:{index:{label:"#",sortable:!1},invoiceId:{label:"Invoice Id",sortable:!0},invoiceDate:{label:"Invoice Date",sortable:!0},name1:{label:"Customer Name",sortable:!0},grandtotal:{label:"Total",sortable:!0},update:{label:"Update",sortable:!1}},isUpdate:!1,file:null,prdListArr:[]}},mounted:function(){var t=this;this.$getItem("companyData",function(e,a){setTimeout(function(){e&&console.log(e.stack),null!==a&&void 0!==a&&(t.cname=a.cname,t.cgstin=a.cgstin,t.caddress=a.caddress,t.invf=a.invf,t.invr=a.invr,t.cstate=a.cstate)})},2e3),this.loadInvMstr()},computed:{sameState:function(){var t=!1;return this.stateCode1===this.cstate&&(t=!0),t},utState:function(){var t=!1;return"AN"!==this.stateCode1&&"CH"!==this.stateCode1&&"DN"!==this.stateCode1&&"DD"!==this.stateCode1&&"DL"!==this.stateCode1&&"LD"!==this.stateCode1&&"PY"!==this.stateCode1&&"AN"!==this.cstate&&"CH"!==this.cstate&&"DN"!==this.cstate&&"DD"!==this.cstate&&"DL"!==this.cstate&&"LD"!==this.cstate&&"PY"!==this.cstate||(t=!0),t},invoiceIdComp:function(){return this.isUpdate?this.invoiceId:this.invf+this.invr}},methods:{fileImport:function(t){var e=t.target.files[0],a=this;e&&new o.a(function(t,a){var s=new FileReader;s.onload=function(e){t(e.target.result)},s.readAsText(e),s.onerror=a}).then(function(t){a.$setItem("invoiceMstr",JSON.parse(t)),a.$root.$emit("hide::modal","modal2"),a.$nextTick(function(){h()({title:"<h3>Data Loaded Successfully.</h3>",type:"success"}),a.loadInvMstr(),a.file=null})}).catch(function(t){console.log(t)})},jsonExport:function(){var t=new Blob([i()(this.invMstr)],{type:"text/csv;charset=utf-8;"}),e=null,a=this.$moment(new Date).format("YYYY-MM-DD HH:mm:ss")+".txt";e=navigator.msSaveBlob?navigator.msSaveBlob(t,a):window.URL.createObjectURL(t);var s=document.createElement("a");s.href=e,s.setAttribute("download",a),s.click()},downloadCsv:function(){var t={delimiter:",",header:!0,skipEmptyLines:!0,dynamicTyping:!0,error:function(t){console.log(t)}},e=g.a.unparse(this.invMstr,t),a=new Blob([e],{type:"text/csv;charset=utf-8;"}),s=null;s=navigator.msSaveBlob?navigator.msSaveBlob(a,p()(new Date).format("YYYY-MM-DD HH:mm:ss")+".csv"):window.URL.createObjectURL(a);var i=document.createElement("a");i.href=s,i.setAttribute("download","download.csv"),i.click()},update:function(t){this.isUpdate=!0,this.gstin1=t.gstin1,this.gstin2=t.gstin2,this.name1=t.name1,this.name2=t.name2,this.address1=t.address1,this.address2=t.address2,this.stateCode1=t.stateCode1,this.stateCode2=t.stateCode2,this.rows=t.rows,this.invoiceId=t.invoiceId,this.invoiceDate=t.invoiceDate,window.scrollTo(0,0)},loadModalData:function(){var t=this;this.$getItem("companyData",function(e,a){e&&console.log(e.stack),null!==a&&void 0!==a&&(t.cname=a.cname,t.cgstin=a.cgstin,t.caddress=a.caddress,t.invf=a.invf,t.invr=a.invr,t.cstate=a.cstate)})},incrInvId:function(){if(!this.isUpdate){var t=this;this.$getItem("companyData",function(e,a){e&&console.log(e.stack),null!==a&&void 0!==a&&(a.invr=parseFloat(a.invr)+1,t.$setItem("companyData",a),t.invf=a.invf,t.invr=a.invr)})}},loadInvMstr:function(){var t=this;this.$getItem("invoiceMstr",function(e,a){e?console.log():t.invMstr=null!==a&&void 0!==a?a:[]}),t.invMstr.forEach(function(e){e.rows.forEach(function(e){-1===t.prdListArr.indexOf(e.description)&&t.prdListArr.push(e.description)})})},saveOrUpdate:function(){this.isUpdate?this.updateInv():this.saveInv()},updateInv:function(){var t=this;this.invMstr.forEach(function(e){e.invoiceId===t.invoiceId&&(e.gstin1=t.gstin1,e.gstin2=t.gstin2,e.name1=t.name1,e.name2=t.name2,e.address1=t.address1,e.address2=t.address2,e.stateCode1=t.stateCode1,e.stateCode2=t.stateCode2,e.cstate=t.cstate,e.invoiceIdComp=t.invoiceIdComp,e.invoiceDate=t.invoiceDate,e.sameDet=t.sameDet,e.taxtotal=t.taxtotal,e.total=t.total,e.rows=t.rows,e.sameState=t.sameState,e.invoiceIdComp=t.invoiceIdComp,e.grandtotal=t.grandtotal)}),t.$setItem("invoiceMstr",this.invMstr),t.$nextTick(function(){h()({title:"<h3>Invoice Id: <b>"+this.invoiceIdComp+"</b> Updated Successfully.</h3>",type:"success"}),t.clearInvTran(),t.loadInvMstr()})},saveInv:function(){var t=!1,e=this,a=e.invoiceIdComp;if(e.invMstr.forEach(function(e){e.invoiceId===a&&(t=!0)}),t)h()({title:"<h3>Invoice Id: "+a+" already exists. </br>Please Update Invoice Serial Number</h3>",type:"warning"}),e.$nextTick(function(){e.$root.$emit("show::modal","modal1")});else{var s=this.gstin1,i=this.gstin2,n=this.name1,o=this.name2,r=this.address1,l=this.address2,c=this.stateCode1,d=this.stateCode2,v=this.cstate,u=this.invoiceIdComp,m=this.invoiceDate,p=this.sameDet,f=this.taxtotal,g=this.total,x=this.rows,_=this.sameState,b=this.invoiceIdComp,y=this.grandtotal,w=this.goodsnservice,j=this;this.$getItem("invoiceMstr",function(t,e){t&&console.log(t.stack);var a={gstin1:s,gstin2:i,name1:n,name2:o,address1:r,address2:l,stateCode1:c,stateCode2:d,cstate:v,invoiceId:u,invoiceDate:m,sameDet:p,taxtotal:f,total:g,rows:x,sameState:_,invoiceIdComp:b,grandtotal:y,goodsnservice:w};if(null!==e&&void 0!==e)e.push(a),j.$setItem("invoiceMstr",e);else{var C=[];C.push(a),j.$setItem("invoiceMstr",C)}j.$nextTick(function(){h()({title:"<h3>Invoice Created Successfully With Invoice Id: <b>"+this.invoiceIdComp+"</b></h3>",type:"success"}),j.clearInvTran(),j.incrInvId(),j.loadInvMstr()})})}},clearInvTran:function(){this.gstin1="",this.gstin2="",this.name1="",this.name2="",this.address1="",this.address2="",this.stateCode1=null,this.stateCode2=null,this.cstate="",this.taxtotal=0,this.total=0,this.invoiceDate=new Date,this.rows=[{description:"",hsn:"",qty:0,price:0,total:0,discount:0,taxableAmt:0,cgst:0,sgst:0,igst:0,ugst:0,tax:""}],this.isUpdate=!1},saveInvTran:function(t){this.$setItem("invoiceMstr",t)},submit:function(t){var e=!1,a=this,s=a.invf+a.invr;if(a.invMstr.forEach(function(t){t.invoiceId===s&&(e=!0)}),e)h()({title:"<h3>Invoice Id: "+s+" already exists. </br>Please Update Invoice Serial Number</h3>",type:"warning"}),a.$nextTick(function(){a.$root.$emit("show::modal","modal1")});else{var i=this.cname,n=this.cgstin,o=this.caddress,r=this.invf,l=this.invr,c=this.cstate;this.$setItem("companyData",{cname:i,cgstin:n,caddress:o,cstate:c,invf:r,invr:l})}},addRow:function(t){try{this.rows.push({description:"",hsn:"",qty:0,price:0,total:0,discount:0,taxableAmt:0,cgst:0,sgst:0,igst:0,ugst:0})}catch(t){console.log(t)}},removeRow:function(t){this.rows.splice(t,1)},truncateDecimal:function(t){var e=parseFloat(t)+0;return Math.round(100*parseFloat(e))/100},taxCalc:function(){var t=0,e=0,a=this.sameState,s=this.utState,i=this;this.rows.forEach(function(n){n.qty=i.truncateDecimal(n.qty||0),n.price=i.truncateDecimal(n.price||0),n.discount>100||n.discount<0?n.discount=0:n.discount=i.truncateDecimal(n.discount||0);var o=n.qty*n.price,r=n.discount>0?o*n.discount/100:0,l=o-r,c=void 0===n.tax||""===n.tax?0:parseFloat(n.tax);if(n.taxableAmt=i.truncateDecimal(l*c/100),n.total=i.truncateDecimal(l),s)n.cgst=0,n.sgst=0,n.igst=0,n.ugst=n.taxableAmt;else if(a){var d=i.truncateDecimal(n.taxableAmt/2);n.cgst=d,n.sgst=d,n.igst=0,n.ugst=0}else n.cgst=0,n.sgst=0,n.igst=n.taxableAmt,n.ugst=0;t+=n.total,e+=n.taxableAmt}),this.taxtotal=isNaN(e)?0:this.truncateDecimal(e),this.total=this.truncateDecimal(t),this.grandtotal=this.truncateDecimal(this.taxtotal+this.total)},print:function(){var t=window.open("","PRINT","height=400,width=600");return t.document.write("<style>body    { border: 5px solid black }</style>"),t.document.write("<html><head><title>"+document.title+"</title>"),t.document.write("</head><body >"),t.document.write("<h1>"+document.title+"</h1>"),t.document.write(document.getElementById("appm").innerHTML),t.document.write("</body></html>"),t.document.close(),t.focus(),t.print(),t.close(),!0}},watch:{invr:function(t,e){isNaN(this.invr)&&(this.invr=e)},cstate:function(){this.taxCalc(),this.loadInvMstr()},sameDet:function(){this.sameDet&&(this.name2=this.name1,this.gstin2=this.gstin1,this.stateCode2=this.stateCode1,this.address2=this.address1)},name1:function(){this.sameDet&&(this.name2=this.name1)},gstin1:function(){this.sameDet&&(this.gstin2=this.gstin1)},stateCode1:function(){this.sameDet&&(this.stateCode2=this.stateCode1),this.taxCalc()},address1:function(){this.sameDet&&(this.address2=this.address1),this.taxCalc()},rows:{handler:function(t){this.taxCalc()},deep:!0}}}},198:function(t,e){},199:function(t,e){},200:function(t,e){},201:function(t,e){},202:function(t,e){},203:function(t,e){},205:function(t,e,a){function s(t){return a(i(t))}function i(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var n={"./af":35,"./af.js":35,"./ar":42,"./ar-dz":36,"./ar-dz.js":36,"./ar-kw":37,"./ar-kw.js":37,"./ar-ly":38,"./ar-ly.js":38,"./ar-ma":39,"./ar-ma.js":39,"./ar-sa":40,"./ar-sa.js":40,"./ar-tn":41,"./ar-tn.js":41,"./ar.js":42,"./az":43,"./az.js":43,"./be":44,"./be.js":44,"./bg":45,"./bg.js":45,"./bn":46,"./bn.js":46,"./bo":47,"./bo.js":47,"./br":48,"./br.js":48,"./bs":49,"./bs.js":49,"./ca":50,"./ca.js":50,"./cs":51,"./cs.js":51,"./cv":52,"./cv.js":52,"./cy":53,"./cy.js":53,"./da":54,"./da.js":54,"./de":57,"./de-at":55,"./de-at.js":55,"./de-ch":56,"./de-ch.js":56,"./de.js":57,"./dv":58,"./dv.js":58,"./el":59,"./el.js":59,"./en-au":60,"./en-au.js":60,"./en-ca":61,"./en-ca.js":61,"./en-gb":62,"./en-gb.js":62,"./en-ie":63,"./en-ie.js":63,"./en-nz":64,"./en-nz.js":64,"./eo":65,"./eo.js":65,"./es":67,"./es-do":66,"./es-do.js":66,"./es.js":67,"./et":68,"./et.js":68,"./eu":69,"./eu.js":69,"./fa":70,"./fa.js":70,"./fi":71,"./fi.js":71,"./fo":72,"./fo.js":72,"./fr":75,"./fr-ca":73,"./fr-ca.js":73,"./fr-ch":74,"./fr-ch.js":74,"./fr.js":75,"./fy":76,"./fy.js":76,"./gd":77,"./gd.js":77,"./gl":78,"./gl.js":78,"./gom-latn":79,"./gom-latn.js":79,"./he":80,"./he.js":80,"./hi":81,"./hi.js":81,"./hr":82,"./hr.js":82,"./hu":83,"./hu.js":83,"./hy-am":84,"./hy-am.js":84,"./id":85,"./id.js":85,"./is":86,"./is.js":86,"./it":87,"./it.js":87,"./ja":88,"./ja.js":88,"./jv":89,"./jv.js":89,"./ka":90,"./ka.js":90,"./kk":91,"./kk.js":91,"./km":92,"./km.js":92,"./kn":93,"./kn.js":93,"./ko":94,"./ko.js":94,"./ky":95,"./ky.js":95,"./lb":96,"./lb.js":96,"./lo":97,"./lo.js":97,"./lt":98,"./lt.js":98,"./lv":99,"./lv.js":99,"./me":100,"./me.js":100,"./mi":101,"./mi.js":101,"./mk":102,"./mk.js":102,"./ml":103,"./ml.js":103,"./mr":104,"./mr.js":104,"./ms":106,"./ms-my":105,"./ms-my.js":105,"./ms.js":106,"./my":107,"./my.js":107,"./nb":108,"./nb.js":108,"./ne":109,"./ne.js":109,"./nl":111,"./nl-be":110,"./nl-be.js":110,"./nl.js":111,"./nn":112,"./nn.js":112,"./pa-in":113,"./pa-in.js":113,"./pl":114,"./pl.js":114,"./pt":116,"./pt-br":115,"./pt-br.js":115,"./pt.js":116,"./ro":117,"./ro.js":117,"./ru":118,"./ru.js":118,"./sd":119,"./sd.js":119,"./se":120,"./se.js":120,"./si":121,"./si.js":121,"./sk":122,"./sk.js":122,"./sl":123,"./sl.js":123,"./sq":124,"./sq.js":124,"./sr":126,"./sr-cyrl":125,"./sr-cyrl.js":125,"./sr.js":126,"./ss":127,"./ss.js":127,"./sv":128,"./sv.js":128,"./sw":129,"./sw.js":129,"./ta":130,"./ta.js":130,"./te":131,"./te.js":131,"./tet":132,"./tet.js":132,"./th":133,"./th.js":133,"./tl-ph":134,"./tl-ph.js":134,"./tlh":135,"./tlh.js":135,"./tr":136,"./tr.js":136,"./tzl":137,"./tzl.js":137,"./tzm":139,"./tzm-latn":138,"./tzm-latn.js":138,"./tzm.js":139,"./uk":140,"./uk.js":140,"./ur":141,"./ur.js":141,"./uz":143,"./uz-latn":142,"./uz-latn.js":142,"./uz.js":143,"./vi":144,"./vi.js":144,"./x-pseudo":145,"./x-pseudo.js":145,"./yo":146,"./yo.js":146,"./zh-cn":147,"./zh-cn.js":147,"./zh-hk":148,"./zh-hk.js":148,"./zh-tw":149,"./zh-tw.js":149};s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id=205},995:function(t,e,a){function s(t){a(198)}var i=a(22)(a(160),a(996),s,"data-v-06274419",null);t.exports=i.exports},996:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"test",staticStyle:{"background-color":"white"},attrs:{id:"test"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("h2",{staticStyle:{float:"left",width:"1140px","margin-bottom":"15px"}},[t._v("GST Tax Invoice")]),t._v(" "),a("h4",{staticStyle:{float:"left",width:"1140px","margin-bottom":"5px"}},[t._v("GST Tax Invoice")]),t._v(" "),a("div",{staticStyle:{float:"right","margin-top":"-40px",position:"relative"}},[a("b-dropdown",{staticClass:"m-md-2",attrs:{text:"Menu",left:""}},[a("b-dropdown-item",{on:{click:function(e){t.$root.$emit("show::modal","modal1")}}},[t._v("My Company Details")]),t._v(" "),a("b-dropdown-item",{on:{click:function(e){t.jsonExport()}}},[t._v("Backup My Company Data")]),t._v(" "),a("b-dropdown-item",{on:{click:function(e){t.$root.$emit("show::modal","modal2")}}},[t._v("Restore My Company Data")])],1)],1)]),t._v(" "),a("div",{staticClass:"row"},[a("h4",{staticStyle:{float:"left",width:"630px"}},[t._v("Invoice Id: "+t._s(t.invoiceIdComp))]),t._v(" "),a("div",[a("h4",[t._v(" Date: ")]),t._v(" "),a("Datepicker",{staticStyle:{float:"left","margin-top":"-35px","margin-left":"280px"},attrs:{format:"dd-MM-yyyy",placeholder:"Select Date"},model:{value:t.invoiceDate,callback:function(e){t.invoiceDate=e},expression:"invoiceDate"}})],1)]),t._v(" "),a("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[a("div",{staticClass:"group",staticStyle:{float:"left",width:"230px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name1,expression:"name1"}],staticClass:"ipc",attrs:{type:"text",required:""},domProps:{value:t.name1},on:{input:function(e){e.target.composing||(t.name1=e.target.value)}}}),t._v(" "),a("span",{staticClass:"highlight"}),t._v(" "),a("span",{staticClass:"bar"}),t._v(" "),a("label",[t._v("Cusomer Name")])]),t._v(" "),a("div",{staticClass:"group",staticStyle:{float:"left",width:"230px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gstin1,expression:"gstin1"}],staticClass:"ipc",attrs:{type:"text",required:""},domProps:{value:t.gstin1},on:{input:function(e){e.target.composing||(t.gstin1=e.target.value)}}}),t._v(" "),a("span",{staticClass:"highlight"}),t._v(" "),a("span",{staticClass:"bar"}),a("label",[t._v("Customer GSTIN")])]),t._v(" "),a("div",{staticClass:"group",staticStyle:{float:"left",width:"230px","margin-top":"30px"}},[a("b-form-select",{staticStyle:{"margin-top":"-35px"},attrs:{options:t.stateList,calss:"mb-3"},model:{value:t.stateCode1,callback:function(e){t.stateCode1=e},expression:"stateCode1"}})],1),t._v(" "),a("div",{staticClass:"group",staticStyle:{float:"left",width:"420px",height:"25 px","padding-left":"10px","margin-top":"7px"}},[a("b-form-input",{attrs:{textarea:"",placeholder:"Customer Address"},model:{value:t.address1,callback:function(e){t.address1=e},expression:"address1"}})],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"panel-body",attrs:{id:"appm"}},[a("table",{staticClass:"table table-hover",staticStyle:{"max-width":"device-width","table-layout":"fixed","text-align":"left",margin:"auto"}},[t._m(0),t._v(" "),a("tbody",t._l(t.rows,function(e,s){return a("tr",{attrs:{"track-by":"index "}},[a("td",[a("div",{staticStyle:{display:"block"}},[t._v(t._s(s+1))])]),t._v(" "),a("td",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"row.description "}],staticClass:"form-control ",attrs:{rows:"2 "},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.hsn,expression:"row.hsn "}],staticClass:"form-control ",domProps:{value:e.hsn},on:{input:function(t){t.target.composing||(e.hsn=t.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.qty,expression:"row.qty "}],staticClass:"form-control ",attrs:{type:"number ",min:"0 "},domProps:{value:e.qty},on:{input:function(t){t.target.composing||(e.qty=t.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"row.price "}],staticClass:"form-control ",attrs:{type:"number ",min:"0 "},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.discount,expression:"row.discount "}],staticClass:"form-control ",attrs:{type:"number ",min:"0 ",max:"100 "},domProps:{value:e.discount},on:{input:function(t){t.target.composing||(e.discount=t.target.value)}}})]),t._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.tax,expression:"row.tax "}],staticClass:"form-control ",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});e.tax=t.target.multiple?a:a[0]},t.taxCalc]}},[a("option",{attrs:{value:"0 "}},[t._v("0%")]),t._v(" "),a("option",{attrs:{value:"5 "}},[t._v("5%")]),t._v(" "),a("option",{attrs:{value:"12 "}},[t._v("12%")]),t._v(" "),a("option",{attrs:{value:"18 "}},[t._v("18%")]),t._v(" "),a("option",{attrs:{value:"28 "}},[t._v("28%")])]),t._v(" "),e.cgst>0?a("ul",[a("li",[t._v("CGST: "+t._s(e.cgst))]),a("br"),t._v(" "),a("li",[t._v("SGST: "+t._s(e.sgst))]),a("br")]):t._e(),t._v(" "),e.igst>0?a("ul",[a("li",[t._v("IGST: "+t._s(e.igst))])]):t._e(),t._v(" "),e.ugst>0?a("ul",[a("li",[t._v("UGST: "+t._s(e.ugst))])]):t._e()]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.total,expression:"row.total"}],staticClass:"form-control text-right",attrs:{number:"",readonly:""},domProps:{value:e.qty*e.price,value:e.total},on:{input:function(t){t.target.composing||(e.total=t.target.value)}}})]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-danger btn-xs",on:{click:function(e){t.removeRow(s)}}},[a("icon",{attrs:{name:"trash",scale:"1"}})],1)])])})),t._v(" "),a("tfoot",[a("button",{staticClass:"btn btn-primary btn-xs",on:{click:function(e){t.addRow(t.index)}}},[t._v("Add New Line")]),t._v(" "),a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"7"}},[t._v("TAX")]),t._v(" "),a("td",{staticClass:"text-right",attrs:{colspan:"1"}},[t._v(t._s(t.taxtotal))]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"7"}},[t._v("TOTAL")]),t._v(" "),a("td",{staticClass:"text-right",attrs:{colspan:"1"}},[t._v(t._s(t.total))]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"7"}},[a("strong",[t._v("GRANDTOTAL")])]),t._v(" "),a("td",{staticClass:"text-right",attrs:{colspan:"1"}},[a("strong",[t._v(t._s(t.grandtotal))])]),t._v(" "),a("td")])])],1)])]),t._v(" "),a("br"),t._v(" "),a("b-btn",{attrs:{variant:"primary"},on:{click:function(e){t.saveOrUpdate()}}},[t._v("Save")]),t._v(" "),a("b-btn",{attrs:{variant:"primary"},on:{click:function(e){t.clearInvTran()}}},[t._v("Cancel")]),t._v(" "),a("hr"),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"justify-content-centermy-1 row"},[a("b-form-fieldset",{staticClass:"col-6",attrs:{horizontal:"",label:"Rows per page","label-size":6}},[a("b-form-select",{attrs:{options:[{text:10,value:10},{text:20,value:20},{text:50,value:50}]},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1),t._v(" "),a("b-form-fieldset",{staticClass:"col-6",attrs:{horizontal:"",label:"Filter","label-size":2}},[a("b-form-input",{attrs:{placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1),t._v(" "),a("b-table",{attrs:{striped:"",hover:"",items:t.invMstr,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter},scopedSlots:t._u([{key:"index",fn:function(e){return[t._v("\n        "+t._s(e.index+1)+"\n      ")]}},{key:"invoiceId",fn:function(e){return[t._v("\n     "+t._s(e.value)+"\n   ")]}},{key:"invoiceDate",fn:function(e){return[t._v("\n     "+t._s(t._f("moment")(e.value,"DD-MM-YYYY"))+"\n   ")]}},{key:"name1",fn:function(e){return[t._v("\n     "+t._s(e.value)+"\n   ")]}},{key:"grandtotal",fn:function(e){return[t._v("\n     "+t._s(e.value)+"\n   ")]}},{key:"update",fn:function(e){return[a("b-btn",{attrs:{size:"sm"},on:{click:function(a){t.update(e.item)}}},[t._v("Update")])]}}])}),t._v(" "),a("div",{staticClass:"justify-content-center row my-1"},[a("b-pagination",{attrs:{size:"md","total-rows":this.invMstr.length,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),a("b-modal",{attrs:{id:"modal1",size:"sm",title:"Enter Company Details","ok-only":""},on:{ok:t.submit,shown:t.loadModalData}},[a("form",[a("b-alert",{attrs:{variant:"danger",dismissible:"",show:t.showDismissibleAlert,required:""}}),t._v(" "),a("div",{staticClass:"group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cname,expression:"cname"}],staticClass:"ipc",attrs:{type:"text",required:""},domProps:{value:t.cname},on:{input:function(e){e.target.composing||(t.cname=e.target.value)}}}),t._v(" "),a("span",{staticClass:"highlight"}),t._v(" "),a("span",{staticClass:"bar"}),t._v(" "),a("label",[t._v(t._s("Name"))])]),t._v(" "),a("div",{staticClass:"group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cgstin,expression:"cgstin"}],staticClass:"ipc",attrs:{type:"text",required:""},domProps:{value:t.cgstin},on:{input:function(e){e.target.composing||(t.cgstin=e.target.value)}}}),t._v(" "),a("span",{staticClass:"highlight"}),t._v(" "),a("span",{staticClass:"bar"}),t._v(" "),a("label",[t._v(t._s("GSTIN"))])]),t._v(" "),a("div",{staticClass:"group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.invf,expression:"invf"}],staticClass:"ipc",attrs:{type:"text",required:""},domProps:{value:t.invf},on:{input:function(e){e.target.composing||(t.invf=e.target.value)}}}),t._v(" "),a("span",{staticClass:"highlight"}),t._v(" "),a("span",{staticClass:"bar"}),t._v(" "),a("label",[t._v(t._s("Invoice Fixed"))])]),t._v(" "),a("div",{staticClass:"group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.invr,expression:"invr"}],staticClass:"ipc",attrs:{type:"text",required:""},domProps:{value:t.invr},on:{input:function(e){e.target.composing||(t.invr=e.target.value)}}}),t._v(" "),a("span",{staticClass:"highlight"}),t._v(" "),a("span",{staticClass:"bar"}),t._v(" "),a("label",[t._v(t._s("Invoice Serial"))])]),t._v(" "),a("b-form-select",{staticStyle:{"margin-top":"-35px"},attrs:{options:t.stateList,calss:"mb-3"},model:{value:t.cstate,callback:function(e){t.cstate=e},expression:"cstate"}}),t._v(" "),a("b-form-input",{attrs:{textarea:"",placeholder:"Address"},model:{value:t.caddress,callback:function(e){t.caddress=e},expression:"caddress"}})],1)]),t._v(" "),a("b-modal",{attrs:{id:"modal2",size:"lg",title:"Restore My Company Data","ok-only":"","ok-title":"Close"}},[a("b-alert",{attrs:{variant:"danger",show:""}},[t._v(" Please use Restore My Company Data menu carefully. ")]),t._v(" "),a("b-alert",{attrs:{variant:"danger",show:""}},[t._v(" Please make sure you are Restoring file that is downloaded from this website only. ")]),t._v(" "),a("b-alert",{attrs:{variant:"danger",show:""}},[t._v(" Once you restore all current data will be lost and new restored data will be available. ")]),t._v(" "),a("form",[t._v(" Import Data "),a("input",{attrs:{type:"file"},on:{change:t.fileImport}}),a("br"),a("br")])],1)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticStyle:{width:"30px"}},[t._v("#")]),t._v(" "),a("th",{staticStyle:{width:"165px"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{width:"135px"}},[t._v("HSN Code")]),t._v(" "),a("th",{staticStyle:{width:"95px"}},[t._v("Quantity")]),t._v(" "),a("th",{staticStyle:{width:"95px"}},[t._v("Price")]),t._v(" "),a("th",{staticStyle:{width:"75px"}},[t._v("Discount")]),t._v(" "),a("th",{staticStyle:{width:"95px"}},[t._v("GST Tax")]),t._v(" "),a("th",{staticStyle:{width:"95px"}},[t._v("Total")]),t._v(" "),a("th",{staticStyle:{width:"90px"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h4",{staticStyle:{float:"left",width:"1140px","padding-bottom":"15px"}},[t._v("My Invoices")])])}]}},997:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},998:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return a("path",t._b({},"path",e))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return a("polygon",t._b({},"polygon",e))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[a("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}}},[157]);
//# sourceMappingURL=app.ecd55894a4557045c76d.js.map