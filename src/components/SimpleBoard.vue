<template>
    <div id="boardsContainer">
        <div v-for="list in filterId">
            <h1 class="titleBoard">{{list.name}}</h1>
            <ul class="listBoard">
                <slot name="card"
                      v-for="card in list.cards"
                      :card="card">
                </slot>
            </ul>
        </div>
    </div>
</template>


<script>
    import {listServices} from "../service/ListsServices"


    export default {
        props: [
            'idList'
        ],
        data() {
            return {
                board: {},
                lists: []
            }
        },
        computed: {
            filterId(){
                return this.lists.filter((list)=> {
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
    #boardsContainer{
        width: 95%;
        margin: 0 auto;
    }
    .titleBoard {
        color: var(--darkGrey);
        font-weight: 500;
        font-size: 1.2em;
    }
    .listBoard .elementListBoard {
        flex: 1;
        background-color: var(--white);
        margin: 0.5rem;
        min-width: 230px;
        min-height: 210px;
        padding: 2rem 0.3rem 0.5rem;
        text-align: center;
        vertical-align: middle;
    }

     .listBoard {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    .listBoard .elementListBoard:hover,
    .listBoard .elementListBoard:active{
        background-color: var(--orange);
    }
</style>