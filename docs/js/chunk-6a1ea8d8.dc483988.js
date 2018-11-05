(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a1ea8d8"],{"6cb3":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"page"},[a("header",{attrs:{slot:"header"},slot:"header"},[e._v("\n        评价设置\n    ")]),a("div",{staticClass:"btn"},[a("el-button-group",[a("el-button",{attrs:{size:"medium",type:"primary",icon:"el-icon-plus"},on:{click:e.add}},[e._v("添加")])],1)],1),a("el-table",{staticClass:"table",attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{align:"center",prop:"xn",label:"学年","min-width":"120",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.xn)+"学年")])]}}])}),a("el-table-column",{attrs:{align:"center",prop:"xq",label:"学期","min-width":"80",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("第"+e._s(t.row.xq)+"学期")])]}}])}),a("el-table-column",{attrs:{align:"center",prop:"weekly",label:"总周次数","min-width":"40"}}),a("el-table-column",{attrs:{align:"center",prop:"per",label:"评价频率","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("每"+e._s(t.row.per)+"周")])]}}])}),a("el-table-column",{attrs:{align:"center",prop:"startdate",label:"学期开始日期","min-width":"120"}}),a("el-table-column",{attrs:{align:"center",prop:"status",label:"状态","min-width":"40",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:"1"===t.row.status?"success":"info","disable-transitions":""}},[e._v(e._s("1"===t.row.status?"使用":"停用"))])]}}])}),a("el-table-column",{attrs:{align:"center",label:"操作","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{icon:"el-icon-check",size:"mini"},on:{click:function(a){e.handleStart(t.row)}}},[e._v("使用")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(a){e.handleDel(t.row)}}},[e._v("删除")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("header",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.dialogName))]),a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"学年",required:""}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"xn1"}},[a("el-date-picker",{attrs:{type:"year","value-format":"yyyy",placeholder:"选择学年"},model:{value:e.ruleForm.xn1,callback:function(t){e.$set(e.ruleForm,"xn1",t)},expression:"ruleForm.xn1"}})],1)],1),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"xn2"}},[a("el-date-picker",{attrs:{type:"year","value-format":"yyyy",placeholder:"选择学年"},model:{value:e.ruleForm.xn2,callback:function(t){e.$set(e.ruleForm,"xn2",t)},expression:"ruleForm.xn2"}})],1)],1)],1),a("el-form-item",{attrs:{label:"学期",prop:"xq"}},[a("el-radio-group",{model:{value:e.ruleForm.xq,callback:function(t){e.$set(e.ruleForm,"xq",t)},expression:"ruleForm.xq"}},[a("el-radio",{attrs:{label:"1"}},[e._v("第1学期")]),a("el-radio",{attrs:{label:"2"}},[e._v("第2学期")])],1)],1),a("el-form-item",{attrs:{label:"总周次数"}},[a("el-input-number",{attrs:{min:1},model:{value:e.ruleForm.weekly,callback:function(t){e.$set(e.ruleForm,"weekly",t)},expression:"ruleForm.weekly"}})],1),a("el-form-item",{attrs:{label:"评价频率"}},[a("el-input-number",{attrs:{min:1,max:10},model:{value:e.ruleForm.per,callback:function(t){e.$set(e.ruleForm,"per",t)},expression:"ruleForm.per"}})],1),a("el-form-item",{attrs:{label:"学期开始日",prop:"startdate"}},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.startdate,callback:function(t){e.$set(e.ruleForm,"startdate",t)},expression:"ruleForm.startdate"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-radio-group",{model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}},[a("el-radio",{attrs:{label:"1"}},[e._v("使用")]),a("el-radio",{attrs:{label:"2"}},[e._v("禁用")])],1)],1)],1),a("el-alert",{attrs:{title:"选择为使用后，其他学期将均为停用状态",type:"success"}}),a("footer",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确 定")])],1)],1)],1)},r=[],s={data:function(){return{tableData:[],multipleSelection:[],pageSize:10,pageNum:1,total:1,dialogVisible:!1,dialogName:"",roleList:[],ruleForm:{xn:"",xn1:"",xn2:"",xq:"1",weekly:1,per:1,startdate:"",status:"1"},rules:{xn1:[{required:!0,message:"请选择开始学年",trigger:"change"}],xn2:[{required:!0,message:"请选择结束学年",trigger:"change"}],startdate:[{required:!0,message:"请选择学期开始日期",trigger:"change"}]}}},created:function(){this.getTableData()},methods:{getTableData:function(){var e=this;this.$ajax.post("/api/processPc/main").then(function(t){e.tableData=t.data.data})},clearForm:function(){this.ruleForm.xn="",this.ruleForm.xn1="",this.ruleForm.xn2="",this.ruleForm.startdate=""},add:function(){this.clearForm(),this.dialogVisible=!0,this.dialogName="添加"},submitForm:function(e){var t=this,a="添加"===this.dialogName?"/api/processPc/add":"/api/processPc/update";this.ruleForm.xn=this.ruleForm.xn1+"-"+this.ruleForm.xn2,this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$ajax.post(a,t.ruleForm).then(function(e){t.getTableData(),t.dialogVisible=!1,t.$message.success(e.data.errmsg)})})},handleStart:function(e){var t=this;this.$ajax.post("/api/processPc/updateStatus",{id:e.id}).then(function(e){t.getTableData(),t.$message.success(e.data.errmsg)})},handleDel:function(e){var t=this;console.log(e),this.$ajax.post("/api/processPc/remove",{id:e.id}).then(function(e){t.getTableData(),t.$message.success(e.data.errmsg)})}}},o=s,n=(a("e33f"),a("2877")),i=Object(n["a"])(o,l,r,!1,null,null,null);i.options.__file="table2.vue";t["default"]=i.exports},"977c":function(e,t,a){},e33f:function(e,t,a){"use strict";var l=a("977c"),r=a.n(l);r.a}}]);
//# sourceMappingURL=chunk-6a1ea8d8.dc483988.js.map