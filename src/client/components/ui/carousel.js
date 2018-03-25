import React from 'react';
import styled from 'styled-components';
import { Carousel, Icon } from 'antd';


const SlickItem = styled.div`
  width: ${props => (props.width / 16) || (280 / 16)}rem;
`;

export const CardSlickItem = ({ children, ...rest }) => (
  <SlickItem
    className="slick-slide"
    {...rest}
  >{children}
  </SlickItem>
);

const Slick = styled(Carousel)`
  width: ${props => (props.size / 16) * props.len || (280 / 16) * 1}rem;
  & .slick-slide {
    text-align: center;
    height: ${props => (props.height / 16) || 160 / 16}rem;
    line-height: 160px;
    overflow: hidden;
  }

  & .slick-slide h3 {
    color: #000;
  }
`;

// const IconWrapper = styled.div`
//   position: relative;
//   padding: 0px 30px;

//   & .anticon {
//     position: absolute;
//     top: 50%;
//     width: 16px;
//     height: 16px;
//     line-height: 1;
//     font-size: 18px;
//     color: rgba(0, 0, 0, .25);
//   }

//   & .anticon:first-child {
//     left: 0;
//   }

//   & .anticon:last-child {
//     right: 0;
//   }
// `;

const PrevIcon = ({ className, onClick }) => (
  <Icon className={className} onClick={onClick} type="left" />);
const NextIcon = ({ className, onClick }) => (
  <Icon className={className} onClick={onClick} type="right" />);

export const KaoSlick = ({ children, height, size, ...rest }) => (
  <Slick
    prevArrow={<PrevIcon />}
    nextArrow={<NextIcon />}
    size={size}
    height={height}
    {...rest}
    arrows="true"
  >{children}
  </Slick>
);
