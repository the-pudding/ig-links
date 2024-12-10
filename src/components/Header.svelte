<script>
  import wordmark from "$svg/wordmark-sticker.svg";
</script>

<header>
  <div class="wordmark">
    <a href="https://pudding.cool" aria-label="The Pudding">{@html wordmark}</a>
  </div>
</header>

<style>
  .wordmark {
    max-width: 16em;
    margin: 2rem auto 1rem auto;
    margin-top: 2rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wordmark a:hover {
    transform: rotate(var(--left-tilt)) scale(1.05);
  }

  :global(.wordmark a svg) {
    width: 100%;
  }

  .wordmark a {
    border: none;
    color: var(--color-fg);
    transition: transform 0.25s ease-in-out;
    transform: rotate(-4deg);
  } 
</style>
