import React from 'react';
import { View, Text } from '@tarojs/components';
import ZbSeparator from '@/comps/common/Separator';

const QuestionContent = () => {
  return (
    <View className='p-2'>
      <View className='w-full text-xs divide-gray divide-solid divide-y-0'>
        专项只能练习
      </View>
      <ZbSeparator height={1} bgColor='#ececec' />
      <View className='text-sm pb-1'>
        <Text className='text-purple-600 pr-10px'>(单选题)</Text>
        这里是题目：一加一等于几呢？
      </View>
      <View className='text-xs'>这里是答案选项</View>
    </View>
  );
};

export default QuestionContent;
