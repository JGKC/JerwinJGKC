<template>
    <!-- <div class="worksCard w-full min-h-[300px] rounded-[10px] overflow-hidden bg-[#fff] shadow-lg transition-opacity relative" @mouseover="cardHover" @mouseleave="cardHover2">
        <div class="w-full aspect-video bg-yellow-100 overflow-hidden">
            <img :src=img alt="Preview Image">
        </div>
        <div class="py-[15px] px-[10px] font-[Quicksand]">
            <div class="text-[22px] font-bold mb-2 font-[Montserrat]">{{title}}</div>
            <div class="mb-2">
                <div v-for="tag in tags" class="inline-block worksTag">
                    <div class="text-[12px] uppercase p-[5px] bg-gray-200 rounded-[5px] mr-[5px] font-bold">{{tag}}</div> 
                </div>
            </div>
            <div class="leading-[120%] min-h-[50px]" hidden>{{description}}</div>
        </div>
        <div class="p-[10px] pt-0 bottom-0 w-full mt-0">
            <RouterBtn
                v-show=link
                :link=link
                cta="View More"
                class="mt-0"
            >
            </RouterBtn>
        </div>
    </div> -->

    <RouterLink v-show=link :to="link" class="rounded-[10px] overflow-hidden">
        <div class="worksCard w-full rounded-[10px] overflow-hidden shadow-lg transition-opacity relative" @mouseover="cardHover" @mouseleave="cardHover2">
            
            <div class="w-full aspect-video">
                <img :src=img alt="Preview Image" class="absolute">

                <div class="hoverInfo h-full w-full bg-gradient-to-tr from-[#94EB9B] via-[#ADD8E680] to-transparent hidden">
                    <div class="py-[15px] px-[10px] font-[Quicksand] absolute text-black w-full bottom-[0.1px] text-[1.15em]">
                        <div class="text-[22px] font-bold mb-1 font-[Montserrat]">{{title}}</div>
                        <div v-for="tag in tags" class="inline-block worksTag">
                            <div class="text-[12px] uppercase p-[5px] bg-gray-200 rounded-[5px] mr-[5px] font-bold">{{tag}}</div> 
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </RouterLink>


</template>

<script>

import { RouterLink } from 'vue-router';
import RouterBtn from './RouterBtn.vue';

    export default{
        components: { RouterLink, RouterBtn },
        props:{
            title:{
                type: String,
                required: true
            },
            tags:{
                type: Array,
                required: true
            },
            description:{
                type: String,
                required: true
            },
            img:{
                type: String,
                required: false
            },
            link:{
                type: String,
                required: false
            }
        },
        data(){
            return{}
        },
        methods:{
            cardHover(event){

                let works = Array.from(document.getElementsByClassName("worksCard"))

                works.forEach(x =>{
                    x.style.opacity = 0.8
                })

                let card = event.target.closest(".worksCard")
                card.style.opacity = 1
                
            },
            cardHover2(){
                let works = Array.from(document.getElementsByClassName("worksCard"));
                works.forEach(x =>{
                    x.style.opacity = 1
                })
            }
        }
    }
    
</script>

<style>

.worksCard:hover .hoverInfo{
    display: block;
    transition: display 0.5s ease;
}

</style>