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
export declare function ActivityForm({ onSubmit }: ActivityFormProps): import("react/jsx-runtime").JSX.Element;
export {};
