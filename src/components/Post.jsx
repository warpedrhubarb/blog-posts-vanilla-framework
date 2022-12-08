import {getFormattedDate} from "../utils/getFormattedDate";
import {getArticleHeader} from "../utils/getArticleHeader";

export function Post({ item }) {
  const { articleHeader, articleHeaderLink } = getArticleHeader(item);
  const itemLink = item.link;
  const itemImageSrc = item.featured_media;
  const itemTitle = item.title.rendered;
  const author = item._embedded.author[0].name;
  const authorLink = item._embedded.author[0].link;
  const postDate = getFormattedDate(item.date);

  return (
    <div className="col-4 p-card--highlighted">
      <header className="p-card__header">
        <a href={articleHeaderLink}>
          <h4 className="p-muted-heading">{articleHeader}</h4>
        </a>
      </header>

      <div className="p-card__content">
        <a href={itemLink}>
          <img className="p-card__image" src={itemImageSrc} alt="Article" />
        </a>
        <div className="p-heading-container">
          <h3 className="p-heading--4">
            <a href={itemLink}>{itemTitle}</a>
          </h3>
        </div>
        <p>
          <em>By <a href={authorLink}>{author}</a> on {postDate}</em>
        </p>
      </div>

      <hr className="is-muted" />
      <p className="p-card__footer">Article</p>
    </div>
  );
}
