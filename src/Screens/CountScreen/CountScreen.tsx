import React, { FunctionComponent, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { counterSelector } from './selectors';
import { Counter, CounterCell, CounterRow, CounterButton } from './styles';
import { increment, decrement } from './reducer';

export const CountScreen: FunctionComponent = () => {
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();
  const onIncrement = useCallback(() => {
    dispatch(increment(1));
  }, [dispatch]);
  const onDecrement = useCallback(() => {
    dispatch(decrement(1));
  }, [dispatch]);

  return (
    <SafeAreaView>
      <Counter>
        <CounterRow>
          <CounterCell>{count}</CounterCell>
        </CounterRow>
        <CounterRow>
          <CounterButton onPress={onIncrement}> + </CounterButton>
          <CounterButton onPress={onDecrement}> - </CounterButton>
        </CounterRow>
      </Counter>
      <Text>{count}</Text>
    </SafeAreaView>
  );
};
