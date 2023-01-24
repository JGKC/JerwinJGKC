<template>
    <section 
        class="w-full h-[60vh] m-auto relative bg-cover flex items-center" 
        :style="{'background':`linear-gradient(to top right,#94EB9Bff,#ADD8E680), url(${('../src/assets/Works/' + imageURL)}) no-repeat` , 'background-size':'cover'}"
    >
        <div class="w-full max-w-[1440px] m-auto">
            <div class="w-[90%] m-auto">
                <TitleHead :titleHead="titleHeader" :titleSub="titleSubHeader"/>
            </div>
        </div>
    </section>
</template>

<script>
import TitleHead from '../TitleHead.vue';

export default{
    components: {TitleHead},
    props:{
        titleHeader:{
            type: String,
            required: true
        },
        titleSubHeader:{
            type: String,
            required: true
        },
        imageURL:{
            // type: String,
            // required: false,
        }
    }
}


</script>
