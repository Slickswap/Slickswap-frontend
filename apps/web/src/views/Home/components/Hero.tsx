import {
  Button,
  Flex,
  Heading,
  Link,
  NextLinkFromReactRouter,
} from "@pancakeswap/uikit";
import { useWeb3React } from "@pancakeswap/wagmi";
import ConnectWalletButton from "components/ConnectWalletButton";
import { useTranslation } from "@pancakeswap/localization";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import hero from "../../../../public/images/home/hero-home-clone.png";
import { SlideSvgDark, SlideSvgLight } from "./SlideSvg";

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`;

// const BgWrapper = styled.div`
//   z-index: -1;
//   overflow: hidden;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   bottom: 0;
//   left: 0;
// `;

// const InnerWrapper = styled.div`
//   position: absolute;
//   width: 100%;
//   bottom: -3px;
// `;

const BunnyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
  position: relative;
  will-change: transform;
  > span {
    overflow: visible !important; // make sure the next-image pre-build blur image not be cropped
  }
`;

const CustomButton = styled.button`
  background-color: #000b1a;
  cursor: pointer;
  padding: 8px 30px;
  border: 1px solid #ffffff;
  border-radius: 40px;
  color: #fff;
  font-size: 16px;
  margin-right: 8px;

  &:hover {
    background-color: #004bad;
    border-color: #004bad;
    color: #fff;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-right: 64px;
    padding: 20px 53px;
  }
`;

const Hero = () => {
  const { t } = useTranslation();
  const { account } = useWeb3React();

  return (
    <>
      <style jsx global>
        {`
          .slide-svg-dark {
            display: none;
          }
          .slide-svg-light {
            display: block;
          }
          [data-theme="dark"] .slide-svg-dark {
            display: block;
          }
          [data-theme="dark"] .slide-svg-light {
            display: none;
          }
        `}
      </style>

      <Flex
        position="relative"
        flexDirection={["column-reverse", null, null, "row"]}
        alignItems="center"
        justifyContent="center"
        mt={["50px", null, 0]}
        id="homepage-hero"
        width="100%"
      >
        <Flex
          width={["auto", null, null, "60%"]}
          // flex=""
          flexDirection="column"
        >
          <Heading as="h1" scale="xxl" color="#fff" mb="24px">
            {t("Trade Crypto Without a third party")}
          </Heading>
          <Heading as="p" scale="md" color="#fff" mb="24px">
            Trade with confidence, buy and sell without intermediaries. Enjoy
            the freedom of trading on non-custodial platform.
          </Heading>
          <Flex alignItems="center">
            <NextLinkFromReactRouter to="/swap">
              <CustomButton>{t("Trade Now")}</CustomButton>
            </NextLinkFromReactRouter>
            {!account && (
              <ConnectWalletButton
                style={{
                  background: "#004bad",
                  borderRadius: "40px",
                  fontWeight: "normal",
                  fontSize: "16px",
                  padding: `30px 53px`,
                }}
              />
            )}
          </Flex>
        </Flex>
        <Flex
          minHeight={["292px", null, null, "100%"]}
          width={["auto", null, null, "40%"]}
          // flex={[null, null, null, "1"]}
          mb={["12px", null, null, "0"]}
          position="relative"
        >
          <BunnyWrapper>
            <Image
              // sizes="(max-width: 768px) 95vw, 580px"
              width={200}
              height={200}
              src={hero}
              priority
              objectFit="fill"
              placeholder="blur"
              alt={t("IceCream Store")}
            />
          </BunnyWrapper>
        </Flex>
      </Flex>
    </>
  );
};

export default Hero;
