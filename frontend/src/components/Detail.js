import { 
    Grid, 
    GridItem,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Wrap,
    WrapItem,
    Center
  } from '@chakra-ui/react';
  
  import Product from './Product';

function Detail() {
    const mainData = [];
    for(let i=0; i<100; i++){
      mainData.push("Main");
    }
    return (
    <Grid
    templateAreas={`"header main"
                    "nav main"
                    "nav footer"`}
    gridTemplateRows={'6fr 2fr 1fr'}
    gridTemplateColumns={'2fr 1fr'}
    h='100vh'
    gap='1'
    color='blackAlpha.700'
    fontWeight='bold'
    >
        <GridItem pl='2' bg='orange.300' area={'header'}>
          Header
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'} style={{overflow: "auto"}}>
          <Wrap spacing='30px' justify='center'>
          {mainData.map((data) => 
            <WrapItem>
                <Product name={data}/>
            </WrapItem>
          )}
          </Wrap>
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'} style={{overflow: "auto"}}>
          <UnorderedList>
            {mainData.map((data) => 
            <ListItem>{data}</ListItem>
            )}
          </UnorderedList>
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
    </Grid>
    );
}

export default Detail;