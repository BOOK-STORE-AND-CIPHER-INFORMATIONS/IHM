import { DatatableLogs } from '../_features/datatableLogs/datatableLogs';
export default function Rents() {
  return (
    <>
      {/* <h1> Conversations du suspect {params.id}</h1> */}
      <div className='py-8 px-24 flex items-center justify-center'>
        <DatatableLogs />
      </div>{' '}
    </>
  );
}
