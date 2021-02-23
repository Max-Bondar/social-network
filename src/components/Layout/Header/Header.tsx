import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Dropdown,
  Button,
  Popup,
  AvatarStyled,
  Switcher,
} from 'shared-components';
import { ArticleForm } from 'components';
import { ArticleFormValueT } from 'components/Forms/ArticleForm/ArticleForm';
import { useGoToRoute } from 'hooks';
import {
  HeaderStyled,
  MenuStyled,
  InnerContainer,
  LogoIconStyled,
  NavListStyled,
  DropdownListStyled,
} from './Header.styled';
import useHeader from './hooks/useHeader';

type HeaderPropsT = {
  onSwitchTheme: () => void;
};

const Header: React.FC<HeaderPropsT> = ({ onSwitchTheme }) => {
  const { goToProfile } = useGoToRoute();
  const [isArticleFormVisible, setArticleFormVisible] = useState(false);
  const { createArticle, isLoggedIn, name, avatar, setLogoutCtx } = useHeader();

  const handleCreateArticleFormSubmit = (article: ArticleFormValueT) => {
    createArticle({ article });
    setArticleFormVisible(false);
  };

  return (
    <HeaderStyled>
      <InnerContainer hasSidePaddingMobile>
        <Link to="/">
          <LogoIconStyled />
        </Link>
        <MenuStyled>
          <NavListStyled>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>

            {!isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/login">Log in</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Sign up</NavLink>
                </li>
              </>
            ) : (
              <li>
                <Dropdown
                  bodyPosition="right"
                  label={
                    <>
                      <AvatarStyled
                        src={avatar}
                        as="span"
                        width="30px"
                        height="30px"
                        rightIndent="5px"
                      />
                      {name}
                    </>
                  }
                  renderContent={({ closeDropdown }) => (
                    <DropdownListStyled>
                      <li>
                        <Button
                          isFullWidth
                          onClick={() => {
                            goToProfile(name);
                            closeDropdown();
                          }}
                          modifier="outlined"
                        >
                          Profile
                        </Button>
                      </li>
                      <li>
                        <Button
                          isFullWidth
                          onClick={() => {
                            setArticleFormVisible(true);
                            closeDropdown();
                          }}
                          modifier="outlined"
                        >
                          New Article
                        </Button>
                      </li>
                      <li>
                        <Button
                          type="button"
                          isFullWidth
                          onClick={() => {
                            setLogoutCtx();
                            closeDropdown();
                          }}
                          modifier="secondary"
                        >
                          Logout
                        </Button>
                      </li>
                    </DropdownListStyled>
                  )}
                />
              </li>
            )}
            <li>
              <Switcher onClick={onSwitchTheme} />
            </li>
          </NavListStyled>
        </MenuStyled>
      </InnerContainer>

      <Popup
        isOpen={isArticleFormVisible}
        onClose={() => setArticleFormVisible(false)}
      >
        <ArticleForm onSubmit={handleCreateArticleFormSubmit} />
      </Popup>
    </HeaderStyled>
  );
};

export default Header;
