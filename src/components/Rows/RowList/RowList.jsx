import Row from "../Row/Row";

import rowData from "../Row.js";

const RowList = () => {
  return (
    <>
      {rowData.map((data, index) => (
        <Row
          key={index}
          title={data.title}
          fetchUrl={data.fetchUrl}
          isLargeRow={data.isLargeRow}
        />
      ))}
    </>
  );
};

export default RowList;
