<template>
    <div class="workshopIdea">
        <simple-board :idList="idList">
            <!-- scoped slot can be named too -->
            <template slot="card" scope="props">
                <li class="elementListBoard">
                    <SimpleCard :card="props.card"></SimpleCard>
                </li>
            </template>
        </simple-board>
    </div>
</template>


<script>

    export default {
        data() {
            return {
                idList: '57cdf18a5379bd7d37b4c601',

            }
        },

    }


</script>

<style scoped>
    @import "../vues/variables/variables.css";

    .workshopIdea .listBoard .elementListBoard {
        flex: 1;
        background-color: var(--white);
        margin: 0.5rem;
        min-width: 200px;
        min-height: 200px;
        padding-top: 2rem;
        text-align: center;
        vertical-align: middle;
    }


</style>