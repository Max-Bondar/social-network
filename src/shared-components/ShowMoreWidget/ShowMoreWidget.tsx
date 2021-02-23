import React, { useEffect, useState } from 'react';
import { Button } from 'shared-components';
import {
  ShowMoreWidgetWrapStyled,
  OptionsListStyled,
  ButtonsWrapStyled,
} from './ShowMoreWidget.styled';

type ShowMoreWidgetPropsT = {
  options?: string[];
  text?: string;
  renderElement?: React.ReactElement;
  maxOptions?: number;
  maxCharacters?: number;
  onClickElement?: (el: string) => void;
};

const ShowMoreWidget: React.FC<ShowMoreWidgetPropsT> = ({
  options = [],
  renderElement = <span></span>,
  maxOptions = 5,
  text = '',
  maxCharacters = 150,
  onClickElement = () => '',
}) => {
  const isText = Boolean(text?.length);
  const initialOptionsToShow = options.slice(0, maxOptions);
  const initialTextToShow = text?.slice(0, maxCharacters);

  const [getText, setText] = useState(initialTextToShow);
  const [getOptions, setOptions] = useState(initialOptionsToShow);
  const [isShowLessVisible, setShowLessVisibility] = useState(false);
  const isDotsVisible =
    text?.length !== getText?.length && text?.length >= maxCharacters;

  const isControlsVisible = (() => {
    if (isText) {
      return text.length >= maxCharacters;
    }

    return options.length >= maxOptions;
  })();

  const handleClickShowMore = () => {
    setShowLessVisibility(!isShowLessVisible);

    if (isText) {
      return setText(text);
    }

    setOptions(options);
  };

  const handleClickShowLess = () => {
    setShowLessVisibility(!isShowLessVisible);

    if (isText) {
      return setText(initialTextToShow);
    }

    setOptions(initialOptionsToShow);
  };

  useEffect(() => {
    setText(initialTextToShow);
  }, [text]);

  const renderControls = () => {
    return (
      isControlsVisible && (
        <ButtonsWrapStyled>
          {!isShowLessVisible ? (
            <Button onClick={handleClickShowMore} modifier="inline">
              Show more
            </Button>
          ) : (
            <Button onClick={handleClickShowLess} modifier="inline">
              Show less
            </Button>
          )}
        </ButtonsWrapStyled>
      )
    );
  };

  return (
    <>
      {isText ? (
        <p>
          {getText}
          {isDotsVisible && '...'} {renderControls()}
        </p>
      ) : (
        <ShowMoreWidgetWrapStyled>
          <OptionsListStyled>
            {getOptions.map((option, index) => {
              return (
                <li key={index}>
                  {React.cloneElement(
                    renderElement,
                    { onClick: () => onClickElement(option) },
                    option
                  )}
                </li>
              );
            })}

            {renderControls()}
          </OptionsListStyled>
        </ShowMoreWidgetWrapStyled>
      )}
    </>
  );
};

export default ShowMoreWidget;
