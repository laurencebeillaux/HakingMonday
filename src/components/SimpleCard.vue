<template>
    <div class="simpleCard">
        <h1 class="elementListBoardTitle">{{card.name}}</h1>
        <section class="ideaSection">
            <slot name="rate"
                  :card="card">
            </slot>
            <div class="description">
                {{card.desc}}
            </div>
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
     .elementListBoardTitle {
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
        overflow: hidden;
    }

    .description {
        color: var(--darkGrey);
        flex: 1;
        word-break: break-word;
        max-height: 140px;
    }


    .elementListBoard:hover .elementListBoardTitle,
    .elementListBoard:active .elementListBoardTitle {
        color: var(--white);
        border-bottom: 1px solid var(--white);
    }

    .elementListBoard:hover .description,
    .elementListBoard:active .description {
        color: var(--white);
        max-height: 100%;
    }
     .elementListBoard:hover .rate + .description,
     .elementListBoard:active .rate + .description{
        display: none;
    }
</style>