export interface Action<Type, Payload = undefined> {
  type: Type,
  payload?: Payload,
}