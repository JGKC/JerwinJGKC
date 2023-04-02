<template>
    <div class="flex flex-col w-full">
        <div class="w-full max-w-[1440px] m-auto flex flex-col">
            <div class="w-[90%] m-auto">
                <TitleHead titleHead="WORKS" titleSub="PAGE" />
            </div>
        </div>

        <section class="py-[20px]">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">

                <!-- Filter -->
                <div class="w-[90%] mx-auto my-[20px] h-fit p-[20px] rounded-[5px] bg-green-50 border-2 flex flex-wrap gap-4">
                    <div class="flex gap-4 lg:border-r-2 pr-4">
                        <div class="text-[24px] font-bold">FILTER</div>
                        <div @click="clearFilter" class="hover:cursor-pointer px-[10px] py-[5px] border-[1px] border-gray-400 bg-gray-100  hover:bg-gray-300 rounded-lg font-[Quicksand]">Clear Filter</div>
                    </div>

                    <div class="filter flex flex-wrap gap-2">
                        <div v-for="(tag) in tags" class="inline-flex items-center font-[Quicksand]">
                            <input @change="updateFilter" v-model="checkedWorks" type="checkbox" :name="tag.tag" :id="tag.tag" :value="tag.class">
                            <label :for="tag.tag" :class="tag.class" class="cursor-pointer">{{tag.tag}}</label>
                        </div>
                    </div>
                </div>

                
                <!-- Cards -->
                <div class="w-[90%] mx-auto my-[20px] grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-auto">
                    <WorksCard 
                        v-for="work in works"
                        :class="work.tags"
                        :title=work.title
                        :img=work.img
                        :tags=work.tags
                        :description=work.description
                        :link="work.link"
                    />
                </div>
                
            </div>
        </section>
    </div>

</template>

<script>
import TitleHead from '../components/TitleHead.vue'
import WorksCard from '../components/WorksCard.vue'

import Ecozean from         '../assets/works/Ecozean/Preview.png'
import THH from             '../assets/works/THH/Preview.png'
import SkyFoodie from       '../assets/works/SkyFoodie/Preview.png'
import IntroToWeiqi from    '../assets/works/IntroToWeiqi/Preview.png'
import SizGrill from        '../assets/works/SizGrill/Preview.png'
import AsianC from          '../assets/works/AsianCompletionist/Preview.png'
import Cafennie from        '../assets/works/Cafennie/Preview.png'
import Meditime from        '../assets/works/Meditime/Preview.png'
import NutriGrade from      '../assets/works/NutriGrade/Preview.png'
import ITP from             '../assets/works/ITP/Preview.png'


