import { CoffeeCardProps } from "./components/CoffeeCard";
import EspressoTradicional from '../../assets/coffee/espresso_tradicional.png'
import EspressoAmerican from '../../assets/coffee/espresso_american.png'
import EspressoCreamy from '../../assets/coffee/espresso_creamy.png'
import EspressoIced from '../../assets/coffee/espresso_iced.png'
import Capuccino from '../../assets/coffee/capuccino.png'
import Latte from '../../assets/coffee/latte.png'
import CoffeeMilk from '../../assets/coffee/coffee_milk.png'
import Macchiato from '../../assets/coffee/macchiato.png'
import Mocaccino from '../../assets/coffee/mocaccino.png'
import HotChocolatte from '../../assets/coffee/hot_chocolatte.png'
import Cubano from '../../assets/coffee/cubano.png'
import Havaiano from '../../assets/coffee/havaiano.png'
import Arabe from '../../assets/coffee/arabe.png'
import Irlandes from '../../assets/coffee/irlandes.png'

export const coffeeList:CoffeeCardProps[] = [
    {
        id: '9bd08b97-984a-4352-ac9a-9a62cdf8b2e7',
        tags:["tradicional"],
        title:'Expresso Tradicional',
        description:'O tradicional café feito com água quente e grãos moídos',
        price:9.90,
        image: EspressoTradicional,
    },
    {
        id:"5aa92f8a-906e-44a9-beaf-84e42a32e2cd",        
        tags:["tradicional"],
        title:'Expresso Americano',
        description:'Expresso diluído, menos intenso que o tradicional',
        price:9.90,
        image:EspressoAmerican,
    },
    {
id:"7e29bc88-ef6e-4819-8889-c385dcf2a75c",
tags:["tradicional"],
        title:'Expresso Cremoso',
        description:'Café expresso tradicional com espuma cremosa',
        price:9.90,
        image:EspressoCreamy,
    },
    {
id:"b65b2886-b982-4c6c-aab2-53765b57406e",
tags:["tradicional","gelado"],
        title:'Expresso Gelado',
        description:'Bebida preparada com café expresso e cubos de gelo',
        price:9.90,
        image:EspressoIced,
    },
    {
id:"0598a341-aa69-463d-9544-a44aaf584263",
tags:["tradicional","com leite"],
        title:'Café com Leite',
        description:'Meio a meio de expresso tradicional com leite vaporizado',
        price:9.90,
        image:CoffeeMilk,
    },
    {
id:"078286db-72cb-4913-aee4-6dfe98f02610",
tags:["tradicional","com leite"],
        title:'Latte',
        description:'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price:9.90,
        image:Latte,
    },
    {
id:"349f1bc9-318c-4173-b45d-238bc00ca46f",
tags:["tradicional","com leite"],
        title:'Capuccino',
        description:'Bebida com canela feita de doses iguais de café, leite e espuma',
        price:9.90,
        image:Capuccino,
    },
    {
id:"a23383f8-02a3-4c01-9fac-c3da61ffcec6",
tags:["tradicional","com leite"],
        title:'Macchiato',
        description:'Café expresso misturado com um pouco de leite quente e espuma',
        price:9.90,
        image:Macchiato,
    },
    {
id:"6b9fda7a-ed6e-4d58-8d8b-cf37e137e7e8",
tags:["tradicional","com leite"],
        title:'Mocaccino',
        description:'Café expresso com calda de chocolate, pouco leite e espuma',
        price:9.90,
        image:Mocaccino,
    },
    {
id:"6b7e5342-4880-4320-afd7-87d46a28ae52",
tags:["especial","com leite"],
        title:'Chocolate Quente',
        description:'Bebida feita com chocolate dissolvido no leite quente e café',
        price:9.90,
        image:HotChocolatte,
    },
    {
id:"e1790feb-fdae-4f71-864e-ef6ab361c0a2",
tags:["especial","alcoólico","gelado"],
        title:'Cubano',
        description:'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price:9.90,
        image:Cubano,
    },
    {
id:"c6a0d11c-b1ec-477c-b46c-bfc18f77b064",
tags:["especial"],
        title:'Havaiano',
        description:'Bebida adocicada preparada com café e leite de coco',
        price:9.90,
        image:Havaiano,
    },
    {
id:"3af444de-30a3-48f5-9742-ed098afeb373",
tags:["especial"],
        title:'Árabe',
        description:'Bebida preparada com grãos de café árabe e especiarias',
        price:9.90,
        image:Arabe,
    },
    {
id:"1dbd7c30-ba63-4589-bb6c-e473d8ab909a",
tags:["especial","alcoólico"],
        title:'Irlandês',
        description:'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price:9.90,
        image:Irlandes,
    },
    {
id:"c3ca6e39-493b-4eef-9f40-dc375e38255c",
tags:["especial","alcoólico"],
        title:'Irlandês',
        description:'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price:9.90,
        image:Irlandes,
    },
]