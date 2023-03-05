<template>
    <div class="flex flex-col w-full">

        <ProjectHero
            :imageURL=heroImg
            titleHeader="SIZGRILL"
            titleSubHeader="BRANDING / GRAPHIC"
        ></ProjectHero>

        <section class="py-[80px] font-['Quicksand']">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto">
                    <div class="mb-4 w-full md:w-[65ch] space-y-4">
                        <div>
                            SizGrill is a conceptual Restaurant that provides customers with grilled food.
                            Our Customers can choose to grill their meal and we would provide the finest ingredients on the spot!
                        </div>
                        <div>
                            Our purpose is to give the customers the opportunities to grill their food together with a group of close ones, 
                            having fun and exciting memories during the process. We aim to provide them with an enjoyable experience each time they visit us.     
                        </div>
                        <div>
                            In this project, I used different design softwares to create a brand guide, logo and digital visuals.
                        </div>
                    </div>

                    <div class="w-full md:w-[65ch] space-y-4">
                        <div>Project Duration: Apr 2021 - Aug 2021</div>
                        <Softwares Ai Ps Xd></Softwares>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-[80px] bg-[#5A5A5A] text-gray-100">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

                    <!-- Rationale -->
                    <div class="col-span-2 lg:order-2">
                        <div class="text-[2em] mb-8 font-bold font-[Montserrat] uppercase">Branding Rationale</div>
                        <div class="flex flex-col space-y-4">
                            <div>
                                <div class="text-[1.5em] mb-2 font-bold font-['Montserrat']">Logp Development</div>
                                <div class="font-[Quicksand] space-y-4">
                                    <div>
                                        the logo is created by using 9 circles and 7 lines.
                                        The lines that are slanted are at 30° clockwise.
                                    </div>
           
                                </div>
                            </div>
                            <div>
                                <div class="text-[1.5em] mb-2 font-bold font-['Montserrat']">Graphics in Logo</div>
                                <div class="font-[Quicksand] space-y-2">
                                    <div>There are 3 graphics too look out in the logo:</div>
                                    <div>The S-looking shape represents Fire;</div>
                                    <div>The G-looking object represents the Grill;</div>
                                    <div> Lastly, the shape of grilled meat with grill lines is found at the bottom of the Grill.</div> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Logos -->
                    <div class="lg:order-1 col-span-1 space-y-8 grid grid-cols-2 items-center gap-8">
                        <img src="@/assets/works/SizGrill/logo1.png" alt="SizGrill Logo" class="block">
                        <img src="@/assets/works/SizGrill/logo.png" alt="SizGrill secondary Logo" class="block">
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
                        <router-link to="/works/IntroWeiqi" class="block p-4 text-black"><font-awesome-icon icon="fa-solid fa-chevron-left" /> Intro To Weiqi</router-link>
                        <router-link to="/works" class="p-4 hidden md:block text-black"><font-awesome-icon icon="fa-solid fa-pen-ruler" /> Return to Works</router-link>
                        <router-link to="/works/AsianCompletionist" class="block p-4 text-black">Asian Completionist <font-awesome-icon icon="fa-solid fa-chevron-right" /></router-link>
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

import Preview from "@/assets/works/SizGrill/Preview.png"
import Image1 from "@/assets/works/SizGrill/image1.png"
import Image2 from "@/assets/works/SizGrill/image2.png"
import Image3 from "@/assets/works/SizGrill/image3.png"
import Image4 from "@/assets/works/SizGrill/image4.png"

export default{
    components: { TitleHead, ProjectHero, ProjectInfo, Softwares },
    mounted(){
        document.title = 'SizGrill | JerwinJGKC'
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
                    src: Image2,
                    alt: "image"
                },
                {
                    src: Image4,
                    alt: "image"
                },
                {
                    src: Preview,
                    alt: "image"
                },
                {
                    src: Image3,
                    alt: "image"
                },

            ]
        }
    }
}


</script>
