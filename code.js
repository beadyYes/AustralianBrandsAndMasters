
//note: these urls did not end up being the source, I ended up downloading logos.
//most times I would try and download direct from company website, otherwise wikipedia or logopedia for most others.
//philadelphia cream cheese is dual owned by two of the master companies so it appears twice on the list.
//for the overall ownership graph this was irrelevant

const brands = {
    "Wonka" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://1000logos.net/wp-content/uploads/2020/09/Wonka-Logo-500x281.png",
        "dataFrom" : -1
    },
    "KitKat" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/kitkat-logo-round.png",
        "dataFrom" : 1
        },
    "Mikybar" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com/sites/default/files/styles/…/milkybar-logo-round.png?h=a7e6d17b&itok=flzpDmXj",
        "dataFrom" : -1
        },
    "Aero" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://upload.wikimedia.org/wikipedia/en/b/b9/Aero_chocolate_logo.png",
        "dataFrom" : -1
        },
    "Rolo" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://upload.wikimedia.org/wikipedia/commons/d/db/Rolo_brand_logo.png",
        "dataFrom" : -1
        },
    "Maggi" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/maggi-logo-round.png",
        "dataFrom" : 1
        },
    "Maxibon" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Maxibon_logo.png/220px-Maxibon_logo.png",
        "dataFrom" : -1
        },
    "Peters" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Peters_Ice_Cream.png/220px-Peters_Ice_Cream.png",
        "dataFrom" : -1
        },
    "Smarties" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com/sites/default/files/styles/…ies-logo-square-2022.png?h=a7e6d17b&itok=sKsqTlO1",
        "dataFrom" : -1
        },
    "Nescafe" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/nescafe_logo_round_400x400.png",
        "dataFrom" : 1
        },
    "Milo" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/milo-logo-round.png",
        "dataFrom" : 1
        },
    "Nesquick" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/nesquik-logo-round.png",
        "dataFrom" : 1
        },
    "Perrier" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://upload.wikimedia.org/wikipedia/commons/thu…/7/7e/Perrier_logo.svg/131px-Perrier_logo.svg.png",
        "dataFrom" : -1
        },
    "S.Pellegrino" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0010/0633/brand.gif?itok=blkdtPN2",
        "dataFrom" : -1
        },
    "Cheerios" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/cheerios-logo-round.png",
        "dataFrom" : 1
        },
    "Purina" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/purina-logo-round.png",
        "dataFrom" : 1
        },
    "Allens" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/allens-logo-new.png",
        "dataFrom" : 1
        },
    "QuickEze" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/quickeze-logo.png",
        "dataFrom" : 1
        },
    "Sustagen" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/sustagen-logo-round.png",
        "dataFrom" : 1
        },
    "Uncle_Tobys" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/uncle-tobys-logo-round.png",
        "dataFrom" : 1
        },
    "LeSnak" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/uncle-tobys-lesnak-logo-round.png",
        "dataFrom" : 1
        },
    "Roll-Ups" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/uncle-tobys-rollups-logo-round.png",
        "dataFrom" : 1
        },
    "Soothers" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/soother-logo.png",
        "dataFrom" : 1
        },
    "Starbucks_Coffee_At_Home" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/starbucks_logo_round_400x400.png",
        "dataFrom" : 1
        },
    "International_Roast" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://images.officeworks.com.au/api/2/img///s3-a…fee_1kg.jpg/resize?size=600&auth=MjA5OTcwODkwMg__",
        "dataFrom" : -1
        },
    "Minties" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://thethrills.sfo2.cdn.digitaloceanspaces.com/public/Uploads/Block2_Allens_Minties_Small__ScaleMaxWidthWzI4OF0.png",
        "dataFrom" : -1
        },
    "Papa_Giuseppe" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQcQr1nOvQtlxmlwfhkHuuutWOVb8gKh8himpH45npzwEVa40rY6mof8FlA80Ha57fPc&usqp=CAU",
        "dataFrom" : -1
        },
    "Lean_Cuisine" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://seeklogo.com/images/L/lean-cuisine-logo-C7364259C9-seeklogo.com.png",
        "dataFrom" : -1
        },
    "Optifast" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/optifast-logo-round.png",
        "dataFrom" : 1
        },
    "Plaistowe" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Nestle",
        "logo" : "https://www.nestle.com.au/sites/g/files/pydnoa356/files/plaistowe-logo-round.png",
        "dataFrom" : 1
        },


    "Coca-Cola" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coca-Cola",
        "logo" : "https://www.coca-cola.com/content/dam/onexp/au/en/home-images/brands/logos/au_coca_cola_logo.png",
        "dataFrom" : 1
        },
    "Sprite" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coca-Cola",
        "logo" : "https://www.coca-cola.com/content/dam/onexp/au/en/brands/sprite/Sprite.png",
        "dataFrom" : 1
        },
    "Fanta" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coca-Cola",
        "logo" : "https://www.coca-cola.com/content/dam/onexp/au/en/brands/fanta/Fanta.png",
        "dataFrom" : 1
        },
    "Powerade" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coca-Cola",
        "logo" : "https://www.coca-cola.com/content/dam/onexp/au/en/home-images/brands/logos/au_powerade_logo.png",
        "dataFrom" : 1
        },
    "Mount_Franklin" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coca-Cola",
        "logo" : "https://www.coca-cola.com/content/dam/onexp/au/en/brands/mount-franklin/mount-franklin-logo-r.png",
        "dataFrom" : 1
        },
    "Pump" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coca-Cola",
        "logo" : "https://www.coca-cola.com/content/dam/onexp/au/en/home-images/brands/logos/au_pump_logo.png",
        "dataFrom" : 1
        },
    "Glaceau" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coca-Cola",
        "logo" : "https://www.coca-cola.com/content/dam/onexp/au/en/home-images/brands/logos/au_glaceau_logo.png",
        "dataFrom" : 1
        },
    "fuze_tea" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coca-Cola",
        "logo" : "https://www.coca-cola.com/content/dam/onexp/au/en/home-images/brands/logos/au_fuzetea_logo.png",
        "dataFrom" : 1
        },
    "keri" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coca-Cola",
        "logo" : "https://www.coca-cola.com/content/dam/onexp/au/en/home-images/brands/logos/au_keri_logo_154x180.png",
        "dataFrom" : 1
        },
    "Mother" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coca-Cola",
        "logo" : "https://upload.wikimedia.org/wikipedia/en/f/f3/Mother_Logo.png?20140911075823",
        "dataFrom" : -1
        },
    "Neverfail" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coca-Cola",
        "logo" : "https://www.neverfail.com.au/logo-gbr.svg",
        "dataFrom" : -1
        },
    "Lemon_and_Paeroa" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coca-Cola",
        "logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Lemon_and_Paeroa.jpg/300px-Lemon_and_Paeroa.jpg",
        "dataFrom" : -1
        },




    "Flora" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://seeklogo.com/images/F/flora-logo-BB2A0C7C9D-seeklogo.com.png",
        "dataFrom" : -1
    },
    "Comfort" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/a8c2ae9b3e2c4dae8c7223a81b8dd49f98cfd266-1080x1080.png?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "Lipton" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauRonQ3TRVtyNd_8LR4Pz4JKeG8sypx8kdp73COFzsA&s",
        "dataFrom" : -1
    },
    "Bertolli" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://w7.pngwing.com/pngs/450/755/png-transparent-bertolli-hd-logo.png",
        "dataFrom" : -1
    },
    "Ben_and_Jerrys" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/bdfd6b3653902d668fa8fa5c430ab63be1676271-280x280.png?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "Streets" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/ab3ec09fd5013945f5859820285627cffe189653-1080x1080.jpg?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "Magnum" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://static.wikia.nocookie.net/logopedia/images/a/aa/Magnum_2021_2.png/revision/latest?cb=20210422115300",
        "dataFrom" : -1
    },
    "Weis" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwcd7O7Z17tzqAy5B3-JN5KEbWEXJd7LuwU9J8MTxNA&s",
        "dataFrom" : -1
    },
    "Calippo" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH56LYrwrQb-hWa-yEtXxq79V3Mbru6e4T4qMjFyOCsA&s",
        "dataFrom" : -1
    },
    "Hellmanns" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://static.wikia.nocookie.net/logopedia/images/f/fa/Hellmann%27s-2017.png/revision/latest/scale-to-width-down/300?cb=20210625180744",
        "dataFrom" : -1
    },
    "Continental" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/3eac4d8c3bc3b5ff714236fcd60bd7f1b0cf658e-1080x1080.jpg?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "Dove" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/db75ae243befa00aa3cdb2eaf546b0c3aa2ab5d2-1080x1080.jpg?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "Lux" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.metcash.media/image/upload/f_auto,c_limit,w_750,q_auto/igashop/images/83650",
        "dataFrom" : -1
    },
    "Pears" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00815069020339/1a5ca48de12885775d889e071a9a9737_large.png&width=512&type=webp&quality=90",
        "dataFrom" : -1
    },
    "Vaseline" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/c7a72a63290bb4615a33d99c7d721aaa7ffb335e-1080x1080.jpg?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "Sunsilk" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/50b0db44c426c67a846f129115d87e8f730ceedc-1080x1080.jpg?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "TRESemme" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/b2eac826b69544fba416988504799718401e6bd7-1080x1080.jpg?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "Impulse" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/8ec1d90c31af535ef72f6c86040b485b82b5dc44-280x280.jpg?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "Lynx" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/81a3d4dbeb4e81c5c5443bd3616e23b6333428d4-1080x1080.png?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "Rexona" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/96f53a24e6505280f0e7d04764da88255f1ac5b2-1080x1080.svg?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : -1
    },
    "Brut" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://brut.com.au/media/logo/stores/36/Brut-Logo-Nav.png",
        "dataFrom" : -1
    },
    "Omo" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/c7797bb23f41427d002b1aafaabc4d6df67dbf2f-1080x1080.jpg?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "Surf" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/e80729857a4e391984df4473831a0cce25271b02-280x280.jpg?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "Persil" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/49f021024dbc823ce3fd71bac47d5627f560d333-1080x1080.jpg?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "Jif" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://static.wikia.nocookie.net/logopedia/images/9/9d/Jif_cleaning_logo.svg/revision/latest?cb=20101026151049",
        "dataFrom" : -1
    },
    "Simple" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/389e120e3a8a59dcafd5f8ae35f21e0460365303-1080x1080.jpg?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "St.Ives" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/e76dcf796bea9f385d056c4dee1beba04244eb5c-1080x1080.jpg?w=700&h=700&fit=crop&auto=format",
        "dataFrom" : 1
    },
    "Domestos" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Unilever",
        "logo" : "https://cdn.sanity.io/images/92ui5egz/production/9c1c07e7e468bc88ebf369dce27e46fb8134b330-1080x1080.jpg?w=375&h=375&fit=crop&auto=format",
        "dataFrom" : -1
    },






    "Dolmio" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-04/Logos_Dolmio.png?itok=KyGU1SgV",
        "dataFrom" : 1
    },
    "KanTong" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/kantong.png?itok=FqTkZDoe",
        "dataFrom" : 1
    },
    "MasterFoods" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/masterfoods.png?itok=cADuJrsE",
        "dataFrom" : 1
    },
    "Bens_Original" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2023-07/FINAL%20Bens%20Original%20Orange_RBG_1080x1080.jpeg?itok=wpyavNUC",
        "dataFrom" : 1
    },
    "Seeds_of_Change" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-09/MSI2017_05_Seeds_of_Change_UK_VectorLogo_CMYK.jpg?itok=S9pRl9Ci",
        "dataFrom" : 1
    },
    "Wrigley" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://seeklogo.com/images/W/wrigley-logo-18365C401B-seeklogo.com.gif",
        "dataFrom" : -1
    },
    "Extra" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Extra%20Large.png?itok=8AIDZWPF",
        "dataFrom" : 1
    },
    "5_Gum" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%205%20Gum%20Large.png?h=9a1cfbe1&itok=Ksa8fNB-",
        "dataFrom" : 1
    },
    "Juicy_Fruit" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Juicy%20Fruit%20Large.png?itok=wLFHUcoY",
        "dataFrom" : 1
    },
    "Big_Red" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Big%20Red%20Large.png?itok=4J0uklyl",
        "dataFrom" : 1
    },
    "Hubba_Bubba" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Hubba%20Bubba%20Large.png?itok=Fb2DBZvp",
        "dataFrom" : 1
    },
    "Eclipse" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Eclipse%20Large.png?h=297da09b&itok=8VUY4mny",
        "dataFrom" : 1
    },
    "LifeSavers" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Lifesavers%20Large.png?itok=b8VoBs8B",
        "dataFrom" : 1
    },
    "Starburst" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Starburst%20Large.png?itok=hccn_eh3",
        "dataFrom" : 1
    },
    "Skittles" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Skittles%20Large.png?h=297da09b&itok=cF7bpSL6",
        "dataFrom" : 1
    },
    "M_and_Ms" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20M%26M%20Large.png?h=297da09b&itok=WERlffAT",
        "dataFrom" : 1
    },
    "Mars" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Mars%20Large.png?h=297da09b&itok=dyW_xs9x",
        "dataFrom" : 1
    },
    "MilkyWay" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://logos-download.com/wp-content/uploads/2016/04/Milky_Way_logo_blue_European.jpg",
        "dataFrom" : 1
    },
    "Bounty" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Bounty%20Large.png?h=297da09b&itok=EqaXIH5w",
        "dataFrom" : 1
    },
    "Snickers" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Snickers%20Large.png?h=297da09b&itok=vDRly3rC",
        "dataFrom" : 1
    },
    "Maltesers" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Maltesers%20Large.png?h=297da09b&itok=oLMhkLTu",
        "dataFrom" : 1
    },
    "Pods" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/pods.png?itok=L4h8w6u-",
        "dataFrom" : 1
    },
    "Twix" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Twix%20Large.png?h=297da09b&itok=FQ3ftKIc",
        "dataFrom" : 1
    },
    "Celebrations" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://www.mars.com/sites/g/files/dfsbuz106/files/styles/image_grid_1_1_282x282/public/2023-09/Mars%20Brand%20Logos%20Web%20Confectionery%20Celebrations%20Large.png?h=297da09b&itok=7LOG6AI_",
        "dataFrom" : 1
    },
    "Goodo" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/goodo.png?itok=4HkjPmsX",
        "dataFrom" : 1
    },
    "Advance" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/advance.png?itok=tYDI0NFn",
        "dataFrom" : 1
    },
    "Catsan" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/catsan.png?itok=QgaS3bM7",
        "dataFrom" : 1
    },
    "Pedigree" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-04/Logos_Pedigree.png?itok=qg97_UUg",
        "dataFrom" : -1
    },
    "Dine" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/dine.png?itok=8-1f2rk3",
        "dataFrom" : 1
    },
    "Exelpet" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/exelpet.png?itok=ZsIFmeUO",
        "dataFrom" : 1
    },
    "GoldenCob" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/gldencob.png?itok=__rqyTLJ",
        "dataFrom" : 1
    },
    "Greenies_Dental_Treats" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/greenies%20%284%29.png?itok=oAlm6GTH",
        "dataFrom" : 1
    },
    "Harmony" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/harmonywildbird.png?itok=c5uiew4K",
        "dataFrom" : 1
    },
    "Linnaeus" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2020-05/Mars%20Petcare%20Product%20Logo%20Linnaeus%20Large.png?itok=DkzxH-li",
        "dataFrom" : 1
    },
    "MyDog" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/mydogblack.png?itok=a8fYIb0q",
        "dataFrom" : 1
    },
    "Optimum" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/optimum.png?itok=P1mEWaS-",
        "dataFrom" : 1
    },
    "Schmackos" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/shcmackos.png?itok=f-7jEESM",
        "dataFrom" : 1
    },
    "Trill" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/trill.png?itok=_Ch1bVyp",
        "dataFrom" : 1
    },
    "Eukanuba" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-02/eukanuba.png?itok=LXno00Qi",
        "dataFrom" : 1
    },
    "IAMS" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/iams.png?itok=97msuazk",
        "dataFrom" : 1
    },
    "Nutro" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-07/nutro.png?itok=HlmwgPwJ",
        "dataFrom" : 1
    },
    "Royal_Canin" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-03/Logos_BUSINESS_SEGMENTS_23.png?itok=6cjiT-4g",
        "dataFrom" : 1
    },
    "Temptations" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-04/Logos_Temptations.png?itok=-ipKKUAv",
        "dataFrom" : 1
    },
    "Whiskas" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mars",
        "logo" : "https://aus.mars.com/sites/g/files/jydpyr531/files/styles/brands_grid/public/2019-02/whiskas.png?itok=gWtcDHpN",
        "dataFrom" : 1
    },




    "Daim" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mondelez",
        "logo" : "https://images.ctfassets.net/zo243s55pyir/4SX3RXqi…752943b61/daim_logo_rgb_no202002.png?fm=webp&q=80",
        "dataFrom" : 1
    },
    "Toblerone" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mondelez",
        "logo" : "https://images.ctfassets.net/zo243s55pyir/5aN6uj37MP62eziiMjtcAY/2cfe117308bb68528721f182cecffd55/Toblerone.png?fm=webp&q=80",
        "dataFrom" : 1
    },
    "Cadbury" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mondelez",
        "logo" : "https://images.ctfassets.net/zo243s55pyir/4d8pfruZ0Tkt8mSE2OHLSA/a264c174d8c121361644385d53ebe4ad/Cadbury.png?fm=webp&q=80",
        "dataFrom" : 1
    },
    "Philadelphia2" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mondelez",
        "logo" : "https://images.ctfassets.net/zo243s55pyir/0L7JCImH8mkI1jqgg3QVN/2c321dbc1c67cc6c3244dc54135915ef/Philadelphia.png?fm=webp&q=80",
        "dataFrom" : 1
    },
    "Ritz" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mondelez",
        "logo" : "https://images.ctfassets.net/zo243s55pyir/5N7kajhcg7dlQ8rLkxAdaJ/d1fe88715b2513a64b5f4a5fd98a0a7b/Ritz.png?fm=webp&q=80",
        "dataFrom" : 1
    },
    "Oreo" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mondelez",
        "logo" : "https://images.ctfassets.net/zo243s55pyir/IbKG15HsIQXAAw3hMibI4/b825326168f9ad1ccd382b36c85c3605/Oreo.png?fm=webp&q=80",
        "dataFrom" : 1
    },
    "Pascall" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mondelez",
        "logo" : "https://images.ctfassets.net/zo243s55pyir/47MzUeuISPLwZqPL9xV8uf/54fdd86b105049083d438734d685cf0e/Pascall.png?fm=webp&q=80",
        "dataFrom" : 1
    },
    "Sour_Patch_Kids" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mondelez",
        "logo" : "https://images.ctfassets.net/zo243s55pyir/1zG8QvCtYXwQx8IUwwteW1/a57413b49cb18ab03111db4b0d28017f/SPK.png?fm=webp&q=80",
        "dataFrom" : 1
    },
    "belVita" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mondelez",
        "logo" : "https://images.ctfassets.net/zo243s55pyir/6X13NwmRUBw685ana5r6nH/de50693b2c1771a38b916608ba69d685/belVita.png?fm=webp&q=80",
        "dataFrom" : 1
    },
    "The_Natural_Confectionary_Company" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mondelez",
        "logo" : "https://images.ctfassets.net/zo243s55pyir/3Baw1JBC26VtqQ8DHRCuH8/80e5eb1ce83b2eec60d2521e8f52766a/natural_confectionery_co_anz.jpg?fm=webp&q=80",
        "dataFrom" : 1
    },
    "Gourmet_Foods" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Mondelez",
        "logo" : "https://images.ctfassets.net/zo243s55pyir/1D7vgkWPoMQONOHKXeEl73/af15b580d9e3c02d1e469759342dc023/gourmet_food_logo.png?fm=webp&q=80",
        "dataFrom" : 1
    },


    "TipTop" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "ABF",
        "logo" : "https://www.abf.co.uk/content/dam/abf/corporate/images/business-segments/logos-510x380/GWF_TipTop_v1.jpg",
        "dataFrom" : 1
    },
    "Twinings" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "ABF",
        "logo" : "https://www.abf.co.uk/content/dam/abf/corporate/images/business-segments/logos-510x380/Twinings.jpg",
        "dataFrom" : 1
    },
    "Yumis" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "ABF",
        "logo" : "https://www.abf.co.uk/content/dam/abf/corporate/images/business-segments/logos-510x380/GWF_Yumis_v2.jpg",
        "dataFrom" : 1
    },
    "Abbotts_Bakery" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "ABF",
        "logo" : "https://www.abf.co.uk/content/dam/abf/corporate/images/business-segments/logos-510x380/GWF_Abbots.jpg",
        "dataFrom" : 1
    },
    "Burgen" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "ABF",
        "logo" : "https://www.abf.co.uk/content/dam/abf/corporate/images/business-segments/logos-510x380/GWF_Burgen_v2.jpg",
        "dataFrom" : 1
    },
    "Don" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "ABF",
        "logo" : "https://www.abf.co.uk/content/dam/abf/corporate/images/business-segments/logos-510x380/GWF_Don.jpg",
        "dataFrom" : 1
    },
    "Golden_Bakery" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "ABF",
        "logo" : "https://www.abf.co.uk/content/dam/abf/corporate/images/business-segments/logos-510x380/GWF_Golden.jpg",
        "dataFrom" : 1
    },
    "Jarrah" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "ABF",
        "logo" : "https://www.abf.co.uk/content/dam/abf/corporate/images/business-segments/logos-510x380/Jarrah.jpg",
        "dataFrom" : 1
    },
    "Jordans" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "ABF",
        "logo" : "https://www.abf.co.uk/content/dam/abf/corporate/images/business-segments/logos-510x380/JDR_Jordan.jpg",
        "dataFrom" : 1
    },
    "Pataks" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "ABF",
        "logo" : "https://www.abf.co.uk/content/dam/abf/corporate/images/business-segments/logos-510x380/Ab_World_Foods_Pataks.jpg",
        "dataFrom" : 1
    },
    "Ploughmans_Bakery" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "ABF",
        "logo" : "https://www.abf.co.uk/content/dam/abf/corporate/images/business-segments/logos-510x380/GWF_Ploughmans_v2.jpg",
        "dataFrom" : 1
    },
    "Sunblest" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "ABF",
        "logo" : "https://www.abf.co.uk/content/dam/abf/corporate/images/business-segments/logos-510x380/KIngsmill_Sunblest.jpg",
        "dataFrom" : 1
    },
    "Ovaltine" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "ABF",
        "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUt1xeb0nRJWvU5LAhfHeUcAgOkeeeC7ufoXJwyrJ_dQ&s",
        "dataFrom" : 1
    },



    "All-Bran" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/all-bran.img.png/1574405298815.png",
        "dataFrom" : 1
    },
    "Bright_Start" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/bright-start.img.png/1690292442730.png",
        "dataFrom" : 1
    },
    "Coco_Pops" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/coco-pops.img.png/1690292111288.png",
        "dataFrom" : 1
    },
    "Crispix" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/crispix.img.png/1574405293324.png",
        "dataFrom" : 1
    },
    "Crunchy_Nut" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/crunchy-nut.img.png/1551863436249.png",
        "dataFrom" : 1
    },
    "Froot_Loops" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/froot-loops.img.png/1551864218655.png",
        "dataFrom" : 1
    },
    "Frosties" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/frosties.img.png/1574405297833.png",
        "dataFrom" : 1
    },
    "Guardian" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/guardian.img.png/1574405296022.png",
        "dataFrom" : 1
    },
    "Just_Right" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/just-right.img.png/1574405296447.png",
        "dataFrom" : 1
    },
    "K-Time" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/k-time.img.png/1551863897385.png",
        "dataFrom" : 1
    },
    "LCMs" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/lcms.img.png/1574405297772.png",
        "dataFrom" : 1
    },
    "Nutri-Grain" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/nutri-grain.img.png/1630670425247.png",
        "dataFrom" : 1
    },
    "Pop-Tarts" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/pop-tarts.img.png/1560340909701.png",
        "dataFrom" : 1
    },
    "Rice_Bubbles" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/rice-bubbles.img.png/1574405294872.png",
        "dataFrom" : 1
    },
    "Special_K" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/special-k.img.png/1700722106233.png",
        "dataFrom" : 1
    },
    "Sultana_Bran" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/sultana-bran.img.png/1551864116364.png",
        "dataFrom" : 1
    },
    "Sustain" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/sustain.img.png/1574405297134.png",
        "dataFrom" : 1
    },
    "SuniBrite" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://www.kelloggs.com.au/content/Australia/kelloggs_au/en_AU/pages/brands/sunibrite.img.png/1635350849718.png",
        "dataFrom" : 1
    },
    "Pringles" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kelloggs",
        "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Pringles_2021.svg/800px-Pringles_2021.svg.png",
        "dataFrom" : -1
    },




    "Yoplait" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "General_Mills",
        "logo" : "https://static.wikia.nocookie.net/logopedia/images/f/fa/YoplaitPng.png/revision/latest?cb=20191229024215",
        "dataFrom" : -1
    },
    "Old_El_Paso" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "General_Mills",
        "logo" : "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_100,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Fcorporate%2Fcorporate-master%2Fimages%2Flogos%2Fbrands%2Foep-logo.png%3Fw%3D200%26rev%3D488f5051140d4570af2857badc81e521",
        "dataFrom" : 1
    },
    "Nature_Valley" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "General_Mills",
        "logo" : "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_100,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Fcorporate%2Fcorporate-master%2Fimages%2Flogos%2Fbrands%2Fnature-valley-logo-revised.png%3Fw%3D190%26rev%3D2ec6733260754cfbb864a02f018eb0c9",
        "dataFrom" : 1
    },
    "Betty_Crocker" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "General_Mills",
        "logo" : "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_100,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Fcorporate%2Fcorporate-master%2Fimages%2Flogos%2Fbrands%2Fbc-logo-revised.jpg%3Fw%3D250%26rev%3D62f4562354934606a7c393ea9746a5f0",
        "dataFrom" : 1
    },
    "25_degree_South" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "General_Mills",
        "logo" : "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_100,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Fcorporate%2Fcorporate-master%2Fimages%2Flogos%2Fbrands%2F25south-logo.jpg%3Fw%3D200%26rev%3D75450e57922a4b1e99c9f84b2fdc2355",
        "dataFrom" : 1
    },
    "Fibre_One" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "General_Mills",
        "logo" : "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_100,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Fcorporate%2Fcorporate-master%2Fimages%2Flogos%2Fbrands%2Ffibre-one-thumbnail.jpg%3Fw%3D571%26rev%3D4bd0c24228424030979e99ab1cce328e",
        "dataFrom" : 1
    },
    "Haagen-Dazs" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "General_Mills",
        "logo" : "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_100,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Fcorporate%2Fcorporate-master%2Fimages%2Flogos%2Fbrands%2Fhd-logo-march-22.png%3Fw%3D480%26rev%3D483187ff46c84cbe86fd696ffb8043d9",
        "dataFrom" : 1
    },
    "Latina_Fresh" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "General_Mills",
        "logo" : "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_100,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Fcorporate%2Fcorporate-master%2Fimages%2Flogos%2Fbrands%2Flatina-revised-23.png%3Fw%3D400%26rev%3D568f1c25a72147f7a3443568c893dd1a",
        "dataFrom" : 1
    },
    "Pecks" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "General_Mills",
        "logo" : "https://brandsitesplatform-res.cloudinary.com/image/fetch/w_100,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_1.0,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Fcorporate%2Fcorporate-master%2Fimages%2Flogos%2Fbrands%2Fpeckslogotest.png%3Fw%3D200%26rev%3D8ebf88c988094a52b3bf124f73a54ed2",
        "dataFrom" : 1
    },



    "Pepsi" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/pepsi_anz_brands.png?sfvrsn=6e2e92aa_2",
        "dataFrom" : 1
    },
    "7_Up" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/7up_anz_brands.png?sfvrsn=8067b022_2",
        "dataFrom" : 1
    },
    "Mountain_Dew" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/mtndew_anz_brands.png?sfvrsn=bd665cd5_2",
        "dataFrom" : 1
    },
    "Gatorade" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/gatorade_anz_brands.png?sfvrsn=bb2d3c3b_2",
        "dataFrom" : 1
    },
    "Frito-Lay" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fritolay_company_logo.svg/640px-Fritolay_company_logo.svg.png",
        "dataFrom" : -1
    },
    "Fritos" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://upload.wikimedia.org/wikipedia/en/1/11/Fritos_logo.png",
        "dataFrom" : -1
    },
    "Lays" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://e7.pngegg.com/pngimages/433/861/png-clipart-lay-s-frito-lay-fritos-potato-chip-logo-others-lay-s-frito-lay.png",
        "dataFrom" : -1
    },
    "Doritos" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/doritos_anz_brands.png?sfvrsn=7f296e23_2",
        "dataFrom" : 1
    },
    "Smiths" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/smiths_anz_brands.png?sfvrsn=98b92a5f_2",
        "dataFrom" : 1
    },
    "Cheetos" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/cheetos_anz_brands.png?sfvrsn=68aff688_2",
        "dataFrom" : 1
    },
    "Red_Rock_Deli" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/rrd_anz_brands.png?sfvrsn=2d36a68c_2",
        "dataFrom" : 1
    },
    "Twisties" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/untitled-design-(88).png?sfvrsn=1a67a4c0_0",
        "dataFrom" : 1
    },
    "SunBites" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/sunbites_anz_brands.png?sfvrsn=d78ee4d0_2",
        "dataFrom" : 1
    },
    "Nobbys" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/nobbys_anz_brands.png?sfvrsn=1384dcfb_2",
        "dataFrom" : 1
    },
    "Sakata" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/sakata_anz_brands.png?sfvrsn=115a0a1c_2",
        "dataFrom" : 1
    },
    "Burger_Rings" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/burgerrings_anz_brands.png?sfvrsn=bb972e8f_2",
        "dataFrom" : 1
    },
    "Tasty_Toobs" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/default-album/copy-of-untitled-(8).png?sfvrsn=22b85e24_0",
        "dataFrom" : 1
    },
    "Parkers" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/parkers_anz_brands.png?sfvrsn=5554ae76_2",
        "dataFrom" : 1
    },
    "Tostitos" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/tostitos_anz_brands.png?sfvrsn=61ada23a_2",
        "dataFrom" : 1
    },
    "Off_The_Eaten_Path" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/otep_anz_brands.png?sfvrsn=da7a7337_2",
        "dataFrom" : 1
    },
    "Delisio" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://www.pepsico.com.au/images/librariesprovider32/product-information/delisico_anz_brands.png?sfvrsn=24a09c0_2",
        "dataFrom" : 1
    },
    "Sabra" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Pepsico",
        "logo" : "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Sabra_%28food_industry_business%29_logo.png/400px-Sabra_%28food_industry_business%29_logo.png",
        "dataFrom" : -1
    },




    "Highgate" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/wk9-fy23-brand-highgate-merch-220x280.jpeg",
        "dataFrom" : 1
    },
    "Sams_Pantry" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/content/wk26-2020-sams-pantry-main-logo.svg",
        "dataFrom" : 1
    },
    "Thomas_Dux_Range" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/wk21-merch-card-thomas-dux.jpg",
        "dataFrom" : 1
    },
    "Plantitude" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/wk12-plantitude-merch-220x280.png",
        "dataFrom" : 1
    },
    "Delicious_Nutritious" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/wk15-our-brands-delicious-nutricious-90x90.png",
        "dataFrom" : 1
    },
    "Farmers_Own_Milk" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/farmersown-merch-300x380.jpg",
        "dataFrom" : 1
    },
    "Two_Seeds" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/two-seeds-coffee-merch-220x280.jpeg",
        "dataFrom" : 1
    },
    "Macro" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/macro-whole-foods-merch-card-2021-220x280.png",
        "dataFrom" : 1
    },
    "Free_From" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/gluttenfree-merch-90x90.jpg",
        "dataFrom" : 1
    },
    "Little_Ones" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/wk43-apr17-merch-littleones-220x280-v2.jpg",
        "dataFrom" : 1
    },
    "Voeu" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/wk43-apr17-merch-voeu-220x280-v2.jpg",
        "dataFrom" : 1
    },
    "Apollo" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/merch-apollo-220x280-v3.jpg",
        "dataFrom" : 1
    },
    "Baxters" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/merch-baxters-220x280-v3.jpg",
        "dataFrom" : 1
    },
    "Your_Majesty" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/merch-majesty-220x280-v3.jpg",
        "dataFrom" : 1
    },
    "Smitten" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/merch-smitten-220x280-v3.jpg",
        "dataFrom" : 1
    },
    "La_Molisana" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/wk13-la-molisana-merch-d.png",
        "dataFrom" : 1
    },
    "Balnea" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Woolworths",
        "logo" : "https://cdn0.woolworths.media/content/cards/3307-our-brands-balnea-tile-d.jpg",
        "dataFrom" : 1
    },





    "Cub" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/cusp/about-coles/our-brands/cub/content-card-tiles/cub-cta-update.png",
        "dataFrom" : 1
    },
    "Natures_Kitchen" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/about-coles/our-brand/images/natures-kitchen-thumbnail-470x282.png",
        "dataFrom" : 1
    },
    "Coles_PerForm" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/about-coles/our-brand/thumbnails/PerForm-thumbnail-800x480.jpg",
        "dataFrom" : 1
    },
    "Im_Free_From" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/about-coles/our-brand/thumbnails/Hub-Page-Cat-Tiles-470x282px-Im-Free-From.jpg",
        "dataFrom" : 1
    },
    "Wellness_Road" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/about-coles/our-brand/thumbnails/Hub-Page-Cat-Tiles-470x282px-Wellness-Road.jpg",
        "dataFrom" : 1
    },
    "Graze" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/cusp/sustainability/content-card-tiles/sustainability-graze-beef-lamb-content-card-tile-423x243px.jpg",
        "dataFrom" : 1
    },
    "Wild_Tides" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/about-coles/our-brand/thumbnails/wild-tide-column-tiles-470x282.jpg",
        "dataFrom" : 1
    },
    "Urban_Coffee_Culture" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/about-coles/our-brand/thumbnails/Hub-Page-Cat-Tiles-470x282px-Urban-Coffee.jpg",
        "dataFrom" : 1
    },
    "Daley_St_Coffee" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/about-coles/our-brand/thumbnails/daley-street-landing-page-tile-470x282.jpg",
        "dataFrom" : 1
    },
    "Breakfast_on_the_Move" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/about-coles/our-brand/thumbnails/BOM_thumbnail_470x282.jpg",
        "dataFrom" : -1
    },
    "Woofin_good" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/cusp/about-coles/our-brands/exclusive-brands/content-card-tiles/own-brand-woofin-good-content-card-423x243px.jpg",
        "dataFrom" : -1
    },
    "Elevate" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/cusp/about-coles/our-brands/elevate/content-card-tiles/elevate-content-card-tile-428x257.jpg",
        "dataFrom" : -1
    },
    "KOi" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/about-coles/our-brand/thumbnails/koi-thumbnail-470x282.jpg",
        "dataFrom" : -1
    },
    "iON" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/about-coles/our-brand/featured-images/ion/thumbnail-470x282.jpg",
        "dataFrom" : -1
    },
    "Coles_Ultra" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/about-coles/exclusive-brands/coles-ultra/UltraLogo-470x282.png",
        "dataFrom" : -1
    },
    "Zena_Haircare" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Coles",
        "logo" : "https://www.coles.com.au/content/dam/coles/about-coles/our-brand/thumbnails/June21-zena-thumbnail-470x282.jpg",
        "dataFrom" : -1
    },




    "Bega" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Bega_Group",
        "logo" : "https://www.bega.net.au/etc/designs/begaaus/clientlibs/img/bega-logo.png",
        "dataFrom" : 1
    },
    "Tatura" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Bega_Group",
        "logo" : "https://www.tatura.com.au/wp-content/themes/tatura-2017/images/logo-colour.png",
        "dataFrom" : 1
    },
    "B_honey" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Bega_Group",
        "logo" : "https://cdn.bhoneyaustralia.com.au/wp-content/uploads/2022/03/MicrosoftTeams-image-10-768x768.png",
        "dataFrom" : 1
    },
    "Vegemite" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Bega_Group",
        "logo" : "https://shop.nma.gov.au/cdn/shop/products/399576M_540x_d0d83d10-82ab-4296-84b9-1303d71a1c0b.jpg?v=1609817717",
        "dataFrom" : 1
    },
    "Farmers_Table" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Bega_Group",
        "logo" : "https://myfarmerstable.com/wp-content/uploads/2018/09/FarmersTable-Logo-b.png",
        "dataFrom" : 1
    },
    "ZoOSH" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Bega_Group",
        "logo" : "https://images.squarespace-cdn.com/content/v1/5e9fe5acbfde6870cd30bd6e/1587881917986-4GCM6YIU83ZHXH8PNRA4/Zoosh-logo.png",
        "dataFrom" : 1
    },
    "HAPPi" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Bega_Group",
        "logo" : "https://cdn.begabio.com/wp-content/uploads/2020/05/Happi-Toddler-Logo1-1.jpg",
        "dataFrom" : 1
    },
    "Dairy_Farmers" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Bega_Group",
        "logo" : "https://begagroup.com.au/wp-content/themes/Begacheese3.0/images/DairyFarmers.png",
        "dataFrom" : -1
    },
    "Pura_Milk" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Bega_Group",
        "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCa9BIsSwi923_-zjIr_A4tsLjARKrTFU3vCYFujAWA&s",
        "dataFrom" : -1
    },
    "Dare_Iced_Coffee" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Bega_Group",
        "logo" : "https://www.dareicedcoffee.com.au/wp-content/themes/dareicedcoffee/assets/img/logo_dare.png",
        "dataFrom" : -1
    },
    "Farmers_Union" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Bega_Group",
        "logo" : "https://www.farmersunionyogurt.com.au/wp-content/themes/farmers-union/assets/img/logo-1.png",
        "dataFrom" : -1
    },
    "Zooper_Dooper" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Bega_Group",
        "logo" : "https://static.wikia.nocookie.net/logopedia/images/3/3d/Zooper_Dooper_1.png/revision/latest?cb=20190403033352",
        "dataFrom" : -1
    },



    "Kraft" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://logowik.com/content/uploads/images/242_kraft.jpg",
        "dataFrom" : 1
    },
    "Heinz" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://cdn.iconscout.com/icon/free/png-256/free-heinz-282581.png",
        "dataFrom" : 1
    },
    "Golden_Circle" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-xzizTtmz11s5rImZaNlhB29Un9dSWBhhIjPMSboEA&s",
        "dataFrom" : 1
    },
    "Bulls_Eye" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://d2ozwg77fjfk77.cloudfront.net/607/studio/assets/v1663311768656_914805609/Bulls-Eye.png",
        "dataFrom" : 1
    },
    "Watties" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://d2ozwg77fjfk77.cloudfront.net/607/studio/assets/v1663647899486_881711764/Wattie's.png",
        "dataFrom" : 1
    },
    "Saxa" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-xzizTtmz11s5rImZaNlhB29Un9dSWBhhIjPMSboEA&s",
        "dataFrom" : 1
    },
    "Pacific" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://d2ozwg77fjfk77.cloudfront.net/607/studio/assets/v1663311949182_1185898106/Pacific.png",
        "dataFrom" : 1
    },
    "Greenseas" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://d36rz30b5p7lsd.cloudfront.net/404/studio/assets/v1632818612619_1017934487/MicrosoftTeams-image%20(24).png",
        "dataFrom" : 1
    },
    "Monbulk" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://d2ozwg77fjfk77.cloudfront.net/607/studio/assets/v1663312071003_797965990/Monbulk.png",
        "dataFrom" : 1
    },
    "Cottees" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://upload.wikimedia.org/wikipedia/en/9/93/Cottee%27s_logo.jpg",
        "dataFrom" : 1
    },
    "Fountain" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://d2ozwg77fjfk77.cloudfront.net/607/studio/assets/v1655894300550_618053337/Kraft_Heinz_Logos_220x160-FOUNTAIN.jpg",
        "dataFrom" : 1
    },
    "Hamper" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://d2ozwg77fjfk77.cloudfront.net/607/studio/assets/v1663312202067_283793977/Hamper.png",
        "dataFrom" : 1
    },
    "HP_Sauce" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/en/thumb/8/87/HPsauce.svg/640px-HPsauce.svg.png&w=640&q=50",
        "dataFrom" : 1
    },
    "Gravox" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Cbd1XVuhEP_NVsRMkdyKt1XkJbdFgEgM3rRyEzqW-Q&s",
        "dataFrom" : 1
    },
    "F.Whitlock_and_Sons" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://d2ozwg77fjfk77.cloudfront.net/607/studio/assets/v1663312320496_11520214/Whitlock's.png",
        "dataFrom" : 1
    },
    "Lea_and_Perrins" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://upload.wikimedia.org/wikipedia/commons/8/84/Leaandperrins_logo.png",
        "dataFrom" : 1
    },
    "Foster_Clarks" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://d36rz30b5p7lsd.cloudfront.net/486/studio/assets/v1627049383971_286756867/Fosters_220x160px.png",
        "dataFrom" : 1
    },
    "Sweet_n_Low" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://d2ozwg77fjfk77.cloudfront.net/607/studio/assets/v1663312556775_1480383893/Sweet-N-Low.png",
        "dataFrom" : 1
    },
    "Cerebos" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://d2ozwg77fjfk77.cloudfront.net/607/studio/assets/v1663648163819_1791689766/Cerebos.png",
        "dataFrom" : 1
    },
    "Philadelphia" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Kraft-Heinz",
        "logo" : "https://images.ctfassets.net/zo243s55pyir/0L7JCImH8mkI1jqgg3QVN/2c321dbc1c67cc6c3244dc54135915ef/Philadelphia.png?fm=webp&q=80",
        "dataFrom" : -1
    },




    "MeadowLea" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/MEADOWLEA/Meadowlea__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Praise" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/PRAISE/Praise__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Helgas" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/HELGAS/Helgas__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.png",
        "dataFrom" : 1
    },
    "Wonder_White" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/WONDER/Wonder__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Puhoi_Valley" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/NZ-Retail/Puhoi_Valley__FillWzQ2MCwyNjBd.png",
        "dataFrom" : 1
    },
    "Crest_Chicken" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/Fiji-Brand-Logos/Creast_Chicken__FillWzQ2MCwyNjBd.png",
        "dataFrom" : 1
    },
    "White_Wings" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/WHITE-WINGS/White-Wings__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Edmonds" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/NZ-Retail/Edmonds__FillWzYwMCw2MDBd.png",
        "dataFrom" : 1
    },
    "Vogels" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/NZ-Retail/Vogels__FillWzQ2MCwyNjBd.png",
        "dataFrom" : 1
    },
    "Molenberg" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/NZ-Retail/Molenberg__FillWzYwMCw2MDBd.png",
        "dataFrom" : 1
    },
    "Cornwells" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/CORNWELLS/Cornwells__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Country_Life_Bakery" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/COUNTRY-LIFE/Country-Life__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Crisco" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/CRISCO/Crisco__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Goldn_Canola" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/GOLDN-CANOLA/GoldnCanola__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "La_Famiglia" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/LA-FAMIGLIA/LaFa__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Natures_Fresh" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/NZ-Retail/Natures_Fresh__FillWzYwMCw2MDBd.png",
        "dataFrom" : 1
    },
    "Olivani" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/NZ-Retail/Olivani__FillWzQ2MCwyNjBd.png",
        "dataFrom" : 1
    },
    "Olive_Grove" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/OLIVE-GROVE/Olive-Grove__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Pampas" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/PAMPAS/Pampas__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "CSR" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/CSR/CSR__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Plantry" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/NZ-Retail/Plantry__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.png",
        "dataFrom" : 1
    },
    "Equal" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/EQUAL/Equal__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Fortune" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/Fiji-Brand-Logos/Fortune__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.png",
        "dataFrom" : 1
    },
    "Bush_Oven" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/BUSH-OVEN/Bushe-Oven__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Buttercup" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/BUTTERCUP/Buttercup__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Defiance" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/DEFIANCE/Defiance__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "ETA" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/ETA/ETA__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Holbrooks" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/HOLBROOKS/Holbrooks__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Lawsons" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/LAWSONS/Lawsons__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Mighty_Soft" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/MIGHTY-SOFT/Mighty-Soft__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Oli_and_Vine" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/Brand-Logos-Banners-Products/AU-Retail/OLI-VINE/Oli-Vine__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.jpg",
        "dataFrom" : 1
    },
    "Whole_Earth" : {
        "type" : 0,
        "subtype" : 0,
        "company" : "Wilmar_International",
        "logo" : "https://goodmanfielder.com/assets/default-site/Whole-Earth-Green__PadWzQ2MCwyNjAsIkZGRkZGRiIsMF0.png",
        "dataFrom" : 1
    }
}

