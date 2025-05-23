import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement, ReactNode } from 'react';
import { I18nextProvider } from './i18n-provider';
import { QueryClientProvider } from './query-provider';
import { MemoryRouterProvider } from './router-provider';

// Add additional providers here as needed (auth, theme, etc.)
const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MemoryRouterProvider>
      <QueryClientProvider>
        <I18nextProvider>{children}</I18nextProvider>
      </QueryClientProvider>
    </MemoryRouterProvider>
  );
};

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string;
  routerOptions?: {
    initialEntries?: string[];
  };
}

/**
 * Custom render function that wraps the component with all providers
 */
const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  const route = options?.route || '/';
  const routerOptions = options?.routerOptions || { initialEntries: [route] };

  return {
    user: userEvent.setup(),
    ...render(ui, {
      wrapper: ({ children }) => (
        <MemoryRouterProvider routerOptions={routerOptions}>
          <QueryClientProvider>
            <I18nextProvider>{children}</I18nextProvider>
          </QueryClientProvider>
        </MemoryRouterProvider>
      ),
      ...options,
    }),
  };
};

// Re-export everything from testing-library
export * from '@testing-library/react';

// Override the render method
export { customRender as render };
