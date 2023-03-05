<template>
  	<div class="flex flex-col">
    	<!-- section 1 -->
    	<section id="home01" class="h-[100vh] w-full font-['Quicksand'] text-center grid p-10">
			<div class="w-full max-w-[1440px] m-auto">
				<div class="grid grid-cols-1 lg:grid-cols-3">
					<div class="w-[80%] h-[100%] grid place-items-center m-auto lg:mb-0 mb-20">
						<img src="@/assets/logo-green.svg" alt="logo" style="width:100%">
					</div>
					<div class="col-span-2">
						<div id="hero" class="leading-10 mb-4 lg:leading-[4em]">
							<div class="font-['Montserrat'] text-[2.5em] md:text-[3.25em] lg:text-[5em] font-bold text-[#20B2AA]">JERWIN GOH</div>
							<div class="text-[1.1em] md:text-[1.5em] lg:text-[2.25em] font-semibold">UX DESIGN • WEB DEVELOPMENT</div>
						</div>
						<div id="home-text" class="w-[32ch] m-auto font-semibold md:text-[1.2em] lg:text-[1.5em] bg-[#20B2AA] text-[#fff] py-2">
							<span class="font-['Montserrat'] font-bold">DESIGN</span> with the best of interest, 
							<span class="font-['Montserrat'] font-bold">DEVELOP</span> to fulfil the dream.
						</div>
					</div>
				</div>
			</div>

    	</section>
    
		<!-- section 2- Introduction -->
		<section class="py-[80px]">
			<div class="w-full max-w-[1440px] m-auto">
				<div class="w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 justify-between flex-wrap  gap-10 items-center">
					<div>
						<div class="text-[2em] font-bold font-['Montserrat']">Hello, I'm Jerwin!</div>
						<div class="w-full lg:w-[65ch] mb-4 font-[Quicksand]">
							Currently a Student studying Interaction Design in Nanyang Polytechnic. 
							I enjoy design and code websites and mobile applications. I believe that 
							good designs bring the best expression of the products to the users.
						</div>
						<RouterBtn link="/About" cta="Learn More" class="md:w-[250px]"></RouterBtn>
					</div>
					<div>
						<div class="w-[80%] m-auto aspect-square overflow-hidden rounded-[100%] shadow-md shadow-green-300">
							<img src="@/assets/Jerwin/joe.jpg" alt="Jerwin" class="-top-8">
						</div>
					</div>
				</div>
			</div>
    	</section>
    
		<!-- section 3 - Skills -->
    	<section class="py-[80px]" id="skills">
			<div class="w-full max-w-[1440px] m-auto">
				<div class="w-[90%] m-auto">
					
					<div class="text-[3em] font-bold font-['Montserrat'] text-center mb-8 uppercase">I am a...</div>
					
					<div class="grid md:grid-cols-2 gap-8 m-auto">
						<div v-for="skill in skills" class="grid place-items-center">

							<!-- content -->
							<div class="w-[90%] bg-[#ffffffd0] rounded-[5px] backdrop:blur-lg shadow-lg p-8 lg:p-20 space-y-4">
								<div class="w-full grid place-content-center"><font-awesome-icon :icon=skill.icon size="2xl" /></div>
								<div class="flex flex-col items-center text-center">
									<div class="text-[1.5em] font-bold font-[Montserrat]">{{skill.name}}</div>
									<div class="font-[Quicksand] m-4 font-medium">{{skill.desc}}</div>
									<!-- softwares -->
									<div>
										<div v-if="skill.id=='design'"><Softwares Ai Ps Id Pr Xd Figma class="gap-0"></Softwares></div>
										<div v-if="skill.id=='web'"><Softwares VSCode HTML JS PHP Vue Laravel class="gap-0"></Softwares></div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

    	</section>
    
		<!-- section 4 - Works -->
		<section class="py-[80px]">
			
			<div class="w-full max-w-[1440px] m-auto">
				
				<div class="w-[90%] m-auto">
					<div class="text-[2em] font-bold font-['Montserrat'] mb-4">FEATURED WORKS</div>
					
					<div class="grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
						
						<div v-for="item in works">
							<div class="bg-[#ffffff20] rounded-[5px] backdrop:blur-sm shadow-lg overflow-hidden">
								<div class="w-[100%] aspect-video">
									<img :src="item.img" alt="preview images">
									<div class="font-['Quicksand'] absolute top-0 left-0 h-full w-full p-4 bg-gradient-to-tr from-[#94EB9B] to-[#ADD8E680] flex flex-col justify-end" >
										<div class="text-[1.5em] font-bold font-['Montserrat'] uppercase leading-6">{{item.title}}</div>
										<div class="font-medium hidden lg:block lg:w-[40ch]">{{item.desc}}</div>
										<div class="w-full lg:w-[250px]"><RouterBtn :link="item.link" cta="Learn More"></RouterBtn></div>
									</div>
								</div>
							</div>
						
						</div>
					</div>
	
				</div>
			</div>
		</section>


		<!-- section 4 - Keep In Touch -->
		<section class="bg-green-100">
			<KeepInTouch></KeepInTouch>
		</section>
		
  	</div>
