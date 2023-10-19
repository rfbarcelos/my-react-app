import Title from './title';
import ModuleDetails from './moduleDetails';
import IdadeCalculator from '../utils/age';

function HelloWorld() {
  return (
    <header>
      <Title />
      <ModuleDetails />
      <IdadeCalculator />
    </header>
  );
}

export default HelloWorld;
