import '../App.css';
import CampaignHeader from '../components/CampaignHeader';
import CampaignOptions from '../components/CampaignOptions';
import CampaignCharacterList from '../components/CampaignCharacterList';

function CampaignPage() {
    return (
      <div>
        <CampaignHeader/>
        <CampaignOptions/>
        <CampaignCharacterList/>
      </div>
    );
  }

  export default CampaignPage;