import { DoTheTest } from './getdata.js'; 
import { group, sleep } from 'k6';

export default () => {
    group('WebApiGraPro > Controller Test', () => {
        DoTheTest();
    });
    sleep(1);
}

