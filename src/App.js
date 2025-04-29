import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Huf from './Components/Huf';
import Firm from './Components/Firm';
import Llp from './Components/Llp';
import Aop from './Components/Aop';
import PartnerForm from './Components/PartnerForm';
import LocalAuthority from './Components/LocalAuthority';
import Publiccompanynotintrest from './Components/Publiccompanynotintrest';


// import Llpprtners from './Components/Llppartners';
import Individual from './Components/Individual';
// import Aop_trust from'./Components/Aop_trust';


const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const renderComponent = () => {
    switch (selectedOption) {
      case 'individual':
        return <Individual/>
     
      case 'huf':
        return <Huf />;
      case 'firm':
        return <Firm />;
        case 'llp':
        return <Llp />;
        case 'aop':
        return <Aop />;
        case 'PartnerForm':
          return<PartnerForm/>
          case 'LocalAuthority':
          return<LocalAuthority/>
          case 'Publiccompanynotintrest':
            return<Publiccompanynotintrest/>
          

      default:
        return <div className="mt-3 text-muted">Please select an option.</div>;
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Select a Page</h3>

      {/* Bootstrap-styled select box */}
      <select
        className="form-select mb-4"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">-- Choose an Option --</option>
        <option value="individual">Individual</option>
        <option value="huf">H.U.F</option>
        <option value="firm">Firm</option>
        <option value="llp">Llp</option>
        <option value="llp">Llp</option>
        <option value="LocalAuthority">LocalAuthority</option>
        <option value="Publiccompanynotintrest">Company Public Not Interested </option>
        
      </select>

      {/* Conditional Component Rendering */}
      {renderComponent()}
    </div>
  );
};

export default App;
