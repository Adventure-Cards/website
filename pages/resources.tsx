// Imports
import {
  derivativesList,
  guildsList,
  marketsList,
  resourceList,
  communityList
} from "@utils/lists"; // Lists
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/Resources.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

const resources = [
  {
    title: "Communities",
    description: "Spaces run by the community for Adventure Cards enthusiasts to share news and build together:",
    list: communityList,
  },
  {
    title: "Developer Tooling",
    description: "Aggregated resources built by the Adventure Cards community:",
    list: resourceList,
  },
  {
    title: "Guilds",
    description: "Guild divided by items and attributes:",
    list: guildsList,
  },
  {
    title: "Market Trackers",
    description: "Tools to keep track of Adventure Cards by attributes:",
    list: marketsList,
  },
  {
    title: "Derivative Projects",
    description: "Projects that remix or build on top of Adventure Cards. Because Adventure Cards is decentralized, there are *no* 'official' derivatives, tokens, or DAOs. Please note that this list is community submitted and projects are *not* audited. Large errors are possible, up to and including loss of funds. Do your own research and proceed with caution:",
    list: derivativesList,
  },
];

export default function Resources(): ReactElement {
  return (
    <Layout>
      {resources.map(({ title, description, list }, i) => {
        return (
          list.length && list.length > 0 ?
          <div key={i} className={styles.resources}>
            <h2>{title}</h2>
            <p>{description}</p>

            <ul>
              {list.map(({ name, description, url }, i) => {
                // For each resource, render link and description
                return (
                  <li key={i}>
                    <p>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {name}
                      </a>{" "}
                      — {description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div> : <span/>
        );
      })}
    </Layout>
  );
}
