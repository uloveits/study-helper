import React from 'react';
import { View, Button, Text } from '@tarojs/components';
import { Observer, useLocalStore } from 'mobx-react';

import ZbSwiper from '@/comps/common/Swiper';

import counter from '../../store/counter';

import './index.scss';
import ZbSeparator from '@/comps/common/Separator';

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface Index {
  props: PageStateProps;
}

const Index = () => {
  const localCounter = useLocalStore(() => counter);

  React.useEffect(() => {
    console.log('localCounter', localCounter);
  });

  const increment = () => {
    localCounter.increment();
  };

  const decrement = () => {
    localCounter.decrement();
  };

  const incrementAsync = () => {
    localCounter.incrementAsync();
  };

  return (
    <View>
      <View className='p-2'>
        <ZbSwiper
          item={[1, 2]}
          height={120}
          itemStyle={{ borderRadius: '10px' }}
        />
      </View>
      <View>
        <ZbSeparator />
      </View>
      <View className='pr-10'>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={incrementAsync}>Add Async</Button>
        <Observer>{() => <Text>{localCounter.counter}</Text>}</Observer>
      </View>
    </View>
  );
};

export default Index;
