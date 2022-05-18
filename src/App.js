import { ImageApprover, Layout, ErrorBoundary } from './components';

export const App = () => {
  return (
    <ErrorBoundary>
      <Layout>
        <ImageApprover />
      </Layout>
    </ErrorBoundary>
  );
};

export default App;
