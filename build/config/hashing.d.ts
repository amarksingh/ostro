interface BcryptConfig {
    rounds: number;
}
interface CryptoConfig {
    rounds: number;
}
interface HashingConfig {
    driver: string;
    bcrypt: BcryptConfig;
    crypto: CryptoConfig;
}
declare const config: HashingConfig;
export default config;
//# sourceMappingURL=hashing.d.ts.map