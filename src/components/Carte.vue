<template>
<v-main class="home_block">
    <v-container class="block_carte" fluid>
        <v-card flat color="transparent">
            <v-card-title no-gutters class="text-center justify-center pa-0">
                <v-container fluid no-gutters>
                    <v-row align="center" justify="center">
                        <h1 class="text_white big_title_carte ma-4 pa-5" :class="$mq">CARTE</h1>
                    </v-row>
                    <span class="horizontal-line fade_in rigth"></span>
                </v-container>
            </v-card-title>
            <v-tabs v-model="tab" color="orange" grow>
                <v-tab class="title_tab fade_in right" v-for="(type,index) in types" :key="index">
                    <h4 style="color:black;">{{ type.mainTitle }}</h4>
                </v-tab>
            </v-tabs>
            <v-tabs-items class="background_site" v-model="tab">
                <template class="background_site">
                    <v-list class="background_site" v-for="type in types[tab]" :key="type.mainTitle" three-line>
                        <v-container v-if="isObject(type)" class="container_carte" fluid>
                            <v-list-item v-for="carte in type" :key="carte.title">
                                <v-list-item-content>
                                    <v-list-item-title class="carte_title text_white text_uppercase">{{carte.title}}</v-list-item-title>
                                    <v-divider></v-divider>
                                    <v-list-item-subtitle class="text_white">
                                        <p class="carte_subtitle">{{carte.subtitle}}</p>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action class="text_white">
                                    <p>{{carte.price}}</p>
                                </v-list-item-action>
                            </v-list-item>
                        </v-container>
                    </v-list>
                </template>
            </v-tabs-items>
            <v-container class="background_site pa-5" fluid>
                <v-row class="text_info text_white text_uppercase" :class="$mq" align="start" justify="center">MOZZARELLA FIOR DI LATTE (“Fleur de lait” en français) : Mozzarella de qualité supérieure</v-row>
                <v-row class="text_info text_white text_uppercase" :class="$mq" align="start" justify="center">GUANCIALE : Viande séchée issue de la joue du cochon</v-row>
                <v-row class="text_info text_white text_uppercase" :class="$mq" align="start" justify="center">BURRATA : Fromage frais Italien, proche de la Mozzarella</v-row>
                <v-row class="text_info text_white text_uppercase" :class="$mq" align="start" justify="center">VIANDES DE POULET ET DE BOEUF HALAL, OEUFS et LÉGUMES BIO</v-row>
            </v-container>
        </v-card>
    </v-container>
</v-main>
</template>

