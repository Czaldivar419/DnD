
import '../App.css';
import CampaignList from '../components/CampaignList';
import CharacterList from '../components/CharacterList';

function HomePage() {
    return (
      <div>
        <CampaignList />
        <CharacterList/>
      </div>
    );
  }

  export default HomePage;