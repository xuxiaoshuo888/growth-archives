<template>
    <div id="nav">
        <div class="content">
            <router-link to="/class" class="title"><i class="fa fa-address-book-o"></i>学生成长档案</router-link>
            <el-menu class="menu"
                     :default-active="$route.path"
                     mode="horizontal"
                     background-color="#009688"
                     text-color="#fff"
                     active-text-color="#ffd04b">
                <el-menu-item index="/circle" v-if="this.student">
                    <router-link to="/circle">成长圈</router-link>
                </el-menu-item>
                <el-menu-item index="/class">
                    <router-link to="/class">我的班级</router-link>
                </el-menu-item>
                <el-menu-item index="/archives" v-if="this.student">
                    <router-link to="/archives">我的档案</router-link>
                </el-menu-item>
                <!--<el-menu-item index="/backstage/1" v-if="this.admin">-->
                    <!--<router-link to="/backstage/1">国家维度</router-link>-->
                <!--</el-menu-item>-->
                <!--<el-menu-item index="/backstage/2" v-if="this.admin">-->
                    <!--<router-link to="/backstage/2">学校维度</router-link>-->
                <!--</el-menu-item>-->
                <el-menu-item index="/backstage/3" v-if="this.headTeacher||this.admin">
                    <router-link to="/backstage/3">档案管理</router-link>
                </el-menu-item>
                <el-submenu index="/backstage/4-1" v-if="!this.student">
                    <template slot="title">系统设置</template>
                    <el-menu-item index="/backstage/4-1" v-if="this.teacher">
                        <router-link to="/backstage/4-1">过程评价</router-link>
                    </el-menu-item>
                    <el-menu-item index="/backstage/1" v-if="this.admin">
                        <router-link to="/backstage/1">评价维度</router-link>
                    </el-menu-item>
                    <el-menu-item index="/backstage/2" v-if="this.admin">
                        <router-link to="/backstage/2">评价指标</router-link>
                    </el-menu-item>
                    <el-menu-item index="/backstage/4-2" v-if="this.admin">
                        <router-link to="/backstage/4-2">评价规则</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="/backstage/5-1" v-if="!this.student">
                    <template slot="title">成长奖章</template>
                    <el-menu-item index="/backstage/5-1" v-if="this.teacher||this.admin">
                        <router-link to="/backstage/5-1">奖章授予</router-link>
                    </el-menu-item>
                    <el-menu-item index="/backstage/5-2" v-if="this.admin">
                        <router-link to="/backstage/5-2">奖章设置</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="6" v-if="this.teacher||this.admin">
                    <router-link to="/backstage/6">成长奖励</router-link>
                </el-menu-item>
                <el-menu-item index="7">
                    <template slot="title">{{navname}}</template>
                    <!--<el-menu-item index="7-1" @click="logout">注销</el-menu-item>-->
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "Navigation",
    computed: {
      role() {//用户角色
        return this.$store.state.role;
      },
      navname() {
        return this.$store.state.navname;
      },
      student() {
        return this.role.includes('SYS_STUDENT')
      },
      headTeacher() {
        return this.role.includes('SYS_BZR')
      },
      teacher() {
        return this.role.includes('SYS_BZR') || this.role.includes('SYS_TEACHER_MATH') || this.role.includes('SYS_TEACHER_CHINESE')
      },
      admin() {
        return this.role.includes('SYS_ADMIN')
      },
    },
    methods: {
      logout() {
        let login, logout;
        this.$ajax.post('/logoutApi')
            .then(res => {
              login = res.data.casLoginUrl;
              // logout = res.data.casLogoutUrl;
              sessionStorage.clear();
              this.$store.commit('deleteToken');
              window.location.href = login;
              // $.ajax({
              //   url: logout,
              //   type: "GET",
              //   dataType: "jsonp",
              //   jsonp: "callback",
              //   crossDomain: true,
              //   cache: false,
              //   success: function(data) {
              //     sessionStorage.clear();
              //     this.$store.commit('deleteToken');
              //     window.location.href=login;
              //     console.log(data)
              //   },
              //   error: function(data) {
              //     console.log(data);
              //   }
              // })
            })
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    #nav {
        background: #009688;
        margin-bottom: 15px;
        .content {
            @include flex(space-between);
            @extend %width;
            .title {
                @include flex;
                font-size: 18px;
                color: #fff;
                i {
                    margin-right: 10px;
                }
            }
            .menu {
                &.el-menu--horizontal {
                    border-bottom: none;
                }
                .el-submenu__title i {
                    color: #e6e6e6;
                }
            }
        }
    }
</style>
