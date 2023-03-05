<template>
    <div class="flex flex-col w-full">

        <ProjectHero
            :imageURL=heroImg
            titleHeader="INTO TO WEIQI"
            titleSubHeader="FRONTEND / CREATIVE CODING, 2021"
        ></ProjectHero>

        <section class="py-[80px] font-['Quicksand']">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto flex flex-wrap justify-between gap-10">
                    <div>
                        <div class="mb-4 w-full md:w-[65ch]">
                            This Web Application is dedicated for people who are interested in learning in Weiqi(Go) or 
                            wanted to know the Basic Introduction for Weiqi. It features the introduction of Weiqi, the 
                            tutorial and the webistes and venues they can practice in online and physically respectively.
                        </div>
                        <div class="mb-4 w-full md:w-[65ch]">
                            For this project, I mainly use <a href="https://jquery.com/" target="_blank" class="text-green-600 underline">jQuery</a> 
                            as the main framework for interaction and <a href="https://greensock.com/gsap/"  target="_blank" class="text-green-600 underline">GSAP</a> for animations.
                        </div>
    
                        <div class="w-full md:w-[65ch] space-y-4">
                            <div>Project Duration: Apr 2021 - Aug 2021</div>
                            <Softwares Ai Xd VSCode HTML CSS JS></Softwares>
                        </div>
                    </div>
                    <div class="border-2 border-green-500 lg:max-w-[560px] w-full">
                        <iframe width="100%" class="aspect-video" src="https://www.youtube.com/embed/uexhpD1cbmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                        <router-link to="/works/SkyFoodie" class="block p-4 text-black"><font-awesome-icon icon="fa-solid fa-chevron-left" /> SkyFoodie</router-link>
                        <router-link to="/works" class="p-4 hidden md:block text-black"><font-awesome-icon icon="fa-solid fa-pen-ruler" /> Return to Works</router-link>
                        <router-link to="/works/SizGrill" class="block p-4 text-black">SizGrill <font-awesome-icon icon="fa-solid fa-chevron-right" /></router-link>
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

import Preview from '@/assets/works/IntroToWeiqi/Preview.png'
import Image1 from '@/assets/works/IntroToWeiqi/image1.png'

export default{
    components: { TitleHead, ProjectHero, ProjectInfo, Softwares },
    mounted(){
        document.title = 'Intro To Weiqi | JerwinJGKC'
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
