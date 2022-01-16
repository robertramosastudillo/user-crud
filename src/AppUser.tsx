import { Container, Title } from "./AppUser.style";
import { Table } from "./components";
import { GlobalStyle } from "./GlobalStyle";

export const AppUser = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>App User</Title>
        <Table />
      </Container>
    </>
  );
};
