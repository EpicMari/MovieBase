import React, { useContext } from "react";
import AppContext from "../../context";
import { Button, Paragraph, Wrapper } from "./Pagination.styles";

const Pagination = () => {
  const { pageNumber, increasePageNumber, decreasePageNumber } =
    useContext(AppContext);
  return (
    <Wrapper>
      <Button
        disabled={pageNumber === 1 ? true : false}
        onClick={decreasePageNumber}
        className={pageNumber === 1 && "firstPage"}
      >
        Go back
      </Button>
      <Paragraph>{pageNumber}</Paragraph>
      <Button onClick={increasePageNumber}>Go next</Button>
    </Wrapper>
  );
};

export default Pagination;
