<template>
    <div class="workshopIdea">
        <simple-board :idList="idList">
            <!-- scoped slot can be named too -->
            <template slot="card" scope="props">
                <li class="elementListBoard">
                    <Simple-card :card="props.card">
                        <template slot="rate" scope="params">
                            <rate-component :card="props.card"></rate-component>
                        </template>
                    </Simple-card>
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




</style>