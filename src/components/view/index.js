import React, { Component } from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';

export class View extends Component {
  renderTag() {
    const { tag, children, ...props } = this.props;

    switch (tag) {
      case 'article':
        return <ViewArticle {...props}>{children}</ViewArticle>;
      case 'form':
        return <ViewForm {...props}>{children}</ViewForm>;
      case 'section':
        return <ViewSection {...props}>{children}</ViewSection>;
      case 'aside':
        return <ViewAside {...props}>{children}</ViewAside>;
      case 'div':
        return <ViewDiv {...props}>{children}</ViewDiv>;
      default:
        return <ViewComponent {...props}>{children}</ViewComponent>;
    }
  }
  render() {
    return this.renderTag();
  }
}

const ViewArticle = styled.article`${style}`;
const ViewForm = styled.form`${style}`;
const ViewSection = styled.section`${style}`;
const ViewAside = styled.aside`${style}`;
const ViewDiv = styled.div`${style}`;
const ViewComponent = styled.span`${style}`;

View.defaultProps = {
  tag: 'span',
  children: null,
};

View.propTypes = {
  /** The content og the View. */
  children: PropTypes.any,
  /** The tag of the View on the web. */
  tag: PropTypes.oneOf(['div', 'article', 'form', 'section', 'aside', 'span']),
};
