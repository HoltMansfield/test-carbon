import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' // Subha please remove this when you convert to carbon
import { ErrorBoundary } from '../core/error-boundary/ErrorBoundary'
import { ProvideLanguageTranslations } from '../core/provide-language-translations/ProvideLanguageTranslations'
import { useSentry } from 'hooks/core/use-sentry/useSentry'
import { useGlobalStyle } from 'hooks/core/use-global-style/useGlobalStyle'
import { useLanguageImporter } from 'hooks/core/use-language-importer/useLanguageImporter'
import { App } from './App'
import { Overlay } from 'components/core/overlay/Overlay'
import { Spinner } from 'components/core/spinner/Spinner'


export function FoundationApp () {
  const { languageState } = useLanguageImporter()
  const { createGlobalStyleComponent } = useGlobalStyle()
  const { initializeSentry, captureException } = useSentry()
  const GlobalStyle = createGlobalStyleComponent()

  useEffect(() => {
    initializeSentry()
  },[initializeSentry])

  return (
    <ProvideLanguageTranslations selectedLanguage={languageState.loadedLanguage} messages={languageState.messages}>
      <ErrorBoundary captureException={captureException}>
        <BrowserRouter>
          <Spinner />
          <Overlay />
          <ToastContainer />
          <GlobalStyle />
          <App/>
        </BrowserRouter>
      </ErrorBoundary>
    </ProvideLanguageTranslations>
  )
}
