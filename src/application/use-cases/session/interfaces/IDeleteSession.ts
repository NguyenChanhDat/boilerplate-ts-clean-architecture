export interface IDeleteSession {
  execute(sessionId: number): Promise<void>;
}
