var posts=["2023/10/16/Docker/","2023/09/23/Hexo图片路径转换/","2023/09/23/Hexo引入本地图片/","2023/10/21/LeetCode/","2023/09/25/MyBatisPlus/","2023/10/20/Nginx/","2023/11/04/ProjectDev/","2023/10/05/Redis/","2023/10/28/SpringAnalysis/","2023/10/08/SpringBoot/","2023/09/24/Spring/","2023/10/06/SpringMVC/","2023/11/04/TagPlugins/","2023/10/25/Vue/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"安知鱼`Blog","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc9de6507.webp","descr":"期待您的光临!","color":"vip","tag":"技术"},{"name":"Calyee","link":"https://yikoutian1.github.io/","avatar":"https://picdm.sunbangyan.cn/2023/10/15/r0jfi5.jpg","descr":"追求充实，分享快乐","color":"speed","tag":"本站"},{"name":"Chestnutduck","link":"https://chestnutduck.github.io/","avatar":"https://chestnutduck.github.io/img/touxiang.jpg","descr":"大家好，我是姚亚鹏，一枚大三学生，欢迎光临我的博客","color":"vip"},{"name":"Mcalongyeah","link":"https://mcalongyeah.github.io/","avatar":"https://img1.baidu.com/it/u=3430152161,3256060452&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=380","descr":"欢迎访问AaaaaLong的小窝 ~ ~","color":"speed"},{"name":"Chestnutduck","link":"https://chestnutduck.github.io/","avatar":"https://chestnutduck.github.io/img/touxiang.jpg","descr":"欢迎光临Chestnutduck的博客"},{"name":"Mcalongyeah","link":"https://mcalongyeah.github.io/","avatar":"https://img1.baidu.com/it/u=3430152161,3256060452&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=380","descr":"欢迎访问AaaaaLong的小窝"},{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };