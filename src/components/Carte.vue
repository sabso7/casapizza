<template>
<v-main>
    <v-card>
        <v-card-title class="text-center block_titre justify-center py-6">
            <v-container fluid>
                <v-row align="center" justify="center">
                    <h3 class="text_white pb-3">3 PIZZAS AU FROMAGE = 20€</h3>
                </v-row>
                <span class="horizontal-line fade_in rigth"></span>
                <v-row align="center" justify="center">
                    <h3 class="text_white pt-5">3 PIZZAS ACHETÉES = 1 BOUTEILLE DE SODA 1,5L OFFERTE*</h3>
                </v-row>
                <v-row align="center" justify="center">
                    <h5 class="text_white">(*HORS FORMULE 3 PIZZAS AU FROMAGE À 20€)</h5>
                </v-row>
            </v-container>
        </v-card-title>
        <v-tabs v-model="tab" background-color="transparent" color="orange" grow>
            <v-tab class="title_tab fade_in right" v-for="(type,index) in types" :key="index">
                {{ type.mainTitle }}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <template>
                <v-list v-for="type in types[tab]" :key="type.mainTitle" class="list_carte" three-line>
                    <v-container v-if="isObject(type)" class="container_carte" fluid>
                        <v-list-item v-for="carte in type" :key="carte.title">
                            <v-list-item-content>
                                <v-list-item-title class="text_white text_uppercase">{{carte.title}}</v-list-item-title>
                                <v-divider></v-divider>
                                <v-list-item-subtitle class="text_white">{{carte.subtitle}}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action class="text_white">
                                {{carte.price}}
                            </v-list-item-action>
                        </v-list-item>
                    </v-container>
                </v-list>
            </template>
        </v-tabs-items>
        <v-container class="list_carte pa-7" fluid>
            <v-row class="text_info text_white text_uppercase" align="center" justify="center">MOZZARELLA FIOR DI LATTE (“Fleur de lait” en français) : Mozzarella de qualité supérieure</v-row>
            <v-row class="text_info text_white text_uppercase" align="center" justify="center">GUANCIALE : Viande séchée issue de la joue du cochon</v-row>
            <v-row class="text_info text_white text_uppercase" align="center" justify="center">BURRATA : Fromage frais Italien, proche de la Mozzarella</v-row>
            <v-row class="text_info text_white text_uppercase" align="center" justify="center">VIANDES DE POULET ET DE BOEUF HALAL, OEUFS et LÉGUMES BIO</v-row>
        </v-container>
    </v-card>
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
                        subtitle: 'Crème fraîche, Poulet, Oignons confits, Mozzarella Fior Di Latte, Persillade ou Curry',
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
                        subtitle: 'Sauce tomate ou Creme fraiche, Jambon Blanc, Champignons, Oeuf, Mozzarella Fior Di Latte',
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
    background-color: black;
}

.block_titre{
    background-color: black;
}

.title_carte {
    margin: 5%;
    font-family: 'Montserrat', sans-serif;
    border: 2px solid whitesmoke;
    padding: 1%;
}

.list_carte {
    background-color: black!important;
}

.text_uppercase {
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 900;
}

.title_tab {
    color: black;
}

.text_info {
    font-style: italic;
    font-size: 0.7em !important;
}
</style>
