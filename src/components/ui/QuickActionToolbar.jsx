import React, { useState } from 'react';

import Button from './Button';
import Input from './Input';

const QuickActionToolbar = ({ 
  actions = [], 
  searchable = false, 
  searchPlaceholder = "Search...",
  onSearch = null,
  className = "" 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleSearchChange = (e) => {
    const value = e?.target?.value;
    setSearchQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSearchToggle = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (isSearchExpanded) {
      setSearchQuery('');
      if (onSearch) onSearch('');
    }
  };

  return (
    <div className={`flex items-center justify-between bg-card border border-border rounded-lg p-4 shadow-card ${className}`}>
      {/* Primary Actions */}
      <div className="flex items-center space-x-3">
        {actions?.filter(action => action?.primary)?.map((action, index) => (
          <Button
            key={index}
            variant={action?.variant || "default"}
            onClick={action?.onClick}
            iconName={action?.icon}
            iconPosition="left"
            iconSize={18}
            disabled={action?.disabled}
            className="font-body font-medium"
          >
            {action?.label}
          </Button>
        ))}
      </div>
      {/* Search and Secondary Actions */}
      <div className="flex items-center space-x-3">
        {/* Search */}
        {searchable && (
          <div className="flex items-center">
            {isSearchExpanded ? (
              <div className="flex items-center space-x-2">
                <Input
                  type="search"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-64"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  onClick={handleSearchToggle}
                  iconName="X"
                  iconSize={16}
                  className="px-2"
                />
              </div>
            ) : (
              <Button
                variant="outline"
                onClick={handleSearchToggle}
                iconName="Search"
                iconSize={18}
                className="px-3"
              >
                Search
              </Button>
            )}
          </div>
        )}

        {/* Secondary Actions */}
        {actions?.filter(action => !action?.primary)?.map((action, index) => (
          <Button
            key={index}
            variant={action?.variant || "outline"}
            onClick={action?.onClick}
            iconName={action?.icon}
            iconPosition={action?.iconPosition || "left"}
            iconSize={18}
            disabled={action?.disabled}
            className="font-body"
          >
            {action?.label}
          </Button>
        ))}

        {/* More Actions Dropdown */}
        {actions?.some(action => action?.overflow) && (
          <div className="relative">
            <Button
              variant="ghost"
              iconName="MoreVertical"
              iconSize={18}
              className="px-2"
            />
            {/* Dropdown implementation would go here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickActionToolbar;