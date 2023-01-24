<template>
    <div class="w-full flex flex-col lg:hidden ">
        
        <div class="w-full h-[80px] bg-white px-[20px] flex justify-between items-center drop-shadow-md z-10">
            <div class="w-[60px] h-[60px] grid place-items-center">
                <img src="../../assets/logo-green.svg" alt="logo">
            </div>
            <!-- Navigation -->
            <div @click="menuOpen = !menuOpen" class="mb-0 SideNavBtn">
                <font-awesome-icon icon="fa-solid fa-times" size="2xl" v-if="menuOpen"/>
                <font-awesome-icon icon="fa-solid fa-bars" size="2xl" v-else/>
            </div>
        </div>

        <div v-show="menuOpen" class="w-full h-fit bg-white flex justify-between p-[20px] transition-all">

            <RouterLink to="/" class="TopNavBtn">
                <font-awesome-icon icon="fa-solid fa-house" size="xl"/>
                <div>Home</div>
            </RouterLink>

            <RouterLink to="/About" class="TopNavBtn">
                <div class="navIcon"><font-awesome-icon icon="fa-solid fa-user-tie" size="xl"/></div>
                <div>About</div>
            </RouterLink>

            <RouterLink to="/Works" class="TopNavBtn">
                <div class="navIcon"><font-awesome-icon icon="fa-solid fa-pen-ruler" size="xl"/></div>
                <div>Works</div>
            </RouterLink>

            <RouterLink to="/Contacts" class="TopNavBtn">
                <div class="navIcon"><font-awesome-icon icon="fa-solid fa-address-book" size="xl"/></div>
                <div>Contacts</div>
            </RouterLink>
        </div>
    </div>

</template>

<script>
    export default{
        data(){
            return{
                menuOpen: false
            }
        }
    }
</script>

<style>
.SideNavBtn{
    height:60px;
    width:60px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.TopNavBtn{
    height:60px;
    width:20%;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 14px;
    font-family: "Quicksand", sans-serif;
}
</style>