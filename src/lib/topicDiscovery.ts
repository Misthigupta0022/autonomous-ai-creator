import Parser from "rss-parser";

const parser = new Parser();

export interface Topic {
  title: string;
  source: string;
}

export async function discoverTopics(): Promise<Topic[]> {
  const urls = [
    "https://hnrss.org/frontpage",
    "https://openai.com/news/rss.xml",
    "https://feeds.feedburner.com/oreilly/radar",
  ];

  const topics: Topic[] = [];

  for (const url of urls) {
    try {
      const feed = await parser.parseURL(url);

      for (const item of feed.items.slice(0, 5)) {
        topics.push({
          title: item.title || "",
          source: item.link || "",
        });
      }
    } catch {}
  }

  return topics;
}