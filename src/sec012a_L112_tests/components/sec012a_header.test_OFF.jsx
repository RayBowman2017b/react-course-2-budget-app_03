
/*

  sec012a_header.test.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\components\
sec012a_header.test.jsx

//  SEC_012 --- 119. Enzyme 21:53

 */

import React from 'react';

//  SEC_012 --- 119. Enzyme 21:53
//  import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

//  import toJSON from 'enzyme-to-json';

//  SEC_012 --- 119. Enzyme 21:53
import MP_header from '../../sec009a_components/sec009a_SFC_header.jsx';

describe ("COMPONENT TEST FOR HEADER", () =>  {

    test ('should render Header correctly', () =>  {
        // const L_renderer = new ReactShallowRenderer();
        // L_renderer.render(<MP_header />);
        // expect(L_renderer.getRenderOutput()).toMatchSnapshot();
        // //  console.log(L_renderer.getRenderOutput());

        const L_wrapper = shallow(<MP_header />)
        expect (L_wrapper.find('h1').length).toBe(1);
    } );

    test ('should render Header text "Expensify"', () =>  {
        const L_wrapper = shallow(<MP_header />)
        expect (L_wrapper.find('h1').text()).toBe('Expensify');
    } );

    it ('should render Header matching snapshot', () =>  {
        const L_wrapper = shallow(<MP_header />)
        //expect (toJSON(L_wrapper)).toMatchSnapshot();
        expect (L_wrapper).toMatchSnapshot();
    } );

} );

