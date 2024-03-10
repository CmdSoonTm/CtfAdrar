<template>
    <div class="banner">
        <img src="/images/AstroLogo2.png" alt="Logo" class="logo">
        <h1 class="title2">Bienvenue sur AstroBooking</h1>
    </div>
    <div class="scrolling-content">
        <h2>En ce moment sur AstroBooking --- Voyagez moins cher que gratuit ---</h2>
    </div>
    <swiper :options="swiperOptions">
        <swiper-slide id="i1">
            <h3 class="blocoffer">Envie d'evasion ?</h3>
            <p id="o1">Parcourez les etendues sauvages des steppes arides sur Vermina 6<br />
            La faune et la flore vous emerveilleront de par leur diversite<br />
            Safari à prix coutant pour les 1000 premiers inscrits<br />
            Reservez dès maintenant sur AstroBooking
            </p>
        </swiper-slide>
        <swiper-slide id="i2">
            <h3 class="blocoffer">Un voyage d'affaire sur la ceinture de Corona 4 ?</h3>
            <p id="o2">N'hesitez plus et reservez dès maintenant votre hôtel sur Astroria, la station dernier cri de chez OriginJumpWorks<br />
            Piscines en apesenteur, salles de conference insonnorisees, restaurants les plus chics, tout est prevu pour vous accueillir<br />
            Profitez de nos offres exclusives pour les professionnels<br />
            </p>
        </swiper-slide>
        <swiper-slide id="i3">
            <h3 class="blocoffer">Un week-end en amoureux sur la lune de Venus ?</h3>
            <p id="o3">Hôtels de charme, restaurants romantiques, tout est prevu pour vous faire passer un moment inoubliable<br />
            Offres speciales pour les couples en lune de miel<br />
            Offres de groupes "Plus on est de fous" nous contactez pour plus d'informations<br />
            N'hesitez pas et reservez dès maintenant sur AstroBooking
            </p>
        </swiper-slide>
        <swiper-slide id="i4">
            <h3 class="blocoffer">Voyage sans retour ?</h3>
            <p id="o4">L'institut de recherche de l'Universite de Terra vous propose un voyage sur la planète Xeno 3<br />
            Partez à la decouverte de la faune de cette planète atypique<br />
            Vue imprenable sur M87, Trou noir super-massif de la galaxie centrale de l'amas de la Vierge, connue pour son jet de matières d'une longueur de 4 300 annees-lumière<br />
            Tarifs speciaux pour les etudiants
            </p>
        </swiper-slide>
    </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
    name: 'IndexView',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOptions: {
                slidesPerView: 1,
                mousewheel: true,
                loop: true,
            }
        };
    },
};

</script>