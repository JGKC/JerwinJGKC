<template>
    <div class="flex flex-col w-full">

        <ProjectHero
            :imageURL=heroImg
            titleHeader="ECOZEAN"
            titleSubHeader="FRONTEND / UX, 2022"
        ></ProjectHero>

        <section class="py-[80px] font-['Quicksand']">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto grid lg:grid-cols-5 justify-between gap-10">
                    <div class="lg:col-span-3">
                        <div class="mb-4 w-full">
                            Ecozean is a fiticous eco-friendly and self-sustainable Island that combats the ocean pollution.
                            Members of the public are able to visit the island for educational pruposes, to understand Ecozean's purpose and 
                            learn alternative ways to help with the ocean poullution issue.
                        </div>
                        <div class="mb-4 w-full">
                            In this group of 4 project, I was in charge of coding the Microsite. 
                            I mainly use <a href="https://jquery.com/" target="_blank" class="text-green-600 underline">jQuery</a> as the main framework and <a href="https://greensock.com/gsap/"  target="_blank" class="text-green-600 underline">GSAP</a> for animations.
                        </div>
                        
                        <div class="w-full space-y-4 ">
                            <div>Project Duration: 2 Weeks, Aug 2021</div>
                            <Softwares Ai Ps Xd VSCode HTML CSS JS></Softwares>
                        </div>

                        <div class="mb-4 hidden lg:block"> 
                            <a href="https://ecozean.jerwingoh.com" target="_blank"
                            class="mt-4 relative flex w-[250px] justify-center rounded-md border border-transparent bg-[#20B2AA] py-2 px-4 text-sm font-bold font-['Quicksand'] text-white hover:bg-[#188781] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            >Visit Website</a>
                        </div>

                    </div>
                    <div class="border-2 border-green-500 lg:col-span-2 lg:max-w-[560px] w-full h-fit">
                        <iframe width="100%" class="aspect-video" src="https://www.youtube.com/embed/yfh4FjSgKpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                
            </div>
        </section>

        <section class="py-[80px] bg-teal-100 font-['quicksand']">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

                    <!-- Rationale -->
                    <div class="col-span-2 lg:order-2">
                        <div class="text-[2em] mb-8 font-bold font-[Montserrat] uppercase">Branding Rationale</div>
                        <div class="flex flex-col space-y-4">
                            <div>
                                <div class="text-[1.5em] font-bold mb-2">Brand Naming</div>
                                <div class="space-y-4">
                                    <div>
                                        Ecozean is derived from the combination of the words "eco" and "ozean" (ocean in german translation).
                                        The defination of word "eco" is to not harm and protect the environment. As our focus is to tackle 
                                        Ocean Pollution, we would also need to think of ways that will not harm the ecosystem of the ocean. 
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="text-[1.5em] font-bold mb-2">Graphics in Logo</div>
                                <div class="space-y-2">
                                    <div>The Logo is made up of 3 parts: the Brand Name, the Whale, a Green City.</div>
                                    <div>The Whale represents the whale-shape islands, Ecozean Jr. The islands use biomimicry design from whale.</div>
                                    <div>The Green City represents the sustainable city on the islands.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Logos -->
                    <div class="lg:order-1 col-span-1">
                        <div class="grid md:grid-cols-3 md:items-center gap-8 lg:grid-cols-1 lg:justify-center">
                            <img src="../../assets/works/Ecozean/Logo1.svg" alt="Ecozean Primary Logo" class="block">
                            <img src="../../assets/works/Ecozean/Logo2.svg" alt="Ecozean Secondary Logo" class="block md:col-span-2 lg:col-span-1">>
                        </div>
                    </div>
                </div>            
                
            </div>
        </section>

        <section class="py-[80px]">
            <div class="w-full max-w-[1440px] m-auto">
                <div class="w-[90%] m-auto">
                    <div class="text-[2em] font-bold font-['Montserrat']">GALLERY</div>
                    <div class="italic font-['Quicksand']">Click the image to enlarge the view</div>
                    <div class="w-[90%] mx-auto my-[20px] grid gap-10 grid-cols-1 lg:grid-cols-2 lg:grid-rows-auto">
                        
                        <div v-for="img in gallery">
                            <div class="aspect-video bg-green-100 shadow-md border-2 border-green-400" @click="ImageExpand">
                                <img :src="img.src" :alt=img.alt>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <section class="py-[80px]">
            <div class="w-full max-w-[1440px] m-auto">
                <div class="w-[90%] m-auto">
                    <div class="text-[1.5em] lg:text-[2em] font-bold font-['Montserrat'] text-center">ACKNOWLEDGEMENT</div>
                    <div class="w-[90%] mx-auto my-[20px] grid gap-10 grid-cols-1 lg:grid-cols-3 lg:grid-rows-auto">
                        <div v-for="item in acknowlegdement">
                            <div class="rounded-[5px] bg-green-100 p-8 space-y-4">
                                <div class="text-center">
                                    <div class="text-[1.25em] font-bold font-['Montserrat'] uppercase">{{ item.name }}</div>
                                    <div class="font-['quicksand']">{{ item.role }}</div>
                                </div>
                                <div class="flex justify-center gap-2">
                                    <div v-for="x in item.socials">
                                        <a v-show="x.http" :href="x.http" target="_blank" class="grid h-[35px] w-[35px] place-content-center border-2 border-green-500 rounded-[5px]">
                                            <font-awesome-icon :icon="x.icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ProjectFooter
            PrevLink="Meditime"
            PrevName="Meditime"
            NextLink="THH"
            NextName="THH"
        ></ProjectFooter>

        <div class="bg-[#000000a0] z-[100000] fixed top-0 left-0 w-full h-[100vh] grid place-content-center" v-show="imgExpand">
            <div @click="ImageClose" class="cursor-pointer"><font-awesome-icon icon="fa-solid fa-times" size="2xl"/></div>
            <div class="aspect-video w-[60rem]">
                <img id="imgExpand" src="" alt="">
                <div id="altText" class="text-white text-center m-2"></div>
            </div>
        </div>


    </div>
