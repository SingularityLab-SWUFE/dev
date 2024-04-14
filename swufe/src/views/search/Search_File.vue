<template>
  <div class="search">
    <div id="card" class="cardbox_1 box_1">
      <div id="card_div" class=""></div>
      <div
        id="card_text"
        class="text"
        style="display: none; visibility: hidden"
      ></div>
    </div>
    <div id="pic1" class="cardbox_1 _图片_" style="cursor: pointer">
      <img
        id="pic1_img"
        class="img"
        src="https://files.axshare.com/gsc/3B08SE/74/05/f9/7405f939127249989139bed9df5dc870/images/搜索/u4.svg?pageId=fd4e66c1-7758-4091-abd9-d4f917f3a4dd"
        tabindex="0"
      />
    </div>
    <div
      id="search"
      class="cardbox_1"
      data-left="93"
      data-top="20"
      data-width="787"
      data-height="60"
      layer-opacity="1"
    >
      <div id="search-1" class="cardbox_1 box_1">
        <div id="search-1_div" class=""></div>
        <div
          id="search-1_text"
          class="text"
          style="display: none; visibility: hidden"
        ></div>
      </div>
      <div id="search-2" class="cardbox_1 text_field" data-label="搜索框">
        <div id="search-2_div" class=""></div>
        <input
          id="search-2_input"
          type="text"
          class="search-2_input"
          placeholder="请输入搜索内容"
        />
      </div>
    </div>
    <div id="pic2" class="cardbox_1 _图片_">
      <img id="pic2_img" class="img" src="@\assets\img\搜索\搜索-搜索框.svg" />
      <div
        id="pic2_text"
        class="text"
        style="display: none; visibility: hidden"
      ></div>
    </div>
    <div id="pic3" class="cardbox_1 _图片_" style="cursor: pointer">
      <img
        id="pic3_img"
        class="img"
        src="@\assets\img\搜索\取消-搜索框.svg"
        tabindex="0"
      />
      <div
        id="pic3_text"
        class="text"
        style="display: none; visibility: hidden"
      ></div>
    </div>

    <!-- 历史搜索 -->
    <div
      id="first-his"
      class="cardbox_1"
      data-left="0"
      data-top="100"
      data-width="1024"
      data-height="51"
      layer-opacity="1"
      style="cursor: pointer"
    >
      <div id="hisbox1" class="cardbox_1 box_1">
        <div id="hisbox1_div" tabindex="0"></div>
        <div
          id="hisbox1_text"
          class="text"
          style="display: none; visibility: hidden"
        ></div>
      </div>
      <div id="hisline1" class="cardbox_1 line">
        <img id="hisline1_img" class="img" src="" />
        <div
          id="hisline1_text"
          class="text"
          style="display: none; visibility: hidden"
        ></div>
      </div>
      <div id="hispic1" class="cardbox_1 _图片_">
        <img
          id="hispic1_img"
          class="img"
          src="@\assets\img\搜索\历史搜索.svg"
        />
        <div
          id="hispic1_text"
          class="text"
          style="display: none; visibility: hidden"
        ></div>
      </div>
      <div id="hisword1" class="cardbox_1 box_1">
        <div id="hisword1_div" class=""></div>
        <div id="hisword1_text" class="text" style="visibility: inherit">
          <span>背包问题</span>
        </div>
      </div>
    </div>
    <div
      id="second-his"
      class="cardbox_1"
      data-left="0"
      data-top="100"
      data-width="1024"
      data-height="51"
      layer-opacity="1"
      style="cursor: pointer"
    >
      <div id="hisbox2" class="cardbox_1 box_1">
        <div id="hisbox2_div" tabindex="0"></div>
        <div
          id="hisbox2_text"
          class="text"
          style="display: none; visibility: hidden"
        ></div>
      </div>
      <div id="hisline2" class="cardbox_1 line">
        <img id="hisline2_img" class="img" src="" />
        <div
          id="hisline2_text"
          class="text"
          style="display: none; visibility: hidden"
        ></div>
      </div>
      <div id="hispic2" class="cardbox_1 _图片_">
        <img
          id="hispic2_img"
          class="img"
          src="@\assets\img\搜索\历史搜索.svg"
        />
        <div
          id="hispic2_text"
          class="text"
          style="display: none; visibility: hidden"
        ></div>
      </div>
      <div id="hisword2" class="cardbox_1 box_1">
        <div id="hisword2_div" class=""></div>
        <div id="hisword2_text" class="text" style="visibility: inherit">
          <span>二叉树</span>
        </div>
      </div>
    </div>
    <div
      id="third-his"
      class="cardbox_1"
      data-left="0"
      data-top="100"
      data-width="1024"
      data-height="51"
      layer-opacity="1"
      style="cursor: pointer"
    >
      <div id="hisbox3" class="cardbox_1 box_1">
        <div id="hisbox3_div" tabindex="0"></div>
        <div
          id="hisbox3_text"
          class="text"
          style="display: none; visibility: hidden"
        ></div>
      </div>
      <div id="hisline3" class="cardbox_1 line">
        <img
          id="hisline3_img"
          class="img"
          src=""
        />
        <div
          id="hisline3_text"
          class="text"
          style="display: none; visibility: hidden"
        ></div>
      </div>
      <div id="hispic3" class="cardbox_1 _图片_">
        <img
          id="hispic3_img"
          class="img"
          src="@\assets\img\搜索\历史搜索.svg"
          />
        />
        <div
          id="hispic3_text"
          class="text"
          style="display: none; visibility: hidden"
        ></div>
      </div>
      <div id="hisword3" class="cardbox_1 box_1">
        <div id="hisword3_div" class=""></div>
        <div id="hisword3_text" class="text" style="visibility: inherit">
          <span>图论</span>
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
#card_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1024px;
  height: 720px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
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
#pic1 {
  border-width: 0px;
  position: absolute;
  left: 37px;
  top: 37px;
  width: 26px;
  height: 26px;
  display: flex;
}
#search {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 0px;
  height: 0px;
}
#search-1 {
  border-width: 0px;
  position: absolute;
  left: 93px;
  top: 20px;
  width: 787px;
  height: 60px;
  display: flex;
}
#search-1_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 787px;
  height: 60px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(85, 85, 85, 1);
  border-radius: 30px;
}
#search-1 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#search-1_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#search-2 {
  border-width: 0px;
  position: absolute;
  left: 123px;
  top: 22px;
  width: 728px;
  height: 56px;
  display: flex;
  font-size: 18px;
}
.text_field {
  color: #000000;
  text-align: left;
}
#search-2_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 728px;
  height: 56px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 0px;
  font-size: 18px;
}
#search-2_input {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 728px;
  height: 56px;
  padding: 2px 2px 2px 2px;
  font-family: "Arial Normal", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  letter-spacing: normal;
  color: #000000;
  vertical-align: none;
  text-align: left;
  text-transform: none;
  background-color: transparent;
  border-color: transparent;
}
input {
  outline: none;
  padding: 1px 0px 1px 0px;
  box-sizing: border-box;
}
input::placeholder {
  font-size: 15px;
  color: rgb(153, 153, 153);
  text-align: center;
}
input:focus::placeholder {
  opacity: 0;
}

