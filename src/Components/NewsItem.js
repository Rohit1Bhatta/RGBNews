import React from "react";
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
class NewsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card mb-3 my-3 mx-6 p-2" style={{ height: "auto" }} >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left:'90%', zIndex:'2'}}>
                {source}
                
              </span> 
          <img
            src={
              !imageUrl
                ? "https://www.shutterstock.com/image-photo/royalty-high-quality-free-stock-260nw-768316276.jpg"
                : imageUrl
            }
            alt="Card-img-cap"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn  btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

NewsItem.propTypes = propTypes;
NewsItem.defaultProps = defaultProps;
// #endregion

export default NewsItem;
