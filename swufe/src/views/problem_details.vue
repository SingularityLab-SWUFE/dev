<template>
  <div class="details">
    <div id="card" class="cardbox_1">
      <div id="card_div" class=""></div>
      <div
        id="card_text"
        class="text"
        style="display: none; visibility: hidden"
      ></div>
    </div>

    <!-- 左侧内容 -->
    <div id="card-head" class="cardbox_1">
      <div id="card-head_text" class="text">
        <p><span>0001 整数反转</span></p>
      </div>
    </div>
    <div id="title" class="cardbox_1">
      <p id="title_text" class="text">题目描述</p>
    </div>
    <div id="content" class="cardbox_1">
      <el-row id="content_text" class="text">
        <!-- <el-text class="mx-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean euismod
          bibendum laoreet.Proin gravida dolor sit amet lacus accumsan et
          viverra justo commodo.Proin sodales pulvinar tempor.Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.Nam
          fermentum, nulla luctus pharetra vulputate, felis tellus mollis
          orci,sed rhoncus sapien nunc eget odio.Lorem ipsum dolor sit
          amet,consectetur adipiscing elit.Aenean euismod bibendum laoreet.Proin
          gravida dolor sit amet lacus accumsan et viverra justo commodo.Proin
          sodales pulvinar tempor.Cum sociis natoque penatibus et magnis dis
        </el-text> -->

        <!-- 绑定数据 -->
        <template  v-slot="scope">
          {{ scope.row.description }}
        </template>
      </el-row>
    </div>
    <div id="title1" class="cardbox_1">
      <p id="title_text" class="text">输入</p>
    </div>
    <div id="content1" class="cardbox_1">
      <el-row id="content_text" class="text">
        <!-- <el-text class="mx-1">一个整数x</el-text> -->
        <template  v-slot="scope">
          {{ scope.row.input }}
        </template>
      </el-row>
    </div>
    <div id="title2" class="cardbox_1">
      <p id="title_text" class="text">输出</p>
    </div>
    <div id="content2" class="cardbox_1">
      <el-row id="content_text" class="text">
        <!-- <el-text class="mx-1">x反转后的结果</el-text> -->
        <template  v-slot="scope">
          {{ scope.row.output }}
        </template>
      </el-row>
    </div>
    <div id="sample1" class="cardbox_1">
      <p id="title_text" class="text">输入样例</p>
    </div>
    <div id="samplecontent1" class="cardbox_1">
      <el-row id="content_text" class="text">
        <!-- <el-text class="mx-1">x=123</el-text> -->
        <template  v-slot="scope">
          {{ scope.row.samples }}
        </template>
      </el-row>
    </div>
    <div id="sample2" class="cardbox_1">
      <p id="title_text" class="text">输出样例</p>
    </div>
    <div id="samplecontent2" class="cardbox_1">
      <p id="content_text" class="text">
        <el-text class="mx-1">321</el-text>
      </p>
    </div>
    <div id="title3" class="cardbox_1">
      <p id="title_text" class="text">提示</p>
    </div>
    <div id="content3" class="cardbox_1">
      <p id="content_text" class="text">
        <el-text class="mx-1"
          >给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
          如果反转后整数超过 32 位的有符号整数的范围，就返回 0。</el-text
        >
      </p>
    </div>
    <!-- 右侧内容 -->
    <div id="codearea" class="cardbox_1">
      <div id="codearea_div" class=""></div>
      <div
        id="codearea_text"
        class="text"
        style="display: none; visibility: hidden"
      ></div>
    </div>
    <div id="language" class="cardbox_1 droplist">
      <el-select v-model="value" class="m-2" placeholder="语言">
        <el-option label="C" value="C"></el-option>
        <el-option label="C++" value="C++"></el-option>
        <el-option label="Python" value="Python"></el-option>
        <el-option label="Java" value="Java"></el-option>
      </el-select>
    </div>
    <div id="fileupload" class="cardbox_1 text_field">
      <div id="fileupload_div" class=""></div>
      <input
        id="fileupload_input"
        type="file"
        value=""
        class="fileupload_input"
      />
    </div>
    <div id="enlargement" class="cardbox_1 img" style="cursor: pointer">
      <img
        id="enlargement_img"
        class="img"
        src="@/assets/img/题目/全屏.svg"
        tabindex="0"
      />
      <div
        id="enlargement_text"
        class="text"
        style="display: none; visibility: hidden"
      ></div>
    </div>
    <div
      id="code"
      class="cardbox_1"
      data-left="565"
      data-top="220"
      data-width="394"
      data-height="531"
      layer-opacity="1"
    >
      <div id="code1" class="cardbox_1 box" style="cursor: pointer">
        <div id="code1" class="" tabindex="0"></div>
        <div
          id="code1_text"
          class="text"
          style="display: none; visibility: hidden"
        ></div>
      </div>
      <div id="textarea" class="cardbox_1 text_area">
        <div id="textarea_div" class=""></div>
        <el-input
          v-model="textarea"
          :rows="22"
          type="textarea"
          placeholder="write here."
        />
      </div>
    </div>
    <div
      id="submit"
      class="cardbox_1"
      data-label="提交按钮"
      tabindex="0"
      style="cursor: pointer"
    >
      <div
        id="submit_state0"
        class="panel_state"
        data-label="已登录"
        style="display: none; visibility: hidden; position: absolute"
      >
        <div id="submit_state0_content" class="panel_state_content">
          <div id="submit1" class="cardbox_1 box_1">
            <div id="submit1_div" class=""></div>
            <div id="submit1_text" class="text">
              <p>提交</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="submit_state1"
        class="panel_state"
        data-label="未登录"
        style="visibility: inherit"
      >
        <div id="submit_state1_content" class="panel_state_content">
          <div id="submit2" class="cardbox_1 box_1">
            <div id="submit2_div" class=""></div>
            <div id="submit2_text" class="text">
              <p>登录后提交</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderNav from "@/components/headerNav.vue";