</template>

<script>
import gsap from 'gsap'
import KeepInTouch from '../components/KeepInTouch.vue'
import RouterBtn from '../components/RouterBtn.vue'
import Softwares from '../components/works/Softwares.vue'

import Ecozean from "@/assets/works/Ecozean/Preview.png"
import THH from "@/assets/works/THH/Preview.png"

export default{
	components:{ KeepInTouch, RouterBtn, Softwares },
	mounted(){
        document.title = 'Home | JerwinJGKC'
    },
	data(){
		return{
			skills:[
				{
					id:"design",
					icon: "fa-solid fa-people-group",
					name: "UX/UI Designer",
					desc: "From User Research to Prototyping, I apply Design Thinking to projects with these softwares.",
				},
				{
					id:"web",
					icon: "fa-solid fa-code",
					name: "Web Developer",
					desc: "As a Coder, I am able to code a fullstack webiste with the following softwares and languages.",
				},
			],

			works:[
				{

					img:Ecozean,
					title:"Ecozean",
					desc:"Ecozean is a fiticous eco-friendly Island for combating the ocean pollution.",
					link:"/works/Ecozean"
				},
				{
					img:THH,
					title:"The Hidden Heritage",
					desc:"The Hidden Heritage is a Forum Webpage that brings discussions to the Sinagpore Heritage.",
					link:"/works/THH"
				}
			],

			socials:[
				{
					icon:		"fa-linkedin-in",
					link:		"https://www.linkedin.com/in/jerwinjgkc/"
				},
				{
					icon:		"fa-brands fa-behance",
					link:		"https://www.behance.net/jerwingoh-jgkc"
				},
				{
					icon:		"fa-brands fa-instagram",
					link:		"https://www.instagram.com/jgkc_design"
				},
				{
					icon:		"fa-brands fa-twitter",
					link:		"https://twitter.com/Jerwin_JGKC"
				},
			]
		}
	},
	methods:{



		cursorShow(){
			let cursor = document.getElementById("home-cursor")
			gsap.to(cursor,{duration: 0.2, opacity: 1, display:"block"})
		},
		cursorHide(){
			let cursor = document.getElementById("home-cursor")
			gsap.to(cursor,{duration: 0.2, opacity: 0, display:"none"})
		},
		cursor(e){
			let cursor = document.getElementById("home-cursor")
			gsap.to(cursor, {
				duration: .4,
				opacity: 1,
				x: e.clientX - 15,
				y: e.clientY - 15,
				display:"block"
				
			})
		}
	}
}
</script>

<style>

#skills{
	background:
	linear-gradient(to top right,#94EB9B80,#ADD8E680),
	url("https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
	background-size:cover;
}

#home-text{
	overflow: hidden;
	animation: typing 1.5s steps(30,end);
}

@keyframes typing {
  from { 
	width: 0; 
	white-space: nowrap;
}
  50% { 
	width: 35ch; 
	white-space: wrap; 
}
to { 
	width: 32ch; 
	white-space: wrap; 
}
}

	
</style>