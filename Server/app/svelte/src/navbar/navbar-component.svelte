<svelte:options tag="navbar-component" />

<script>

    // Import statements    
    import { onMount, getContext } from 'svelte'
    import { writable } from 'svelte/store'
    import { loadLocaleContent, locales } from "/js/libraries/serverTools.js"

    // Main code
    let hambInput
    let navbar
    let localesDropdown
    let loaded = writable(0)
    let content = writable({})

    let locale = loadLocaleContent(content,"navbar-component",loaded)

    function changeNavbar() {
        if (hambInput.checked) {
            navbar.style.background = "white"
            //navbar.style.boxShadow = "0 0 0.314rem rgb(187, 187, 187)"
        }
        else {
            setTimeout(()=> {
                navbar.style.position = "relative"
                navbar.style.background = ""
                navbar.style.boxShadow = ""
            }
            ,510)
            
        }
    }

    function showLocales() {
        if (localesDropdown.style.display=="block") {
            localesDropdown.style.display = "none"
        }
        else {
            localesDropdown.style.display = "block"
        }
    }

    function changeLocale(lang) {
        localStorage.setItem("locale",lang)
        let locSplit = location.href.split("/")
        let localesSymbols = Object.keys(locales)
        locSplit = locSplit.filter(x => !localesSymbols.includes(x))
        let loc = locSplit.slice(0,locSplit.length-1).join("/") + "/" + lang + "/" + locSplit[locSplit.length-1]
        location.href = loc
    }

    onMount(() => {

    })

</script>

