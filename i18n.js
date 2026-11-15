/* =====================================================================
   Mister M — Traduction arabe (FR par défaut)
   - AR_MENU   : noms de la carte (clé = libellé français d'origine)
   - AR_UI     : textes générés en JavaScript (panier, commande, suivi…)
   - AR_STATIC : textes fixes de la page, repérés par data-i18n="clé"
   Les noms renommés par le Super Admin s'affichent tels quels.
   ===================================================================== */
const AR_MENU = {
  "Cafés & Thés":"قهوة وشاي","Coffee & Espresso":"قهوة وإسبريسو",
  "Expresse":"إكسبريس","Américain":"أمريكانو","Cappucin":"كابوسان","Café Crème":"قهوة كريم",
  "Café Turc":"قهوة تركية","Café Turc Spécial":"قهوة تركية خاصة",
  "La préparation signature de la maison":"التحضير المميّز للبيت",
  "Chocolat au Lait":"شوكولاتة بالحليب","Cappuccino":"كابتشينو","Liégeois":"لييجوا","Chocolat Chaud":"شوكولاتة ساخنة",
  "Suppléments café":"إضافات القهوة","Nestlé":"نستله","Arôme":"نكهة",
  "Thés":"شاي","Thé Normal":"شاي عادي","Infusion":"منقوع أعشاب","Thé aux Amandes":"شاي باللوز",
  "Thé aux Pignons":"شاي بالصنوبر","Thé Baklewa":"شاي بقلاوة",
  "Macchiato":"ماكياتو","Macchiato Caramel":"ماكياتو كراميل","Macchiato Noisette":"ماكياتو بندق",
  "Macchiato Vanille":"ماكياتو فانيليا","Macchiato Chocolat":"ماكياتو شوكولاتة",
  "Ice Latte":"آيس لاتيه","Ice Latte Vanille":"آيس لاتيه فانيليا","Ice Latte Caramel":"آيس لاتيه كراميل",
  "Ice Latte Noisette":"آيس لاتيه بندق","Ice Latte Chocolat":"آيس لاتيه شوكولاتة",
  "Douceurs glacées":"حلويات مثلّجة",
  "Affogato":"أفوغاتو","Affogato Amande":"أفوغاتو لوز","Affogato Noisette":"أفوغاتو بندق",
  "Affogato Cajou":"أفوغاتو كاجو","Affogato Pistache":"أفوغاتو فستق",
  "Frappuccino":"فرابتشينو","Frappuccino Café":"فرابتشينو قهوة","Frappuccino Caramel":"فرابتشينو كراميل",
  "Frappuccino Noisette":"فرابتشينو بندق","Frappuccino Cookies":"فرابتشينو كوكيز","Frappuccino Oreo":"فرابتشينو أوريو",
  "Smoothies":"سموذي","Smoothie Menthe-Citron":"سموذي نعناع وليمون","Smoothie Kiwi-Banane":"سموذي كيوي وموز",
  "Smoothie Fraise-Banane":"سموذي فراولة وموز","Smoothie Chocolat-Banane":"سموذي شوكولاتة وموز",
  "Smoothie Fruits Rouges":"سموذي فواكه حمراء",
  "Milk-Shakes":"ميلك شيك","Milkshake Spéculos":"ميلك شيك سبيكولوس","Milkshake Oreo":"ميلك شيك أوريو",
  "Milkshake Kinder Bueno":"ميلك شيك كيندر بوينو","Milkshake Nutella":"ميلك شيك نوتيلا",
  "Milkshake Snickers":"ميلك شيك سنيكرز","Milkshake Cerise-Banane":"ميلك شيك كرز وموز",
  "Milkshake Framboise":"ميلك شيك توت العليق","Milkshake Mister M":"ميلك شيك Mister M",
  "Le shake signature de la maison":"الشيك المميّز للبيت",
  "Mojitos & Jus":"موهيتو وعصائر","Mojitos":"موهيتو",
  "Deux formats disponibles : classique ou grand.":"حجمان متوفّران: عادي أو كبير.",
  "Classique":"عادي","Grand":"كبير",
  "Mojito Virgin":"موهيتو فيرجن","Mojito Fruits Rouges":"موهيتو فواكه حمراء","Mojito Blue":"موهيتو بلو",
  "Mojito Black":"موهيتو بلاك","Mojito Pinacolada":"موهيتو بينا كولادا","Mojito Mister M":"موهيتو Mister M",
  "La création exclusive de la maison":"الإبداع الحصري للبيت",
  "Jus frais":"عصائر طازجة","Citronnade":"سيتروناد","Jus d'Orange":"عصير برتقال","Jus de Fraise":"عصير فراولة",
  "Citronnade aux Amandes":"سيتروناد باللوز","Jus de Kiwi":"عصير كيوي","Jus Kiwi-Banane":"عصير كيوي وموز",
  "Jus Fraise-Banane":"عصير فراولة وموز","Jus Banane-Datte":"عصير موز وتمر","Jus Fruits Secs":"عصير فواكه جافة",
  "Cocktail Mister M":"كوكتيل Mister M","Le cocktail de fruits signature":"كوكتيل الفواكه المميّز",
  "Boissons":"مشروبات","Eau Minérale 0.5L":"ماء معدني 0.5 ل","Eau Minérale 1L":"ماء معدني 1 ل",
  "Eau Minérale Safia":"ماء معدني صافية","Soda (Coca, Fanta, Sprite...)":"مشروب غازي (كوكا، فانتا، سبرايت...)",
  "Pâtisseries":"مرطّبات","Viennoiseries & Gâteaux":"معجّنات وكعك",
  "Croissant":"كرواسون","Croissant Chocolat":"كرواسون شوكولاتة","Croissant au Choix":"كرواسون حسب الاختيار",
  "Brownies":"براونيز","Cheesecake":"تشيز كيك","Tiramisu":"تيراميسو",
  "Fondant Chocolat":"فوندان شوكولاتة","Fondant Noisette":"فوندان بندق","Fondant Pistache":"فوندان فستق",
  "Gâteau Chocolat":"كعكة شوكولاتة","Gâteau Noisette":"كعكة بندق","Gâteau Pistache":"كعكة فستق",
  "Banana Split":"بنانا سبليت",
  "Crêpes":"كريب","Crêpes salées":"كريب مالح","Crêpe Thon Fromage":"كريب تن وجبن",
  "Crêpe Jambon Fromage":"كريب جامبون وجبن","Crêpe Spéciale":"كريب خاص",
  "Thon, fromage, œuf, jambon":"تن، جبن، بيض، جامبون","Crêpe Mister M":"كريب Mister M",
  "Thon, fromage, œuf, sauce blanche":"تن، جبن، بيض، صلصة بيضاء",
  "Crêpes sucrées":"كريب حلو","Crêpe Chocolat":"كريب شوكولاتة","Crêpe Croustillante":"كريب مقرمش",
  "Crêpe Chocolat Fruits Secs":"كريب شوكولاتة وفواكه جافة","Crêpe Chocolat Banane":"كريب شوكولاتة وموز",
  "Crêpe Nutella":"كريب نوتيلا","Crêpe Nutella Banane":"كريب نوتيلا وموز",
  "Crêpe Nutella Fruits Secs":"كريب نوتيلا وفواكه جافة","Crêpe Spéciale Sucrée":"كريب حلو خاص",
  "Restau M&M":"مطعم M&M","Pizzas":"بيتزا","Pizza Margueritta":"بيتزا مارغريتا","Pizza Champignon":"بيتزا فطر",
  "Pizza Neptune":"بيتزا نبتون","Pizza Sicilienne":"بيتزا صقلية","Pizza Peperoni":"بيتزا بيبروني",
  "Pizza Poulet-Chawerma":"بيتزا دجاج شاورما","Pizza 4 Fromages":"بيتزا 4 أجبان",
  "Salades":"سلطات","Salade César":"سلطة سيزر","Salade Tunisienne":"سلطة تونسية",
  "Pâtes":"معكرونة","Pâtes Poulet-Champignon":"معكرونة دجاج وفطر","Pâtes Bolognaise":"معكرونة بولونيز",
  "Pâtes Fruits de Mer":"معكرونة بثمار البحر",
  "Panini":"بانيني","Prix communiqués en salle.":"الأسعار تُعلَن في القاعة.",
  "Panini Fromage":"بانيني جبن","Panini Thon":"بانيني تن","Panini Jambon":"بانيني جامبون","Panini Poulet":"بانيني دجاج",
  "Burgers":"برغر","Chicken Burger":"برغر دجاج","Burger":"برغر",
  "Omelettes":"أومليت","Omelette Nature":"أومليت عادي","Omelette Thon Fromage":"أومليت تن وجبن","Omelette Spéciale":"أومليت خاص",
  "Cornet":"كورني","Cornet Poulet":"كورني دجاج","Cornet Poulet Champignon":"كورني دجاج وفطر",
  "Baguettes":"باقات","Baguette Farcie":"باقات محشي","Baguette Spéciale":"باقات خاص",
  "Makloub":"مقلوب",
  "Suppléments":"إضافات","Gruyère":"جبن قرويار","Mozzarella":"موزاريلا","Frites":"فريت",
  "Champignon":"فطر","Jambon":"جامبون","Galette":"غاليت",
  "Chicha":"شيشة","Chicha Pomme":"شيشة تفاح","Chicha Menthe":"شيشة نعناع","Chicha Raisin":"شيشة عنب",
  "Chicha Bisquit":"شيشة بسكويت","Chicha Love":"شيشة لوف","Chicha Chikh Mani":"شيشة شيخ ماني",
  "Petit Déj & Enfants":"فطور الصباح والأطفال","Petit déjeuner":"فطور الصباح",
  "Formule Express":"فطور إكسبريس",
  "Café au choix, croissant ou cake, jus frais au choix, eau 0.5L":"قهوة حسب الاختيار، كرواسون أو كيك، عصير طازج حسب الاختيار، ماء 0.5 ل",
  "Formule Mister M":"فطور Mister M",
  "Café, croissant ou cake, jus frais, omelette, charcuterie, ojja, poulet grillé, crêpe sucrée, bsissa, eau 0.5L":"قهوة، كرواسون أو كيك، عصير طازج، أومليت، لحوم باردة، عجّة، دجاج مشوي، كريب حلو، بسيسة، ماء 0.5 ل",
  "Formule Mister M Duo":"فطور Mister M لشخصين",
  "La formule Mister M complète pour 2 personnes":"فطور Mister M الكامل لشخصين",
  "Menu enfant":"قائمة الأطفال",
  "Menu 1 — Mini Pizza":"قائمة 1 — ميني بيتزا",
  "Mini pizza au thon, frites, boisson (soda ou jus frais)":"ميني بيتزا بالتن، فريت، مشروب (غازي أو عصير طازج)",
  "Menu 2 — Mini Crêpe Salée":"قائمة 2 — ميني كريب مالح",
  "Mini crêpe au thon, nuggets, boisson (soda ou jus frais)":"ميني كريب بالتن، ناغتس، مشروب (غازي أو عصير طازج)",
  "Menu 3 — Mini Crêpe Chocolat":"قائمة 3 — ميني كريب شوكولاتة",
  "Mini crêpe au chocolat, boule de glace, jus frais":"ميني كريب بالشوكولاتة، كرة مثلّجات، عصير طازج"
};

