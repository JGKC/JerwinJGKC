<template>
    <div class="flex flex-col w-full">

        <ProjectHero
            imageURL="THH/Preview.png"
            titleHeader="THE HIDDEN HERITAGE"
            titleSubHeader="FRONTEND / BACKEND"
        ></ProjectHero>

        <section class="py-[80px] font-['Quicksand']">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto">
                    <div class="mb-4 w-full md:w-[65ch]">
                        The Hidden Heritage is a non-profit organisation that provides readers with an informative
                        guide for users who enjoys travelling around the heritage corners of Singapore that experienced
                        as we go about our daily lives. 
                    </div>
                    <div class="w-full md:w-[65ch] space-y-4">
                        <div>Project Duration: Oct 2021 - Feb 2022</div>
                        <Softwares Xd Ai Ps VSCode HTML CSS JS PHP></Softwares>
                    </div>
                </div>
                
            </div>
        </section>

        <section class="py-[80px] bg-red-200 font-[Quicksand]">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

                    <!-- Rationale -->
                    <div class="col-span-2 lg:order-2">
                        <div class="text-[2em] mb-8 font-bold font-[Montserrat] uppercase">Branding Rationale</div>
                        <div class="flex flex-col space-y-4">
                            <div>
                                <div class="text-[1.5em] font-bold">Red Coloured Design</div>
                                <div class="space-y-2">
                                    <div>
                                        The overall design used different shades of red from grahics to texts. This signifies to the Samsui Women
                                        or 'red headscarf' from literal translation, a group of Chinese female immigrants came from China to Malaya
                                        and Singapore for Construction and industrial jobs in 1920s - 1940s.
                                    </div>
                                    <div>
                                        They have built many buildings during Singapore's early days and left an impact to Singapore's History.
                                        Buildings built by the Samsui Women are still standing today.
                                    </div>
                                    
                                </div>
                            </div>
                            <div>
                                <div class="text-[1.5em] font-bold">Graphics in Logo</div>
                                <div class="space-y-2">
                                    <div>
                                        There are 2 graphics in the logo: a building and a hawker.
                                    </div>
                                    <div>
                                    The building represents Singapore Common Housing Estate, HDB Flats, and the hawker represents that Singapore 
                                    was once a Kampong with its unqiue heritage lefted behind.
                                    </div>
                                    <div>
                                        The hawker graphic was modelled after the <a href="https://goo.gl/maps/e4E842mi2BvsQh2g8" target="_blank" class="underline text-red-500 font-bold">statue located in Hougang Heritage Trail.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Logos -->
                    <div class="lg:order-1 col-span-1 space-y-8">
                        <img src="../../assets/works/THH/Logo_Color.svg" alt="THH Logo" class="block">
                        <img src="../../assets/works/THH/Logo_BW.svg" alt="THH Logo" class="block">
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

    </div>

</template>
<script>
import TitleHead from '../../components/TitleHead.vue';
import ProjectHero from '../../components/works/ProjectHero.vue';
import ProjectInfo from '../../components/works/ProjectInfo.vue';
import Softwares from '../../components/works/Softwares.vue';

import Image1 from "@/assets/works/THH/image1.png"



export default{
    components: { TitleHead, ProjectInfo, ProjectHero, Softwares },
    data(){
        return{
            brand:[
            ],
            gallery: [
                {
                    src: Image1,
                    alt: "image"
                },
                {
                    src: "",
                    alt: "image"
                },
                {
                    src: "",
                    alt: "image"
                },
                {
                    src: "",
                    alt: "image"
                },
            ]
        }
    }
}


</script>