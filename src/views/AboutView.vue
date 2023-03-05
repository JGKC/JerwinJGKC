<template>
  	<div class="flex flex-col w-full">
      	<div class="w-full max-w-[1440px] m-auto flex flex-col">
          	<div class="w-[90%] m-auto">
              	<TitleHead titleHead="ABOUT" titleSub="PAGE" />
          	</div>
    </div>

    <section class="w-full py-[80px]">
		<div class="w-full max-w-[1440px] m-auto">
			<div class="w-[90%] m-auto font-['Quicksand'] grid grid-cols-5 gap-10 justify-between items-center">
				<div class="col-span-5 md:col-span-3">
					<div class="text-[2em] font-bold font-['Montserrat']">Hello, I'm Jerwin!</div>
					<div class="lg:w-[60ch] mb-4">
						I am currently a Student studying Interaction Design in Nanyang Polytechnic, speacialising in User Experience 
						Design and Web Development. I enjoy the process of designing and coding websites and mobile applications. 
						During my free time, I play games and do some little fun creative coding projects! 
					</div>
					<div class="lg:w-[60ch] mb-2">
						Here's a shortcut button to download my resume!
					</div>
					<a :href="docu.resume.link" download
					class="mt-4 relative flex lg:w-[250px] justify-center rounded-md border border-transparent bg-[#20B2AA] py-2 px-4 text-sm font-bold font-['Quicksand'] text-white hover:bg-[#188781] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
					>Download Resume</a>
				</div>
				<div class="col-span-5 md:col-span-2">
					<div class="w-[80%] m-auto aspect-square overflow-hidden rounded-[100%] shadow-md shadow-green-200">
						<img src="@/assets/Jerwin/joe.jpg" alt="Jerwin" class="-top-8">
					</div>
				</div>
			</div>
		</div>
    </section>

	<section class="w-full py-[80px] bg-green-200">
		<div class="w-full max-w-[1440px] m-auto ">
			<div class="w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 gap-8">
				<div v-for="x in data" class="space-y-4">
					<div class="text-[1.5em] font-bold font-['Montserrat'] uppercase">{{x.header}}</div>
					<div v-for="i in Object.keys(x.data).length">
						
						<div class="branchBox ml-auto border-l-[5px] border-[#20B2AA] p-4 bg-white font-['Quicksand']">
							<div class="font-bold text-[1.2em] leading-6 uppercase mb-1 font-['Montserrat']">{{ x.data[i-1].header }}</div>
							<div>{{ x.data[i-1].subHeader }}</div>
							<div>{{ x.data[i-1].year }}</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</section>

	<!--
	<section class="m-auto py-[80px]">
		<div class="w-full max-w-[1440px]">
			<div class="w-[90%] m-auto">
				<div class="mb-8">
					<div class="text-[2em] font-bold font-['Montserrat'] mb-2 text-center">TESTINOMALS</div>
					<div class="text-center">Let's hear what the others say!</div>
				</div>
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

					<div v-for="x in testi" class="space-y-4">

						<div class="flex bg-green-100 rounded-[5px] p-4">
							<div class="10% text-[2em] w-[10%]"><font-awesome-icon icon="fa-solid fa-quote-left"/></div>
							<div class="qouteBox w-[90%] font-['Quicksand']">
								<div class="text-[1.2em] leading-6 font-['Montserrat'] mb-1 italic">{{ x.quote }}</div>
								<div class="font-bold">{{ x.name }}</div>
							</div>
						</div>

		
					</div>
				</div>
			</div>
		</div>
	</section>
	-->

	<section class="w-full py-[80px]">
		<div class="w-full max-w-[1440px] m-auto">
			<div class="w-[90%] m-auto">
				<div class="text-center">
					<div class="text-[2em] font-bold font-['Montserrat'] mb-2">DOCUMENTS / REFERENCES</div>
					<div class="mb-8  font-['Quicksand']">Feel free to take a look on these documents/references.</div>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					<div v-for="item in docu">
						<a :href="item.link" target="_blank" class="grid place-items-center rounded-[5px] aspect-video bg-slate-300 opacity-80 hover:opacity-100 shadow-lg overflow-hidden transition-all hover:border-4 border-green-500">
							<img :src="item.img" alt="image" class="transition-all">
							<div class="w-full leading-7 absolute bottom-2 text-[1.15em] text-green-700 font-['Montserrat'] flex bg-green-100 ">
								<div class="h-[75px] min-w-[80px] grid place-items-center">
									<font-awesome-icon :icon="item.icon" size="xl" />
								</div>
								<div class="grid place-content-center font-bold">{{ item.header }}</div>
								
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-green-100">
		<KeepInTouch></KeepInTouch>
	</section>

  </div>

