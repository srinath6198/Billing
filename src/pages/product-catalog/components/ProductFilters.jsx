import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ProductFilters = ({ filters, onFilterChange, onClearFilters, productCount }) => {
  const flowerTypeOptions = [
    { value: '', label: 'All Types' },
    { value: 'Rose', label: 'Roses' },
    { value: 'Tulip', label: 'Tulips' },
    { value: 'Lily', label: 'Lilies' },
    { value: 'Carnation', label: 'Carnations' },
    { value: 'Sunflower', label: 'Sunflowers' },
    { value: 'Orchid', label: 'Orchids' },
    { value: 'Peony', label: 'Peonies' },
    { value: 'Hydrangea', label: 'Hydrangeas' }
  ];

  const seasonOptions = [
    { value: '', label: 'All Seasons' },
    { value: 'Spring', label: 'Spring' },
    { value: 'Summer', label: 'Summer' },
    { value: 'Fall', label: 'Fall' },
    { value: 'Winter', label: 'Winter' },
    { value: 'Year-round', label: 'Year-round' }
  ];

  const availabilityOptions = [
    { value: '', label: 'All Status' },
    { value: 'In Season', label: 'In Season' },
    { value: 'Limited', label: 'Limited' },
    { value: 'Out of Season', label: 'Out of Season' }
  ];

  const stockStatusOptions = [
    { value: '', label: 'All Stock Levels' },
    { value: 'low', label: 'Low Stock (≤10)' },
    { value: 'medium', label: 'Medium Stock (11-50)' },
    { value: 'good', label: 'Good Stock (>50)' }
  ];

  const hasActiveFilters = Object.values(filters)?.some(value => value !== '' && value !== null);

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-primary" />
          <h2 className="text-lg font-heading font-semibold text-foreground">Filter Products</h2>
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            {productCount} products
          </span>
        </div>
        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            iconSize={16}
            className="text-sm"
          >
            Clear All
          </Button>
        )}
      </div>
      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Search */}
        <div className="lg:col-span-2">
          <Input
            type="search"
            placeholder="Search by name or variety..."
            value={filters?.search || ''}
            onChange={(e) => onFilterChange('search', e?.target?.value)}
            className="w-full"
          />
        </div>

        {/* Flower Type */}
        <Select
          options={flowerTypeOptions}
          value={filters?.type || ''}
          onChange={(value) => onFilterChange('type', value)}
          placeholder="Select flower type"
        />

        {/* Season */}
        <Select
          options={seasonOptions}
          value={filters?.season || ''}
          onChange={(value) => onFilterChange('season', value)}
          placeholder="Select season"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Availability */}
        <Select
          options={availabilityOptions}
          value={filters?.availability || ''}
          onChange={(value) => onFilterChange('availability', value)}
          placeholder="Select availability"
        />

        {/* Stock Status */}
        <Select
          options={stockStatusOptions}
          value={filters?.stockStatus || ''}
          onChange={(value) => onFilterChange('stockStatus', value)}
          placeholder="Select stock level"
        />

        {/* Price Range */}
        <div className="flex items-center space-x-2">
          <Input
            type="number"
            placeholder="Min price"
            value={filters?.minPrice || ''}
            onChange={(e) => onFilterChange('minPrice', e?.target?.value)}
            className="w-full"
            step="0.01"
          />
          <span className="text-muted-foreground">-</span>
          <Input
            type="number"
            placeholder="Max price"
            value={filters?.maxPrice || ''}
            onChange={(e) => onFilterChange('maxPrice', e?.target?.value)}
            className="w-full"
            step="0.01"
          />
        </div>

        {/* Sort By */}
        <Select
          options={[
            { value: 'name', label: 'Name A-Z' },
            { value: 'name-desc', label: 'Name Z-A' },
            { value: 'price', label: 'Price Low-High' },
            { value: 'price-desc', label: 'Price High-Low' },
            { value: 'stock', label: 'Stock Low-High' },
            { value: 'stock-desc', label: 'Stock High-Low' }
          ]}
          value={filters?.sortBy || 'name'}
          onChange={(value) => onFilterChange('sortBy', value)}
          placeholder="Sort by"
        />
      </div>
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
          {filters?.search && (
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              Search: "{filters?.search}"
              <button
                onClick={() => onFilterChange('search', '')}
                className="ml-2 hover:text-primary/70"
              >
                <Icon name="X" size={14} />
              </button>
            </span>
          )}
          {filters?.type && (
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              Type: {filters?.type}
              <button
                onClick={() => onFilterChange('type', '')}
                className="ml-2 hover:text-primary/70"
              >
                <Icon name="X" size={14} />
              </button>
            </span>
          )}
          {filters?.season && (
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              Season: {filters?.season}
              <button
                onClick={() => onFilterChange('season', '')}
                className="ml-2 hover:text-primary/70"
              >
                <Icon name="X" size={14} />
              </button>
            </span>
          )}
          {filters?.availability && (
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              Status: {filters?.availability}
              <button
                onClick={() => onFilterChange('availability', '')}
                className="ml-2 hover:text-primary/70"
              >
                <Icon name="X" size={14} />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductFilters;