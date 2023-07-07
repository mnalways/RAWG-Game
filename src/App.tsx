import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { NavBar } from './components/Nav/NavBar';
import { GameGrid } from './components/Main/GameGrid';
import { GenereList } from './components/Aside/GenereList';
import { useState } from 'react';
import { Genre } from './Hooks/UseGenere';
import { PlatformSelector } from './components/Main/PlatformSelector';
import { Platform } from './components/Main/UseGame';
import { SortSelector } from './components/Main/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
    <GenereList selectedGenre={gameQuery.genre} onSelect={(genre) => setGameQuery({...gameQuery, genre})}/>
  </GridItem>
  </Show> 
  <GridItem  area={'main'}>
    <HStack spacing={5} paddingLeft={10} marginBottom={5}>
      <PlatformSelector onSelect={(platform) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform}/>
      <SortSelector sortOrder={gameQuery?.sortOrder} onSelect={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
    </HStack>
    <GameGrid gameQuery={gameQuery}/>
  </GridItem>
</Grid>
  );
}

export default App
