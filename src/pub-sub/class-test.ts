import {SubscribableClass} from './Subscribable-class.ts'

const sub = new SubscribableClass<string>()

sub.subscribe(console.log)
const unsubAnother = sub.subscribe((msg) => console.log('Another subscriber: ', msg))

sub.publish("Hello")
sub.publish("There")
unsubAnother()
sub.publish("Goodbye")

class DataClass extends SubscribableClass<number> {
  private value: number

  constructor(value: number) {
    super()
    this.value = value
  }

  setValue(value: number) {
    this.value = value
    this.publish(this.value)
  }
}

const dc = new DataClass(0)
const dcUnsub = dc.subscribe((value) => console.log(`DC1: ${value}`))
const dcUnsub2 = dc.subscribe((value) => console.log(`DC2: ${value}`))
dc.setValue(42)
dcUnsub()
dcUnsub2()


