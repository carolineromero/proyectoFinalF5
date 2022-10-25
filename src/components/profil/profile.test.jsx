import{ render } from '@headlessui/react/dist/utils/render';
import {render,screen} from '@testing-library/jest-dom';
import Profile from '../../pages/Profile';

beforeEach(()=> {
    render(<Profile/>);
})
describe.only('Profile UI elements',() => {
    let title= screen.getBText('Profile/i')
    expect(title).toBeInTheDocument();
});
