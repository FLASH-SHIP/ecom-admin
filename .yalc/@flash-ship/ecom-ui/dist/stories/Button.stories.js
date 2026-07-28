import { Button } from "../components/button";
const meta = {
    title: "Core/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
        },
        size: {
            control: "select",
            options: ["default", "sm", "lg", "icon"],
        },
        disabled: {
            control: "boolean",
        },
    },
};
export default meta;
export const Default = {
    args: {
        children: "Primary Button",
        variant: "default",
        size: "default",
    },
};
export const Destructive = {
    args: {
        children: "Delete Item",
        variant: "destructive",
    },
};
export const Outline = {
    args: {
        children: "Cancel",
        variant: "outline",
    },
};
export const Small = {
    args: {
        children: "Small Action",
        size: "sm",
    },
};
//# sourceMappingURL=Button.stories.js.map