import styled from 'styled-components';
import Knob from './components/Knob';

const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <>
      <Panel>
        <Knob
          size={100}
          strokeWidth={4}
          color="darkorange"
        />
      </Panel>
    </>
  );
};

export default App;
