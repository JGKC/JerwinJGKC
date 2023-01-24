<template>

    <section class="py-[100px] bg-green-300">
            <div class="w-full max-w-[1440px] m-auto flex flex-col">
                <div class="w-[90%] m-auto">
                    <div class="text-center text-[36px] font-bold mb-8">Project Information</div>

                    <div class="lg:w-[80%] m-auto flex justify-between font-['quicksand']">
                        <!-- Project Goal -->
                        <div class="w-[300px] p-[30px] text-center aspect-square rounded-[10px] bg-[#ffffff80] grid place-content-center">
                            <font-awesome-icon icon="fa-solid fa-circle-info" class="text-[3em] mx-auto mb-4"/>
                            <div class="font-bold mb-2">{{ projectGoal }}</div>
                            <div>{{ projectGoal2 }}</div>
                        </div>
                        <!-- Project Time -->
                        <div class="w-[300px] p-[30px] text-center aspect-square rounded-[10px] bg-[#ffffff80] grid place-content-center">
                            <font-awesome-icon icon="fa-solid fa-timeline" class="text-[3em] mx-auto mb-4" />
                            <div class="font-bold mb-2">{{ projectTime }}</div>
                            <div>{{ projectTime2 }}</div>
                        </div>
                        <!-- Project Skills -->
                        <div class="w-[300px] p-[30px] text-center aspect-square rounded-[10px] bg-[#ffffff80] grid place-content-center">
                            <font-awesome-icon icon="fa-solid fa-bullseye" class="text-[3em] mx-auto mb-4" />
                            <div class="font-bold mb-2">Commonly Applied<br>Skillsets</div>
                            <div>{{ projectSkills }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>

<script>
export default{
    props:{
        projectGoal:{
            type: String,
            required:true,
        },
        projectGoal2:{
            type: String,
            required:true,
        },
        projectTime:{
            type: String,
            required:true,
        },
        projectTime2:{
            type: String,
            required:true,
        },
        projectSkills:{
            type: String,
            required:true,
        },
    },
    data(){
        return{}
    }

}

</script>