const masters = ["Wilmar_International","Kraft-Heinz","Bega_Group","Coles","Woolworths","Pepsico","General_Mills","Kelloggs","ABF","Mondelez","Mars","Unilever","Coca-Cola","Nestle"]

function get_nodes_from_brands(){
  let nodes = []
  let mastersNodes = {}
  let mastersPos = {}
  const masterWidth = 4
  const masterDist = 1500
  const radius = 500
  for(let index=0;index<masters.length;index++){//(let master of masters){
    const master = masters[index]
    const posObj = { x: masterDist*(index%masterWidth), y: masterDist*Math.floor(index/masterWidth) }
    const newData = { data: { id: master+"Inc" }, position: posObj}
    console.log("added master = ")
    console.log(newData)
    nodes.push(newData)
    mastersNodes[master] = []
    mastersPos[master] = posObj
  }
  for(let index=0;index<Object.keys(brands).length;index++){
    const brand = Object.keys(brands)[index]
    //const newData = { data: { id: brand }, position: { x: myPos.x, y: myPos.y }}
    //nodes.push(newData)
    const master = brands[brand].company
    mastersNodes[master].push(brand)
  }
  for(let mIndex=0;mIndex<Object.keys(mastersNodes).length;mIndex++){
    const master = Object.keys(mastersNodes)[mIndex]
    const myBrands = mastersNodes[master]
    const masterPos = mastersPos[master]
    const TAU = 6.2832 //2*PI
    for(let index=0;index<myBrands.length;index++){
        const myPos = {x:0,y:0}//init
        const newBaseRadius = 0.7*radius*Math.max(1, (myBrands.length-12)/12)
        const wavyVal = 1.5*Math.sin(8*TAU*(index/myBrands.length))
        let wavySq = wavyVal*wavyVal
        if(Math.sign(wavyVal) === -1){
            wavySq *= -1
        }
        const myRadius = 0.7*newBaseRadius + 0.15*newBaseRadius*wavySq
        myPos.x = myRadius*Math.cos(TAU*(index/myBrands.length)) + masterPos.x
        myPos.y = myRadius*Math.sin(TAU*(index/myBrands.length)) + masterPos.y
        const newData = { data: { id: myBrands[index] }, position: { x: myPos.x, y: myPos.y }}
        nodes.push(newData)
    }

  }

  return nodes

}

