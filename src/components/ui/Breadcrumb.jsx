import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Breadcrumb = ({ customItems = null }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const routeMap = {
    '/': { label: 'Dashboard', icon: 'Home' },
    '/customer-management': { label: 'Customers', icon: 'Users' },
    '/product-catalog': { label: 'Products', icon: 'Package' },
    '/invoice-creation': { label: 'Invoices', icon: 'FileText' },
    '/reports-analytics': { label: 'Reports', icon: 'BarChart3' },
    '/settings': { label: 'Settings', icon: 'Settings' },
  };

  const generateBreadcrumbs = () => {
    if (customItems) return customItems;

    const pathSegments = location?.pathname?.split('/')?.filter(Boolean);
    const breadcrumbs = [{ label: 'Dashboard', path: '/', icon: 'Home' }];

    if (pathSegments?.length > 0) {
      let currentPath = '';
      pathSegments?.forEach((segment) => {
        currentPath += `/${segment}`;
        const route = routeMap?.[currentPath];
        if (route) {
          breadcrumbs?.push({
            label: route?.label,
            path: currentPath,
            icon: route?.icon,
          });
        }
      });
    }

    return breadcrumbs?.length > 1 ? breadcrumbs : [];
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs?.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 py-4 text-sm font-body" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs?.map((item, index) => (
          <li key={item?.path} className="flex items-center">
            {index > 0 && (
              <Icon 
                name="ChevronRight" 
                size={14} 
                className="text-muted-foreground mx-2" 
              />
            )}
            
            {index === breadcrumbs?.length - 1 ? (
              <span className="flex items-center text-foreground font-medium">
                <Icon name={item?.icon} size={16} className="mr-2" />
                {item?.label}
              </span>
            ) : (
              <Button
                variant="ghost"
                onClick={() => navigate(item?.path)}
                className="flex items-center px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name={item?.icon} size={16} className="mr-2" />
                {item?.label}
              </Button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;