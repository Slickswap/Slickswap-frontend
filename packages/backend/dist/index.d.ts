import * as _trpc_server_shared from '@trpc/server/shared';
import * as _trpc_react_query_shared from '@trpc/react-query/shared';
import * as _trpc_next from '@trpc/next';
import * as _prisma_client from '.prisma/client';
import * as _trpc_server from '@trpc/server';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import * as next_types from 'next/types';
import { User } from '@icecreamswap/database';
import * as iron_session from 'iron-session';

interface Session {
    user?: Pick<User, 'wallet' | 'name' | 'role'>;
}

declare const appRouter: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
    ctx: {
        session: iron_session.IronSessionData & {
            destroy: () => void;
            save: () => Promise<void>;
        } & Session;
        res: next_types.NextApiResponse<any>;
    };
    meta: object;
    errorShape: _trpc_server.DefaultErrorShape;
    transformer: _trpc_server.DefaultDataTransformer;
}>, {
    health: _trpc_server.BuildProcedure<"query", {
        _config: _trpc_server.RootConfig<{
            ctx: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            meta: object;
            errorShape: _trpc_server.DefaultErrorShape;
            transformer: _trpc_server.DefaultDataTransformer;
        }>;
        _ctx_out: {
            session: iron_session.IronSessionData & {
                destroy: () => void;
                save: () => Promise<void>;
            } & Session;
            res: next_types.NextApiResponse<any>;
        };
        _input_in: typeof _trpc_server.unsetMarker;
        _input_out: typeof _trpc_server.unsetMarker;
        _output_in: typeof _trpc_server.unsetMarker;
        _output_out: typeof _trpc_server.unsetMarker;
        _meta: object;
    }, string>;
    session: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: {
            session: iron_session.IronSessionData & {
                destroy: () => void;
                save: () => Promise<void>;
            } & Session;
            res: next_types.NextApiResponse<any>;
        };
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: _trpc_server.DefaultDataTransformer;
    }>, {
        user: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, Partial<Pick<_prisma_client.User, "wallet" | "name" | "role">> & {
            isLoggedIn: boolean;
        }>;
        nonce: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, {
            nonce: string;
        }>;
        login: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: {
                address: string;
                signature: string;
            };
            _input_out: {
                address: string;
                signature: string;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, _prisma_client.User | undefined>;
        logout: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, void>;
    }>;
    token: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: {
            session: iron_session.IronSessionData & {
                destroy: () => void;
                save: () => Promise<void>;
            } & Session;
            res: next_types.NextApiResponse<any>;
        };
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: _trpc_server.DefaultDataTransformer;
    }>, {
        add: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: {
                chainId: number;
                tokenAddress: string;
                tokenName: string;
                tokenSymbol: string;
                tokenDecimals: number;
                logo?: string | undefined;
            };
            _input_out: {
                chainId: number;
                tokenAddress: string;
                tokenName: string;
                tokenSymbol: string;
                tokenDecimals: number;
                logo?: string | undefined;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, void>;
        defaultList: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, {
            name: string;
            timestamp: string;
            version: {
                major: number;
                minor: number;
                patch: number;
            };
            tags: {};
            logoURI: string;
            keywords: string[];
            tokens: {
                name: string;
                symbol: string;
                address: string;
                chainId: number;
                decimals: number;
                logoURI: string;
            }[];
        }>;
    }>;
}>;
declare type AppRouter = typeof appRouter;

