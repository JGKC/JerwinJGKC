<template>
    <nav class="min-w-[100px] h-[100vh] bg-white shadow-md shadow-green-300 text-[#000] lg:flex items-center py-[20px] flex-col hidden">

        <div id="logo" @click="logoClick"> 
            <img src="../../assets/logo-green.svg" alt="logo">
        </div>

        <!-- Navigation -->
        <div>

            <RouterLink to="/" class="SideNavBtn">
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
            </RouterLink>

        </div>
    </nav>
</template>

<script setup>

    function logoClick(){
        let link = window.location.href
        console.log(window.location.href)
        navigator.clipboard.writeText(link);


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
    height:80px;
    width:80px;
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