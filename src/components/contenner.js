import styled from "styled-components";

export const IPSContainerWrapper = styled.div`
  .slick-track {
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
  }

  .border-redius {
      background-color: white;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, .4);
  }
`;
