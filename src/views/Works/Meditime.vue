<template>
    <div class="flex flex-col w-full">

        <ProjectHero
            imageURL="Ecozean/Preview.png"
            titleHeader="MEDITIME"
            titleSubHeader="UI / UX, 2022"
        ></ProjectHero>

        <section class="py-[80px] font-['Quicksand']">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto">
                    <div class="mb-4 w-full md:w-[65ch]">
                        Ecozean Isalnd is an eco-friendly and self-sustainable island that helps rid pollution in the ocean.
                        Members of the publix are able to ...
                    </div>
                    <div class="w-full md:w-[65ch] space-y-4">
                        <div>Project Duration: 7 Days, July 2022</div>
                        <Softwares Xd ></Softwares>
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
            ]
        }
    }
}


</script>