const AR_UI = {
  "DT":"د.ت","Prix en salle":"السعر في القاعة","Ajouter":"أضف",
  "Votre panier":"سلتك","Finaliser la commande":"إتمام الطلب",
  "Votre nom *":"اسمك *","Ex : Ahmed":"مثال: أحمد","Téléphone (optionnel)":"الهاتف (اختياري)",
  "Type de commande *":"نوع الطلب *","Sur place":"في المقهى","À emporter":"للأخذ",
  "Numéro de table":"رقم الطاولة","Ex : 4":"مثال: 4","Note (optionnel)":"ملاحظة (اختياري)",
  "Sans sucre, bien chaud...":"بدون سكر، ساخن جدًا...","Merci d'indiquer votre nom.":"يرجى إدخال اسمك.",
  "Total":"المجموع","Confirmer la commande":"تأكيد الطلب","← Revenir au panier":"→ العودة إلى السلة",
  "Votre panier est vide.":"سلتك فارغة.","Laissez-vous tenter par notre menu ✨":"اكتشف قائمتنا ✨",
  "Voir le menu":"عرض القائمة","/ unité":"/ للوحدة","Commander":"اطلب","Envoi en cours...":"جارٍ الإرسال...",
  "Connexion indisponible — merci de commander au comptoir.":"الاتصال غير متوفر — يرجى الطلب من الكونتوار.",
  "Oups, l'envoi a échoué. Vérifiez votre connexion et réessayez.":"عذرًا، فشل الإرسال. تحقّق من اتصالك وأعد المحاولة.",
  "Reçue":"تم الاستلام","En préparation":"قيد التحضير","Prête":"جاهز","Servie":"تم التقديم",
  "Suivi de commande":"تتبّع الطلب","Commande":"الطلب","N°":"رقم",
  "Cette commande a été annulée.":"تم إلغاء هذا الطلب.",
  "Adressez-vous au comptoir pour plus d'informations.":"توجّه إلى الكونتوار لمزيد من المعلومات.",
  "Votre commande a bien été reçue — elle sera prise en charge dans un instant.":"تم استلام طلبك — سيتم تحضيره بعد لحظات.",
  "C'est parti, votre commande est en préparation !":"انطلقنا، طلبك قيد التحضير!",
  "Votre commande est prête 🎉":"طلبك جاهز 🎉",
  "Bonne dégustation ! Merci de votre visite.":"بالهناء والشفاء! شكرًا لزيارتك.",
  "Nouvelle commande":"طلب جديد",
  "Ajouté au panier":"أُضيف إلى السلة","Oups":"عذرًا","Info":"معلومة",
  "Bon appétit ☕":"بالهناء ☕","Quantité : ":"الكمية: ",
  "Votre panier a été mis à jour selon la carte du jour.":"تم تحديث سلتك حسب قائمة اليوم."
};

