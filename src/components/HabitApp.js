import React, { useState } from 'react';
import HabitList from './HabitList';
import AddHabitForm from './AddHabitForm';

function HabitApp() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);// 習慣の配列に新しい習慣を追加
  };

  return (
    <div>
      <h1>習慣チェッカーアプリ</h1>
      <AddHabitForm onAddHabit={addHabit} />// AddHabitFormコンポーネントを呼び出し
      <HabitList habits={habits} />
    </div>
  );
}

export default HabitApp;
