import React from 'react';
import { View, Text } from '@tarojs/components';
// import { Observer, useLocalStore } from 'mobx-react';

import ZbSwiper from '@/comps/common/Swiper';

// import counter from '../../store/counter';
import ZbSeparator from '@/comps/common/Separator';
import ZbGrid from '@/comps/common/Grid';
import ZbTitle from '@/comps/common/Title';
import ZbCard from '@/comps/common/Card';

import tableIcon from '@/public/img/table.png';
import './index.scss';

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
  // const localCounter = useLocalStore(() => counter);

  // React.useEffect(() => {
  //   console.log('localCounter', localCounter);
  // });

  // const increment = () => {
  //   localCounter.increment();
  // };

  // const decrement = () => {
  //   localCounter.decrement();
  // };

  // const incrementAsync = () => {
  //   localCounter.incrementAsync();
  // };

  return (
    <View>
      <View className="p-2">
        <ZbSwiper data={[1, 2]} height={120} itemStyle={{ borderRadius: '10px' }} />
      </View>
      <ZbSeparator bgColor="#ededed" />
      <View>
        <ZbGrid
          data={[
            { url: '', title: '上传题库' },
            { url: '', title: '进入考试', route: '/pages/question/content/index' },
            { url: '', title: '客服导题' },
            { url: '', title: '邀请特权' },
          ]}
        />
      </View>
      <ZbSeparator bgColor="#ededed" />
      <ZbTitle icon={<Text className="fa fa-game pr-10px text-purple-700" />} title="游戏专区" />
      <ZbCard columnNum={2} data={[{ url: tableIcon, title: '舒尔特方格', remark: '锻炼 [专注力]', route: '/pages/schulte/index' }]} />

      {/* <View className="pr-10">
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={incrementAsync}>Add Async</Button>
        <Observer>{() => <Text>{localCounter.counter}</Text>}</Observer>
      </View> */}
    </View>
  );
};

export default Index;
