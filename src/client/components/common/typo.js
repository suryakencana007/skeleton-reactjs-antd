import React from 'react';
import styled from 'styled-components';
import {
  KaoFlex,
  KaoCol,
} from 'kao-components/ui';

const typotitle = ({ children, ...rest }) => (
  <KaoFlex justify="center">
    <KaoCol {...rest}>
    {children}
    </KaoCol>
  </KaoFlex>
);


export const TitleContainer = styled(typotitle)`
  font-size: ${props => props.size / 16}rem !important;
  font-weight: ${props => props.bold && 'bold' || 'normal'} !important;
  text-align: ${ props => props.align && props.align || 'center'} !important;
`;

export const SubTitle = styled.p`
  font-size: ${props => props.size / 16}rem !important;
  font-weight: ${props => props.bold && 'bold' || 'normal'} !important;
  text-align: ${ props => props.align && props.align || 'center'} !important;
  margin: 0 !important;
  padding: 0 !important;
`;

export const InitialSVG = (name, size) => {
  name  = name || '';
  size  = size || 60;

  const nameSplit = String(name).toUpperCase().split(' ');
  var initials, canvas, context, dataURI = null;


  if (nameSplit.length == 1) {
      initials = nameSplit[0] ? nameSplit[0].charAt(0) : '?';
  } else {
      initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
  }

  if (window.devicePixelRatio) {
      size = (size * window.devicePixelRatio);
  }

  canvas        = document.createElement('canvas');
  canvas.width  = size;
  canvas.height = size;
  context       = canvas.getContext('2d');

  context.fillStyle = '#fff';
  context.fillRect = (0, 0, canvas.width, canvas.height);
  context.font = `${Math.round(canvas.width / 2)}px Arial`;
  context.textAlign = 'center';
  context.fillStyle = '#000';
  context.fillText(initials, size / 2, size / 1.5);

  dataURI = canvas.toDataURL();
  canvas  = null;

  return dataURI;
};

const imgletter = ({ title, width, ...rest }) => (
  <img src={InitialSVG(title, width)} {...rest} />
);

export const AvatarLetter = styled(imgletter)`
  border: 1px solid #000;
  & .round {
    border-radius: 50%;
  }
`;
