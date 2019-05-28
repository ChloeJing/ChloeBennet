<template>
  <div class="content_zhuce">
    <div class="left_zhuce">
      <div class="top_zhuce">
        <div class="top_1">
          我要开店
          <br>
          <span class="top_1_Span">
            <a href="#">开店流程点此查看,开店需完成实名认证</a>
          </span>
        </div>
        <div class="top_2"></div>
        <div class="top_3">
          <div class="top_3_1">
            <div class="top_3_1_Image">
              <img src="../assets/MY1.png">
            </div>
            <div class="top_3_1_Text">
              个人店铺
              <br>
              <span class="top_3_1_Text_T">通过实名认证的商家创建的店铺，就是个人店铺</span>
            </div>
            <button class="top_3_1_botton">创建个人店铺</button>
          </div>
          <div class="top_3_2">
            <div class="top_3_1_Image">
              <img src="../assets/MY2.png">
            </div>
            <div class="top_3_1_Text">
              企业店铺
              <br>
              <span class="top_3_1_Text_T">通过支付宝企业认证的商家创建的店铺, 就是企业店铺。</span>
            </div>
            <button class="top_3_2_botton">创建企业店铺</button><br>
            <div class="top_3_2_botton_Text">请使用<a href="#"><span class="top_3_2_botton_qiye">企业账户</span></a>登陆开店</div>
          </div>
        </div>
      </div>
      <div class="bottom_zhuce"></div>
    </div>
    <div class="right_zhuce"></div>
  </div>
</template>
<style>
.content_zhuce {
  padding: 0px;
  margin: 0px;
  width: 1696px;
  height: 98%;
  display: flex;
  flex-direction: row;
  background-color: white;
  margin: 10px;
}
.left_zhuce {
  width: 1400px;
  height: 87%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 35px;
  border: 1px solid #b6b4b4;
  border-radius: 5px;
}
.top_zhuce {
  width: 1360px;
  height: 80%;
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  color: #727272;
}
.top_1 {
  width: 500px;
  height: 12%;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  margin-top: 15px;
  margin-left: 30px;
}
.top_1_Span {
  font-size: 15px;
  margin-top: 15px;
}
.top_2 {
  width: 1200px;
  height: 18%;
  background-color: rgb(130, 5, 231);
  display: flex;
  flex-direction: row;
  margin-left: 70px;
}
.top_3 {
  width: 1200px;
  height: 70%;
  display: flex;
  flex-direction: row;
  margin-left: 70px;
}
.top_3_1 {
  width: 400px;
  height: 90%;
  margin-top: 10px;
  margin-left: 138px;
}
.top_3_2 {
  width: 400px;
  height: 90%;
  margin-top: 10px;
  margin-left: 100px;
}
.top_3_1_Image {
  width: 90px;
  height: 90px;
  border-radius: 45px;
  margin-left: 145px;
  margin-top: 30px;
}
.top_3_1_Text {
  text-align: center;
  font-size: 30px;
  margin-right: 17px;
  margin-top: 10px;
  color: black;
}
.top_3_1_Text_T {
  font-size: 15px;
}
.top_3_1_botton {
  width: 150px;
  height: 40px;
  background-color: rgb(83, 161, 250);
  border: none;
  font-size: 20px;
  color: white;
  margin-left: 120px;
  margin-top: 20px;
  box-shadow: 0 5px #999;
}
.top_3_1_botton:hover {
  background-color: rgb(42, 85, 134);
}
.top_3_1_botton:active {
  background-color: rgb(42,85,134);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.top_3_2_botton {
  width: 150px;
  height: 40px;
  background-color: rgb(83, 161, 250);
  border: none;
  font-size: 20px;
  color: white;
  margin-left: 120px;
  margin-top: 20px;
  opacity: 0.6;
  cursor: not-allowed;
}
.top_3_2_botton_Text{
  text-align: center;
  margin-top: 5px;
  margin-right: 7px;
}
.top_3_2_botton_qiye{
color: blue;
}
.top_3_1_Image img {
  width: 90px;
  height: 90px;
}
.right_zhuce {
  width: 160px;
  height: 40%;
  margin-left: 90px;
  margin-right: 50px;
  margin-top: 20px;
  border: 2px solid blue;
  border-radius: 10px;
}
</style>