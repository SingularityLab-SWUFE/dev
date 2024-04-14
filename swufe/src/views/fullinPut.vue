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

    <div id="codearea" class="cardbox_1">
      <div id="codearea_div" class=""></div>
      <div
        id="codearea_text"
        class="text"
        style="display: none; visibility: hidden"
      ></div>
    </div>
    <div id="lessen" class="cardbox_1 img" style="cursor: pointer">
      <img
        id="lessen_img"
        class="img"
        src="@\assets\img\题目\取消全屏.svg"
        tabindex="0"
      />
      <div
        id="lessen_text"
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
        <textarea
          id="textarea_input"
          class="textarea_input"
          style=""
        ></textarea>
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
  height: 900px;
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
  height: 900px;
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
#codearea {
  border-width: 0px;
  position: absolute;
  left: 70px;
  top: 75px;
  width: 924px;
  height: 680px;
  display: flex;
}
#codearea_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 924px;
  height: 680px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 20px;
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
#lessen {
  border-width: 0px;
  position: absolute;
  left: 20px;
  top: 95px;
  width: 30px;
  height: 30px;
  display: flex;
}
#lessen_img {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 30px;
  height: 30px;
}
#lessen .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#lessen_text {
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
  left: 90px;
  top: 95px;
  width: 884px;
  height: 609px;
  display: flex;
  letter-spacing: 0.5px;
}
#textarea_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 884px;
  height: 609px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  letter-spacing: 0.5px;
}
#textarea_input {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 884px;
  height: 609px;
  padding: 2px 2px 2px 2px;
  font-family: "Arial Normal", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  letter-spacing: normal;
  color: #000000;
  vertical-align: none;
  text-align: left;
  text-transform: none;
  background-color: transparent;
  border-color: transparent;
  resize: none;
  outline: none;
}
#submit {
  border-width: 0px;
  position: absolute;
  left: 824px;
  top: 700px;
  width: 150px;
  height: 36px;
}
#submit_state0 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 150px;
  height: 36px;
  -ms-overflow-x: hidden;
  overflow-x: hidden;
  -ms-overflow-y: hidden;
  overflow-y: hidden;
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
  width: 150px;
  height: 36px;
  display: flex;
  letter-spacing: 1px;
  color: #ffffff;
}
#submit1_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 150px;
  height: 36px;
  background: inherit;
  background-color: rgba(0, 0, 0, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
  border-radius: 18px;
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
  width: 150px;
  height: 36px;
  -ms-overflow-x: hidden;
  overflow-x: hidden;
  -ms-overflow-y: hidden;
  overflow-y: hidden;
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
  width: 150px;
  height: 36px;
  display: flex;
  letter-spacing: 1px;
  color: #ffffff;
}
#submit2_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 150px;
  height: 36px;
  background: inherit;
  background-color: rgba(0, 0, 0, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
  border-radius: 18px;
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