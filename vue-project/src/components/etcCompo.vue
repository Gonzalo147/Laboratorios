<template>
    <div>
        <button v-for="n in 4" @click="addElement">HOLA</button>
        <div v-for="(element, index) in elements" :key="index">
            {{ element.name }}
            <button @click="removeElement(index)">ELIMINAME</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            elements: []
        }
    },
    methods: {
        addElement() {
            this.elements.push({ name: 'soy un clon' });
        },
        removeElement(index) {
            this.elements.splice(index, 1);
        }
    }
}
</script>