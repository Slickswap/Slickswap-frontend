import { TranslateFunction } from "@pancakeswap/localization";
import { SalesSectionProps } from ".";
// import iceConeA from "../../../../../public/images/home/trade/iceconea.png";
// import iceConeB from "../../../../../public/images/home/trade/iceconeb.png";
// import bridgeA from "../../../../../public/images/home/bridge/bridge_a.png";
// import bridgeB from "../../../../../public/images/home/bridge/bridge_b.png";
// import earnIce from "../../../../../public/images/home/earn/ice.png";
import dives from "../../../../../public/images/home/trade/dives.png";
import arrowTop from "../../../../../public/images/home/trade/arrowTop.png";

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t("Bridge available with Multi Chain support"),
  bodyText: t(
    "The bridge is a secure and decentralized way to transfer assets. It uses a two-way peg mechanism, which means that assets are locked on one chain and minted on the other chain. This ensures that the assets are always backed by real value."
  ),
  reverse: false,
  primaryButton: {
    to: "/swap",
    text: t("Trade Now"),
    external: false,
  },
  secondaryButton: {
    to: "https://wiki.icecreamswap.com/get-started/swap",
    text: t("Learn More"),
    external: true,
  },
  images: {
    attributes: [
      // { src: iceConeA, alt: "" },
      { src: dives, alt: "" },
    ],
  },
});

export const bridgeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t("Stake to earn!"),
  bodyText: t(
    "With our pools and farms, you will be able to earn passive income as you interact with our smart contract.. higher yields for all!"
  ),
  reverse: true,
  primaryButton: {
    to: "https://bridge.icecreamswap.com",
    text: "Bridge Now",
    external: false,
  },
  secondaryButton: {
    to: "https://wiki.icecreamswap.com/get-started/bridge",
    text: t("Learn"),
    external: true,
  },
  images: {
    attributes: [
      // { src: bridgeA, alt: "" },
      { src: arrowTop, alt: "" },
    ],
  },
});

// export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
//   headingText: t("Earn, receive ICE tokens when providing liquidity."),
//   bodyText: t(
//     "Thanks to liquidity farming pools, you can receive ICE tokens when you provide liquidity."
//   ),
//   reverse: false,
//   primaryButton: {
//     to: "/farms",
//     text: t("Farms"),
//     external: false,
//   },
//   secondaryButton: {
//     to: "https://wiki.icecreamswap.com/get-started/pool",
//     text: t("Learn"),
//     external: true,
//   },
//   images: {
//     attributes: [{ src: earnIce, alt: "" }],
//   },
// });
