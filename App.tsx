'use strict';

import React, { useCallback, useState } from 'react';

export default function Popup() {
  const [status, setStatus] = useState(false);

  const toggle = useCallback(async () => {
    setStatus(!status);
  }, [status]);

  return (
    <div>
      <h1>Repro</h1>
      <button id="toggle-button" onClick={toggle}>
        TURN {status ? 'OFF' : 'ON'}
      </button>
    </div>
  );
}
