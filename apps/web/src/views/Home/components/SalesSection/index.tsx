import {
  Flex,
  Text,
  Button,
  Link,
  NextLinkFromReactRouter as RouterLink,
  Heading,
} from "@pancakeswap/uikit";
import CompositeImage, { CompositeImageProps } from "../CompositeImage";
// import ColoredWordHeading from "../ColoredWordHeading";
import styled from "styled-components";
import { useState } from "react";
import useTheme from "hooks/useTheme";

interface SalesSectionButton {
  to: string;
  text: string;
  external: boolean;
}

export interface SalesSectionProps {
  headingText: string;
  bodyText: string;
  reverse: boolean;
  primaryButton: SalesSectionButton;
  secondaryButton: SalesSectionButton;
  images: CompositeImageProps;
}

const SalesSection: React.FC<React.PropsWithChildren<SalesSectionProps>> = (
  props
) => {
  const {
    headingText,
    bodyText,
    reverse,
    primaryButton,
    secondaryButton,
    images,
  } = props;

  const { theme } = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const buttonStyle = {
    background: !isHovered ? "#fff" : "#000B1A",
    color: !isHovered ? "#000B1A" : "#fff",
    border: "1px solid #000B1A",
    borderRadius: "40px",
    fontWeight: "normal !important",
    fontSize: "16px",
    padding: "30px 53px",
    transition: "background-color 0.3s, color 0.3s",
    cursor: "pointer",
  };

  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={[
          "column-reverse",
          null,
          null,
          reverse ? "row-reverse" : "row",
        ]}
        alignItems="center"
        justifyContent={["center", null, null, "space-between"]}
      >
        <Flex
          flexDirection="column"
          // flex="1"
          width={["100%", null, null, "50%"]}
          ml={[null, null, null, reverse && "64px"]}
          mr={[null, null, null, !reverse && "64px"]}
          alignSelf="center"
        >
          {/* <ColoredWordHeading text={headingText} /> */}
          <Heading
            color={theme.isDark ? "#f4eeff" : reverse ? "#f4eeff" : "#000B1A"}
            fontWeight="bold"
            scale="xl"
            mb="16px"
          >
            {headingText}
          </Heading>
          <Text
            color={theme.isDark ? "#f4eeff" : reverse ? "#f4eeff" : "#000B1A"}
            mb="24px"
          >
            {bodyText}
          </Text>
          {reverse ? null : (
            <Flex>
              <Button
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                style={buttonStyle}
                mr={["8px", null, null, "60px"]}
              >
                {primaryButton.external ? (
                  <Link external href={primaryButton.to}>
                    <Text color="card" bold fontSize="16px">
                      {primaryButton.text}
                    </Text>
                  </Link>
                ) : (
                  <RouterLink to={primaryButton.to}>
                    <Text color="card" bold fontSize="16px">
                      {primaryButton.text}
                    </Text>
                  </RouterLink>
                )}
              </Button>
              {secondaryButton.external ? (
                <Link
                  style={{
                    background: "#000B1A",
                    color: "#fff",
                    border: "1px solid #000B1A",
                    borderRadius: "40px",
                    fontWeight: "normal",
                    fontSize: "16px",
                    padding: `4px 53px`,
                  }}
                  external
                  href={secondaryButton.to}
                >
                  {secondaryButton.text}
                </Link>
              ) : (
                <RouterLink to={secondaryButton.to}>
                  {secondaryButton.text}
                </RouterLink>
              )}
            </Flex>
          )}
        </Flex>
        <Flex
          maxHeight={["192px", null, null, "400px"]}
          height={["192px", null, null, "300px"]}
          width={["192px", null, null, "400px"]}
          // flex={[null, null, null, "1"]}
          mb={["24px", null, null, "0"]}
        >
          <CompositeImage {...images} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SalesSection;
