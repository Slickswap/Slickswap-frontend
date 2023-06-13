import { useTranslation } from "@pancakeswap/localization";
import { WalletModalV2 } from "@pancakeswap/ui-wallets";
import { Button, ButtonProps } from "@pancakeswap/uikit";
import { createWallets, getDocLink } from "../config/wallet";
import { useActiveChainId } from "../hooks/useActiveChainId";
import useAuth from "../hooks/useAuth";
// @ts-ignore
// eslint-disable-next-line import/extensions
import { useActiveHandle } from "../hooks/useEagerConnect.bmp.ts";
import { useMemo, useState } from "react";
import { useConnect } from "wagmi";
import Trans from "./Trans";
import styled from "styled-components";

const ConnectWalletButton = ({ children, ...props }: ButtonProps) => {
  // const CustomButton = styled.button`
  // background-color: #000b1a;
  // cursor: pointer;
  // padding: 20px 53px;
  // border: 1px solid #ffffff;
  // border-radius: 40px;
  // color: #fff;
  // font-size: 16px;

  // &:hover {
  //   background-color: #004bad;
  //   border-color: #004bad;
  //   color: #fff;
  // }
  // `;

  const handleActive = useActiveHandle();
  const { login } = useAuth();
  const {
    t,
    currentLanguage: { code },
  } = useTranslation();
  const { connectAsync } = useConnect();
  const { chainId } = useActiveChainId();
  const [open, setOpen] = useState(false);

  const docLink = useMemo(() => getDocLink(code), [code]);

  const handleClick = () => {
    if (typeof __NEZHA_BRIDGE__ !== "undefined") {
      handleActive();
    } else {
      setOpen(true);
    }
  };

  const wallets = useMemo(
    () => createWallets(chainId, connectAsync),
    [chainId, connectAsync]
  );

  return (
    <>
      <Button onClick={handleClick} {...props}>
        {children || <Trans>Connect Wallet</Trans>}
      </Button>
      <WalletModalV2
        docText={t("Learn How to Connect")}
        docLink={docLink}
        isOpen={open}
        wallets={wallets}
        login={login}
        onDismiss={() => setOpen(false)}
      />
    </>
  );
};

export default ConnectWalletButton;