const AR_STATIC = {
  "nav.about":"من نحن","nav.menu":"القائمة","nav.contact":"اتصل بنا","nav.cart":"السلة",
  "brand.sub":"قاعة شاي · مرناق",
  "hero.script":"قاعة شاي ومطعم","hero.lieu":"مرناق · تونس",
  "hero.sub":"قهوة تركية، ميلك شيك مميّز وأكل منزلي. تفضّلوا، والباقي علينا.",
  "hero.cta1":"اكتشف القائمة","hero.cta2":"كيف تصلنا",
  "hero.i1":"مفتوح<strong>7 أيام / 7</strong>","hero.i2":"في المقهى<strong>وللأخذ</strong>","hero.i3":"مباراة السهرة<strong>شاشة كبيرة</strong>",
  "about.script":"بيتنا","about.h2":"أكثر من مجرد مقهى",
  "about.p1":"في قلب مرناق، يجمع Mister M كل ما يصنع قاعة شاي حقيقية: قهوة متقنة، أكل سخي وقاعة مهيّأة للجلوس — مع الأصدقاء، مع العائلة أو أمام مباراة السهرة على الشاشة الكبيرة.",
  "about.p2":"فطور كامل، كريب مالح أو حلو، بيتزا في الفرن، شيشة وحلويات مثلّجة: القائمة ترافقكم طوال اليوم، من أول إسبريسو إلى آخر موهيتو.",
  "about.pt1":"<strong>قهوة تركية خاصة</strong><span>تحضيرنا المميّز</span>",
  "about.pt2":"<strong>مطبخ مطعم M&amp;M</strong><span>بيتزا، معكرونة وبرغر منزلي</span>",
  "about.pt3":"<strong>ركن العائلة</strong><span>قائمة خاصة بالأطفال</span>",
  "about.pt4":"<strong>أجواء المباريات</strong><span>شاشة كبيرة وقاعة مكيّفة</span>",
  "menu.script":"القائمة","menu.h2":"قائمتنا",
  "menu.p":"أضيفوا ما تشتهون إلى السلة واطلبوا مباشرة من طاولتكم — أو للأخذ.",
  "contact.script":"في انتظاركم","contact.h2":"كيف تصلنا",
  "c.addr.h":"العنوان","c.addr.p":"مرناق، بن عروس<br>تونس","c.addr.a":"الاتجاهات ↗",
  "c.hours.h":"أوقات العمل","c.hours.open":"مفتوح 7 أيام / 7","c.hours.p":"الفطور يُقدَّم منذ الافتتاح",
  "c.place.h":"في المقهى","c.place.tags":"<span>قاعة مكيّفة</span><span>شاشة كبيرة</span><span>شيشة</span><span>ركن العائلة</span>",
  "c.order.h":"الطلب","c.order.p":"من طاولتكم أو للأخذ، مباشرة عبر السلة.","c.order.a":"← عرض القائمة",
  "map.sub":"قاعة شاي ومطعم · مرناق","map.go":"اذهب",
  "footer.copy":"© 2026 Mister M Coffee — قاعة شاي · مرناق. جميع الحقوق محفوظة.","footer.staff":"فضاء الطاقم"
};

