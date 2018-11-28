import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'cross-fetch/polyfill';

configure({ adapter: new Adapter() });
