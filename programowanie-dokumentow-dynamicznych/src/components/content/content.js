import React from 'react';
import ColRight from './col_right/ColRight';
import ColLeft from './col_left/ColLeft'
import ColCenter from './ColCenter/ColCenter'

function Content() {
  return (
    <main role="main" className="flex-shrink-0">
      <div className="container">
        <div className="row no-gutters">
          <ColLeft />
          <ColCenter/>
          <ColRight />
        </div>
      </div>
    </main>
  );
}

export default Content;
