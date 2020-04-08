import React from 'react';

import GlobalStateProvider from './src/hooks/GlobalStateProvider';

export const wrapRootElement = ({element}) => (
    <GlobalStateProvider>
        {element}
    </GlobalStateProvider>
)