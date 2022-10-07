export interface Encrypter {
  encrypt(payload: object, subject: string): Promise<string>
}