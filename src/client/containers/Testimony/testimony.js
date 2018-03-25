import React from 'react';
import {
  KaoSlick,
} from 'kao-components/ui';
import TestimonyItem from './testimony-item';


const data = [
    {
        'photo': 'https://s3-ap-southeast-1.amazonaws.com/image-static-pinjam/activities/88/2017/10/02/e42a46947ecb5d57b0d384d14a1d6d6a.jpg',
        'name': 'Siti Munawaroh',
        'title': 'Ibu Rumah Tangga',
        'message': 'Alhamdulillah, berkat pinjam usaha saya bisa berkembang, terimakasih Pinjam.'
    },
    {
        'photo': 'https://s3-ap-southeast-1.amazonaws.com/image-static-pinjam/activities/88/2017/10/02/0c4d54f96e1f1937ad329d0192c14b2c.jpg',
        'name': 'Fanni Supenda',
        'title': 'Karyawan',
        'message': 'Pinjam ok, sangat membantu, bunga ringan, proses cepat, terima kasih Pinjam, maju terus.'
    },
    {
        'photo': 'https://s3-ap-southeast-1.amazonaws.com/image-static-pinjam/activities/88/2017/10/02/04cb8f4c21659354571fefaf38a6db15.jpg',
        'name': 'Sayyindah Hqk Gading',
        'title': 'Pengusaha',
        'message': 'Pinjam sangat membantu saya di saat saya membutuhkan uang dengan bunga yang sangat ringan.'
    },
    {
        'photo': 'https://s3-ap-southeast-1.amazonaws.com/image-static-pinjam/activities/88/2017/10/02/8c64b339c2fa121e42aea87c6283ca0a.jpg',
        'name': 'Abu Dzar Nicola',
        'title': 'Karyawan',
        'message': 'Pinjam oke banget, ga ribet, prosesnya cepet, recommended banget buat yang perlu dana cepat.'
    },
    {
        'photo': 'https://s3-ap-southeast-1.amazonaws.com/image-static-pinjam/activities/88/2017/10/02/0e12553f1ca176f4e67077da0c7f7b6c.jpg',
        'name': 'Ramadan Satria Sentana',
        'title': 'Mahasiswa',
        'message': 'Sangat membantu pada saat ada kebutuhan mendesak.'
    },
    {
        'photo': 'https://s3-ap-southeast-1.amazonaws.com/image-static-pinjam/activities/88/2017/10/02/b4fcee7865ff05a44e467a868e5b5356.jpg',
        'name': 'David',
        'title': 'Pengusaha',
        'message': 'Oke Oke Oke'
    }
];

export default class Testimony extends React.Component<{}> {
  render() {
    return (
      <KaoSlick len={3} size={280} height={270} infinite={false}>
        <TestimonyItem data={data[0]} />
        <TestimonyItem data={data[1]} />
        <TestimonyItem data={data[2]} />
        <TestimonyItem data={data[3]} />
        <TestimonyItem data={data[4]} />
        <TestimonyItem data={data[5]} />
      </KaoSlick>
    );
  }
}
