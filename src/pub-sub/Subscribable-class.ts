export class SubscribableClass<MessageType> {
  private subscribers: Set<(message: MessageType) => void> = new Set()

  constructor() {
  }

  subscribe(cb: (message: MessageType) => void): () => void {
    this.subscribers.add(cb)
    return () => {
      this.subscribers.delete(cb)
    }
  }

  publish(message: MessageType): void {
    this.subscribers.forEach(cb => cb(message))
  }
}
