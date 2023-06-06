import React from 'react';
import { useState } from 'react';

function LikeButton() {
    const [count, setCount] = useState(0);
    const colorsArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  return (
    <div>
        <button style={{backgroundColor: colorsArray[count % 6]}}onClick={() => setCount(count + 1)}> {count} Likes</button>
    </div>
  )
}

export default LikeButton