#pic2 {
  border-width: 0px;
  position: absolute;
  left: 910px;
  top: 37px;
  width: 26px;
  height: 26px;
  display: flex;
}
#pic2_img {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 26px;
  height: 26px;
}
#pic2 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#pic2_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#pic3 {
  border-width: 0px;
  position: absolute;
  left: 966px;
  top: 37px;
  width: 26px;
  height: 26px;
  display: flex;
}
#pic3_img {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 26px;
  height: 26px;
}
#pic3 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#pic3_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#first-his {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 0px;
  height: 0px;
}
#hisbox1 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 100px;
  width: 1024px;
  height: 50px;
  display: flex;
}
#hisbox1_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1024px;
  height: 50px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#hisbox1 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#hisbox1_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#hisline1 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 150px;
  width: 1024px;
  height: 1px;
  display: flex;
}
#hisline1_img {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1025px;
  height: 2px;
}
#hisline1 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#hisline1_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#hispic1 {
  border-width: 0px;
  position: absolute;
  left: 37px;
  top: 114px;
  width: 22px;
  height: 22px;
  display: flex;
}
#hispic1_img {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 22px;
  height: 22px;
}
#hispic1 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#hispic1_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#hisword1 {
  border-width: 0px;
  position: absolute;
  left: 93px;
  top: 110px;
  width: 931px;
  height: 30px;
  display: flex;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 1px;
  text-align: left;
}
#hisword1_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 931px;
  height: 30px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 1px;
  text-align: left;
}
#hisword1 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#hisword1_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#second-his {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 0px;
  height: 0px;
}
#hisbox2 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 151px;
  width: 1024px;
  height: 50px;
  display: flex;
}
#hisbox2_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1024px;
  height: 50px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#hisbox2 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#hisbox2_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#hisline2 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 201px;
  width: 1024px;
  height: 1px;
  display: flex;
}
#hisline2_img {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1025px;
  height: 2px;
}
#hisline2 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#hisline2_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#hispic2 {
  border-width: 0px;
  position: absolute;
  left: 37px;
  top: 165px;
  width: 22px;
  height: 22px;
  display: flex;
}
#hispic2_img {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 22px;
  height: 22px;
}
#hispic2 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#hispic2_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#hisword2 {
  border-width: 0px;
  position: absolute;
  left: 93px;
  top: 161px;
  width: 931px;
  height: 30px;
  display: flex;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 1px;
  text-align: left;
}
#hisword2_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 931px;
  height: 30px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 0px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 1px;
  text-align: left;
}
#hisword2 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#hisword2_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#third-his {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 0px;
  height: 0px;
}
#hisbox3 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 202px;
  width: 1024px;
  height: 50px;
  display: flex;
}
#hisbox3_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1024px;
  height: 50px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#hisbox3 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#hisbox3_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#hisline3 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 252px;
  width: 1024px;
  height: 1px;
  display: flex;
}
#hisline3_img {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1025px;
  height: 2px;
}
#hisline3 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#hisline3_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#hispic3 {
  border-width: 0px;
  position: absolute;
  left: 37px;
  top: 216px;
  width: 22px;
  height: 22px;
  display: flex;
}
#hispic3_img {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 22px;
  height: 22px;
}
#hispic3 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#hispic3_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
#hisword3 {
  border-width: 0px;
  position: absolute;
  left: 93px;
  top: 212px;
  width: 931px;
  height: 30px;
  display: flex;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 1px;
  text-align: left;
}
#hisword3_div {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 931px;
  height: 30px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 0px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 1px;
  text-align: left;
}
#hisword3 .text {
  position: absolute;
  align-self: center;
  padding: 2px 2px 2px 2px;
  box-sizing: border-box;
  width: 100%;
}
#hisword3_text {
  border-width: 0px;
  word-wrap: break-word;
  text-transform: none;
  visibility: hidden;
}
</style>