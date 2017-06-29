<template>
    <div class="simpleCard">
        <h1 class="elementListBoardTitle">{{card.name}}</h1>
        <section class="ideaSection">
            <div class="description">
                {{card.desc}}
            </div>
            <slot name="rate"
                  :card="card">
            </slot>
        </section>
    </div>
</template>

<script>

    export default{
        props: [
            'card'
        ]
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

    .workshopIdea .ideaSection {
        font-size: 1rem;
        text-align: center;
        padding-top: 1rem;
        height: 175px;
        overflow: hidden;
    }

    .workshopIdea .description {
        color: var(--darkGrey);
        flex: 1;
    }
    .workshopIdea .counter {
        display: block;
        margin-top: 0.3rem;
    }

    .workshopIdea .elementListBoard:hover .elementListBoardTitle,
    .workshopIdea .elementListBoard:active .elementListBoardTitle {
        color: var(--white);
        border-bottom: 1px solid var(--white);
    }

    .workshopIdea .elementListBoard:hover .description,
    .workshopIdea .elementListBoard:active .description {
        display: none;
    }
</style>