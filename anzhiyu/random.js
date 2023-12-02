var posts=["2023/10/16/Docker/","2023/09/23/Hexo引入本地图片/","2023/11/25/Java/","2023/10/21/LeetCode/","2023/09/25/MyBatisPlus/","2023/10/20/Nginx/","2023/11/04/ProjectDev/","2023/10/05/Redis/","2023/09/24/Spring/","2023/10/28/SpringAnalysis/","2023/10/08/SpringBoot/","2023/11/25/SpringCloud LoadBalancer工作原理/","2023/11/14/SpringCloud/","2023/10/06/SpringMVC/","2023/11/23/SpringSecurity/","2023/11/04/TagPlugins/","2023/10/25/Vue/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"安知鱼`Blog","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc9de6507.webp","descr":"期待您的光临!","color":"vip","tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","color":"vip","tag":"洪"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。","color":"vip","tag":"Leonus"},{"name":"Calyee","link":"https://blog.calyee.top/","avatar":"https://blog.calyee.top/img/avatar.jpg","siteshot":"https://blog.calyee.top/img/siteshot.png","descr":"追求充实，分享快乐","color":"speed","tag":"本站"},{"name":"Chestnutduck","link":"https://www.chestnutduck.top/","avatar":"https://www.chestnutduck.top/img/touxiang.jpg","descr":"记录每天平凡的自己"},{"name":"Mcalongyeah","link":"https://alongyeah.love/","avatar":"https://img1.baidu.com/it/u=3430152161,3256060452&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=380","descr":"欢迎访问AaaaaLong的小窝"},{"name":"王貔貅","link":"https://blog.wpixiu.cn/","avatar":"https://picture.wpixiu.cn/vSIsvO.jpg","descr":"日就月将,学有缉熙于光明","siteshot":"https://picture.wpixiu.cn/34O6IS.jpg"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://blog.kouseki.cn/imgs/siteshot.webp"},{"name":"葱苓sama","link":"https://blog.ciraos.top","avatar":"https://img01.anheyu.com/useruploads/222/2023/10/16/652cbfc482491.jpg","descr":"Dare && Do","siteshot":"https://img01.anheyu.com/useruploads/222/2023/10/18/652fdf0738617.png"},{"name":"樱花小镇","link":"https://blog.sakura.vin","avatar":"https://www.sakura.vin/favicon.ico","descr":"小园新种红樱树，闲绕花枝便当游。","siteshot":"https://bu.dusays.com/2023/09/15/6503348d9a06e.png"},{"name":"小孙同学","link":"https://blog.sunguoqi.com","avatar":"https://blog.sunguoqi.com/images/avatar.jpg","descr":"路虽远行则将至，事随难做则必成！"},{"name":"任平生","link":"https://buuu.cn/","avatar":"https://buuu.cn/favicon.jpg","descr":"竹杖芒鞋轻胜马 谁怕? 一蓑烟雨任平生","siteshot":"https://buuu.cn/siteshot.jpg"},{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"}];
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