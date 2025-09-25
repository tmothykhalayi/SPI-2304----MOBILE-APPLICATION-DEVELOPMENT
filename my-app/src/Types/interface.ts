export interface Extension {
    id: string;
    name: string;
    description: string;
    icon: string;
    isActive: boolean;
    category: 'development' | 'productivity' | 'design' | 'utility' | 'social';
}

export  type Filter ='All' |'Active' | 'Inactive' ;

export type Theme = 'dark' | 'light' ;
export interface Interface {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}