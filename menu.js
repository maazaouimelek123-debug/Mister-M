/* Mister M — carte partagée par index.html et admin.html */
/* ---------------- Données du menu (fidèles au menu papier) ---------------- */
const MENU = [
  { id:"cafes", label:"Cafés & Thés", groups:[
    { title:"Coffee & Espresso", items:[
      {n:"Expresse",p:2.4},{n:"Américain",p:2.6},{n:"Cappucin",p:2.8},{n:"Café Crème",p:3},
      {n:"Café Turc",p:3.5},{n:"Café Turc Spécial",p:7.5,d:"La préparation signature de la maison"},
      {n:"Chocolat au Lait",p:3.5},{n:"Cappuccino",p:5},{n:"Liégeois",p:6.5},{n:"Chocolat Chaud",p:6.5}
    ]},
    { title:"Suppléments café", items:[{n:"Nestlé",p:1.5},{n:"Arôme",p:1}]},
    { title:"Thés", items:[
      {n:"Thé Normal",p:2},{n:"Infusion",p:3},{n:"Thé aux Amandes",p:5.5},{n:"Thé aux Pignons",p:8},{n:"Thé Baklewa",p:10}
    ]},
    { title:"Macchiato", items:[
      {n:"Macchiato Caramel",p:5},{n:"Macchiato Noisette",p:5},{n:"Macchiato Vanille",p:5},{n:"Macchiato Chocolat",p:5}
    ]},
    { title:"Ice Latte", items:[
      {n:"Ice Latte Vanille",p:5.5},{n:"Ice Latte Caramel",p:5.5},{n:"Ice Latte Noisette",p:5.5},{n:"Ice Latte Chocolat",p:5.5}
    ]}
  ]},
  { id:"glaces", label:"Douceurs glacées", groups:[
    { title:"Affogato", items:[
      {n:"Affogato Amande",p:7.5},{n:"Affogato Noisette",p:8},{n:"Affogato Cajou",p:8.5},{n:"Affogato Pistache",p:9.5}
    ]},
    { title:"Frappuccino", items:[
      {n:"Frappuccino Café",p:8},{n:"Frappuccino Caramel",p:8.5},{n:"Frappuccino Noisette",p:8.5},{n:"Frappuccino Cookies",p:8.5},{n:"Frappuccino Oreo",p:8.5}
    ]},
    { title:"Smoothies", items:[
      {n:"Smoothie Menthe-Citron",p:5.5},{n:"Smoothie Kiwi-Banane",p:5.5},{n:"Smoothie Fraise-Banane",p:5.5},{n:"Smoothie Chocolat-Banane",p:5.5},{n:"Smoothie Fruits Rouges",p:10}
    ]},
    { title:"Milk-Shakes", items:[
      {n:"Milkshake Spéculos",p:10},{n:"Milkshake Oreo",p:10},{n:"Milkshake Kinder Bueno",p:10},{n:"Milkshake Nutella",p:10},
      {n:"Milkshake Snickers",p:10},{n:"Milkshake Cerise-Banane",p:10},{n:"Milkshake Framboise",p:10},
      {n:"Milkshake Mister M",p:14,d:"Le shake signature de la maison"}
    ]}
  ]},
  { id:"frais", label:"Mojitos & Jus", groups:[
    { title:"Mojitos", note:"Deux formats disponibles : classique ou grand.", items:[
      {n:"Mojito Virgin",v:[{l:"Classique",p:7},{l:"Grand",p:11}]},
      {n:"Mojito Fruits Rouges",v:[{l:"Classique",p:9},{l:"Grand",p:12}]},
      {n:"Mojito Blue",v:[{l:"Classique",p:8},{l:"Grand",p:11}]},
      {n:"Mojito Black",v:[{l:"Classique",p:9},{l:"Grand",p:12}]},
      {n:"Mojito Pinacolada",v:[{l:"Classique",p:10},{l:"Grand",p:13}]},
      {n:"Mojito Mister M",p:15,d:"La création exclusive de la maison"}
    ]},
    { title:"Jus frais", items:[
      {n:"Citronnade",p:4},{n:"Jus d'Orange",p:4},{n:"Jus de Fraise",p:6},{n:"Citronnade aux Amandes",p:6},
      {n:"Jus de Kiwi",p:7.5},{n:"Jus Kiwi-Banane",p:9},{n:"Jus Fraise-Banane",p:9},{n:"Jus Banane-Datte",p:10},
      {n:"Jus Fruits Secs",p:null},{n:"Cocktail Mister M",p:15,d:"Le cocktail de fruits signature"}
    ]},
    { title:"Boissons", items:[
      {n:"Eau Minérale 0.5L",p:1.2},{n:"Eau Minérale 1L",p:2},{n:"Eau Minérale Safia",p:2.5},{n:"Soda (Coca, Fanta, Sprite...)",p:3}
    ]}
  ]},
  { id:"patisseries", label:"Pâtisseries", groups:[
    { title:"Viennoiseries & Gâteaux", items:[
      {n:"Croissant",p:2.5},{n:"Croissant Chocolat",p:4.5},{n:"Croissant au Choix",p:4.5},
      {n:"Brownies",p:7},{n:"Cheesecake",p:7},{n:"Tiramisu",p:7},
      {n:"Fondant Chocolat",p:7},{n:"Fondant Noisette",p:8},{n:"Fondant Pistache",p:9},
      {n:"Gâteau Chocolat",p:7},{n:"Gâteau Noisette",p:8},{n:"Gâteau Pistache",p:9},
      {n:"Banana Split",p:14}
    ]}
  ]},
  { id:"crepes", label:"Crêpes", groups:[
    { title:"Crêpes salées", items:[
      {n:"Crêpe Thon Fromage",p:9},{n:"Crêpe Jambon Fromage",p:9},
      {n:"Crêpe Spéciale",p:11,d:"Thon, fromage, œuf, jambon"},
      {n:"Crêpe Mister M",p:15,d:"Thon, fromage, œuf, sauce blanche"}
    ]},
    { title:"Crêpes sucrées", items:[
      {n:"Crêpe Chocolat",p:6.5},{n:"Crêpe Croustillante",p:7.5},{n:"Crêpe Chocolat Fruits Secs",p:9.5},
      {n:"Crêpe Chocolat Banane",p:10.5},{n:"Crêpe Nutella",p:11},{n:"Crêpe Nutella Banane",p:13},
      {n:"Crêpe Nutella Fruits Secs",p:13},{n:"Crêpe Spéciale Sucrée",p:13}
    ]}
  ]},
  { id:"restau", label:"Restau M&M", groups:[
    { title:"Pizzas", items:[
      {n:"Pizza Margueritta",p:13},{n:"Pizza Champignon",p:16},{n:"Pizza Neptune",p:18},{n:"Pizza Sicilienne",p:18},
      {n:"Pizza Peperoni",p:18},{n:"Pizza Poulet-Chawerma",p:20},{n:"Pizza 4 Fromages",p:24}
    ]},
    { title:"Salades", items:[{n:"Salade César",p:13},{n:"Salade Tunisienne",p:9}]},
    { title:"Pâtes", items:[{n:"Pâtes Poulet-Champignon",p:18},{n:"Pâtes Bolognaise",p:18},{n:"Pâtes Fruits de Mer",p:24}]},
    { title:"Panini", note:"Prix communiqués en salle.", items:[
      {n:"Panini Fromage",p:null},{n:"Panini Thon",p:null},{n:"Panini Jambon",p:null},{n:"Panini Poulet",p:null}
    ]},
    { title:"Burgers", items:[{n:"Chicken Burger",p:12},{n:"Burger",p:14}]},
    { title:"Omelettes", items:[{n:"Omelette Nature",p:6.5},{n:"Omelette Thon Fromage",p:8.5},{n:"Omelette Spéciale",p:10}]},
    { title:"Cornet", items:[{n:"Cornet Poulet",p:12},{n:"Cornet Poulet Champignon",p:14}]},
    { title:"Baguettes", items:[{n:"Baguette Farcie",p:15},{n:"Baguette Spéciale",p:18}]},
    { title:"Makloub", note:"Prix communiqués en salle.", items:[{n:"Makloub",p:null}]},
    { title:"Suppléments", items:[
      {n:"Gruyère",p:3.5},{n:"Mozzarella",p:3},{n:"Frites",p:3},{n:"Champignon",p:3.5},{n:"Jambon",p:3.5},{n:"Galette",p:2}
    ]}
  ]},
  { id:"chicha", label:"Chicha", groups:[
    { title:"Chicha", items:[
      {n:"Chicha Pomme",p:6.5},{n:"Chicha Menthe",p:6.5},{n:"Chicha Raisin",p:6.5},
      {n:"Chicha Bisquit",p:6.5},{n:"Chicha Love",p:7.5},{n:"Chicha Chikh Mani",p:7.5}
    ]}
  ]},
  { id:"formules", label:"Petit Déj & Enfants", groups:[
    { title:"Petit déjeuner", items:[
      {n:"Formule Express",p:7,d:"Café au choix, croissant ou cake, jus frais au choix, eau 0.5L"},
      {n:"Formule Mister M",p:20,d:"Café, croissant ou cake, jus frais, omelette, charcuterie, ojja, poulet grillé, crêpe sucrée, bsissa, eau 0.5L"},
      {n:"Formule Mister M Duo",p:35,d:"La formule Mister M complète pour 2 personnes"}
    ]},
    { title:"Menu enfant", items:[
      {n:"Menu 1 — Mini Pizza",p:10,d:"Mini pizza au thon, frites, boisson (soda ou jus frais)"},
      {n:"Menu 2 — Mini Crêpe Salée",p:12,d:"Mini crêpe au thon, nuggets, boisson (soda ou jus frais)"},
      {n:"Menu 3 — Mini Crêpe Chocolat",p:12,d:"Mini crêpe au chocolat, boule de glace, jus frais"}
    ]}
  ]}
];

