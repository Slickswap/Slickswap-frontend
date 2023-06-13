import {
  Heading,
  Flex,
  Text,
  Skeleton,
  ChartIcon,
  CommunityIcon,
  SwapIcon,
} from "@pancakeswap/uikit";
import { useTranslation } from "@pancakeswap/localization";
import useTheme from "hooks/useTheme";
import { formatLocalisedCompactNumber } from "@pancakeswap/utils/formatBalance";
import useSWRImmutable from "swr/immutable";
import IconCard, { IconCardData } from "../IconCard";
import StatCardContent from "./StatCardContent";
import GradientLogo from "../GradientLogoSvg";
import GradientUsersLogo from "../GradientUserLogoSvg";
import styled from "styled-components";

const Stats = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const { data: tvl } = useSWRImmutable("tvl");
  const { data: txCount } = useSWRImmutable("totalTx30Days");
  const { data: addressCount } = useSWRImmutable("addressCount30Days");
  const trades = formatLocalisedCompactNumber(txCount);
  const users = formatLocalisedCompactNumber(addressCount);
  const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : "-";

  const tvlText = t(
    "And those users are now entrusting the platform with over $%tvl% in funds.",
    { tvl: tvlString }
  );
  const [entrusting, inFunds] = tvlText.split(tvlString);

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  };

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  };

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  };

  const CustomCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #004bad;
    width: 100%;
    height: 346px;
    color: #fff;
    padding: 45px 30px;
    margin-bottom: 16px;

    ${({ theme }) => theme.mediaQueries.lg} {
      width: 30%;
    }
  `;

  return (
    <>
      <Flex
        justifyContent="start"
        mb="42px"
        alignItems="start"
        flexDirection="column"
      >
        {/* <GradientLogo height="48" width="48" style={{ marginBottom: "24px" }} /> */}
        <Heading color="#fff" scale="xl" mb="16px">
          {t("Used by millions. Trusted with billion")}
        </Heading>
        {/* <Heading textAlign="center" scale="xl" mb="32px"> */}
        {/*   {t('Trusted with billions.')} */}
        {/* </Heading> */}
        <Text width="75%" color="#fff">
          {t(
            "We offer a wide variety of cryptocurrencies to choose from, including Bitcoin, ethereum, BNB and many more. A intuitive UI lets both new and experienced DeFi users easily interact with our smart contracts"
          )}
          <br />
          {/* {t("all utilizing our smart contracts available on multiple chains.")} */}
        </Text>
        {/*
      <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="textSubtle" mb="20px">
          {entrusting}
          <>{tvl ? <>{tvlString}</> : <Skeleton display="inline-block" height={16} width={70} mt="2px" />}</>
          {inFunds}
        </Text>
      </Flex>
      */}

        {/*
      <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t('Will you join them?')}
      </Text>
      */}

        {/* <Flex flexDirection={['column', null, null, 'row']}> */}
        {/*   <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}> */}
        {/*     <StatCardContent */}
        {/*       headingText={t('%users% users', { users })} */}
        {/*       bodyText={t('in the last 30 days')} */}
        {/*       highlightColor={theme.colors.secondary} */}
        {/*     /> */}
        {/*   </IconCard> */}
        {/*   <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}> */}
        {/*     <StatCardContent */}
        {/*       headingText={t('%trades% trades', { trades })} */}
        {/*       bodyText={t('made in the last 30 days')} */}
        {/*       highlightColor={theme.colors.primary} */}
        {/*     /> */}
        {/*   </IconCard> */}
        {/*   <IconCard {...StakedCardData}> */}
        {/*     <StatCardContent */}
        {/*       headingText={t('$%tvl% staked', { tvl: tvlString })} */}
        {/*       bodyText={t('Total Value Locked')} */}
        {/*       highlightColor={theme.colors.failure} */}
        {/*     /> */}
        {/*   </IconCard> */}
        {/* </Flex> */}
      </Flex>
      <Flex
        justifyContent="space-between"
        flexDirection={["column", null, null, "row"]}
        alignItems="center"
      >
        <CustomCard>
          <GradientUsersLogo
            height="48"
            width="48"
            style={{ marginBottom: "24px" }}
          />

          <Heading
            textAlign="start"
            fontSize="48px"
            width="80%"
            color="#fff"
            scale="xl"
          >
            {t("1.6 million users")}
          </Heading>

          <Text fontSize="24px" color="#fff">
            {t("in the last 30 days")}
          </Text>
        </CustomCard>

        <CustomCard>
          <GradientUsersLogo
            height="48"
            width="48"
            style={{ marginBottom: "24px" }}
          />

          <Heading
            textAlign="start"
            fontSize="48px"
            width="80%"
            color="#fff"
            scale="xl"
          >
            {t("1.6 million users")}
          </Heading>

          <Text fontSize="24px" color="#fff">
            {t("in the last 30 days")}
          </Text>
        </CustomCard>
        <CustomCard>
          <GradientUsersLogo
            height="48"
            width="48"
            style={{ marginBottom: "24px" }}
          />

          <Heading
            textAlign="start"
            fontSize="48px"
            width="80%"
            color="#fff"
            scale="xl"
          >
            {t("1.6 million users")}
          </Heading>

          <Text fontSize="24px" color="#fff">
            {t("in the last 30 days")}
          </Text>
        </CustomCard>
      </Flex>
    </>
  );
};

export default Stats;
