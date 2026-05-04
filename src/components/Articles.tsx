import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Loader, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Article {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  content?: string;
  categories?: string[];
}

interface RSSItem {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  content?: string;
  categories?: string[];
}

interface RSSResponse {
  items: RSSItem[];
  status?: string;
}

const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};

const stripHtmlTags = (html: string): string => {
  return html.replace(/<[^>]*>/g, '').slice(0, 150);
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);

        const mediumFeed = 'https://medium.com/feed/@obilasam3';
        const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumFeed)}`;

        const response = await fetch(proxyUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch articles (${response.status})`);
        }

        const data: RSSResponse = await response.json();
        if (!data.items || data.items.length === 0) {
          throw new Error('No articles found');
        }

        // Transform and limit to 6 most recent articles
        const transformedArticles: Article[] = data.items.slice(0, 6).map((item) => ({
          title: item.title,
          pubDate: item.pubDate,
          link: item.link,
          description: item.description || item.content || '',
          categories: item.categories || [],
        }));

        setArticles(transformedArticles);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to load articles';
        setError(message);
        console.error('Articles fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section id="articles" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Thoughts on AI, Data Science, and Software Engineering.
            </p>
          </div>

          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <Loader className="w-8 h-8 animate-spin text-accent" />
              <p className="text-muted-foreground">Loading articles...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="articles" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Thoughts on AI, Data Science, and Software Engineering.
            </p>
          </div>

          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <AlertCircle className="w-8 h-8 text-destructive" />
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Could not load articles at this moment</p>
                <p className="text-sm text-muted-foreground/60">{error}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Thoughts on AI, Data Science, and Software Engineering.
            </p>
          </div>
          <a
            href="https://medium.com/@obilasam3"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-accent transition-colors"
          >
            View All on Medium <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => {
            const readingTime = calculateReadingTime(article.description);
            const excerpt = stripHtmlTags(article.description);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full glass border-white/5 hover:border-accent/50 transition-all duration-500 overflow-hidden flex flex-col group">
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 relative z-10">
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {excerpt}...
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {readingTime} min read
                      </Badge>
                      {article.categories && article.categories.length > 0 && (
                        <Badge variant="outline" className="text-xs border-white/10">
                          {article.categories[0]}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="relative z-10 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="text-xs text-muted-foreground/60">
                      {formatDate(article.pubDate)}
                    </span>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent-foreground transition-colors text-sm font-medium"
                    >
                      Read <ExternalLink className="w-3 h-3" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
