<template>
    <el-card class="page">
        <header slot="header">
            评价维度
        </header>
        <el-table class="table" :data="tableData" border stripe>
            <el-table-column align="center" prop="bh" label="编号" min-width="40" sortable></el-table-column>
            <el-table-column align="center" prop="orderOn" label="排序" min-width="40" sortable></el-table-column>
            <el-table-column align="center" prop="name" label="名称" min-width="40"></el-table-column>
            <el-table-column prop="ms" label="维度描述"></el-table-column>
            <el-table-column prop="ckbz" label="参考标准"></el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" size="mini"
                               @click="handleEdit(scope.row)">编辑
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :visible.sync="dialogVisible">
            <header slot="title">编辑</header>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                <!--<el-form-item label="维度名称" prop="name">-->
                <!--<el-input v-model="ruleForm.name"></el-input>-->
                <!--</el-form-item>-->
                <el-form-item label="排序">
                    <el-input-number v-model="ruleForm.orderOn" :min="1"></el-input-number>
                </el-form-item>
                <el-form-item label="维度描述" prop="ms">
                    <el-input type="textarea" :autosize="{ minRows: 2}" v-model="ruleForm.ms"></el-input>
                </el-form-item>
                <el-form-item label="参考标准">
                    <el-input type="textarea" :autosize="{ minRows: 2}" v-model="ruleForm.ckbz"></el-input>
                </el-form-item>
            </el-form>
            <footer slot="footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
            </footer>
        </el-dialog>
    </el-card>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],//国家维度列表
        dialogVisible: false,//弹框是否显示
        ruleForm: {
          bh: '',//编号
          id: '',
          orderOn: 1,//排序
          ms: '',//维度描述
          ckbz: '',//参考
        },
        rules: {
          sort: [
            {required: true, message: '排序不能为空', trigger: 'change'},
          ],
          ms: [
            {required: true, message: '请填写维度描述', trigger: 'blur'},
          ]
        }
      }
    },
    created() {
        this.getTable()
    },
    methods: {
      //表格数据初始化
      getTable() {
        this.$ajax.post('/api/dimensionality/main')
            .then(res => {
              this.tableData = res.data.data;
            });
      },
      //操作-编辑
      handleEdit(row) {
        console.log(row)
        this.dialogVisible = true;
        this.ruleForm = {...row};
      },
      //提交
      submitForm(formName) {
        console.log(this.ruleForm);
        let that = this
        if (!this.ruleForm.orderOn) {
          this.$message.warning('排序不能为空')
          return
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$ajax.post('/api/dimensionality/update', this.ruleForm)
                .then(res => {
                  this.$message.success(res.data.errmsg);
                  this.dialogVisible = false;
                  //刷新列表
                  that.getTable()
                })
          }
          else {
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss">
    .el-card {
        @extend %width;
        .search {
            background: #f2f2f2;
            padding-top: 20px;
            margin-bottom: 20px;
        }
        .btn {
            margin-bottom: 15px;
            .el-button-group {
                margin-right: 10px;
            }
        }
        .table {
            .cell {
                white-space: pre-line;
            }
        }
        .pagination {
            margin-top: 10px;
        }
    }
</style>