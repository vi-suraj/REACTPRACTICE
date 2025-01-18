import Tbody from "./Tbody";
import Thead from "./Thead";

const Table = (props) => {
  return (
    <table className="result">
      <Thead />

      <Tbody tdata={props.data} />
    </table>
  );
};

export default Table;
