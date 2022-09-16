import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardAuthor, CardData, CardTitle } from "./style";

export interface MediaCardProps {
  title: string;
  description: string;
  author: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
}

export default function MediaCard({
  title,
  description,
  author,
  urlToImage,
  publishedAt,
}: MediaCardProps) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={urlToImage || "https://www.defensoria.to.def.br/no_image.jpg"}
        alt={title}
      />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography> <br />
        <CardAuthor>Autor: {author}</CardAuthor>  <br />
        <CardData>{new Date(publishedAt).toLocaleString("pt-br")}</CardData>
      </CardContent>
    </Card>
  );
}
