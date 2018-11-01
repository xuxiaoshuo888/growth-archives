(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d841c91"],{"13bf":function(t,e,i){"use strict";var l=i("9234"),a=i.n(l);a.a},"3e60":function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-card",{staticClass:"page"},[i("header",{attrs:{slot:"header"},slot:"header"},[t._v("\n        档案管理\n    ")]),i("el-form",{staticClass:"search",attrs:{size:"medium","label-width":"60px",inline:!0}},[i("el-form-item",{attrs:{label:"班级"}},[i("el-select",{attrs:{placeholder:"请选择班级"},on:{change:t.classChange},model:{value:t.classId,callback:function(e){t.classId=e},expression:"classId"}},t._l(t.classList,function(t){return i("el-option",{attrs:{label:t.class_name,value:t.id}})}))],1),i("el-form-item",{attrs:{label:"学生"}},[i("el-select",{attrs:{placeholder:"请选择学生"},model:{value:t.studentId,callback:function(e){t.studentId=e},expression:"studentId"}},t._l(t.studentList,function(t){return i("el-option",{attrs:{label:t.userName,value:t.id}})}))],1),i("el-form-item",[i("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.getTableData}},[t._v("查询")])],1)],1),i("div",{staticClass:"btn"},[i("el-button-group",[i("el-button",{attrs:{size:"medium",type:"primary",icon:"el-icon-plus"},on:{click:t.add}},[t._v("添加")]),i("el-button",{attrs:{size:"medium",type:"primary",icon:"el-icon-edit"},on:{click:t.editor}},[t._v("编辑")]),i("el-button",{attrs:{size:"medium",type:"primary",icon:"el-icon-delete"},on:{click:t.del}},[t._v("删除")])],1)],1),i("el-table",{staticClass:"table",attrs:{data:t.tableData,border:"",stripe:""},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{align:"center",type:"selection",width:"40"}}),i("el-table-column",{attrs:{align:"center",prop:"studentname",label:"学生","min-width":"60"}}),i("el-table-column",{attrs:{align:"center",prop:"xxwdname",label:"学校维度","min-width":"100",sortable:""}}),i("el-table-column",{attrs:{align:"center",prop:"title",label:"标题","min-width":"180"}}),i("el-table-column",{attrs:{align:"center",prop:"lrsname",label:"录入人","min-width":"80"}}),i("el-table-column",{attrs:{align:"center",prop:"growth",label:"成长值","min-width":"50",sortable:""}}),i("el-table-column",{attrs:{align:"center",prop:"lrsj",label:"录入时间","min-width":"150",sortable:""}})],1),i("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.pageNum,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}}),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("header",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.dialogName))]),i("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"标题",prop:"title"}},[i("el-input",{model:{value:t.ruleForm.title,callback:function(e){t.$set(t.ruleForm,"title",e)},expression:"ruleForm.title"}})],1),i("el-form-item",{attrs:{label:"获奖时间"}},[i("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.ruleForm.archive_date,callback:function(e){t.$set(t.ruleForm,"archive_date",e)},expression:"ruleForm.archive_date"}})],1),i("el-form-item",{attrs:{label:"学校维度",prop:"school"}},[i("el-select",{attrs:{placeholder:"请选择学校维度"},on:{change:t.schoolChange},model:{value:t.ruleForm.dimensionality_school_id,callback:function(e){t.$set(t.ruleForm,"dimensionality_school_id",e)},expression:"ruleForm.dimensionality_school_id"}},t._l(t.schoolList,function(t){return i("el-option",{attrs:{label:t.name,value:t.id}})}))],1),i("el-form-item",{attrs:{label:"等级"}},[i("el-select",{attrs:{placeholder:"请选择等级"},on:{change:t.gradeChange},model:{value:t.ruleForm.grade_id,callback:function(e){t.$set(t.ruleForm,"grade_id",e)},expression:"ruleForm.grade_id"}},t._l(t.gradeList,function(t){return i("el-option",{attrs:{label:t.name,value:t.id}})}))],1),i("el-form-item",{attrs:{label:"成长值"}},[i("el-input",{attrs:{disabled:""},model:{value:t.ruleForm.growth,callback:function(e){t.$set(t.ruleForm,"growth",e)},expression:"ruleForm.growth"}})],1),i("el-form-item",{attrs:{label:"详细描述",prop:"desc"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:2}},model:{value:t.ruleForm.description,callback:function(e){t.$set(t.ruleForm,"description",e)},expression:"ruleForm.description"}})],1)],1),i("footer",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("确 定")])],1)],1)],1)},a=[],s=(i("cadf"),i("551c"),i("097d"),{data:function(){return{classList:[],classId:"",studentList:[],studentId:"",tableData:[],multipleSelection:[],pageSize:10,pageNum:1,total:1,dialogVisible:!1,dialogName:"",schoolList:[],gradeList:[],ruleForm:{student_id:"",title:"",archive_date:"",dimensionality_school_id:"",grade_id:"",growth:"",description:""},rules:{title:[{required:!0,message:"标题不能为空",trigger:"blur"}]}}},created:function(){var t=this;this.$ajax.post("/archives/getClassInfoList").then(function(e){t.classList=e.data.data}),this.getTableData()},methods:{classChange:function(){var t=this;this.studentList=[],this.studentId="",this.$ajax.post("/archives/getStudentInfoList",{classId:this.classId}).then(function(e){t.studentList=e.data.data})},getTableData:function(){var t=this;this.$ajax.post("/archives/getArchivesPage",{studentId:this.studentId}).then(function(e){t.total=e.data.data.records,t.tableData=e.data.data.rows})},getSchoolList:function(){var t=this;this.$ajax.post("/archives/getSchoolDimensionalityList").then(function(e){t.schoolList=e.data.data})},schoolChange:function(){var t=this;this.gradeList=[],this.ruleForm.grade_id="",this.$ajax.post("/archives/getGrowth ",{dimensionality_school_id:this.ruleForm.dimensionality_school_id}).then(function(e){t.ruleForm.growth=e.data.data.growth}),this.$ajax.post("/archives/getGradeList",{dimensionality_school_id:this.ruleForm.dimensionality_school_id}).then(function(e){t.gradeList=e.data.data})},gradeChange:function(){var t=this;this.$ajax.post("/archives/getGrowth ",{grade_id:this.ruleForm.grade_id}).then(function(e){t.ruleForm.growth=e.data.data.growth})},clearForm:function(){this.ruleForm.student_id="",this.ruleForm.title="",this.ruleForm.archive_date="",this.ruleForm.dimensionality_school_id="",this.ruleForm.grade_id="",this.ruleForm.growth="",this.ruleForm.description=""},add:function(){""!==this.studentId?(this.clearForm(),this.ruleForm.student_id=this.studentId,this.dialogVisible=!0,this.dialogName="添加",this.getSchoolList()):1===this.multipleSelection.length?(this.clearForm(),this.ruleForm.student_id=this.multipleSelection[0].student_id,this.dialogVisible=!0,this.dialogName="添加",this.getSchoolList()):this.$message.warning("请选择学生")},editor:function(){0===this.multipleSelection.length?this.$message.warning("请选择数据"):this.multipleSelection.length>1?this.$message.warning("只能选择一项编辑"):(this.dialogVisible=!0,this.dialogName="编辑",this.ruleForm=this.multipleSelection[0])},submitForm:function(t){var e=this,i="添加"===this.dialogName?"/archives/add":"/archives/update";this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$ajax.post(i,e.ruleForm).then(function(t){e.handleCurrentChange(1),e.dialogVisible=!1,e.$message.success(t.data.errmsg)})})},del:function(){var t=this;if(0===this.multipleSelection.length)this.$message.warning("请选择数据");else{for(var e=[],i=0;i<this.multipleSelection.length;i++)e.push(this.multipleSelection[i].id);console.log(e),this.$ajax.post("/archives/remove",{id:e}).then(function(e){t.handleCurrentChange(1),t.$message.success(e.data.errmsg)})}},startOrClose:function(t){var e=this;if(0===this.multipleSelection.length)this.$message.warning("请选择数据");else{for(var i=[],l=0;l<this.multipleSelection.length;l++)i.push(this.multipleSelection[l].id);this.$ajax.post("/dimensionalitySchool/toUpdateStatus",{dimensionalitySchoolIds:i,status:t}).then(function(t){e.handleCurrentChange(1),e.$message.success(t.data.errmsg)})}},handleSelectionChange:function(t){console.log(t),this.multipleSelection=t},handleCurrentChange:function(t){this.pageNum=t,this.getTableData()}}}),o=s,r=(i("13bf"),i("2877")),n=Object(r["a"])(o,l,a,!1,null,null,null);n.options.__file="table.vue";e["default"]=n.exports},9234:function(t,e,i){}}]);
//# sourceMappingURL=chunk-2d841c91.a693602e.js.map