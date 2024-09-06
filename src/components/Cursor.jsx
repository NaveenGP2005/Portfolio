// CustomCursor.js
import React, { useEffect, useRef } from 'react';
import './Cursor.css'; // Import cursor styles

function CustomCursor() {
  const cursorRef = useRef(null); // Reference to the cursor element

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    // Add event listener for mouse movement
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      ref={cursorRef} // Attach the ref to the cursor element
    />
  );
}

export default CustomCursor;
