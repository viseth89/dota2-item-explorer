export let items = [{
    "id": "magic-wand",
    "name": "Magic Wand",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/magic-wand-7a4f7e78733470ac31dd40d01c85661493535044e799bc6676971fb90e2ed747.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">3</span> <span class=\"label\">All Attributes</span></div></div>",
    "statsObject": {"Intelligence": 3.0, "Strength": 3.0, "Agility": 3.0},
    "statsArray": ["Intelligence", "Strength", "Agility"]
}, {
    "id": "power-treads",
    "name": "Power Treads",
    "price": 1400,
    "imageUrl": "https://www.dotabuff.com/assets/items/power-treads-ead692931ccfbcbb43f63b29d1282eb21a387e13eea6763a2b4117f8f3efc0cc.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">45</span> <span class=\"label\">Movement Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Selected Attribute</span></div><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Attack Speed</span></div></div>",
    "statsObject": {
        "Movement Speed": 45.0,
        "Attack Speed": 25.0,
        "Intelligence": 10.0,
        "Strength": 10.0,
        "Agility": 10.0
    },
    "statsArray": ["Movement Speed", "Attack Speed", "Intelligence", "Strength", "Agility"]
}, {
    "id": "blink-dagger",
    "name": "Blink Dagger",
    "price": 2250,
    "imageUrl": "https://www.dotabuff.com/assets/items/blink-dagger-352d6fb207f49668bc8ba248b86b949143986017a7f960b3ac28165a135f601a.jpg",
    "statsHtml": "",
    "statsObject": {},
    "statsArray": []
}, {
    "id": "black-king-bar",
    "name": "Black King Bar",
    "price": 4050,
    "imageUrl": "https://www.dotabuff.com/assets/items/black-king-bar-fdce6ae49e6393d04aa3e258c70d43ddae5a9eba4fae8d46b5594a69d8f0fe5c.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">24</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Strength": 10.0, "Damage": 24.0},
    "statsArray": ["Strength", "Damage"]
}, {
    "id": "aghanims-scepter",
    "name": "Aghanim's Scepter",
    "price": 4200,
    "imageUrl": "https://www.dotabuff.com/assets/items/aghanims-scepter-72bdb9aee9187bc224f24985bf92100a34b1ba630991a240d7ccb26ba899079e.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">All Attributes</span></div><div class=\"stat attribute\">+ <span class=\"value\">175</span> <span class=\"label\">Health</span></div><div class=\"stat attribute\">+ <span class=\"value\">175</span> <span class=\"label\">Mana</span></div></div>",
    "statsObject": {"Health": 175.0, "Mana": 175.0, "Intelligence": 10.0, "Strength": 10.0, "Agility": 10.0},
    "statsArray": ["Health", "Mana", "Intelligence", "Strength", "Agility"]
}, {
    "id": "phase-boots",
    "name": "Phase Boots",
    "price": 1500,
    "imageUrl": "https://www.dotabuff.com/assets/items/phase-boots-0ab5b4cd6fd735cda7c7b7682386efc101e2b464fddcfc707e23e734ffea7ecd.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">45</span> <span class=\"label\">Movement Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">18</span> <span class=\"label\">Damage (MELEE)</span></div><div class=\"stat attribute\">+ <span class=\"value\">12</span> <span class=\"label\">Damage (RANGED)</span></div><div class=\"stat attribute\">+ <span class=\"value\">4</span> <span class=\"label\">Armor</span></div></div>",
    "statsObject": {"Movement Speed": 45.0, "Armor": 4.0, "Damage": "12 / 18"},
    "statsArray": ["Movement Speed", "Armor", "Damage"]
}, {
    "id": "tranquil-boots",
    "name": "Tranquil Boots",
    "price": 925,
    "imageUrl": "https://www.dotabuff.com/assets/items/tranquil-boots-76c5cdb0e48894bdccd475d3547a0ead656741461de4f06feaba182c30467aab.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">70</span> <span class=\"label\">Movement Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">14</span> <span class=\"label\">HP Regeneration</span></div></div>",
    "statsObject": {"Movement Speed": 70.0, "HP Regeneration": 14.0},
    "statsArray": ["Movement Speed", "HP Regeneration"]
}, {
    "id": "wraith-band",
    "name": "Wraith Band",
    "price": 510,
    "imageUrl": "https://www.dotabuff.com/assets/items/wraith-band-18366a5bf1f31f382a101d9f7462c2be86fa7c07c14a14d0dcb2cf5fb5d2a7ec.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">5</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">2</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">2</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">5</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">1.5</span> <span class=\"label\">Armor</span></div></div>",
    "statsObject": {"Agility": 5.0, "Strength": 2.0, "Intelligence": 2.0, "Attack Speed": 5.0, "Armor": 1.5},
    "statsArray": ["Agility", "Strength", "Intelligence", "Attack Speed", "Armor"]
}, {
    "id": "null-talisman",
    "name": "Null Talisman",
    "price": 510,
    "imageUrl": "https://www.dotabuff.com/assets/items/null-talisman-6c0884d6f50ef28de27bd936fde33e6829cd8b695073fad08084f65ab5837188.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">5</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">2</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">2</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">3%</span> <span class=\"label\">Spell Amplification</span></div><div class=\"stat attribute\">+ <span class=\"value\">0.6</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {
        "Intelligence": 5.0,
        "Strength": 2.0,
        "Agility": 2.0,
        "Spell Amplification": "3%",
        "Mana Regeneration": 0.6
    },
    "statsArray": ["Intelligence", "Strength", "Agility", "Spell Amplification", "Mana Regeneration"]
}, {
    "id": "arcane-boots",
    "name": "Arcane Boots",
    "price": 1400,
    "imageUrl": "https://www.dotabuff.com/assets/items/arcane-boots-d9f539b66d3cc7b66772e3fbba0c18d0572e64ba2d70bf17fc08627b07ef49fa.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">45</span> <span class=\"label\">Movement Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">250</span> <span class=\"label\">Mana</span></div></div>",
    "statsObject": {"Movement Speed": 45.0, "Mana": 250.0},
    "statsArray": ["Movement Speed", "Mana"]
}, {
    "id": "boots-of-travel",
    "name": "Boots of Travel",
    "price": 2500,
    "imageUrl": "https://www.dotabuff.com/assets/items/boots-of-travel-3da37632a51968545a0ee68bf7e644691f8f4b79fe06adf24bb10a5319f66ef0.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">110</span> <span class=\"label\">Movement Speed</span></div><div class=\"stat effect\"><span class=\"label\">TOWN PORTAL SCROLL COOLDOWN:</span> <span class=\"value\">40</span></div></div>",
    "statsObject": {"Movement Speed": 110.0},
    "statsArray": ["Movement Speed"]
}, {
    "id": "aether-lens",
    "name": "Aether Lens",
    "price": 2275,
    "imageUrl": "https://www.dotabuff.com/assets/items/aether-lens-6fd02713ff2d3d2803f73eee90ab135037f3354415d689b8a415c07c3c57c55b.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">300</span> <span class=\"label\">Mana</span></div><div class=\"stat attribute\">+ <span class=\"value\">3.0</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Mana": 300.0, "Mana Regeneration": 3.0, "Cast Range": 250.0},
    "statsArray": ["Mana", "Mana Regeneration", "Cast Range"]
}, {
    "id": "quelling-blade",
    "name": "Quelling Blade",
    "price": 130,
    "imageUrl": "https://www.dotabuff.com/assets/items/quelling-blade-4bbd2e05b0275d116ba7edb8cac4d186123f37645ab63dfed7f2d05cf905cf79.jpg",
    "statsHtml": "+ 6 Damage (RANGED) (Creep)<br>+ 13 Damage (MELEE) (Creep)",
    "statsObject": {"Damage": "6 / 13"},
    "statsArray": ["Damage"]
}, {
    "id": "euls-scepter-of-divinity",
    "name": "Eul's Scepter of Divinity",
    "price": 2725,
    "imageUrl": "https://www.dotabuff.com/assets/items/euls-scepter-of-divinity-a918c5d71bdf0c63e6a1d5406bb460d1f317ae6d4a4ffed2980530327fe54d58.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">3.5</span> <span class=\"label\">Mana Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">Movement Speed</span></div></div>",
    "statsObject": {"Intelligence": 10.0, "Mana Regeneration": 3.5, "Movement Speed": 20.0},
    "statsArray": ["Intelligence", "Mana Regeneration", "Movement Speed"]
}, {
    "id": "boots-of-speed",
    "name": "Boots of Speed",
    "price": 500,
    "imageUrl": "https://www.dotabuff.com/assets/items/boots-of-speed-ef8d597b932f47378a608266f08441f8a32f13cc6d41025e2fd6cc9433f556c6.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">45</span> <span class=\"label\">Movement Speed</span></div></div>",
    "statsObject": {"Movement Speed": 45.0},
    "statsArray": ["Movement Speed"]
}, {
    "id": "blade-mail",
    "name": "Blade Mail",
    "price": 2225,
    "imageUrl": "https://www.dotabuff.com/assets/items/blade-mail-0091777d950077fa252249f45e1092e2ee81b0564258b8af20e1c5c5cdffefe5.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">28</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">6</span> <span class=\"label\">Armor</span></div></div>",
    "statsObject": {"Damage": 28.0, "Armor": 6.0},
    "statsArray": ["Damage", "Armor"]
}, {
    "id": "bracer",
    "name": "Bracer",
    "price": 510,
    "imageUrl": "https://www.dotabuff.com/assets/items/bracer-b85e634c2297939e6d7644371e7e0f7488d3883d92d6aa2862f56dcd37e88b99.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">5</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">2</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">2</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">3</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">0.75</span> <span class=\"label\">HP Regeneration</span></div></div>",
    "statsObject": {"Strength": 5.0, "Agility": 2.0, "Intelligence": 2.0, "Damage": 3.0, "HP Regeneration": 0.75},
    "statsArray": ["Strength", "Agility", "Intelligence", "Damage", "HP Regeneration"]
}, {
    "id": "abyssal-blade",
    "name": "Abyssal Blade",
    "price": 6625,
    "imageUrl": "https://www.dotabuff.com/assets/items/abyssal-blade-7e5adf631e435735bb318686075441eec7e7f8776e4ebe9f72ce751bbca74d85.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">250</span> <span class=\"label\">Health</span></div><div class=\"stat attribute\">+ <span class=\"value\">10.0</span> <span class=\"label\">HP Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Strength</span></div></div>",
    "statsObject": {"Damage": 25.0, "Health": 250.0, "HP Regeneration": 10.0, "Strength": 10.0},
    "statsArray": ["Damage", "Health", "HP Regeneration", "Strength"]
}, {
    "id": "battle-fury",
    "name": "Battle Fury",
    "price": 4130,
    "imageUrl": "https://www.dotabuff.com/assets/items/battle-fury-203bd771b2dac1bba198ceacc7431c4b75ddf6a742fad58a913545cc18a9328f.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">55</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">7.5</span> <span class=\"label\">HP Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">3.25</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Damage": 55.0, "HP Regeneration": 7.5, "Mana Regeneration": 3.25},
    "statsArray": ["Damage", "HP Regeneration", "Mana Regeneration"]
}, {
    "id": "desolator",
    "name": "Desolator",
    "price": 3500,
    "imageUrl": "https://www.dotabuff.com/assets/items/desolator-25436b0c48d6752369b4fae9a9db3e70de24b4e68fbd513da6d93054706c29ca.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">55</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Damage": 55.0},
    "statsArray": ["Damage"]
}, {
    "id": "glimmer-cape",
    "name": "Glimmer Cape",
    "price": 1950,
    "imageUrl": "https://www.dotabuff.com/assets/items/glimmer-cape-c89bedc9cf83db402422086f307d52c0bec17218e7a0b94186673d011c9cf98a.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">15%</span> <span class=\"label\">Magic Resistance</span></div></div>",
    "statsObject": {"Magic Resistance": "15%"},
    "statsArray": ["Magic Resistance"]
}, {
    "id": "force-staff",
    "name": "Force Staff",
    "price": 2175,
    "imageUrl": "https://www.dotabuff.com/assets/items/force-staff-86049f475a640e3220f20f4d6ddae33cfb392011844306eaa514255d9dbd4a9c.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">2.5</span> <span class=\"label\">HP Regeneration</span></div></div>",
    "statsObject": {"Intelligence": 10.0, "HP Regeneration": 2.5},
    "statsArray": ["Intelligence", "HP Regeneration"]
}, {
    "id": "manta-style",
    "name": "Manta Style",
    "price": 4600,
    "imageUrl": "https://www.dotabuff.com/assets/items/manta-style-23dd1f7dc982b93e8b7b90ec76fc776fd22d88b94403aecfc4017d37625eea96.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">26</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">12</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">8%</span> <span class=\"label\">Movement Speed</span></div></div>",
    "statsObject": {
        "Strength": 10.0,
        "Agility": 26.0,
        "Intelligence": 10.0,
        "Attack Speed": 12.0,
        "Movement Speed": "8%"
    },
    "statsArray": ["Strength", "Agility", "Intelligence", "Attack Speed", "Movement Speed"]
}, {
    "id": "maelstrom",
    "name": "Maelstrom",
    "price": 2700,
    "imageUrl": "https://www.dotabuff.com/assets/items/maelstrom-324a4325fe41951a56d1a8b8aae642cbc68975a32bf7963e13fbc10685b097cb.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">24</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Damage": 24.0},
    "statsArray": ["Damage"]
}, {
    "id": "monkey-king-bar",
    "name": "Monkey King Bar",
    "price": 4975,
    "imageUrl": "https://www.dotabuff.com/assets/items/monkey-king-bar-cab629aaa7a1b3a7253044b66d88e793f7164340435dd14be8306e342ca007f6.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">40</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">35</span> <span class=\"label\">Attack Speed</span></div></div>",
    "statsObject": {"Damage": 40.0, "Attack Speed": 35.0},
    "statsArray": ["Damage", "Attack Speed"]
}, {
    "id": "wind-lace",
    "name": "Wind Lace",
    "price": 250,
    "imageUrl": "https://www.dotabuff.com/assets/items/wind-lace-c8d6ebda867c5e5a56c5721575da561d9b845eb2f67ef697f027231586c7b245.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">Movement Speed</span></div></div>",
    "statsObject": {"Movement Speed": 20.0},
    "statsArray": ["Movement Speed"]
}, {
    "id": "magic-stick",
    "name": "Magic Stick",
    "price": 200,
    "imageUrl": "https://www.dotabuff.com/assets/items/magic-stick-c4e00e3b2c0ee68b6e5e5d6014ede8b83ef87531a56169b675965f19a03d4dd6.jpg",
    "statsHtml": "",
    "statsObject": {},
    "statsArray": []
}, {
    "id": "soul-ring",
    "name": "Soul Ring",
    "price": 740,
    "imageUrl": "https://www.dotabuff.com/assets/items/soul-ring-496d71334ad18f5fa7d67b7cba97c9f881fbd599b4462fe945679930ce9217ce.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">6</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">2.0</span> <span class=\"label\">Armor</span></div></div>",
    "statsObject": {"Strength": 6.0, "Armor": 2.0},
    "statsArray": ["Strength", "Armor"]
}, {
    "id": "hand-of-midas",
    "name": "Hand of Midas",
    "price": 2200,
    "imageUrl": "https://www.dotabuff.com/assets/items/hand-of-midas-19054292782cddc8844f4972cbbadd296c4495b5a44598e596f897de92208068.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">40</span> <span class=\"label\">Attack Speed</span></div></div>",
    "statsObject": {"Attack Speed": 40.0},
    "statsArray": ["Attack Speed"]
}, {
    "id": "ghost-scepter",
    "name": "Ghost Scepter",
    "price": 1500,
    "imageUrl": "https://www.dotabuff.com/assets/items/ghost-scepter-d4f437521cdc455ffb04e4a934764d410ce78c8e240b29ea574114fe9a582ddf.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">5</span> <span class=\"label\">All Attributes</span></div></div>",
    "statsObject": {"Intelligence": 5.0, "Strength": 5.0, "Agility": 5.0},
    "statsArray": ["Intelligence", "Strength", "Agility"]
}, {
    "id": "orb-of-corrosion",
    "name": "Orb of Corrosion",
    "price": 925,
    "imageUrl": "https://www.dotabuff.com/assets/items/orb-of-corrosion-857ec798e0978e81f23121a0a2286aba79153267944b8dfc35838e8eba33f58a.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">150</span> <span class=\"label\">Health</span></div></div>",
    "statsObject": {"Health": 150.0},
    "statsArray": ["Health"]
}, {
    "id": "ogre-axe",
    "name": "Ogre Axe",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/ogre-axe-90957ea8daa3d1b8fd794206f14e8836254993409a0af7a400b45305ea2675e9.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Strength</span></div></div>",
    "statsObject": {"Strength": 10.0},
    "statsArray": ["Strength"]
}, {
    "id": "daedalus",
    "name": "Daedalus",
    "price": 5150,
    "imageUrl": "https://www.dotabuff.com/assets/items/daedalus-6650c41f60ba1d9f15c8e37cc122e9de260d5c86e6c220aaf1c86f26ad9b79c7.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">88</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Damage": 88.0},
    "statsArray": ["Damage"]
}, {
    "id": "sange-and-yasha",
    "name": "Sange and Yasha",
    "price": 4100,
    "imageUrl": "https://www.dotabuff.com/assets/items/sange-and-yasha-73058ad52402e43fded8b4e943e63bbdfed5b506f5431f7f9b7abfd294af1633.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">16</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">16</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">25%</span> <span class=\"label\">Status Resistance</span></div><div class=\"stat attribute\">+ <span class=\"value\">16</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">10%</span> <span class=\"label\">Movement Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">30%</span> <span class=\"label\">Self HP Regen and Lifesteal Amp</span></div></div>",
    "statsObject": {
        "Strength": 16.0,
        "Agility": 16.0,
        "Status Resistance": "25%",
        "Attack Speed": 16.0,
        "Movement Speed": "10%",
        "Self HP Regen and Lifesteal Amp": "30%"
    },
    "statsArray": ["Strength", "Agility", "Status Resistance", "Attack Speed", "Movement Speed", "Self HP Regen and Lifesteal Amp"]
}, {
    "id": "skull-basher",
    "name": "Skull Basher",
    "price": 2950,
    "imageUrl": "https://www.dotabuff.com/assets/items/skull-basher-d61da321754816905fde47972c8bfacccd244cc4ce4d5c99e125c06f201edfca.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Strength</span></div></div>",
    "statsObject": {"Damage": 25.0, "Strength": 10.0},
    "statsArray": ["Damage", "Strength"]
}, {
    "id": "eye-of-skadi",
    "name": "Eye of Skadi",
    "price": 5300,
    "imageUrl": "https://www.dotabuff.com/assets/items/eye-of-skadi-16fa80822bd539e590bcf2d9444c57d217c84ced7451169b8c006aeff55247c3.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">All Attributes</span></div><div class=\"stat attribute\">+ <span class=\"value\">200</span> <span class=\"label\">Health</span></div><div class=\"stat attribute\">+ <span class=\"value\">200</span> <span class=\"label\">Mana</span></div></div>",
    "statsObject": {"Health": 200.0, "Mana": 200.0, "Intelligence": 25.0, "Strength": 25.0, "Agility": 25.0},
    "statsArray": ["Health", "Mana", "Intelligence", "Strength", "Agility"]
}, {
    "id": "iron-branch",
    "name": "Iron Branch",
    "price": 50,
    "imageUrl": "https://www.dotabuff.com/assets/items/iron-branch-e66399d58be2b8b2d34e49dffb7304b82e0b1f06eb606ea50ed1b60bbbf1aad4.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">1</span> <span class=\"label\">All Attributes</span></div></div>",
    "statsObject": {"Intelligence": 1.0, "Strength": 1.0, "Agility": 1.0},
    "statsArray": ["Intelligence", "Strength", "Agility"]
}, {
    "id": "orchid-malevolence",
    "name": "Orchid Malevolence",
    "price": 3475,
    "imageUrl": "https://www.dotabuff.com/assets/items/orchid-malevolence-b83d0927509c27bde54e0209e732c6a57198637ffcee94a5b1681989d70a5bb8.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">30</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">4.0</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Intelligence": 20.0, "Attack Speed": 25.0, "Damage": 30.0, "Mana Regeneration": 4.0},
    "statsArray": ["Intelligence", "Attack Speed", "Damage", "Mana Regeneration"]
}, {
    "id": "assault-cuirass",
    "name": "Assault Cuirass",
    "price": 5075,
    "imageUrl": "https://www.dotabuff.com/assets/items/assault-cuirass-9240b214591338ae654a504703df02ab6ddbaf6e0b3020c0bca7ddd2e3de467e.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">30</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Armor</span></div></div>+ 30 Attack Speed (Aura)<br>+ 5 Armor (Aura)",
    "statsObject": {"Attack Speed": 60.0, "Armor": 15.0, "Aura": 1.0},
    "statsArray": ["Attack Speed", "Armor", "Aura"]
}, {
    "id": "linkens-sphere",
    "name": "Linken's Sphere",
    "price": 4600,
    "imageUrl": "https://www.dotabuff.com/assets/items/linkens-sphere-f02a0f5e610d90ffe5e3502bd63b72457d1060792be23999ecd2c84d0d273d50.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">14</span> <span class=\"label\">All Attributes</span></div><div class=\"stat attribute\">+ <span class=\"value\">7.0</span> <span class=\"label\">HP Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">5.0</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {
        "HP Regeneration": 7.0,
        "Mana Regeneration": 5.0,
        "Intelligence": 14.0,
        "Strength": 14.0,
        "Agility": 14.0
    },
    "statsArray": ["HP Regeneration", "Mana Regeneration", "Intelligence", "Strength", "Agility"]
}, {
    "id": "heart-of-tarrasque",
    "name": "Heart of Tarrasque",
    "price": 4800,
    "imageUrl": "https://www.dotabuff.com/assets/items/heart-of-tarrasque-f2836d6711d1f833e6c242782c30a94260ff19857e7ae4e56a8ba047bebdd7e9.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">45</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">250</span> <span class=\"label\">Health</span></div><div class=\"stat attribute\">+ <span class=\"value\">1.6%</span> <span class=\"label\">Max Health Regen</span></div></div>",
    "statsObject": {"Strength": 45.0, "Health": 250.0, "Max Health Regen": "1.6%"},
    "statsArray": ["Strength", "Health", "Max Health Regen"]
}, {
    "id": "shadow-blade",
    "name": "Shadow Blade",
    "price": 3000,
    "imageUrl": "https://www.dotabuff.com/assets/items/shadow-blade-06b2b46994817bba626219cb623637c7496a1dad1328bc4c681a6950338e9bf8.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">35</span> <span class=\"label\">Attack Speed</span></div></div>",
    "statsObject": {"Damage": 25.0, "Attack Speed": 35.0},
    "statsArray": ["Damage", "Attack Speed"]
}, {
    "id": "spirit-vessel",
    "name": "Spirit Vessel",
    "price": 2940,
    "imageUrl": "https://www.dotabuff.com/assets/items/spirit-vessel-edc712713cab24a109922e7dda6335a822b65315199e4a08e35cf56b7b35e325.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">250</span> <span class=\"label\">Health</span></div><div class=\"stat attribute\">+ <span class=\"value\">1.75</span> <span class=\"label\">Mana Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">2</span> <span class=\"label\">All Attributes</span></div><div class=\"stat attribute\">+ <span class=\"value\">2.0</span> <span class=\"label\">Armor</span></div></div>",
    "statsObject": {
        "Health": 250.0,
        "Mana Regeneration": 1.75,
        "Armor": 2.0,
        "Intelligence": 2.0,
        "Strength": 2.0,
        "Agility": 2.0
    },
    "statsArray": ["Health", "Mana Regeneration", "Armor", "Intelligence", "Strength", "Agility"]
}, {
    "id": "morbid-mask",
    "name": "Morbid Mask",
    "price": 900,
    "imageUrl": "https://www.dotabuff.com/assets/items/morbid-mask-4c4259f53f6e1db9b272c3e2fd421916a4553aabfc46b801f4844f29ec2f24d5.jpg",
    "statsHtml": "+ 15% Lifesteal",
    "statsObject": {"Lifesteal": "15%"},
    "statsArray": ["Lifesteal"]
}, {
    "id": "pipe-of-insight",
    "name": "Pipe of Insight",
    "price": 3475,
    "imageUrl": "https://www.dotabuff.com/assets/items/pipe-of-insight-d9956adace54ad2dc44c2ae87bfa21f106e64a230882612220a35d750f84c1f8.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">8.5</span> <span class=\"label\">HP Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">30%</span> <span class=\"label\">Magic Resistance</span></div></div>+ 2 HP Regeneration (Aura)<br>+ 10% Magic Resistance (Aura)",
    "statsObject": {"HP Regeneration": 10.5, "Magic Resistance": "~40%", "Aura": 1.0},
    "statsArray": ["HP Regeneration", "Magic Resistance", "Aura"]
}, {
    "id": "enchanted-mango",
    "name": "Enchanted Mango",
    "price": 70,
    "imageUrl": "https://www.dotabuff.com/assets/items/enchanted-mango-4e423e0504c1827f556fb1f76f58d5af2f515aaa9837d7815908c139bf1391e4.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">0.6</span> <span class=\"label\">HP Regeneration</span></div></div>",
    "statsObject": {"HP Regeneration": 0.6},
    "statsArray": ["HP Regeneration"]
}, {
    "id": "rod-of-atos",
    "name": "Rod of Atos",
    "price": 2750,
    "imageUrl": "https://www.dotabuff.com/assets/items/rod-of-atos-73837d8fb3d5c9dae0d95c7b72222874fbb8f5b371b624a049cbd1b890b1ed17.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Agility</span></div></div>",
    "statsObject": {"Intelligence": 20.0, "Strength": 10.0, "Agility": 10.0},
    "statsArray": ["Intelligence", "Strength", "Agility"]
}, {
    "id": "urn-of-shadows",
    "name": "Urn of Shadows",
    "price": 840,
    "imageUrl": "https://www.dotabuff.com/assets/items/urn-of-shadows-fb337b5d3389e3676f60ca7618a7dd90bd8f880ee73349a6b9db7d62db3387e3.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">1.5</span> <span class=\"label\">Mana Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">2</span> <span class=\"label\">All Attributes</span></div><div class=\"stat attribute\">+ <span class=\"value\">2.0</span> <span class=\"label\">Armor</span></div></div>",
    "statsObject": {"Mana Regeneration": 1.5, "Armor": 2.0, "Intelligence": 2.0, "Strength": 2.0, "Agility": 2.0},
    "statsArray": ["Mana Regeneration", "Armor", "Intelligence", "Strength", "Agility"]
}, {
    "id": "echo-sabre",
    "name": "Echo Sabre",
    "price": 2500,
    "imageUrl": "https://www.dotabuff.com/assets/items/echo-sabre-fdd0aae647a58c856040bfd0adc482890035ad4a5a8961b6d16228d82a38c0a6.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">15</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">12</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">2.25</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {
        "Damage": 15.0,
        "Strength": 12.0,
        "Intelligence": 10.0,
        "Attack Speed": 10.0,
        "Mana Regeneration": 2.25
    },
    "statsArray": ["Damage", "Strength", "Intelligence", "Attack Speed", "Mana Regeneration"]
}, {
    "id": "scythe-of-vyse",
    "name": "Scythe of Vyse",
    "price": 5675,
    "imageUrl": "https://www.dotabuff.com/assets/items/scythe-of-vyse-315f3fc3e31aaf7d6adc764f60cdbaf865f4c531cd033013f6e1a5c432a8f42a.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">35</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">9.0</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Strength": 10.0, "Agility": 10.0, "Intelligence": 35.0, "Mana Regeneration": 9.0},
    "statsArray": ["Strength", "Agility", "Intelligence", "Mana Regeneration"]
}, {
    "id": "diffusal-blade",
    "name": "Diffusal Blade",
    "price": 3150,
    "imageUrl": "https://www.dotabuff.com/assets/items/diffusal-blade-dc851dd1f50c01f8994cf9d3a3677f9a26c0b7c08a9d07b40cfe328b4642688b.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Intelligence</span></div></div>",
    "statsObject": {"Agility": 20.0, "Intelligence": 10.0},
    "statsArray": ["Agility", "Intelligence"]
}, {
    "id": "orb-of-venom",
    "name": "Orb of Venom",
    "price": 275,
    "imageUrl": "https://www.dotabuff.com/assets/items/orb-of-venom-eb625729f42952d92cff77fad6a6e046ca78e7b7f9fb93f3f3394c3e74e502fc.jpg",
    "statsHtml": "",
    "statsObject": {},
    "statsArray": []
}, {
    "id": "guardian-greaves",
    "name": "Guardian Greaves",
    "price": 5250,
    "imageUrl": "https://www.dotabuff.com/assets/items/guardian-greaves-9074138bd6e55fcba6d627022300ae1d497d26e860b8609f318606bb2623b530.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">50</span> <span class=\"label\">Movement Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">250</span> <span class=\"label\">Mana</span></div><div class=\"stat attribute\">+ <span class=\"value\">4</span> <span class=\"label\">Armor</span></div></div>+ 2.5 HP Regeneration (Aura)<br>+ 3 Armor (Aura)",
    "statsObject": {"Movement Speed": 50.0, "Mana": 250.0, "Armor": 3.0, "Aura": 1.0, "HP Regeneration": 2.5},
    "statsArray": ["Movement Speed", "Mana", "Armor", "Aura", "HP Regeneration"]
}, {
    "id": "staff-of-wizardry",
    "name": "Staff of Wizardry",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/staff-of-wizardry-fcf0b880c4db89325ca2270886e3656a26798b2c6e0cac3fe2ded2752146a79c.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Intelligence</span></div></div>",
    "statsObject": {"Intelligence": 10.0},
    "statsArray": ["Intelligence"]
}, {
    "id": "mjollnir",
    "name": "Mjollnir",
    "price": 5600,
    "imageUrl": "https://www.dotabuff.com/assets/items/mjollnir-01dfce8ac9e95f8971aa57a58361e85a106da5e2f3dac5b00ecc3e59747c897d.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">24</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">65</span> <span class=\"label\">Attack Speed</span></div></div>",
    "statsObject": {"Damage": 24.0, "Attack Speed": 65.0},
    "statsArray": ["Damage", "Attack Speed"]
}, {
    "id": "octarine-core",
    "name": "Octarine Core",
    "price": 5475,
    "imageUrl": "https://www.dotabuff.com/assets/items/octarine-core-50d9609e12bb70a8399fcae3c50f61c4b74aaa22d8e1f3e0aeaab93de352e2d6.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">250</span> <span class=\"label\">Cast Range</span></div><div class=\"stat attribute\">+ <span class=\"value\">425</span> <span class=\"label\">Health</span></div><div class=\"stat attribute\">+ <span class=\"value\">725</span> <span class=\"label\">Mana</span></div><div class=\"stat attribute\">+ <span class=\"value\">3.0</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Cast Range": 250.0, "Health": 425.0, "Mana": 725.0, "Mana Regeneration": 3.0},
    "statsArray": ["Cast Range", "Health", "Mana", "Mana Regeneration"]
}, {
    "id": "radiance",
    "name": "Radiance",
    "price": 5150,
    "imageUrl": "https://www.dotabuff.com/assets/items/radiance-d474b0b33aaa6079a050c6e8bd22791dd2d6e2bd0968ce31c7818cf3328d0231.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">60</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Damage": 60.0},
    "statsArray": ["Damage"]
}, {
    "id": "hurricane-pike",
    "name": "Hurricane Pike",
    "price": 4525,
    "imageUrl": "https://www.dotabuff.com/assets/items/hurricane-pike-3af50aa5181d94db649e65729a3db1e7b43d8db111964a6b7012d91f468fdb28.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">13</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">2.5</span> <span class=\"label\">HP Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">15</span> <span class=\"label\">Strength</span></div></div>",
    "statsObject": {"Intelligence": 13.0, "HP Regeneration": 2.5, "Agility": 20.0, "Strength": 15.0},
    "statsArray": ["Intelligence", "HP Regeneration", "Agility", "Strength"]
}, {
    "id": "lotus-orb",
    "name": "Lotus Orb",
    "price": 3950,
    "imageUrl": "https://www.dotabuff.com/assets/items/lotus-orb-eaf20c3f924ffc8d0949c4c6f08053b3acfcde2a409dd622306e1ef04a7bc957.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Armor</span></div><div class=\"stat attribute\">+ <span class=\"value\">6.5</span> <span class=\"label\">HP Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">4.0</span> <span class=\"label\">Mana Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">250</span> <span class=\"label\">Mana</span></div></div>",
    "statsObject": {"Armor": 10.0, "HP Regeneration": 6.5, "Mana Regeneration": 4.0, "Mana": 250.0},
    "statsArray": ["Armor", "HP Regeneration", "Mana Regeneration", "Mana"]
}, {
    "id": "mask-of-madness",
    "name": "Mask of Madness",
    "price": 1775,
    "imageUrl": "https://www.dotabuff.com/assets/items/mask-of-madness-9f59e9e1136545770c30d43a6916f207adb48ea2aa2616403193f106ad7e1142.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Attack Speed</span></div></div>+ 20% Lifesteal",
    "statsObject": {"Damage": 10.0, "Attack Speed": 10.0, "Lifesteal": "20%"},
    "statsArray": ["Damage", "Attack Speed", "Lifesteal"]
}, {
    "id": "butterfly",
    "name": "Butterfly",
    "price": 5075,
    "imageUrl": "https://www.dotabuff.com/assets/items/butterfly-3070714854aa75101fb88872524456b5d8b723f163207b7d1ae51092017f9068.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">30</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">35%</span> <span class=\"label\">Evasion</span></div><div class=\"stat attribute\">+ <span class=\"value\">30</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Agility": 30.0, "Evasion": "35%", "Attack Speed": 30.0, "Damage": 25.0},
    "statsArray": ["Agility", "Evasion", "Attack Speed", "Damage"]
}, {
    "id": "aeon-disk",
    "name": "Aeon Disk",
    "price": 3100,
    "imageUrl": "https://www.dotabuff.com/assets/items/aeon-disk-dd8d4b3d051396d3b789ca7296dda6b2d7ed9fd6f65bc66e9c6dfb0d4e405755.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">300</span> <span class=\"label\">Health</span></div><div class=\"stat attribute\">+ <span class=\"value\">300</span> <span class=\"label\">Mana</span></div></div>",
    "statsObject": {"Health": 300.0, "Mana": 300.0},
    "statsArray": ["Health", "Mana"]
}, {
    "id": "heavens-halberd",
    "name": "Heaven's Halberd",
    "price": 3650,
    "imageUrl": "https://www.dotabuff.com/assets/items/heavens-halberd-a952b98b9cd926388cffad2049730a3682b84c87402f5116f33bb9bcbe0197da.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">20%</span> <span class=\"label\">Evasion</span></div><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">16%</span> <span class=\"label\">Status Resistance</span></div><div class=\"stat attribute\">+ <span class=\"value\">24%</span> <span class=\"label\">Self HP Regen and Lifesteal Amp</span></div></div>",
    "statsObject": {
        "Evasion": "20%",
        "Strength": 20.0,
        "Status Resistance": "16%",
        "Self HP Regen and Lifesteal Amp": "24%"
    },
    "statsArray": ["Evasion", "Strength", "Status Resistance", "Self HP Regen and Lifesteal Amp"]
}, {
    "id": "silver-edge",
    "name": "Silver Edge",
    "price": 5600,
    "imageUrl": "https://www.dotabuff.com/assets/items/silver-edge-60951533ab869a2cf4018376aa47e5a4419ad6cd53c3d120e092ec77b950222b.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">40</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">45</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">3.0</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Damage": 40.0, "Attack Speed": 45.0, "Intelligence": 10.0, "Mana Regeneration": 3.0},
    "statsArray": ["Damage", "Attack Speed", "Intelligence", "Mana Regeneration"]
}, {
    "id": "ethereal-blade",
    "name": "Ethereal Blade",
    "price": 4300,
    "imageUrl": "https://www.dotabuff.com/assets/items/ethereal-blade-d70b20b6ded5b2dabdae9fb61f44d3a0ea22dd81eb4bcd792e442f2b35b5ae47.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">40</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Intelligence</span></div></div>",
    "statsObject": {"Agility": 40.0, "Strength": 10.0, "Intelligence": 10.0},
    "statsArray": ["Agility", "Strength", "Intelligence"]
}, {
    "id": "mithril-hammer",
    "name": "Mithril Hammer",
    "price": 1600,
    "imageUrl": "https://www.dotabuff.com/assets/items/mithril-hammer-287275ad714f34a963586301627530428ad85a592d6e8e23057a7a0c452fd421.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">24</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Damage": 24.0},
    "statsArray": ["Damage"]
}, {
    "id": "point-booster",
    "name": "Point Booster",
    "price": 1200,
    "imageUrl": "https://www.dotabuff.com/assets/items/point-booster-6bddbe59ef7769109beebd8208444fb5191a1ee599e13a84d8e4afc955281efc.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">175</span> <span class=\"label\">Mana</span></div><div class=\"stat attribute\">+ <span class=\"value\">175</span> <span class=\"label\">Health</span></div></div>",
    "statsObject": {"Mana": 175.0, "Health": 175.0},
    "statsArray": ["Mana", "Health"]
}, {
    "id": "meteor-hammer",
    "name": "Meteor Hammer",
    "price": 2350,
    "imageUrl": "https://www.dotabuff.com/assets/items/meteor-hammer-f8729d5bdf7840508782d31035fd43014510a5ead137e3aa2c3e88cdc90896f3.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">8</span> <span class=\"label\">All Attributes</span></div><div class=\"stat attribute\">+ <span class=\"value\">6.5</span> <span class=\"label\">HP Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">2.5</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {
        "HP Regeneration": 6.5,
        "Mana Regeneration": 2.5,
        "Intelligence": 8.0,
        "Strength": 8.0,
        "Agility": 8.0
    },
    "statsArray": ["HP Regeneration", "Mana Regeneration", "Intelligence", "Strength", "Agility"]
}, {
    "id": "crystalys",
    "name": "Crystalys",
    "price": 1950,
    "imageUrl": "https://www.dotabuff.com/assets/items/crystalys-68293d31b61a622dd57456c1939a7cde7783f7cae37aeebcd8168616b0bf3eaa.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">32</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Damage": 32.0},
    "statsArray": ["Damage"]
}, {
    "id": "gleipnir",
    "name": "Gleipnir",
    "price": 6150,
    "imageUrl": "https://www.dotabuff.com/assets/items/gleipnir-1631d35f5afaec4d5fb541b6545f7e5b30952e8e0f2adfda2c4d3993dfe66c98.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">30</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">12</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">12</span> <span class=\"label\">Agility</span></div></div>",
    "statsObject": {"Damage": 30.0, "Intelligence": 20.0, "Strength": 12.0, "Agility": 12.0},
    "statsArray": ["Damage", "Intelligence", "Strength", "Agility"]
}, {
    "id": "dragon-lance",
    "name": "Dragon Lance",
    "price": 1900,
    "imageUrl": "https://www.dotabuff.com/assets/items/dragon-lance-3b24336e99e60f4e8471dc943bf967e6e17f6f5c5f73267cb27496e33252b1c9.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">14</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">12</span> <span class=\"label\">Strength</span></div></div>",
    "statsObject": {"Agility": 14.0, "Strength": 12.0},
    "statsArray": ["Agility", "Strength"]
}, {
    "id": "satanic",
    "name": "Satanic",
    "price": 5050,
    "imageUrl": "https://www.dotabuff.com/assets/items/satanic-743fcc2064c4d3273c5e4821959110a9386624a5d50726410286011a902cc8a8.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">55</span> <span class=\"label\">Damage</span></div></div>+ 25% Lifesteal",
    "statsObject": {"Strength": 25.0, "Damage": 55.0, "Lifesteal": "25%"},
    "statsArray": ["Strength", "Damage", "Lifesteal"]
}, {
    "id": "blight-stone",
    "name": "Blight Stone",
    "price": 300,
    "imageUrl": "https://www.dotabuff.com/assets/items/blight-stone-83b0cc76d95e60e3789aed5d228da91511cd95f1d46f51d37f9793b91248460d.jpg",
    "statsHtml": "",
    "statsObject": {},
    "statsArray": []
}, {
    "id": "vanguard",
    "name": "Vanguard",
    "price": 1925,
    "imageUrl": "https://www.dotabuff.com/assets/items/vanguard-cac7be5116f8cefcea81f5662e511f61b07174cce51c911348c5d83c38c93ede.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">250</span> <span class=\"label\">Health</span></div><div class=\"stat attribute\">+ <span class=\"value\">7.0</span> <span class=\"label\">HP Regeneration</span></div></div>",
    "statsObject": {"Health": 250.0, "HP Regeneration": 7.0},
    "statsArray": ["Health", "HP Regeneration"]
}, {
    "id": "witch-blade",
    "name": "Witch Blade",
    "price": 2600,
    "imageUrl": "https://www.dotabuff.com/assets/items/witch-blade-5ff8609bd0c0e69e8d45e884dfd0414e929127ca358d4cfee3d7124d5eac5aab.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">35</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">12</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">6</span> <span class=\"label\">Armor</span></div><div class=\"stat attribute\">+ <span class=\"value\">300</span> <span class=\"label\">Projectile Speed</span></div></div>",
    "statsObject": {"Attack Speed": 35.0, "Intelligence": 12.0, "Armor": 6.0, "Projectile Speed": 300.0},
    "statsArray": ["Attack Speed", "Intelligence", "Armor", "Projectile Speed"]
}, {
    "id": "shivas-guard",
    "name": "Shiva's Guard",
    "price": 4850,
    "imageUrl": "https://www.dotabuff.com/assets/items/shivas-guard-c5ca9a34428ba32ea0600cfdf9db58c92151629057f3a6ccce6016a27f7d6005.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">30</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">15</span> <span class=\"label\">Armor</span></div></div>",
    "statsObject": {"Intelligence": 30.0, "Armor": 15.0},
    "statsArray": ["Intelligence", "Armor"]
}, {
    "id": "ring-of-basilius",
    "name": "Ring of Basilius",
    "price": 425,
    "imageUrl": "https://www.dotabuff.com/assets/items/ring-of-basilius-73a0661f20b91901a86b8ae4eec2d9c71152fab49d7e866d0ec50a6ea993c825.jpg",
    "statsHtml": "+ 1.4 Mana Regeneration (Aura)",
    "statsObject": {"Aura": 1.0, "Mana Regeneration": 1.4},
    "statsArray": ["Aura", "Mana Regeneration"]
}, {
    "id": "eternal-shroud",
    "name": "Eternal Shroud",
    "price": 3300,
    "imageUrl": "https://www.dotabuff.com/assets/items/eternal-shroud-9240886319493dbadb088bec46e5f0447dd8391fd275a5fd15f28a8150806424.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">20%</span> <span class=\"label\">Magic Resistance</span></div><div class=\"stat attribute\">+ <span class=\"value\">8.5</span> <span class=\"label\">HP Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">20.0%</span> <span class=\"label\">Spell Lifesteal (Heroes)</span></div><div class=\"stat attribute\">+ <span class=\"value\">4.0%</span> <span class=\"label\">Spell Lifesteal (Creeps)</span></div></div>",
    "statsObject": {"Magic Resistance": "20%", "HP Regeneration": 8.5, "Spell Lifesteal": "4.0% / 20.0%"},
    "statsArray": ["Magic Resistance", "HP Regeneration", "Spell Lifesteal"]
}, {
    "id": "kaya",
    "name": "Kaya",
    "price": 2050,
    "imageUrl": "https://www.dotabuff.com/assets/items/kaya-ecb3cde15d139eddb842c9ca5b6504372292253de74f1791d55fa6ccc3a5504d.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">16</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">8%</span> <span class=\"label\">Spell Amplification</span></div><div class=\"stat attribute\">+ <span class=\"value\">24%</span> <span class=\"label\">Mana Regen Amplification</span></div><div class=\"stat attribute\">+ <span class=\"value\">24%</span> <span class=\"label\">Spell Lifesteal Amplification</span></div></div>",
    "statsObject": {
        "Intelligence": 16.0,
        "Spell Amplification": "8%",
        "Mana Regen Amplification": "24%",
        "Spell Lifesteal Amplification": "24%"
    },
    "statsArray": ["Intelligence", "Spell Amplification", "Mana Regen Amplification", "Spell Lifesteal Amplification"]
}, {
    "id": "bloodstone",
    "name": "Bloodstone",
    "price": 5950,
    "imageUrl": "https://www.dotabuff.com/assets/items/bloodstone-f534ab7167b0f2d898e2f6405a053587fc9e8d344ec6c0f67e9d7f3ee137b997.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">425</span> <span class=\"label\">Health</span></div><div class=\"stat attribute\">+ <span class=\"value\">425</span> <span class=\"label\">Mana</span></div><div class=\"stat attribute\">+ <span class=\"value\">16</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">100%</span> <span class=\"label\">Mana Regen Amplification</span></div><div class=\"stat attribute\">+ <span class=\"value\">8%</span> <span class=\"label\">Spell Amplification</span></div><div class=\"stat attribute\">+ <span class=\"value\">30%</span> <span class=\"label\">Spell Lifesteal Amplification</span></div><div class=\"stat attribute\">+ <span class=\"value\">15.0%</span> <span class=\"label\">Spell Lifesteal (Hero)</span></div><div class=\"stat attribute\">+ <span class=\"value\">3.0%</span> <span class=\"label\">Spell Lifesteal (Creep)</span></div></div>",
    "statsObject": {
        "Health": 425.0,
        "Mana": 425.0,
        "Intelligence": 16.0,
        "Mana Regen Amplification": "100%",
        "Spell Amplification": "8%",
        "Spell Lifesteal Amplification": "30%",
        "Spell Lifesteal": "3.0% / 15.0%"
    },
    "statsArray": ["Health", "Mana", "Intelligence", "Mana Regen Amplification", "Spell Amplification", "Spell Lifesteal Amplification", "Spell Lifesteal"]
}, {
    "id": "hood-of-defiance",
    "name": "Hood of Defiance",
    "price": 1500,
    "imageUrl": "https://www.dotabuff.com/assets/items/hood-of-defiance-3a814870456588b26e5b9a964aec1303aea058968de986dc4220c3a2d4b29265.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">8.5</span> <span class=\"label\">HP Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">20%</span> <span class=\"label\">Magic Resistance</span></div></div>",
    "statsObject": {"HP Regeneration": 8.5, "Magic Resistance": "20%"},
    "statsArray": ["HP Regeneration", "Magic Resistance"]
}, {
    "id": "refresher-orb",
    "name": "Refresher Orb",
    "price": 5000,
    "imageUrl": "https://www.dotabuff.com/assets/items/refresher-orb-0a1b1c68e6f6226054633c30ee221d8020800a6800089013781d517343061c9e.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">13</span> <span class=\"label\">HP Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">12.0</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"HP Regeneration": 13.0, "Mana Regeneration": 12.0},
    "statsArray": ["HP Regeneration", "Mana Regeneration"]
}, {
    "id": "bloodthorn",
    "name": "Bloodthorn",
    "price": 6475,
    "imageUrl": "https://www.dotabuff.com/assets/items/bloodthorn-33eeaa9b1d0254392cd196594a0a4069df692defa0453e17f44349e712bae909.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">90</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">30</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">5.5</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Intelligence": 25.0, "Attack Speed": 90.0, "Damage": 30.0, "Mana Regeneration": 5.5},
    "statsArray": ["Intelligence", "Attack Speed", "Damage", "Mana Regeneration"]
}, {
    "id": "armlet-of-mordiggian",
    "name": "Armlet of Mordiggian",
    "price": 2475,
    "imageUrl": "https://www.dotabuff.com/assets/items/armlet-of-mordiggian-7d4331fc6f6e76dc526e50bbb7546ea874cfd375d2f05039b36d402c6514fe93.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">15</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">5</span> <span class=\"label\">Armor</span></div><div class=\"stat attribute\">+ <span class=\"value\">5</span> <span class=\"label\">HP Regeneration</span></div></div>",
    "statsObject": {"Damage": 15.0, "Attack Speed": 25.0, "Armor": 5.0, "HP Regeneration": 5.0},
    "statsArray": ["Damage", "Attack Speed", "Armor", "HP Regeneration"]
}, {
    "id": "crimson-guard",
    "name": "Crimson Guard",
    "price": 3800,
    "imageUrl": "https://www.dotabuff.com/assets/items/crimson-guard-0f88ccd8ebd8fec45d2d02b723fcd294702a6588c13e8d5021d0429eb8140a66.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">250</span> <span class=\"label\">Health</span></div><div class=\"stat attribute\">+ <span class=\"value\">12.0</span> <span class=\"label\">HP Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">6.0</span> <span class=\"label\">Armor</span></div></div>",
    "statsObject": {"Health": 250.0, "HP Regeneration": 12.0, "Armor": 6.0},
    "statsArray": ["Health", "HP Regeneration", "Armor"]
}, {
    "id": "vladmirs-offering",
    "name": "Vladmir's Offering",
    "price": 2750,
    "imageUrl": "https://www.dotabuff.com/assets/items/vladmirs-offering-ddea35b0dbd908f33c5348e542d2a2cd2d66792d256f2473c6145724f4ac5dfa.jpg",
    "statsHtml": "+ 15% Lifesteal (Aura)<br>+ 1.4 Mana Regeneration (Aura)<br>+ 18% Attack Damage (Aura)<br>+ 2 Armor (Aura)",
    "statsObject": {"Aura": 1.0, "Armor": 2.0, "Damage": "18%", "Lifesteal": "15%", "Mana Regeneration": 1.4},
    "statsArray": ["Aura", "Armor", "Damage", "Lifesteal", "Mana Regeneration"]
}, {
    "id": "circlet",
    "name": "Circlet",
    "price": 155,
    "imageUrl": "https://www.dotabuff.com/assets/items/circlet-c652a0916143c18264c9a1aa86cf50ea9b267b32b82ab553ff6d6f7280e8f7b5.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">2</span> <span class=\"label\">All Attributes</span></div></div>",
    "statsObject": {"Intelligence": 2.0, "Strength": 2.0, "Agility": 2.0},
    "statsArray": ["Intelligence", "Strength", "Agility"]
}, {
    "id": "arcane-blink",
    "name": "Arcane Blink",
    "price": 6800,
    "imageUrl": "https://www.dotabuff.com/assets/items/arcane-blink-4883d729fdcfdd0763b8d26e0dd57a3769022a8a7fdd7b1b1f283bb4060de0a4.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Intelligence</span></div></div>",
    "statsObject": {"Intelligence": 25.0},
    "statsArray": ["Intelligence"]
}, {
    "id": "platemail",
    "name": "Platemail",
    "price": 1400,
    "imageUrl": "https://www.dotabuff.com/assets/items/platemail-8838444e621fd6ed8f700d8b5c402ee1d1305d7b81573c464250e3fff3acc188.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Armor</span></div></div>",
    "statsObject": {"Armor": 10.0},
    "statsArray": ["Armor"]
}, {
    "id": "yasha",
    "name": "Yasha",
    "price": 2050,
    "imageUrl": "https://www.dotabuff.com/assets/items/yasha-c316c68a618d4959e34a821f2e2007263b5f0d0d2dfed29bbc4b540d31622187.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">16</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">12</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">8%</span> <span class=\"label\">Movement Speed</span></div></div>",
    "statsObject": {"Agility": 16.0, "Attack Speed": 12.0, "Movement Speed": "8%"},
    "statsArray": ["Agility", "Attack Speed", "Movement Speed"]
}, {
    "id": "ultimate-orb",
    "name": "Ultimate Orb",
    "price": 2050,
    "imageUrl": "https://www.dotabuff.com/assets/items/ultimate-orb-853c3ef97aca83c46ca91a3697df8d76975ea542e94f8248d7d6dfabace95f5c.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">All Attributes</span></div></div>",
    "statsObject": {"Intelligence": 10.0, "Strength": 10.0, "Agility": 10.0},
    "statsArray": ["Intelligence", "Strength", "Agility"]
}, {
    "id": "falcon-blade",
    "name": "Falcon Blade",
    "price": 1100,
    "imageUrl": "https://www.dotabuff.com/assets/items/falcon-blade-8b808327f39f030cffa2fe9f21b82b3e237934e0e987e5728af9687a7a1331a5.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">175</span> <span class=\"label\">Health</span></div><div class=\"stat attribute\">+ <span class=\"value\">1.8</span> <span class=\"label\">Mana Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Health": 175.0, "Mana Regeneration": 1.8, "Damage": 10.0},
    "statsArray": ["Health", "Mana Regeneration", "Damage"]
}, {
    "id": "ring-of-regen",
    "name": "Ring of Regen",
    "price": 175,
    "imageUrl": "https://www.dotabuff.com/assets/items/ring-of-regen-9bb1625482597a8fa841983df494fe0eb494e9cba181a46f8baa4c2a807049fd.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">1.25</span> <span class=\"label\">HP Regeneration</span></div></div>",
    "statsObject": {"HP Regeneration": 1.25},
    "statsArray": ["HP Regeneration"]
}, {
    "id": "veil-of-discord",
    "name": "Veil of Discord",
    "price": 1525,
    "imageUrl": "https://www.dotabuff.com/assets/items/veil-of-discord-d4c01d20607b62bbe04fe81544392e44398791284dc3863256a33fd2cc4b8710.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">4</span> <span class=\"label\">All Attributes</span></div></div>+ 1.5 Mana Regeneration (Aura)",
    "statsObject": {"Aura": 1.0, "Mana Regeneration": 1.5, "Intelligence": 4.0, "Strength": 4.0, "Agility": 4.0},
    "statsArray": ["Aura", "Mana Regeneration", "Intelligence", "Strength", "Agility"]
}, {
    "id": "mekansm",
    "name": "Mekansm",
    "price": 1875,
    "imageUrl": "https://www.dotabuff.com/assets/items/mekansm-10e3fcf254783a98e33cfbb78833fded0f0ae35d2124e06c19df63b432c2614c.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">4</span> <span class=\"label\">Armor</span></div></div>+ 2 HP Regeneration (Aura)",
    "statsObject": {"Armor": 4.0, "Aura": 1.0, "HP Regeneration": 2.0},
    "statsArray": ["Armor", "Aura", "HP Regeneration"]
}, {
    "id": "blade-of-alacrity",
    "name": "Blade of Alacrity",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/blade-of-alacrity-ea875997d61853ff0222dd65e8cf89c972c13937c3e363739ccc7cae620d6024.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Agility</span></div></div>",
    "statsObject": {"Agility": 10.0},
    "statsArray": ["Agility"]
}, {
    "id": "perseverance",
    "name": "Perseverance",
    "price": 1650,
    "imageUrl": "https://www.dotabuff.com/assets/items/perseverance-41e0d14cf8450372c71324f822c8e777c82d6a2998e624851c6ab701a8981197.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">6.5</span> <span class=\"label\">HP Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">2.25</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"HP Regeneration": 6.5, "Mana Regeneration": 2.25},
    "statsArray": ["HP Regeneration", "Mana Regeneration"]
}, {
    "id": "buckler",
    "name": "Buckler",
    "price": 375,
    "imageUrl": "https://www.dotabuff.com/assets/items/buckler-88c55ac729e5c3e17db10dba129887b01fc614d4f38dd283e5da8bf930ef2da2.jpg",
    "statsHtml": "+ 2 Armor (Aura)",
    "statsObject": {"Aura": 1.0, "Armor": 2.0},
    "statsArray": ["Aura", "Armor"]
}, {
    "id": "swift-blink",
    "name": "Swift Blink",
    "price": 6800,
    "imageUrl": "https://www.dotabuff.com/assets/items/swift-blink-fdedc2cb0af89da0f892d1b69e4a60771a3be84eeb594e3a4b84006118a71fe4.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Agility</span></div></div>",
    "statsObject": {"Agility": 25.0},
    "statsArray": ["Agility"]
}, {
    "id": "shadow-amulet",
    "name": "Shadow Amulet",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/shadow-amulet-a129a08525ee12ba6ce93f874391489409ddfa489f475819914906c625bd695d.jpg",
    "statsHtml": "",
    "statsObject": {},
    "statsArray": []
}, {
    "id": "javelin",
    "name": "Javelin",
    "price": 1100,
    "imageUrl": "https://www.dotabuff.com/assets/items/javelin-2cdc04ab0fff90bf435af12606c8cc301516dd0407cf0ceab2f16134f13652d3.jpg",
    "statsHtml": "",
    "statsObject": {},
    "statsArray": []
}, {
    "id": "moon-shard",
    "name": "Moon Shard",
    "price": 4000,
    "imageUrl": "https://www.dotabuff.com/assets/items/moon-shard-94150bdfe8acba92303e9dfdbf48731714026d7e791b4e7873cce5f288976c17.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">140</span> <span class=\"label\">Attack Speed</span></div></div>",
    "statsObject": {"Attack Speed": 140.0},
    "statsArray": ["Attack Speed"]
}, {
    "id": "overwhelming-blink",
    "name": "Overwhelming Blink",
    "price": 6800,
    "imageUrl": "https://www.dotabuff.com/assets/items/overwhelming-blink-7b9633d28b826a98f5697b4b0e38ed6299facaca011314bb81f7094ee87ec11a.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Strength</span></div></div>",
    "statsObject": {"Strength": 25.0},
    "statsArray": ["Strength"]
}, {
    "id": "void-stone",
    "name": "Void Stone",
    "price": 825,
    "imageUrl": "https://www.dotabuff.com/assets/items/void-stone-50f7504d0c5f25d7fa5a8c1708e5ee65f7d49031a7ea518057758c343f65ecd1.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">2.25</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Mana Regeneration": 2.25},
    "statsArray": ["Mana Regeneration"]
}, {
    "id": "faerie-fire",
    "name": "Faerie Fire",
    "price": 70,
    "imageUrl": "https://www.dotabuff.com/assets/items/faerie-fire-5949939dff4d93cdd79213c780a35c6be0b86699b56751affea7aeeabb9e05b1.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">2</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Damage": 2.0},
    "statsArray": ["Damage"]
}, {
    "id": "hyperstone",
    "name": "Hyperstone",
    "price": 2000,
    "imageUrl": "https://www.dotabuff.com/assets/items/hyperstone-2cb39b3d26b53c6e29ab8ffd243511cfc541a4260b989c18833f8441d40021ce.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">60</span> <span class=\"label\">Attack Speed</span></div></div>",
    "statsObject": {"Attack Speed": 60.0},
    "statsArray": ["Attack Speed"]
}, {
    "id": "necronomicon-level-3",
    "name": "Necronomicon (level 3)",
    "price": 4550,
    "imageUrl": "https://www.dotabuff.com/assets/items/necronomicon-level-3-dfa5c1374892068b0a67d26dd618b5c215104c59d6826e34fc68136b2eee07a7.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"other\">6</span> / <span class=\"other\">12</span> / <span class=\"value\">18</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"other\">2.0</span> / <span class=\"other\">3.0</span> / <span class=\"value\">4.0</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Strength": 18.0, "Mana Regeneration": 4.0},
    "statsArray": ["Strength", "Mana Regeneration"]
}, {
    "id": "vitality-booster",
    "name": "Vitality Booster",
    "price": 1100,
    "imageUrl": "https://www.dotabuff.com/assets/items/vitality-booster-756665a109b4144746d32d9249f14fbeed28895e8fa7c41668d7ea48387a03c8.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">250</span> <span class=\"label\">Health</span></div></div>",
    "statsObject": {"Health": 250.0},
    "statsArray": ["Health"]
}, {
    "id": "divine-rapier",
    "name": "Divine Rapier",
    "price": 6000,
    "imageUrl": "https://www.dotabuff.com/assets/items/divine-rapier-6dfcf66899dc4626c7410e9291f829932179d89be6ebcdca7e1961c290a56768.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">300</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Damage": 300.0},
    "statsArray": ["Damage"]
}, {
    "id": "sages-mask",
    "name": "Sage's Mask",
    "price": 175,
    "imageUrl": "https://www.dotabuff.com/assets/items/sages-mask-c950a39e7ab704c3d59685da32d485a52e74c0e656223c0947dd10bbcc85ccc3.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">0.7</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Mana Regeneration": 0.7},
    "statsArray": ["Mana Regeneration"]
}, {
    "id": "ring-of-protection",
    "name": "Ring of Protection",
    "price": 175,
    "imageUrl": "https://www.dotabuff.com/assets/items/ring-of-protection-554d96b39d21faf8ae2449c8165c31775c4e6a27b1311f78ca9c9ee3d1e169cf.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">2.0</span> <span class=\"label\">Armor</span></div></div>",
    "statsObject": {"Armor": 2.0},
    "statsArray": ["Armor"]
}, {
    "id": "dagon-level-5",
    "name": "Dagon (level 5)",
    "price": 7950,
    "imageUrl": "https://www.dotabuff.com/assets/items/dagon-level-5-7f9e544159fd1e44c79a887c770d1b452415ff6cea325738015df2dcab89e48a.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"other\">14</span> / <span class=\"other\">16</span> / <span class=\"other\">18</span> / <span class=\"other\">20</span> / <span class=\"value\">22</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"other\">6</span> / <span class=\"other\">8</span> / <span class=\"other\">10</span> / <span class=\"other\">12</span> / <span class=\"value\">14</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"other\">6</span> / <span class=\"other\">8</span> / <span class=\"other\">10</span> / <span class=\"other\">12</span> / <span class=\"value\">14</span> <span class=\"label\">Agility</span></div></div>",
    "statsObject": {"Intelligence": 22.0, "Strength": 14.0, "Agility": 14.0},
    "statsArray": ["Intelligence", "Strength", "Agility"]
}, {
    "id": "headdress",
    "name": "Headdress",
    "price": 425,
    "imageUrl": "https://www.dotabuff.com/assets/items/headdress-09ec0d163de6e189848512006339998b51a83bd48670be84be5ecc5996b9d97e.jpg",
    "statsHtml": "+ 2 HP Regeneration (Aura)",
    "statsObject": {"Aura": 1.0, "HP Regeneration": 2.0},
    "statsArray": ["Aura", "HP Regeneration"]
}, {
    "id": "cloak",
    "name": "Cloak",
    "price": 500,
    "imageUrl": "https://www.dotabuff.com/assets/items/cloak-9b502ee7bc0489d6434e1962ad964fe1309d2f7242109091bfbbc8bae0ba5c76.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">15%</span> <span class=\"label\">Magic Resistance</span></div></div>",
    "statsObject": {"Magic Resistance": "15%"},
    "statsArray": ["Magic Resistance"]
}, {
    "id": "blitz-knuckles",
    "name": "Blitz Knuckles",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/blitz-knuckles-4c864b94b7ef7fb243613ac8646bae3db09704560186ff3adfdef6aebee48149.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">35</span> <span class=\"label\">Attack Speed</span></div></div>",
    "statsObject": {"Attack Speed": 35.0},
    "statsArray": ["Attack Speed"]
}, {
    "id": "boots-of-travel-level-2",
    "name": "Boots of Travel 2",
    "price": 4500,
    "imageUrl": "https://www.dotabuff.com/assets/items/boots-of-travel-level-2-4dfd97d4282b939c2ed5a3faa7f5c77ae9227c3dc2c2749c553713763260eb5c.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">130</span> <span class=\"label\">Movement Speed</span></div><div class=\"stat effect\"><span class=\"label\">TOWN PORTAL SCROLL COOLDOWN:</span> <span class=\"value\">30</span></div></div>",
    "statsObject": {"Movement Speed": 130.0},
    "statsArray": ["Movement Speed"]
}, {
    "id": "infused-raindrops",
    "name": "Infused Raindrops",
    "price": 225,
    "imageUrl": "https://www.dotabuff.com/assets/items/infused-raindrops-183c9fe8e60f5c91c8d68c50dbfaf953806cc248ea31336d8ac2c7f6d7560458.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">0.8</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Mana Regeneration": 0.8},
    "statsArray": ["Mana Regeneration"]
}, {
    "id": "medallion-of-courage",
    "name": "Medallion of Courage",
    "price": 1025,
    "imageUrl": "https://www.dotabuff.com/assets/items/medallion-of-courage-d1d39f61dacee097f4147ffbfc6d1126d5799a486ab0010b29ff03e689c2788c.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">5</span> <span class=\"label\">Armor</span></div><div class=\"stat attribute\">+ <span class=\"value\">1.5</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Armor": 5.0, "Mana Regeneration": 1.5},
    "statsArray": ["Armor", "Mana Regeneration"]
}, {
    "id": "drum-of-endurance",
    "name": "Drum of Endurance",
    "price": 1700,
    "imageUrl": "https://www.dotabuff.com/assets/items/drum-of-endurance-00442cbada26fb721c8bd111ac539ed2dc9a274c9d6cb11c6bbe4bdf212caf41.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">6</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">6</span> <span class=\"label\">Intelligence</span></div></div>",
    "statsObject": {"Strength": 6.0, "Intelligence": 6.0},
    "statsArray": ["Strength", "Intelligence"]
}, {
    "id": "solar-crest",
    "name": "Solar Crest",
    "price": 3775,
    "imageUrl": "https://www.dotabuff.com/assets/items/solar-crest-0d9a179ca20c2243e87609f4019f794fb537c1a168b602a52181e8f790cdba96.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">8</span> <span class=\"label\">Armor</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">All Attributes</span></div><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">Movement Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">1.75</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {
        "Armor": 8.0,
        "Movement Speed": 20.0,
        "Mana Regeneration": 1.75,
        "Intelligence": 10.0,
        "Strength": 10.0,
        "Agility": 10.0
    },
    "statsArray": ["Armor", "Movement Speed", "Mana Regeneration", "Intelligence", "Strength", "Agility"]
}, {
    "id": "sange",
    "name": "Sange",
    "price": 2050,
    "imageUrl": "https://www.dotabuff.com/assets/items/sange-72b90dfb9d8844f0c84e65a10a91945d6517fd44151bffb4c48361dd01ad8f68.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">16</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">16%</span> <span class=\"label\">Status Resistance</span></div><div class=\"stat attribute\">+ <span class=\"value\">24%</span> <span class=\"label\">Self HP Regen and Lifesteal Amp</span></div></div>",
    "statsObject": {"Strength": 16.0, "Status Resistance": "16%", "Self HP Regen and Lifesteal Amp": "24%"},
    "statsArray": ["Strength", "Status Resistance", "Self HP Regen and Lifesteal Amp"]
}, {
    "id": "yasha-and-kaya",
    "name": "Yasha and Kaya",
    "price": 4100,
    "imageUrl": "https://www.dotabuff.com/assets/items/yasha-and-kaya-08e2af54260cdbe40efebbd10561bdcba62686e9f1067a8f68a49ddcfe636dc7.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">16</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">16</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">16</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">30%</span> <span class=\"label\">Mana Regen Amplification</span></div><div class=\"stat attribute\">+ <span class=\"value\">10%</span> <span class=\"label\">Movement Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">16%</span> <span class=\"label\">Spell Amplification</span></div><div class=\"stat attribute\">+ <span class=\"value\">30%</span> <span class=\"label\">Spell Lifesteal Amplification</span></div></div>",
    "statsObject": {
        "Agility": 16.0,
        "Intelligence": 16.0,
        "Attack Speed": 16.0,
        "Mana Regen Amplification": "30%",
        "Movement Speed": "10%",
        "Spell Amplification": "16%",
        "Spell Lifesteal Amplification": "30%"
    },
    "statsArray": ["Agility", "Intelligence", "Attack Speed", "Mana Regen Amplification", "Movement Speed", "Spell Amplification", "Spell Lifesteal Amplification"]
}, {
    "id": "demon-edge",
    "name": "Demon Edge",
    "price": 2200,
    "imageUrl": "https://www.dotabuff.com/assets/items/demon-edge-53e15c94cdebea9fa7ae7edea8944b226676df9c135ac39de4060bf34fc08e21.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">40</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Damage": 40.0},
    "statsArray": ["Damage"]
}, {
    "id": "crown",
    "name": "Crown",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/crown-d12b02deba688d1fa8a9a56da7e5d04bded6eb3ee6e08bac0174e20860d46e76.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">4</span> <span class=\"label\">All Attributes</span></div></div>",
    "statsObject": {"Intelligence": 4.0, "Strength": 4.0, "Agility": 4.0},
    "statsArray": ["Intelligence", "Strength", "Agility"]
}, {
    "id": "energy-booster",
    "name": "Energy Booster",
    "price": 900,
    "imageUrl": "https://www.dotabuff.com/assets/items/energy-booster-f0bbebc5bcdc9c5858d45ef54422ebd8776298671cc244e0d721d1f413ea018b.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">250</span> <span class=\"label\">Mana</span></div></div>",
    "statsObject": {"Mana": 250.0},
    "statsArray": ["Mana"]
}, {
    "id": "mystic-staff",
    "name": "Mystic Staff",
    "price": 2800,
    "imageUrl": "https://www.dotabuff.com/assets/items/mystic-staff-13ff200bb65c63a1bd8d4b880e273f3c66ff6610b79df179470e2d9acce91d07.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Intelligence</span></div></div>",
    "statsObject": {"Intelligence": 25.0},
    "statsArray": ["Intelligence"]
}, {
    "id": "reaver",
    "name": "Reaver",
    "price": 2800,
    "imageUrl": "https://www.dotabuff.com/assets/items/reaver-cd4fd935175c59b706f9d698860baa837592e2b0a102ede43a54dbb4faf9487c.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Strength</span></div></div>",
    "statsObject": {"Strength": 25.0},
    "statsArray": ["Strength"]
}, {
    "id": "belt-of-strength",
    "name": "Belt of Strength",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/belt-of-strength-4c202fbc4b02bd37eab47572bb94a8481cbd1bafd8b1017cdd9412ae0dca0414.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">6</span> <span class=\"label\">Strength</span></div></div>",
    "statsObject": {"Strength": 6.0},
    "statsArray": ["Strength"]
}, {
    "id": "gauntlets-of-strength",
    "name": "Gauntlets of Strength",
    "price": 145,
    "imageUrl": "https://www.dotabuff.com/assets/items/gauntlets-of-strength-7d792e5fd3e190af88034519b4f06d449f1766bb71b899e698687a1730c06d19.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">3</span> <span class=\"label\">Strength</span></div></div>",
    "statsObject": {"Strength": 3.0},
    "statsArray": ["Strength"]
}, {
    "id": "voodoo-mask",
    "name": "Voodoo Mask",
    "price": 700,
    "imageUrl": "https://www.dotabuff.com/assets/items/voodoo-mask-45999a0e29774f7933f62e7fbc58f54d13db4d33afd53b54a3dda1c0eb72d84d.jpg",
    "statsHtml": "+2% Spell Lifesteal (Creep)<br>+10% Spell Lifesteal (Hero)",
    "statsObject": {"Spell Lifesteal": "2% / 10%"},
    "statsArray": ["Spell Lifesteal"]
}, {
    "id": "slippers-of-agility",
    "name": "Slippers of Agility",
    "price": 145,
    "imageUrl": "https://www.dotabuff.com/assets/items/slippers-of-agility-b777e3cb2b462098b8471b10d533469c0cba43933e291fddaf83282b000f7149.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">3</span> <span class=\"label\">Agility</span></div></div>",
    "statsObject": {"Agility": 3.0},
    "statsArray": ["Agility"]
}, {
    "id": "nullifier",
    "name": "Nullifier",
    "price": 4725,
    "imageUrl": "https://www.dotabuff.com/assets/items/nullifier-b5e80742d48177a272ba01b5904eab361f0ef9b01dde72cf57abbd74589191b6.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">80</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">8</span> <span class=\"label\">Armor</span></div><div class=\"stat attribute\">+ <span class=\"value\">6</span> <span class=\"label\">HP Regeneration</span></div></div>",
    "statsObject": {"Damage": 80.0, "Armor": 8.0, "HP Regeneration": 6.0},
    "statsArray": ["Damage", "Armor", "HP Regeneration"]
}, {
    "id": "chainmail",
    "name": "Chainmail",
    "price": 550,
    "imageUrl": "https://www.dotabuff.com/assets/items/chainmail-f67934ca6e235cc6aff18b8bb2cc2b19551892c0e2b1633cbb257bb7707062c5.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">4</span> <span class=\"label\">Armor</span></div></div>",
    "statsObject": {"Armor": 4.0},
    "statsArray": ["Armor"]
}, {
    "id": "ring-of-health",
    "name": "Ring of Health",
    "price": 825,
    "imageUrl": "https://www.dotabuff.com/assets/items/ring-of-health-92d9c8ca20f68ec650e73646f3608302102b490af6c205376ab8810cf2fa06f7.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">6.5</span> <span class=\"label\">HP Regeneration</span></div></div>",
    "statsObject": {"HP Regeneration": 6.5},
    "statsArray": ["HP Regeneration"]
}, {
    "id": "broadsword",
    "name": "Broadsword",
    "price": 1000,
    "imageUrl": "https://www.dotabuff.com/assets/items/broadsword-d1f5dfa93808e55992e33e1679a1e8ffa9a6b3100d143a9e946e5f927f1d34c3.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">15</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Damage": 15.0},
    "statsArray": ["Damage"]
}, {
    "id": "kaya-and-sange",
    "name": "Kaya and Sange",
    "price": 4100,
    "imageUrl": "https://www.dotabuff.com/assets/items/kaya-and-sange-bb12ef88b3911e7da276b6ed5376bcc93aac19c6efd287bfae4706f626551740.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">16</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">16</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">25%</span> <span class=\"label\">Status Resistance</span></div><div class=\"stat attribute\">+ <span class=\"value\">30%</span> <span class=\"label\">Mana Regen Amplification</span></div><div class=\"stat attribute\">+ <span class=\"value\">16%</span> <span class=\"label\">Spell Amplification</span></div><div class=\"stat attribute\">+ <span class=\"value\">30%</span> <span class=\"label\">Self HP Regen and Lifesteal Amp</span></div><div class=\"stat attribute\">+ <span class=\"value\">30%</span> <span class=\"label\">Spell Lifesteal Amplification</span></div></div>",
    "statsObject": {
        "Strength": 16.0,
        "Intelligence": 16.0,
        "Status Resistance": "25%",
        "Mana Regen Amplification": "30%",
        "Spell Amplification": "16%",
        "Self HP Regen and Lifesteal Amp": "30%",
        "Spell Lifesteal Amplification": "30%"
    },
    "statsArray": ["Strength", "Intelligence", "Status Resistance", "Mana Regen Amplification", "Spell Amplification", "Self HP Regen and Lifesteal Amp", "Spell Lifesteal Amplification"]
}, {
    "id": "mantle-of-intelligence",
    "name": "Mantle of Intelligence",
    "price": 145,
    "imageUrl": "https://www.dotabuff.com/assets/items/mantle-of-intelligence-34ec413360674e4471df7af1d5fdae33e9913f678bcf9c649d595d44d2cfd867.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">3</span> <span class=\"label\">Intelligence</span></div></div>",
    "statsObject": {"Intelligence": 3.0},
    "statsArray": ["Intelligence"]
}, {
    "id": "oblivion-staff",
    "name": "Oblivion Staff",
    "price": 1500,
    "imageUrl": "https://www.dotabuff.com/assets/items/oblivion-staff-ac4a0ca8108adf37f46fb3fec62175bffa674081795b16dbeb2b92363f03d8d7.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">15</span> <span class=\"label\">Damage</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">1.25</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Damage": 15.0, "Intelligence": 10.0, "Attack Speed": 10.0, "Mana Regeneration": 1.25},
    "statsArray": ["Damage", "Intelligence", "Attack Speed", "Mana Regeneration"]
}, {
    "id": "quarterstaff",
    "name": "Quarterstaff",
    "price": 875,
    "imageUrl": "https://www.dotabuff.com/assets/items/quarterstaff-851ecc4ebbf55e91c08e834e98abf8c9b4d09c50d4e97f0e57ae1222f3cd0f57.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Attack Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">10</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Attack Speed": 10.0, "Damage": 10.0},
    "statsArray": ["Attack Speed", "Damage"]
}, {
    "id": "claymore",
    "name": "Claymore",
    "price": 1350,
    "imageUrl": "https://www.dotabuff.com/assets/items/claymore-30140b118954fbe1e60115d5d6d45f555fe461afa41b31514b96ba9fec9dfea7.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Damage": 20.0},
    "statsArray": ["Damage"]
}, {
    "id": "mage-slayer",
    "name": "Mage Slayer",
    "price": 3450,
    "imageUrl": "https://www.dotabuff.com/assets/items/mage-slayer-6ccdcff40834baffd734fc20ad7adaa9b52686ff75116886c7a3f9654227de7b.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">20%</span> <span class=\"label\">Magic Resistance</span></div><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">Agility</span></div><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Magic Resistance": "20%", "Agility": 20.0, "Damage": 20.0},
    "statsArray": ["Magic Resistance", "Agility", "Damage"]
}, {
    "id": "gloves-of-haste",
    "name": "Gloves of Haste",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/gloves-of-haste-2275479d95854d3b534e211f50bf84047ad2ff4a46de721089f0333a361545e0.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">Attack Speed</span></div></div>",
    "statsObject": {"Attack Speed": 20.0},
    "statsArray": ["Attack Speed"]
}, {
    "id": "eaglesong",
    "name": "Eaglesong",
    "price": 2800,
    "imageUrl": "https://www.dotabuff.com/assets/items/eaglesong-22bf957f62b61a5f9a67bbb08c1876bdd10ca9f9970fd9be5d4df8891b79f886.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">25</span> <span class=\"label\">Agility</span></div></div>",
    "statsObject": {"Agility": 25.0},
    "statsArray": ["Agility"]
}, {
    "id": "fluffy-hat",
    "name": "Fluffy Hat",
    "price": 250,
    "imageUrl": "https://www.dotabuff.com/assets/items/fluffy-hat-d2b952344c6529060aeb53a9fa4536456a5d7cf856a58fe40e5786d58afdad9d.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">125</span> <span class=\"label\">Health</span></div></div>",
    "statsObject": {"Health": 125.0},
    "statsArray": ["Health"]
}, {
    "id": "holy-locket",
    "name": "Holy Locket",
    "price": 2500,
    "imageUrl": "https://www.dotabuff.com/assets/items/holy-locket-4b2e3dad266a1dee4f3b68b6847803a064fd7ebd164ba607ccd94c8d9209481b.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">250</span> <span class=\"label\">Health</span></div><div class=\"stat attribute\">+ <span class=\"value\">325</span> <span class=\"label\">Mana</span></div><div class=\"stat attribute\">+ <span class=\"value\">3</span> <span class=\"label\">All Attributes</span></div></div>",
    "statsObject": {"Health": 250.0, "Mana": 325.0, "Intelligence": 3.0, "Strength": 3.0, "Agility": 3.0},
    "statsArray": ["Health", "Mana", "Intelligence", "Strength", "Agility"]
}, {
    "id": "dagon",
    "name": "Dagon",
    "price": 2750,
    "imageUrl": "https://www.dotabuff.com/assets/items/dagon-89ffb37e39744f688d0c635088fab72b17b99d168092be67db7f333d55d7b921.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">14</span> / <span class=\"other\">16</span> / <span class=\"other\">18</span> / <span class=\"other\">20</span> / <span class=\"other\">22</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"value\">6</span> / <span class=\"other\">8</span> / <span class=\"other\">10</span> / <span class=\"other\">12</span> / <span class=\"other\">14</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">6</span> / <span class=\"other\">8</span> / <span class=\"other\">10</span> / <span class=\"other\">12</span> / <span class=\"other\">14</span> <span class=\"label\">Agility</span></div></div>",
    "statsObject": {"Intelligence": 14.0, "Strength": 6.0, "Agility": 6.0},
    "statsArray": ["Intelligence", "Strength", "Agility"]
}, {
    "id": "band-of-elvenskin",
    "name": "Band of Elvenskin",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/band-of-elvenskin-838543cea99be0587ea5d367f94635029d8226a1ae67903f672e3fcafd32cd1f.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">6</span> <span class=\"label\">Agility</span></div></div>",
    "statsObject": {"Agility": 6.0},
    "statsArray": ["Agility"]
}, {
    "id": "robe-of-the-magi",
    "name": "Robe of the Magi",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/robe-of-the-magi-cfa439953be32f3591c0482f1ee9bad99358f237a5a4dadeef90e5c29551bd91.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">6</span> <span class=\"label\">Intelligence</span></div></div>",
    "statsObject": {"Intelligence": 6.0},
    "statsArray": ["Intelligence"]
}, {
    "id": "wind-waker",
    "name": "Wind Waker",
    "price": 7125,
    "imageUrl": "https://www.dotabuff.com/assets/items/wind-waker-afdd9801a1ec6fc56cb53602ad52d70922418d628e8a40b5d4f7c7681204ed83.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">50</span> <span class=\"label\">Movement Speed</span></div><div class=\"stat attribute\">+ <span class=\"value\">6.0</span> <span class=\"label\">Mana Regeneration</span></div><div class=\"stat attribute\">+ <span class=\"value\">35</span> <span class=\"label\">Intelligence</span></div></div>",
    "statsObject": {"Movement Speed": 50.0, "Mana Regeneration": 6.0, "Intelligence": 35.0},
    "statsArray": ["Movement Speed", "Mana Regeneration", "Intelligence"]
}, {
    "id": "dagon-level-2",
    "name": "Dagon (level 2)",
    "price": 4050,
    "imageUrl": "https://www.dotabuff.com/assets/items/dagon-level-2-054e24764f6c927133ffb7d5ab347238403b6e0d3d0c2b0cc4ff912996b9f21f.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"other\">14</span> / <span class=\"value\">16</span> / <span class=\"other\">18</span> / <span class=\"other\">20</span> / <span class=\"other\">22</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"other\">6</span> / <span class=\"value\">8</span> / <span class=\"other\">10</span> / <span class=\"other\">12</span> / <span class=\"other\">14</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"other\">6</span> / <span class=\"value\">8</span> / <span class=\"other\">10</span> / <span class=\"other\">12</span> / <span class=\"other\">14</span> <span class=\"label\">Agility</span></div></div>",
    "statsObject": {"Intelligence": 16.0, "Strength": 8.0, "Agility": 8.0},
    "statsArray": ["Intelligence", "Strength", "Agility"]
}, {
    "id": "dagon-level-3",
    "name": "Dagon (level 3)",
    "price": 5350,
    "imageUrl": "https://www.dotabuff.com/assets/items/dagon-level-3-809d14ec136bebeafbb265467c6a9eb0089c0fabb8853fca55c5cb7705a88807.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"other\">14</span> / <span class=\"other\">16</span> / <span class=\"value\">18</span> / <span class=\"other\">20</span> / <span class=\"other\">22</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"other\">6</span> / <span class=\"other\">8</span> / <span class=\"value\">10</span> / <span class=\"other\">12</span> / <span class=\"other\">14</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"other\">6</span> / <span class=\"other\">8</span> / <span class=\"value\">10</span> / <span class=\"other\">12</span> / <span class=\"other\">14</span> <span class=\"label\">Agility</span></div></div>",
    "statsObject": {"Intelligence": 18.0, "Strength": 10.0, "Agility": 10.0},
    "statsArray": ["Intelligence", "Strength", "Agility"]
}, {
    "id": "helm-of-iron-will",
    "name": "Helm of Iron Will",
    "price": 925,
    "imageUrl": "https://www.dotabuff.com/assets/items/helm-of-iron-will-1274a585ddcf9c5539f06c17abc4864505dc7f9a918603478e1bedf6feb5c6fd.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">5</span> <span class=\"label\">Armor</span></div><div class=\"stat attribute\">+ <span class=\"value\">5.0</span> <span class=\"label\">HP Regeneration</span></div></div>",
    "statsObject": {"Armor": 5.0, "HP Regeneration": 5.0},
    "statsArray": ["Armor", "HP Regeneration"]
}, {
    "id": "talisman-of-evasion",
    "name": "Talisman of Evasion",
    "price": 1400,
    "imageUrl": "https://www.dotabuff.com/assets/items/talisman-of-evasion-5c289716a220b0d7da669d8e875ff2598a37073fad89875be087117f55e867ed.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">15%</span> <span class=\"label\">Evasion</span></div></div>",
    "statsObject": {"Evasion": "15%"},
    "statsArray": ["Evasion"]
}, {
    "id": "blades-of-attack",
    "name": "Blades of Attack",
    "price": 450,
    "imageUrl": "https://www.dotabuff.com/assets/items/blades-of-attack-8f79b4f8bdd62d1a5b2d50cc852526575932591015314818715536c590dd40f0.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">9</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Damage": 9.0},
    "statsArray": ["Damage"]
}, {
    "id": "helm-of-the-dominator",
    "name": "Helm of the Dominator",
    "price": 2350,
    "imageUrl": "https://www.dotabuff.com/assets/items/helm-of-the-dominator-87c8e4adbbbc71f1732893ed5ee0429c76ef8b01b2adcb9fc6d291a37d02211b.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">6</span> <span class=\"label\">All Attributes</span></div><div class=\"stat attribute\">+ <span class=\"value\">6</span> <span class=\"label\">Armor</span></div><div class=\"stat attribute\">+ <span class=\"value\">6.0</span> <span class=\"label\">HP Regeneration</span></div></div>",
    "statsObject": {"Armor": 6.0, "HP Regeneration": 6.0, "Intelligence": 6.0, "Strength": 6.0, "Agility": 6.0},
    "statsArray": ["Armor", "HP Regeneration", "Intelligence", "Strength", "Agility"]
}, {
    "id": "dagon-level-4",
    "name": "Dagon (level 4)",
    "price": 6650,
    "imageUrl": "https://www.dotabuff.com/assets/items/dagon-level-4-3a388d74186cb726afb289914f55ecc8774941605e89fe5be587b320c8def28f.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"other\">14</span> / <span class=\"other\">16</span> / <span class=\"other\">18</span> / <span class=\"value\">20</span> / <span class=\"other\">22</span> <span class=\"label\">Intelligence</span></div><div class=\"stat attribute\">+ <span class=\"other\">6</span> / <span class=\"other\">8</span> / <span class=\"other\">10</span> / <span class=\"value\">12</span> / <span class=\"other\">14</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"other\">6</span> / <span class=\"other\">8</span> / <span class=\"other\">10</span> / <span class=\"value\">12</span> / <span class=\"other\">14</span> <span class=\"label\">Agility</span></div></div>",
    "statsObject": {"Intelligence": 20.0, "Strength": 12.0, "Agility": 12.0},
    "statsArray": ["Intelligence", "Strength", "Agility"]
}, {
    "id": "sacred-relic",
    "name": "Sacred Relic",
    "price": 3800,
    "imageUrl": "https://www.dotabuff.com/assets/items/sacred-relic-27ec5e2e944b96a2afff1090a87c52ac8882d77ce158e0b868c48dae5d892ffd.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">60</span> <span class=\"label\">Damage</span></div></div>",
    "statsObject": {"Damage": 60.0},
    "statsArray": ["Damage"]
}, {
    "id": "soul-booster",
    "name": "Soul Booster",
    "price": 3200,
    "imageUrl": "https://www.dotabuff.com/assets/items/soul-booster-da7c016a1f5e0640b2049ca982ad751da9e2f37e3d77d2c7a9fa628d3604abb1.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">425</span> <span class=\"label\">Health</span></div><div class=\"stat attribute\">+ <span class=\"value\">425</span> <span class=\"label\">Mana</span></div></div>",
    "statsObject": {"Health": 425.0, "Mana": 425.0},
    "statsArray": ["Health", "Mana"]
}, {
    "id": "necronomicon",
    "name": "Necronomicon",
    "price": 2050,
    "imageUrl": "https://www.dotabuff.com/assets/items/necronomicon-605474b42f31c6d6f463ee2a17a52accf7279a1175d99754be0f000ec584004a.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">6</span> / <span class=\"other\">12</span> / <span class=\"other\">18</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"value\">2.0</span> / <span class=\"other\">3.0</span> / <span class=\"other\">4.0</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Strength": 6.0, "Mana Regeneration": 2.0},
    "statsArray": ["Strength", "Mana Regeneration"]
}, {
    "id": "necronomicon-level-2",
    "name": "Necronomicon (level 2)",
    "price": 3300,
    "imageUrl": "https://www.dotabuff.com/assets/items/necronomicon-level-2-5016eec729c89769350b8580483627157d8a7d918a77faf87f766a6659b0ffbc.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"other\">6</span> / <span class=\"value\">12</span> / <span class=\"other\">18</span> <span class=\"label\">Strength</span></div><div class=\"stat attribute\">+ <span class=\"other\">2.0</span> / <span class=\"value\">3.0</span> / <span class=\"other\">4.0</span> <span class=\"label\">Mana Regeneration</span></div></div>",
    "statsObject": {"Strength": 12.0, "Mana Regeneration": 3.0},
    "statsArray": ["Strength", "Mana Regeneration"]
}, {
    "id": "helm-of-the-dominator-2",
    "name": "Helm of the Dominator",
    "price": 6000,
    "imageUrl": "https://www.dotabuff.com/assets/items/helm-of-the-dominator-2-87c8e4adbbbc71f1732893ed5ee0429c76ef8b01b2adcb9fc6d291a37d02211b.jpg",
    "statsHtml": "<div class=\"stats\"><div class=\"stat attribute\">+ <span class=\"value\">20</span> <span class=\"label\">All Attributes</span></div><div class=\"stat attribute\">+ <span class=\"value\">8</span> <span class=\"label\">Armor</span></div><div class=\"stat attribute\">+ <span class=\"value\">8.0</span> <span class=\"label\">HP Regeneration</span></div></div>",
    "statsObject": {"Armor": 8.0, "HP Regeneration": 8.0, "Intelligence": 20.0, "Strength": 20.0, "Agility": 20.0},
    "statsArray": ["Armor", "HP Regeneration", "Intelligence", "Strength", "Agility"]
}]