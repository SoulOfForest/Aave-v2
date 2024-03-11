import { zeroAddress } from 'ethereumjs-util/dist';
import {
    oneRay,
    ZERO_ADDRESS,
    MOCK_CHAINLINK_AGGREGATORS_PRICES,
    oneEther,
    oneUsd,
} from '../../helpers/constants';
import { ICommonConfiguration, eArbitrumNetwork } from '../../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
    MarketId: 'Arbitrum',
    ATokenNamePrefix: 'Arbitrum Aave interest bearing',
    StableDebtTokenNamePrefix: 'Aave stable debt bearing',
    VariableDebtTokenNamePrefix: 'Aave variable debt bearing',
    SymbolPrefix: '',
    ProviderId: 0, // Overriden in index.ts
    OracleQuoteCurrency: 'USD',
    OracleQuoteUnit: oneUsd.toString(),
    ProtocolGlobalParams: {
        TokenDistributorPercentageBase: '10000',
        MockUsdPriceInWei: '5848466240000000',
        UsdAddress: '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96',
        NilAddress: '0x0000000000000000000000000000000000000000',
        OneAddress: '0x0000000000000000000000000000000000000001',
        AaveReferral: '0',
    },

    // ----------------
    // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
    // ----------------

    Mocks: {
        AllAssetsInitialPrices: {
            ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
        },
    },
    // TODO: reorg alphabetically, checking the reason of tests failing
    LendingRateOracleRatesCommon: {
        WETH: {
            borrowRate: oneRay.multipliedBy(0.03).toFixed(),
        },
        USDT: {
            borrowRate: oneRay.multipliedBy(0.035).toFixed(),
        },
        LINK: {
            borrowRate: oneRay.multipliedBy(0.03).toFixed(),
        },
        WBTC: {
            borrowRate: oneRay.multipliedBy(0.03).toFixed(),
        },
    },
    // ----------------
    // COMMON PROTOCOL ADDRESSES ACROSS POOLS
    // ----------------

    // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
    PoolAdmin: {
        [eArbitrumNetwork.arbitrumSepolia]: undefined,
    },
    PoolAdminIndex: 0,
    EmergencyAdmin: {
        [eArbitrumNetwork.arbitrumSepolia]: undefined,
    },
    EmergencyAdminIndex: 1,
    ProviderRegistry: {
        [eArbitrumNetwork.arbitrumSepolia]: '',
    },
    ProviderRegistryOwner: {
        [eArbitrumNetwork.arbitrumSepolia]: '',
    },
    LendingRateOracle: {
        [eArbitrumNetwork.arbitrumSepolia]: '',
    },
    LendingPoolCollateralManager: {
        [eArbitrumNetwork.arbitrumSepolia]: '',
    },
    LendingPoolConfigurator: {
        [eArbitrumNetwork.arbitrumSepolia]: '',
    },
    LendingPool: {
        [eArbitrumNetwork.arbitrumSepolia]: '',
    },
    WethGateway: {
        [eArbitrumNetwork.arbitrumSepolia]: '',
    },
    TokenDistributor: {
        [eArbitrumNetwork.arbitrumSepolia]: '',
    },
    AaveOracle: {
        [eArbitrumNetwork.arbitrumSepolia]: ZERO_ADDRESS,
    },
    FallbackOracle: {
        [eArbitrumNetwork.arbitrumSepolia]: ZERO_ADDRESS,
    },
    ChainlinkAggregator: {
        [eArbitrumNetwork.arbitrumSepolia]: {
            WETH: '0x5f0423B1a6935dc5596e7A24d98532b67A0AeFd8',
            USD: '0x5f0423B1a6935dc5596e7A24d98532b67A0AeFd8',
            LINK: '0x52C9Eb2Cc68555357221CAe1e5f2dD956bC194E5',
            WBTC: '0x0c9973e7a27d00e656B9f153348dA46CaD70d03d',
            USDT: '0xb1Ac85E779d05C2901812d812210F6dE144b2df0',
        },
    },
    ReserveAssets: {
        [eArbitrumNetwork.arbitrumSepolia]: {},
    },
    ReservesConfig: {},
    ATokenDomainSeparator: {
        [eArbitrumNetwork.arbitrumSepolia]: '',
    },
    WETH: {
        [eArbitrumNetwork.arbitrumSepolia]: '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681',
    },
    WrappedNativeToken: {
        [eArbitrumNetwork.arbitrumSepolia]: '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681',
    },
    ReserveFactorTreasuryAddress: {
        [eArbitrumNetwork.arbitrumSepolia]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
    },
    IncentivesController: {
        [eArbitrumNetwork.arbitrumSepolia]: ZERO_ADDRESS,
    },
};
