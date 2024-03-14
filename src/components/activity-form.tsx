import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useCreditTypes } from '@/hooks/use-credit-types';

import type { CreditType } from '@/types';

export type ActivityFormValues = {
  name: string;
  description: string;
  location?: string;
  credits: {
    creditTypeId: number;
    amount: number;
  }[];
};

type ActivityFormProps = {
  onSubmit: (values: ActivityFormValues) => void;
};

export function ActivityForm({ onSubmit }: ActivityFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const creditTypeIds = formData.getAll('creditTypeId') as string[];

    // Filter out any empty strings since all inputs are submitted if their
    // associated credit type is not selected
    const amounts = formData.getAll('amount').filter(Boolean) as string[];

    const credits = creditTypeIds.map((creditTypeId, index) => ({
      creditTypeId: Number(creditTypeId),
      amount: Number(amounts[index]),
    }));

    const values = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      location: formData.get('location') as string,
      credits,
    };

    onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div role="group" aria-labelledby="activity-info-heading">
        <div
          className="cme-text-base cme-font-semibold cme-leading-7"
          id="activity-info-heading"
        >
          Activity Information
        </div>
        <p className="cme-mt-1 cme-text-sm cme-leading-6 cme-text-muted-foreground">
          Provide some basic information about the activity.
        </p>

        <div className="cme-mt-10 cme-space-y-8">
          <div className="cme-grid cme-w-full cme-items-center cme-gap-2">
            <Label className="cme-w-fit" htmlFor="name">
              Name
            </Label>
            <Input id="name" />
          </div>
          <div className="cme-grid cme-w-full cme-items-center cme-gap-2">
            <Label className="cme-w-fit" htmlFor="description">
              Description
            </Label>
            <Textarea id="description" />
          </div>
          <div className="cme-grid cme-w-full cme-items-center cme-gap-2">
            <Label className="cme-w-fit" htmlFor="location">
              Location
            </Label>
            <Input id="location" />
          </div>
        </div>
      </div>

      <hr className="cme-my-12" />

      <Credits />

      <div className="cme-mt-8">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

function Credits() {
  const { creditTypes, isLoading, isError } = useCreditTypes();

  if (isLoading) {
    return <p>Loading credit types...</p>;
  }

  if (isError) {
    return <p>Error loading credit types</p>;
  }

  return (
    <div role="group" aria-labelledby="credits-heading">
      <div
        id="credits-heading"
        className="cme-text-base cme-font-semibold cme-leading-7"
      >
        Credits
      </div>
      <p className="cme-mt-1 cme-text-sm cme-leading-6 cme-text-muted-foreground">
        Specify the types and amounts of credits available for this activity.
      </p>
      <div className="cme-mt-10 cme-space-y-6">
        {creditTypes?.map((creditType) => (
          <CreditTypeInput key={creditType.id} creditType={creditType} />
        ))}
      </div>
    </div>
  );
}

function CreditTypeInput({ creditType }: { creditType: CreditType }) {
  return (
    <div className="cme-group cme-overflow-hidden cme-transition cme-rounded-md cme-bg-gray-100 cme-border cme-border-input [&:has(:checked)]:cme-border-foreground/15">
      <div className="cme-flex cme-shrink-0 cme-items-center cme-gap-x-2 cme-rounded-b-md cme-bg-white cme-p-4 cme-transition group-has-[:checked]:cme-shadow-md">
        <Switch
          name="creditTypeId"
          id={creditType.name}
          value={String(creditType.id)}
        />
        <Label
          htmlFor={creditType.name}
          className="cme-text-muted-foreground group-has-[:checked]:cme-text-foreground"
        >
          {creditType.name}
        </Label>
      </div>
      <div className="cme-grid cme-grid-cols-1 cme-grid-rows-[0fr] cme-opacity-0 cme-transition-all group-has-[:checked]:cme-opacity-100 group-has-[:checked]:cme-grid-rows-[1fr]">
        <div className="cme-overflow-hidden">
          <div className="cme-flex cme-items-center cme-gap-x-8 cme-px-4 cme-py-3">
            <p className="cme-text-sm cme-font-medium cme-leading-6">
              Credit Amounts
            </p>
            <div className="cme-flex cme-items-center cme-gap-x-1.5">
              <Input
                name="amount"
                id={`amount-${creditType.id}`}
                className="cme-w-24"
              />
              <Label
                htmlFor={`amount-${creditType.id}`}
                className="cme-text-foreground/75"
              >
                Minimum
              </Label>
            </div>
            <div className="cme-flex cme-items-center cme-gap-x-1.5">
              <Input
                name="maximum"
                id={`maximum-${creditType.id}`}
                className="cme-w-24"
              />
              <Label
                htmlFor={`maximum-${creditType.id}`}
                className="cme-text-foreground/75"
              >
                Maximum
              </Label>
            </div>
            <div className="cme-flex cme-items-center cme-gap-x-1.5">
              <Input
                name="increment"
                id={`increment-${creditType.id}`}
                className="cme-w-24"
              />
              <Label
                htmlFor={`increment-${creditType.id}`}
                className="cme-text-foreground/75"
              >
                Increment
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
