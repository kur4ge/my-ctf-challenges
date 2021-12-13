<template>
  <div>
    <b-navbar variant="info">
      <b-container>
        <router-link to="/"><b-navbar-brand>🥰</b-navbar-brand></router-link>
        <b-navbar-nav class="ml-auto nav-toolbar">
          <b-navbar-brand v-if="this.exp == 0"
            ><router-link to="/login">Login</router-link> /
            <router-link to="/register">Register</router-link></b-navbar-brand
          >
          <b-navbar-brand v-else
            >Hi, {{ username }}!
            <router-link to="/editor">Post Article</router-link></b-navbar-brand
          >
          <b-nav-item v-b-modal="'modal-help'">
            <b-icon-question-circle
              title="帮助"
              class="nav-icon"
            ></b-icon-question-circle>
          </b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
    <b-modal id="modal-help" title="帮助" ok-only size="lg">
      <p>
        做了个小网站来存放大家的小作文，主要来自B站评论区、S1、A吧(<del>事实上基本变成了S1-A综小作文收集站</del>)，没什么标准，一般看到就会偷进来。
      </p>
      <p>
        如果你也有想分享的作文，欢迎大家使用*********@outlook.com投稿和联系，如果不愿意您的作品被收录也可以联系我删除。
      </p>
      <hr />
      <h5>使用方法</h5>
      <ul>
        <li>现在可以直接复制某篇小作文的链接啦</li>
        <li>
          上方可以选择“标题”，“作者”或“标签”，按回车搜索。其中标签搜索会返回匹配所有标签的作文
        </li>
        <li>点击小卡片上的作者或标签，也可以直接搜索</li>
        <li>想要显示全部内容，可以<b>点击搜索栏旁边的X</b></li>
        <li>
          点击小作文标题旁的
          <b-icon-file-earmark-text />
          可以直接复制全文，点击下方“点击返回”可回到主页。移动端推荐直接用浏览器的返回，比较方便
        </li>
      </ul>
    </b-modal>
  </div>
</template>

<script>
import { BIconQuestionCircle, BIconFileEarmarkText } from "bootstrap-vue";
import { getCacheUser } from "@/api/api";
export default {
  name: "TheNavBar",
  data() {
    return {
      username: "guest",
    };
  },
  components: { BIconQuestionCircle, BIconFileEarmarkText },
  created() {
    let info = getCacheUser();
    this.username = info.username;
    this.exp = info.exp;
  },
  watch: {
    $route: {
      handler() {
        let info = getCacheUser();
        this.username = info.username;
        this.exp = info.exp;
        this.$forceUpdate()
      },
      deep: true
    }
  },
};
</script>

<style scoped>
.nav-toolbar {
  display: flex;
  justify-content: flex-end;
}
</style>
