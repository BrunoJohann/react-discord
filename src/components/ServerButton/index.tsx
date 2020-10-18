import React from 'react';

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
  return (
      <Button
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={selected ? 'active' : ''}
      >
          {isHome && 
            <a href='https://svgshare.com/s/Pb9' >
                <img src='https://svgshare.com/i/Pb9.svg' alt='' title='' />
            </a>}
      </Button>
  );
}

export default ServerButton;