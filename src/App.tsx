import { Grid, GridItem, Show } from '@chakra-ui/react'
import { NavBar } from './components/Nav/NavBar';
import { GameGrid } from './components/Main/GameGrid';
import { GenereList } from './components/Aside/GenereList';
import { useState } from 'react';
import { Genre } from './Hooks/UseGenere';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
  templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
  }}
  // gridTemplateRows={'50px 1fr 30px'}
  templateColumns={{ base: '1fr', lg: '200px 1fr'}}
  // h='200px'
  gap=' 1' 
  // color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem  area={'nav'}>
    <NavBar />
  </GridItem>
  <Show above="lg">
  <GridItem area={'aside'} marginX={5}>
    <GenereList onSelect={setSelectedGenre}/>
  </GridItem>
  </Show> 
  <GridItem  area={'main'}>
    <GameGrid selectedGenre={selectedGenre}/>
  </GridItem>
</Grid>
  );
}

export default App
