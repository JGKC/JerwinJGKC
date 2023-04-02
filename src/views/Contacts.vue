<template>
	<section id="contact01" class="w-full h-[200vh] lg:h-[100vh]">
		<div class="w-full m-auto grid grid-cols-1 lg:grid-cols-2">

		
		<div class="sticky top-0 left-0 h-[100vh]">
			<div class="w-full m-auto flex flex-col lg:flex-row">
				<div class="w-[90%] m-auto">
					<div class="w-[75%] md:w-full lg:w-[65%]">
						<TitleHead titleHead="HAPPY TO HEAR FROM YOU!" titleSub="CONTACTS PAGE" />
					</div>
					<div class="bg-[#ffffff60] rounded-[5px] p-[20px] text-[1em] font-[quicksand] font-medium space-y-4 mt-20">
						<div class="font-medium">
							<b>For Official Collaboration and/or Busniess Offers:</b><br> 
							Please contact me through Email. 
						</div>
						<!-- <div class="font-medium"><b>Location:</b> Based in Singapore</div> -->
						<!-- <div><b>Available Contact Hours:</b> 12PM - 5PM (SGT/GMT+8)</div> -->
					</div>
				</div>
			</div>
		</div>

		<div class="bg-white h-[100vh] grid place-items-center">
				<div class="w-[80%]">
					<div class="text-[2em] font-bold font-['Montserrat']">CONTACT FORM</div>
					<form @submit.prevent="handleSubmit" name="contact" method="POST" class="space-y-4" netlify>
						<div v-show="formSuccess" class="bg-green-200 text-green-700 font-bold p-3 rounded-[5px]">
							Form successfully Submitted.
						</div>
						<div class="flex flex-col">
							<label for="name" class="mb-1">Name</label>
							<input v-model="form.name" id="name" name="name" type="text" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" placeholder="Name"/>
						</div>
						<div class="flex flex-col">
							<label for="email" class="mb-1">Email</label>
							<input v-model="form.email" id="email" name="email" type="email" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" placeholder="Email"/>
						</div>
						<div class="flex flex-col">
							<label for="subject" class="mb-1">Subject</label>
							<select v-model="form.subject" name="subject" id="subject" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm">
								<option value="" selected disabled>Please Select a Subject</option>
								<option value="JGKC CV - Saying Hi">Just Saying Hi!!!</option>
								<option value="JGKC CV - Work Opportunity">Working Opportunity</option>
								<option value="JGKC CV - Enquires">Enquires</option>
							</select>
						</div>
						<div class="flex flex-col">
							<label for="message" class="mb-1">Message</label>
							<textarea v-model="form.message" name="message" id="message" cols="" rows="5" required fixed class="resize-none relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"></textarea>
						</div>
						<div>
							<button type="submit" class="mt-4 relative flex w-full justify-center rounded-md border border-transparent bg-[#20B2AA] py-2 px-4 text-sm font-medium text-white hover:bg-[#188781] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
								Send Message!
							</button>
						</div>
						<input type="hidden" name="contact" value="contact" />
					</form>
				</div>
			</div>
		</div>
	</section>

	<!-- <section class="bg-green-100">
		<KeepInTouch></KeepInTouch>
	</section> -->
</template>

<script>
import KeepInTouch from '../components/KeepInTouch.vue';
import TitleHead from '../components/TitleHead.vue'

	export default{
		components: { TitleHead, KeepInTouch },
		mounted(){
        document.title = 'Contacts | JerwinJGKC'
    },
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

				],
				form:{
					name:"",
					email:"",
					subject:"",
					message:""
				},
				formSuccess : false
			}
		},
		methods:{
			resetForm(){
				this.formSuccess=true;

				this.form.name = ""
				this.form.email = ""
				this.form.subject = ""
				this.form.message = ""

				setTimeout(()=>{
					this.formSuccess=false
				},10000)


				},
			encode(data){
				return Object.keys(data)
				.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
				.join('&')
			},
			handleSubmit(){
				fetch("/",{
					method: 'post',
					headers: {
						'Content-Type':'application/x-www-form-urlencoded'
					},
					body: this.encode({
						'form-name':'contact',
						...this.form
					})	
				})
				.then(()=> console.log('successfully sent'))
				.catch(e=> console.error(e))

				this.resetForm();
			}
		}
	}
</script>

<style>
.full-bleed {
	box-shadow: 0 0 0 100vmax #dcfce7 ;
	z-index:-1;
	clip-path: inset(0 -100vmax); 
  }
</style>
