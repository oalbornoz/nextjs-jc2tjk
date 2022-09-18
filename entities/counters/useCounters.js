import { useEffect, useState } from 'react';
import { CounterService } from '../../services/CounterService';

export function useCounters() {
  const [isLoading, setIsLoading] = useState(false);
  const [counters, setCounters] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const res = await CounterService.getCounters();
    setCounters(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const refetch = () => {
    getData();
  };

  const updateCounters = async (counters) => {
    setIsLoading(true);
    await Promise.all(
      counters.map(({ id, value }) => CounterService.updateCounter(id, value))
    );
    setIsLoading(false);
  };

  const addCounter = async () => {
    setIsLoading(true);
    const res = await CounterService.addCounter();
    setCounters([...counters, res.data]);
    setIsLoading(false);
  };

  return {
    isLoading,
    counters,
    refetch,
    updateCounters,
    addCounter,
  };
}
