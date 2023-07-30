export default function LorumRules() {
    return (
        <main className="flex items-center flex-col p-12 gap-y-6 h-screen">
            <h1 className="text-3xl font-bold">
                Lorum
                {/* {params.name.toUpperCase()} */}
            </h1>
            <h2>Overview</h2>
            <p>Lorum consists of 8 different individual games or contracts, each with its own aim and rules. Each game is played four times, making a total of 32 games in a session. A session may thus last about 1½ hours. Dealing and play are in clockwise order. The winner of a trick leads to the next. Suit must be followed; if that is not possible, any card may be discarded. The trick is taken by the highest card of the led suit, and there are no trumps.</p>
            <h2>Contracts</h2>
            <ol><li><b>No Hearts</b>. In No Hearts (<i>Herzlos</i><sup id="cite_ref-paridons_5-0" className="reference"><a href="#cite_note-paridons-5">[5]</a></sup>) also called Reds (<i>Rote</i>), the aim is to avoid winning Hearts or "reds". A red may not be led to the first trick, unless <a href="/wiki/Forehand_(card_player)" className="mw-redirect" title="Forehand (card player)">forehand</a> only has reds. Players may not discard a red to the first trick unless they only have reds. In the succeeding tricks, reds may be discarded if a player has no card of the led suit. Each red card taken in tricks scores 1 point.</li>
                <li><b>Obers</b>. The aim is in Obers (<i>Ober</i> or <i>Damenlos</i><sup id="cite_ref-paridons_5-1" className="reference"><a href="#cite_note-paridons-5">[5]</a></sup>) to avoid capturing Obers. Each Ober is worth 2 points. An Ober may not be led to the first trick, nor may an Ober be laid to it unless the player only has an Ober in the led suit (i.e. the Ober is a <a href="/wiki/Singleton_(cards)" className="mw-redirect" title="Singleton (cards)">singleton</a>). In the remaining tricks, Obers may be discarded at any stage if a player cannot follow suit.</li>
                <li><b>No Tricks</b>. In No Tricks (<i>Stichlos</i><sup id="cite_ref-paridons_5-2" className="reference"><a href="#cite_note-paridons-5">[5]</a></sup>), also just Tricks (<i>Stiche</i>), the aim is to avoid taking any tricks. Each trick is worth a point.</li>
                <li><b>Lorum</b>. This contract, also called <b>Kirako</b> ("domino"), is, like the last deal in most compendium games, a <a href="/wiki/Domino_(card_game)" title="Domino (card game)">Domino</a>-type contract. Forehand leads any card to the table. The next player in turn must play either a card of the same rank in another suit or lay off the next highest card of the same suit next to the first card. An Ace follows a Seven. A player unable to play a card, misses a turn. Players may not miss a turn if they are able to play. Every turn missed costs one point. As soon as the first player goes out by laying off his or her last card, the remaining players score a point for each card still held in the hand. Alternatively, the deal can continue until each player in succession goes out. In this variation, the second player to go out scores 1 point per card, the third player, 2 points per card and the last player, 3 points per card.
                    <ul><li>Variation: <i><a href="/wiki/Unteranlegen" className="mw-redirect" title="Unteranlegen">Unteranlegen</a></i>. The first card played must be an Unter (a common practice in Domino games). Players then either lay another Unter or the next higher or lower card in suit sequence. The four suit sequences are terminated by the 7 at one end and the Ace at the other.</li></ul></li>
            </ol>
            {/* <p>In addition, one or more (typically four) of the following contracts are usually inserted between the third deal above (No Tricks) and the final deal (Lorum).<sup id="cite_ref-FOOTNOTEParlett2008147/148_6-0" className="reference"><a href="#cite_note-FOOTNOTEParlett2008147/148-6">[6]</a></sup></p>
            <ul><li><b>First and Last Trick</b>. In First and Last (<i>Erster und letzter Stich</i>) the aim is to avoid taking the first and last tricks; each of which counts as 4 (variation: 5) points. <i>Short variant:</i> The pack is well shuffled, and only two cards are dealt to each player, the stock being given to the next dealer. The first player to lead plays one of the two cards held. The winner of the trick then leads to the 'last' trick. Suit must be followed if possible. Each trick scores 4 (or 5) points.</li>
                <li><b>Fifth Trick</b>. In Fifth Trick (<i>Fünfter Stich</i>) players must avoid taking the fifth trick, after which the deal is ended. It scores 8 points.</li>
                <li><b>Seventh Trick</b>. As Fifth Trick except players avoid taking the seventh trick.</li>
                <li><b>Red King</b>. The aim in Red King, also called Red King-less (<i>Herz-König-los</i>),<sup id="cite_ref-paridons_5-3" className="reference"><a href="#cite_note-paridons-5">[5]</a></sup> is to avoid capturing the 'red king' (<i>Roter König</i>) i.e. the King of Hearts. It scores: 16 points when captured in the first trick, 8 points in the second to seventh tricks, 32 points in the last trick and 64 points if announced before playing the last trick.
                    <ul><li>Variation: <i>Der Blinde</i>. In the 'blind' variation, the cards are not turned over but only seen individually on being played. Whoever captures the red king scores 5 points. Players who look at their cards are penalised 5 points and the cards are reshuffled and redealt.</li></ul></li>
                <li><b>Hairy Ape</b>. As Red King, but players hold their cards facing their opponents; then play cards at random. If two or more are of the same suit, the highest wins, otherwise each card 'takes itself. The player who take the red King scores 8 points.</li>
                <li><b>Train</b> (<i>Vonat</i> or <i>Suta</i><sup id="cite_ref-paridons_5-4" className="reference"><a href="#cite_note-paridons-5">[5]</a></sup>). As Hundred in <a href="/wiki/Rosbiratschka" title="Rosbiratschka">Rosbiratschka</a>. Using the <a href="/wiki/Ace-Ten_scoring_system" className="mw-redirect" title="Ace-Ten scoring system">Ace-Ten scoring system</a>, card points are added cumulatively as they are played. The first to exceed 25 wins 1 point, 50 wins 2 points, 75 wins 3 points and 100 wins 4 points.</li>
                <li><b>Quart(el)</b> or <b>Kvart</b>. In Quartel<sup id="cite_ref-paridons_5-5" className="reference"><a href="#cite_note-paridons-5">[5]</a></sup> the idea is that, to the first card played, the 3 next higher cards of the same suit must be added in sequence by whoever has them until and unless no-one has the next higher card. Player do not need to play in clockwise order. The trick is won by the player who placed the last card in the sequence and that player then leads to the next trick. An eligible player who has the highest card of its suit in his or her hand at that stage of the game  (usually an Ace, but also a Seven if the Eight of the same suit has already been played), can put it away as "high" ("clear"). The game ends when the first player goes out by discarding his or her last card. This may not necessarily be the current player. The cards remaining in the other players' hands score 1 point each.</li>
                <li><b>All Bad</b> (<i>Mindenrossz</i>). A combination of several contracts e.g. No Tricks, No Hearts, No Obers and No Red King.</li></ul> */}
            <p>Update comming soon...</p>
        </main>
    )
}