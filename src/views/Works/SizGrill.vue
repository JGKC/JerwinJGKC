<template>
    <div class="flex flex-col w-full">

        <ProjectHero
            imageURL="SizGrill/Preview.png"
            titleHeader="SIZGRILL"
            titleSubHeader="BRANDING / GRAPHIC"
        ></ProjectHero>

        <section class="py-[80px] font-['Quicksand']">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto">
                    <div class="mb-4 w-full md:w-[65ch]">
                        Ecozean Isalnd is an eco-friendly and self-sustainable island that helps rid pollution in the ocean.
                        Members of the publix are able to ...
                    </div>

                    <div class="w-full md:w-[65ch] space-y-4">
                        <div>Project Duration: 2 Weeks, Aug 2021</div>
                        <Softwares Ai Ps Xd></Softwares>
                    </div>
                </div>
                
            </div>
        </section>

        <section class="py-[80px] bg-[#2A2A2A] text-gray-100">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

                    <!-- Rationale -->
                    <div class="col-span-2 lg:order-2">
                        <div class="text-[2em] mb-8 font-bold font-[Montserrat] uppercase">Branding Rationale</div>
                        <div class="flex flex-col space-y-4">
                            <div>
                                <div class="text-[1.5em] font-medium">Red Coloured Design</div>
                                <div class="font-[Quicksand] space-y-4">
                                    <div>
                                        The overall design used different shades of red from grahics to texts. This signifies to the Samsui Women
                                        or 'red headscarf' from literal translation, a group of Chinese female immigrants came from China to Malaya
                                        and Singapore for Construction and industrial jobs in 1920s - 1940s.
                                    </div>
           
                                </div>
                            </div>
                            <div>
                                <div class="text-[1.5em] font-medium">Graphics in Logo</div>
                                <div class="font-[Quicksand]">
                                    There are 2 graphics in the logo: a building and a hawker.
        
                                    The building represents Singapore Common Housing Estate, HDB Flats, and the hawker represents that Singapore 
                                    was once a Kampong with its unqiue heritage lefted behind.
    
                                    The hawker graphic was modelled after the statue located in Hougang Heritage Trail.
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Logos -->
                    <div class="lg:order-1 col-span-1 space-y-8">
                        <img src="" alt="THH Logo" class="block">
                        <img src="" alt="THH Logo" class="block">
                    </div>
                </div>
                
            </div>
        </section>

        <section class="w-full max-w-[1440px] m-auto py-[80px]">
            <div class="w-[90%] m-auto">
                <div class="text-[2em] font-bold font-['Montserrat']">Gallery</div>
                <div class="w-[90%] mx-auto my-[20px] grid gap-10 grid-cols-1 lg:grid-cols-2 lg:grid-rows-auto">
                    
                    <div v-for="img in gallery">
                        <div class="aspect-video bg-green-100 shadow-md border-2 border-green-400">
                            <img :src="img.src" :alt=img.alt class="">
                        </div>
                    </div>
                </div>
                <div class="text-center italic font-['quicksand']">click the image to enlarge the view</div>
            </div>
        </section>

    </div>

</template>
<script>
import TitleHead from '../../components/TitleHead.vue';
import ProjectHero from '../../components/works/ProjectHero.vue';
import ProjectInfo from '../../components/works/ProjectInfo.vue';
import Softwares from '../../components/works/Softwares.vue';

import Image1 from "@/assets/works/SizGrill/image1.png"
import Image2 from "@/assets/works/SizGrill/image2.png"

export default{
    components: { TitleHead, ProjectHero, ProjectInfo, Softwares },
    data(){
        return{
            gallery:[
                {
                    src: Image1,
                    alt: "image"
                },
                {
                    src: Image2,
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