</template>

<script>
import TitleHead from '../components/TitleHead.vue'
import Resume from "@/assets/about/JerwinGoh_Resume2023.pdf"
import cv2023 from "@/assets/about/CV2023.pdf"
import KeepInTouch from '../components/KeepInTouch.vue'

export default{
	components: { TitleHead, KeepInTouch },
	mounted(){
        document.title = 'About | JerwinJGKC'
    },
	computed(){
	},
	data(){
		return{
			data:{
				workEXP:{
					header:"Work Experience",
					data:[
						{
							header:"Pixelsquad Pte Ltd",
							subHeader:"Junior Developer Intern",
							year:"Internship, 2022",
						},
						{
							header:"Pacific Bookstores Pte Ltd - St. Hilda's Pri Sch",
							subHeader:"Year-End Counter Staff",
							year:"Part-time, 2019",
						},
					]
				},
				edu:{
					header:"Education",
					data:[
						{
							header:"Nanyang Polytechnic",
							subHeader:"Diploma in Interaction Design",
							year:"2020-2023",
						},
						{
							header:"Holy Innocents' High School",
							subHeader:"GCE 'O' Levels",
							year:"2016-2019",
						},
					]
				},
				cert:{
					header:"Certification",
					data:[
						{
							header:"Google UX Design Certificate",
							subHeader:"Coursera",
							year:"2022",
						},
					]
				},
				skills:{
					header:"Skillsets",
					data:[
						{
							header:"UI/UX Design",
							subHeader:"Tech Skills: User Research, Design Thinking, Prototyping",
							year:"Softwares: Ps, Ai, Id, Xd, Pr",
						},
						{
							header:"Web Development",
							subHeader:"Languages: HTML, CSS, JS, VueJS, PHP, Laravel, mySQL",
							year:"Softwares: VSCode, Dreamweaver",
						},

					]
				},
			},
			testi:[
				{
					name:"JERWIN GOH, STUDENT",
					quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam aut, nihil optio assumenda blanditiis nobis. Quaerat sint perferendis in!"
				},
				{
					name:"test2",
					quote:"test2"
				},
				{
					name:"test2",
					quote:"test2"
				}
			],
			docu:{
				resume:{
					img:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
					icon:"fa-solid fa-file-pdf",
					header:"Resume 2022",
					link:Resume,
				},
				portfolio:{
					img:"https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
					icon:"fa-solid fa-file-pdf",
					header:"Portfolio 2023",
					link:cv2023,
				},
				cert:{
					img:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
					icon:"fa-solid fa-up-right-from-square",
					header:"Google UX Design Certificate",
					link:"https://www.credly.com/badges/01ff280c-f3d8-41f2-8bd5-2b7dd135c556/public_url"
				}
			}
		}
	},
	methods:{
	}
}

</script>

<style>
/* .branchBox::before{
	content: "";
	height:45px;
	width:35px;

	position: absolute;
	top:0;
	left:-50px;

	border-left: 5px solid black;
	border-bottom: 5px solid black;
} */

</style>