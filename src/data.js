const data = {
    "nodes": [
      {"id": "Myriel", "group": 1},
      {"id": "Napoleon", "group": 1},
      {"id": "Mlle.Baptistine", "group": 1},
      {"id": "Mme.Magloire", "group": 1},
      {"id": "CountessdeLo", "group": 1},
      {"id": "Geborand", "group": 1},
      {"id": "Champtercier", "group": 1},
      {"id": "Cravatte", "group": 1},
      {"id": "Count", "group": 1},
      {"id": "OldMan", "group": 1},
      {"id": "Labarre", "group": 2},
      {"id": "Valjean", "group": 2},
      {"id": "Marguerite", "group": 3},
      {"id": "Mme.deR", "group": 2},
      {"id": "Isabeau", "group": 2},
      {"id": "Gervais", "group": 2},
      {"id": "Tholomyes", "group": 3},
      {"id": "Listolier", "group": 3},
      {"id": "Fameuil", "group": 3},
      {"id": "Blacheville", "group": 3},
      {"id": "Favourite", "group": 3},
      {"id": "Dahlia", "group": 3},
      {"id": "Zephine", "group": 3},
      {"id": "Fantine", "group": 3},
      {"id": "Mme.Thenardier", "group": 4},
      {"id": "Thenardier", "group": 4},
      {"id": "Cosette", "group": 5},
      {"id": "Javert", "group": 4},
      {"id": "Fauchelevent", "group": 0},
      {"id": "Bamatabois", "group": 2},
      {"id": "Perpetue", "group": 3},
      {"id": "Simplice", "group": 2},
      {"id": "Scaufflaire", "group": 2},
      {"id": "Woman1", "group": 2},
      {"id": "Judge", "group": 2},
      {"id": "Champmathieu", "group": 2},
      {"id": "Brevet", "group": 2},
      {"id": "Chenildieu", "group": 2},
      {"id": "Cochepaille", "group": 2},
      {"id": "Pontmercy", "group": 4},
      {"id": "Boulatruelle", "group": 6},
      {"id": "Eponine", "group": 4},
      {"id": "Anzelma", "group": 4},
      {"id": "Woman2", "group": 5},
      {"id": "MotherInnocent", "group": 0},
      {"id": "Gribier", "group": 0},
      {"id": "Jondrette", "group": 7},
      {"id": "Mme.Burgon", "group": 7},
      {"id": "Gavroche", "group": 8},
      {"id": "Enjolras", "group": 8},
      {"id": "Courfeyrac", "group": 8},
      {"id": "Bahorel", "group": 8},
      {"id": "Joly", "group": 8},
      {"id": "Grantaire", "group": 8},
      {"id": "Mme.Hucheloup", "group": 8}
    ],
    "links": [
      {"source": "Napoleon", "target": "Myriel", "value": 1},
      {"source": "Mlle.Baptistine", "target": "Myriel", "value": 8},
      {"source": "Mme.Magloire", "target": "Myriel", "value": 10},
      {"source": "Mme.Magloire", "target": "Mlle.Baptistine", "value": 6},
      {"source": "CountessdeLo", "target": "Myriel", "value": 1},
      {"source": "Geborand", "target": "Myriel", "value": 1},
      {"source": "Champtercier", "target": "Myriel", "value": 1},
      {"source": "Cravatte", "target": "Myriel", "value": 1},
      {"source": "Count", "target": "Myriel", "value": 2},
      {"source": "OldMan", "target": "Myriel", "value": 1},
      {"source": "Valjean", "target": "Labarre", "value": 1},
      {"source": "Valjean", "target": "Mme.Magloire", "value": 3},
      {"source": "Valjean", "target": "Mlle.Baptistine", "value": 3},
      {"source": "Valjean", "target": "Myriel", "value": 5},
      {"source": "Marguerite", "target": "Valjean", "value": 1},
      {"source": "Mme.deR", "target": "Valjean", "value": 1},
      {"source": "Isabeau", "target": "Valjean", "value": 1},
      {"source": "Gervais", "target": "Valjean", "value": 1},
      {"source": "Listolier", "target": "Tholomyes", "value": 4},
      {"source": "Fameuil", "target": "Tholomyes", "value": 4},
      {"source": "Fameuil", "target": "Listolier", "value": 4},
      {"source": "Blacheville", "target": "Tholomyes", "value": 4},
      {"source": "Blacheville", "target": "Listolier", "value": 4},
      {"source": "Blacheville", "target": "Fameuil", "value": 4},
      {"source": "Favourite", "target": "Tholomyes", "value": 3},
      {"source": "Favourite", "target": "Listolier", "value": 3},
      {"source": "Favourite", "target": "Fameuil", "value": 3},
      {"source": "Favourite", "target": "Blacheville", "value": 4},
      {"source": "Dahlia", "target": "Tholomyes", "value": 3},
      {"source": "Dahlia", "target": "Listolier", "value": 3},
      {"source": "Dahlia", "target": "Fameuil", "value": 3},
      {"source": "Dahlia", "target": "Blacheville", "value": 3},
      {"source": "Dahlia", "target": "Favourite", "value": 5},
      {"source": "Zephine", "target": "Tholomyes", "value": 3},
      {"source": "Zephine", "target": "Listolier", "value": 3},
      {"source": "Zephine", "target": "Fameuil", "value": 3},
      {"source": "Zephine", "target": "Blacheville", "value": 3},
      {"source": "Zephine", "target": "Favourite", "value": 4},
      {"source": "Zephine", "target": "Dahlia", "value": 4},
      {"source": "Fantine", "target": "Tholomyes", "value": 3},
      {"source": "Fantine", "target": "Listolier", "value": 3},
      {"source": "Fantine", "target": "Fameuil", "value": 3},
      {"source": "Fantine", "target": "Blacheville", "value": 3},
      {"source": "Fantine", "target": "Favourite", "value": 4},
      {"source": "Fantine", "target": "Dahlia", "value": 4},
      {"source": "Fantine", "target": "Zephine", "value": 4},
      {"source": "Fantine", "target": "Marguerite", "value": 2},
      {"source": "Fantine", "target": "Valjean", "value": 9},
      {"source": "Mme.Thenardier", "target": "Fantine", "value": 2},
      {"source": "Mme.Thenardier", "target": "Valjean", "value": 7},
      {"source": "Thenardier", "target": "Mme.Thenardier", "value": 13},
      {"source": "Thenardier", "target": "Fantine", "value": 1},
      {"source": "Thenardier", "target": "Valjean", "value": 12},
      {"source": "Cosette", "target": "Mme.Thenardier", "value": 4},
      {"source": "Cosette", "target": "Valjean", "value": 31},
      {"source": "Cosette", "target": "Tholomyes", "value": 1},
      {"source": "Cosette", "target": "Thenardier", "value": 1},
      {"source": "Javert", "target": "Valjean", "value": 17},
      {"source": "Javert", "target": "Fantine", "value": 5},
      {"source": "Javert", "target": "Thenardier", "value": 5},
      {"source": "Javert", "target": "Mme.Thenardier", "value": 1},
      {"source": "Javert", "target": "Cosette", "value": 1},
      {"source": "Fauchelevent", "target": "Valjean", "value": 8},
      {"source": "Fauchelevent", "target": "Javert", "value": 1},
      {"source": "Bamatabois", "target": "Fantine", "value": 1},
      {"source": "Bamatabois", "target": "Javert", "value": 1},
      {"source": "Bamatabois", "target": "Valjean", "value": 2},
      {"source": "Perpetue", "target": "Fantine", "value": 1},
      {"source": "Simplice", "target": "Perpetue", "value": 2},
      {"source": "Simplice", "target": "Valjean", "value": 3},
      {"source": "Simplice", "target": "Fantine", "value": 2},
      {"source": "Simplice", "target": "Javert", "value": 1},
      {"source": "Scaufflaire", "target": "Valjean", "value": 1},
      {"source": "Woman1", "target": "Valjean", "value": 2},
      {"source": "Woman1", "target": "Javert", "value": 1},
      {"source": "Judge", "target": "Valjean", "value": 3},
      {"source": "Judge", "target": "Bamatabois", "value": 2},
      {"source": "Champmathieu", "target": "Valjean", "value": 3},
      {"source": "Champmathieu", "target": "Judge", "value": 3},
      {"source": "Champmathieu", "target": "Bamatabois", "value": 2},
      {"source": "Brevet", "target": "Judge", "value": 2},
      {"source": "Brevet", "target": "Champmathieu", "value": 2},
      {"source": "Brevet", "target": "Valjean", "value": 2},
      {"source": "Brevet", "target": "Bamatabois", "value": 1},
      {"source": "Chenildieu", "target": "Judge", "value": 2},
      {"source": "Chenildieu", "target": "Champmathieu", "value": 2},
      {"source": "Chenildieu", "target": "Brevet", "value": 2},
      {"source": "Chenildieu", "target": "Valjean", "value": 2},
      {"source": "Chenildieu", "target": "Bamatabois", "value": 1},
      {"source": "Cochepaille", "target": "Judge", "value": 2},
      {"source": "Cochepaille", "target": "Champmathieu", "value": 2},
      {"source": "Cochepaille", "target": "Brevet", "value": 2},
      {"source": "Cochepaille", "target": "Chenildieu", "value": 2},
      {"source": "Cochepaille", "target": "Valjean", "value": 2},
      {"source": "Cochepaille", "target": "Bamatabois", "value": 1},
      {"source": "Pontmercy", "target": "Thenardier", "value": 1},
      {"source": "Boulatruelle", "target": "Thenardier", "value": 1},
      {"source": "Eponine", "target": "Mme.Thenardier", "value": 2},
      {"source": "Eponine", "target": "Thenardier", "value": 3},
      {"source": "Anzelma", "target": "Eponine", "value": 2},
      {"source": "Anzelma", "target": "Thenardier", "value": 2},
      {"source": "Anzelma", "target": "Mme.Thenardier", "value": 1},
      {"source": "Woman2", "target": "Valjean", "value": 3},
      {"source": "Woman2", "target": "Cosette", "value": 1},
      {"source": "Woman2", "target": "Javert", "value": 1},
      {"source": "MotherInnocent", "target": "Fauchelevent", "value": 3},
      {"source": "MotherInnocent", "target": "Valjean", "value": 1},
      {"source": "Gribier", "target": "Fauchelevent", "value": 2},
      {"source": "Mme.Burgon", "target": "Jondrette", "value": 1},
      {"source": "Mme.Hucheloup", "target": "Joly", "value": 1},
      {"source": "Mme.Hucheloup", "target": "Grantaire", "value": 1},
      {"source": "Mme.Hucheloup", "target": "Bahorel", "value": 1},
      {"source": "Mme.Hucheloup", "target": "Courfeyrac", "value": 1},
      {"source": "Mme.Hucheloup", "target": "Gavroche", "value": 1},
      {"source": "Mme.Hucheloup", "target": "Enjolras", "value": 1}
    ]
  };
  

export default data;