export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    status?: 'active' | 'soft_deleted';
    username?: string;
    password?: string;
    role?: 'admin' | 'user' | 'delivery' | 'customer' | 'customer-service';
    address?: string;
    userType?: string;

}