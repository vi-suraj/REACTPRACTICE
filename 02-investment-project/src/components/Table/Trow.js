const Trow = (props) => {
  return (
    <>
      {props.data.map((yearData) => {
        return (
          <tr>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>{yearData.yearlyInterest}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Trow;