/* ---------------- Moteur ---------------- */
let LANG = (function(){
  try{
    const q = new URLSearchParams(location.search).get("lang");
    if(q==="ar"||q==="fr") return q;
    return localStorage.getItem("mm_lang") || "fr";
  }catch(e){ return "fr"; }
})();
const T  = s => (LANG==="ar" && AR_UI[s]!==undefined) ? AR_UI[s] : s;
const TM = s => (LANG==="ar" && s && AR_MENU[s]!==undefined) ? AR_MENU[s] : s;

/* Nom d'un article de la carte : traduction de l'original, sauf s'il a été renommé par le Super Admin */
function itemName(it){ return (it.ov && it.ov.name) ? it.n : TM(it.orig ? it.orig.n : it.n); }
function itemDesc(it){
  if(it.ov && it.ov.description!==null && it.ov.description!==undefined) return it.d;
  return it.d ? TM(it.orig ? it.orig.d : it.d) : it.d;
}
/* Nom d'une ligne du panier (ex. « Mojito Blue (Grand) ») */
function cartName(name){
  const m = /^(.*) \(([^()]+)\)$/.exec(name);
  return m ? TM(m[1])+" ("+TM(m[2])+")" : TM(name);
}

function applyStaticI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    if(el.dataset.fr===undefined) el.dataset.fr = el.innerHTML;
    const ar = AR_STATIC[el.dataset.i18n];
    el.innerHTML = (LANG==="ar" && ar!==undefined) ? ar : el.dataset.fr;
  });
  const img = document.querySelector(".apropos-img img");
  if(img){ if(!img.dataset.fr) img.dataset.fr = img.alt; img.alt = LANG==="ar" ? "أجواء دافئة في مقهى" : img.dataset.fr; }
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG==="ar" ? "rtl" : "ltr";
  const b = document.getElementById("langBtn");
  if(b){ b.textContent = LANG==="ar" ? "FR" : "عربي"; b.setAttribute("aria-label", LANG==="ar" ? "Passer en français" : "التبديل إلى العربية"); }
}
