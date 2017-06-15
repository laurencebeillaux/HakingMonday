<template>
    <div>
        <div v-for="list in filterId">
            {{list.name}}
            <ul v-for="card in list.cards" >
                <li>{{card.name}}</li>
            </ul>
        </div>
    </div>
</template>


<script>
    import {listServices} from "../service/ListsServices"


    export default {
        props: ['idList'],
        data() {
            return {
                board: {},
                lists: []
            }
        },
        computed: {
            filterId(){
                return this.lists.filter((list)=>{
                    return list.id == this.idList
                })
            }
        },

        mounted() {

            listServices.fetchUrl().then((result) => {
                this.board = result;
                this.lists = result.lists.map(list => {
                    list.cards = result.cards.filter((card) => card.idList === list.id)
                    return list
                });

            })
                    .catch(err => {
                        console.log(err);
                    })

        }
    }


</script>

<style scoped>
    div {
        display: block;
        width: 100%;
        background-color: cadetblue;
    }
</style>