import React from 'react';
import { Modal } from 'antd';
import { KaoFlex, KaoRow, KaoCol, KaoContainer, KaoButton, KaoSpace, KaoCard } from 'kao-components/ui';
import config from 'kao-config';


const OnKlik = () => {
  console.log('roooo');
  // alert('Delete', 'Are you sure???', [
  //   { text: 'Cancel', onPress: () => console.log('cancel') },
  //   { text: 'Ok', onPress: () => console.log('ok') },
  // ]);

  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
};



const HelloWorld = () => {
  console.log('HelloWorld');
  return (
    <KaoContainer>
      <KaoFlex justify="center">
        <KaoCol span={24}>
          Hai, Hello World really excetiing ok ok
          <KaoSpace size="xl" />
          <KaoCard
            hoverable
            bordered={false}
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          />
        </KaoCol>
      </KaoFlex>
      <KaoSpace size="xl" />
      <KaoRow>
        <KaoCol span={12}>
          <KaoButton type="primary">PUSH {config.SEO.title}</KaoButton>
        </KaoCol>
        <KaoCol span={12}>
          <KaoButton type="primary">PUSH oit{config.SEO.title}</KaoButton>
        </KaoCol>
      </KaoRow>
      <KaoSpace />
      <KaoFlex justify="center">
        <KaoCol span={24}>
          <KaoButton
            type="primary"
            onClick={OnKlik}
          > Button from Hell Yeah
          </KaoButton>
        </KaoCol>
      </KaoFlex>
      <KaoSpace size="xl" />
    </KaoContainer>
  );
};

export default HelloWorld;
