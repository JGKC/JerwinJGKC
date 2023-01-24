<template>
    <section class="w-full max-w-[1440px] m-auto py-[120px] bg-green-100">
		<div class="w-[90%] m-auto flex flex-col items-center">
			<div class="text-[2em] font-bold font-['Montserrat']">KEEP-IN-TOUCH</div>
			<div class="font-[Quicksand]">
				<div class="mb-4 text-center md:w-full m-auto">Follow on my Socials to keep up-to-date projects I participate in!</div>
				<div class="flex justify-center">
					<div v-for="social in socials" class="flex mr-[10px] last:mr-0">
						<a :href="social.link" target="_blank"
							class="inline-grid h-[50px] w-[50px] place-content-center text-[1.5em] border-2 border-[#20B2AA] rounded-[5px] text-[#20B2AA]"
						><font-awesome-icon :icon="social.icon"></font-awesome-icon>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
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
						platform: 	"linkedin",
						icon:		"fa-brands fa-linkedin-in",
						display:	"Jerwin Goh -JGKC",
						link:		"https://www.linkedin.com/in/jerwinjgkc/"
					},
					{
						platform: 	"behance",
						icon:		"fa-brands fa-behance",
						display:	"Jerwin Goh -JGKC",
						link:		"https://www.behance.net/jerwingoh-jgkc"
					},
					{
						platform: 	"instagram",
						icon:		"fa-brands fa-instagram",
						display:	"@jgkc_design",
						link:		"https://www.instagram.com/jgkc_design"
					},
					{
						platform: 	"twitter",
						icon:		"fa-brands fa-twitter",
						display:	"@Jerwin_JGKC",
						link:		"https://twitter.com/Jerwin_JGKC"
					},

				]
        }
    }
}

</script>