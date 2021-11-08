import React from "react";
import { ChakraProvider, Container, VStack } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SplitView from "./components/SplitView";
import theme from "./theme";
import CollectionList from "./components/CollectionList/index";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <VStack spacing="24px">
          {/* <Box width="100%" backgroundColor="gray.100" pb="4"> */}
          {/* <VStack spacing="24px"> */}
          <Header />
          <Container maxW="container.xl">
            <SplitView
              left={<Navigation />}
              right={<CollectionList />}
              align="flex-start"
            />
          </Container>
          {/* <Navigation /> */}
          {/* </VStack> */}
          {/* </Box> */}
          {/* <Container maxW="container.xl">
            <Switch>
              <Route path="/collections">
                <Collections />
              </Route>
              <Route path="/owned">
                <Owned />
              </Route>
              <Route path="/watchList">
                <WatchList />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Container> */}
        </VStack>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
