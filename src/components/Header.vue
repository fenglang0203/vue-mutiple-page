<template>
  <div id="header-wrapper">
    <div class="nav">
      <div class="nav-right">
        <div class="float-left t0"><a target="_blank" href="http://www.sxta.gov.cn/">陕西旅游政务网</a></div>
        <div class="float-left thead">
          <img style="height:22px;width:22px;border-radius: 50%;display:none" src="../../static/pic/headImg.png">
        </div>
        <div class="float-left" v-if="userInfo">
          <div class="float-left t1"><a href="personal.html">{{userInfo.nickname}}</a>|</div>
          <div class="float-left t2" style="margin-right: 20px;"><a class="logout" @on="logout">退出</a></div>
        </div>
        <div class="float-left" v-else>
          <div class="float-left t1"><a id="loginZxw">登录</a>|</div>
          <div class="float-left t2" style="margin-right: 20px;"><a href="register.html">注册</a></div>
        </div>
        <div class="float-left"><a target="_blank" href="http://old.sxtour.com">切换到旧版</a></div>
<!--        <div class="float-left t3">
          <a href="#@">微信</a>
          <div class="navbox navbox3">
            <div class="arrow"></div>
            <div class="text"><img src="../../static/pic/wx-qr.jpg"></div>
          </div>
        </div>
        <div class="float-left t4">
          <a href="#@">微博</a>
          <div class="navbox navbox4">
            <div class="arrow"></div>
            <div class="text"><img src="../../static/pic/wb-qr.jpg"></div>
          </div>
        </div>-->
        <div class="float-left t5" @mouseenter="enter" @mouseleave="showSwitchLanguage = false">
          <a href="#@">Language</a>
          <transition name="fade">
            <div class="navbox navbox5" v-if="showSwitchLanguage">
              <div class="arrow"></div>
              <ul>
                <li v-for="(item, index) in languageInfo" :key="index" class="text"><a :href="item.url" target="_blank">{{item.text}}</a>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="w">
        <div class="logo"><a href="index.html"><img src="../../static/pic/logo2.png" alt=""></a></div>
        <ul class="menu">
          <li><a href="#@">智游陕西</a>
            <div class="dropdown_panel p0">
              <div class="w w0">
                <dl v-for="(item, index) in zhiyoushanxi" :key="index">
                  <dt><a target="_blank" :href="'/html/destinationList.html?typeid=' + item.typeid">{{item.title}}</a></dt>
                  <dd v-for="tag in item.tags" :key="tag.tagid"><a target="_blank" :href="'/html/destinationList.html?typeid='+item.typeid + '&tagid='+tag.tagid">{{tag.text}}</a></dd>
                </dl>
                <div class="banner"><a target="_blank" href="http://www.sxtour.com/html/scenery.html?id=185"><img
                  src="../../static/pic/dropdown-pic20.jpg" alt=""></a></div>
              </div>
            </div>
          </li>
          <li><a href="#@">品阅陕西</a>
            <div class="dropdown_panel p2">
              <div class="w w2">
                <dl>
                  <dt><a target="_blank" href="/html/aboutSx.html">{{pindushanxi.about.text}}</a></dt>
                  <dd v-for="(item, index) in pindushanxi.about.items" :key="index"><a target="_blank" :href="'/html/aboutSx.html?id='+ item.id">{{item.text}}</a></dd>
                </dl>
                <dl class="city" v-for="cityGroup in pindushanxi.cityGroups" :key="cityGroup.id">
                  <dt><a target="_blank" :href="cityGroup.url">{{cityGroup.title}}</a></dt>
                  <dd v-for="city in cityGroup.city" :key="city.id">
                    <img :src="city.img">
                    <a :href="'cityDetail.html?id='+ city.id" target="_blank">{{city.text}}</a>
                  </dd>
                </dl>
              </div>
            </div>
          </li>
          <li><a href="#@">影像陕西</a>
            <div class="dropdown_panel p3" style="">
              <div class="w w3" style="box-sizing: border-box;width: 259px;">
                <dl>
                  <dt><a target="_blank" href="/html/720Degree.html">虚拟旅游</a></dt>
                  <dd><a target="_blank" href="/html/720Degree.html?id=20">景区</a></dd>
                  <dd><a target="_blank" href="/html/720Degree.html?id=21">城市风貌</a></dd>
                  <dd><a target="_blank" href="/html/720Degree.html?id=22">高校</a></dd>
                </dl>
                <dl>
                  <dt><a target="_blank" href="/html/videoList.html">视频</a></dt>
                  <dd><a target="_blank" href="/html/videoList.html?id=26">宣传片</a></dd>
                  <dd><a target="_blank" href="/html/videoList.html?id=28">纪录片</a></dd>
                  <dd><a target="_blank" href="/html/videoList.html?id=29">专题片</a></dd>
                </dl>
                <dl style="margin-right: 0;">
                  <dt><a target="_blank" href="/html/pictureList.html">图库</a></dt>
                  <dd><a target="_blank" href="/html/pictureList.html?id=23">城市面貌</a></dd>
                  <dd><a target="_blank" href="/html/pictureList.html?id=24">自然风光</a></dd>
                  <dd><a target="_blank" href="/html/pictureList.html?id=25">人文景观</a></dd>
                </dl>
                <dl style="width: 306px;margin-right: 0; display: none;"><img style="width: 100%;margin-top: 30px"
                                                                              src="../../static/pic/index/ac03.jpg"
                                                                              alt=""></dl>
              </div>
            </div>
          </li>
          <li><a href="#@">线路攻略</a>
            <div class="dropdown_panel p1" style="">
              <div class="w w1" style="width: 1051px;">
                <dl>
                  <dt style="margin-bottom: 5px;"><a target="_blank" href="/html/traceList.html">精品线路</a></dt>
                  <dd><a target="_blank" href="/html/traceList.html?id=1">黄河旅游带环线之旅</a></dd>
                  <dd><a target="_blank" href="/html/traceList.html?id=2">人文旅游休闲之旅</a></dd>
                  <dd><a target="_blank" href="/html/traceList.html?id=3">红色文化之旅</a></dd>
                  <dd><a target="_blank" href="/html/traceList.html?id=4">丝路风采之旅</a></dd>
                  <dd><a target="_blank" href="/html/traceList.html?id=5">四季体验之旅</a></dd>
                </dl>
                <dl>
                  <dt style="margin-bottom: 24px;"></dt>
                  <dd><a target="_blank" href="/html/traceList.html?id=6">精品跟团游</a></dd>
                  <dd><a target="_blank" href="/html/traceList.html?id=7">趣味自驾游</a></dd>
                  <dd><a target="_blank" href="/html/traceList.html?id=8">秦岭生态之旅</a></dd>
                  <dd><a target="_blank" href="/html/traceList.html?id=9">陕西深度游精华线路</a></dd>
                </dl>
                <dl>
                  <dt style="margin-bottom: 5px;"><a target="_blank" href="/html/journeyList.html">攻略游记</a></dt>
                  <dd><a target="_blank" href="/html/journeyList.html?id=1">文史千载</a></dd>
                  <dd><a target="_blank" href="/html/journeyList.html?id=2">山水奇观</a></dd>
                  <dd><a target="_blank" href="/html/journeyList.html?id=3">多彩民俗</a></dd>
                  <dd><a target="_blank" href="/html/journeyList.html?id=4">红色旅游</a></dd>
                  <dd><a target="_blank" href="/html/journeyList.html?id=5">都市休闲</a></dd>
                </dl>
                <dl style="margin-right: 0;width: 588px;margin-top: 30px;">
                  <a href="http://www.sxtour.com/html/xwDetail.html?id=213" target="_blank"><img style="width: 100%;"
                                                                                                 src="../../static/pic/index/banner01.jpg"
                                                                                                 alt=""></a>
                </dl>
              </div>
            </div>
          </li>
          <li><a href="#@">旅游资讯</a>
            <div class="dropdown_panel p4">
              <div class="w w4">
                <dl>
                  <dt><a target="_blank" href="/html/newsList.html">新闻资讯</a></dt>
                  <dd><a target="_blank" href="/html/newsList.html?id=1">通知公告</a></dd>
                  <dd><a target="_blank" href="/html/newsList.html?id=2">旅游动态</a></dd>
                  <dd><a target="_blank" href="/html/newsList.html?id=3">政策法规</a></dd>
                  <dd><a target="_blank" href="/html/hdList.html">城市活动</a></dd>
                </dl>
                <div class="banner" style="width: 254px;margin-top: 30px"><a
                  href="http://www.sxta.gov.cn/villagestourism.html" target="_blank"><img style="width: 100%;"
                                                                                          src="../../static/pic/index/lyzx01.jpg"
                                                                                          alt=""></a></div>
                <div class="banner" style="width: 254px;margin-top: 30px"><a
                  href="http://sn.ifeng.com/special/lvyoufupin/?from=singlemessage&isappinstalled=0"
                  target="_blank"><img style="width: 100%;" src="pic/index/lyzx02.jpg" alt=""></a></div>
              </div>
            </div>
          </li>
          <li><a href="#@">旅游保障</a>
            <div class="dropdown_panel p5">
              <div class="w w5">
                <dl>
                  <dt><a style="cursor: default">旅游帮助</a></dt>
                  <dd><a target="_blank" href="http://www.weather.com.cn/html/province/shan-xi.shtml">天气预报</a></dd>
                  <dd><a target="_blank" href="http://www.tianqi.com/air/shanxi1.html">空气质量</a></dd>
                  <dd><a target="_blank" href="http://www.sxta.gov.cn/sxtourgov/directory-1.html&pages=1">旅行社查询</a></dd>
                  <dd><a target="_blank" href="http://jianguan.12301.cn/">导游查询</a></dd>
                </dl>
                <dl>
                  <dt><a style="cursor: default">交通信息</a></dt>
                  <dd><a target="_blank" href="http://www.sxsjtt.gov.cn/home/bianmin/index.html">交通查询</a></dd>
                  <dd><a target="_blank" href="http://www.12306.cn">火车票预订</a></dd>
                  <dd><a target="_blank" href="http://sx.bus365.com/">汽车票预订</a></dd>
                  <dd><a target="_blank" href="http://www.umetrip.com">飞机票预订</a></dd>
                </dl>
                <div class="banner"><a target="_blank" href="http://www.sxta.gov.cn/sxtourgov/complaint.html"><img
                  src="../../static/pic/dropdown-pic5.fw.png" alt=""></a></div>
              </div>
            </div>
          </li>
          <li class="fupin"><a href="index_fupin.html" target="_blank">旅游扶贫</a>
            <div class="dropdown_panel p5">
              <div class="w w5">
                <dl>
                  <!--<dt><a target="_blank" href="#@">交通查询</a></dt>-->
                  <!--<dt><a target="_blank" href="#@">旅行社查询</a></dt>-->
                  <!--<dt><a target="_blank" href="#@">导游查询</a></dt>-->
                  <!--<dt><a target="_blank" href="#@">联系方式</a></dt>-->
                  <!--<dt><a target="_blank" href="#@">空气质量</a></dt>-->
                  <!--<dt><a target="_blank" href="#@">天气预报</a></dt>-->
                </dl>
                <!--<div class="banner"><a href="#@"><img src="pic/dropdown-pic5.fw.png" alt=""></a></div>-->
              </div>
            </div>
          </li>
          <li><a href="#@">APP下载</a>
            <div class="dropdown_panel p6">
              <div class="w w6">
                <div class="banner" style="width: 350px;height: 125px;position: relative;margin-left: 85px;">
                  <img style="position: absolute;top: 0;left: 0;" src="../../static/pic/demon/ios.png" alt="">
                  <a style="display: inline" href="http://zxwpic.weiyoutong.com/zysx.apk"><img
                    style="position: absolute;bottom: 0;left: 0;" src="../../static/pic/demon/android.png" alt=""></a>
                  <img style="position: absolute;right: 0;height: 100%;" src="../../static/pic/demon/downloadQR.png"
                       alt="">
                </div>
              </div>
            </div>
          </li>
          <li><a href="#@">
            <button type="button" class="searchbtn"></button>
          </a>
            <div class="dropdown_panel p6" style="">
              <div class="w w6">
                <input type="text" class="searchInput" placeholder="请输入要查询的关键字">
                <input type="button" class="searchBtn" value="搜索">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {languageInfo, zhiyoushanxi, pindushanxi} from "../common/headerData";
  // import http from 'common/http'

  export default {
    data() {
      return {
        showSwitchLanguage: false,
        languageInfo: languageInfo,
        zhiyoushanxi: zhiyoushanxi,
        pindushanxi: pindushanxi,
        userInfo: null
      }
    },
    mounted() {
      // 获取用户信息
      // http.get().then(){};
    },
    props: [],
    computed: {},
    methods: {
      logout: function () {
      },
      enter: function () {
        this.showSwitchLanguage = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/mixin";

  #header-wrapper {
    .nav {
      position: relative;
      top: 0;
      width: 100%;
      height: 50px;
      background-color: #04be83;
    }

    .nav .nav-right {
      position: relative;
      float: right;
      height: 26px;
      line-height: 26px;
      margin-top: 12px;
      margin-right: 100px;
      color: #fff;
    }

    .nav a {
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      padding: 0 5px;
      -webkit-transition: .6s;
      -moz-transition: .6s;
      -o-transition: .6s;
      transition: .6s;
    }

    .nav .float-left {
      float: left;
    }

    .nav .t0 {
      margin-right: 20px;
    }

    .nav .t2 a {
      display: block;
      width: 36px;
      height: 22px;
      line-height: 22px;
      overflow: hidden;
      background: url(../../static/pic/reg-btn.fw.png) no-repeat 5px 3px;
      color: #04be83;
      text-align: center;
      margin-top: 2px;
    }

    .nav .t3 {
      margin: 0 10px;
    }

    .nav .t3 a {
      display: block;
      width: 24px;
      height: 21px;
      overflow: hidden;
      text-indent: -9999px;
      background: url(../../static/pic/wx-btn.fw.png) no-repeat 5px 2px;
      color: #04be83;
      text-align: center;
      padding-top: 2px;
    }

    .nav .t4 {
      margin-right: 10px;
    }

    .nav .t4 a {
      display: block;
      width: 24px;
      height: 19px;
      overflow: hidden;
      text-indent: -9999px;
      background: url(../../static/pic/wb-btn.fw.png) no-repeat 5px 1px;
      color: #04be83;
      text-align: center;
      padding-top: 2px;
    }

    .nav .t5 a {
      padding-right: 10px;
      background: url(../../static/pic/arrow-down.fw.png) no-repeat right center;
    }

    .nav .t0 a:hover {
      border: #fff 1px solid;
      border-radius: 3px;
      padding: 3px;
    }

    .nav .t1 a:hover {
      color: #FFD000;
    }

    .nav .t2 a:hover {
      color: #FF7700;
    }

    .nav .navbox {
      position: absolute;
      top: 18px;
      z-index: 999;
    }

    .nav .navbox.hover {
      display: block;
    }

    .nav .navbox .arrow {
      width: 0;
      height: 0;
      border-width: 10px;
      border-color: transparent transparent white transparent;
      border-style: dashed dashed solid dashed;
      margin-left: 28px;
    }

    .nav .navbox .text {
      background: #fff;
      width: 200px;
      height: 200px;
      font-size: 24px;
      text-align: center;
      color: #2F3032;
      transition: .6s;
      &:hover {
        background-color: whitesmoke;
      }
    }

    .nav .navbox .text img {
      width: 100%;
      height: 100%;
    }

    .nav .navbox3 {
      right: 55px;
    }

    .nav .navbox3 .arrow {
      margin-left: 90px;
    }

    .nav .navbox4 {
      right: 13px;
    }

    .nav .navbox4 .arrow {
      margin-left: 90px;
    }

    .nav .navbox5 {
      right: -8px;
    }
    .nav .navbox5 .arrow {
      margin-left: 140px;
    }

    .nav .navbox5 .text {
      height: 50px;
      line-height: 50px;
      font-size: 14px;
    }

    .nav .navbox5 .text a {
      color: #333;
      transition: .6s;
      display: block;
      &:hover {
        color: #04be83;
      }
    }

    .header {
      position: relative;
      top: 0;
      width: 100%;
      height: 80px;
      background-color: #ffffff;
    }

    .header .w {
      width: 1200px;
      height: 80px;
      margin: 0 auto;
    }

    .header .logo {
      width: 220px;
      height: 51px;
      margin-top: 6px;
      float: left;
    }

    .header ul.menu {
      float: left;
      margin-left: 60px;
    }

    .header ul.menu li {
      float: left;
      margin: 32px 9px 0 0;
      padding: 0 12px;
      font-size: 16px;
      font-weight: bold;
      height: 43px;
      -webkit-transition: .6s;
      -moz-transition: .6s;
      -o-transition: .6s;
      transition: .6s;
    }

    .header ul.menu li a {
      display: block;
      width: 100%;
      height: 100%;
      -webkit-transition: .6s;
      -moz-transition: .6s;
      -o-transition: .6s;
      transition: .6s;
    }

    .header ul.menu li:hover,
    .header ul.menu li.hover {
      border-bottom: #04be83 5px solid;
    }

    .header ul.menu li:hover > a,
    .header ul.menu li.hover > a {
      color: #04be83;
    }

    .header ul.menu li .dropdown_panel {
      position: absolute;
      z-index: 999;
      width: 100%;
      height: 210px;
      left: 0;
      top: 80px;
      box-shadow: 0 2px 10px #ccc;
      background: #fff;
      display: none;
      /*height: 0;*/
      overflow: hidden;
    }

    .header ul.menu li .dropdown_panel.p6 {
      /*display: none;*/
    }

    .header ul.menu li:hover .dropdown_panel {
      /*display: block;
      overflow: hidden;
      height: 210px;
      -webkit-transition: height .6s;
      -moz-transition: height .6s;
      -ms-transition: height .6s;
      -o-transition: height .6s;
      transition: height .6s;*/
    }

    .header ul.menu li .dropdown_panel .w {
      width: 1020px;
      height: 185px;
      margin: 25px auto 0;
    }

    .header ul.menu li .dropdown_panel .w0 {
      width: 1020px;
    }

    .header ul.menu li .dropdown_panel .w1 {
      width: 700px;
    }

    .header ul.menu li .dropdown_panel .w2 {
      width: 750px;
    }

    .header ul.menu li .dropdown_panel .w3 {
      width: 620px;
    }

    .header ul.menu li .dropdown_panel .w4 {
      width: 720px;
    }

    .header ul.menu li .dropdown_panel .w5 {
      width: 465px;
    }

    .header ul.menu li .dropdown_panel .w6 {
      width: 520px;
    }

    .header ul.menu li .dropdown_panel dt a {
      font-size: 15px;
      font-weight: bold;
    }

    .header ul.menu li .dropdown_panel dd a {
      font-size: 14px;
      font-weight: normal;
    }

    .header ul.menu li .dropdown_panel dd a em {
      color: #f00;
      padding: 0 2px 0 5px;
      font-weight: bold;
      font-style: normal;
    }

    .header ul.menu li .dropdown_panel .sliderbox {
      float: left;
      width: 350px;
      height: 140px;
      margin-left: 50px;
    }

    .header ul.menu li .dropdown_panel .sliderbox .left,
    .header ul.menu li .dropdown_panel .sliderbox .right {
      width: 45px;
      height: 140px;
      float: left;
    }

    .header ul.menu li .dropdown_panel .sliderbox .ico {
      width: 21px;
      height: 37px;
      margin: 51px 0 0 12px;
      background: url(../../static/pic/dropdown-arrow.fw.png) no-repeat 0 0;
      cursor: pointer;
    }

    .header ul.menu li .dropdown_panel .sliderbox .right .ico {
      background-position: -100px 0;
    }

    .header ul.menu li .dropdown_panel .sliderbox .pic {
      float: left;
      width: 210px;
      height: 140px;
      overflow: hidden;
    }

    .header ul.menu li .dropdown_panel .banner {
      float: left;
      margin-left: 50px;
    }

    .header ul.menu li .dropdown_panel .banner a {
      display: block;
      width: 100%;
      height: 100%;
    }

    .header ul.menu li .dropdown_panel dl.city {
      float: left;
      width: 622px;
      height: 44px;
      margin-bottom: 15px;
      margin-right: 0;
    }

    .header ul.menu li .dropdown_panel dl.city dt {
      height: 44px;
      line-height: 44px;
      float: left;
    }

    .header ul.menu li .dropdown_panel dl.city dd {
      height: 44px;
      float: left;
      position: relative;
      margin-left: 20px;
    }

    .header ul.menu li .dropdown_panel dl.city dd img {
      display: block;
      width: 64px;
      height: 44px;
    }

    .header ul.menu li .dropdown_panel dl.city dd:hover img {
      box-shadow: 1px 1px 2px #999;
    }

    .header ul.menu li .dropdown_panel dl.city dd a {
      display: block;
      position: absolute;
      width: 64px;
      height: 20px;
      text-align: center;
      top: 0;
      left: 0;
      padding-top: 24px;
      color: #fff;
    }

    .header ul.menu li .dropdown_panel dl.city dd a:hover {
      color: #04be83;
    }

    .header ul.menu li .dropdown_panel dl {
      float: left;
      margin: 0 50px 0 0;
    }

    .header ul.menu li .dropdown_panel dt {
      margin-bottom: 15px;
    }

    .header ul.menu li .dropdown_panel dd {
      padding: 2px 0;
    }

    .header ul.menu li .dropdown_panel .w2 dt {
      margin-bottom: 10px;
    }

    .header ul.menu li .dropdown_panel .w5 dt {
      margin-bottom: 8px;
    }

    //.header ul.menu li .dropdown_panel .w5 dt a {
    //  font-weight: normal;
    //}

    .header ul.menu li .dropdown_panel .w6 .banner {
      float: left;
      margin-left: 0;
      margin-top: 20px;
    }

    .header .searchbox {
      float: left;
      margin: 18px 0 0 20px;
      width: 220px;
      height: 45px;
      background: #fff;
    }

    .header .searchbox .inputbox {
      float: left;
      width: 160px;
      height: 45px;
    }

    .header .searchbox input {
      display: block;
      width: 140px;
      height: 25px;
      line-height: 25px;
      margin: 10px 0 0 10px;
      font-size: 12px;
      color: #666;
    }

    .header .searchbox .btnbox {
      float: left;
      width: 53px;
      height: 35px;
      margin-top: 5px;
      border-left: #E5E5E5 2px solid;
    }

    .header .searchbtn {
      width: 45px;
      height: 35px;
      border: 0;
      background: url(../../static/pic/search-btn.fw.png) no-repeat center center;
    }

    .header ul.menu li:last-child {
      margin-top: 24px;
    }

    .header ul.menu li .dropdown_panel.p6 {
      .searchInput {
        width: 382px;
        height: 34px;
        border: 1px solid #a0a0a0;
        text-indent: 16px;
        line-height: 34px;
        float: left;
        box-sizing: border-box;
        margin-top: 46px;
        text-align: left;
        color: #000;
      }
      .searchBtn {
        width: 84px;
        height: 34px;
        line-height: 34px;
        background: #0dba85;
        color: #fff;
        float: left;
        margin-top: 46px;
      }
    }

  }
</style>
