
import '../App.css';
import CampaignList from '../components/CampaignList';
import CharacterList from '../components/CharacterList';
import CampaignCreation from '../components/CampaignCreation';
function HomePage() {
    return (
      <div>
        <CampaignList/>
        <CharacterList/>
        <CampaignCreation/>
      </div>
    );
  }

  export default HomePage;