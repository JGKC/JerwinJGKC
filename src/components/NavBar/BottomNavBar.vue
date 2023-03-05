<template>
    <div class="w-full flex flex-col lg:hidden ">
        
        <div class="w-full h-[80px] bg-white px-[20px] grid grid-cols-5 place-items-center z-10 gap-4 bk-shadow">
                <RouterLink to="/" class="BotNavBtn ">
                    <font-awesome-icon icon="fa-solid fa-house" size="xl"/>
                    <div>Home</div>
                </RouterLink>
            <RouterLink to="/About" class="BotNavBtn">
                <div class="navIcon"><font-awesome-icon icon="fa-solid fa-user-tie" size="xl"/></div>
                <div>About</div>
            </RouterLink>
            
            <div class="w-[60px] h-[60px] grid place-items-center">
                <img src="../../assets/logo-green.svg" alt="logo">
            </div>

            <RouterLink to="/Works" class="BotNavBtn">
                <div class="navIcon"><font-awesome-icon icon="fa-solid fa-pen-ruler" size="xl"/></div>
                <div>Works</div>
            </RouterLink>

            <RouterLink to="/Contacts" class="BotNavBtn">
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