<template>

    <div class="flex flex-col gap-4">

        <div class="flex gap-2">

            <!-- // Adobe Illustrator -->
            <div v-show="Ai" class="w-[40px] h-[40px]">
                <img src="@/assets/softwares/Ai.svg" alt="Ai Icon"/>
            </div>

            <!-- // Adobe InDesign -->
            <div v-show="Id" class="w-[40px] h-[40px]">
                <img src="@/assets/softwares/Id.svg" alt="Id Icon" />
            </div>

            <!-- // Adobe Premiere Pro -->
            <div v-show="Pr" class="w-[40px] h-[40px]">
                <img src="@/assets/softwares/Pr.svg" alt="Pr Icon" />
            </div>


            <!-- // Adobe Photoshop -->
            <div v-show="Ps" class="w-[40px] h-[40px]">
                <img src="@/assets/softwares/Ps.svg" alt="Ps Icon" />
            </div>

            <!-- // Adobe Xd -->
            <div v-show="Xd" class="w-[40px] h-[40px]">
                <img src="@/assets/softwares/Xd.svg" alt="Xd Icon" />
            </div>

            <!-- // Figma -->
            <div v-show="Figma" class="w-[40px] h-[40px]">
                <img src="@/assets/softwares/Figma.svg" alt="Figma Icon" />
            </div>

            

        </div>

        <div class="flex gap-2">

            <!-- // Visual Studio Code -->
            <div v-show="VSCode" class="w-[40px] h-[40px]">
                <img src="@/assets/softwares/VSCode.svg" alt="VSCode Icon" />
            </div>

            <!-- // HTML5 -->
            <div v-show="HTML" class="w-[40px] h-[40px] grid place-content-center text-[#E34C26]">
                <font-awesome-icon icon="fa-brands fa-html5" size="2xl"/>
            </div>

            <!-- // CSS3 -->
            <div v-show="CSS" class="w-[40px] h-[40px] grid place-content-center text-[#264DE4]">
                <font-awesome-icon icon="fa-brands fa-css3-alt" size="2xl" />
            </div>

            <!-- // JS -->
            <div v-show="JS" class="w-[40px] h-[40px] grid place-content-center text-[#F0DB4F]">
                <font-awesome-icon icon="fa-brands fa-js" size="2xl"/>
            </div>

            <!-- // PHP -->
            <div v-show="PHP" class="w-[40px] h-[40px] grid place-content-center text-[#8993be]">
                <font-awesome-icon icon="fa-brands fa-php" size="2xl" />
            </div>

            <!-- // VueJS -->
            <div v-show="Vue" class="w-[40px] h-[40px] grid place-content-center text-[#41B883]">
                <font-awesome-icon icon="fa-brands fa-vuejs" size="2xl" />
            </div>

            <!-- // Laravel -->
            <div v-show="Laravel" class="w-[40px] h-[40px] grid place-content-center text-[#F05340]">
                <font-awesome-icon icon="fa-brands fa-laravel" size="2xl" />
            </div>
        </div>

    </div>

</template>

<script>

export default{
    name:"softwares",
    props:{
        Ai:Boolean,
        Id:Boolean,
        Pr:Boolean,
        Ps:Boolean,
        Xd:Boolean,
        Figma:Boolean,
        VSCode:Boolean,
        HTML:Boolean,
        CSS:Boolean,
        JS:Boolean,
        PHP:Boolean,
        Vue:Boolean,
        Laravel:Boolean,
    },
    data(){
        return{

        }
    }
}


</script>