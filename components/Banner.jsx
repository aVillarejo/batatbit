import {banner} from '../styles/Banner.module.css';
import Image from 'next/image'
const Banner = () => (
  <figure className={banner}>
    <h2>Conócelo hoy.</h2>
    <Image
      src="/assets/img/bitcoinbaby2x.jpg"
      alt="banner-img"
      layout="fill"
      objectFit="cover"
      />
  </figure>
)

export default Banner;
