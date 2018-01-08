import React from 'react';
// import styled from 'styled-components';
import { Modal, Card } from 'antd-mobile';
import { KaoButton, KaoSpace, KaoCard } from 'kao-components/ui';
import config from 'kao-config';

const alert = Modal.alert;

const OnKlik = () => {
  console.log('roooo');
  alert('Delete', 'Are you sure???', [
    { text: 'Cancel', onPress: () => console.log('cancel') },
    { text: 'Ok', onPress: () => console.log('ok') },
  ]);
};

const HelloWorld = () => {
  console.log('HelloWorld');
  return (
    <div>
	Hai, Hello World really excetiing ok ok
      <KaoButton>PUSH {config.SEO.title}</KaoButton>
      <KaoSpace />
      <KaoButton
        type="primary"
        onClick={OnKlik}
      > Button from Hell Yeah
      </KaoButton>
      <KaoSpace />
      <KaoCard>
        <Card.Header
          title="This is title"
          thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
      </KaoCard>
    </div>
  );
};

export default HelloWorld;
