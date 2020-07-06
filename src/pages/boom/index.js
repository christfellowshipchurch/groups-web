import styled from "styled-components";

import { Title } from "../../ui";

function Boom() {
  return (
    <>
      <Title>Boom page</Title>
      <p>Environment variable process.env.TEST is "{process.env.TEST}"</p>
    </>
  );
}

export default Boom;
