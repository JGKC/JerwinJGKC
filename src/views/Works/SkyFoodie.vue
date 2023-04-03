<template>
    <div class="flex flex-col w-full">

        <ProjectHero
            :imageURL=heroImg
            titleHeader="SKY FOODIE"
            titleSubHeader="FRONTEND / CREATIVE CODING, 2022"
        ></ProjectHero>

        <section class="py-[80px] font-['Quicksand']">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto grid lg:grid-cols-5 justify-between gap-10">
                    <div class="lg:col-span-3">
                        <div class="mb-4 w-full">
                            SkyFoodie is a Web Game Application that raise awareness for students from 9 to 12 years old 
                            (Primary 3 to 6) about the harmful effect of junk food and choosing the healthy meals to eat. 
                            The game objective is to avoid touching junk food and collect the healthy food.
                        </div>
                        <div class="mb-4 w-full">
                        In this project, I mainly use <a href="https://pixijs.com/"  target="_blank" class="text-green-600 underline">PixiJS</a> framework for most of the interactions.
                        </div>
                        <div class="w-full space-y-4">
                            <div>Project Duration: Oct 2021 - Feb 2022</div>
                            <Softwares Ai Xd VSCode HTML CSS JS></Softwares>
                        </div>
                    </div>
                    <div class="border-2 border-green-500 lg:col-span-2 lg:max-w-[560px] w-full h-fit">
                        <iframe width="100%" class="aspect-video" src="https://www.youtube.com/embed/p6_aJUXHaTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                
            </div>
        </section>

        <section class="w-full max-w-[1440px] m-auto py-[80px]">
            <div class="w-[90%] m-auto">
                <div class="text-[2em] font-bold font-['Montserrat']">GALLERY</div>
                <div class="w-[90%] mx-auto my-[20px] grid gap-10 grid-cols-1 lg:grid-cols-2 lg:grid-rows-auto">
                    
                    <div v-for="img in gallery">
                        <div class="aspect-video bg-green-100 shadow-md border-2 border-green-400">
                            <img :src="img.src" :alt=img.alt class="">
                        </div>
                    </div>
                </div>
                <!-- <div class="text-center italic font-['quicksand']">click the image to enlarge the view</div> -->
            </div>
        </section>

        <section class=" bg-teal-100">
            <div class="w-full max-w-[1440px] m-auto">
                <div class="w-[90%] m-auto">
                    <div class="flex justify-between ">
                        <router-link to="/works/THH" class="block p-4 text-black"><font-awesome-icon icon="fa-solid fa-chevron-left" /> THH</router-link>
                        <router-link to="/works" class="p-4 hidden md:block text-black"><font-awesome-icon icon="fa-solid fa-pen-ruler" /> Return to Works</router-link>
                        <router-link to="/works/IntroWeiqi" class="block p-4 text-black">Intro To Weiqi <font-awesome-icon icon="fa-solid fa-chevron-right" /></router-link>
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
import Softwares from '../../components/works/Softwares.vue'

import Preview from '@/assets/works/SkyFoodie/Preview.png'
import Image1 from '@/assets/works/SkyFoodie/image1.png'
import Image2 from '@/assets/works/SkyFoodie/image2.png'

export default{
    components: { TitleHead, ProjectHero, ProjectInfo, Softwares },
    mounted(){
        document.title = 'Sky Foodie | JerwinJGKC'
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
