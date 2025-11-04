import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const BulkActionsToolbar = ({ selectedProducts, onBulkAction, onClearSelection }) => {
  const [showBulkPricing, setShowBulkPricing] = useState(false);
  const [showBulkStock, setShowBulkStock] = useState(false);
  const [bulkPriceAdjustment, setBulkPriceAdjustment] = useState({ type: 'percentage', value: 0 });
  const [bulkStockAdjustment, setBulkStockAdjustment] = useState({ type: 'add', value: 0 });

  const handleBulkPriceUpdate = () => {
    onBulkAction('updatePricing', {
      productIds: selectedProducts,
      adjustment: bulkPriceAdjustment
    });
    setShowBulkPricing(false);
    setBulkPriceAdjustment({ type: 'percentage', value: 0 });
  };

  const handleBulkStockUpdate = () => {
    onBulkAction('updateStock', {
      productIds: selectedProducts,
      adjustment: bulkStockAdjustment
    });
    setShowBulkStock(false);
    setBulkStockAdjustment({ type: 'add', value: 0 });
  };

  if (selectedProducts?.length === 0) return null;

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Icon name="CheckSquare" size={20} className="text-primary" />
            <span className="font-medium text-foreground">
              {selectedProducts?.length} product{selectedProducts?.length !== 1 ? 's' : ''} selected
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              onClick={() => setShowBulkPricing(!showBulkPricing)}
              iconName="DollarSign"
              iconPosition="left"
              iconSize={16}
              className="text-sm"
            >
              Bulk Pricing
            </Button>

            <Button
              variant="outline"
              onClick={() => setShowBulkStock(!showBulkStock)}
              iconName="Package"
              iconPosition="left"
              iconSize={16}
              className="text-sm"
            >
              Bulk Stock
            </Button>

            <Button
              variant="outline"
              onClick={() => onBulkAction('updateAvailability', { productIds: selectedProducts, availability: 'In Season' })}
              iconName="Calendar"
              iconPosition="left"
              iconSize={16}
              className="text-sm"
            >
              Mark In Season
            </Button>

            <Button
              variant="outline"
              onClick={() => onBulkAction('exportSelected', { productIds: selectedProducts })}
              iconName="Download"
              iconPosition="left"
              iconSize={16}
              className="text-sm"
            >
              Export
            </Button>
          </div>
        </div>

        <Button
          variant="ghost"
          onClick={onClearSelection}
          iconName="X"
          iconSize={16}
          className="px-2"
        />
      </div>
      {/* Bulk Pricing Panel */}
      {showBulkPricing && (
        <div className="mt-4 p-4 bg-card border border-border rounded-lg">
          <h3 className="font-medium text-foreground mb-4">Bulk Price Adjustment</h3>
          <div className="flex items-center space-x-4">
            <Select
              options={[
                { value: 'percentage', label: 'Percentage' },
                { value: 'fixed', label: 'Fixed Amount' }
              ]}
              value={bulkPriceAdjustment?.type}
              onChange={(value) => setBulkPriceAdjustment({ ...bulkPriceAdjustment, type: value })}
              className="w-32"
            />

            <div className="flex items-center space-x-2">
              <Select
                options={[
                  { value: 'increase', label: 'Increase by' },
                  { value: 'decrease', label: 'Decrease by' },
                  { value: 'set', label: 'Set to' }
                ]}
                value={bulkPriceAdjustment?.operation || 'increase'}
                onChange={(value) => setBulkPriceAdjustment({ ...bulkPriceAdjustment, operation: value })}
                className="w-32"
              />

              <Input
                type="number"
                placeholder={bulkPriceAdjustment?.type === 'percentage' ? '10' : '5.00'}
                value={bulkPriceAdjustment?.value}
                onChange={(e) => setBulkPriceAdjustment({ ...bulkPriceAdjustment, value: parseFloat(e?.target?.value) || 0 })}
                step={bulkPriceAdjustment?.type === 'percentage' ? '1' : '0.01'}
                className="w-24"
              />

              <span className="text-sm text-muted-foreground">
                {bulkPriceAdjustment?.type === 'percentage' ? '%' : '$'}
              </span>
            </div>

            <Button
              variant="default"
              onClick={handleBulkPriceUpdate}
              iconName="Check"
              iconSize={16}
              className="px-4"
            >
              Apply
            </Button>

            <Button
              variant="ghost"
              onClick={() => setShowBulkPricing(false)}
              iconName="X"
              iconSize={16}
              className="px-2"
            />
          </div>
        </div>
      )}
      {/* Bulk Stock Panel */}
      {showBulkStock && (
        <div className="mt-4 p-4 bg-card border border-border rounded-lg">
          <h3 className="font-medium text-foreground mb-4">Bulk Stock Adjustment</h3>
          <div className="flex items-center space-x-4">
            <Select
              options={[
                { value: 'add', label: 'Add' },
                { value: 'subtract', label: 'Subtract' },
                { value: 'set', label: 'Set to' }
              ]}
              value={bulkStockAdjustment?.type}
              onChange={(value) => setBulkStockAdjustment({ ...bulkStockAdjustment, type: value })}
              className="w-32"
            />

            <Input
              type="number"
              placeholder="10"
              value={bulkStockAdjustment?.value}
              onChange={(e) => setBulkStockAdjustment({ ...bulkStockAdjustment, value: parseInt(e?.target?.value) || 0 })}
              className="w-24"
            />

            <span className="text-sm text-muted-foreground">units</span>

            <Button
              variant="default"
              onClick={handleBulkStockUpdate}
              iconName="Check"
              iconSize={16}
              className="px-4"
            >
              Apply
            </Button>

            <Button
              variant="ghost"
              onClick={() => setShowBulkStock(false)}
              iconName="X"
              iconSize={16}
              className="px-2"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BulkActionsToolbar;