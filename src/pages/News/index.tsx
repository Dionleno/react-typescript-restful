import { Container } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import MediaCard from "../../components/MediaCard";
import { getNewsApi } from "../../services/api/endpoints/newsEndpoints";
import { NewsList } from "./style";

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);

  const getNews = useCallback(async () => {
    const { articles } = await getNewsApi();
    setNews(articles);
  }, []);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <Container>
      <NewsList>
        {
          /* Adding filter to remove author null */
          news
            .filter((item) => item.author)
            .map((item, key) => {
              return <MediaCard {...item} key={key} />;
            })
        }
      </NewsList>
    </Container>
  );
};

export default NewsPage;
