import { useState, useEffect } from 'react';
import { PasswordSecurityLevelE } from 'libs/declarations-ts';

export const usePasswordSecurity = (password: string) => {
  const [passwordSecurityLevel, setPasswordSecurityLevel] = useState<
    PasswordSecurityLevelE
  >(PasswordSecurityLevelE.WEAK);

  const validatePassword = () => {
    const validCases = [
      '[ !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~]', // Special characters
      '[A-Z]', // Uppercase letters
      '[a-z]', // Lowercase letters
      '[0-9]', // Numeric digits
    ];

    const filteredValidCases = validCases.filter(regExpCase =>
      new RegExp(regExpCase).test(password)
    );

    // Week: used only one type chars or password length less then 8 chars
    if (filteredValidCases.length === 1 || password.length < 8) {
      return setPasswordSecurityLevel(PasswordSecurityLevelE.WEAK);
    }

    // Medium: used 2 and more types of chars but less then all valid cases
    if (
      filteredValidCases.length > 1 &&
      filteredValidCases.length < validCases.length
    ) {
      return setPasswordSecurityLevel(PasswordSecurityLevelE.MEDIUM);
    }

    // Strong
    setPasswordSecurityLevel(PasswordSecurityLevelE.STRONG);
  };

  useEffect(() => {
    validatePassword();
  }, [password]);

  return {
    passwordSecurityLevel,
    validatePassword,
  };
};
