<template>
    <div
        class="entry-container mb-3 pointer p-2"
    >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">3</span>
            <span class="mx-1 fs-5">Mayo</span>
            <span class="mx-2 fw-light">2022, Martes</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis dicta ea nostrum illo iste cumque accusantium totam doloribus quia veniam itaque, repudiandae labore odio provident pariatur atque assumenda iure.
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: #000000, $amount: 75);
    }

    .entry-description {
        font-size:12px;
    }

}
</style>