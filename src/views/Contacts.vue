<template>
	<div class="flex flex-col w-full">
      	<div class="w-full max-w-[1440px] m-auto flex flex-col">
          	<div class="w-[90%] m-auto">
              	<TitleHead titleHead="CONTACTS" titleSub="PAGE" />
          	</div>
    	</div>

		<section class="w-full py-[40px]">
			<div class="w-full max-w-[1440px] m-auto">
				<div class="w-[90%] m-auto font-['Quicksand'] grid grid-cols-1 lg:grid-cols-2 gap-20 justify-between items-center">
						
					<div class="w-fit">
						<div class="text-[2em] font-['Montserrat'] font-bold uppercase">Happy to hear from you!</div>
						<div class="bg-yellow-200 p-5 rounded-[5px] text-[1em] font-[quicksand] font-medium">
							<div class="font-medium">
								<b>For Official Collaboration and/or Busniess Offers:</b><br> 
								Please contact me through the Contact Form or Email. <br>
								Estimated Reply takes 3-5 Working Days
							</div>
						</div>
					</div>
					<div class="bg-white p-6 border-2 rounded-[10px] border-green-200 shadow-md shadow-green-300">
						<!-- <div class="text-[2em] font-bold font-['Montserrat']">CONTACT FORM</div> -->
						<form @submit.prevent="handleSubmit" name="contact" method="POST" class="space-y-4" netlify>
							<div>
								<div v-if="(formSuccess || formError) == false" class="bg-gray-200 text-gray-700 font-bold p-3 rounded-[5px]">
									Form Status: Normal
								</div>
								<div v-show="formSuccess" class="bg-green-200 text-green-700 font-bold p-3 rounded-[5px]">
									Form successfully Submitted.
								</div>
								<div v-show="formError" class="bg-red-200 text-red-700 font-bold p-3 rounded-[5px]">
									Error: {{ errorMsg }}
								</div>
							</div>
							<div class="flex flex-col">
								<label for="name" class="mb-1 font-medium">Name</label>
								<input v-model="form.name" id="name" name="name" type="text" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" placeholder="Name"/>
							</div>
							<div class="flex flex-col">
								<label for="email" class="mb-1 font-medium">Email</label>
								<input v-model="form.email" id="email" name="email" type="email" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" placeholder="Email"/>
							</div>
							<div class="flex flex-col">
								<label for="subject" class="mb-1 font-medium">Subject</label>
								<select v-model="form.subject" name="subject" id="subject" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm">
									<option value="" selected disabled>Please Select a Subject</option>
									<option value="JGKC CV - Saying Hi">Just Saying Hi!!!</option>
									<option value="JGKC CV - Work Opportunity">Working Opportunity</option>
									<option value="JGKC CV - Enquires">Enquires</option>
								</select>
							</div>
							<div class="flex flex-col">
								<label for="message" class="mb-1 font-medium">Message</label>
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

	</div>

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
				formSuccess : false,
				formError: false,
				errorMsg :"",
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
				.catch(e=> 
					console.error(e)
				)

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
