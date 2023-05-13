import * as _wagmi_core from '@wagmi/core';
import { Chain } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

declare class BinanceWalletConnector extends InjectedConnector {
    readonly id = "bsc";
    readonly ready: boolean;
    provider?: Window['BinanceChain'];
    constructor({ chains: _chains, }?: {
        chains?: Chain[];
    });
    connect({ chainId }?: {
        chainId?: number;
    }): Promise<{
        account: string;
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: {
            bnbSign?: ((address: string, message: string) => Promise<{
                publicKey: string;
                signature: string;
            }>) | undefined;
            switchNetwork?: ((networkId: string) => Promise<string>) | undefined;
        } & _wagmi_core.Ethereum;
    }>;
    getProvider(): Promise<({
        bnbSign?: ((address: string, message: string) => Promise<{
            publicKey: string;
            signature: string;
        }>) | undefined;
        switchNetwork?: ((networkId: string) => Promise<string>) | undefined;
    } & _wagmi_core.Ethereum) | undefined>;
    switchChain(chainId: number): Promise<Chain>;
}

export { BinanceWalletConnector };
