import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/card";
import { Button } from "../components/button";
const meta = {
    title: "Core/Card",
    component: Card,
    tags: ["autodocs"],
};
export default meta;
export const SimpleCard = () => (_jsxs(Card, { className: "w-[350px]", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Customer Overview" }), _jsx(CardDescription, { children: "View latest activity and transaction logs." })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-muted-foreground", children: "Active orders: 12" }) }), _jsxs(CardFooter, { className: "flex justify-between", children: [_jsx(Button, { variant: "outline", children: "Dismiss" }), _jsx(Button, { children: "View Details" })] })] }));
//# sourceMappingURL=Card.stories.js.map