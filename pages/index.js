import styled from 'styled-components';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const App = styled.body`
  background-color: black;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;


export default () => {
  return (
    <App>
      <Layout>
        <h1>Start Learning</h1>
        <Navbar />
      </Layout>
    </App>
  );
}