<template>
  <div>
    <b-container>
      <h4>新增文章</h4>
      <b-form-group label="标题:" label-for="title">
        <b-form-input
          type="text"
          id="title"
          v-model="title"
          placeholder="《狗·猫·鼠》"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Tags:" label-for="tags">
        <b-form-tags input-id="tags" v-model="tags"></b-form-tags>
      </b-form-group>

      <quill-editor
        ref="quill"
        v-model="content"
        :options="option"
        class="editor"
      ></quill-editor>

      <b-button v-on:click="preview" class="edit-btn" variant="info"
        >预览</b-button
      >
      <b-button
        class="edit-btn"
        variant="info"
        v-on:click="submit"
        disabled="disabled"
        >公开提交</b-button
      >
      <b-button
        class="edit-btn"
        variant="info"
        v-on:click="submitPrivate"
        :disabled="disbale"
        >偷偷提交</b-button
      >
    </b-container>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import Quill from "quill";
import { previewArticle, newArticle } from "@/api/api";

//Quill内使用style实现不用class
var DirectionAttribute = Quill.import("attributors/attribute/direction");
Quill.register(DirectionAttribute, true);
var AlignClass = Quill.import("attributors/class/align");
Quill.register(AlignClass, true);
var BackgroundClass = Quill.import("attributors/class/background");
Quill.register(BackgroundClass, true);
var ColorClass = Quill.import("attributors/class/color");
Quill.register(ColorClass, true);
var DirectionClass = Quill.import("attributors/class/direction");
Quill.register(DirectionClass, true);
var FontClass = Quill.import("attributors/class/font");
Quill.register(FontClass, true);
var SizeClass = Quill.import("attributors/class/size");
Quill.register(SizeClass, true);
var AlignStyle = Quill.import("attributors/style/align");
Quill.register(AlignStyle, true);
var BackgroundStyle = Quill.import("attributors/style/background");
Quill.register(BackgroundStyle, true);
var ColorStyle = Quill.import("attributors/style/color");
Quill.register(ColorStyle, true);
var DirectionStyle = Quill.import("attributors/style/direction");
Quill.register(DirectionStyle, true);
var FontStyle = Quill.import("attributors/style/font");
Quill.register(FontStyle, true);
var SizeStyle = Quill.import("attributors/style/size");
Quill.register(SizeStyle, true);
//
export default {
  name: "TheEditor",
  components: { quillEditor },
  methods: {
    preview: function () {
      previewArticle(this.title, this.content);
    },
    submit: function () {
      alert("功能还在开发中~");
    },
    submitPrivate: function () {
      this.disbale = true;
      newArticle({
        title: this.title,
        content: this.content,
        tags: this.tags,
        is_public: false,
      }).then((res) => {
        let data = res.data;
        this.disbale = false;
        if (data.status == 0) {
          this.title = "";
          this.content = "";
          this.tags = [];
          alert(data.message);
        } else {
          alert(data.message);
        }
      });
    },
  },
  data() {
    return {
      content: "",
      title: "",
      disbale: false,
      tags: [],
      option: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],
            ["link"],
            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction

            // [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],

            ["clean"],
          ], // remove formatting button]
        },
        theme: "snow",
      },
    };
  },
};
</script>

<style scoped>
.editor {
  height: 50vh;
}

.edit-btn {
  margin-top: 8vh;
  margin-left: 1vh;
}
</style>
