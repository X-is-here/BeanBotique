const shopItemsAPI = [
    { productID: "P001", itemImg: "../Image/BrewMakers/P001.png", itemDesc: "Brew Maker P1", itemPrice: "$50", category: "brew-maker" },
    { productID: "P002", itemImg: "../Image/BrewMakers/P002.png", itemDesc: "Ice Coffee Maker P2", itemPrice: "$75", category: "brew-maker" },
    { productID: "P003", itemImg: "../Image/BrewMakers/P003.png", itemDesc: "Coffee Maker P3", itemPrice: "$60", category: "brew-maker" },
    { productID: "P004", itemImg: "../Image/ElectronicScale/P004.png", itemDesc: "Scale P4", itemPrice: "$7", category: "scale" },
    { productID: "P005", itemImg: "../Image/ElectronicScale/P005.png", itemDesc: "Scale P5", itemPrice: "$9", category: "scale" },
    { productID: "P006", itemImg: "../Image/ElectronicScale/P006.png", itemDesc: "Scale P6", itemPrice: "$10", category: "scale" },
    { productID: "P007", itemImg: "../Image/CoffeeStorage/P007.png", itemDesc: "Triple Storage P7", itemPrice: "$8", category: "storage" },
    { productID: "P008", itemImg: "../Image/CoffeeStorage/P008.png", itemDesc: "Large Container P8", itemPrice: "$10", category: "storage" },
    { productID: "P009", itemImg: "../Image/CoffeeStorage/P009.png", itemDesc: "Large Container P9", itemPrice: "$20", category: "storage" },
    { productID: "P010", itemImg: "../Image/Beans/P010.png", itemDesc: "Coffee Bean P10", itemPrice: "$15", category: "bean" },
    { productID: "P011", itemImg: "../Image/Beans/P011.png", itemDesc: "Coffee Bean P11", itemPrice: "$17", category: "bean" },
    { productID: "P012", itemImg: "../Image/Beans/P012.png", itemDesc: "Coffee Bean P12", itemPrice: "$20", category: "bean" },
    { productID: "P013", itemImg: "../Image/Grinder/P013.png", itemDesc: "Electronic Grinder P13", itemPrice: "$30", category: "grinder" },
    { productID: "P014", itemImg: "../Image/Grinder/P014.png", itemDesc: "Hand Grinder P14", itemPrice: "$20", category: "grinder" },
    { productID: "P015", itemImg: "../Image/Grinder/P015.png", itemDesc: "Hand Grinder P15", itemPrice: "$15", category: "grinder" },
    { productID: "P016", itemImg: "../Image/Keetle/P016.png", itemDesc: "Kettle P16", itemPrice: "$12", category: "kettle" },
    { productID: "P017", itemImg: "../Image/Keetle/P017.png", itemDesc: "Kettle P17", itemPrice: "$20", category: "kettle" },
    { productID: "P018", itemImg: "../Image/Keetle/P018.png", itemDesc: "Kettle P18", itemPrice: "$16", category: "kettle" },
    { productID: "P019", itemImg: "../Image/Filters/P019.png", itemDesc: "Filter P19", itemPrice: "$5", category: "filter" },
    { productID: "P020", itemImg: "../Image/Filters/P020.png", itemDesc: "Filter P20", itemPrice: "$6", category: "filter" },
    { productID: "P021", itemImg: "../Image/Filters/P021.png", itemDesc: "Filter P21", itemPrice: "$7", category: "filter" },
    { productID: "P022", itemImg: "../Image/CleaningTools/P022.png", itemDesc: "Cleaning Tool P22", itemPrice: "$3", category: "cleaner" },
    { productID: "P023", itemImg: "../Image/CleaningTools/P023.png", itemDesc: "Cleaning Tool P23", itemPrice: "$4", category: "cleaner" },
    { productID: "P024", itemImg: "../Image/CleaningTools/P024.png", itemDesc: "Cleaning Tool P24", itemPrice: "$4", category: "cleaner" },
    { productID: "P025", itemImg: "../Image/TamperAndKnockBox/P025.png", itemDesc: "Temper P25", itemPrice: "$9", category: "tamper-knockbox" },
    { productID: "P026", itemImg: "../Image/TamperAndKnockBox/P026.png", itemDesc: "Temper P26", itemPrice: "$10", category: "tamper-knockbox" },
    { productID: "P027", itemImg: "../Image/TamperAndKnockBox/P027.png", itemDesc: "Temper P27", itemPrice: "$13", category: "tamper-knockbox" },
    { productID: "P028", itemImg: "../Image/Thermometer/P028.png", itemDesc: "Thermometer P28", itemPrice: "$17", category: "thermometer" },
    { productID: "P029", itemImg: "../Image/Thermometer/P029.png", itemDesc: "Thermometer P29", itemPrice: "$17", category: "thermometer" },
    { productID: "P030", itemImg: "../Image/Thermometer/P030.png", itemDesc: "Thermometer P30", itemPrice: "$17", category: "thermometer" },
    { productID: "P031", itemImg: "../Image/MilkFrother/P031.png", itemDesc: "Milk Frother P31", itemPrice: "$18", category: "milk-frother" },
    { productID: "P032", itemImg: "../Image/MilkFrother/P032.png", itemDesc: "Milk Frother P32", itemPrice: "$20", category: "milk-frother" },
    { productID: "P033", itemImg: "../Image/MilkFrother/P033.png", itemDesc: "Milk Frother P33", itemPrice: "$24", category: "milk-frother" }
];


