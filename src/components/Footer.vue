<template>
    <!-- <footer class="bg-green-100 grid place-items-center text-[14px] font-medium font-['Quicksand']">
        ©️2023 Jerwin Goh -JGKC. All Rights Reserved.
    </footer> -->

    <!-- <footer class="w-full font-['Quicksand']">
        <img src="@/assets/Footer.svg" alt="">

        <div id="footerLogo" class="flex items-center space-x-4">
            <div class="grid place-items-center">
                <img src="@/assets/logo-gradient.svg" alt="logo" style="width:60%; margin-bottom: 20px;">
                <div class="mb-[20px]">
                    <span class="font-['Montserrat'] text-[2.25em] leading-[100%] font-bold">JERWIN GOH</span><br>
                    <span class="font-medium">UX DESIGNER • WEB DEVELOPER</span>
                </div>
            </div>

            <div id="footerContent">
                <div class="font-['Montserrat'] font-bold text-[1.5em] mb-2">
                    KEEP-IN-TOUCH
                </div>
                <div v-for="social in socials" class="flex items-center mb-[10px] last:mb-0">
                    <a :href="social.link" target="_blank"
                        class="
                            inline-grid h-[35px] w-[35px] 
                            place-content-center text-[1.2em] border-2
                            bg-white rounded-[5px] text-[#20B2AA] border-white
                            hover:bg-none hover:text-white mr-2
                            "
                    ><font-awesome-icon :icon="social.icon"></font-awesome-icon></a>

                    <a :href="social.link2" target="_blank" v-if="social.link2"
                        class="
                            inline-grid h-[35px] w-[35px] 
                            place-content-center text-[1.25em] border-2
                            bg-white rounded-[5px] text-[#20B2AA] border-white
                            hover:bg-none hover:text-white mr-2
                            "
                    ><font-awesome-icon v-if="social.icon2" :icon="social.icon2"></font-awesome-icon>
                    </a>


                    <div class="text-[1em] font-['Quicksand']">{{ social.display }}</div>
                </div>
                <div class="text-[14px]">
                    ©️2023 Jerwin Goh -JGKC | All Rights Reserved.
                </div>
            </div>
        </div>
    </footer> -->


    <footer class="flex flex-col w-full font-['Quicksand']">

        <div id="footerGrad" class="w-full h-3"></div>
        <div class="bg-[#20B2AA] p-10 flex place-content-center space-y-5 lg:space-y-0 lg:space-x-20 flex-wrap">
                <!-- Logo -->
                <div class="grid place-items-center">
                    <img src="@/assets/logo-gradient.svg" alt="logo" style="width:60%; margin-bottom: 20px;">
                    <div class="">
                        <span class="font-['Montserrat'] text-[2.25em] leading-[100%] font-extrabold">JERWIN GOH</span><br>
                        <span class="font-medium">UX DESIGN • WEB DEVELOPMENT</span>
                    </div>
                </div>
    
                <div id="footerContent" class="">
                    <div class="font-['Montserrat'] font-bold text-[1.5em] mb-2">
                        KEEP-IN-TOUCH
                    </div>
                    <div v-for="social in socials" class="flex items-center mb-[10px] last:mb-0">
                        <a :href="social.link" target="_blank"
                            class="
                                inline-grid h-[35px] w-[35px] 
                                place-content-center text-[1.2em] border-2
                                bg-white rounded-[5px] text-[#20B2AA] border-white
                                hover:bg-none hover:text-white mr-2
                                "
                        ><font-awesome-icon :icon="social.icon"></font-awesome-icon></a>
    
                        <a :href="social.link2" target="_blank" v-if="social.link2"
                            class="
                                inline-grid h-[35px] w-[35px] 
                                place-content-center text-[1.25em] border-2
                                bg-white rounded-[5px] text-[#20B2AA] border-white
                                hover:bg-none hover:text-white mr-2
                                "
                        ><font-awesome-icon v-if="social.icon2" :icon="social.icon2"></font-awesome-icon>
                        </a>
    
    
                        <div class="text-[1em] font-['Quicksand']">{{ social.display }}</div>
                    </div>
                    <div class="text-[14px]">
                        ©️2023 Jerwin Goh -JGKC | All Rights Reserved.
                    </div>
                </div>
            </div>
    </footer>
</template>

<script>
export default{
    data(){
        return{
            socials: [
					{
						platform: 	"email",
						icon:		"fa-solid fa-envelope",
						display:	"jerwingoh.work@gmail.com",
						link:		"mailto:jerwingoh.work@gmail.com"
					},
                    {
						platform: 	"instagram",
						icon:		"fa-brands fa-instagram",
						display:	"JGKC_Design",
						link:		"https://www.instagram.com/jgkc_design",

                        platform2: 	"twitter",
						icon2:		"fa-brands fa-twitter",
						link2:		"https://twitter.com/JGKC_Design"
					},
					{
						platform: 	"linkedin",
						icon:		"fa-brands fa-linkedin-in",
						display:	"Jerwin Goh -JGKC",
						link:		"https://www.linkedin.com/in/jerwinjgkc/",

                        platform2: 	"behance",
                        icon2:		"fa-brands fa-behance",
                        link2:		"https://www.behance.net/jerwingoh-jgkc"
					},
                ]
        }
    }
}

</script>

<style>
footer{
    width: 100%;
    color: white;
    position: relative;
    /* aspect-ratio: 841 / 225; */

    /* display: flex;
    place-items: center;
    align-items: flex-end; */
}

/* footer>img{
    position: absolute;
    top:0; left:0;

    pointer-events: none;
    user-select: none;
} */


</style>