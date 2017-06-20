<template>
    <div class="navigationContainer">
        <nav class="navigation">
            <ul class="navigationList">
                <li><router-link to="/app/workshopIdea">Idées d'ateliers</router-link></li>
                <li><router-link to="/app/scheduledWorkshops">Ateliés programmés</router-link></li>
                <li><router-link to="/app/demosApi">API pour Démos</router-link></li>
                <li><router-link to="/app/contact">Contact</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{}

</script>

<style>
    @import "../vues/variables/variables.css";
    .navigation{
        background-color: var(--darkGrey);
        height: calc(100vh - var(--headerHeight));
    }
    .navigationList {
        margin: 0;
        padding: 0;

    }
    .navigationList li {
        list-style: none;
        border-bottom: 1px solid rgba(191, 191, 191, 0.25);
    }
    .navigationList a {
        display: block;
        padding: 0.5em 1.2em;
        color: var(--lightGrey);
        font-size: 0.9em;
        text-decoration: none;
    }
    .navigationList a .active{
         background-color: var(--orange);
         color: #FFF;
    }

</style>