import { CustomerActivityLogRepository } from "@ecom/features/customer/repositories/CustomerActivityLogRepository";
import { CustomerGroupRepository } from "@ecom/features/customer/repositories/CustomerGroupRepository";
import { CustomerRepository } from "@ecom/features/customer/repositories/CustomerRepository";
import { CustomerActivityService } from "@ecom/features/customer/services/CustomerActivityService";
import { CustomerAuthService } from "@ecom/features/customer/services/CustomerAuthService";
import { CustomerGroupService } from "@ecom/features/customer/services/CustomerGroupService";
import { CustomerService } from "@ecom/features/customer/services/CustomerService";
import { CustomerTokenService } from "@ecom/features/customer/services/CustomerTokenService";
export declare function getCustomerRepository(): CustomerRepository;
export declare function getCustomerActivityLogRepository(): CustomerActivityLogRepository;
export declare function getCustomerGroupRepository(): CustomerGroupRepository;
export declare function getCustomerService(): CustomerService;
export declare function getCustomerAuthService(): CustomerAuthService;
export declare function getCustomerGroupService(): CustomerGroupService;
export declare function getCustomerTokenService(): CustomerTokenService;
export declare function getCustomerActivityService(): CustomerActivityService;
export declare function resetCustomerContainers(): void;
//# sourceMappingURL=CustomerService.d.ts.map