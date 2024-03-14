/// <reference types="react" />
export declare function CmeProvider({ publishableKey, children, }: {
    publishableKey: `pk_${string}`;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useCme(): {
    publishableKey: string;
};
