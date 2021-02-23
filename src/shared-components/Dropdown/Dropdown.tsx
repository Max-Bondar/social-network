import React, { useState, useEffect, useRef } from 'react';
import {
  DropdownWrapStyled,
  DropdownBodyStyled,
  DropdownLabelStyled,
} from './Dropdown.styled';

export type DropdownPropsT = {
  children?: React.ReactNode;
  label: React.ReactElement;
  bodyPosition?: 'right' | 'left';
  renderContent?: (props: { closeDropdown: () => void }) => React.ReactElement;
};

const Dropdown: React.FC<DropdownPropsT> = ({
  label,
  children,
  bodyPosition = 'left',
  renderContent,
}) => {
  const [isOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <DropdownWrapStyled ref={dropdownRef}>
      <DropdownLabelStyled onClick={() => setDropdownOpen(!isOpen)}>
        {label}
      </DropdownLabelStyled>
      {isOpen && (
        <DropdownBodyStyled bodyPosition={bodyPosition}>
          {children}
          {renderContent &&
            renderContent({ closeDropdown: () => setDropdownOpen(false) })}
        </DropdownBodyStyled>
      )}
    </DropdownWrapStyled>
  );
};

export default Dropdown;
