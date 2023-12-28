import { useSelector } from "react-redux";

function Customer() {
  //useSelector basically creates a subscription to the store
  //Whenever the store changes, the component that is subscribed to that store will re-render
  const customer = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
