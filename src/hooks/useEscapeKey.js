import React from 'react'

export default function useEscapeKey (closeCallback){
  React.useEffect(() => {
    const closeOnKeypress = (event) => {
      const key = event.key;

      if (key === 'Escape') {
        closeCallback()
      }
    };

    // Attach the event listener
    window.addEventListener('keydown', closeOnKeypress);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('keydown', closeOnKeypress);
    };
  }, [])
}