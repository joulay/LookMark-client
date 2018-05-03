import React from 'react';
import { shallow } from 'enzyme';

import { NewClientForm } from './client-form';

describe('<NewClientForm />', () => {
    it('should render without crashing', () => {
        shallow(<NewClientForm handleSubmit={() => {}} />);
    });

});