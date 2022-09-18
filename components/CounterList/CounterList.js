import { useEffect, useState } from 'react';
import { useCounters } from '../../entities/counters/useCounters';
import { CounterItem } from '../CounterItem';
import TotalComponent from '../TotalComponent/TotalComponent';
import { InfinitySpin } from 'react-loader-spinner';
import BasicButton from '../BasicButton/BasicButton';

export default function CounterList() {
  const { counters, isLoading, addCounter, updateCounters, refetch } =
    useCounters();

  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    setLocalData(counters || []);
  }, [counters]);

  const onIncrement = (id) => {
    setLocalData((oldLocalData) => {
      return oldLocalData.map((counter) => {
        return {
          ...counter,
          value: counter.id === id ? counter.value + 1 : counter.value,
        };
      });
    });
  };

  const onDecrement = (id) => {
    setLocalData((oldLocalData) => {
      return oldLocalData.map((counter) => {
        return {
          ...counter,
          value: counter.id === id ? counter.value - 1 : counter.value,
        };
      });
    });
  };

  const onSaveCounters = () => {
    updateCounters(localData);
  };

  const onAddCounter = () => {
    addCounter();
  };

  const onRefreshCounter = () => {
    refetch();
  };

  return (
    <div>
      {localData?.map((counter) => (
        <CounterItem
          {...counter}
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
      <TotalComponent data={localData} />
      <BasicButton onClick={onSaveCounters}>Save</BasicButton>
      <BasicButton onClick={onAddCounter}>Add</BasicButton>
      <BasicButton onClick={onRefreshCounter}>Refresh</BasicButton>
      <br />
      {isLoading && (
        <InfinitySpin
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}
    </div>
  );
}
