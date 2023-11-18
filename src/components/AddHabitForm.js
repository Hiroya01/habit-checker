import React, { useState } from 'react';

/**
 * AddHabitFormコンポーネントは、新しい習慣を追加するためのフォームを表示します。
 * @param {Object} props - Reactコンポーネントのprops
 * @param {Function} props.onAddHabit - 習慣を追加するためのコールバック関数
 * @returns {JSX.Element} AddHabitFormコンポーネントのUI
 */
function AddHabitForm({ onAddHabit }) {
  const [habit, setHabit] = useState('');// 習慣の入力値をstateとして管理

  const handleSubmit = (event) => { // フォームが送信されたときの処理 
    event.preventDefault();// デフォルトのイベントをキャンセル
    onAddHabit(habit);// 親コンポーネントから渡されたコールバック関数を実行
    setHabit('');// 習慣の入力値をリセット
  };

  return (
    <form onSubmit={handleSubmit}>// フォームが送信されたときにhandleSubmit関数を実行
      <input 
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="新しい習慣"
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default AddHabitForm;
