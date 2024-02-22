import { PiPlantDuotone } from "react-icons/pi";

function Results({ children }) {
  return (
    <>
      <h2 className="mx-auto my-3 flex flex-row items-center gap-2 rounded-md border-b bg-[#ff8080] bg-opacity-80 px-4 py-3 text-center text-lg font-medium text-white">
        <PiPlantDuotone /> {children}
      </h2>
    </>
  );
}

export default Results;