import { he } from "element-plus/es/locale";
import { ref } from "vue";
import {useStore} from "vuex";


export default {
  name: "ProblemDetails",
  components: {HeaderNav},

  data() {
    return {
    };
  },
  computed: {
    // 题目描述
    problem_desc(){
      if(typeof this.$store.getters.problemData.description !== 'undefined'){
        return this.$store.getters.problemData.description}
      return ''
    },
    
  },
  methods: {
    // 触发数据获取动作
    mounted() {
    const store = useStore()
    // 触发数据获取动作
    store.dispatch('problemSet/useProblemData', this.problemID)
  },
  },
  //实例创建之前钩子，设置body标签的属性style
  beforeCreate() {
    this.$nextTick(() => {
      document.body.setAttribute(
        "style",
        "background:rgba(242, 242, 242, 0.5)"
      );
    });
  },
  //实例销毁之前钩子，删除body标签的属性style
  beforeUnmount() {
    document.body.removeAttribute("style");
  },
};
</script>

<style>
body {
  margin: 0px;
  background-image: none;
  position: relative;
  left: 0px;
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
#card {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 50px;
  width: 1024px;
  height: 945px;
  display: flex;
}
.cardbox_1 {
  font-family: "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  letter-spacing: normal;
  color: #333333;
  vertical-align: none;
  text-align: center;
  line-height: normal;
  text-transform: none;
}
#card_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1024px;
  height: 945px;
  background: inherit;
  background-color: rgba(242, 242, 242, 1);
  border: none;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
