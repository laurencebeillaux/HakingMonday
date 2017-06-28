<template>
    <div class="simpleCard">
        <h1 class="elementListBoardTitle">{{card.name}}</h1>
        <section class="ideaSection">
            <div class="description">
                {{card.desc}}
            </div>
            <div class="rate">
                <span class="addRate" @click="increment()">&#x2661</span>
                <span class="counter">{{counter}}</span>
            </div>
        </section>
    </div>
</template>

<script>
    import {OAuth} from '../../src/service/OAuthService.js'

    export default{
        props: [
            'card'
        ],
        data(){
            return {
                counter: this.card.idMembersVoted.length,
            }
        },
        methods: {
            increment() {
                OAuth().then((member)=> {
                    let  membersVoted= this.card.idMembersVoted;
                    let indexOfId = membersVoted.indexOf(member.id);
                    if (indexOfId !== -1) {
                        this.counter -= 1;
                        membersVoted.splice(indexOfId, 1);
                        Trello.delete('cards/'+this.card.id+'/membersVoted/'+member.id);
                    } else {
                        this.counter += 1;
                        membersVoted.push(member.id);
                        Trello.post('cards/'+this.card.id+'/membersVoted/?value='+member.id);
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .workshopIdea .elementListBoardTitle {
        width: 80%;
        margin: 0 auto;
        color: var(--orange);
        padding-bottom: 10px;
        font-weight: 700;
        font-size: 1.2em;
        border-bottom: 1px solid var(--orange);
    }

    .ideaSection {
        font-size: 1rem;
        text-align: center;
        padding-top: 1rem;
        height: 175px;
        overflow: hidden;
    }

    .description {
        color: var(--darkGrey);
        flex: 1;
    }

    .elementListBoard .rate {
        display: none;
        margin: 0 auto;
    }

    .elementListBoard .rate .addRate {
        font-size: 2rem;
        color: var(--white);
        display: block;
        padding-top: 2px;
        border: 1px solid var(--white);
        border-radius: 50%;
        cursor: pointer;
    }

    .counter {
        display: block;
        margin-top: 0.3rem;
    }

    .elementListBoard:hover .elementListBoardTitle,
    .elementListBoard:active .elementListBoardTitle {
        color: var(--white);
        border-bottom: 1px solid var(--white);
    }

    .elementListBoard:hover .rate,
    .elementListBoard:active .rate {
        display: block;
        width: 50px;
        height: 50px;
        margin-top: 1.5rem;

    }

    .elementListBoard:hover .description,
    .elementListBoard:active .description {
        display: none;
    }
</style>