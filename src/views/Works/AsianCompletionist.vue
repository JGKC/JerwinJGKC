<template>
    <div class="flex flex-col w-full">

        <ProjectHero
            :imageURL=heroImg
            titleHeader="ASIAN COMPLETIONIST"
            titleSubHeader="GRAPHIC DESIGN , 2021"
        ></ProjectHero>

        <section class="py-[80px] font-['Quicksand']">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto grid lg:grid-cols-5 justify-between gap-10">
                    <div class="lg:col-span-3">
                        <div class="mb-4 w-full">
                            Asian Completionist is a conceptual book design based a Malaysian Artist, Namewee.
                            At the time of creating this book design, Namewee had completed 7 "Asian" Ablums.
                            When he decided to end the "Asian" Ablum series, I decided to make this book design 
                            to celebrate the achievements he have gained over the past few years and his completion to this series.
                        </div>

                        <div class="w-full space-y-4">
                            <div>Project Duration: Oct 2021 - Feb 2022</div>
                            <Softwares Id Ps Ai></Softwares>
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
import ProjectHero from '@/components/works/ProjectHero.vue';
import ProjectInfo from '@/components/works/ProjectInfo.vue';
import Softwares from '@/components/works/Softwares.vue';

import Preview from '@/assets/works/AsianCompletionist/Preview.png'
import Image1 from '@/assets/works/AsianCompletionist/image1.png'


export default{
    components:{ ProjectHero, ProjectInfo, Softwares },
    mounted(){
        document.title = 'Asian Completionist | JerwinJGKC'
    },
    data(){
        return{
            heroImg:Preview,
            gallery:[
                {
                    src: Preview,
                    alt: "preview image"
                },
                {
                    src: Image1,
                    alt: "content view"
                },
            ],
        }
    }
}
</script>