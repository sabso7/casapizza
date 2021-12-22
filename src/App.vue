<template>
<v-app>
    <v-main class="home_block">
        <v-container class="pa-0" fluid>
            <v-card id="homepage" :class="$mq">
                <v-img class="banner_home" src="@/assets/banner_phone_darken.jpg" lazy-src="@/assets/banner_phone_darken.jpg" :class="$mq">
                    <v-container id="home_block_title" :class="$mq" fluid>
                        <v-row justify="center">
                            <h1 class="home_title fade_in right pr-3" :class="$mq">CASA</h1>
                            <span class="vertical-line fade_in top" :class="$mq"></span>
                            <h1 class="home_title fade_in left" :class="$mq">PIZZA</h1>
                        </v-row>
                        <v-row justify="center">
                            <h5 class="fade_in left text_white">MADE IN PERTUIS</h5>
                        </v-row>
                        <v-row justify="center" class="mt-5">
                            <h2 class="home_subtitle" :class="$mq">À EMPORTER - EN LIVRAISON GRATUITE</h2>
                        </v-row>
                        <v-row @click="scroll('contact')" justify="center" style="cursor: pointer;">
                            <v-icon color="white" class="mr-3">
                                mdi-phone
                            </v-icon>
                            <h2 class="text_white home_phone" :class="$mq">07 67 05 55 85</h2>
                        </v-row>
                        <div @click="scroll('carte')" style="cursor: pointer;">
                            <v-row justify="center" class="home_btn_carte" :class="$mq">
                                <h5>voir la carte</h5>
                            </v-row>
                            <v-row justify="center">
                                <v-icon color="white">
                                    mdi-arrow-down
                                </v-icon>
                            </v-row>
                        </div>
                    </v-container>
                </v-img>
            </v-card>
            <carte id="carte"></carte>
            <contact id="contact"></contact>
            <v-footer class="background_site">
                <span class="text_white">Sabso &copy; {{ new Date().getFullYear() }}</span>
                <v-spacer></v-spacer>
                <span class="logo-footer">
                    <v-btn rel="noopener" aria-label="go to facebook" icon href="" target="_blank">
                        <v-icon class="icon" color="white">mdi-facebook</v-icon>
                    </v-btn>
                </span>
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
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap');

html {
    scroll-behavior: smooth;
}

.home_phone.sm {
    font-size: 1em;
}

.home_title {
    margin-top: 16%;
    font-family: 'Montserrat', sans-serif;
    color: whitesmoke;
    font-size: 6em;
}

.home_title.sm {
    font-size: 3em;
}

#home_block_title.sm {
    margin-top: 50% !important;
}

.vertical-line {
    border-left: 3px solid orange;
    display: inline-block;
    height: 120px;
    margin: 0 20px;
    margin-top: 16%;
}

.vertical-line.sm {
    height: 70px;
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

.banner_home.sm {
    height: 750px !important;
}

.home_block {
    background-image: url(assets/blackground.jpg);
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.home_subtitle {
    margin: 1%;
    margin-top: 5% !important;
    font-family: 'Montserrat', sans-serif;
    color: whitesmoke;
    font-size: 1.8em;
}

.home_subtitle.sm {
    font-size: 1em;
}

.home_btn_carte {
    padding-top: 10%;
    color: whitesmoke;
    font-family: 'Montserrat', sans-serif;
}

.home_btn_carte.sm{
    margin-top: 30% !important;
}

.theme--light.v-divider {
    border-color: orange !important;
}

.text_white {
    color: whitesmoke !important;
    font-family: 'Montserrat', sans-serif;
}

.background_site {
    /*background-color:black !important;*/
    /*background-color: #263530;*/
    background-color: rgba(0, 0, 0, 0) !important;
}
</style>
