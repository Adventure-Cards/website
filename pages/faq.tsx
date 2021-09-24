// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        {/* What is PROJECT ? */}
        <div className={styles.faq__item}>
          <h3>What are Adventure Cards?</h3>
          <p>
            Adventure Cards is a collection of 8,000 unique card decks,
            originally released by{" "}
            <a
              href="https://twitter.com/pm/status/1440358659536556040?s=20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paul McKellar
            </a>
            . At release, anyone could claim up to 2 decks for just gas, and the
            first decks were claimed in under 14 minutes. Each deck includes 45 
            procedurally generated cards, enough to play a full game:
            common cards (for playability) and rares to keep it interesting.
          </p>
          <p>
            Adventure Cards is an unaudited project. Bags #0 to #4887 were claimable by
            anyone and #7778 to #8000 are currently reserved for the owner.
          </p>
        </div>

        {/* Why is PROJECT special? */}
        <div className={styles.faq__item}>
          <h3>Why are Adventure Cards special?</h3>
          <p>
            Adventure Cards is the first collectable card game stored entirely on chain.
            Each NFT includes 45 procedurally generated cards, enough to play a full game.
            Inspired by LOOT and MtG, Adventure cards are crypto primitives.
          </p>
        </div>

        {/* Can I build with PROJECT? */}
        <div className={styles.faq__item}>
          <h3>Can I build with Adventure Cards?</h3>
          <p>
            Yes, you are free to use Adventure Cards in any way you want. For inspiration,
            see existing{" "}
            <Link href="/resources">
              <a>resources</a>
            </Link>{" "}
            put together by the community.
          </p>
        </div>

        {/* Am I priced out of PROJECT? */}
        <div className={styles.faq__item}>
          <h3>Am I priced out of Adventure Cards?</h3>
          <p>
            Not at all. There are still 2,890 decks unminted with more updates on
            a fair release soon ...
          </p>
        </div>

        {/* How do I value PROJECT bags? */}
        <div className={styles.faq__item}>
          <h3>How do I value Adventure Cards?</h3>
          <p>
            They say that value is always in the eye of the beholder. Adventure Cards is no
            different, with no explicit rarities specified at launch. How you
            value a deck is up to you.
          </p>
          <p>
            Still, the community has begun to devise many mechanisms by which to
            assess the rarity of bags and their items. More to come soon ...
          </p>
          <p>Remember, use your own due your own research (DYOR) always.</p>
        </div>
      </div>
    </Layout>
  );
}