/* ---------------- Modifications de la carte (Supabase) ----------------
   La carte ci-dessus est la référence. La table mister_m_menu_overrides
   ne contient que les changements faits par le Super Admin.            */
function menuKey(cat, g, it){ return cat.id + "|" + g.title + "|" + it.n; }

function applyMenuOverrides(menu, rows, includeHidden){
  const map = {};
  (rows || []).forEach(r => { map[r.item_key] = r; });
  return menu.map(cat => {
    const groups = cat.groups.map(g => {
      const items = g.items.map(it => {
        const key = menuKey(cat, g, it), o = map[key];
        const out = {
          key, n: it.n, p: it.p, d: it.d, hidden: false, ov: o || null,
          orig: { n: it.n, p: it.p, d: it.d, v: it.v ? it.v.map(x => ({ l: x.l, p: x.p })) : null }
        };
        if (it.v) out.v = it.v.map(x => ({ l: x.l, p: x.p }));
        if (o) {
          if (o.name) out.n = o.name;
          if (o.price !== null && o.price !== undefined && !it.v) out.p = Number(o.price);
          if (o.description !== null && o.description !== undefined) out.d = o.description || undefined;
          if (Array.isArray(o.variant_prices) && out.v)
            out.v = out.v.map((x, i) => ({ l: x.l, p: (o.variant_prices[i] !== null && o.variant_prices[i] !== undefined) ? Number(o.variant_prices[i]) : x.p }));
          out.hidden = !!o.hidden;
        }
        return out;
      }).filter(it => includeHidden || !it.hidden);
      return { title: g.title, note: g.note, items };
    }).filter(g => includeHidden || g.items.length);
    return { id: cat.id, label: cat.label, groups };
  }).filter(c => includeHidden || c.groups.length);
}