<script>
export default {
    data: () => ({
        tab: null,
        types: [{
                mainTitle: 'PIZZA À LA SAUCE TOMATE',
                cartes: [{
                        title: 'Fromage',
                        subtitle: 'Sauce tomate, Emmental',
                        price: '7,50€'
                    },
                    {
                        title: 'Mozza Basilic',
                        subtitle: 'Sauce tomate, Mozzarella Fior Di Latte, Pesto au Basilic',
                        price: '8,00€'
                    },
                    {
                        title: 'Double cheese',
                        subtitle: 'Sauce tomate, Emmental, Mozzarella Fior Di Latte',
                        price: '9,00€'
                    },
                    {
                        title: 'Jambon Mozza',
                        subtitle: 'Sauce tomate, Jambon blanc, Mozzarella Fior Di Latte',
                        price: '10,00€'
                    },
                    {
                        title: 'Jambon Fromage',
                        subtitle: 'Sauce tomate, Jambon blanc, Emmental',
                        price: '10,00€'
                    },
                    {
                        title: 'Merguez',
                        subtitle: 'Sauce tomate, Merguez, Emmental',
                        price: '11,00€'
                    },
                    {
                        title: 'Royale',
                        subtitle: 'Sauce tomate, Jambon blanc, Champignons frais, Emmental',
                        price: '11,00€'
                    },
                    {
                        title: '4 fromages',
                        subtitle: 'Sauce tomate, Emmental, Mozzarella Fior Di Latte, Gorgonzola, Chèvre',
                        price: '11,50€'
                    },
                    {
                        title: 'Corse',
                        subtitle: 'Sauce tomate, Brousse, Figatelli, Emmental',
                        price: '11,00€'
                    },
                    {
                        title: 'Pertuisienne',
                        subtitle: 'Sauce tomate, Jambon blanc, Brousse, Mozzarella Fior Di Latte, Pesto au Basilic',
                        price: '12,00€'
                    },
                    {
                        title: 'Arménienne',
                        subtitle: "Sauce tomate, Viande de Boeuf hachée fraîche cuisinée avec poivrons et oignons (avec ou sans fromage), Accompagnée d'une tranche de citron",
                        price: '12,50€'
                    },
                    {
                        title: 'Américaine',
                        subtitle: 'Sauce tomate, Viande de Boeuf hachée faîche, Cheddar, Oignons confits, Mozzarella Fior Di Latte',
                        price: '12,50€'
                    },
                    {
                        title: 'Végétarienne',
                        subtitle: 'Sauce tomate, Poivrons, Courgettes, Oignons confits, Champignons frais, Mozzarella Fior Di Latte',
                        price: '11,00€'
                    },
                    {
                        title: 'CBD',
                        subtitle: 'Sauce tomate, Emmental, CBD',
                        price: '13,50€'
                    },
                    {
                        title: 'Anchois',
                        subtitle: 'Sauce tomate, Anchois, Pesto',
                        price: '8,00€'
                    },
                    {
                        title: 'Moitié moitié',
                        subtitle: 'Sauce tomate, Moitié Anchois, Moitié Emmental',
                        price: '8,00€'
                    },
                ]
            },
            {
                mainTitle: 'PIZZA À LA CRÈME',
                cartes: [{
                        title: 'Chèvre miel',
                        subtitle: 'Crème fraîche, Chèvre, Emmental, Miel',
                        price: '10,00€'
                    },
                    {
                        title: 'Thon',
                        subtitle: 'Crème fraîche, Thon, Oignons confits, Mozzarella Fior Di Latte',
                        price: '10,00€'
                    },
                    {
                        title: 'Reine',
                        subtitle: 'Crème fraiche, Jambon Blanc, Champignons frais, Emmental',
                        price: '11,00€'
                    },
                    {
                        title: 'Kebab',
                        subtitle: 'Crème fraîche, Kebab, Emmental, Oignons rouges',
                        price: '12,00€'
                    },
                    {
                        title: 'Poulet',
                        subtitle: 'Crème fraîche, Poulet, Oignons confits, Mozzarella Fior Di Latte, Pesto ou Curry',
                        price: '12,00€'
                    },
                    {
                        title: 'Montagnarde',
                        subtitle: 'Crème fraîche, Pomme de terre, Oignons confits, Guanciale, Reblochon',
                        price: '12,50€'
                    },
                    {
                        title: 'Forestière',
                        subtitle: 'Crème fraîche, Champignons frais, Guanciale, Gorgonzola, Mozzarella Fior Di Latte',
                        price: '12,50€'
                    }
                ]
            },
            {
                mainTitle: 'CALZONES',
                cartes: [{
                        title: 'Classique',
                        subtitle: 'Sauce tomate ou Crème fraiche, Jambon Blanc, Champignons, Oeuf, Mozzarella Fior Di Latte',
                        price: '12,00€'
                    },
                    {
                        title: 'Calzone américaine',
                        subtitle: 'Sauce tomate, Viande de Boeuf hachée, Oignons confits, Cheddar, Mozzarella Fior Di Latte',
                        price: '12,00€'
                    },
                    {
                        title: 'Calzone poulet',
                        subtitle: 'Crème fraîche, Poulet, Oignons confits, Mozzarella Fior Di Latte',
                        price: '12,50€'
                    },
                ],
            },
            {
                mainTitle: 'DESSERTS',
                cartes: [{
                        title: 'Pizza nutella',
                        subtitle: '',
                        price: '9,50€'
                    },
                    {
                        title: "Pizza nutella m&m's",
                        subtitle: '',
                        price: '10,00€'
                    }
                ],
            },
            {
                mainTitle: 'BOISSONS',
                cartes: [{
                        title: 'Canette 33cl',
                        subtitle: 'Coca, Orangina, Ice Tea, Oasis',
                        price: '1,50€'
                    },
                    {
                        title: "Bouteille soda 1,25L",
                        subtitle: 'Coca, Coca Zéro',
                        price: '3,00€'
                    },
                    {
                        title: "Bouteille soda 1,5L",
                        subtitle: 'Coca, Orangina, Ice tea, Oasis',
                        price: '3,50€'
                    },
                    {
                        title: "Bière blonde BIO 33cl",
                        subtitle: '',
                        price: '3,00€'
                    },
                    {
                        title: "Vin Domaine des Jardinettes IGP BIO 75cl",
                        subtitle: 'Rouge, Rosé, Blanc',
                        price: '8,50€'
                    }
                ]
            },
            {
                mainTitle: 'OFFRE SPÉCIALE',
                cartes: [{
                        title: '3 PIZZAS AU FROMAGE = 20€',
                        subtitle: '',
                        price: ''
                    },
                    {
                        title: "3 PIZZAS ACHETÉES = 1 BOUTEILLE DE SODA 1,5L OFFERTE*",
                        subtitle: '(*HORS FORMULE 3 PIZZAS AU FROMAGE À 20€)',
                        price: ''
                    }
                ],
            },
        ]
    }),
    methods: {
        isObject(type) {
            if (typeof type === 'object' && type !== null) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>

<style scoped>
.container_carte {
    max-width: 900px;
}

.block_carte {
    border-top: 2px solid orange;
}

.big_title_carte {
    font-family: 'Rubik', sans-serif;
    border: 2px solid whitesmoke;
}

.big_title_carte.sm {
    font-size: 1.2em;
    padding: 6px !important;
}

.text_uppercase {
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 900;
}

.text_info {
    font-style: italic;
    font-size: 0.7em !important;
}

.text_info.sm {
    font-size: 0.5em !important;
    text-align: left !important;
    display: contents !important;
}

.carte_subtitle {
    display: -webkit-box !important;
    -webkit-line-clamp: 6 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
}

.carte_title {
    white-space: normal !important;
}
</style>
