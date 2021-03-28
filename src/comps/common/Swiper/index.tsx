import React from 'react';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import banner from '@/public/img/banner.jpg';

interface IZbSwiperProps {
  /**
   *  轮播图的条目
   */
  item: any[];
  /**
   *  高度
   */
  height?: number;
  /**
   *  Swiper的style
   */
  style?: React.CSSProperties;
  /**
   *  SwiperItem的style
   */
  itemStyle?: React.CSSProperties;
}

/**
 *
 * @param props 轮播图组件
 * @returns
 */
const ZbSwiper = (props: IZbSwiperProps) => {
  const { item, height, style, itemStyle } = props;

  return (
    <Swiper
      style={{ height: `${height}px`, ...style }}
      circular
      indicatorDots
      indicatorColor='#999'
      indicatorActiveColor='#000'
    >
      {item.map(it => (
        <SwiperItem key={it.id}>
          <Image
            className='w-full'
            style={{ height: `${height}px`, ...itemStyle }}
            mode='aspectFill'
            src={it.url || banner}
          />
        </SwiperItem>
      ))}
    </Swiper>
  );
};

export default ZbSwiper;
