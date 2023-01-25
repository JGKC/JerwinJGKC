<template>

  <div class="w-full max-w-[1440px] h-[calc(100vh-80px)] m-auto flex flex-col lg:flex-row">
      <div class="w-[90%] grid lg:grid-cols-2 m-auto">
        <div>
          <TitleHead titleHead="PAGE NOT FOUND" titleSub="ERROR 404" />
          <div class="font-[Quicksand] mt-4">I wonder how you get here... Maybe try checking the URL?</div>
        </div>
        <!-- <div class="hidden lg:block">
          <div>
            How many clicks/taps can you do in 30 seconds?
          </div>
          <div>Click Count: {{ this.clickCount }}</div>
          <div id="click" @click="clickCounter()" class="">Start</div>
        </div> -->
      </div>
  </div>

</template>

<script>
  import TitleHead from '../components/TitleHead.vue'
  export default{
    name:"Error404",
    components:{TitleHead},
    mounted(){
        document.title = 'Error404 | JerwinJGKC'
    },
    data(){
      return{
        clickCount: 0,
      }
    },
    methods:{
      clickCounter(){
        this.clickCount++
        let btn = document.getElementById("click")
        btn.innerHTML = "Click!!!"

        setTimeout(function(){

          if (this.timer==0){
            clearInterval(countdown);
          }

          btn.style.pointerEvents = "none"
          
          btn.innerHTML = "Time's Up!!!"
        },10000)


      }
    }
  }
</script>