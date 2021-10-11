<template>
<v-app>
    <v-main class="home_block">
        <v-container class="pa-0" fluid>
            <v-card>
                <v-img class="banner_home" src="@/assets/home_pizza_darken.jpg" lazy-src="@/assets/home_pizza_darken.jpg">
                    <v-row justify="center">
                        <h1 class="home_title fade_in right pr-3">CASA</h1>
                        <span class="vertical-line fade_in top"></span>
                        <h1 class="home_title fade_in left">PIZZA</h1>
                    </v-row>
                    <v-row justify="center">
                        <h4 class="fade_in left text_white">MADE IN PERTUIS</h4>
                    </v-row>
                    <v-row justify="center" class="mt-5">
                        <h2 class="home_subtitle">À EMPORTER - EN LIVRAISON GRATUITE</h2>
                    </v-row>
                    <v-row @click="scroll('contact')" justify="center" style="cursor: pointer;">
                        <v-icon color="white" class="mr-3">
                            mdi-phone
                        </v-icon>
                        <h2 class="text_white">07 67 05 55 85</h2>
                    </v-row>
                    <div @click="scroll('carte')" style="cursor: pointer;">
                        <v-row justify="center" class="home_btn_carte">
                            <h5>voir la carte</h5>
                        </v-row>
                        <v-row justify="center">
                            <v-icon color="white">
                                mdi-arrow-down
                            </v-icon>
                        </v-row>
                    </div>
                </v-img>
            </v-card>
            <carte id="carte"></carte>
            <contact id="contact"></contact>
            <v-footer color="black">
                <span class="white--text font_karla">Sabso &copy; {{ new Date().getFullYear() }}</span>
                <v-spacer></v-spacer>
            </v-footer>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
import Carte from "./components/Carte.vue";
import Contact from "./components/Contact.vue";
import {
    gsap
} from 'gsap';
import {
    ScrollTrigger
} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default {
    name: 'App',
    data: () => ({
        //
    }),
    components: {
        Carte,
        Contact
    },
    methods: {
        scroll: function (id) {
            this.drawer = false;
            setTimeout(document.getElementById(id).scrollIntoView({
                behavior: "smooth",
            }), 1000);
        },
        fadeServiceImg() {
            function scrollerEv(elem) {
                console.log();
                ScrollTrigger.create({
                    trigger: elem,
                    onEnter: function () {
                        let x = (elem.classList.contains('right')) ? -100 : 100;
                        let y = (elem.classList.contains('top')) ? -100 : 0;
                        elem.style.transform = "translate(" + x + "px, " + y + "px)";
                        elem.style.opacity = "0";
                        gsap.fromTo(elem, {
                            x: x,
                            y: y,
                            autoAlpha: 0
                        }, {
                            duration: 3,
                            x: 0,
                            y: 0,
                            autoAlpha: 1,
                            ease: "power2",
                            overwrite: "auto"
                        });
                    },
                    onEnterBack: function () {
                        let x = (elem.classList.contains('right')) ? -100 : 100;
                        let y = (elem.classList.contains('top')) ? -100 : 0;
                        elem.style.transform = "translate(" + x + "px, " + y + "px)";
                        elem.style.opacity = "0";
                        gsap.fromTo(elem, {
                            x: x,
                            y: y,
                            autoAlpha: 0
                        }, {
                            duration: 3,
                            x: 0,
                            y: 0,
                            autoAlpha: 1,
                            ease: "expo",
                            overwrite: "auto"
                        });
                    },
                });
            }
            document.addEventListener("DOMContentLoaded", function () {
                gsap.utils.toArray(".fade_in").forEach(function (elem) {
                    scrollerEv(elem);
                });
            });
        },
    },
    mounted() {
        this.fadeServiceImg();
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

html {
    scroll-behavior: smooth;
}

.home_title {
    margin-top: 16%;
    font-family: 'Montserrat', sans-serif;
    color: whitesmoke;
    font-size: 6em;
}

.home_block_title {
    border: 2px solid white;
}

.vertical-line {
    border-left: 3px solid orange;
    display: inline-block;
    height: 120px;
    margin: 0 20px;
    margin-top: 16%;
}

.horizontal-line {
    border-bottom: 3px solid orange;
    display: inline-block;
    width: 120px;
}

.banner_home {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.home_block {
    background:black;
    position: absolute;
}

.home_subtitle {
    margin: 1%;
    margin-top: 5% !important;
    font-family: 'Montserrat', sans-serif;
    color: whitesmoke;
    font-size: 1.8em;
}

.home_btn_carte {
    padding-top: 10%;
    color: whitesmoke;
    font-family: 'Montserrat', sans-serif;
}

.theme--light.v-divider {
    border-color: orange !important;
}

.text_white {
    color: whitesmoke !important;
    font-family: 'Montserrat', sans-serif;
}
</style>
