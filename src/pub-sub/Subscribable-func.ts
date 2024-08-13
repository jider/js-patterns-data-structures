export function createSubscribable<MessageType>() {
  const subscribers: Set<(message: MessageType) => void> = new Set()

  return {
    subscribe(cb: (message: MessageType) => void): () => void {
      subscribers.add(cb)
      return () => {
        subscribers.delete(cb)
      }
    },

    publish(message: MessageType): void {
      subscribers.forEach(cb => cb(message))
    }
  }
}
