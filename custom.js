/* ===== Sara Alwahedy — custom homepage sections ===== */
(function(){
  function run(){
    if(window.__saDone)return;
    var main=document.getElementById('main-content');
    var header=document.querySelector('.store-header');
    if(!header)return;
    window.__saDone=true;

    /* fonts */
    if(!document.getElementById('sa-fonts')){
      var l=document.createElement('link');l.id='sa-fonts';l.rel='stylesheet';
      l.href='https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Tajawal:wght@400;500;700;800&family=Great+Vibes&display=swap';
      document.head.appendChild(l);
    }

    var IMG={
      logo:'https://cdn.files.salla.network/other/1767671972/73b505e9-0611-453e-97c8-4f1ff139e59c-standard.webp',
      family:'https://cdn.files.salla.network/other/1767671972/756b645e-cac3-4897-9e50-9b48539c19f2-standard.jpeg',
      flowerR:'https://cdn.files.salla.network/other/1767671972/fe23611f-7597-4ebb-b04f-745fdbdf68d8-standard.webp',
      flowerL:'https://cdn.files.salla.network/other/1767671972/9a1dd954-1cc1-400c-8e19-cf4a53db9568-standard.jpeg'
    };
    var WA='https://wa.me/966564121602';
    var CAT={
      sleep:'/%D9%82%D8%B5%D8%B5-%D9%85%D8%A7-%D9%82%D8%A8%D9%84-%D8%A7%D9%84%D9%86%D9%88%D9%85/c447407648',
      values:'/%D8%A7%D9%84%D9%82%D9%8A%D9%85-%D9%88%D8%A7%D9%84%D8%A3%D8%AE%D9%84%D8%A7%D9%82/c1953957153',
      edu:'/%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D9%88%D8%A3%D8%A8%D8%AC%D8%AF%D9%8A%D8%A7%D8%AA/c1221445415',
      games:'/%D8%A3%D9%84%D8%B9%D8%A7%D8%A8-%D8%A7%D9%84%D8%B9%D8%A7%D8%A6%D9%84%D8%A9/c2128656422',
      gifts:'/%D8%A7%D9%84%D9%87%D8%AF%D8%A7%D9%8A%D8%A7-%D9%88%D8%A7%D9%84%D8%A8%D8%A7%D9%82%D8%A7%D8%AA/c756783397'
    };
    /* category links are relative to the store root (works on the domain and on salla.sa/SaraAlwahedy) */
    var root=(document.querySelector('.store-header a.navbar-brand')||{}).getAttribute?document.querySelector('.store-header a.navbar-brand').getAttribute('href'):'/';
    root=(root||'/').replace(/\/$/,'');
    function u(p){return root+p;}

    var sprite='<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>'+
      '<symbol id="sa-moon" viewBox="0 0 64 64"><path d="M44 46a22 22 0 1 1-18-34 17 17 0 0 0 18 34z"/><path d="M48 14l1.6 4 4 1.6-4 1.6L48 25l-1.6-3.8-4-1.6 4-1.6z"/></symbol>'+
      '<symbol id="sa-heart" viewBox="0 0 64 64"><path d="M32 54S8 40 8 24a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 16-24 30-24 30z"/></symbol>'+
      '<symbol id="sa-abc" viewBox="0 0 64 64"><path d="M10 48V26a8 8 0 0 1 16 0v22M10 38h16"/><path d="M34 14v34M34 24c8-6 18-2 18 6s-10 12-18 6"/></symbol>'+
      '<symbol id="sa-chat" viewBox="0 0 64 64"><path d="M10 14h32a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H26l-10 8v-8h-6a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z"/><path d="M22 46v2a4 4 0 0 0 4 4h14l8 6v-6h4a4 4 0 0 0 4-4V32a4 4 0 0 0-4-4h-4"/></symbol>'+
      '<symbol id="sa-gift" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 13h18M12 8c-3 0-5-1-5-3s3-3 5 3c2-6 5-5 5-3s-2 3-5 3z"/></symbol>'+
      '<symbol id="sa-book" viewBox="0 0 64 64"><path d="M32 14c-6-4-14-5-22-4v38c8-1 16 0 22 4 6-4 14-5 22-4V10c-8-1-16 0-22 4z"/><path d="M32 14v38"/></symbol>'+
      '<symbol id="sa-truck" viewBox="0 0 24 24"><path d="M2 6h11v10H2zM13 9h4l4 4v3h-8z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></symbol>'+
      '<symbol id="sa-shield" viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></symbol>'+
      '<symbol id="sa-ret" viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 3-6.2"/><path d="M4 4v4h4"/></symbol>'+
      '<symbol id="sa-help" viewBox="0 0 24 24"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/></symbol>'+
      '<symbol id="sa-cart" viewBox="0 0 24 24"><path d="M3 4h3l2.4 11h10.2l2-8H7"/><circle cx="10" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/></symbol>'+
      '<symbol id="sa-wa" viewBox="0 0 24 24"><path d="M4 20l1.3-4.2A8.5 8.5 0 1 1 8.4 18.8z"/><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .7c-1-.4-2-1.4-2.4-2.4l.7-1-1-2z"/></symbol>'+
      '<symbol id="sa-sparkle" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></symbol>'+
      '</defs></svg>';
    function ic(n,s){return '<svg class="i"'+(s?' style="'+s+'"':'')+'><use href="#sa-'+n+'"/></svg>';}
    function el(html){var d=document.createElement('div');d.innerHTML=html;return d.firstElementChild;}

    document.body.insertAdjacentHTML('afterbegin',sprite);

    /* announcement bar (all pages) */
    header.parentNode.insertBefore(el('<div class="sa sa-ann">شحن مجاني للطلبات فوق <b>200 ر.س</b> &nbsp;•&nbsp; هدية تغليف مع كل طلب &nbsp;•&nbsp; التوصيل لجميع مدن المملكة</div>'),header);

    /* mobile bar (all pages) */
    document.body.appendChild(el('<div class="sa sa-mbar"><a class="btn btn-p" href="'+(document.body.classList.contains('index')?'#sa-shop':u('/'))+'">'+ic('cart','width:20px;height:20px')+'تسوّق الآن</a><a class="btn btn-o" href="'+WA+'" target="_blank" rel="noopener">'+ic('wa','width:20px;height:20px')+'واتساب</a></div>'));
    document.body.classList.add('has-sa-mbar');

    if(!document.body.classList.contains('index')||!main)return;

    var first=main.querySelector('section.s-block');
    var end=document.getElementById('end_of_the_components');
    var products=main.querySelector('.s-block--best-offers');

    var hero=el('<section class="sa sa-hero"><div class="wrap g"><div class="tx">'+
      '<span class="eyebrow">قصص وكتب وأدوات تربوية للعائلة</span>'+
      '<h1>قصةٌ كل ليلة… <em>تجمع العائلة</em> وتغرس القيم</h1>'+
      '<p class="lead">مجموعة مختارة بعناية من القصص والكتب والأنشطة التي تصنع لعائلتك لحظات قراءة دافئة، وتنمّي في أطفالك حبّ المعرفة والأخلاق الجميلة.</p>'+
      '<div class="cta"><a class="btn btn-p" href="#sa-shop">'+ic('cart')+'تسوّق الآن</a><a class="btn btn-o" href="#sa-cats">تصفّح الأقسام</a></div>'+
      '<div class="mini"><div>'+ic('truck')+'شحن سريع</div><div>'+ic('shield')+'دفع آمن</div><div>'+ic('ret')+'استبدال خلال 14 يوماً</div></div>'+
      '</div><div class="art"><div class="frame"><img src="'+IMG.logo+'" alt="Sara Alwahedy — عائلة تقرأ كتاباً مفتوحاً"></div>'+
      '<div class="chip a">'+ic('book')+'قصص جديدة كل شهر</div><div class="chip b">'+ic('gift')+'تغليف هدية مجاني</div></div></div></section>');

    function cat(href,bg,fg,icon,t,s){return '<a class="sa-cat" href="'+u(href)+'" style="--bg1:'+bg+';--fg1:'+fg+'"><div class="ph"><svg><use href="#sa-'+icon+'"/></svg></div><h3>'+t+'</h3><span>'+s+'</span></a>';}
    var cats=el('<section class="sa sa-sec" id="sa-cats"><div class="wrap"><div class="head"><span class="eyebrow">تسوّق بسهولة</span><h2>اختر ما يناسب عائلتك</h2><p>أقسام واضحة تختصر عليك الطريق إلى القصة أو الأداة المناسبة لعمر طفلك.</p></div><div class="sa-cats">'+
      cat(CAT.sleep,'#FDE7E9','#B04A66','moon','قصص ما قبل النوم','حكايات هادئة وأحلام سعيدة')+
      cat(CAT.values,'#F4EBD9','#A67C37','heart','القيم والأخلاق','سلاسل تربوية ممتعة')+
      cat(CAT.edu,'#E7EFE4','#5F7F5B','abc','تعليم وأبجديات','بطاقات وكتب تفاعلية')+
      cat(CAT.games,'#FADDE3','#C0587A','chat','ألعاب العائلة','حوارات وأنشطة مشتركة')+
      cat(CAT.gifts,'#F4EBD9','#A67C37','gift','الهدايا والباقات','جاهزة للإهداء بتغليف أنيق')+
      '</div></div></section>');

    var trust=el('<section class="sa sa-trust"><div class="wrap"><div class="sa-tg">'+
      '<div class="sa-tc"><div class="ti">'+ic('truck')+'</div><h3>شحن سريع</h3><p>توصيل لجميع مدن المملكة، وشحن مجاني فوق 200 ر.س</p></div>'+
      '<div class="sa-tc"><div class="ti">'+ic('shield')+'</div><h3>دفع آمن</h3><p>بوابات دفع موثوقة وبياناتك محمية بالكامل</p></div>'+
      '<div class="sa-tc"><div class="ti">'+ic('ret')+'</div><h3>ضمان الاستبدال</h3><p>استبدال أو استرجاع خلال 14 يوماً في حال وجود عيب</p></div>'+
      '<div class="sa-tc"><div class="ti">'+ic('help')+'</div><h3>دعم يهتم بك</h3><p>فريقنا يجيبك عبر واتساب خلال ساعات العمل</p></div>'+
      '</div></div></section>');

    var story=el('<section class="sa sa-sec sa-story" id="sa-story"><div class="wrap g"><div class="pic"><div class="main"><img src="'+IMG.family+'" alt="عائلة سارة الواحدي"></div><div class="stamp"><span class="script">with love</span><small>صُنع بحب للعائلة</small></div></div>'+
      '<div><span class="eyebrow">قصتنا</span><h2>بدأت الحكاية من كتابٍ مفتوح على طاولة العائلة</h2>'+
      '<p>أنا سارة الواحدي، أمّ آمنتُ أن أجمل ما نورّثه لأبنائنا ليس ما نملكه، بل ما نقرؤه معاً. من هذا الإيمان وُلد متجري: مساحة تجمع قصصاً وكتباً وأدوات تربوية اخترتها بنفسي، لتكون عوناً لكل أمّ وأبٍ يريدان صناعة ذكريات دافئة.</p>'+
      '<p>كل منتج يمرّ بمعيار واحد: هل أقرؤه على أطفالي بكل اطمئنان؟ إن كان الجواب نعم، وجد طريقه إليكم.</p>'+
      '<div class="sa-vals"><div>'+ic('book')+'محتوى هادف</div><div>'+ic('heart')+'قيم أصيلة</div><div>'+ic('sparkle')+'جودة مختارة</div></div>'+
      '<span class="script sign">Sara</span></div></div></section>');

    function q(s,a,o){return '<details'+(o?' open':'')+'><summary>'+s+'</summary><p>'+a+'</p></details>';}
    var faq=el('<section class="sa sa-sec" id="sa-faq"><div class="wrap"><div class="head"><span class="eyebrow">نجيبك قبل أن تسأل</span><h2>الأسئلة الشائعة</h2></div><div class="sa-fq">'+
      q('كم تستغرق مدة التوصيل؟','يصل الطلب عادةً خلال 2 إلى 5 أيام عمل بحسب مدينتك، وتصلك رسالة برقم تتبع الشحنة فور خروج الطلب من عندنا.',1)+
      q('ما الأعمار المناسبة للقصص والمنتجات؟','يوضّح كل منتج الفئة العمرية المناسبة له في صفحته، ويمكنك أيضاً مراسلتنا على واتساب لنرشّح لك الأنسب لعمر طفلك.')+
      q('هل يمكنني استبدال المنتج أو إرجاعه؟','نعم، خلال 14 يوماً من الاستلام في حال وجود عيب في الطباعة أو خطأ في الطلب، بشرط أن يكون المنتج بحالته الأصلية.')+
      q('ما طرق الدفع المتاحة؟','تظهر لك جميع طرق الدفع المتاحة عند إتمام الطلب، وكلها عبر بوابات دفع آمنة ومشفّرة.')+
      q('هل تتوفر خدمة تغليف الهدايا؟','نعم، نقدّم تغليفاً أنيقاً مجانياً مع كل طلب.')+
      '</div></div></section>');

    var news=el('<section class="sa sa-news"><div class="wrap"><div class="box"><img class="f1" src="'+IMG.flowerR+'" alt=""><img class="f2" src="'+IMG.flowerL+'" alt="">'+
      '<span class="eyebrow">انضمّ إلى عائلتنا</span><h2>نسعد بتواصلك معنا</h2><p>اسألينا عن القصة المناسبة لعمر طفلك، أو اطلبي ترشيحاً لهدية مميزة، وسنرد عليك عبر واتساب.</p>'+
      '<a class="btn btn-p" href="'+WA+'" target="_blank" rel="noopener">'+ic('wa')+'راسلينا على واتساب</a></div></div></section>');

    /* placement */
    var anchor=first||end;
    main.insertBefore(hero,anchor);
    main.insertBefore(cats,anchor);
    if(products){
      var sh=document.createElement('span');sh.id='sa-shop';products.parentNode.insertBefore(sh,products);
      products.parentNode.insertBefore(trust,products.nextSibling);
    }else{
      var shop=document.createElement('span');shop.id='sa-shop';main.insertBefore(shop,anchor);
      main.insertBefore(trust,anchor);
    }
    var tail=end||null;
    main.insertBefore(story,tail);
    main.insertBefore(faq,tail);
    main.insertBefore(news,tail);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
