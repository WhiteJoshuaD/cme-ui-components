import useSWRImmutable from 'swr/immutable';

import { useCme } from '@/components/cme-provider';
import { ky } from '@/lib/ky';

import type { CreditType } from '@/types';

async function fetchCreditTypes(publishableKey: string) {
  const data = await ky
    .get('credit-types', {
      headers: {
        Authorization: `Bearer ${publishableKey}`,
      },
    })
    .json<{ data: CreditType[] }>();

  return data.data;
}

export function useCreditTypes() {
  const { publishableKey } = useCme();

  if (!publishableKey) {
    throw new Error(
      'CME publishable key is missing. Did you provide it in your CmeProvider?',
    );
  }

  const { data, error, isLoading } = useSWRImmutable(['creditTypes'], () =>
    fetchCreditTypes(publishableKey),
  );

  return {
    creditTypes: data,
    isLoading,
    isError: error,
  };
}
