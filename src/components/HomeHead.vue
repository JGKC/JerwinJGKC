<template>
        	<!-- section 1 -->
    	<!-- <section id="home01" class="h-[100vh] w-full font-['Quicksand'] text-center grid p-10">
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

    	</section> -->
    
    <section id="home01" class="h-[100vh] w-full text-center grid p-10">
        <div class="w-full max-w-[1440px] m-auto">
            <div class="grid grid-cols-1 lg:grid-cols-5 justify-center items-center">
                
                <div class="grid place-items-center col-span-2">
                    <img src="@/assets/logo-green.svg" alt="logo" class="w-[60%] mb-[30px]">
                    <div>
                        <span class="font-['Montserrat'] text-[#20B2AA] text-[2.25em] lg:text-[4em] leading-[100%] font-extrabold">JERWIN GOH</span><br>
                        <span class="font-['Quicksand'] font-medium text-[#436964] text-[1em] lg:text-[1.8em] ">UX DESIGN • WEB DEVELOPMENT</span>
                    </div>
                </div>
                <div class="col-span-3 font-['Montserrat']">
                    <div id="home-text" class="m-auto md:text-[1.2em] lg:text-[1.5em] bg-[#20B2AA] text-[#fff] leading-[180%] p-6 w-fit">
                        <div class="font-extrabold uppercase">
                            <span class="text-[1.5em] font-extrabold">DESIGN</span> with the best of interest, 
                        </div>
                        <div class="font-extrabold uppercase">
                            <span class="text-[1.5em] font-extrabold">DEVELOP</span> to fulfil the dream.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<script>
export default{
    name: "HomeHeader",
    data(){
        return{
            
        }
    }
}

</script>