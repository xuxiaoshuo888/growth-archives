(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-533c90e4"],{"0221":function(e,t,a){},"58ec":function(e,t,a){e.exports=a.p+"img/demo1.ba188bff.png"},a128:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"archives"},[s("el-card",{attrs:{shadow:"hover"}},[e._v("我的档案")]),s("div",{staticClass:"content"},[s("div",{staticClass:"left"},[s("el-card",{staticClass:"user-card",attrs:{shadow:"hover"}},[s("div",{staticClass:"user"},[s("img",{attrs:{src:a("58ec")}}),s("p",[s("strong",[e._v(e._s(e.user.studentName))]),s("br"),s("span",[e._v(e._s(e.user.className))])])]),s("div",{staticClass:"growth"},[e._v("我的成长值："),s("em",[e._v(e._s(e.user.growths))])]),s("div",{staticClass:"rank"},[s("span",[s("em",[e._v(e._s(e.user.bjRank)+"名")]),s("br"),e._v("\n                        班级排名\n                    ")]),s("span",[s("em",[e._v(e._s(e.user.bjRank)+"名")]),s("br"),e._v("\n                        年级排名\n                    ")])])]),s("el-card",{staticClass:"data-card",attrs:{shadow:"hover"}},[s("header",{attrs:{slot:"header"},slot:"header"},[e._v("我的资料\n                    "),s("el-button",{staticClass:"editor",attrs:{type:"text"},on:{click:e.editor}},[e._v(e._s(e.dataBtnName))])],1),s("el-form",{attrs:{"label-width":"70px",size:"mini",disabled:""}},[s("el-form-item",{attrs:{label:"班主任"}},[s("el-input",{model:{value:e.dataForm.teachername+"老师",callback:function(t){e.$set(e.dataForm,"teachername+'老师'",t)},expression:"dataForm.teachername+'老师'"}})],1)],1),s("el-form",{attrs:{model:e.dataForm,"label-width":"70px",size:"mini",disabled:e.dataFormDisabled}},[s("el-form-item",{attrs:{label:"我的理想"}},[s("el-input",{model:{value:e.dataForm.wdlx,callback:function(t){e.$set(e.dataForm,"wdlx",t)},expression:"dataForm.wdlx"}})],1),s("el-form-item",{attrs:{label:"兴趣爱好"}},[s("el-input",{model:{value:e.dataForm.xqah,callback:function(t){e.$set(e.dataForm,"xqah",t)},expression:"dataForm.xqah"}})],1),s("el-form-item",{attrs:{label:"我的特长"}},[s("el-input",{model:{value:e.dataForm.wdtc,callback:function(t){e.$set(e.dataForm,"wdtc",t)},expression:"dataForm.wdtc"}})],1)],1)],1),s("el-card",{staticClass:"medal-card",attrs:{shadow:"hover"}},[s("header",{attrs:{slot:"header"},slot:"header"},[e._v("我的奖章")]),s("ul",e._l(e.medalList,function(t){return s("li",[s("img",{attrs:{src:e.$proxy+e.imgUrl+t.jzsl}}),s("span",[e._v(e._s(t.name))])])}))])],1),s("el-card",{staticClass:"center",attrs:{shadow:"hover"}},[s("header",{attrs:{slot:"header"},slot:"header"},[e._v("\n                "+e._s(e.year)+"学年\n                "),s("div",{staticClass:"btn"},[s("el-button",{attrs:{size:"mini"},on:{click:e.add}},[e._v("新增")]),s("el-button",{attrs:{size:"mini"}},[e._v("导出")]),s("el-button",{attrs:{size:"mini"},on:{click:function(t){e.detailShow=!e.detailShow}}},[e._v(e._s(e.detailShow?"成长之树":"成长详情"))])],1)]),s("ul",{directives:[{name:"show",rawName:"v-show",value:e.detailShow,expression:"detailShow"}],staticClass:"list"},e._l(e.detailList,function(t){return s("li",["1"===t.jlfs?s("i",{staticClass:"fa fa-thumbs-up green"}):s("i",{staticClass:"fa fa-book orange"}),s("div",{staticClass:"main"},[s("p",[e._v(e._s(t.title)+"，成长值+"+e._s(t.growth)+"；")]),s("time",[e._v(e._s(t.givetime))]),s("div",{staticClass:"img"},e._l(t.imglist,function(t){return s("img",{attrs:{src:e.$proxy+e.imgUrl+t.url}})}))])])})),s("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>e.pageSize&&e.detailShow,expression:"total>pageSize&&detailShow"}],staticStyle:{"margin-top":"20px"},attrs:{background:"","current-page":e.pageNum,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange}}),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.detailShow,expression:"!detailShow"}],staticClass:"tree"},[s("img",{directives:[{name:"show",rawName:"v-show",value:e.tree,expression:"tree"}],attrs:{src:"tree/"+e.tree+".png"}}),s("em",[e._v(e._s(e.user.growths))]),s("div",{attrs:{id:"radar"}})])],1),s("div",{staticClass:"right"},[s("el-card",{staticClass:"evaluate-list",attrs:{shadow:"hover"}},[s("header",{attrs:{slot:"header"},slot:"header"},[e._v("我的评价")]),s("ul",e._l(e.evaluateList,function(t){return s("li",[s("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){e.eva(t.id)}}},[e._v(e._s(e.year)+"第"+e._s(t.weekly)+"周评价")])],1)}))]),s("el-card",{staticClass:"rank-list",attrs:{shadow:"hover"}},[s("header",{attrs:{slot:"header"},slot:"header"},[s("span",{class:{notActive:!e.classRankShow},on:{click:function(t){e.classRankShow=!e.classRankShow}}},[e._v("班级排名")]),s("span",{class:{notActive:e.classRankShow},on:{click:function(t){e.classRankShow=!e.classRankShow}}},[e._v("年级排名")])]),s("ul",{directives:[{name:"show",rawName:"v-show",value:e.classRankShow,expression:"classRankShow"}]},e._l(e.classRankList,function(t,a){return s("li",[s("div",{staticClass:"main"},[s("em",{style:{background:t.color}},[e._v(e._s(a+1))]),s("span",[e._v(e._s(t.user_name)),s("br"),e._v(e._s(t.classname))])]),s("div",{staticClass:"value",style:{color:t.color}},[e._v("+"+e._s(t.growths))])])})),s("ul",{directives:[{name:"show",rawName:"v-show",value:!e.classRankShow,expression:"!classRankShow"}]},e._l(e.gradeRankList,function(t,a){return s("li",[s("div",{staticClass:"main"},[s("em",{style:{background:t.color}},[e._v(e._s(a+1))]),s("span",[e._v(e._s(t.user_name)),s("br"),e._v(e._s(t.classname))])]),s("div",{staticClass:"value",style:{color:t.color}},[e._v("+"+e._s(t.growths))])])}))])],1)],1),s("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[s("header",{attrs:{slot:"title"},slot:"title"},[e._v("新增")]),s("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"标题",prop:"title"}},[s("el-input",{model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),s("el-form-item",{attrs:{label:"获奖时间"}},[s("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.archive_date,callback:function(t){e.$set(e.ruleForm,"archive_date",t)},expression:"ruleForm.archive_date"}})],1),s("el-form-item",{attrs:{label:"学校维度",prop:"school"}},[s("el-select",{attrs:{placeholder:"请选择学校维度"},on:{change:e.schoolChange},model:{value:e.ruleForm.dimensionality_school_id,callback:function(t){e.$set(e.ruleForm,"dimensionality_school_id",t)},expression:"ruleForm.dimensionality_school_id"}},e._l(e.schoolList,function(e){return s("el-option",{attrs:{label:e.name,value:e.id}})}))],1),s("el-form-item",{attrs:{label:"等级"}},[s("el-select",{attrs:{placeholder:"请选择等级"},on:{change:e.gradeChange},model:{value:e.ruleForm.grade_id,callback:function(t){e.$set(e.ruleForm,"grade_id",t)},expression:"ruleForm.grade_id"}},e._l(e.gradeList,function(e){return s("el-option",{attrs:{label:e.name,value:e.id}})}))],1),s("el-form-item",{attrs:{label:"成长值"}},[s("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.growth,callback:function(t){e.$set(e.ruleForm,"growth",t)},expression:"ruleForm.growth"}})],1),s("el-form-item",{attrs:{label:"详细描述",prop:"desc"}},[s("el-input",{attrs:{type:"textarea",autosize:{minRows:2}},model:{value:e.ruleForm.description,callback:function(t){e.$set(e.ruleForm,"description",t)},expression:"ruleForm.description"}})],1),s("el-form-item",{attrs:{label:"附件"}},[s("el-upload",{attrs:{action:e.$proxy+"/upload/uploadFile","on-remove":e.handleRemove,"on-success":e.handleSuccess,"file-list":e.ruleForm.imglist}},[s("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-upload"}},[e._v("选择上传")])],1)],1)],1),s("footer",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确 定")])],1)],1),s("el-dialog",{staticClass:"table-edit",attrs:{visible:e.dialogVisibleEva},on:{"update:visible":function(t){e.dialogVisibleEva=t}}},[s("header",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.dialogName))]),s("el-table",{staticClass:"table",attrs:{data:e.evaluationList,border:"",stripe:""}},[s("el-table-column",{attrs:{align:"center",prop:"studentname",label:"学生姓名","min-width":"100"}}),s("el-table-column",{attrs:{align:"center",prop:"temp1",label:"认真完成老师布置的作业","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-checkbox",{model:{value:t.row.temp1,callback:function(a){e.$set(t.row,"temp1",a)},expression:"scope.row.temp1"}})]}}])}),s("el-table-column",{attrs:{align:"center",prop:"temp2",label:"学习态度认真"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-checkbox",{model:{value:t.row.temp2,callback:function(a){e.$set(t.row,"temp2",a)},expression:"scope.row.temp2"}})]}}])}),s("el-table-column",{attrs:{align:"center",prop:"temp3",label:"积极参与班级组织的活动"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-checkbox",{model:{value:t.row.temp3,callback:function(a){e.$set(t.row,"temp3",a)},expression:"scope.row.temp3"}})]}}])}),s("el-table-column",{attrs:{align:"center",prop:"other",label:"其他表现","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-input",{model:{value:t.row.other,callback:function(a){e.$set(t.row,"other",a)},expression:"scope.row.other"}})]}}])})],1),s("footer",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogVisibleEva=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitFormEva()}}},[e._v("确 定")])],1)],1)],1)},i=[],r=(a("7f7f"),a("cadf"),a("551c"),a("097d"),{name:"Archives",data:function(){return{user:"",tree:"",dataBtnName:"编辑",dataForm:{teachername:"",wdlx:"",xqah:"",wdtc:""},dataFormDisabled:!0,medalList:"",imgUrl:"/resource/showImg?path=",year:"",dialogVisible:!1,schoolList:[],gradeList:[],ruleForm:{student_id:"",title:"",archive_date:"",dimensionality_school_id:"",grade_id:"",growth:"",description:"",archiveFile:""},archiveFileList:[],fileList:[],rules:{title:[{required:!0,message:"标题不能为空",trigger:"blur"}]},dialogVisibleEva:!1,dialogName:"",evaluationList:[],weeklyid:"",detailShow:!1,detailList:[],pageSize:10,pageNum:1,total:1,evaluateList:[],classRankList:[],classRankShow:!0,gradeRankList:[],radar:[],max:0}},created:function(){var e=this;this.getStudentCard(),this.$ajax.post("/api/student/getInfo").then(function(t){e.dataForm=t.data.data}),this.$ajax.post("/api/student/getXn").then(function(t){e.year=t.data.data.xn}),this.getDetailList(),this.$ajax.post("/api/student/getstudentArchivesList").then(function(t){e.radar=t.data.data}).then(function(){e.drawRadar()}),this.$ajax.post("/api/student/getstudentMedal").then(function(t){e.medalList=t.data.data}),this.$ajax.post("/api/student/getEvaluateList").then(function(t){e.evaluateList=t.data.data}),this.$ajax.post("/api/myClass/getBjRank").then(function(t){e.classRankList=t.data.data}),this.$ajax.post("/api/myClass/getNjRank").then(function(t){e.gradeRankList=t.data.data})},methods:{getStudentCard:function(){var e=this;this.$ajax.post("/api/desktop/getInfo").then(function(t){e.user=t.data.data}).then(function(){e.getTreeUrl(e.user.growths)})},getTreeUrl:function(e){switch(!0){case e<=5:this.tree="1";break;case e>=6&&e<=10:this.tree="2";break;case e>=11&&e<=15:this.tree="3";break;case e>=16&&e<=20:this.tree="4";break;case e>=21&&e<=25:this.tree="5";break;case e>=26&&e<=30:this.tree="6";break;case e>=31&&e<=40:this.tree="7";break;case e>=41&&e<=50:this.tree="8";break;case e>=51&&e<=60:this.tree="9";break;case e>=61&&e<=70:this.tree="10";break;case e>=71&&e<=80:this.tree="11";break;case e>=81&&e<=90:this.tree="12";break;case e>=91&&e<=100:this.tree="13";break;case e>=101&&e<=115:this.tree="14";break;case e>=116&&e<=130:this.tree="15";break;case e>=131&&e<=145:this.tree="16";break;case e>=146&&e<=160:this.tree="17";break;case e>=161&&e<=180:this.tree="18";break;case e>=181&&e<=200:this.tree="19";break;case e>=201&&e<=220:this.tree="20";break;case e>=221&&e<=240:this.tree="21";break;case e>=241&&e<=270:this.tree="22";break;case e>=271&&e<=300:this.tree="23";break;case e>=301&&e<=340:this.tree="24";break;case e>=341&&e<=380:this.tree="25";break;case e>=381&&e<=430:this.tree="26";break;case e>=431&&e<=480:this.tree="27";break;case e>=481&&e<=550:this.tree="28";break;default:this.tree="29"}},eva:function(e){this.dialogVisibleEva=!0,this.dialogName="评价",this.weeklyid=e,this.getEvaluationList()},getEvaluationList:function(){var e=this;this.$ajax.post("/api/processEvaluate/getEvaluationList",{weekly:this.weeklyid,roleId:"6"}).then(function(t){e.evaluationList=t.data.data.data,console.log(e.evaluationList)})},submitFormEva:function(){var e=this,t=JSON.stringify(this.evaluationList);this.$ajax.post("/api/processEvaluate/addEvaluation",{evaluation:t,weekly:this.weeklyid,roleId:"6"}).then(function(t){e.dialogVisibleEva=!1,e.$message.success(t.data.errmsg)})},editor:function(){var e=this;"编辑"===this.dataBtnName?(this.dataBtnName="保存",this.dataFormDisabled=!1):"保存"===this.dataBtnName&&this.$ajax.post("/api/student/updateStudent",this.dataForm).then(function(t){e.dataBtnName="编辑",e.dataFormDisabled=!0,e.$message.success(t.data.errmsg)})},drawRadar:function(){var e=this,t=this.$echarts.init(document.getElementById("radar"));this.$ajax.post("/api/student/getGrowthsMax").then(function(t){e.max=t.data.data.max}).then(function(){t.setOption({radar:{name:{textStyle:{color:"#333",fontSize:"12px"}},nameGap:2,axisLine:{lineStyle:{color:"rgba(131,141,158,.1)"}},indicator:[{name:e.radar[0].name,max:e.max},{name:e.radar[1].name,max:e.max},{name:e.radar[2].name,max:e.max},{name:e.radar[3].name,max:e.max},{name:e.radar[4].name,max:e.max}],radius:50},series:[{type:"radar",data:[{value:[e.radar[0].growths,e.radar[1].growths,e.radar[2].growths,e.radar[3].growths,e.radar[4].growths],name:"",itemStyle:{normal:{color:"rgba(95,184,120,.3)"}}}]}]})})},getDetailList:function(){var e=this;this.$ajax.post("/api/student/getstudentArchives",{pageSize:this.pageSize,pageNum:this.pageNum}).then(function(t){e.detailList=t.data.data.rows,e.total=t.data.data.records})},getSchoolList:function(){var e=this;this.$ajax.post("/api/archives/getSchoolDimensionalityList").then(function(t){e.schoolList=t.data.data})},schoolChange:function(){var e=this;this.gradeList=[],this.ruleForm.grade_id="",this.$ajax.post("/api/archives/getGrowth ",{dimensionality_school_id:this.ruleForm.dimensionality_school_id}).then(function(t){e.ruleForm.growth=t.data.data.growth}),this.$ajax.post("/api/archives/getGradeList",{dimensionality_school_id:this.ruleForm.dimensionality_school_id}).then(function(t){e.gradeList=t.data.data})},gradeChange:function(){var e=this;this.$ajax.post("/api/archives/getGrowth ",{grade_id:this.ruleForm.grade_id}).then(function(t){e.ruleForm.growth=t.data.data.growth})},clearForm:function(){this.ruleForm.student_id="",this.ruleForm.title="",this.ruleForm.archive_date="",this.ruleForm.dimensionality_school_id="",this.ruleForm.grade_id="",this.ruleForm.growth="",this.ruleForm.description=""},add:function(){this.clearForm(),this.dialogVisible=!0,this.getSchoolList()},handleRemove:function(e,t){var a=e.url?e.url:e.response.path;this.$ajax.post("/resource/deleteFile",{path:a}).then(function(e){console.log(e.data.errmsg)}),this.fileList=t},handleSuccess:function(e,t,a){console.log(e.data.errmsg),this.fileList=a},submitForm:function(e){var t=this,a="/api/archives/add";this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;for(var s=0;s<t.fileList.length;s++)t.fileList[s].response?t.archiveFileList.push({url:t.fileList[s].response.path,name:t.fileList[s].name}):t.archiveFileList.push({url:t.fileList[s].url,name:t.fileList[s].name});t.ruleForm.archiveFile=JSON.stringify(t.archiveFileList),t.$ajax.post(a,t.ruleForm).then(function(e){t.getDetailList(),t.getStudentCard(),t.dialogVisible=!1,t.$message.success(e.data.errmsg)})})},handleCurrentChange:function(e){this.pageNum=e,this.getDetailList()}}}),o=r,l=(a("e2d5"),a("2877")),n=Object(l["a"])(o,s,i,!1,null,null,null);n.options.__file="Archives.vue";t["default"]=n.exports},e2d5:function(e,t,a){"use strict";var s=a("0221"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-533c90e4.e23cbfbb.js.map