<template>
    <div>
        <div class="counter">
            {{ newCount }}
        </div>
        <button @click="increment">Click me</button>
    </div>
</template>

<script>
    export default {
        name: 'BaseButton',
        
        computed: {
            newCount () {
                return this.$store.getters.counter;
            }
        },

        methods: {
            increment () {
                this.count += 1;
                this.$store.commit('increment');
            },
        }
    }
</script>