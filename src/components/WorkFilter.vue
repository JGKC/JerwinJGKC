<script>
export default {
    props: ["works-selected"],
    data() {
        return {
            worksSelected: [],
            tags: [
                    "Graphic Design",
                    "UX Design", 
                    "Frontend Development", 
                    "Backend Development"
                ],
        }
    },
    methods:{
        updateFilter(){
            console.log(this.worksSelected)
            this.$emit("checked-works", this.worksSelected)


            // if (this.checkedWorks > 0){

            //     // let works = document.getElementsByClassName("worksCard")
            //     // console.log(works)

            // } else {

            // }
        }
    }
}
</script>


<template>
    <div class="w-[300px] h-fit p-[20px] rounded-[5px] bg-slate-300">
        <div class="text-[24px] font-bold">Filter</div>

        <form>

            {{worksSelected}}

            <div v-for="tag in tags">
                <input @change="updateFilter" v-model="worksSelected" type="checkbox" :name="tag" :id="tag" :value="tag">
                <label :for="tag">{{tag}}</label>
            </div>
        </form>


    </div>
</template>

<style>
.logo{
    height:80px;
    width: 80px;

    display: grid;
    place-items: center;
}


.SideNavBtn{
    height:80px;
    width:80px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 10px;
    font-size: 12px;
    font-family: "Quicksand", sans-serif;
}

input[type="checkbox"]{
    display: inline-block;

    height:20px;
    width:20px;

    margin-right:20px


}


</style>