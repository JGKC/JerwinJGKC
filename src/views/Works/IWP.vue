<template>
    <div class="flex flex-col w-full">

        <ProjectHero
            :imageURL=heroImg
            titleHeader="SDM INTERNSHIP PORTAL"
            titleSubHeader="FRONTEND / BACKEND, 2023"
        ></ProjectHero>

        <section class="py-[80px] font-['Quicksand']">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto grid lg:grid-cols-5 justify-between gap-10">
                    <div class="lg:col-span-3">
                        <div class="mb-4 w-full">
                            Internship Portal is a Conceptual Web Application created with Vue and Laravel. 
                            It purpose is to bring better Quality of Life to the School Staff when managing 
                            Internship related workload. 
                        </div>
                        <div class="mb-4 w-full">
                            This Web App allows the staff to access, upload, 
                            modify and remove data from the database. As well as allowing students to submit 
                            documents and completing forms/assessment.
                        </div>
                        <div class="w-full space-y-4">
                            <div>Project Duration: Oct 2022 - Feb 2023</div>
                            <Softwares Xd Ai VSCode HTML CSS JS PHP Laravel Vue></Softwares>
                        </div>
                    </div>
                    <div class="border-2 border-green-500 lg:col-span-2 lg:max-w-[560px] w-full h-fit">
                        <iframe width="100%" class="aspect-video" src="https://www.youtube.com/embed/T6M0XacZG84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                
            </div>
        </section>

        <section class="py-[80px] bg-blue-200 font-[Quicksand]">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

                    <!-- Rationale -->
                    <div class="col-span-2 lg:order-2">
                        <div class="text-[2em] mb-8 font-bold font-[Montserrat] uppercase">Branding Rationale</div>
                        <div class="flex flex-col space-y-4">
                            <div>
                                <div class="text-[1.5em] font-bold">Graphics in Logo</div>
                                <div class="space-y-2">
                                    <div>
                                        Internship involves at least 3 parties, student, school and industry. I make use of 3 letters with distinct colours, each representing one party.
                                    </div>
                                    <div>
                                        “I for Industry, T for Teachers, P for Pupil”
                                    </div>
                                    <div>
                                        No matter how you interpret this, basically, 3 parties, 3 letters, 3 colours.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Logos -->
                    <div class="lg:order-1 col-span-1 space-y-8">
                        <div class="grid md:grid-cols-2 md:items-center gap-8 lg:grid-cols-1 lg:justify-center">
                            <img src="../../assets/works/ITP/logo.svg" alt="THH Logo" class="block">
                        </div>
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

import Preview from "@/assets/works/ITP/Preview.png"
import Image1 from "@/assets/works/ITP/image1.png"
import Image2 from "@/assets/works/ITP/image2.png"
import Image3 from "@/assets/works/ITP/image3.png"
// import Image4 from "@/assets/works/ITP/image4.png"



export default{
    components: { TitleHead, ProjectInfo, ProjectHero, Softwares },
    mounted(){
        document.title = 'SDM Internship Portal | JerwinJGKC'
    },
    data(){
        return{
            heroImg:Image1,
            gallery: [
                {
                    src: Image1,
                    alt: "image"
                },
                {
                    src: Image2,
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