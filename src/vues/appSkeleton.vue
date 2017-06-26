<template>
    <div id="app">
        <header>
            <h1>
                <router-link to="/"><img src='../images/logo.png' alt="logo Hacking Mondays"/></router-link>
            </h1>
            <div id="btnToogleMenu" @click="navigationDisplay()">
                <hr>
                <hr>
                <hr>
                <hr>
            </div>
        </header>
        <div class="PrincipalContainer">
            <navigation id="navigationDisplayId" v-show="show" @navigate="navigationHide()"></navigation>
            <router-view id="contentId"></router-view>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                show: false
            }
        },

        methods: {
            navigationDisplay() {
                console.log("open")
                this.show = !this.show
            },
            navigationHide() {
                this.show = false
            }
        }
    }
</script>
<style scoped>
    @import "../vues/variables/variables.css";

    header {
        position: absolute;
        width: 100%;
        background-color: #000;
        height: var(--headerHeight);
    }

    header #btnToogleMenu {
        display: block;
        position: fixed;
        top: 1rem;
        left: 1rem;
        width: 35px;
    }
    #btnToogleMenu hr{
        border: 0;
        height: 1px;
        background: var(--blueGrey);
        margin: 6px 0 6px;
    }

    header > h1 {
        position: relative;
        left: 50%;
        top: 50%;
        width: 200px;
        padding: 1.5vw 1.2vw;
        margin-left: calc(200px / (-2));
        margin-top: calc(80px / (-2));
        display: block;
    }

    header > h1 img {
        width: 100%;
        display: block;
        max-width: 100%;
    }

    .PrincipalContainer {
        display: flex;
        position: relative;
        top: var(--headerHeight);
        overflow:hidden;


    }
    #navigationDisplayId{
        min-width: 200px;
        top: var(--headerHeight);
        left: 0;
    }

    #contentId{
        flex: 1;
        background-color: var(--blueGrey);
    }
    @media (min-width: 960px) {
        header > h1 {
            margin: 0;
            top: 0;
            left: 0;
            padding-top: 1vw;
        }

        header #btnToogleMenu {
            display: none;
        }

        #navigationDisplayId {
            display: block !important;
        }
    }

</style>