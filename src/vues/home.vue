<template>
    <div id="home">
        <div class="welcome">
            <div class="centeredContent">
                <h1><img src='../images/logo.png' alt="logo Hacking Mondays"/></h1>
                <p>11Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquam aut deleniti ducimus ea
                    excepturi illum, incidunt libero mollitia natus, nemo quam reprehenderit tempore! Dicta fuga id sit.
                    Nam, nulla?</p>
                <button>
                    <router-link to="/app/scheduledWorkshops">Acceder au site</router-link>
                </button>
            </div>
            <div class="mouse" @click="goTo('sectionPresentation')">
                <img src='../images/icon_mouse.png' alt="go down"/>
                <p>SCROLL</p>
            </div>
        </div>
        <section class="presentation" id="sectionPresentation">
            <article>
                    <span>
                        <hr class="halfLine"/>
                        <img src='../images/icons_objectives.png' alt="objectifs"/>
                        <hr class="halfLine"/>
                    </span>
                <div class="objectives">
                    <h2>Objectifs</h2>
                    <ul>
                        <li>Partager et apprendre dans une bonne ambiance</li>
                        <li>Participer à des projets entre drogués du code</li>
                        <li>Nous amuser !</li>
                    </ul>
                    <p>Il n'y a pas de prérequis pour nous rejoindre si ce n'est l'envie de partager, de s'initier ou de
                        se perfectionner autour du code</p>
                </div>
            </article>
            <article>
                    <span>
                        <hr class="halfLine"/>
                        <img src='../images/icon_actions.png' alt="actions"/>
                        <hr class="halfLine"/>
                    </span>
                <div class="actions">
                    <h2>Actions</h2>
                    <ul>
                        <li>Venez coder ou vous initier dans une ambiance conviviale, et ce tous les lundi soirs</li>
                        <li>Des ateliers sont organisé toute les 2 semaines. Les sujets sont choisis à l'avance.</li>
                        <li>De temps en temps un concours de developpement pour coder en s'amusant</li>
                        <li>Venez avec vos idées et proposez-les aux Hackers du lundi.</li>
                    </ul>
                </div>
            </article>
            <article>
                    <span>
                        <hr class="halfLine"/>
                        <img src='../images/icon_participate.png' alt="participation"/>
                        <hr class="halfLine"/>
                    </span>
                <div class="participate">
                    <h2>Participer</h2>
                    <p>Les sessions sont gratuites et ouvertes à tous. Afin d'en faciliter l'organisation, il suffit de
                        s'inscrire sur le site
                        <a href="https://www.eventbrite.fr/e/billets-hacking-monday-18244313232" target="_blank"
                           class="colorLink">eventbrite.fr</a>
                    </p>
                </div>
            </article>
            <div class="arrowTopContainer">
                <img @click="goTo('home')" src="../images/arrow_up.png" alt="go top"/>
            </div>
        </section>
        <footer>
            <p>Copyright</p>
        </footer>
    </div>
</template>
<script>
    export default {
        methods: {
            go(element, to, duration) {
                if (duration <= 0) return;
                var difference = to - element.scrollTop;
                var perTick = difference / duration * 10;

                setTimeout(() => {
                    element.scrollTop = element.scrollTop + perTick;
                    if (element.scrollTop === to) return;
                    this.go(element, to, duration - 10);
                }, 8);
            },

            goTo(id) {
                var element = document.getElementById(id);
                this.go(document.body, element.offsetTop, 500);

            }
        }

    }
</script>
<style>
    @import "./variables/variables.css";

    body {
        margin: 0;
    }

    #home .welcome {
        position: relative;
        display: block;
        height: 100vh;
        background: url('../images/background.png');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }

    #home .welcome .centeredContent {
        position: absolute;
        height: var(--heightContent);
        margin-left: calc((var(--widthContent)) / (-2));
        margin-top: calc((var(--heightContent)) / (-2));
        width: var(--widthContent);
        top: 50%;
        left: 50%;
    }

    #home .welcome .centeredContent h1 {
        max-width: var(--widthTitle);
        width: 80%;
        margin: 0 auto;
    }

    #home .welcome .centeredContent h1 img {
        max-width: 100%;
    }

    #home .welcome .centeredContent p {
        color: var(--lightGrey);
        text-align: center;
        margin: 1.5em auto;
        padding: 0.7em;
        max-width: 800px;
    }

    #home .welcome .centeredContent button {
        width: 250px;
        height: 50px;
        display: block;
        margin: 0 auto;
        background: var(--orange);
        border-style: none;
        padding: 0;
    }

    #home .welcome .centeredContent button a {
        display: block;
        padding: 1.2em;
        text-decoration: none;
        color: #FFF;
        font-weight: 500;
        font-size: 1.3em;
    }

    #home .welcome .centeredContent button a:hover {
        cursor: pointer;
    }

    #home .welcome .centeredContent button a:focus {
        outline: none;
    }

    #home .welcome .mouse {
        display: block;
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 0;
        cursor: pointer;
    }

    #home .welcome .mouse p {
        color: var(--lightGrey);
        margin-top: 5px;
    }

    #home .presentation {
        background-color: var(--blueGrey);
    }

    #home .presentation article {
        width: 70%;
        min-width: 250px;
        margin: 0 auto;
        padding: 20px;
    }

    #home .presentation article span {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .halfLine {
        border: 0;
        height: 1px;
        background: var(--orange);
        margin: 0;
        width: calc(50% - (var(--iconWidth) / 1.5));
    }

    .actions, .participate, .objectives {
        color: var(--darkGrey);
        width: var(--articleHomeWidth);
        margin: 0 auto;
        min-width: 250px;
    }

    #home .presentation h2 {
        display: initial;
        width: inherit;
        font-weight: 500;
        font-size: 1.1em;
        color: var(--orange);
        border-bottom: 1px solid var(--orange);
    }

    #home .presentation ul {
        list-style: circle;
        line-height: 1.2em;
    }

    .colorLink {
        color: var(--orange);
    }

    .colorLink:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .arrowTopContainer {
        width: var(--articleHomeWidth);
        margin: 0 auto;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    footer {
        background-color: #000;
        height: 100px;
    }

    footer p {
        margin: 0 auto;
        padding: 10px;
        width: 250px;
        text-align: center;
        color: var(--lightGrey);
    }
</style>