div {
  display: block;
}
#card .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#card_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#card-head {
  border-width: 0px;
  position: absolute;
  left: 48px;
  top: 55px;
  width: 500px;
  height: 95px;
  display: flex;
  font-family: "Arial Black", "Arial Normal", "Arial", sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 30px;
  letter-spacing: 1px;
  text-align: left;
}
#card-head .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#card-head_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
}
#title {
  border-width: 0px;
  position: absolute;
  left: 50px;
  top: 150px;
  width: 200px;
  height: 50px;
  display: flex;
  font-size: 18px;
  letter-spacing: 2px;
  color: #0071bc;
  text-align: left;
}
#title .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#title_text {
  height: 50px;
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
}
#content {
  border-width: 0px;
  position: absolute;
  left: 50px;
  top: 170px;
  width: 462px;
  height: 200px;
  display: flex;
  text-align: left;
}
#content .text {
  position: absolute;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#content_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
}
#title1 {
  border-width: 0px;
  position: absolute;
  left: 50px;
  top: 380px;
  width: 200px;
  height: 40px;
  display: flex;
  font-size: 18px;
  letter-spacing: 2px;
  color: #0071bc;
  text-align: left;
}
#title1 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#content1 {
  border-width: 0px;
  position: absolute;
  left: 50px;
  top: 400px;
  width: 462px;
  height: 100px;
  display: flex;
  text-align: left;
}
#content1 .text {
  position: absolute;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#title2 {
  border-width: 0px;
  position: absolute;
  left: 50px;
  top: 480px;
  width: 200px;
  height: 40px;
  display: flex;
  font-size: 18px;
  letter-spacing: 2px;
  color: #0071bc;
  text-align: left;
}
#title2 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#content2 {
  border-width: 0px;
  position: absolute;
  left: 50px;
  top: 500px;
  width: 462px;
  height: 100px;
  display: flex;
  text-align: left;
}
#content2 .text {
  position: absolute;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#sample1 {
  border-width: 0px;
  position: absolute;
  left: 50px;
  top: 580px;
  width: 150px;
  height: 40px;
  display: flex;
  font-size: 18px;
  letter-spacing: 2px;
  color: #0071bc;
  text-align: left;
}
#sample1 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#samplecontent1 {
  border-width: 0px;
  position: absolute;
  left: 50px;
  top: 600px;
  width: 200px;
  height: 50px;
  display: flex;
  text-align: left;
}
#samplecontent1 .text {
  position: absolute;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#sample2 {
  border-width: 0px;
  position: absolute;
  left: 300px;
  top: 580px;
  width: 150px;
  height: 40px;
  display: flex;
  font-size: 18px;
  letter-spacing: 2px;
  color: #0071bc;
  text-align: left;
}
#sample2 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#samplecontent2 {
  border-width: 0px;
  position: absolute;
  left: 300px;
  top: 600px;
  width: 200px;
  height: 50px;
  display: flex;
  text-align: left;
}
#samplecontent2 .text {
  position: absolute;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#title3 {
  border-width: 0px;
  position: absolute;
  left: 50px;
  top: 680px;
  width: 200px;
  height: 40px;
  display: flex;
  font-size: 18px;
  letter-spacing: 2px;
  color: #0071bc;
  text-align: left;
}
#title3 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#content3 {
  border-width: 0px;
  position: absolute;
  left: 50px;
  top: 700px;
  width: 462px;
  height: 100px;
  display: flex;
  text-align: left;
}
#content3 .text {
  position: absolute;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#codearea {
  border-width: 0px;
  position: absolute;
  left: 550px;
  top: 150px;
  width: 424px;
  height: 650px;
  display: flex;
}
#codearea_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 424px;
  height: 650px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 20px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#codearea .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#codearea_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#language {
  border-width: 0px;
  position: absolute;
  left: 565px;
  top: 178px;
  width: 130px;
  height: 29px;
  display: flex;
  letter-spacing: 1px;
  color: #0071bc;
}
.droplist {
  color: #000000;
  text-align: left;
}
#fileupload {
  border-width: 0px;
  position: absolute;
  left: 715px;
  top: 178px;
  width: 193px;
  height: 29px;
  display: flex;
  letter-spacing: 1px;
  color: #0071bc;
}
.text_field {
  color: #000000;
  text-align: left;
}
#fileupload_input {
  position: absolute;
  left: 0px;
  top: 0.7px;
  width: 193px;
  height: 29px;
  padding: 2px 2px 2px 2px;
  font-family: "Arial Normal", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  letter-spacing: 1px;
  color: #0071bc;
  vertical-align: none;
  text-align: left;
  text-transform: none;
  background-color: transparent;
  border-color: transparent;
}
#fileupload_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: -0.5px;
  width: 193px;
  height: 31px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 113, 188, 1);
  border-radius: 3px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  letter-spacing: 1px;
  color: #0071bc;
}
#enlargement {
  border-width: 0px;
  position: absolute;
  left: 934px;
  top: 180px;
  width: 25px;
  height: 25px;
  display: flex;
}
#enlargement_img {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 25px;
  height: 25px;
}
#enlargement .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#enlargement_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#code {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 0px;
  height: 0px;
}
#code1 {
  border-width: 0px;
  position: absolute;
  left: 565px;
  top: 220px;
  width: 394px;
  height: 500px;
  display: flex;
}
#code1 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#code1_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#code1_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 394px;
  height: 531px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#textarea {
  border-width: 0px;
  position: absolute;
  left: 565px;
  top: 230px;
  width: 394px;
  height: 499px;
  display: flex;
  letter-spacing: 0.5px;
}
#textarea_div {
  border-width: 0px;
  position: absolute;
  left: -1px;
  top: -1px;
  width: 394px;
  height: 472px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  letter-spacing: 0.5px;
}
#submit {
  border-width: 0px;
  position: absolute;
  left: 859px;
  top: 720px;
  width: 100px;
  height: 30px;
}
#submit_state0 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100px;
  height: 30px;
  -ms-overflow-x: hidden;
  overflow-x: hidden;
  -ms-overflow-y: hidden;
  overflow-y: hidden;
  background-image: none;
  border: none;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#submit_state0_content {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1px;
  height: 1px;
}
#submit1 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100px;
  height: 30px;
  display: flex;
  letter-spacing: 1px;
  color: #ffffff;
}
#submit1_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100px;
  height: 30px;
  background: inherit;
  background-color: rgba(0, 0, 0, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
  border-radius: 15px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  letter-spacing: 1px;
  color: #ffffff;
}
#submit1 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#submit1_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
}
#submit_state1 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100px;
  height: 30px;
  -ms-overflow-x: hidden;
  overflow-x: hidden;
  -ms-overflow-y: hidden;
  overflow-y: hidden;
  background-image: none;
  border: none;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  visibility: hidden;
}
#submit_state1_content {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1px;
  height: 1px;
}
#submit2 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100px;
  height: 30px;
  display: flex;
  letter-spacing: 1px;
  color: #ffffff;
}
#submit2_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100px;
  height: 30px;
  background: inherit;
  background-color: rgba(0, 0, 0, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
  border-radius: 15px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  letter-spacing: 1px;
  color: #ffffff;
}
#submit2 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#submit2_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
}
</style>