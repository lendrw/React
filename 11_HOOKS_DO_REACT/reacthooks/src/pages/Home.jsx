// useContext
import { useContext } from 'react';
import { SomeContext } from '../component/HookUseContext';

import HookUseState from '../component/HookUseState';
import HookUseReducer from '../component/HookUseReducer';
import HookUseEffect from '../component/HookUseEffect';
import HookUseRef from '../component/HookUseRef';
import HookUseCallback from '../component/HookUseCallback';
import HookUseMemo from '../component/HookUseMemo';
import HookUseLayoutEffect from '../component/HookUseLayoutEffect';
import HookUseImperativeHandle from '../component/HookUseImperativeHandle';

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState/>
      <HookUseReducer/>
      <HookUseEffect/>
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookUseRef/>
      <HookUseCallback/>
      <HookUseMemo/>
      <HookUseLayoutEffect/>
      <HookUseImperativeHandle/>
    </div>
  )
}

export default Home;
