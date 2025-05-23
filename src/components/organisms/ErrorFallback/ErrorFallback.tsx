import { Button } from '@components/atoms/Button/Button';
import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <div className="mb-6 text-5xl">
        <span role="img" aria-label="Error icon">
          ⚠️
        </span>
      </div>

      <h1 className="mb-2 text-2xl font-bold">{t('errors.general')}</h1>

      <p className="mb-6 max-w-md text-muted-foreground">
        {error.message || t('errors.tryAgain')}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button onClick={resetErrorBoundary} variant="primary">
          {t('common.retry')}
        </Button>

        <Button onClick={() => (window.location.href = '/')} variant="outline">
          {t('navigation.home')}
        </Button>
      </div>

      {process.env.NODE_ENV !== 'production' && (
        <div className="mt-8 max-w-2xl overflow-auto rounded-lg bg-card p-4 text-left">
          <p className="font-mono text-sm">{error.stack}</p>
        </div>
      )}
    </div>
  );
};
