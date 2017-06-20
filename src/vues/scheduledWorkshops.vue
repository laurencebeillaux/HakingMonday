<template>
    <div class="boardsContainer">
        <simple-board :idList="idList" ></simple-board>
    </div>
</template>


<script>

    export default {
        data() {
            return {
                idList: '5593227941980d858f672d0f'
            }
        },

    }


</script>

<style scoped>
    .boardsContainer {
        background-color: var(--blueGrey);
    }
</style>