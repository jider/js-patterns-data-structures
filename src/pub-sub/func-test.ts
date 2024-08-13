import {createSubscribable} from './Subscribable-func.ts'

const sub = createSubscribable<string>()

sub.subscribe(console.log)
const unsubAnother = sub.subscribe((msg) => console.log('Another subscriber: ', msg))

sub.publish("Hello")
sub.publish("There")
unsubAnother()
sub.publish("Goodbye")


