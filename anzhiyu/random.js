var posts=["2024/01/17/BigDecimal/","2023/10/16/Docker/","2024/04/17/Dubbo与Zookeeper/","2023/09/24/Github连接超时问题/","2023/09/23/Hexo引入本地图片/","2023/11/25/Java/","2023/10/21/LeetCode/","2023/09/25/MyBatisPlus/","2024/01/30/Netty实现websocket/","2024/02/03/Netty心跳原理/","2023/10/20/Nginx/","2023/12/27/RabbitMQ/","2023/10/05/Redis/","2023/09/24/Spring/","2023/10/28/SpringAnalysis/","2023/10/08/SpringBoot/","2024/01/19/SpringCloud LoadBalancer工作原理/","2024/01/20/SpringCloud/","2023/10/06/SpringMVC/","2023/12/03/SpringSecurity/","2023/11/04/TagPlugins/","2023/10/25/Vue/","2024/03/13/分布式锁封装/","2024/01/11/博客侧边栏旋转小人/","2023/12/19/后台管理系统/","2023/11/04/开发小手册/","2023/12/17/微信扫码登录/","2024/03/04/统一管理的线程池/","2024/03/26/聊天项目总结/","2023/12/19/设计模式/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Calyee","link":"https://blog.calyee.top/","avatar":"https://blog.calyee.top/img/avatar.jpg","siteshot":"https://blog.calyee.top/img/siteshot.png","descr":"追求充实，分享快乐","color":"speed","tag":"本站"},{"name":"安知鱼`Blog","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"安知鱼·主题"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc9de6507.webp","descr":"期待您的光临!","color":"vip","tag":"糖果屋"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","color":"vip","tag":"张洪"},{"name":"Chestnutduck","link":"https://www.chestnutduck.top/","avatar":"https://www.chestnutduck.top/img/touxiang.jpg","descr":"记录每天平凡的自己","tag":"友"},{"name":"Mcalongyeah","link":"https://alongyeah.love/","avatar":"https://img1.baidu.com/it/u=3430152161,3256060452&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=380","descr":"欢迎访问AaaaaLong的小窝","tag":"友"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/6503bb1b7fa1a.webp!avatar","descr":"分享网络安全与科技生活","siteshot":"https://avatar.qjqq.cn/1/647571edf20a9.webp!avatar","tag":"荐"},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://blog.kouseki.cn/imgs/siteshot.webp","tag":"荐"},{"name":"葱苓sama","link":"https://blog.ciraos.top","avatar":"https://img01.anheyu.com/useruploads/222/2023/10/16/652cbfc482491.jpg","descr":"Dare && Do","siteshot":"https://img01.anheyu.com/useruploads/222/2023/10/18/652fdf0738617.png","tag":"荐"},{"name":"樱花小镇","link":"https://blog.sakura.vin","avatar":"https://www.sakura.vin/favicon.ico","descr":"小园新种红樱树，闲绕花枝便当游。","siteshot":"https://bu.dusays.com/2023/09/15/6503348d9a06e.png"},{"name":"王貔貅","link":"https://blog.wpixiu.cn/","avatar":"https://blog.wpixiu.cn/img/avatar.jpg","descr":"日就月将,学有缉熙于光明"},{"name":"小孙同学","link":"https://blog.sunguoqi.com","avatar":"https://blog.sunguoqi.com/images/avatar.jpg","descr":"路虽远行则将至，事随难做则必成！"},{"name":"任平生","link":"https://buuu.cn/","avatar":"https://buuu.cn/favicon.jpg","descr":"竹杖芒鞋轻胜马 谁怕? 一蓑烟雨任平生","siteshot":"https://buuu.cn/siteshot.jpg"},{"name":"阳小楊","link":"https://blog.yxyang.top","avatar":"https://pic.imgdb.cn/item/65708f75c458853aefa8c951.jpg","descr":"无人了解你的灵魂．","siteshot":"https://pic.imgdb.cn/item/65709596c458853aefc6469c.png"},{"name":"余墨白","link":"https://blog.yumobai.cn/","avatar":"https://img.yumobai.cn/yumobai/img头像5.ico","descr":"喜欢捣鼓的博主．","siteshot":"https://img.yumobai.cn/yumobai/imgbg111.png"},{"name":"九弦之屋","link":"https://blog.sinzmise.top/","avatar":"https://blog.sinzmise.top/img/avatar.png","descr":"欢迎旅行者，来到这个平凡但又记载了许多故事的小屋","siteshot":"https://s0.wp.com/mshots/v1/https://blog.sinzmise.top/"},{"name":"Miykahの后备箱","link":"https://blog.miykah.top/","avatar":"https://blog.miykah.top/upload/blog-avatar.webp","descr":"热爱分享，喜欢折腾"},{"name":"SerMs","link":"https://blog.serms.top/","avatar":"https://bu.dusays.com/2023/10/11/65269ea6226c8.png","descr":"代码如诗，细节成就极致，逻辑成就完美。","siteshot":"https://bu.dusays.com/2023/10/11/65264d86ddebb.png"},{"name":"HiPeach","link":"https://blog.opeach.cn","avatar":"https://npm.elemecdn.com/opicture@1.0.0/main/avatar.webp","siteshot":"https://registry.npmmirror.com/opicture/1.1.2/files/blog/siteshot/siteshot.webp","descr":"妙不可言"},{"name":"Kenshin2438のBlog","link":"https://kenshin2438.top/","avatar":"https://kenshin2438.top/images/avatar.webp","descr":"大概算是（半）个技术博客。"},{"name":"小植同学","link":"https://blog.xiaoztx.top","avatar":"https://blog.xiaoztx.top/img/xiaozhi.jpg","siteshot":"https://img.xiaoztx.top/image/2023/10/29/9d2fa78857f43f0250a0776fd6d02b6c.jpeg","descr":"锦鲤相随，好运常伴"},{"name":"Qing","link":"https://blog.wuyuxi.cn/","avatar":"https://s3.qjqq.cn/37/655887614c2ce.webp!color","descr":"保持善良与温柔，追求上进与美好。","siteshot":"https://s3.qjqq.cn/37/6555b8e007d48.webp!color"},{"name":"Pupper","link":"https://pupper.cn","avatar":"https://img.pupper.cn/img/202307151348675.png","descr":"记录学习、生活中的点点滴滴~","siteshot":"https://img.pupper.cn/img/202307181549343.png"},{"name":"闪闪の小窝","link":"https://moechun.fun/","avatar":"https://moechun.fun/img/avatar/hanajiang-2.png","descr":"来玩！玩累了…就睡觉！没问题的！","siteshot":"https://moechun.fun/img/screenshots/%E4%B8%BB%E9%A1%B5.jpg"},{"name":"屑殇","link":"https://jinghuashang.cn/","descr":"桃李春风一杯酒，江湖夜雨十年灯","avatar":"https://jinghuashang.cn/img/acc.webp","siteshot":"https://download.tooc.xlj0.com/uploads/56/jinghuashang.webp"},{"name":"神经蛙","link":"https://hexo.sjava.cn/","avatar":"https://hexo.sjava.cn/img/pic.png","descr":"种一棵树最好的时间是十年前，其次是现在。","siteshot":"https://hexo.sjava.cn/img/sjw.png"},{"name":"Rootlex","link":"https://blog.nalex.top","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=1736191951&spec=640","descr":"寒蝉黎明之时，便是重生之日"},{"name":"偷闲小站","link":"https://blog.andypang.cc/","avatar":"https://image.andypang.cc/images/202309141917982.jpg","descr":"跨越山海，终见曙光","siteshot":"https://image.andypang.cc/images/202310101744343.png"},{"name":"iMaeGoo’s Blog","link":"https://www.imaegoo.com","avatar":"https://www.imaegoo.com/images/avatar.jpg","descr":"虹墨空间站"},{"name":"别亦难","link":"https://lazyingman.com","avatar":"https://bu.dusays.com/2023/06/23/64959cf745a4d.png","descr":"准时不定期更新","siteshot":"https://bu.dusays.com/2023/06/28/649c105e00a4f.png"},{"name":"Eurkon","link":"https://blog.eurkon.com","avatar":"https://blog.eurkon.com/images/user/avatar.jpg","descr":"及时当勉励，岁月不待人。"},{"name":"SuYi-宿仪","link":"https://www.thotz.top/","avatar":"https://pic.imgdb.cn/item/64c09ca51ddac507cc7f1585.png","descr":"随心写作，随缘阅读","siteshot":"https://s1.ax1x.com/2023/07/31/pP9c8M9.jpg"},{"name":"张时贰","link":"https://zhsher.cn","avatar":"https://q1.qlogo.cn/g?b=qq&nk=1310446718&s=5","descr":"环转码，爱敲代码的小张！"},{"name":"PR霞霞","link":"https://doyuodo.gitee.io/hexo/","avatar":"https://doyuodo.gitee.io/author.jpg","descr":"记录笔记，记录生活，创新&发展"},{"name":"桜紺狸の部落阁","link":"https://www.skira.top","descr":"一个闲聊萌新动漫技术交流站","avatar":"https://www.skira.top/img/lemonsuka.webp"},{"name":"DUSK文案社区","link":"https://blog.zawuguan.ink/","descr":"超多文案社区","avatar":"https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706827502511/IMG_2323.gif"},{"name":"Pzai","link":"https://blog.pzai.cloud/","descr":"从入门到放弃","avatar":"https://blog.pzai.cloud/img/avatar.png"},{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架","color":"vip","tag":"Hexo"}];
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