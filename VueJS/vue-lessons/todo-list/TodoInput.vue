<template>
    <form @submit.prevent="submitData">
        <input type="text" v-model="task">
        <button>Submit</button>
    </form>
</template>

<script>
export default {
    data(){
        return{
            task: '',
        }
    },
    methods: {
        submitData(e){
            // e.preventDefault();
            
            // this.$emit('自訂事件',傳值1,傳值2,...)
            this.$emit('abc',this.task)
            this.task = ''
        },
    },
}
</script>