<!-- Navigation bar -->
{#key loaded}
    {#if Object.keys($content).length!=0}
        <header bind:this={navbar} id="navbar">
            <!-- Hamburger icon -->
            <input bind:this={hambInput} type="checkbox" id="side-menu" on:click={changeNavbar}>
            <label id="hamb" for="side-menu"><span id="hamb-line"></span></label>
            <!-- Logo -->
            <a id=logo-container href={"/" + locale + "/"}>
                <picture>
                    <source srcset={"/img/common/logo.webp"}>
                    <source srcset={"/img/parties/logo.jpg"}>
                    <img id="navbar-logo" alt="logo">
                </picture>
                <span id="navbar-logo-text">{$content.orgName}</span>
            </a>
            <!-- Menu -->
            <nav id="nav">
                <ul id="menu">
                    <li><a href={"/"+locale+"/manifesto"}>{$content.manifesto}</a></li>
                    <li><a href={"/"+locale+"/join-us"}>{$content.joinUs}</a></li>
                    <!--<li><a href={"/"+locale+"/groups"}>{$content.groups}</a></li>
                    <li><a href={"/"+locale+"/communes"}>{$content.communes}</a></li>
                    <li><a href={"/"+locale+"/cooperatives"}>{$content.cooperatives}</a></li>
                    <li><a href={"/"+locale+"/parties"}>{$content.parties}</a></li>-->
                    <li><a href={"/"+locale+"/partners"}>{$content.partners}</a></li>
                    <!--<li id="locales">
                        <button on:click={showLocales}>
                            <picture>
                                <source srcset="/img/common/globe.webp">
                                <source srcset="/img/common/globe.png">
                                <img id="locales-img" alt="globe">
                            </picture>
                        </button>
                    </li>
                    <div bind:this={localesDropdown} id="locales-dropdown">
                        {#each Object.entries(locales) as [loc,name]}
                            <button on:click={() => changeLocale(loc)}>{name}</button>
                        {/each}
                    </div>-->
                </ul>
            </nav>
        </header>
    {/if}
{/key}


<style>

    @import '/css/common.css';

    /* Header */
    #navbar{
        position: relative;
        top: 0;
        width: min(100%,116rem);
        z-index: 1000000000;
        height: 5.26rem;
    }

    #navbar * {
        font-family: var(--sans-serif, sans-serif);
    }

    /* Logo */
    #logo-container {
        display: flex;
        position: absolute;
        margin-left: 1rem;
        height: 100%;
        max-height: 5.26rem;
        color: black;
        z-index: 1;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
    }

    #navbar-logo {
        height: 3.5rem;
        width: 3.5rem;
        object-fit: contain;
        border-radius: 1rem;
    }

    #navbar-logo-text {
        position: relative;
        width: auto;
        height: 100%;
        line-height: 400%;
        white-space: nowrap;
        text-align: center;
        font-size: 1.4rem;
        color: #292222;
        font-family: var(--sans-serif, sans-serif);
        font-weight: 400;
        padding-left: 1.2rem;
    }

    /* Nav menu */
    #nav {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: white;
        overflow: hidden;
        z-index: 0;
    }
    #menu a {
        display: block;
        padding: 1.2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        color: black;
        font-size: 1.4rem;
    }
    #menu a:hover {
        background-color: rgb(220, 220, 220);
    }

    #menu a:active{
        background-color: #f7aec0;
    }

    #menu li {
        list-style-type: none;
    }

    #nav{
        max-height: 0;
        /*transition: max-height .5s ease-out;*/
    }

    /* Menu Icon */
    #hamb{
        position: absolute;
        cursor: pointer;
        right: 0rem;
        padding: 2.8rem 2rem;
        z-index: 9999;
    }/* Style label tag */

    #hamb-line {
        background: black;
        display: block;
        height: 2px;
        position: relative;
        width: 24px;

    } /* Style span tag */

    #hamb-line::before,
    #hamb-line::after{
        background: black;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all .2s ease-out;
        width: 100%;
    }
    #hamb-line::before{
        top: 5px;
    }
    #hamb-line::after{
        top: -5px;
    }

    #side-menu {
        display: none;
    } /* Hide checkbox */

    /* Toggle menu icon */
    #side-menu:checked ~ nav {
        display: block;
        max-height: 100%;
        padding-top: 5.625rem;
    }

    #side-menu:checked ~ #logo-container {
        position: fixed;
    }

    #side-menu:checked ~ #hamb {
        position: fixed;
    }

    #side-menu:checked ~ #logo-container {
        position: fixed;
    }

    #side-menu:checked ~ #hamb #hamb-line {
        background: transparent;
    }

    #side-menu:checked ~ #hamb #hamb-line::before {
        transform: rotate(-45deg);
        top: 0;
    }

    #side-menu:checked ~ #hamb #hamb-line::after {
        transform: rotate(45deg);
        top: 0;
    }

    /*Localization*/

    #locales {
        position: relative;
    }

    #locales button {
        width: 100%;
        text-align: left;
        height: 4rem;
    }

    #locales button:hover {
        opacity: 0.5;
    }

    #locales-img {
        position: relative;
        top: 0rem;
        height: 2rem;
        margin-left: 1.2rem;
    }

    #locales-dropdown {
        position: absolute;
        display: none;
        top: 5.6rem;
        right: 1.8rem;
        border: #404040 solid 0.1rem;
        padding: 1.4rem;
        background-color: white;
    }

    #locales-dropdown button {
        display: block;
        font-family: var(--sans-serif,sans-serif);
        font-size: 1.3rem;
        width: 100%;
    }

    #locales-dropdown button:hover {
        color: rgb(127, 127, 127);
    }

    #locales-dropdown>:first-child {
        padding-bottom: 0.5rem;
    }

    #locales-dropdown>:nth-child(2) {
        padding-top: 0.5rem;
    }


    /* Responsiveness */
    @media only screen and (min-width: 1500px) {

        #navbar {
            position: relative;
            width: min(95%,116rem);
            left: 50%;
            transform: translateX(-50%);
        }

        #nav {
            max-height: none;
            top: 0;
            position: relative;
            float: right;
            width: fit-content;
            background-color: transparent;
            overflow: visible;
        }

        #side-menu:checked ~ nav {
            padding-top: 0;
        }

        #menu li {
            float: left;
        }

        #menu a:hover {
            background-color: transparent;
            color: rgb(127, 127, 127);
        }

        #menu a {
            padding: 1.2rem;
            padding-top: 1.9rem;
            padding-bottom: 1.9rem;
        }

        #hamb {
            display: none;
        }

        #locales {
            position: relative;
            margin-right: 1.8rem;
        }

        #locales-img {
            top: 0.9rem;
        }

        #locales-dropdown {
            top: 5,7rem;
        }
    }

</style>