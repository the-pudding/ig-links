<script>
    import IconCircle from "./helpers/IconCircle.svelte";
</script>

<section id='IG-details-wrapper'>
   <p class='description'>is a digital publication that explains ideas debated in culture with visual essays.</p>
   <div class='ctas'>
        <div class='button-wrapper'>
            <a href='https://cool.us11.list-manage.com/subscribe?u=c70d3c0e372cde433143ffeab&id=9af100ac0f'><button>Join our newsletter</button></a>
            <a href='https://www.patreon.com/thepudding'><button>Support us on Patreon</button></a>
        </div>
        <div class='social-wrapper'>
            <p>Find us on social</p>
            <a href="https://www.facebook.com/pudding.viz/">
                <IconCircle name="facebook" fill="var(--gray)" stroke="none" strokeWidth="0"/>
            </a>
            <a href="https://twitter.com/puddingviz">
                <IconCircle name="twitter" fill="var(--gray)" stroke="none" strokeWidth="0"/>
            </a>
        </div>
   </div>
   <p class="directions">Tap on an image to see the full interactive project</p>
</section>

<style>
    #IG-details-wrapper {
        //max-width: 60rem;
        margin: 0 auto 0.5rem auto;
    }

    .description {
        font-family: var(--serif);
        text-align: center;
        max-width: 35rem;
        margin: 0 auto;
        font-size: 1.5em;
    }

    .ctas {
        margin: 1.5rem auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .button-wrapper {
        display: flex;
        flex-direction: row;
    }

    button {
        border: 1px solid var(--gray);
        color: var(--off-white);
        margin: 0 0.75rem 0 0;
        padding: 1rem;
        width: 12.25rem;
        height: 3.25rem;
        color: var(--gray-dark)
    }

    button:hover {
        background-color: var(--off-black);
        color: var(--off-white);
        border: 1px solid var(--off-black);
    }

    .social-wrapper {
        margin-left: 0.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 15rem;
        justify-content: space-between;
    }
    .social-wrapper p {
        margin: 0;
        color: var(--gray-dark)
    }

    .directions {
        max-width: 60rem;
        margin: 3rem auto 0 auto;
        width: 100%;
        text-align: center;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--gray-light);
        font-size: 0.75rem;
        color: var(--gray-dark)
    }

    @media only screen and (max-width: 720px) {
        .ctas {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .button-wrapper {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        } 
        
        button {
            margin: 0 0 0.5rem 0;
            width: 15rem;
        }

        .social-wrapper {
            margin-left: 0;
            justify-content: center;
            align-items: center;
        }
    }
</style>