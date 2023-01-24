<template>
    <div class="flex flex-col w-full">

        <ProjectHero
            imageURL="IntroToWeiqi/Preview.png"
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
    
                        <div class="w-full md:w-[65ch] space-y-4">
                            <div>Project Duration: Oct 2021 - Feb 2022</div>
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
                <div class="text-[2em] font-bold font-['Montserrat']">Gallery</div>
                <div class="w-[90%] mx-auto my-[20px] grid gap-10 grid-cols-1 lg:grid-cols-2 lg:grid-rows-auto">
                    
                    <div v-for="img in gallery">
                        <div class="aspect-video bg-green-100 shadow-md border-2 border-green-400">
                            <img :src="'../../assets/works/THH/'+img.src" :alt=img.alt class="">
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

export default{
    components: { TitleHead, ProjectHero, ProjectInfo, Softwares },
    data(){
        return{
            gallery:[
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
                {
                    src: "",
                    alt: "image"
                },
            ]
        }
    }
}


</script>