</template>

<script>
import TitleHead from '../../components/TitleHead.vue';
import ProjectHero from '../../components/works/ProjectHero.vue';
import Softwares from '../../components/works/Softwares.vue';

import Preview from "@/assets/works/Ecozean/Preview.png"
import Image1 from "@/assets/works/Ecozean/image1.png"
import Image2 from "@/assets/works/Ecozean/image2.png"
import Image3 from "@/assets/works/Ecozean/image3.png"
import Image4 from "@/assets/works/Ecozean/image4.png"
import ProjectFooter from '../../components/works/ProjectFooter.vue';


export default{
    components: { TitleHead, ProjectHero, Softwares, ProjectFooter },
    mounted(){
        document.title = 'Ecozean | JerwinJGKC'
    },
    data(){
        return{
            heroImg:Preview,
            imgExpand:false,
            gallery:[
                {
                    src: Image1,
                    alt: "Image: Overview"
                },
                {
                    src: Image2,
                    alt: "Image: Colours & Components"
                },
                {
                    src: Image3,
                    alt: "Image: Mockups"
                },
                {
                    src: Image4,
                    alt: "Image: Mockups 2"
                },
            ],
            acknowlegdement:[
                {
                    name: "Yang Xinyue",
                    role:"Art Directon, UI/UX",
                    socials:{
                        linkedin: {
                            icon:"fa-brands fa-linkedin-in",
                            http:"https://www.linkedin.com/in/xinyueyangg",
                        },
                        behance: {
                            icon:"fa-brands fa-behance",
                            http:"",
                        },
                    }
                },
                {
                    name: "Kendrick Pang",
                    role:"Model Concept, UI/UX",
                    socials:{
                        linkedin: {
                            icon:"fa-brands fa-linkedin-in",
                            http:"https://www.linkedin.com/in/kendrick-pang-8199b0233",
                        },
                        behance: {
                            icon:"fa-brands fa-behance",
                            http:"",
                        },

                    } 
                },
                {
                    name: "Hilma",
                    role:"Branding, UI/UX",
                    socials:{
                        linkedin: {
                            icon:"fa-brands fa-linkedin-in",
                            http:"https://www.linkedin.com/in/hilma-dini",
                        },
                        behance: {
                            icon:"fa-brands fa-behance",
                            http:"",
                        },
                    }
                }
            ]
        }
    },
    methods:{
        ImageExpand(evt){
            this.imgExpand = true

            let img = document.getElementById("imgExpand")
            let alt = document.getElementById("altText")

            img.src = evt.target.src
            img.alt = evt.target.alt
            alt.innerHTML = evt.target.alt
        },
        ImageClose(){
            this.imgExpand = false
        }
    }
}


</script>
