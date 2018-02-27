import React from 'react';
import Slider from 'react-slick';
import { Icon, Carousel } from 'antd';
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

const Pointer = ({ className, style, onClick, type }) => (
    <Icon type={type} onClick={onClick} />
);
export default class Testimony extends React.Component<{}> {
  render() {
    const settings = {
        arrows: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow: <Pointer type="left" />,
        nextArrow: <Pointer type="right" />
    };
    return (
      <Slider {...settings}>
        {data.map(testimonial => (
            <div key={testimonial.name}>{testimonial.name}</div>
            )
        )}
      </Slider>
    );
  }
}