const coffeeSelectionAPI = [
    {
        name: "Cappuccino",
        ingredient: "espresso, steamed milk, milk foam",
        price: "$4",
        imgURL: "../Latte_vs_Cappucino-removebg-preview1.png"
    },
    {
        name: "Espresso",
        ingredient: "finely ground coffee beans, water",
        price: "$5",
        imgURL: "../How_Important_Is_the_Perfect_Espresso_Crema_-removebg-preview1.png"
    },
    {
        name: "Latte",
        ingredient: "espresso, steamed milk, milk foam",
        price: "$7",
        imgURL: "../How_to_Make_a_Latte-removebg-preview1.png"
    },
    {
        name: "MOCHA",
        ingredient: "espresso, steamed milk, chocolate syrup, whipped cream",
        price: "$6",
        imgURL: "../What_is_a_mocha_-removebg-preview1.png"
    },
    {
        name: "BUBBLE TEA",
        ingredient: "Tea, Tapioca pearls, Sweetener, Milk",
        price: "$3",
        imgURL: "../Premium_Photo___Image_of_a_bubble_tea_cup_showing_creamy_texture_of_the_tea_and_the_glossy_tapioca_pearls-removebg-prfeview1.png"
    },
    {
        name: "BLACK",
        ingredient: "freshly brew, sweetener",
        price: "$8",
        imgURL: "../Tasse_réaliste_de_café_infusé_noir_sur_l_illustration_vectorielle_de_soucoupe___Vecteur_Gratuite-removebg-preview1.png"
    },
    {
        name: "Americano",
        ingredient: "espresso, hot water",
        price: "$3",
        imgURL: "../Americano.png"
    },
    {
        name: "Macchiato",
        ingredient: "espresso, milk foam",
        price: "$4.50",
        imgURL: "../Macchiato.png"
    },
    {
        name: "Flat White",
        ingredient: "espresso, steamed milk",
        price: "$5.50",
        imgURL: "../FlatWhite.png"
    },
    {
        name: "Cortado",
        ingredient: "espresso, warm milk",
        price: "$4.25",
        imgURL: "../Cortado.png"
    },
    {
        name: "Affogato",
        ingredient: "espresso, vanilla ice cream",
        price: "$6",
        imgURL: "../Affogato.png"
    },
    {
        name: "Irish Coffee",
        ingredient: "hot coffee, Irish whiskey, sugar, cream",
        price: "$7.50",
        imgURL: "../IrishCoffee.png"
    }
];

