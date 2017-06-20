<template>
    <div class="contactContainer">
        <div class="contact">
            <h1>Nous contacter</h1>
            <div class="mapContainer">
                <iframe class="map" width="600" height="450"
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAfdbdDTU_EcRotI573sVcUc&key=AIzaSyADDmkJldHvzFjC6omU-fhxqjVZG3SnoIQ"></iframe>
            </div>
            <div class="information">
                <div class="informationContent">
                            <span>
                                <hr class="hrTop"/>
                                <img src='../images/location.png' alt=""/>
                                <hr class="hrTop"/>
                            </span>
                    <div class="addressContainer">
                        <p><strong>Cantine Numérique de Tours</strong><br/>
                            30 rue André Thieuret <br/> 37000 Tours</p>
                    </div>
                    <hr class="hrBottom"/>
                </div>
                <div class="informationContent">
                            <span>
                                <hr class="hrTop"/>
                                <img src='../images/contact.png' alt=""/>
                                <hr class="hrTop"/>
                            </span>
                    <div class="nameContainer">
                        <div class="name">
                            <p><strong>Rodrigo Reyes</strong></p>
                            <p>reyes.rr@gmail.com</p>
                        </div>
                        <div class="name">
                            <p><strong>Ludovic Lafole</strong></p>
                            <p>Ludovic.lafole@gmail.com</p>
                        </div>
                        <div class="name">
                            <p><strong>Valentin Maerten</strong></p>
                            <p>valentin@maerten.fr</p>
                        </div>
                    </div>
                    <hr class="hrBottom"/>
                </div>
                <div class="informationContent">
                            <span>
                                <hr class="hrTop"/>
                                <img src='../images/contactMail.png' alt=""/>
                                <hr class="hrTop"/>
                            </span>
                    <form action="" class="form">
                        <input type="text" placeholder="nom"/>
                        <input type="text" placeholder="mail"/>
                        <textarea type="text" placeholder="message"/>
                        <button>ENVOYER</button>
                    </form>
                    <hr class="hrBottom"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{}
</script>

<style scoped>
    @import "../vues/variables/variables.css";

    .contactContainer .contact {
        width: 95%;
        margin: 0 auto;
    }

    .contactContainer .contact h1 {
        color: var(--darkGrey);
        font-weight: 500;
        font-size: 1.2em;
    }

    .contactContainer .contact .mapContainer {
        border: 7px solid #FFF;
        overflow: hidden;
        height: 170px;
    }

    .contactContainer .contact .mapContainer .map {
        width: 100%;
        height: 170px;
        border: none;
    }

    .contactContainer .contact .information {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    }



    @media (min-width: 960px) {
        .contactContainer .contact .information{
            flex-direction: row;
        }
    }

    .contactContainer .contact .information > div {
        background-color: #FFF;
        min-height: 100px;
        padding: 20px;
        width: 80%;
        text-align: center;
        margin: 20px 0;
    }



    @media (min-width: 960px) {
        .contactContainer .contact .information > div{
            width:  27%;
        }
    }

    .contactContainer .contact .information > div span {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .contactContainer .contact .hrTop {
        margin: 0;
        width: calc((100% - (var(--iconWidth))) / 2);
    }

    .contactContainer .contact .information > div p {
        font-size: 0.9em;
        color: var(--darkGrey);
    }

    .contactContainer .hrTop, .contactContainer .hrBottom {
        border: 0;
        height: 1px;
        background: var(--orange);
    }

    .contactContainer .contact .addressContainer, .form {
        height: 192px;
    }

    .contactContainer .contact .addressContainer {
        position: relative;
    }

    .contactContainer .contact .addressContainer p {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        margin-left: calc(100% / -2);
        margin-top: calc(var(--addressHeight) / -2);
    }

    .contactContainer .nameContainer > div {
        height: 3.1em;
    }

    .contactContainer .nameContainer p {
        line-height: 0.3em;
    }

    .contactContainer .contact .form input,
    .contactContainer .contact .form textarea {
        width: 100%;
        background-color: #e3e7f5;
        border: #9fa3b1;
        margin-top: 8px;
        margin-bottom: 4px;
        font-size: 0.8em;
        padding: 3px;
    }

    .contactContainer .contact .form input {
        height: 1.5em;
    }

    .contactContainer .contact .form textarea {
        height: 4.5em;
    }

    .contactContainer .contact .form button {
        width: 100px;
        background-color: var(--orange);
        border: none;
        color: #FFF;
        height: 25px;
    }

</style>