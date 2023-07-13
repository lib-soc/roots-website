<svelte:options tag="landing-component" />

<script>
    // Import statements
    import { onMount } from 'svelte'
    import { loadLocaleContent } from "/js/libraries/serverTools.js"
    import { writable } from 'svelte/store';

    // Import components
    

    // Main code
    let grid
    //let loaded = writable(0)
    //let content = writable({})

    //loadLocaleContent(content,"countries",loaded)
   //let locale = loadLocaleContent(content,"landing-component",loaded)
    let locale = "en"
    onMount(() => { 

    })
</script>

<div id="container">
    <picture>
        <source srcset="/img/common/logo.webp">
        <source srcset="/img/common/logo.png">
        <img id="logo" alt="logo">
    </picture>
    
    <div id="text-container">
        <h1>The Roots Party</h1>
        <p>We are a left libertarian organization based in Ireland. We have a focus on rebuilding the country's infrastructure, sense of governance, housing, agricultural industries and youth affairs.</p>
        <div bind:this={grid} id="buttons-grid">
            <button on:click={() => location.href="/"+locale+"/manifesto/"}>Manifesto</button>
            <button on:click={() => location.href="/"+locale+"/join-us/"}>Join Us</button>
            <button on:click={() => location.href="/"+locale+"/partners/"}>Partners</button>
        </div>
    </div>
</div>

<style>
    @import '/css/common.css';

    h1 {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    #text-container {
        max-width: calc(100vw - 4rem);
        margin: auto;
    }

    #logo {
        display: block;
        height: 15rem;
        margin: auto;
        margin-bottom: 2rem;
        border-radius: 3rem;
    }

    #container {
        position: relative;
        margin: auto;
        max-width: 800px;
        margin-top: 2rem;
        margin-bottom: 5rem;
    }

    #container>div>p {
        margin-bottom: 1rem;
    }

    #container p {
        text-align: justify;
    }

    #buttons-grid {
        display: grid;
        grid-template-columns: 1fr 1fr max-content;
        grid-gap: 4rem;
        margin: auto;        
        margin-top: 2rem;
    }

    #buttons-grid > button {
        position: relative;
        width: 13rem;
        height: 5rem;
        border-radius: 0.2rem;
        background-color: #D87819;
        font-size: 1.6rem;
        font-style: var(--sans-serif,sans-serif);
        color: black;
        box-shadow: 0.15rem 0.15rem 0rem  #5e6551;
    }


    @media only screen and (max-width: 1060px) {
        #buttons-grid {
            display: grid;
            grid-template-columns: 100%;
            grid-gap: 2rem;
            justify-items: center;
        }
    }

</style>