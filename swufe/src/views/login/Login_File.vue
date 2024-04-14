<template>
  <div class="login">
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

    <div id="pic" class="cardbox_1 _图片_">
      <img id="pic_img" class="img" src="@\assets\img\登录\登录-头像.svg" />
      <div
        id="pic_text"
        class="text"
        style="display: none; visibility: hidden"
      ></div>
    </div>

    <div
      id="nickname"
      class="cardbox_1"
      data-left="362"
      data-top="290"
      data-width="300"
      data-height="30"
      layer-opacity="1"
    >
      <div id="nickname-1" class="cardbox_1 box_1">
        <div id="nickname-1_div" class=""></div>
        <div
          id="nickname-1_text"
          class="text"
          style="display: none; visibility: hidden"
        ></div>
      </div>
      <div id="nickname-2" class="cardbox_1 text_field">
        <div id="nickname-2_div"></div>
        <input
          id="nickname-2_input"
          type="text"
          class="nickname-2_input"
          placeholder="请输入昵称"
        />
      </div>
    </div>
    <div
      id="password"
      class="cardbox_1"
      data-left="362"
      data-top="290"
      data-width="300"
      data-height="30"
      layer-opacity="1"
    >
      <div id="password-1" class="cardbox_1 box_1">
        <div id="password-1_div" class=""></div>
        <div
          id="password-1_text"
          class="text"
          style="display: none; visibility: hidden"
        ></div>
      </div>
      <div id="password-2" class="cardbox_1 text_field">
        <div id="password-2_div"></div>
        <input
          id="password-2_input"
          type="text"
          placeholder="请输入密码"
          class="password-2_input"
        />
      </div>
    </div>
    <div id="button" class="cardbox_1 box_1" style="cursor: pointer">
      <div id="button_div" tabindex="0"></div>
      <div id="button_text" class="text">
        <span>登录/注册</span>
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
  top: 0px;
  width: 1024px;
  height: 720px;
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
  height: 720px;
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
  left: 300px;
  top: 80px;
  width: 424px;
  height: 480px;
  display: flex;
}
#codearea_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 424px;
  height: 480px;
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
#pic {
  border-width: 0px;
  position: absolute;
  left: 462px;
  top: 140px;
  width: 100px;
  height: 100px;
  display: flex;
}
#pic_img {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100px;
  height: 100px;
}
#pic .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#pic_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#nickname {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 0px;
  height: 0px;
}
#nickname-1 {
  border-width: 0px;
  position: absolute;
  left: 362px;
  top: 290px;
  width: 300px;
  height: 30px;
  display: flex;
}
#nickname-1_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 300px;
  height: 30px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(127, 127, 127, 1);
  border-radius: 15px;
}
#nickname-1_div .mouseOver {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 300px;
  height: 30px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(127, 127, 127, 1);
  border-radius: 15px;
}
#nickname-1 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#nickname-1_text {
  border-width: 0px;
  word-wrap: break-word;
  visibility: hidden;
}
#nickname-2 {
  border-width: 0px;
  position: absolute;
  left: 377px;
  top: 293px;
  width: 270px;
  height: 25px;
  display: flex;
  font-size: 15px;
  letter-spacing: 1px;
}
#nickname-2_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 270px;
  height: 25px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 0px;
  font-size: 15px;
  letter-spacing: 1px;
}
#nickname-2_input {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 270px;
  height: 25px;
  padding: 2px 2px 2px 2px;
  font-family: "Arial Normal", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 1px;
  color: #000000;
  background-color: transparent;
  border-color: transparent;
  text-align: left;
}
.text_field {
  color: rgb(0, 0, 0);
  text-align: left;
}
input {
  padding: 1px 0px 1px 0px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
}
#password {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 0px;
  height: 0px;
}
#password-1 {
  border-width: 0px;
  position: absolute;
  left: 362px;
  top: 340px;
  width: 300px;
  height: 30px;
  display: flex;
}
#password-1_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 300px;
  height: 30px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(127, 127, 127, 1);
  border-radius: 15px;
}
#password-1 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#password-1_text {
  border-width: 0px;
  word-wrap: break-word;
  visibility: hidden;
}
#password-2 {
  border-width: 0px;
  position: absolute;
  left: 377px;
  top: 343px;
  width: 270px;
  height: 25px;
  display: flex;
  font-size: 15px;
  letter-spacing: 1px;
}
#password-2_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 270px;
  height: 25px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 0px;
  font-size: 15px;
  letter-spacing: 1px;
}
#password-2_input {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 270px;
  height: 25px;
  padding: 2px 2px 2px 2px;
  font-family: "Arial Normal", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 1px;
  color: #000000;
  background-color: transparent;
  border-color: transparent;
  text-align: left;
}
#button {
  border-width: 0px;
  position: absolute;
  left: 447px;
  top: 450px;
  width: 130px;
  height: 40px;
  display: flex;
  font-family: "Arial Black", "Arial Normal", "Arial", sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 1px;
}
#button_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 130px;
  height: 40px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 20px;
  font-family: "Arial Black", "Arial Normal", "Arial", sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 1px;
}
#button_div .active {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 130px;
  height: 40px;
  background: inherit;
  background-color: rgba(242, 242, 242, 1);
  border: none;
  border-radius: 20px;
  font-family: "Arial Black", "Arial Normal", "Arial", sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 1px;
}
#button .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#button_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
}
</style>