import { Observable } from "rxjs";
import 'rxjs/add/operator/share';

const observable = Observable.create((observer: any) => {
    try {
        observer.next('Hey Guys!');
        observer.next('How Are You Today');
        setInterval(() => {
            observer.next('I am good');
        }, 2000);
    } catch (err) {
        observer.error(err);
    }
}).share();

var observer = observable.subscribe(
    (x: any) => addItem(x),
    (err: any) => addItem(err),
    () => addItem('Completed')
);

setTimeout(() => {
    var observer2 = observable.subscribe(
        (x: any) => addItem('Subcibe 2:' + x)
    )
}, 1000);

function addItem(val: any) {
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}
