import Thead from "./Thead";
import Trow from "./Trow";

const Table = (props) => {
  return (
    <table className="result">
      <Thead />
      <tbody>
        <Trow />
      </tbody>
    </table>
  );
};

export default Table;
