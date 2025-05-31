// import React from 'react';
// import Layout from './components/layout/Layout';
// import { ThemeProvider } from './components/ui/ThemeProvider';

// function App() {
//   return (
//     <ThemeProvider>
//       <Layout />
//     </ThemeProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ThemeProvider } from './components/ui/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
