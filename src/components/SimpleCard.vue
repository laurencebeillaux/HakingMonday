<template>
    <div>
        <h1 class="elementListBoardTitle">{{card.name}}</h1>
        <section>{{card.desc}}</section>
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
    .workshopIdea .elementListBoardTitle{
        width: 80%;
        margin: 0 auto;
        color: var(--orange);
        padding-bottom: 10px;
        font-weight: 700;
        font-size: 1.2em;
        border-bottom: 1px solid var(--orange);
    }
    /*.workshopIdea .listBoard li.elementListBoard:hover h1{*/
    /*color: var(--white);*/
    /*border-bottom: 1px solid var(--white);*/

    /*}*/
</style>