<template>
    <div class="w-full flex flex-col lg:hidden ">
        
        <div class="w-full h-[80px] bg-white px-[20px] flex place-items-center justify-between z-10 gap-4 bk-shadow">
            <RouterLink 
                v-for="item in nav"
                :to="item.to" 
                active-class="pointer-events-none bg-[#20B2AA] text-white mb-12"             
                :class="[this.$route.name === item.to.name
                    ? 'BotNavBtn'
                    : 'BotNavBtn','text-[#20B2AA]'
                ]">
                <font-awesome-icon :icon="item.icon" size="xl"/>
                <div>{{item.name}}</div>
            </RouterLink>

            <!-- <RouterLink to="/" class="BotNavBtn">
                <div class="navIcon"><font-awesome-icon icon="fa-solid fa-home" size="xl"/></div>
                <div>Home</div>
            </RouterLink>

            <RouterLink to="/About" class="BotNavBtn">
                <div class="navIcon"><font-awesome-icon icon="fa-solid fa-user-tie" size="xl"/></div>
                <div>About</div>
            </RouterLink>

            <RouterLink to="/Works" class="BotNavBtn">
                <div class="navIcon"><font-awesome-icon icon="fa-solid fa-pen-ruler" size="xl"/></div>
                <div>Works</div>
            </RouterLink>

            <RouterLink to="/Contacts" class="BotNavBtn">
                <div class="navIcon"><font-awesome-icon icon="fa-solid fa-address-book" size="xl"/></div>
                <div>Contacts</div>
            </RouterLink> -->
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                nav:[
                    {
                        name:"Home",
                        icon:"fa-solid fa-house",
                        to:"/"
                    },
                    {
                        name:"About",
                        icon:"fa-solid fa-user-tie",
                        to:"/About"
                    },
                    {
                        name:"Works",
                        icon:"fa-solid fa-pen-ruler",
                        to:"/Works"
                    },
                    {
                        name:"Contacts",
                        icon:"fa-solid fa-address-book",
                        to:"/Contacts"
                    }
                ]
            }
        }
    }
</script>

<style>
.BotNavBtn{
    height:60px;
    width:100%;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 14px;
    font-family: "Quicksand", sans-serif;
}

.bk-shadow{
    filter: drop-shadow(0 -2.5px 0.5rem #86efac);
}
</style>