import ConfirmPayment from "./client";

const Page = ({ params }) => {
  return <ConfirmPayment tran_id={params.tran_id} />;
};

export default Page;