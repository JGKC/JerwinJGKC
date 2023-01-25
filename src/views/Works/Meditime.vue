<template>
    <div class="flex flex-col w-full">

        <ProjectHero
            :imageURL=heroImg
            titleHeader="MEDITIME"
            titleSubHeader="UI / UX, 2022"
        ></ProjectHero>

        <section class="py-[80px] font-['Quicksand']">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto flex flex-wrap justify-between gap-10">
                    <div>
                        <div class="mb-4 w-full md:w-[65ch]">
                            Meditime is an app that keeps track of medications and reminders to take medication on time.
                        </div>
                        <div class="mb-4 w-full md:w-[65ch]">
                            Under Google UX Certification Program, I followed the steps as I learn more towards as a UX Designer.
                        </div>
                        <div class="w-full md:w-[65ch] space-y-4">
                            <div>Project Duration: 7 Days, July 2022</div>
                            <Softwares Xd ></Softwares>
                        </div>
                    </div>
                    <div class="border-2 border-green-500 lg:max-w-[560px] w-full aspect-video">
                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTks1y0FcCk7nkv5lLybKMZ71JRoQs-Bf6sUAASsEUvxNbB2Lnv0S3Ktnn2CIawrtbxhmEG3R7T2RKX/embed?start=false&loop=true&delayms=3000" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
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
                        <router-link to="/works/Cafennie" class="block p-4 text-black"><font-awesome-icon icon="fa-solid fa-chevron-left" /> Cafennie</router-link>
                        <router-link to="/works" class="p-4 hidden md:block text-black"><font-awesome-icon icon="fa-solid fa-pen-ruler" /> Return to Works</router-link>
                        <router-link to="/works/Ecozean" class="block p-4 text-black">Ecozean <font-awesome-icon icon="fa-solid fa-chevron-right" /></router-link>
                    </div>
                    <router-link to="/works" class="text-center block p-4 md:hidden text-black"><font-awesome-icon icon="fa-solid fa-pen-ruler" /> Return to Works</router-link>
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

import Preview from "../../assets/works/Meditime/Preview.png"
import Image1 from "../../assets/works/Meditime/image.png"

export default{
    components: { TitleHead, ProjectHero, ProjectInfo, Softwares },
    mounted(){
        document.title = 'Meditime | JerwinJGKC'
    },
    data(){
        return{
            heroImg:Preview,
            gallery:[
                {
                    src: Image1,
                    alt: "image"
                },
                {
                    src: Preview,
                    alt: "image"
                },
            ]
        }
    }
}


</script>
