<template>
    <div class="worksCard w-full min-h-[350px] rounded-[10px] overflow-hidden bg-[#fff] shadow-lg transition-opacity relative" @mouseover="cardHover" @mouseleave="cardHover2">
        <div class="w-full aspect-video bg-yellow-100 overflow-hidden">
            <img :src=img alt="Preview Image">
        </div>
        <div class="py-[15px] px-[10px] font-[Quicksand]">
            <!-- Work Title -->
            <div class="text-[22px] font-bold mb-2 font-[Montserrat]">{{title}}</div>
            <!-- Tags -->
            <div class="mb-2">
                <div v-for="tag in tags" class="inline-block worksTag">
                    <div class="text-[12px] uppercase p-[5px] bg-gray-200 rounded-[5px] mr-[5px] font-bold">{{tag}}</div> 
                </div>
            </div>
            <!-- Description -->
            <div class="leading-[120%]">
                {{description}}
            </div>
        </div>
        <!-- Link -->
        <div class="p-[10px] pt-0 bottom-0 w-full mt-[10px]">
            <RouterBtn
                v-show=link
                :link=link
                cta="View More"
            >
            </RouterBtn>
        </div>
    </div>
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
                    x.style.opacity = 0.75
                })

                event.target.closest(".worksCard").style.opacity = 1
                
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