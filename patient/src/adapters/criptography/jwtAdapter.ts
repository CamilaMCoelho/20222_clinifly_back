import { Encrypter, Decrypter, PayloadData } from '../../useCases/protocols/criptography'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor(
    private readonly secret: string,
    private readonly expiresIn?: string | number
  ) {}

  async encrypt(payload: object = {}, subject: string): Promise<string> {
    return jwt.sign(payload, this.secret, {
      subject,
      expiresIn: this.expiresIn,
    })
  }
  decrypt(ciphertext: string): PayloadData | string {
    return jwt.verify(ciphertext, this.secret)
  }
}