const itemDetailAPI = [
    { productID: "P001", price: "$50", name: "Brew Maker P1", brand: "Mr.Coffee", color: "black", description: "Easy to clean, easy to use.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png" },
    { productID: "P002", price: "$75", name: "Ice Coffee Maker P2", brand: "Ninja", color: "silver", description: "Perfect for iced coffee lovers.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png" },
    { productID: "P003", price: "$60", name: "Coffee Maker P3", brand: "Keurig", color: "red", description: "Brew your coffee quickly and efficiently.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P004", price: "$7", name: "Scale P4", brand: "Ozeri", color: "white", description: "Precise measurements every time.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P005", price: "$9", name: "Scale P5", brand: "Etekcity", color: "black", description: "Compact and accurate digital scale.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P006", price: "$10", name: "Scale P6", brand: "GreaterGoods", color: "grey", description: "Stylish design with high accuracy.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P007", price: "$8", name: "Triple Storage P7", brand: "OXO", color: "transparent", description: "Keep your coffee fresh and organized.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P008", price: "$10", name: "Large Container P8", brand: "Rubbermaid", color: "white", description: "Large capacity for bulk storage." },
    { productID: "P009", price: "$20", name: "Large Container P9", brand: "Anchor Hocking", color: "glass", description: "Durable and airtight storage solution.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P010", price: "$15", name: "Coffee Bean P10", brand: "Lavazza", color: "brown", description: "Premium coffee beans for a rich flavor.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P011", price: "$17", name: "Coffee Bean P11", brand: "Starbucks", color: "dark brown", description: "Full-bodied, intense coffee beans.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P012", price: "$20", name: "Coffee Bean P12", brand: "Peet's", color: "medium brown", description: "Smooth and balanced flavor profile.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P013", price: "$30", name: "Electronic Grinder P13", brand: "Cuisinart", color: "stainless steel", description: "Grind your coffee with precision.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P014", price: "$20", name: "Hand Grinder P14", brand: "Hario", color: "black", description: "Manual control for a consistent grind.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P015", price: "$15", name: "Hand Grinder P15", brand: "JavaPresse", color: "silver", description: "Portable and easy to use.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P016", price: "$12", name: "Kettle P16", brand: "Hamilton Beach", color: "stainless steel", description: "Boil water quickly and safely.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P017", price: "$20", name: "Kettle P17", brand: "Bonavita", color: "black", description: "Gooseneck design for precise pouring.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P018", price: "$16", name: "Kettle P18", brand: "COSORI", color: "red", description: "Modern design with rapid boiling.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P019", price: "$5", name: "Filter P19", brand: "Melitta", color: "white", description: "High-quality paper filters for smooth coffee.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P020", price: "$6", name: "Filter P20", brand: "Chemex", color: "brown", description: "Unbleached filters for pure taste.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P021", price: "$7", name: "Filter P21", brand: "AeroPress", color: "grey", description: "Microfilters for grit-free coffee.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P022", price: "$3", name: "Cleaning Tool P22", brand: "Full Circle", color: "orange", description: "Efficient cleaning for your coffee equipment.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P023", price: "$4", name: "Cleaning Tool P23", brand: "Urnex", color: "blue", description: "Specialized cleaning tools for coffee makers.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P024", price: "$4", name: "Cleaning Tool P24", brand: "OXO", color: "green", description: "Compact and easy to use cleaning brush.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P025", price: "$9", name: "Temper P25", brand: "Motta", color: "silver", description: "Tamp your coffee with precision.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P026", price: "$10", name: "Temper P26", brand: "Espro", color: "black", description: "Consistent tamping pressure every time.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P027", price: "$13", name: "Temper P27", brand: "Rattleware", color: "red", description: "Ergonomic design for comfortable use.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P028", price: "$17", name: "Thermometer P28", brand: "Habor", color: "silver", description: "Instant-read thermometer for perfect brewing.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P029", price: "$17", name: "Thermometer P29", brand: "Taylor", color: "black", description: "Precise temperature readings every time.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P030", price: "$17", name: "Thermometer P30", brand: "OXO", color: "grey", description: "Easy to read and use.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P031", price: "$18", name: "Milk Frother P31", brand: "Breville", color: "white", description: "Froth milk to perfection for your lattes.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P032", price: "$20", name: "Milk Frother P32", brand: "Nespresso", color: "black", description: "Efficient frothing with minimal noise.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  },
    { productID: "P033", price: "$24", name: "Milk Frother P33", brand: "Secura", color: "stainless steel", description: "Durable and easy to clean.", url: "../Image/detailImg/BrewMakerP01-removebg-preview1.png"  }
];
