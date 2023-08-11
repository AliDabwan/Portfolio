import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';

function Type() {

  const { t, i18n } = useTranslation(); 

  return (
    <Typewriter
      options={{
        strings: [
          t('dotnet_developer'),
          t('desktop'),
          t('web'),
          t('IT Specialist')
        
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
