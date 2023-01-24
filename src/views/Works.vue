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
                <div class="w-[90%] mx-auto my-[20px] h-fit p-[20px] rounded-[5px] bg-gray-200 flex flex-wrap">
                    <div class="text-[24px] font-bold mr-[20px]">FILTER</div>

                    <div class="filter">
                        <div v-for="(tag) in tags" class="inline-flex items-center mr-[10px] last:mb-0 mb-4 lg:mb-0 font-[Quicksand]">
                            <input @change="updateFilter" v-model="checkedWorks" type="checkbox" :name="tag.tag" :id="tag.tag" :value="tag.class">
                            <label :for="tag.tag" :class="tag.class" class="cursor-pointer">{{tag.tag}}</label>
                        </div>
                    </div>

                </div>

                
                <!-- Cards -->
                <div class="w-[90%] mx-auto my-[20px] grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:grid-rows-auto">
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

export default{
    components: {
        TitleHead,WorksCard
    },
    data(){
        return{
            checkedWorks: [],
            tags: [

                {
                    tag:"UX Design",
                    class:"UX"
                },
                {
                    tag:"UI Design",
                    class:"UI"
                },

                {
                    tag:"Frontend Dev",
                    class:"Frontend"
                },
                {
                    tag:"Backend Dev",
                    class:"Backend"
                },
                {
                    tag:"Graphic Design",
                    class:"Graphic"
                },
                {
                    tag:"Mobile App",
                    class:"App"
                },
                {
                    tag:"Branding",
                    class:"Branding"
                },
            ],
            works:[
                {
                    id: "1",
                    title: "Ecozean", 
                    img: "./src/assets/works/Ecozean/Preview.png", 
                    tags: ["Frontend","UX"],
                    description: "Ecozean is a fiticous eco-friendly Island for combating the ocean pollution.",
                    link: "/Works/Ecozean"
                },
                {
                    id: "2",
                    title: "The Hidden Heritage",
                    img: "./src/assets/works/THH/Preview.png",
                    tags: ["Frontend", "Backend"],
                    description: "The Hidden Heritage is a Forum Webpage that brings discussions to the Sinagpore Heritage.",
                    link: "/Works/THH"
                },
                {
                    id: "3",
                    title: "Sky Foodie",
                    img: "./src/assets/works/SkyFoodie/Preview.png",
                    tags: ["Frontend"],
                    description: "Sky Foodie is a Web Game Application that raises awareness choosing healthy eating.",
                    link: "/Works/SkyFoodie"
                },
                {
                    id: "4",
                    title: "Intro to Weiqi",
                    img: "./src/assets/works/IntroToWeiqi/Preview.png",
                    tags: ["Frontend"],
                    description: "Intro to Weiqi is a Web Application for people who are interested in learning in Weiqi (Go).",
                    link: "/Works/IntroWeiqi"
                },
                {
                    id: "5",
                    title: "SizGrill",
                    img: "./src/assets/works/SizGrill/Preview.png",
                    tags: ["Branding","Graphic"],
                    description: "SizGrill is a conceptual Restaurant Brand that provides customers with grilled food.",
                    link: "/Works/SizGrill"
                },
                {
                    id: "6",
                    title: "Asian Completionist",
                    img: "./src/assets/works/AsianCompletionist/Preview.png",
                    tags: ["Graphic"],
                    description: "Asian Completionist is a conceptual book design based a Malaysian Artist, Namewee.",
                    link: "/Works/AsianCompletionist"
                },
                {
                    id: "7",
                    title: "Cafennie",
                    img: "./src/assets/works/AsianCompletionist/Preview.png",
                    tags: ["UX","UI","App"],
                    description: "Cafennie is a local cafe that delivers people's favourite coffee and snacks to the corner of their houses. ",
                    link: "/Works/Cafennie"
                },
                {
                    id: "8",
                    title: "Meditime",
                    img: "./src/assets/works/AsianCompletionist/Preview.png",
                    tags: ["UX","UI","App"],
                    description: "Meditime is an app that keeps track of medications and reminders to take medication on time.",
                    link: "/Works/Meditime"
                }
            ]
        }
    },
    methods:{
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
    border-radius: 20px;
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