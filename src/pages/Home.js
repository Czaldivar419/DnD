
import '../App.css';
import CampaignList from '../components/CampaignList';
import CharacterList from '../components/CharacterList';
import CampaignCreation from '../components/CampaignCreation';
import CharacterCreation from '../components/CharacterCreation';
import CharacterStats from '../components/CharacterStats';

function HomePage() {
    return (
      <div>
        <CampaignList/>
        <CharacterList/>
        <CampaignCreation/>
        <CharacterCreation/>
        <CharacterStats/>
      </div>
    );
  }

  export default HomePage;