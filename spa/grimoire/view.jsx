var Grimoire = React.createClass({
    requiredScripts: [
        'spa/loader.jsx',
        'spa/grimoire/grimuSD.jsx',
        'spa/grimoire/grimCrafting.jsx',
        'spa/grimoire/grimBazar.jsx',
        'spa/grimoire/grimUnifi.jsx'
    ],
    
    render() {
        return (
            <section className="unifiDapp">
                <DappMenu />
                <section className="grimoireWelcome">
                    <section className="grimoireWelcomeIntern">
                        <img src="assets/img/m0.png"></img>
                        <article>
                            <h2>The Grimoire</h2>
                            <h6><b>The comprehensive giude to use the Uniswap Magic</b> <br></br>Here, you can find every info needed to understand UniFi and to integrate your dapp with this protocol.</h6>
                        </article>
                    </section>
                </section>
                <section className="grimoireBoxAll">
                    <section className="grimoireBox">
                        <ul className="grimoireIndex">
                            <h2>Index</h2>
                            <a href="#grimuSD"><img src="assets/img/m4.png"></img><b>Stable Coin:</b> Uniswap State Dollar</a>
                            <a href="#grimCraft"><img src="assets/img/m2.png"></img><b>Crafting and ILO:</b> Programmable Liquidity</a>
                            <a href="#grimBaz"><img src="assets/img/m1.png"></img><b>Bazaar:</b> Uniswap Advanced Listing</a>
                            <a href="#grimUniFi"><img src="assets/img/maghetto.png"></img><b>UniFi Strategy:</b> Token and WP</a>
                        </ul>
                    </section>

                </section>
                <GrimuSD />
                <GrimCrafting />
                <GrimBazar />
                <GrimUnifi />
            </section>
        );
    }
});