import { Badge } from "../components/badge";
const meta = {
    title: "Core/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "secondary", "destructive", "outline"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        children: "Active Status",
        variant: "default",
    },
};
export const Secondary = {
    args: {
        children: "Draft",
        variant: "secondary",
    },
};
export const Destructive = {
    args: {
        children: "Failed",
        variant: "destructive",
    },
};
//# sourceMappingURL=Badge.stories.js.map