import React from 'react';
import { View } from '@tarojs/components';

interface IZbSeparatorProps {
  /**
   * 高度
   */
  height?: number;
  /**
   * 背景颜色
   */
  bgColor?: string;
}

const ZbSeparator = (props: IZbSeparatorProps) => {
  const { height = 10, bgColor = '#fff' } = props;
  return (
    <View
      className='w-full'
      style={{ height: `${height}px`, background: `${bgColor}` }}
    />
  );
};

export default ZbSeparator;