declare const trpc: _trpc_next.CreateTRPCNextBase<_trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
    ctx: {
        session: iron_session.IronSessionData & {
            destroy: () => void;
            save: () => Promise<void>;
        } & Session;
        res: next_types.NextApiResponse<any>;
    };
    meta: object;
    errorShape: _trpc_server.DefaultErrorShape;
    transformer: _trpc_server.DefaultDataTransformer;
}>, {
    health: _trpc_server.BuildProcedure<"query", {
        _config: _trpc_server.RootConfig<{
            ctx: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            meta: object;
            errorShape: _trpc_server.DefaultErrorShape;
            transformer: _trpc_server.DefaultDataTransformer;
        }>;
        _ctx_out: {
            session: iron_session.IronSessionData & {
                destroy: () => void;
                save: () => Promise<void>;
            } & Session;
            res: next_types.NextApiResponse<any>;
        };
        _input_in: typeof _trpc_server.unsetMarker;
        _input_out: typeof _trpc_server.unsetMarker;
        _output_in: typeof _trpc_server.unsetMarker;
        _output_out: typeof _trpc_server.unsetMarker;
        _meta: object;
    }, string>;
    session: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: {
            session: iron_session.IronSessionData & {
                destroy: () => void;
                save: () => Promise<void>;
            } & Session;
            res: next_types.NextApiResponse<any>;
        };
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: _trpc_server.DefaultDataTransformer;
    }>, {
        user: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, Partial<Pick<_prisma_client.User, "wallet" | "name" | "role">> & {
            isLoggedIn: boolean;
        }>;
        nonce: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, {
            nonce: string;
        }>;
        login: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: {
                address: string;
                signature: string;
            };
            _input_out: {
                address: string;
                signature: string;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, _prisma_client.User | undefined>;
        logout: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, void>;
    }>;
    token: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: {
            session: iron_session.IronSessionData & {
                destroy: () => void;
                save: () => Promise<void>;
            } & Session;
            res: next_types.NextApiResponse<any>;
        };
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: _trpc_server.DefaultDataTransformer;
    }>, {
        add: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: {
                chainId: number;
                tokenAddress: string;
                tokenName: string;
                tokenSymbol: string;
                tokenDecimals: number;
                logo?: string | undefined;
            };
            _input_out: {
                chainId: number;
                tokenAddress: string;
                tokenName: string;
                tokenSymbol: string;
                tokenDecimals: number;
                logo?: string | undefined;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, void>;
        defaultList: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, {
            name: string;
            timestamp: string;
            version: {
                major: number;
                minor: number;
                patch: number;
            };
            tags: {};
            logoURI: string;
            keywords: string[];
            tokens: {
                name: string;
                symbol: string;
                address: string;
                chainId: number;
                decimals: number;
                logoURI: string;
            }[];
        }>;
    }>;
}>, next_types.NextPageContext> & _trpc_react_query_shared.DecoratedProcedureRecord<{
    health: _trpc_server.BuildProcedure<"query", {
        _config: _trpc_server.RootConfig<{
            ctx: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            meta: object;
            errorShape: _trpc_server.DefaultErrorShape;
            transformer: _trpc_server.DefaultDataTransformer;
        }>;
        _ctx_out: {
            session: iron_session.IronSessionData & {
                destroy: () => void;
                save: () => Promise<void>;
            } & Session;
            res: next_types.NextApiResponse<any>;
        };
        _input_in: typeof _trpc_server.unsetMarker;
        _input_out: typeof _trpc_server.unsetMarker;
        _output_in: typeof _trpc_server.unsetMarker;
        _output_out: typeof _trpc_server.unsetMarker;
        _meta: object;
    }, string>;
    session: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: {
            session: iron_session.IronSessionData & {
                destroy: () => void;
                save: () => Promise<void>;
            } & Session;
            res: next_types.NextApiResponse<any>;
        };
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: _trpc_server.DefaultDataTransformer;
    }>, {
        user: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, Partial<Pick<_prisma_client.User, "wallet" | "name" | "role">> & {
            isLoggedIn: boolean;
        }>;
        nonce: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, {
            nonce: string;
        }>;
        login: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: {
                address: string;
                signature: string;
            };
            _input_out: {
                address: string;
                signature: string;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, _prisma_client.User | undefined>;
        logout: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, void>;
    }>;
    token: _trpc_server.CreateRouterInner<_trpc_server.RootConfig<{
        ctx: {
            session: iron_session.IronSessionData & {
                destroy: () => void;
                save: () => Promise<void>;
            } & Session;
            res: next_types.NextApiResponse<any>;
        };
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: _trpc_server.DefaultDataTransformer;
    }>, {
        add: _trpc_server.BuildProcedure<"mutation", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _meta: object;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: {
                chainId: number;
                tokenAddress: string;
                tokenName: string;
                tokenSymbol: string;
                tokenDecimals: number;
                logo?: string | undefined;
            };
            _input_out: {
                chainId: number;
                tokenAddress: string;
                tokenName: string;
                tokenSymbol: string;
                tokenDecimals: number;
                logo?: string | undefined;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
        }, void>;
        defaultList: _trpc_server.BuildProcedure<"query", {
            _config: _trpc_server.RootConfig<{
                ctx: {
                    session: iron_session.IronSessionData & {
                        destroy: () => void;
                        save: () => Promise<void>;
                    } & Session;
                    res: next_types.NextApiResponse<any>;
                };
                meta: object;
                errorShape: _trpc_server.DefaultErrorShape;
                transformer: _trpc_server.DefaultDataTransformer;
            }>;
            _ctx_out: {
                session: iron_session.IronSessionData & {
                    destroy: () => void;
                    save: () => Promise<void>;
                } & Session;
                res: next_types.NextApiResponse<any>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
        }, {
            name: string;
            timestamp: string;
            version: {
                major: number;
                minor: number;
                patch: number;
            };
            tags: {};
            logoURI: string;
            keywords: string[];
            tokens: {
                name: string;
                symbol: string;
                address: string;
                chainId: number;
                decimals: number;
                logoURI: string;
            }[];
        }>;
    }>;
}, null, "">;
declare const trpcClient: {
    health: {
        query: (input?: void | undefined, opts?: _trpc_server.ProcedureOptions | undefined) => Promise<string>;
    };
    session: {
        user: {
            query: (input?: void | undefined, opts?: _trpc_server.ProcedureOptions | undefined) => Promise<{
                wallet?: string | undefined;
                name?: string | undefined;
                role?: _prisma_client.Role | undefined;
                isLoggedIn: boolean;
            }>;
        };
        nonce: {
            query: (input?: void | undefined, opts?: _trpc_server.ProcedureOptions | undefined) => Promise<{
                nonce: string;
            }>;
        };
        login: {
            mutate: (input: {
                address: string;
                signature: string;
            }, opts?: _trpc_server.ProcedureOptions | undefined) => Promise<{
                wallet: string;
                name: string;
                role: _prisma_client.Role;
                id: number;
                createdAt: string;
            }>;
        };
        logout: {
            mutate: (input?: void | undefined, opts?: _trpc_server.ProcedureOptions | undefined) => Promise<never>;
        };
    };
    token: {
        add: {
            mutate: (input: {
                chainId: number;
                tokenAddress: string;
                tokenName: string;
                tokenSymbol: string;
                tokenDecimals: number;
                logo?: string | undefined;
            }, opts?: _trpc_server.ProcedureOptions | undefined) => Promise<never>;
        };
        defaultList: {
            query: (input?: void | undefined, opts?: _trpc_server.ProcedureOptions | undefined) => Promise<{
                name: string;
                tags: _trpc_server_shared.SerializeObject<Pick<{}, never> & {}>;
                logoURI: string;
                timestamp: string;
                version: _trpc_server_shared.SerializeObject<Pick<{
                    major: number;
                    minor: number;
                    patch: number;
                }, "major" | "minor" | "patch"> & {}>;
                keywords: string[];
                tokens: _trpc_server_shared.SerializeObject<Pick<{
                    name: string;
                    symbol: string;
                    address: string;
                    chainId: number;
                    decimals: number;
                    logoURI: string;
                }, "symbol" | "name" | "decimals" | "address" | "chainId" | "logoURI"> & {}>[];
            }>;
        };
    };
};
declare type RouterInput = inferRouterInputs<AppRouter>;
declare type RouterOutput = inferRouterOutputs<AppRouter>;

export { RouterInput, RouterOutput, trpc, trpcClient };
