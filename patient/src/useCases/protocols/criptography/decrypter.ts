export interface PayloadData {
  sub?: string
  email?: string
  exp?: number
}

export interface Decrypter {
  decrypt(ciphertext: string): PayloadData | string
}
