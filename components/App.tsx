import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import Theme from 'components/Theme';
import ErrorHandler from 'components/views/error/ErrorHandler';
import FullPageErrorHandler from 'components/views/error/FullPageErrorHandler';
import MainView from 'components/views/MainView';
import PageHeaders from 'components/views/PageHeaders';
import store from '~/redux';

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline>
        <ErrorHandler errorHandler={FullPageErrorHandler}>
          <Provider store={store}>
            <PageHeaders />
            <MainView />
          </Provider>
        </ErrorHandler>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