export default{
    components: {
        TitleHead,WorksCard
    },
    mounted(){
        document.title = 'Works | JerwinJGKC'
    },
    data(){
        return{
            checkedWorks: [],
            tags: [

                {
                    tag:"UX Design",
                    class:"UX",
                },
                {
                    tag:"UI Design",
                    class:"UI",
                },

                {
                    tag:"Frontend Dev",
                    class:"Frontend",
                },
                {
                    tag:"Backend Dev",
                    class:"Backend",
                },
                {
                    tag:"Graphic Design",
                    class:"Graphic",
                },
                {
                    tag:"Mobile App",
                    class:"Mob-App",
                },
                {
                    tag:"Web App",
                    class:"Web-App",
                },
                {
                    tag:"Branding",
                    class:"Branding",
                },
            ],
            works:[
                {
                    id: "1",
                    title: "Ecozean", 
                    img: Ecozean, 
                    tags: ["Frontend","UX","UI"],
                    description: "Ecozean is a fiticous eco-friendly Island for combating the ocean pollution.",
                    link: "/Works/Ecozean"
                },
                {
                    id: "2",
                    title: "The Hidden Heritage",
                    img: THH,
                    tags: ["Frontend", "Backend"],
                    description: "The Hidden Heritage is a Forum Webpage that brings discussions to the Sinagpore Heritage.",
                    link: "/Works/THH"
                },
                {
                    id: "3",
                    title: "Sky Foodie",
                    img: SkyFoodie,
                    tags: ["Frontend","Web-App"],
                    description: "Sky Foodie is a Web Game Application that raises awareness choosing healthy eating.",
                    link: "/Works/SkyFoodie"
                },
                {
                    id: "4",
                    title: "Intro to Weiqi",
                    img: IntroToWeiqi,
                    tags: ["Frontend","Web-App"],
                    description: "Intro to Weiqi is a Web Application for people who are interested in learning in Weiqi (Go).",
                    link: "/Works/IntroWeiqi"
                },
                {
                    id: "5",
                    title: "SizGrill",
                    img: SizGrill,
                    tags: ["Branding","Graphic"],
                    description: "SizGrill is a conceptual Restaurant Brand that provides customers with grilled food.",
                    link: "/Works/SizGrill"
                },
                {
                    id: "6",
                    title: "Asian Completionist",
                    img: AsianC,
                    tags: ["Graphic"],
                    description: "Asian Completionist is a conceptual book design based a Malaysian Artist, Namewee.",
                    link: "/Works/AsianCompletionist"
                },
                {
                    id: "7",
                    title: "Cafennie",
                    img: Cafennie,
                    tags: ["UX","UI","Mob-App"],
                    description: "Cafennie is a local cafe that delivers people's favourite coffee and snacks to the corner of their houses. ",
                    link: "/Works/Cafennie"
                },
                {
                    id: "8",
                    title: "Meditime",
                    img: Meditime,
                    tags: ["UX","UI","Mob-App"],
                    description: "Meditime is an app that keeps track of medications and reminders to take medication on time.",
                    link: "/Works/Meditime"
                },
                {
                    id: "9",
                    title: "NutriGrade Poster",
                    img: NutriGrade,
                    tags: ["Graphic"],
                    description: "COMING VERY SOON",
                    link: "/Works"
                },
                {
                    id: "10",
                    title: "Internship Portal",
                    img: ITP,
                    tags: ["Frontend","Backend","UI","UX"],
                    description: "COMING VERY SOON",
                    link: "/Works"
                },
            ]
        }
    },
    methods:{
        clearFilter(){
            let worksEl = Array.from(document.getElementsByClassName("worksCard"))
            let worksTag = Array.from(document.getElementsByTagName("label"))

            this.checkedWorks.length = 0
            console.log("cleared")

            worksEl.forEach(y =>{
                    y.style.display = "block"
                });

            worksTag.forEach(z => {
                z.classList.remove("selected")
            })
        },
        updateFilter(evt){

            let worksEl = Array.from(document.getElementsByClassName("worksCard"))
            // console.log(worksEl)

            let worksTag = Array.from(document.getElementsByTagName("label"))

            if (this.checkedWorks.length > 0){

                worksEl.forEach(y =>{
                    y.style.display = "none"
                });

                worksTag.forEach(z => {
                    z.classList.remove("selected")
                })

                this.checkedWorks.forEach(x => {

                    worksEl.forEach(y => {
                        if(y.classList.contains(x)){
                            y.style.display = "block"
                        }
                    })

                    worksTag.forEach(z=>{
                        if(z.classList.contains(x)){
                            z.classList.add("selected")
                        }
                    })

                });
            } else {

                worksEl.forEach(y =>{
                    y.style.display = "block"
                });

                worksTag.forEach(z => {
                    z.classList.remove("selected")
                })

            } 
        }
    }

}
</script>

<style>
input[type="checkbox"]{

    display: none;
    /* display: inline-block; */
    height:20px;
    width:20px;

    margin-right:10px;

} 

.filter label{
    border-radius: 10px;
    padding: 5px 10px;
    border:1px solid #777
}

.filter label:hover{
    border: 1px solid #000
}

.filter label.selected {
    background: green;
    color: #fef6fe;
    border: 1px solid green
}

</style>