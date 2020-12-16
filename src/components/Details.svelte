<script>
    import Icon from "./helpers/Icon.svelte";
</script>

<section id='IG-details-wrapper'>
   <p class='description'>is a digital publication that explains ideas debated in culture with visual essays.</p>
   <div class='button-wrapper'>
       <a href='https://poly-graph.us11.list-manage.com/subscribe/post'><button>Join our newsletter</button></a>
       <a href='https://www.patreon.com/thepudding'><button>Fund us on Patreon</button></a>

       <div class='social-wrapper'>
           <p>Find us on social</p>
            <a href="https://www.facebook.com/pudding.viz/">
                <div class="round-svg">
                    <Icon name="facebook" fill="var(--off-white)" stroke="none" />
                </div>
            </a>
            <a href="https://twitter.com/puddingviz">
                <div class="round-svg">
                    <Icon name="twitter" fill="var(--off-white)" stroke="none" />
                </div>
            </a>
    </div>
   </div>
</section>

<style>
    #IG-details-wrapper {
        //max-width: 60rem;
        margin: 0 auto 3rem auto;
    }

    .description {
        font-family: var(--serif);
        text-align: center;
        max-width: 35rem;
        margin: 0 auto;
        font-size: 1.5em;
    }

    .button-wrapper {
        margin: 2rem auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    button {
        background-color: var(--off-black);
        color: var(--off-white);
        margin: 0 0.75rem;
        padding: 1rem;
        width: 11rem;
        height: 3rem
    }

    button:hover {
        background-color: var(--gray);
    }

    .social-wrapper {
        margin: 0 0.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 15rem;
        justify-content: space-between;
    }
    .social-wrapper p {
        margin: 0;
        padding-right: 0.5rem;
        color: var(--dark-gray)
    }

    .round-svg {
        background-color: var(--off-black);
        height: 3rem;
        width: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        margin-left: 0.5rem;
    }

    .round-svg:hover {
        background-color: var(--gray);
    }

    @media only screen and (max-width: 720px) {
        .button-wrapper {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        } 
        
        button {
            margin-bottom: 1rem;
            width: 15rem;
        }
    }
   
</style>