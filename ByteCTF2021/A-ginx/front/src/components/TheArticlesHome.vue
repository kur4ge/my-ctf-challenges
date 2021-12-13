<template xmlns:v="http://www.w3.org/1999/xhtml">
  <b-container>
    <b-row>
      <b-col cols="4" md="2">
        <b-form-select v-model="searchSelected" :options="searchOptions"></b-form-select>
      </b-col>
      <b-col cols="8" md="10">
        <div style="display: flex">
          <b-form-input v-on:keyup.enter="searchArticles" v-model="kw" placeholder="搜索小作文,按回车确定"></b-form-input>
          <p class="click-btn h3" style="align-self: center" @click="clearQuery">
            <b-icon-x name="clearBtn"></b-icon-x>
          </p>
        </div>
      </b-col>

    </b-row>
    <b-row>
      <b-col>
        <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
        <b-form-tags
            class="tags-block"
            v-model="query.tags"
            size="lg"
            add-on-change
            no-outer-focus
        >
          <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
            <div>
              <b-form-select
                  v-bind="inputAttrs"
                  v-on="inputHandlers"
                  :disabled="disabled || availableTagOptions.length === 0"
                  :options="availableTagOptions"
              >
                <template #first>
                  <!-- This is required to prevent bugs with Safari -->
                  <option disabled value="">选择标签 (在下一次搜索生效)</option>
                </template>
              </b-form-select>

            </div>
            <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
              <li v-for="tag in tags" :key="tag" class="list-inline-item">
                <b-form-tag
                    class="tags-item"
                    @remove="removeTag(tag)"
                    :title="tag"
                    :disabled="disabled"
                >{{ tag }}
                </b-form-tag>
              </li>
            </ul>
          </template>
        </b-form-tags>
      </b-col>
    </b-row>
    <hr/>
    <b-row cols-xl="4" cols-lg="3" cols-md="2" cols-sm="1">
      <div v-for="item in articles" :key="item._id">
        <b-col>
          <ArticleCard class="article-card"
                       @handleAuthorClick="handleAuthorClick"
                       @handleTagClick="handleTagClick"
                       v-bind="item"
                       :key="item._id"></ArticleCard>
        </b-col>
      </div>
    </b-row>
    <h3 v-if="articles.length==0">没有符合条件的结果</h3>
    <hr>
    <div>
      <b-overlay :show="isLoading" rounded>
        <b-button v-if="hasNext" :disabled="isLoading" size="lg" block variant="outline-secondary"
                  @click="fetchMoreArticles">点击加载更多
        </b-button>
      </b-overlay>
    </div>

  </b-container>

</template>

<script>
import ArticleCard from './ArticleCard.vue'
import {queryArticles, fetchTags} from "@/api/api";
import {QueryParams} from "../store.js";
import {BIconX} from 'bootstrap-vue'

export default {
  name: 'TheArticleHome',
  components: {
    ArticleCard, BIconX
  },
  data() {
    return {
      articles: [],
      hasNext: true,
      kw: "",
      query: QueryParams.state,
      pageNum: 0,
      pageSize: 36,
      isLoading: true,
      tagOptions: [],
      // search
      searchSelected: null,
      searchOptions: [
        {value: 'title', text: '标题'},
        {value: 'author', text: '作者'}
      ]
    }
  },
  methods: {
    fetchMoreArticles: function () {
      if (this.hasNext) {
        this.isLoading = true
        // let params = {pageNum: this.pageNum, pageSize: this.pageSize}
        // params = Object.assign(params, this.query)// 合并查询参数
        // params.tags = params.tags.toString()
        let query = {} // Observer -> object
        
        Object.keys(this.query).filter((k)=>this.query[k]?this.query[k].length:0).map((k)=>query[k]=this.query[k])
        let params = {pageNum: this.pageNum, pageSize: this.pageSize, query: JSON.stringify(query)}
        
        queryArticles(params).then(res => {
          let data = res.data
          if (data.status == 0) {
            this.hasNext = data.count == this.pageSize//是否还有更多
            if (this.pageNum == 0) {
              // 从头搜索
              this.articles = data.articles
            } else {
              // 获取更多
              this.articles.push.apply(this.articles, data.articles)
            }
            this.pageNum++
          } else {
            alert(data.message)
          }
        }).finally(() => {
          this.isLoading = false
        })
      }
    },
    searchArticles: function () {
      // 重新开始搜索
      this.pageNum = 0
      this.hasNext = true
      let w = this.kw.trim()
      if (w) {
        switch (this.searchSelected) {
          case 'title':
            QueryParams.setTitle(w)
            QueryParams.setAuthor(null)
            break
          case 'author':
            QueryParams.setAuthor(w)
            QueryParams.setTitle(null)
            break
        }
      }
      this.fetchMoreArticles()
    },

    fetchTagItems: function () {
      fetchTags().then(res => {
        let data = res.data
        if (data.status == 0) {
          this.tagOptions = data.tags.map((item) => {
            return item.name
          })
        } else {
          alert(data.message)
        }
      })
    },
    /**
     * 子组件点击tag，触发重新搜索
     * @param tag
     */
    handleTagClick: function (tag) {
      QueryParams.addTag(tag)
      document.body.scrollIntoView() // 滚到顶端
      // this.searchArticles()
    },
    /**
     * 子组件点击author，触发重新搜索
     * @param author
     */
    handleAuthorClick: function (author) {
      this.kw = author
      this.searchSelected = 'author'
      document.body.scrollIntoView() // 滚到顶端
      this.searchArticles()
    },
    /**
     * 点击添加tag
     * */
    handleTagOptionClick: function (tag) {
      QueryParams.addTag(tag)
    },
    clearQuery: function () {
      this.kw = ''
      QueryParams.clear()
      this.searchArticles()
    },
    changeQuery: function (mode, kw) {
      this.kw = kw
      this.searchSelected = mode
    }

  },
  computed: {
    availableTagOptions: function () {
      // 过滤已选择的tag
      return this.tagOptions.filter(opt => this.query.tags.indexOf(opt) == -1)
    }
  },
  mounted() {
    this.searchSelected = this.searchOptions[0].value
    // // 根据url查询参数筛选
    // let q = this.$route.query
    // if (q.author) {
    //   this.searchSelected='author'
    //   this.kw=q.author
    // }else if (q.title){
    //   this.searchSelected='title'
    //   this.kw=q.title
    // }
    this.fetchTagItems()
    this.searchArticles()
  },
  watch: {
    $route: {
      handler(to) {
        if (to.path == "/articles" ) {
          this.fetchTagItems()
          this.searchArticles()
        }
      },
      deep: true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-card {
  padding-top: 1em;
}

.load-btn {
  text-align: center;
  width: max-content;
}

.flip-list-move {
  transition: transform 1s;
}

.tags-block {
  margin-top: 0.5em;
  border: none;
  padding: 0px;
}

.tags-item {
  margin-top: 0.5em;
}
</style>
