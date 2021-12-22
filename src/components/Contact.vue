<template>
<v-main class="home_block">
    <v-container class="background_site block_contact" fluid>
        <v-card class="background_site" flat color="transparent">
            <v-card-title class="text-center block_titre justify-center py-2">
                <v-container v-if="$mq == 'sm'" fluid>
                    <v-row align="center" justify="center">
                        <h2 class="text_white text_contact" :class="$mq">À EMPORTER</h2>
                    </v-row>
                    <v-row align="center" justify="center">
                        <h2 class="text_white text_contact" :class="$mq">ou</h2>
                    </v-row>
                    <v-row align="center" justify="center">
                        <h2 class="text_white text_contact" :class="$mq">EN LIVRAISON GRATUITE</h2>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-icon color="white" class="ma-2">
                            mdi-phone
                        </v-icon>
                    </v-row>
                    <v-row align="center" justify="center">
                        <h2 class="text_white text_contact" :class="$mq">07 67 05 55 85</h2>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-icon color="white" class="ma-2">
                            mdi-map-marker
                        </v-icon>
                    </v-row>
                    <v-row align="center" justify="center">
                        <h2 class="text_white text_contact" :class="$mq">21 RUE DANTON 84120 PERTUIS</h2>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-btn rel="noopener" aria-label="go to facebook" icon href="https://www.facebook.com/profile.php?id=100073294883708" target="_blank">
                            <v-icon color="white" class="ma-2">mdi-facebook</v-icon>
                        </v-btn>
                    </v-row>
                    <v-row align="center" justify="center">
                        <h2 class="text_white text_contact mb-3" :class="$mq">CASA PIZZA PERTUIS</h2>
                    </v-row>
                </v-container>
                <v-container v-else fluid>
                    <v-row align="center" justify="center">
                        <h2 class="text_white ma-4 text_contact" :class="$mq">À EMPORTER ou EN LIVRAISON GRATUITE</h2>
                    </v-row>
                    <v-row align="center" justify="center" class="ma-4">
                        <v-icon color="white" class="mr-3">
                            mdi-phone
                        </v-icon>
                        <h2 class="text_white text_contact" :class="$mq">07 67 05 55 85</h2><span class="text_white ml-4 mr-3">
                            <h2>-</h2>
                        </span>
                        <v-icon color="white" class="mr-3">
                            mdi-map-marker
                        </v-icon>
                        <h2 class="text_white text_contact" :class="$mq">21 RUE DANTON 84120 PERTUIS</h2>
                    </v-row>
                    <v-row class="ma-4" align="center" justify="center">
                        <v-btn rel="noopener" aria-label="go to facebook" icon href="https://www.facebook.com/profile.php?id=100073294883708" target="_blank">
                            <v-icon x-medium class="icon mr-3" color="white">mdi-facebook</v-icon>
                        </v-btn>
                        <h2 class="text_white text_contact" :class="$mq">CASA PIZZA PERTUIS</h2>
                    </v-row>
                </v-container>
            </v-card-title>
            <v-row align="center" justify="center">
                <v-col offset-md="1" offset-lg="1" sm="5" cols="12" md="5" lg="5">
                    <v-row align="center" justify="center" class="ma-2 text_white">
                        <h2 class="text_contact2" :class="$mq">Horaires d'ouverture</h2>
                    </v-row>
                    <v-row align="center" justify="center">
                        <span class="horizontal-line fade_in rigth mb-2" style="border-color: orange !important; border: 1px solid orange !important"></span>
                    </v-row>
                    <v-row align="center" justify="center">
                        <h4 class="text_white mt-2">LUNDI</h4>
                        <h5 class="text_white ml-3 mt-3">17h30 - 22h00</h5>
                    </v-row>
                    <v-row align="center" justify="center">
                        <h4 class="text_white mt-3">MARDI</h4>
                        <h5 class="text_white mt-3 ml-3">Fermé</h5>
                    </v-row>
                    <v-row align="center" justify="center">
                        <h4 class="text_white mt-3">MERCREDI</h4>
                        <h5 class="text_white mt-3 ml-3">17h30 - 22h00</h5>
                    </v-row>
                    <v-row align="center" justify="center">
                        <h4 class="text_white mt-3">JEUDI</h4>
                        <h5 class="text_white mt-3 ml-3">17h30 - 22h00</h5>
                    </v-row>
                    <v-row align="center" justify="center">
                        <h4 class="text_white mt-3">VENDREDI</h4>
                        <h5 class="text_white mt-3 ml-3">12h00 - 14h00 / 17h30 - 22h00</h5>
                    </v-row>
                    <v-row align="center" justify="center">
                        <h4 class="text_white mt-3">SAMEDI</h4>
                        <h5 class="text_white mt-3 ml-3">17h30 - 22h00</h5>
                    </v-row>
                    <v-row align="center" justify="center">
                        <h4 class="text_white mt-3">DIMANCHE</h4>
                        <h5 class="text_white mt-3 ml-3">17h30 - 22h00</h5>
                    </v-row>
                </v-col>
                <v-col sm="6" cols="12" md="6" lg="6">
                    <v-row class="ma-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.784536380348!2d5.500593073973798!3d43.69424261785757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ca271ee318ebbf%3A0x61cb4bf01fbe48e3!2s21%20Rue%20Danton%2C%2084120%20Pertuis!5e0!3m2!1sfr!2sfr!4v1633868705019!5m2!1sfr!2sfr" width="600" height="450" class="minimap" allowfullscreen="" loading="lazy"></iframe>
                    </v-row>
                </v-col>
            </v-row>
        </v-card>
        <v-row justify="center" class="mt-16">
            <v-icon v-on:click="scrollToTop" class="icon" color="white">mdi-arrow-expand-up</v-icon>
        </v-row>
    </v-container>
</v-main>
</template>

<script>
export default {
    methods: {
        scrollToTop: function () {
            window.scrollTo(0, 0);
        },
    }
};
</script>

<style scoped>
.block_contact {
    border-top: 2px solid orange;
}

.minimap {
    border: 0;
    border-radius: 5px;
    max-width: 400px;
    max-height: 400px
}

.text_contact.sm {
    font-size: 0.8em;
}

.text_contact2.sm {
    font-size: 1.2em;
}
</style>
