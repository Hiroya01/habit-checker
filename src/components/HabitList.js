import React from 'react';

/**
 * Renders a list of habits.
 * @param {Object} props - The props object.
 * @param {Array} props.habits - The array of habits to be rendered.
 * @returns {JSX.Element} - A JSX element representing the habit list.
 */
function HabitList({ habits }) {
  return (
    <ul>
      {habits.map((habit, index) => (
        <li key={index}>{habit}</li>
      ))}
    </ul>
  );
}

export default HabitList;
