import { useShallow } from 'zustand/react/shallow';
import { WhiteCard } from '../../components';
import { useBearStore } from '../../stores';

export const BearPage = () => {

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBears />
        <PolarBears />
        <PandaBears />

        <BearDisplay />
      </div>

    </>
  );
};

export const BlackBears = () => {
  const blackBears = useBearStore(state => state.blackBears);
  const increasedBlackBears = useBearStore(state => state.increasedBlackBears);

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasedBlackBears(+1)}>+1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>
        <button onClick={() => increasedBlackBears(-1)}>-1</button>
      </div>

    </WhiteCard>
  )
}

export const PolarBears = () => {
  const polarBears = useBearStore(state => state.polarBears);
  const increasedPolarBears = useBearStore(state => state.increasedPolarBears);

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasedPolarBears(+1)}>+1</button>
        <span className="text-3xl mx-2 lg:mx-10">{polarBears}</span>
        <button onClick={() => increasedPolarBears(-1)}>-1</button>

      </div>

    </WhiteCard>
  )
}

export const PandaBears = () => {
  const pandaBears = useBearStore(state => state.pandaBears);
  const increasedPandaBears = useBearStore(state => state.increasedPandaBears);

  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasedPandaBears(+1)}>+1</button>
        <span className="text-3xl mx-2 lg:mx-10">{pandaBears}</span>
        <button onClick={() => increasedPandaBears(+1)}>-1</button>
      </div>

    </WhiteCard>
  )
}


export const BearDisplay = () => {
  const bears = useBearStore(useShallow(state => state.bears));
  // const bears = useBearStore(state => state.bears);

  const doNothing = useBearStore(state => state.doNothing);
  const addBear = useBearStore(state => state.addBear);
  const clearBears = useBearStore(state => state.clearBears);

  return (
    <WhiteCard>
      <h2>Osos</h2>
      <button onClick={doNothing}>No Hace Nada</button>
      <button className='mt-2' onClick={addBear}>Agregar Oso</button>
      <button className='mt-2' onClick={clearBears}>Borrar Osos</button>

      <pre>
        {JSON.stringify(bears, null, 2)}
      </pre>
    </WhiteCard>
  )
}