function get_edges_from_brands(){
  let edges = []
  let foundCompanies = []
  for(let index=0;index<Object.keys(brands).length;index++){
    const brand = Object.keys(brands)[index]
    const master = brands[brand].company
    
    const newData = { data: { source: master+"Inc", target: brand ,"target-label": brand} }
    edges.push(newData)
  }
  return edges

}

function get_stylesheet_images(){
  let styleArr = []
  for(let index=0;index<Object.keys(brands).length;index++){
    const brand = Object.keys(brands)[index]

    const newStyle = {
      selector: '#'+brand,
      style: {
        'background-image': "./datasets/brandLogos/"+brand+".png"//brands[brand].logo+"&origin=*"
      }
    }
    styleArr.push(newStyle)
  }
  for(let index=0;index<masters.length;index++){//(let master of masters){
    const master = masters[index]
    const newStyle = {
        selector: '#'+master+"Inc",
        style: {
          'background-image': "./datasets/companyLogos/"+master+"_Co.png"//brands[brand].logo+"&origin=*"
        }
      }
    styleArr.push(newStyle)

  }
  return styleArr
}

function get_total_stylesheet(){
  let totalStyle = []
  const nodeStyle = {
    selector: 'node',
    style: {
    //   'content': 'data(id)', //to have a label
    //   'text-valign': 'center',
      'height': 100,
      'width': 100,
      'background-color': '#FFF',
      'background-fit': 'contain',
      'border-color': '#000',
      'border-width': 1,
      'border-opacity': 0.5
    }
  }
  const edgeStyle = {
    selector: 'edge',
    style: {
      'curve-style': 'bezier',
      'width': 6,
      'target-arrow-shape': 'triangle',
      'line-color': '#ffaaaa',
      'target-arrow-color': '#ffaaaa'
    }
  }
  totalStyle.push(nodeStyle)
  totalStyle.push(edgeStyle)
  const extraStyleSheet = get_stylesheet_images()
  totalStyle.push(...extraStyleSheet)
  return totalStyle
}

const myNodes = get_nodes_from_brands()
const myEdges = get_edges_from_brands()
const myStyleSheet = get_total_stylesheet()

var cy = cytoscape({
    container: document.getElementById('cy'),
  
    boxSelectionEnabled: false,
    autounselectify: true,
  
    //style: cytoscape.stylesheet()
    //style: myStyleSheet,
      // .selector('#bird')
      //   .css({
      //     'background-image': 'https://live.staticflickr.com/7272/7633179468_3e19e45a0c_b.jpg'
      //   }),
      //
      //
      // for(let index=0;index<Object.keys(brands).length;index++){
      //   const brand = Object.keys(brands)[index]
      //   .selector('#'+brand)
      //     .css({
      //       'background-image': brands[brand].logo
      //     }),
      // }
    




    elements: {
      nodes: myNodes,
      edges: myEdges
    },
  
    // layout: {
    //   name: 'breadthfirst',
    //   directed: true,
    //   padding: 10
    // },
    layout: {
        //concentric is good auto format
        //preset is where I set using position : {x:,y:}
        //name: 'concentric',
        name: 'preset',//concentric',
      }

    
  }); // cy init
cy.style()
  .fromJson(myStyleSheet)
  .update()
  
