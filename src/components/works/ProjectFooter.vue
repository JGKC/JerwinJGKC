<template>
    <section class=" bg-teal-100">
        <div class="w-full max-w-[1440px] m-auto">
            <div class="w-[90%] m-auto">
                <div class="flex justify-between ">
                    <router-link :to="'/works/'+PrevLink" class="block p-4 text-black"><font-awesome-icon icon="fa-solid fa-chevron-left" /> {{PrevName}}</router-link>
                    <router-link :to="'/works/'+NextLink" class="block p-4 text-black">{{NextName}} <font-awesome-icon icon="fa-solid fa-chevron-right" /></router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default{
    name: "Project Footer",
    props:{
        PrevLink:{type:String}, 
        PrevName:{type:String}, 
        NextLink:{type:String}, 
        NextName:{type:String}, 
    },
    data(){

    },
}

</script>