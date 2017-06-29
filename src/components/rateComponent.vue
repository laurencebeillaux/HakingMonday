<template>
    <div class="rate">
        <span class="addRate" @click="increment()">&#x2661</span>
        <span class="counter">{{counter}}</span>
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
                    let membersVoted = this.card.idMembersVoted;
                    let indexOfId = membersVoted.indexOf(member.id);
                    if (indexOfId !== -1) {
                        this.counter -= 1;
                        membersVoted.splice(indexOfId, 1);
                        Trello.delete('cards/' + this.card.id + '/membersVoted/' + member.id);
                    } else {
                        this.counter += 1;
                        membersVoted.push(member.id);
                        Trello.post('cards/' + this.card.id + '/membersVoted/?value=' + member.id);
                    }
                })
            }
        }
    }
</script>

<style>
    @import "../vues/variables/variables.css";

    .elementListBoard .rate {
        display: none;
        margin: 0 auto;
    }
    .elementListBoard .rate .addRate {
        font-size: 2rem;
        color: var(--white);
        display: block;
        border: 1px solid var(--white);
        border-radius: 50%;
        cursor: pointer;
        height: 50px;
    }
    .elementListBoard .rate .counter{
        color: var(--white);
        font-size: 0.9rem;
        line-height: 1.7rem;
        display: block;
    }
    .elementListBoard:hover .rate,
    .elementListBoard:active .rate {
        display: block;
        width: 50px;
        margin-top: 1.5rem;

    }

</style>