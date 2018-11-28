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
      case 'time':
        return <ViewTime {...props}>{children}</ViewTime>;
      case 'address':
        return <ViewAddress {...props}>{children}</ViewAddress>;
      case 'aside':
        return <ViewAside {...props}>{children}</ViewAside>;
      default:
        return <ViewUI {...props}>{children}</ViewUI>;
    }
  }
  render() {
    return this.renderTag();
  }
}

const ViewArticle = styled.article`${style}`;
const ViewForm = styled.form`${style}`;
const ViewSection = styled.section`${style}`;
const ViewTime = styled.time`${style}`;
const ViewAddress = styled.address`${style}`;
const ViewAside = styled.aside`${style}`;
const ViewUI = styled.div`${style}`;

View.defaultProps = {
  tag: 'div',
};

View.propTypes = {
  /** Define o conteúdo do View. */
  children: PropTypes.any,
  /** Define a tag do View. */
  tag: PropTypes.oneOf(['div', 'article', 'form', 'section', 'time', 'address', 'aside']),
};
