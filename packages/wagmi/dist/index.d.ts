import { Web3Provider } from '@ethersproject/providers';
import React from 'react';
import * as wagmi from 'wagmi';
import { WagmiConfigProps } from 'wagmi';
import { Provider, WebSocketProvider, SignMessageArgs } from '@wagmi/core';

declare function WagmiProvider<TProvider extends Provider, TWebSocketProvider extends WebSocketProvider>(props: React.PropsWithChildren<WagmiConfigProps<TProvider, TWebSocketProvider>>): JSX.Element;
declare const useWeb3LibraryContext: () => Web3Provider | undefined;

declare function useWeb3React(): {
    chainId: number | undefined;
    account: string | null | undefined;
    isConnected: boolean;
    isConnecting: boolean;
    chain: (wagmi.Chain & {
        unsupported?: boolean | undefined;
    }) | undefined;
    connector: wagmi.Connector<any, any, any> | undefined;
};

declare function useSignMessage(): {
    signMessageAsync: (args: SignMessageArgs) => Promise<string | null>;
};

export { WagmiProvider, useSignMessage, useWeb3LibraryContext, useWeb3React };
