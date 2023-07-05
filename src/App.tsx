import { Grid, GridItem, Show } from '@chakra-ui/react'
import { NavBar } from './components/Nav/NavBar';
import { GameGrid } from './components/Main/GameGrid';
import { GenereList } from './components/Aside/GenereList';
function App() {
  return (
    <Grid
  templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
  }}
  // gridTemplateRows={'50px 1fr 30px'}
  // gridTemplateColumns={'150px 1fr'}
  // h='200px'
  gap=' 1' 
  // color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem  area={'nav'}>
    <NavBar />
  </GridItem>
  <Show above="lg">
  <GridItem area={'aside'}>
    <GenereList />
  </GridItem>
  </Show> 
  <GridItem  area={'main'}>
    <GameGrid />
  </GridItem>
</Grid>
  );
}

export default App
