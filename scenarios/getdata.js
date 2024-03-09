import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { check, fail } from 'k6';


export let getCustomerDuration = new Trend('get_customer_duration');
export let getCustomerFailRate = new Rate('get_customer_fail_rate');
export let getCustomerSuccessRate = new Rate('get_customer_success_rate');
export let getCustomerReqs = new Rate('get_customer_reqs');


export function DoTheTest ()  {
let res = http.get('http://localhost:8080/api/test');
    
    getCustomerDuration.add(res.timings.duration);
    getCustomerReqs.add(1);
    getCustomerFailRate.add(res.status != 200);

    if(!check(res, {
        'max duration': (o)=> o.timings.duration < 4000
    })){
        fail('Max Duration ${4000/1000}s')
    }
    sleep(1)
}