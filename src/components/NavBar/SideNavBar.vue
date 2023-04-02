<template>
    <nav class="min-w-[100px] w-[100px] h-[100vh] bg-white shadow-md shadow-green-300 text-[#000] lg:flex items-center py-[20px] flex-col hidden">

        <div id="logo" @click="logoClick"> 
            <img src="../../assets/logo-green.svg" alt="logo">
        </div>

        <!-- Navigation -->
        <div class="w-[60px] space-y-4 z-50">

            <RouterLink 
                v-for="item in nav"
                :to="item.to" 
                active-class="pointer-events-none bg-[#20B2AA] text-white ml-8"             
                :class="[this.$route.name === item.to.name
                    ? 'SideNavBtn'
                    : 'SideNavBtn', 'text-[#20B2AA]'
                ]">
                <font-awesome-icon :icon="item.icon" size="xl"/>
                <div>{{item.name}}</div>
            </RouterLink>

            <!-- <RouterLink to="/" class="SideNavBtn">
                <font-awesome-icon icon="fa-solid fa-house" size="2xl"/>
                <div>Home</div>
            </RouterLink>
            
            <RouterLink to="/About" class="SideNavBtn">
                <font-awesome-icon icon="fa-solid fa-user-tie" size="2xl"/>
                <div>About</div>
            </RouterLink>

            <RouterLink to="/Works" class="SideNavBtn">
                <font-awesome-icon icon="fa-solid fa-pen-ruler" size="2xl"/>
                <div>Works</div>
            </RouterLink>

            <RouterLink to="/Contacts" class="SideNavBtn">
                <font-awesome-icon icon="fa-solid fa-address-book" size="2xl"/>
                <div>Contacts</div>
            </RouterLink> -->

        </div>
    </nav>
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
#logo{
    height:80px;
    width: 80px;

    padding: 10px;

    display: grid;
    place-items: center;
}


.SideNavBtn{
    height:60px;
    width:60px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 10px;
    font-size: 12px;
    font-family: "Quicksand", sans-serif;

    color:#20B2AA;
}

</style>