<template>
    <div class="scheduledWorkshopsContainer">
        <simple-board :idList="idList" class="scheduledWorkshops" >
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
                idList: '5593227941980d858f672d0f'
            }
        },

    }


</script>

<style scoped>
</style>