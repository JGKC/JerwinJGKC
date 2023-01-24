<script setup>
    defineProps({
        titleHead: {
            type: String,
            required: true
        },
        titleSub:{
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="maxWidth mt-[80px] w-fill h-fit font-['Montserrat']">
        <div class="leading-tight text-[36px] md:text-[48px] font-bold">{{ titleHead }}</div>
        <div class="text-[20px] font-medium">{{ titleSub }}</div>
    </div>
</template>

<style>

</style>
