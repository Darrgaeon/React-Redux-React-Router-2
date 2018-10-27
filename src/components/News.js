import React from "react";
import Article from "../components/article";
import { API_NEWS } from "../constants/Default";

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    fetch(API_NEWS)
      .then(res => res.json())
      .then(el => this.setState({ articles: el.articles }));
  }

  render() {
    return (
      <div>
        <h1 className="news_title">Новости</h1>
        { this.state.articles.map((article, index) => article.urlToImage !== null ?
          <Article key={index}
                   title={article.title}
                   description={article.content}
                   url={article.url}
                   urlToImage={article.urlToImage}
          /> : null
        )}
      </div>
    );
  }
}

export default News;