import React from 'react';
import { View } from '@tarojs/components';
import ZbQuestion from '@/comps/question';
import { QUESTION_TYPE_KEY } from '@/comps/question/constants';

const QuestionContent = () => {
  const question = {
    topic: '专项训练',
    list: [
      {
        title: '人类社会经历了三次科技革命，第一次科技革命的标志是 （）',
        type: QUESTION_TYPE_KEY.RADIO,
        answer: [
          { key: 'A', value: '蒸汽机的发明' },
          { key: 'B', value: '纺织机的发明' },
          { key: 'C', value: '电力的发明' },
          { key: 'D', value: '电子计算机的发明' },
        ],
        rightAnswer: {
          key: ['A'],
          analyze: '蒸汽机的发明,标志着第一次科技革命',
        },
      },
      {
        title: '下列现象，是因为地球公转而产生的是 （）',
        type: QUESTION_TYPE_KEY.CHECKBOX,
        answer: [
          { key: 'A', value: '昼夜的变化' },
          { key: 'B', value: '四季的变化' },
          { key: 'C', value: '日食' },
          { key: 'D', value: '月食' },
        ],
        rightAnswer: {
          key: ['B', 'C', 'D'],
          analyze: '本题考查科技常识',
        },
      },
    ],
  };
  return (
    <View className="h-screen">
      <ZbQuestion {...question} />
    </View>
  );
};

export default QuestionContent;
