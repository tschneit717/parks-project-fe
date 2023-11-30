export type FormField = {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    options?: string[];
    value?: string | number | boolean;
    error?: string;
    touched?: boolean;
}