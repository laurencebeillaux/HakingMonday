<template>
    <div class="projectIdeaContainer">
        <simple-board :idList="idList" class="projectIdea">
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
                idList: '595190054a5976576d98eba6'
            }
        },

    }


</script>

<style scoped>
</style>