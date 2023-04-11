<template>

    <div class="container-list">
        <div v-for="category in categories" >
            <myComponent :name=category.name />
        </div>
    </div>
</template>

<script>
import myComponent from "@/components/my-component.vue";

export default {
    name: "list-component",
    components: {myComponent},
    data() {
        return{
            categories :[]
        }
    },
    beforeMount() {
        //invoco API
          this.categories = [{name:'nombre 1'},{name:'nombre 2'},{name:'nombre 3'},{name:'nombre 4'}]
    }
}
</script>

<style scoped>

.container-list {
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-gap: 10px;
}

</style>