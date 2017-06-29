<template>
    <div>
        <simple-board :idList="idList" >
            <template slot="card" scope="props">
                <li class="elementListBoard">
                    <Simple-card :card="props.card"></Simple-card>
                </li>
            </template>
        </simple-board>
    </div>
</template>


<script>

    export default {
        data() {
            return {
                idList: '56f363e93f6c1744abab516c'
            }
        },

    }


</script>

<style scoped>
</style>