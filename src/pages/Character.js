import '../App.css';
import CharacterHeader from '../components/CharacterHeader';
import CharacterStats from '../components/CharacterStats';
import InventoryStats from '../components/InventoryStats';
import SpellsSection from '../components/SpellsSection';

function CharacterPage() {
    return (
      <div>
        <CharacterHeader/>
        <CharacterStats/>
        <InventoryStats/>
        <SpellsSection/>
      </div>
    );
  }

  export default CharacterPage;