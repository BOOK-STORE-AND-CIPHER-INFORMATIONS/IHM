import { DatatableRentsUser } from "@/app/_features/datatableRentsUser/datatableRentsUser";
export default function RentsUser({ params }: { params: { id: string } }) {
  return (
    <>
      {/* <h1> Conversations du suspect {params.id}</h1> */}
      <div className='py-8 px-24 flex items-center justify-center'>
        <DatatableRentsUser />
      </div>{' '}
    </>
  );
}
