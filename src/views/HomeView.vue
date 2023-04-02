<template>
  	<div class="flex flex-col">

		<HomeHead/>
	
		<!-- section 2- Introduction -->
		<section id="home02" class="py-[80px]">
			<div class="w-full max-w-[1440px] m-auto">
				<div class="w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 justify-between flex-wrap  gap-10 items-center">
					<div>
						<div class="text-[2em] font-bold font-['Montserrat']">Hello, I'm Jerwin!</div>
						<div class="w-full lg:w-[65ch] mb-4 font-[Quicksand]">
							Just graduated recently with Diploma in Interaction Design. 
							I enjoy design and code websites and mobile applications. I believe that 
							good designs bring the best expression of the products to the users.
						</div>
						<RouterBtn link="/About" cta="Learn More about Jerwin" class="md:w-[250px]"></RouterBtn>
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
    	<section id="home03" class="py-[100px]">
			<div class="w-full max-w-[1440px] m-auto">
				<div class="w-[90%] m-auto">
					
					<div class="text-[2em] lg:text-[3em] font-bold font-['Montserrat'] text-center mb-8 uppercase">I am a...</div>
					
					<div class="grid place-items-center grid-cols-1 md:grid-cols-2 gap-8 m-auto">
						<div v-for="skill in skills" class="grid place-items-center">

							<!-- content -->
							<div class="w-[90%] m-auto bg-[#ffffffd0] rounded-[5px] backdrop:blur-lg shadow-lg p-8 lg:p-20 space-y-4">
								<div class="w-full grid place-content-center"><font-awesome-icon :icon=skill.icon size="2xl" /></div>
								<div class="flex flex-col items-center text-center">
									<div class="text-[1.5em] font-bold font-[Montserrat]">{{skill.name}}</div>
									<div class="font-[Quicksand] m-4 font-medium">{{skill.desc}}</div>
									<!-- softwares -->
									<div>
										<div v-if="skill.id=='design'"><Softwares Ai Ps Id Pr Xd Figma class="!gap-0"></Softwares></div>
										<div v-if="skill.id=='web'"><Softwares VSCode HTML JS PHP Vue Laravel class="!gap-0"></Softwares></div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

    	</section>
    
		<!-- section 4 - Works -->
		<!-- <section id="home04" class="py-[80px]">
			
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
		</section> -->

		<!-- section 4 - Works -->
		<section id="home04" class="py-[100px]">
			
			<div class="w-full max-w-[1440px] m-auto">

				<div class="w-[90%] m-auto">
				
					<div class="bg-[#EBFFEC] rounded-[10px] overflow-hidden p-5 lg:p-20 grid lg:grid-cols-2 items-center gap-6 lg:gap-16 border-2 border-green-200 shadow-md shadow-green-300">
	
						<div class="col-span-1 rounded-[5px] overflow-hidden">
							<img src="@/assets/works/ITP/image1.png" alt="preview images">
						</div>

						<div class="col-span-1 space-y-4">
							<div class="leading-[150%] lg:leading-[200%]">
								<div class="lg:text-[1.2em] font-bold text-[#20B2AA] font-['Montserrat']">FEATURED PROJECT • 2023</div>
								<div class="text-[1.5em] lg:text-[2em] font-bold text-[#20B2AA] font-['Montserrat']">SDM INTERNSHIP PORTAL</div>
							</div>
							<div class="font-['Quicksand'] font-medium">
								Internship Portal is a Conceptual Web Application created with Vue and Laravel. 
								It Purposes is to bring better Quality of Life to the School Staff when managing 
								Internship related workload.
							</div>
							<RouterBtn link="/works" cta="Check it out!" class="md:w-[250px]"></RouterBtn>
						</div>
					</div>
	
					<div class="mt-[100px] m-auto w-[80%]">
						<div class="text-[1.5em] lg:text-[2.5em] uppercase font-bold text-[#20B2AA] font-['Montserrat'] text-center">Looking for more Projects?</div>
							<div class="flex items-center text-[1em] lg:text-[1.55em] font-bold font-['Quicksand'] bg-white lg:w-[50%] px-4 py-2 rounded-[10px] border-2 border-green-200 shadow-md shadow-green-100 my-8 m-auto">
								<font-awesome-icon icon="fa-solid fa-search" size="md" class="pr-4 text-[#20B2AA]"/>
								<div id="project-word">Interaction Design</div>
							</div>
						
						<RouterBtn link="/works" cta="Visit Works" class="md:w-[250px] m-auto mt-10 block"></RouterBtn>
					</div>

				</div>

				
			</div>
		</section>

		<!-- section 4 - Keep In Touch -->
		<!-- <section class="bg-green-100">
			<KeepInTouch></KeepInTouch>
		</section> -->
		
  	</div>
</template>

<script>
import gsap from 'gsap'
import KeepInTouch from '../components/KeepInTouch.vue'
import RouterBtn from '../components/RouterBtn.vue'
import Softwares from '../components/works/Softwares.vue'
import HomeHead from '../components/HomeHead.vue'

import Ecozean from "@/assets/works/Ecozean/Preview.png"
import THH from "@/assets/works/THH/Preview.png"

export default{
	name: "Home Page",
	components:{ KeepInTouch, RouterBtn, Softwares, HomeHead },
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
					desc: "I am able to code a fullstack webiste with the following softwares and languages.",
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
			],

			projects:[
				"User Interface", "User Experience", "Graphic Design", "Website Design", "Web Development", "Branding", "Jerwin Goh"
			]
		}
	},
	methods:{
	
	},
	mounted(){
		let project = document.getElementById("project-word")
			let i = -1
			let length = this.projects.length

			project.innerText = this.projects[i]

			setInterval(()=>{
				if (i < length-1){i++} 
				else{i = 0}

				project.innerHTML = this.projects[i]

			}, 4000)

	}
}
</script>

<style>

#home03{
	background:
	linear-gradient(to top right,#94EB9B80,#ADD8E680),
	url("https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
	background-size:cover;
}

#home-text{
	overflow: hidden;
	/* animation: typing 1.5s steps(30,end); */
}

#project-word {
	overflow: hidden; 
	border-right: .05em solid #000;
	white-space: nowrap;
	max-width: max-content;
	font-weight: 600;

	animation: 
    4s typing-erase 4s steps(50, end) infinite,
    blink-caret .5s step-end infinite;
}


/* The type and erase effect */
@keyframes typing-erase {
  0% { width: 0 }
  80% { width: 100% }
  90%, 100% { width: 0 }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #000 }
}

	
</style>