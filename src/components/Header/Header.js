import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { FAMILIES, QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <MobileLayout>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileLayout>

      <DesktopLayout>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <MainHeader>
          <Logo />
        </MainHeader>
        <SecondaryActionGroupWrapper>
          <SecondaryActionGroup>
            <SubscribeButton>Subcribe</SubscribeButton>
            <Link href="http://onet.pl">Already a subscriber?</Link>
          </SecondaryActionGroup>
        </SecondaryActionGroupWrapper>
      </DesktopLayout>
    </header>
  );
};

const MobileLayout = styled.div`
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  @media ${QUERIES.desktopAndUp} {
    align-self: center;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 42px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.desktopAndUp} {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const DesktopLayout = styled(MaxWidthWrapper)`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin-bottom: 83px;
    margin-top: 12px;
  }
`;

const SecondaryActionGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const SecondaryActionGroup = styled.div`
  text-align: center;
`;

const Link = styled.a`
  font: 0.875rem/1.7 ${FAMILIES.serif};
  font-style: italic;
  text-decoration: underline;
`;

const SubscribeButton = styled(Button)`
  margin-bottom: 5px;
`;

export default Header;
