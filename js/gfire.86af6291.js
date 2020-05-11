(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gfire"],{c439:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{attrs:{"pa-1":""}},[t("v-layout",{attrs:{column:""}},[t("v-progress-circular",{attrs:{rotate:-90,size:100,width:15,value:e.percentComplete,color:"primary"}},[e._v("sent "+e._s(e.count)+" "+e._s(e.percentComplete)+"%")]),t("v-layout",{attrs:{"justify-center":"","ma-4":""}},[t("v-chip",{attrs:{color:"","text-color":"black"}},[t("v-avatar",[t("v-icon",[e._v("account_circle")])],1),e._v("\n        last sent: "+e._s(e.email)+"\n      ")],1)],1),t("span",{domProps:{innerHTML:e._s(e.compiledHtmlMessage)}}),t("p",[e._v(e._s(e.delay)+" secs")]),t("v-form",{on:{submit:function(a){return a.preventDefault(),e.onSubmit(a)}},model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[t("v-flex",{attrs:{xs12:"",sm6:"","d-flex":""}},[t("v-select",{attrs:{items:e.delays,box:"",label:"Send Interval(sec)"},model:{value:e.delay,callback:function(a){e.delay=a},expression:"delay"}})],1),t("v-switch",{attrs:{label:"Use auto-smtp: "+e.autoSMTP.toString()},model:{value:e.autoSMTP,callback:function(a){e.autoSMTP=a},expression:"autoSMTP"}}),t("v-flex",{attrs:{xs12:"",sm6:"","d-flex":""}},[t("v-select",{attrs:{disabled:0==e.autoSMTP,items:e.providers,box:"",label:"Email Provider"},model:{value:e.provider,callback:function(a){e.provider=a},expression:"provider"}})],1),t("v-text-field",{attrs:{disabled:e.autoSMTP,box:"",label:"SMTP Host",type:"text",required:""},model:{value:e.smtpHost,callback:function(a){e.smtpHost=a},expression:"smtpHost"}}),t("v-textarea",{attrs:{box:"",label:"SMTP(user:password) one per line",required:""},model:{value:e.providerUserPass,callback:function(a){e.providerUserPass=a},expression:"providerUserPass"}}),t("v-switch",{attrs:{label:"Use Proxy: "+e.useProxy.toString()},model:{value:e.useProxy,callback:function(a){e.useProxy=a},expression:"useProxy"}}),e.useProxy?t("v-text-field",{attrs:{box:"",label:"Proxy",type:"text",required:""},model:{value:e.proxy,callback:function(a){e.proxy=a},expression:"proxy"}}):e._e(),t("v-text-field",{attrs:{box:"",label:"Sender's Name (defaults to company name if empty)",type:"text",required:""},model:{value:e.senderName,callback:function(a){e.senderName=a},expression:"senderName"}}),t("v-text-field",{attrs:{box:"",label:"Sender's Email(Required for AWS or sendgrid only)",type:"text",required:""},model:{value:e.senderEmail,callback:function(a){e.senderEmail=a},expression:"senderEmail"}}),t("v-textarea",{attrs:{box:"",label:"pageUrls",required:""},model:{value:e.pageURLs,callback:function(a){e.pageURLs=a},expression:"pageURLs"}}),t("v-textarea",{attrs:{box:"",label:"Recipients(test@test.com,Tester) one per line",required:""},model:{value:e.emailName,callback:function(a){e.emailName=a},expression:"emailName"}}),t("v-text-field",{attrs:{box:"",label:"Subject",type:"text",required:""},model:{value:e.subject,callback:function(a){e.subject=a},expression:"subject"}}),t("v-textarea",{attrs:{box:"",label:"HTML Message",required:""},model:{value:e.htmlMessage,callback:function(a){e.htmlMessage=a},expression:"htmlMessage"}}),t("hr"),t("p",[e._v(e._s(e.attachmentOption))]),t("v-radio-group",{attrs:{row:""},model:{value:e.attachmentOption,callback:function(a){e.attachmentOption=a},expression:"attachmentOption"}},[t("v-radio",{attrs:{label:"No attachment",value:"no-attachment"}}),t("v-radio",{attrs:{label:"Attach pdf",value:"attach-pdf"}}),t("v-radio",{attrs:{label:"Attach from pdf source",value:"attach-pdf-from-source"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:"attach-pdf"==e.attachmentOption,expression:"attachmentOption == 'attach-pdf'"}]},[t("v-btn",{staticClass:"primary",attrs:{raised:""},on:{click:e.onPickFile}},[e._v("Add attachment")]),t("v-progress-linear",{attrs:{value:e.percentageUploaded,active:Boolean(this.percentageUploaded)}}),e.uploadedFileName?t("v-chip",{staticClass:"ma-2",attrs:{close:""},on:{click:function(a){e.uploadedFileName="",e.percentageUploaded=0}}},[e._v("\n          "+e._s(e.compiledUploadedFileName)+"\n          "+e._s(e.uploadedFileSize/1e3)+"KB\n        ")]):e._e(),t("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.onFilePicked}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:"attach-pdf-from-source"==e.attachmentOption,expression:"attachmentOption == 'attach-pdf-from-source'"}]},[t("v-textarea",{attrs:{box:"",label:"PDF Source",required:""},model:{value:e.pdfSource,callback:function(a){e.pdfSource=a},expression:"pdfSource"}})],1),t("v-text-field",{directives:[{name:"show",rawName:"v-show",value:"no-attachment"!=e.attachmentOption,expression:"attachmentOption != 'no-attachment'"}],attrs:{box:"",label:"Rename File",type:"text",required:""},model:{value:e.uploadedFileName,callback:function(a){e.uploadedFileName=a},expression:"uploadedFileName"}})],1),t("v-btn",{attrs:{small:"",color:"blue",dark:""},on:{click:e.submitForm}},[e._v("SEND")]),t("v-snackbar",{model:{value:e.snackbar,callback:function(a){e.snackbar=a},expression:"snackbar"}},[e._v("\n      "+e._s(e.snackbarText)+"\n      "),t("v-btn",{attrs:{color:"green",text:""},on:{click:function(a){e.snackbar=!1}}},[e._v("Close")])],1)],1)],1)},n=[],i=(t("96cf"),t("3040")),s=(t("7f7f"),t("28a5"),t("cadf"),t("551c"),t("097d"),t("dc59")),l=t("5873"),r=t("c2d5"),c={components:{VueEditor:l["a"]},data:function(){return{useProxy:!1,proxy:"user:pass@ip:port",pdfSource:"",attachmentOption:"no-attachment",upLoadedFile:null,uploadedFileName:"",uploadedFileSize:null,percentageUploaded:0,snackbar:!1,snackbarText:"",providers:["Naver","Gmail","SES-EU-WEST-1","SendGrid","Mailgun","Mailjet","Mandrill","SendPulse","SendinBlue","PostmarkApp","Sparkpost","Godaddy","GodaddyAsia","GodaddyEurope","Tipimail"],provider:"SendGrid",smtpHost:"host:port",autoSMTP:!0,delays:["1","2","3","4","5","7","10","15","20","30"],delay:"3",count:0,value:0,valid:!1,emailName:"",name:"",email:"",senderName:"",senderEmail:"",providerUserPass:"",providerUser:"",providerPass:"",subject:"",companyDomain:"",companyName:"",htmlMessage:"%name% <br /> %company_name% <br /> %company_domain% <br />%page_url%",pageURLs:"https://google.com/%email%",pageURL:"",sendDisabled:!1,percentComplete:0}},computed:{emailSize:function(){return this.emailName.split("\n").length},compiledSenderEmail:function(){return this.senderEmail.split("%company_name%").join(this.companyName).split("%company_domain%").join(this.companyDomain)},compiledSenderName:function(){return this.senderName.split("%company_name%").join(this.companyName)},compiledSubject:function(){return this.subject.split("%name%").join(this.name).split("%company_name%").join(this.companyName).split("%company_domain%").join(this.companyDomain)},compiledPageURL:function(){return this.pageURL.split("%name%").join(this.name).split("%email%").join(this.email)},compiledHtmlMessage:function(){return this.htmlMessage.split("%name%").join(this.name).split("%company_name%").join(this.companyName).split("%company_domain%").join(this.companyDomain).split("%page_url%").join(this.compiledPageURL).split("%email%").join(this.email)},compiledUploadedFileName:function(){return this.uploadedFileName.split("%name%").join(this.name).split("%company_name%").join(this.companyName)},compiledPdfSource:function(){return this.pdfSource.split("%name%").join(this.name).split("%company_name%").join(this.companyName).split("%company_domain%").join(this.companyDomain).split("%page_url%").join(this.compiledPageURL)}},created:function(){},firestore:function(){return{users:s["a"].collection("users")}},methods:{onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(e){var a=this,t=e.target.files,o=t[0];this.uploadedFileName=o.name,this.uploadedFileSize=o.size;var n=s["b"].ref("".concat(this.uploadedFileName));this.percentageUploaded=0;var i=n.put(o);i.on("state_changed",function(e){a.percentageUploaded=e.bytesTransferred/e.totalBytes*100,console.log(a.percentageUploaded)},function(e){console.log(e)},function(){a.snackbarText="upload successful!",a.snackbar=!0})},submitForm:function(){var e=this,a=this.emailName.split("\n"),t=this.pageURLs.split("\n"),o=this.providerUserPass.split("\n");console.log(this.delay),console.log(a),console.log(a.length);for(var n=function(n){var s=e.$rr(o),l=e.$rr(t),c=s.split(":")[0].trim(),p=s.split(":")[1].trim();setTimeout(Object(i["a"])(regeneratorRuntime.mark(function t(){var o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.email=a[n].split(",")[0],e.count=n+1,console.log(e.count),e.percentComplete=Math.ceil(e.count/a.length*100),console.log(e.email),e.providerUser=c,e.providerPass=p,e.pageURL=l,console.log(c,p,l),e.name=a[n].split(",")[1],e.companyDomain=e.email.split("@")[1],o=e.email.split("@")[1].split(".")[0],e.companyName=o.charAt(0).toUpperCase()+o.slice(1),t.prev=13,t.next=16,e.$firestore.users.add({senderName:e.compiledSenderName,senderEmail:e.compiledSenderEmail,email:e.email,htmlMessage:e.$spintax.unspin(e.compiledHtmlMessage),textMessage:r["fromString"](e.$spintax.unspin(e.compiledHtmlMessage)),subject:e.$spintax.unspin(e.compiledSubject),provider:e.provider,providerUser:c,providerPass:p,attachmentOption:e.attachmentOption,pdfSource:e.compiledPdfSource,renameFilename:e.compiledUploadedFileName,proxy:e.proxy,useProxy:e.useProxy,smtpHost:e.smtpHost,autoSMTP:e.autoSMTP});case 16:t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](13),console.log(t.t0);case 21:case"end":return t.stop()}},t,this,[[13,18]])})),1e3*e.delay*n)},s=0;s<a.length;s++)n(s)}}},p=c,m=t("2877"),d=Object(m["a"])(p,o,n,!1,null,null,null);d.options.__file="gfire.vue";a["default"]=d.exports}}]);
//# sourceMappingURL=gfire.86af6291.js.map