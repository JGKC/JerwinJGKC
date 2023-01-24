<template>

    <router-link :to="link" class="mt-4 relative flex w-full justify-center rounded-md border border-transparent bg-[#20B2AA] py-2 px-4 text-sm font-bold font-['Quicksand'] text-white hover:bg-[#188781] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
        {{ cta }}
    </router-link>

</template>

<script>
export default{
    props:{
        link:{
            type:String,
            required: true,
        },
        cta:{
            type:String,
            required: true,
        }
    }
}
</script>