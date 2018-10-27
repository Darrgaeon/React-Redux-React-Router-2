import React from 'react';
import { Jumbotron, } from 'reactstrap';
import * as PropTypes from "prop-types";

const Article = (props) => {
  const {urlToImage, title, url, description} = props;

  return (
    <Jumbotron>
      <div className='img-wrap'>
        <img  src={urlToImage}/>
      </div>
      <h3 className="display-5">{title}</h3>
      <a className="title" href={url}>Подробнее тут</a>
      <hr className="my-2" />
      <p>{description}</p>
    </Jumbotron>
  );
};

Article.propsTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired
};

export default Article;