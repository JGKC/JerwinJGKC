<template>
    <div class="flex flex-col w-full">

        <ProjectHero
            :imageURL=heroImg
            titleHeader="CAFENNIE"
            titleSubHeader="UI / UX, 2022"
        ></ProjectHero>

        <section class="py-[80px] font-['Quicksand']">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto">
                    <div class="mb-4 w-full md:w-[65ch]">
                        Cafennie is a local cafe that delivers people's favourite coffee and snacks to the corner of their houses.
                    </div>
                    <div class="w-full md:w-[65ch] space-y-4">
                        <div>Project Duration: 7 Days, July 2022</div>
                        <Softwares Figma ></Softwares>
                    </div>
                </div>
                
            </div>
        </section>

        <section class="w-full max-w-[1440px] m-auto py-[80px]">
            <div class="w-[90%] m-auto">
                <div class="text-[2em] font-bold font-['Montserrat']">Gallery</div>
                <div class="w-[90%] mx-auto my-[20px] grid gap-10 grid-cols-1 lg:grid-cols-2 lg:grid-rows-auto">
                    
                    <div v-for="img in gallery">
                        <div class="aspect-video bg-green-100 shadow-md border-2 border-green-400 overflow-hidden">
                            <img :src="img.src" :alt=img.alt class="">
                        </div>
                    </div>
                </div>
                <!-- <div class="text-center italic font-['quicksand']">click the image to enlarge the view</div> -->
            </div>
        </section>

        <section class="bg-teal-100">
            <div class="w-full max-w-[1440px] m-auto">
                <div class="w-[90%] m-auto">
                    <div class="flex justify-between ">
                        <router-link to="/works/AsianCompletionist" class="block p-4 text-black"><font-awesome-icon icon="fa-solid fa-chevron-left" /> Asian Completionist</router-link>
                        <router-link to="/works" class="p-4 hidden md:block text-black"><font-awesome-icon icon="fa-solid fa-pen-ruler" /> Return to Works</router-link>
                        <router-link to="/works/Meditime" class="block p-4 text-black">Meditime <font-awesome-icon icon="fa-solid fa-chevron-right" /></router-link>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import TitleHead from '../../components/TitleHead.vue';
import ProjectHero from '../../components/works/ProjectHero.vue';
import ProjectInfo from '../../components/works/ProjectInfo.vue';
import Softwares from '../../components/works/Softwares.vue';

import Preview from "@/assets/works/Cafennie/Preview.png"
import Image1 from "@/assets/works/Cafennie/image1.png"

export default{
    components: { TitleHead, ProjectHero, ProjectInfo, Softwares },
    mounted(){
        document.title = 'Cafennie | JerwinJGKC'
    },
    data(){
        return{
            heroImg:Preview,
            gallery:[
                {
                    src: Image1,
                    alt: "overview image"
                },
                {
                    src: Preview,
                    alt: "preview image"
                },
            ]
        }
    }
}


</script>
